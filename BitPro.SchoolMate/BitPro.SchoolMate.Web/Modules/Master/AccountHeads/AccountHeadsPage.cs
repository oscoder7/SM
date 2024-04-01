
namespace BitPro.SchoolMate.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.AccountHeadsRow))]
    public class AccountHeadsController : Controller
    {
        [Route("Master/AccountHeads")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/AccountHeads/AccountHeadsIndex.cshtml");
        }
    }
}