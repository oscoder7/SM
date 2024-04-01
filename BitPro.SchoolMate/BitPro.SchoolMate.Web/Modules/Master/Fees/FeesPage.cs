
namespace BitPro.SchoolMate.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.FeesRow))]
    public class FeesController : Controller
    {
        [Route("Master/Fees")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Fees/FeesIndex.cshtml");
        }
    }
}