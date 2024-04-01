
namespace BitPro.SchoolMate.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.FeeStructureRow))]
    public class FeeStructureController : Controller
    {
        [Route("Master/FeeStructure")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/FeeStructure/FeeStructureIndex.cshtml");
        }
    }
}