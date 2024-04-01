
namespace BitPro.SchoolMate.Transactions.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;
    using BitPro.SchoolMate;

    [PageAuthorize("Transactions:AttendanceReport")]
    public class ReportsController : Controller
    {
        [Route("Transactions/Reports")]
        public ActionResult Index()
        {
            return View(MVC.Views.Common.Reporting.ReportPage,
                new ReportRepository().GetReportTree("Transactions"));
        }
    }
}
