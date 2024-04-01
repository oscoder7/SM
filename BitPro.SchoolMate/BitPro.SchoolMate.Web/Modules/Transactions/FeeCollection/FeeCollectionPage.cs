
namespace BitPro.SchoolMate.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.FeeCollectionRow))]
    public class FeeCollectionController : Controller
    {
        [Route("Transactions/FeeCollection")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/FeeCollection/FeeCollectionIndex.cshtml");
        }
    }
}