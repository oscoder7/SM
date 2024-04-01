
namespace BitPro.SchoolMate.Transactions.Pages
{

    using Entities;
    using OfficeOpenXml.FormulaParsing.Excel.Functions.Information;
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
    using static MVC.Views.Administration;
    using static MVC.Views.Master;

    [Report, RequiredPermission("Accounts:TrialBalance")]
    [Category("Accounts/TrialBalance"), DisplayName("Trial Balance")]
    [ReportDesign(MVC.Views.Transactions.Reports.TrialBalance)]
    public class TrialBalanceReport : IReport
    {

        [DisplayName("As Date"), Required(true)]
        public DateTime? StartDate { get; set; }

        public object GetData()
        {
            var data = new TrialBalanceViewtData();
            using (var connection = SqlConnections.NewFor<Accounts.Entities.AccountsRow>())
            {
                int UserID = 0;
                int.TryParse(Authorization.UserId, out UserID);
                var sql = $@"select TB.AccountHead,TB.SubAccount,sum(TB.DebitAmount)as TotalDebitAmount,sum(TB.CreditAmount) as TotalCreditAmount,grouping_id(TB.AccountHead,TB.SubAccount) as GroupingID  from 
(select dah.Description as AccountHead , case
 when A.AccountNo is not null then A.AccountNo  else C.Name end as SubAccount, je.Amount as DebitAmount,0 CreditAmount, 'DR' as ACSign from JournalEntries je 
inner join  AccountHeads dah on dah.Id = je.DebitAccountHeadId and dah.TenantId = je.TenantId and je.TrxDate <= {StartDate.ToSqlDate()}
left outer join Accounts A on A.Id = je.DebitAccountId and A.TenantId = je.TenantId 
left outer join Contacts C on C.Id = je.ContactId and C.TenantId = je.TenantId
inner join Users U on U.TenantId = je.TenantId   and U.UserId = {UserID}
union all
select cah.Description as AccountHead, case
 when A.AccountNo is not null then A.AccountNo  else C.Name end as SubAccount,0 DebitAmount,je.Amount as CreditAmount,'CR' as ACSign from JournalEntries je
inner join AccountHeads cah on cah.Id = je.CreditAccountHeadId and cah.TenantId = je.TenantId and je.TrxDate <= {StartDate.ToSqlDate()}
left outer join Accounts A on A.Id = je.CreditAccountId and A.TenantId = je.TenantId 
left outer join Contacts C on C.Id = je.ContactId and C.TenantId = je.TenantId
inner join Users U on U.TenantId = je.TenantId  and U.UserId =  {UserID}
) TB group by  rollup(TB.AccountHead,TB.SubAccount)";
 

  
                //sql = "SELECT JournalEntries.Id,TrxDate,VNo,VType,CASE WHEN  VType = 1 THEN 'Receipt' WHEN VType = 2 THEN 'Payment'  WHEN VType = 3 THEN 'Contra' END AS VoucherType,Amount as CreditAmount,0 as DebitAmount, acd.Description as DebitLedger,acc.Description AS CreditLedger,0 as Balance FROM JournalEntries inner join AccountHeads acd on acd.Id = DebitAccountHeadId inner join AccountHeads acc on acc.Id = CreditAccountHeadId where CreditAccountId = 2 and TrxDate>='20200301' and TrxDate<='20200331' and JournalEntries.TenantId=(select TenantId from Users where userid = 2) union SELECT JournalEntries.Id,TrxDate,VNo,VType,CASE WHEN VType = 1 THEN 'Receipt' WHEN VType = 2 THEN 'Payment' WHEN VType = 3 THEN 'Contra' END AS VoucherType,0 as CreditAmount,Amount as DebitAmount, acd.Description as DebitLedger,acc.Description AS CreditLedger,0 as Balance FROM JournalEntries inner join AccountHeads acd on acd.Id = DebitAccountHeadId inner join AccountHeads acc on acc.Id = CreditAccountHeadId where DebitAccountId = 2 and TrxDate>='20200301' and TrxDate<='20200331' and JournalEntries.TenantId=(select TenantId from Users where userid = 2) order by Id";
                var value = connection.Query<Item>(sql);
                data.Details = value.ToList();
            }
            data.aboutreport = new AboutReport();
            data.aboutreport.TotalDebit = data.Details.Sum(i => i.TotalDebitAmount);
            data.aboutreport.TotalCredit = data.Details.Sum(i => i.TotalCreditAmount);

            data.aboutreport.AsDate = StartDate.Value;


            return data;
        }
        public object GetDataForExel()
        {
            using (var connection = SqlConnections.NewFor<Entities.FeeCollectionRow>())
            {
                int UserID = 0;
                int.TryParse(Authorization.UserId, out UserID);
                var sql = $@"select TB.AccountHead,TB.SubAccount,sum(TB.DebitAmount)as TotalDebitAmount,sum(TB.CreditAmount) as TotalCreditAmount,grouping_id(TB.AccountHead,TB.SubAccount) as GroupingID  from 
(select dah.Description as AccountHead,case
 when A.AccountNo is not null then A.AccountNo  else C.Name end as SubAccount, je.Amount as DebitAmount,0 CreditAmount, 'DR' as ACSign from JournalEntries je 
inner join  AccountHeads dah on dah.Id = je.DebitAccountHeadId and dah.TenantId = je.TenantId and je.TrxDate <= {StartDate.ToSqlDate()}
left outer join Accounts A on A.Id = je.DebitAccountId and A.TenantId = je.TenantId 
left outer join Contacts C on C.Id = COALESCE(je.ContactId,31) and C.TenantId = je.TenantId
inner join Users U on U.TenantId = je.TenantId   and U.UserId = {UserID}
union all
select cah.Description as AccountHead, case
 when A.AccountNo is not null then A.AccountNo  else C.Name end as SubAccount,0 DebitAmount,je.Amount as CreditAmount,'CR' as ACSign from JournalEntries je
inner join AccountHeads cah on cah.Id = je.CreditAccountHeadId and cah.TenantId = je.TenantId and je.TrxDate <= {StartDate.ToSqlDate()}
left outer join Accounts A on A.Id = je.CreditAccountId and A.TenantId = je.TenantId 
left outer join Contacts C on C.Id = COALESCE(je.ContactId,31) and C.TenantId = je.TenantId
inner join Users U on U.TenantId = je.TenantId  and U.UserId =  {UserID}
) TB group by   rollup(TB.AccountHead,TB.SubAccount)";
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
            public string AccountHead { get; set; }
            public string SubAccount { get; set; }

            public decimal GroupingID { get; set; }

            public decimal TotalDebitAmount { get; set; }
            public decimal TotalCreditAmount { get; set; }





        }
        public class AboutReport
        {
            public DateTime AsDate { get; set; }
            public decimal TotalDebit { get; set; }
            public decimal TotalCredit { get; set; }
        }
        public class TrialBalanceViewtData
        {


            public List<Item> Details { get; set; }
            public AboutReport aboutreport { get; set; }

        }



    }
}
