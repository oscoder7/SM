
namespace BitPro.SchoolMate.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CourseFeeRow))]
    public class CourseFeeController : Controller
    {
        [Route("Master/CourseFee")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/CourseFee/CourseFeeIndex.cshtml");
        }
    }
}