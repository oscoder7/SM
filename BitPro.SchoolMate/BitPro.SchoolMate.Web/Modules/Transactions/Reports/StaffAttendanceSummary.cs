
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

    [Report, RequiredPermission("Transactions:StaffAttendanceSummary")]
    [Category("Transactions/StaffAttendanceSummary"), DisplayName("Staff  Attendance Summary")]
    [ReportDesign(MVC.Views.Transactions.Reports.StaffAttendanceSummary)]
    public class StaffAttendanceSummary : IReport, ICustomizeHtmlToPdf
    {



        [DisplayName("StartDate"), Required(true)]
        public DateTime? StartDate { get; set; }

        [DisplayName("End Date"), Required(true)]
        public DateTime? EndDate { get; set; }
        public object GetData()
        {
            var data = new StaffAttendanceSummaryReporViewtData();
            data.aboutreport = new AboutReport();
            using (var connection = SqlConnections.NewFor<Entities.AttandanceRow>())
            {
                int userid = 0;
                int.TryParse(Authorization.UserId, out userid);
                var sql = "select max(s.StaffName+'('+s.Code+')') as TeacherName,SUM(CASE WHEN a.Status = 1 THEN 1 ELSE 0 END) as TotalAbsente,SUM(CASE WHEN a.Status = 2 THEN 1 ELSE 0 END) as TotalPresent,MAX(S.DailyWage) AS DailyWage,SUM(CASE WHEN a.Status = 2 THEN 1 ELSE 0 END)*MAX(S.DailyWage) AS TotalWage from Attandance a inner join Staffs s on s.Id=a.StaffId where  a.Date>="+StartDate.ToSqlDate()+ " and a.Date<=" + EndDate.ToSqlDate() + " and s.TenantId=(select TenantId from Users where userid=" + userid + ")  group by StaffId";
                var value = connection.Query<Item>(sql);
                data.Details = value.ToList();
                data.aboutreport.TotalAmount = data.Details.Sum(i => i.TotalWage);
            }
            
            data.aboutreport.FromDate = StartDate.Value;
            data.aboutreport.ToDate = StartDate.Value;
            
            return data;
        }
        public object GetDataForExel()
        {
            using (var connection = SqlConnections.NewFor<Entities.FeeCollectionRow>())
            {
                int userid = 0;
                int.TryParse(Authorization.UserId, out userid);
                var sql = "select max(s.StaffName+'('+s.Code+')') as TeacherName,SUM(CASE WHEN a.Status = 1 THEN 1 ELSE 0 END) as TotalAbsente,SUM(CASE WHEN a.Status = 2 THEN 1 ELSE 0 END) as TotalPresent,MAX(S.DailyWage) AS DailyWage,SUM(CASE WHEN a.Status = 2 THEN 1 ELSE 0 END)*MAX(S.DailyWage) AS TotalWage from Attandance a inner join Staffs s on s.Id=a.StaffId where  s.Date>=" + StartDate.ToSqlDate() + " and s.Date<=" + EndDate.ToSqlDate() + "  group by StaffId";
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
            public string TeacherName { get; set; }
            public int TotalAbsente { get; set; }
            public int TotalPresent { get; set; }
            public decimal DailyWage { get; set; }
            public decimal TotalWage { get; set; }




        }
        public class AboutReport
        {
            public DateTime FromDate { get; set; }
            public DateTime ToDate { get; set; }
            public string ReportType { get; set; }
            public decimal TotalAmount { get; set; }
        }
        public class StaffAttendanceSummaryReporViewtData
        {


            public List<Item> Details { get; set; }
            public AboutReport aboutreport { get; set; }

        }



    }
}
