
namespace BitPro.SchoolMate.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CoursesRow))]
    public class CoursesController : Controller
    {
        [Route("Master/Courses")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Courses/CoursesIndex.cshtml");
        }
    }
}