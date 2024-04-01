
namespace BitPro.SchoolMate.Transactions.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SalaryPaymentsRow))]
    public class SalaryPaymentsController : Controller
    {
        [Route("Transactions/SalaryPayments")]
        public ActionResult Index()
        {
            return View("~/Modules/Transactions/SalaryPayments/SalaryPaymentsIndex.cshtml");
        }
    }
}