
namespace BitPro.SchoolMate.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CourseSubjectsRow))]
    public class CourseSubjectsController : Controller
    {
        [Route("Master/CourseSubjects")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/CourseSubjects/CourseSubjectsIndex.cshtml");
        }
    }
}