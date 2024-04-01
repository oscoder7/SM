
namespace BitPro.SchoolMate.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.FeeTermsRow))]
    public class FeeTermsController : Controller
    {
        [Route("Master/FeeTerms")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/FeeTerms/FeeTermsIndex.cshtml");
        }
    }
}