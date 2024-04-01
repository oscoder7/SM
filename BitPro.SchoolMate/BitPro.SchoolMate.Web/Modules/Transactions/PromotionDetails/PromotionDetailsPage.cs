
namespace BitPro.SchoolMate.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PromotionDetailsRow))]
    public class PromotionDetailsController : Controller
    {
        [Route("Transactions/PromotionDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/PromotionDetails/PromotionDetailsIndex.cshtml");
        }
    }
}