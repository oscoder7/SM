
namespace BitPro.SchoolMate.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CourseDivisionsRow))]
    public class CourseDivisionsController : Controller
    {
        [Route("Master/CourseDivisions")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/CourseDivisions/CourseDivisionsIndex.cshtml");
        }
    }
}