
namespace BitPro.SchoolMate.Transactions.Pages
{

    using Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using Serenity.Reporting;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Drawing;
    using System.Linq;

    [Report, RequiredPermission("Accounts:AccountStatement")]
    [Category("Accounts/AccountStatementReport"), DisplayName("Account Statement")]
    [ReportDesign(MVC.Views.Transactions.Reports.AccountStatements)]
    public class AccountStatementReport : IReport, ICustomizeHtmlToPdf
    {

        [LookupEditor(typeof(Accounts.Entities.AccountsRow))]
        [DisplayName("Account"), Required(true)]
        public Int32? Account { get; set; }
        [DisplayName("From Date"),Required(true)]
        public DateTime? StartDate { get; set; }
        [DisplayName("To Date"), Required(true)]
        public DateTime? EndDate { get; set; }
        [DisplayName("Include Opening"),DefaultValue(true)]
        public Boolean? Openinig { get; set; }

        public object GetData()
        {
            var data = new AccountStatementViewtData();
            using (var connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>())
            {
                int userid = 0;
                int.TryParse(Authorization.UserId, out userid);
                var sql = "";
                if (Openinig ?? false)
                {
                    sql = "select getdate()-10000 as TrxDateAc,0 as Id,'Opening' as TrxDate,0 as VNo,0 as VType,'' VoucherType,sum(case when CreditAccountId=1 then Amount else 0 end) as CreditAmount,sum(case when DebitAccountId=1 then Amount else 0 end) as DebitAmount,'' as GL,'' as Remarks,0 as Balance   from JournalEntries where (DebitAccountId = " + Account + " or CreditAccountId = " + Account+") and TrxDate<"+StartDate.ToSqlDate()+ " and JournalEntries.TenantId=(select TenantId from Users where userid = " + userid +") union all ";
                }
                sql =sql+ @"SELECT TrxDate as TrxDateAc,JournalEntries.Id,convert(varchar, TrxDate, 103) as TrxDate,VNo,VType,
CASE
    WHEN  VType = 1 THEN 'Receipt'
     WHEN VType = 2 THEN 'Payment'

      WHEN VType = 3 THEN 'Contra'
END AS VoucherType,Amount as CreditAmount,0 as DebitAmount,'By '+ acd.Description AS GL,Remarks as Remarks,0 as Balance
FROM JournalEntries inner join AccountHeads acd on acd.Id = DebitAccountHeadId inner join AccountHeads acc on acc.Id = CreditAccountHeadId
where CreditAccountId = " + Account + @" and TrxDate>="+StartDate.ToSqlDate()+@" and TrxDate<=" + EndDate.ToSqlDate() + @" and JournalEntries.TenantId=(select TenantId from Users where userid = " + userid + @")
union all
SELECT TrxDate as TrxDateAc,JournalEntries.Id,convert(varchar, TrxDate, 103) as TrxDate,VNo,VType,
CASE
    WHEN VType = 1 THEN 'Receipt'
     WHEN VType = 2 THEN 'Payment'

      WHEN VType = 3 THEN 'Contra'
END AS VoucherType,0 as CreditAmount,Amount as DebitAmount,'To '+ acc.Description AS GL,Remarks as Remarks,0 as Balance
FROM JournalEntries inner join AccountHeads acd on acd.Id = DebitAccountHeadId inner join AccountHeads acc on acc.Id = CreditAccountHeadId
where DebitAccountId = " + Account + @" and TrxDate>=" + StartDate.ToSqlDate() + @" and TrxDate<=" + EndDate.ToSqlDate() + @" and JournalEntries.TenantId=(select TenantId from Users where userid = " + userid + @") order by Id";
                //sql = "SELECT JournalEntries.Id,TrxDate,VNo,VType,CASE WHEN  VType = 1 THEN 'Receipt' WHEN VType = 2 THEN 'Payment'  WHEN VType = 3 THEN 'Contra' END AS VoucherType,Amount as CreditAmount,0 as DebitAmount, acd.Description as DebitLedger,acc.Description AS CreditLedger,0 as Balance FROM JournalEntries inner join AccountHeads acd on acd.Id = DebitAccountHeadId inner join AccountHeads acc on acc.Id = CreditAccountHeadId where CreditAccountId = 2 and TrxDate>='20200301' and TrxDate<='20200331' and JournalEntries.TenantId=(select TenantId from Users where userid = 2) union SELECT JournalEntries.Id,TrxDate,VNo,VType,CASE WHEN VType = 1 THEN 'Receipt' WHEN VType = 2 THEN 'Payment' WHEN VType = 3 THEN 'Contra' END AS VoucherType,0 as CreditAmount,Amount as DebitAmount, acd.Description as DebitLedger,acc.Description AS CreditLedger,0 as Balance FROM JournalEntries inner join AccountHeads acd on acd.Id = DebitAccountHeadId inner join AccountHeads acc on acc.Id = CreditAccountHeadId where DebitAccountId = 2 and TrxDate>='20200301' and TrxDate<='20200331' and JournalEntries.TenantId=(select TenantId from Users where userid = 2) order by Id";
                var value = connection.Query<Item>(sql);
                value = value.OrderBy(I => I.TrxDateAc);
                decimal bal = 0;
                foreach(var item in value)
                {
                    item.Balance = bal=bal + (item.DebitAmount - item.CreditAmount);
                }
                data.Details = value.ToList();


            }
            data.aboutreport = new AboutReport();
            data.aboutreport.TotalDebit= data.Details.Sum(i => i.DebitAmount);
            data.aboutreport.TotalCredit = data.Details.Sum(i => i.CreditAmount);
        
            data.aboutreport.FromDate = StartDate.Value;
            data.aboutreport.ToDate = EndDate.Value;
            using (var connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>())
            {
                var q2 = "select * from Accounts where id="+Account+"";
                var value = connection.Query<Accounts.Entities.AccountsRow>(q2);
                foreach(var r in value)
                {
                    data.aboutreport.AccountNo = r.AccountNo;
                }
            }   
            return data;
        }
        public object GetDataForExel()
        {
            using (var connection = SqlConnections.NewFor<Entities.FeeCollectionRow>())
            {
                int userid = 0;
                int.TryParse(Authorization.UserId, out userid);
                var sql = "SELECT  Date as Date,  COUNT(CASE WHEN Status = 1 and StudentId is not null THEN 1 ELSE NULL END) as AbsentStudents, COUNT(CASE WHEN Status = 2 and StudentId is not null THEN 1 ELSE NULL END) as PresentStudents,COUNT(CASE WHEN Status = 3 and StudentId is not null THEN 1 ELSE NULL END) as HolidayStudents,COUNT(CASE WHEN Status = 1 and StaffId is not null THEN 1 ELSE NULL END) as AbsentStaffs,COUNT(CASE WHEN Status = 2 and StaffId is not null THEN 1 ELSE NULL END) as PresentStaffs,COUNT(CASE WHEN Status = 3 and StaffId is not null THEN 1 ELSE NULL END) as HolidayStaffs FROM Attandance where date>= " + StartDate.ToSqlDate() + " and date <= " + EndDate.ToSqlDate() + " and TenantId=(select TenantId from Users where userid=" + userid + ") GROUP BY date";
                var value = connection.Query<Item>(sql);

                return sql;
            }
        }
        public List<ReportColumn> GetColumnList()
        {
            var data = ReportColumnConverter.ObjectTypeToList(typeof(Item));
            return data;
        }
        public void Customize(IHtmlToPdfOptions options)
        {

            options.Landscape = false;

        }
        [BasedOnRow(typeof(Transactions.Entities.FeeCollectionRow))]
        public class Item
        {
            public int Id { get; set; }
            public string TrxDate { get; set; }
            public int VNo { get; set; }
            public int VType { get; set; }
            public string VoucherType { get; set; }
            public decimal CreditAmount { get; set; }
            public decimal DebitAmount { get; set; }
            public string GL { get; set; }
            public string Remarks { get; set; }
            public decimal Balance { get; set; }
            public DateTime TrxDateAc { get; set; }

        }
        public class AboutReport
        {
            public DateTime FromDate { get; set; }
            public DateTime ToDate { get; set; }
            public string AccountNo { get; set; }
            public decimal TotalDebit { get; set; }
            public string ReportType { get; set; }
            public decimal TotalCredit { get; set; }
        }
        public class AccountStatementViewtData
        {


            public List<Item> Details { get; set; }
            public AboutReport aboutreport { get; set; }

        }



    }
}
