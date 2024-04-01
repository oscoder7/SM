
namespace BitPro.SchoolMate.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.StudentMarksRow))]
    public class StudentMarksController : Controller
    {
        [Route("Transactions/StudentMarks")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/StudentMarks/StudentMarksIndex.cshtml");
        }
    }
}