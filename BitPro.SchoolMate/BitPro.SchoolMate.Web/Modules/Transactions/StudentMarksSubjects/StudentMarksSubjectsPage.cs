
namespace BitPro.SchoolMate.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.StudentMarksSubjectsRow))]
    public class StudentMarksSubjectsController : Controller
    {
        [Route("Transactions/StudentMarksSubjects")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/StudentMarksSubjects/StudentMarksSubjectsIndex.cshtml");
        }
    }
}