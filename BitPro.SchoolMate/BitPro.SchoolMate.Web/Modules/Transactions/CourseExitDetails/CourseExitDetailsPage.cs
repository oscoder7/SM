
namespace BitPro.SchoolMate.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CourseExitDetailsRow))]
    public class CourseExitDetailsController : Controller
    {
        [Route("Transactions/CourseExitDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/CourseExitDetails/CourseExitDetailsIndex.cshtml");
        }
    }
}