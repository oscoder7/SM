
namespace BitPro.SchoolMate.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PromotionsRow))]
    public class PromotionsController : Controller
    {
        [Route("Transactions/Promotions")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/Promotions/PromotionsIndex.cshtml");
        }
    }
}