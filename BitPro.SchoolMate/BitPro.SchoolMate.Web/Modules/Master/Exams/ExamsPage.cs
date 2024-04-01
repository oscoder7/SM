
namespace BitPro.SchoolMate.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ExamsRow))]
    public class ExamsController : Controller
    {
        [Route("Master/Exams")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Exams/ExamsIndex.cshtml");
        }
    }
}