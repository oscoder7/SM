
namespace BitPro.SchoolMate.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.StaffsRow))]
    public class StaffsController : Controller
    {
        [Route("Master/Staffs")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Staffs/StaffsIndex.cshtml");
        }
    }
}