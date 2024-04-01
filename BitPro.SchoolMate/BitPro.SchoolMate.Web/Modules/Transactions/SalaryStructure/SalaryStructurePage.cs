
namespace BitPro.SchoolMate.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SalaryStructureRow))]
    public class SalaryStructureController : Controller
    {
        [Route("Transactions/SalaryStructure")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/SalaryStructure/SalaryStructureIndex.cshtml");
        }
    }
}