
namespace BitPro.SchoolMate.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.DivisionsRow))]
    public class DivisionsController : Controller
    {
        [Route("Master/Divisions")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Divisions/DivisionsIndex.cshtml");
        }
    }
}