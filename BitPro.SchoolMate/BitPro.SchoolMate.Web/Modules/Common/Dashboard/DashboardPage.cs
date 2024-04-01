
namespace BitPro.SchoolMate.Common.Pages
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Web;
    using System;
    using Microsoft.AspNetCore.Mvc;
    using static BitPro.SchoolMate.Transactions.Pages.ClassWiseAttendanceReport;
    using System.Linq;

    [Route("Dashboard/[action]")]
    public class DashboardController : Controller
    {
        [PageAuthorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {
            var data = new DashboardPageModel();
            using (var connection = SqlConnections.NewFor<Transactions.Entities.FeeCollectionRow>())
            {
                int userid = 0;
                int.TryParse(Authorization.UserId, out userid);
                var sql = "select   max(c.Code) as Class,COUNT(CASE WHEN Status = 1 and a.PromotionDetailId is not null THEN 1 ELSE NULL END) as Absent, COUNT(CASE WHEN Status = 2 and a.PromotionDetailId is not null THEN 1 ELSE NULL END) as Present,COUNT(CASE WHEN Status = 3 and a.PromotionDetailId is not null THEN 1 ELSE NULL END) as Holiday,count(*) as Total  from Attandance a inner join PromotionDetails pd on pd.Id=a.PromotionDetailId inner join Promotions p on p.Id=Pd.PromotionId inner join Courses c on c.Id=p.ToCourse where  a.TenantId=(select TenantId from Users where userid=" + userid + ") and a.Date=" + DateTime.Today.ToSqlDate() + " AND pd.IsCompleted=0 group By p.ToCourse,a.Date union select case when s.IsTeacher = 1 then  'TeachingStaffs' else 'NonteachingStaffs' end as Class,COUNT(CASE WHEN Status = 1 and a.StaffId is not null THEN 1 ELSE NULL END) as Absent, COUNT(CASE WHEN Status = 2 and a.StaffId is not null THEN 1 ELSE NULL END) as Present,COUNT(CASE WHEN Status = 3 and a.StaffId is not null THEN 1 ELSE NULL END) as Holiday,count(*) as Total from Attandance a inner join Staffs s on a.StaffId = s.Id where  a.TenantId=(select TenantId from Users where userid=" + userid + ") and a.Date = " + DateTime.Today.ToSqlDate() + " group By s.IsTeacher,a.Date";
                var value = connection.Query<Item>(sql);
                data.Details = value.ToList();
            }
            using (var connection = SqlConnections.NewFor<Transactions.Entities.FeeCollectionRow>())
            {
                int userid = 0;
                int.TryParse(Authorization.UserId, out userid);
                var sql = @"select* from(select isnull(Sum(TotalAmount),0) as PaidToday from FeeCollection WHERE PayDate = "+DateTime.Today.ToSqlDate()+ @" and TenantId=(select TenantId from Users where userid=" + userid + @"))as a,

(select isnull(Sum(TotalAmount), 0) as PaidThisMonth from FeeCollection WHERE MONTH(PayDate)=MONTH(" + DateTime.Today.ToSqlDate() + @") AND YEAR(PayDate)=YEAR(" + DateTime.Today.ToSqlDate() + @") and TenantId=(select TenantId from Users where userid=" + userid + @"))as b,


(select Count(*) as NoOfStudents from Students where  TenantId=(select TenantId from Users where userid=" + userid + @") )c,

(select Count(*) as NoOfCourses from Courses where  TenantId=(select TenantId from Users where userid=" + userid + @")) as d";
                var value = connection.Query<DashBoradData>(sql);
                data.dashBoradData = value.ToList()[0];
            }
            return View(MVC.Views.Common.Dashboard.DashboardIndex, data);
        }
    }
}
