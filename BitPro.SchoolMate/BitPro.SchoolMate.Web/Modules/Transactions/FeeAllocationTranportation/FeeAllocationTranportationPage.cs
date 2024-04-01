
namespace BitPro.SchoolMate.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.FeeAllocationTranportationRow))]
    public class FeeAllocationTranportationController : Controller
    {
        [Route("Transactions/FeeAllocationTranportation")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/FeeAllocationTranportation/FeeAllocationTranportationIndex.cshtml");
        }
    }
}