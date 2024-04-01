
namespace BitPro.SchoolMate.Transactions.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;
    using BitPro.SchoolMate;

    [PageAuthorize("Accounts:AccountReports")]
    public class AccountReportsPageController : Controller
    {
        [Route("Accounts/AccountReports")]
        public ActionResult Index()
        {
            return View(MVC.Views.Common.Reporting.ReportPage,
                new ReportRepository().GetReportTree("Accounts"));
        }
    }
}
