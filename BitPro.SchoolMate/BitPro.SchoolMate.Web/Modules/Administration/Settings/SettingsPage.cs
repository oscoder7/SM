
namespace BitPro.SchoolMate.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SettingsRow))]
    public class SettingsController : Controller
    {
        [Route("Administration/Settings")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/Settings/SettingsIndex.cshtml");
        }
    }
}