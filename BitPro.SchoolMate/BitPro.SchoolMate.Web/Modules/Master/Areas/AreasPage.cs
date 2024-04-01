
namespace BitPro.SchoolMate.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.AreasRow))]
    public class AreasController : Controller
    {
        [Route("Master/Areas")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Areas/AreasIndex.cshtml");
        }
    }
}