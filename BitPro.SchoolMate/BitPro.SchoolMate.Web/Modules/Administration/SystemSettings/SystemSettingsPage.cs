
namespace BitPro.SchoolMate.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SystemSettingsRow))]
    public class SystemSettingsController : Controller
    {
        [Route("Administration/SystemSettings")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/SystemSettings/SystemSettingsIndex.cshtml");
        }
    }
}