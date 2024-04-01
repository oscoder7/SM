
namespace BitPro.SchoolMate.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.StudentCurrentCoursesRow))]
    public class StudentCurrentCoursesController : Controller
    {
        [Route("Master/StudentCurrentCourses")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/StudentCurrentCourses/StudentCurrentCoursesIndex.cshtml");
        }
    }
}