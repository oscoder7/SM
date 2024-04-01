
namespace BitPro.SchoolMate.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.StaffSubjectsRow))]
    public class StaffSubjectsController : Controller
    {
        [Route("Master/StaffSubjects")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/StaffSubjects/StaffSubjectsIndex.cshtml");
        }
    }
}