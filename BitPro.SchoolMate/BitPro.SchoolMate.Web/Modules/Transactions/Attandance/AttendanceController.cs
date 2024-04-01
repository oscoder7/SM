namespace BitPro.SchoolMate.Transactions.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Data;
    using OfficeOpenXml.FormulaParsing.Excel.Functions.DateTime;
    using System;

    [Route("Transactions/Attendanceedit")]
    [PageAuthorize(typeof(Entities.AttandanceRow))]
    public class AttendanceController : Controller
    {
        public IActionResult Index()
        {
            return View(MVC.Views.Transactions.Attandance.AttendanceEditIndex);
        }
        [Route("UpdateAttendance/{id}/{status}")]
        public ActionResult UpdateAttendance(int id, int status)
        {

            var connection = SqlConnections.NewFor<Entities.AttandanceRow>();
            var y = new DivisionDetailsHelper().UpdateAttendance(connection, id,status);
            return new JsonResult(true);

        }
    }
}