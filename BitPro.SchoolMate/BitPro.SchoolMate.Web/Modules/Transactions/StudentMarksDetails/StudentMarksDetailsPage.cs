
namespace BitPro.SchoolMate.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.StudentMarksDetailsRow))]
    public class StudentMarksDetailsController : Controller
    {
        [Route("Transactions/StudentMarksDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/StudentMarksDetails/StudentMarksDetailsIndex.cshtml");
        }
    }
}