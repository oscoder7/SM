
namespace BitPro.SchoolMate.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ContactsRow))]
    public class ContactsController : Controller
    {
        [Route("Master/Contacts")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Contacts/ContactsIndex.cshtml");
        }
    }
}