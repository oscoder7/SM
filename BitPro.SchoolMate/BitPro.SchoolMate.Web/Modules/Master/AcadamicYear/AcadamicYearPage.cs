
namespace BitPro.SchoolMate.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.AcadamicYearRow))]
    public class AcadamicYearController : Controller
    {
        [Route("Master/AcadamicYear")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/AcadamicYear/AcadamicYearIndex.cshtml");
        }
    }
}