
namespace BitPro.SchoolMate.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.StudentsRow))]
    public class StudentsController : Controller
    {
        [Route("Master/Students")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Students/StudentsIndex.cshtml");
        }
    }
}