
namespace BitPro.SchoolMate.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SubjectsRow))]
    public class SubjectsController : Controller
    {
        [Route("Master/Subjects")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Subjects/SubjectsIndex.cshtml");
        }
    }
}