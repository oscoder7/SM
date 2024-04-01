
namespace BitPro.SchoolMate.Transactions.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;
    using BitPro.SchoolMate;

    [PageAuthorize("Transactions:FeeCollectionReport")]
    public class FeeCollectionReportsController : Controller
    {
        [Route("Transactions/FeeCollectionReports")]
        public ActionResult Index()
        {
            return View(MVC.Views.Common.Reporting.ReportPage,
                new ReportRepository().GetReportTree("FeeCollection"));
        }
    }
}
