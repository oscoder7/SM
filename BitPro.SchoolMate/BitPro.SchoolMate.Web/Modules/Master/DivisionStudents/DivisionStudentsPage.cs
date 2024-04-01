
namespace BitPro.SchoolMate.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.DivisionStudentsRow))]
    public class DivisionStudentsController : Controller
    {
        [Route("Master/DivisionStudents")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/DivisionStudents/DivisionStudentsIndex.cshtml");
        }
    }
}