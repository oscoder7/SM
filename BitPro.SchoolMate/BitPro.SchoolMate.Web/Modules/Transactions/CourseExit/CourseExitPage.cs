
namespace BitPro.SchoolMate.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CourseExitRow))]
    public class CourseExitController : Controller
    {
        [Route("Transactions/CourseExit")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/CourseExit/CourseExitIndex.cshtml");
        }
    }
}