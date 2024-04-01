
namespace BitPro.SchoolMate.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TransportRow))]
    public class TransportController : Controller
    {
        [Route("Transactions/Transport")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/Transport/TransportIndex.cshtml");
        }
    }
}