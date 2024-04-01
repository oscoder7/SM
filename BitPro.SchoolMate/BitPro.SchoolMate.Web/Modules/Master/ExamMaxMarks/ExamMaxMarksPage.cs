
namespace BitPro.SchoolMate.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ExamMaxMarksRow))]
    public class ExamMaxMarksController : Controller
    {
        [Route("Master/ExamMaxMarks")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/ExamMaxMarks/ExamMaxMarksIndex.cshtml");
        }
    }
}