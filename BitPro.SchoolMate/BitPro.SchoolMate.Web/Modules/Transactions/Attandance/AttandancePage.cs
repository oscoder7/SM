
namespace BitPro.SchoolMate.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.AttandanceRow))]
    public class AttandanceController : Controller
    {
        [Route("Transactions/Attandance")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/Attandance/AttandanceIndex.cshtml");
        }
    }
}