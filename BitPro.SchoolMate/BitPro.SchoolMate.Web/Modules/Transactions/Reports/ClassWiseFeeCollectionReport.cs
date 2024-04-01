
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

    [Report, RequiredPermission("Transactions:ClassWiseFeeCollection")]
    [Category("FeeCollection/ClassWiseFeeCollection"), DisplayName("Class Wise FeeCollection")]
    [ReportDesign(MVC.Views.Transactions.Reports.ClassWiseFeeCollection)]
    public class ClassWiseFeeCollectionReport : IReport, ICustomizeHtmlToPdf
    {



        [DisplayName("From Date"),Required(true)]
        public DateTime? StartDate { get; set; }

        [DisplayName("To Date"), Required(true)]
        public DateTime? EndDate { get; set; }

        public object GetData()
        {
            var data = new ClassWiseFeeCollectionReporViewtData();
            using (var connection = SqlConnections.NewFor<Entities.FeeCollectionRow>())
            {
                int userid = 0;
                int.TryParse(Authorization.UserId, out userid);

                var sql = "select max(a.PayDate) as Date,max(c.CourseName) as Class,count(*) PaidStudents,sum(a.TotalAmount) as TotalCollectedAmount from FeeCollection a inner join PromotionDetails pd on pd.Id=a.PromotionDetailId inner join Promotions p on p.Id=Pd.PromotionId inner join Courses c on c.Id=p.ToCourse where  a.TenantId=(select TenantId from Users where userid="+userid+") and a.PayDate>="+StartDate.ToSqlDate()+" and a.PayDate<="+EndDate.ToSqlDate()+"  group By p.ToCourse,a.PayDate";
                var value = connection.Query<Item>(sql);
                data.Details = value.ToList();
            }
            var totalcollected = data.Details.Sum(i => i.TotalCollectedAmount);
            data.aboutreport = new AboutReport();
            data.aboutreport.FromDate = StartDate.Value;
            data.aboutreport.ToDate = EndDate.Value;
            data.aboutreport.totalcollect = totalcollected;
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
            public DateTime Date { get; set; }
            public string Class { get; set; }
            public int PaidStudents { get; set; }
            public decimal TotalCollectedAmount { get; set; }
           



        }
        public class AboutReport
        {
            public DateTime FromDate { get; set; }
            public DateTime ToDate { get; set; }
            public string ReportType { get; set; }
            public decimal totalcollect { get; set; }
        }
        public class ClassWiseFeeCollectionReporViewtData
        {


            public List<Item> Details { get; set; }
            public AboutReport aboutreport { get; set; }

        }



    }
}
