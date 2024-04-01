
namespace BitPro.SchoolMate.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.FeeExcemptionsRow))]
    public class FeeExcemptionsController : Controller
    {
        [Route("Master/FeeExcemptions")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/FeeExcemptions/FeeExcemptionsIndex.cshtml");
        }
    }
}