
namespace BitPro.SchoolMate.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.FeeAllocationRow))]
    public class FeeAllocationController : Controller
    {
        [Route("Transactions/FeeAllocation")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/FeeAllocation/FeeAllocationIndex.cshtml");
        }
    }
}