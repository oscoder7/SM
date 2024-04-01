
namespace BitPro.SchoolMate.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ExamCoursesRow))]
    public class ExamCoursesController : Controller
    {
        [Route("Master/ExamCourses")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/ExamCourses/ExamCoursesIndex.cshtml");
        }
    }
}