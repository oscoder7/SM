
namespace BitPro.SchoolMate.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.AdmissionRow))]
    public class AdmissionController : Controller
    {
        [Route("Transactions/Admission")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/Admission/AdmissionIndex.cshtml");
        }
    }
}