
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

    [Report, RequiredPermission("Transactions:ClassWiseAttendance")]
    [Category("Transactions/ClassWiseAttendance"), DisplayName("Class Wise Attendance")]
    [ReportDesign(MVC.Views.Transactions.Reports.ClassWiseAttendanceReport)]
    public class ClassWiseAttendanceReport : IReport, ICustomizeHtmlToPdf
    {



        [DisplayName("Date"), Required(true)]
        public DateTime? StartDate { get; set; }


        public object GetData()
        {
            var data = new ClassWiseAttendanceReporViewtData();
            using (var connection = SqlConnections.NewFor<Entities.FeeCollectionRow>())
            {
                int userid = 0;
                int.TryParse(Authorization.UserId, out userid);
                var sql = "select   max(c.Code) as Class,COUNT(CASE WHEN Status = 1 and a.PromotionDetailId is not null THEN 1 ELSE NULL END) as Absent, COUNT(CASE WHEN Status = 2 and a.PromotionDetailId is not null THEN 1 ELSE NULL END) as Present,COUNT(CASE WHEN Status = 3 and a.PromotionDetailId is not null THEN 1 ELSE NULL END) as Holiday,count(*) as Total  from Attandance a inner join PromotionDetails pd on pd.Id=a.PromotionDetailId inner join Promotions p on p.Id=Pd.PromotionId inner join Courses c on c.Id=p.ToCourse where  a.TenantId=(select TenantId from Users where userid=" + userid + ") and a.Date=" + StartDate.ToSqlDate() + " AND pd.IsCompleted=0 group By p.ToCourse,a.Date union select case when s.IsTeacher = 1 then  'TeachingStaffs' else 'NonteachingStaffs' end as Class,COUNT(CASE WHEN Status = 1 and a.StaffId is not null THEN 1 ELSE NULL END) as Absent, COUNT(CASE WHEN Status = 2 and a.StaffId is not null THEN 1 ELSE NULL END) as Present,COUNT(CASE WHEN Status = 3 and a.StaffId is not null THEN 1 ELSE NULL END) as Holiday,count(*) as Total from Attandance a inner join Staffs s on a.StaffId = s.Id where  a.TenantId=(select TenantId from Users where userid=" + userid + ") and a.Date = " + StartDate.ToSqlDate()+" group By s.IsTeacher,a.Date";
                var value = connection.Query<Item>(sql);
                data.Details = value.ToList();
            }
            data.aboutreport = new AboutReport();
            data.aboutreport.FromDate = StartDate.Value;
            return data;
        }
        public object GetDataForExel()
        {
            using (var connection = SqlConnections.NewFor<Entities.FeeCollectionRow>())
            {
                int userid = 0;
                int.TryParse(Authorization.UserId, out userid);
                var sql = "select   max(c.Code) as Class,COUNT(CASE WHEN Status = 1 and a.StudentId is not null THEN 1 ELSE NULL END) as Absent, COUNT(CASE WHEN Status = 2 and a.StudentId is not null THEN 1 ELSE NULL END) as Present,COUNT(CASE WHEN Status = 3 and a.StudentId is not null THEN 1 ELSE NULL END) as Holiday,count(*) as Total  from Attandance a inner join PromotionDetails pd on pd.StudentId=a.StudentId inner join Promotions p on p.Id=Pd.PromotionId inner join Courses c on c.Id=p.ToCourse where  a.TenantId=(select TenantId from Users where userid=" + userid + ") and a.Date=" + StartDate.ToSqlDate() + " AND pd.IsCompleted=0 group By p.ToCourse,a.Date union select case when s.IsTeacher = 1 then  'TeachingStaffs' else 'NonteachingStaffs' end as Class,COUNT(CASE WHEN Status = 1 and a.StaffId is not null THEN 1 ELSE NULL END) as Absent, COUNT(CASE WHEN Status = 2 and a.StaffId is not null THEN 1 ELSE NULL END) as Present,COUNT(CASE WHEN Status = 3 and a.StaffId is not null THEN 1 ELSE NULL END) as Holiday,count(*) as Total from Attandance a inner join Staffs s on a.StaffId = s.Id where  a.TenantId=(select TenantId from Users where userid=" + userid + ") and a.Date = " + StartDate.ToSqlDate() + " group By s.IsTeacher,a.Date";
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
            public string Class { get; set; }
            public int Absent { get; set; }
            public int Present { get; set; }
            public int Holiday { get; set; }
            public int Total { get; set; }




        }
        public class AboutReport
        {
            public DateTime FromDate { get; set; }
            public string ReportType { get; set; }
        }
        public class ClassWiseAttendanceReporViewtData
        {


            public List<Item> Details { get; set; }
            public AboutReport aboutreport { get; set; }

        }



    }
}
