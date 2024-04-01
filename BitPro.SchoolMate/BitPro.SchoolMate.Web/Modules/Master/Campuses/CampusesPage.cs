
namespace BitPro.SchoolMate.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CampusesRow))]
    public class CampusesController : Controller
    {
        [Route("Master/Campuses")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Campuses/CampusesIndex.cshtml");
        }
    }
}