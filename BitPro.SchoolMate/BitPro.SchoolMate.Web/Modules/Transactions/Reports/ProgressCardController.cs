namespace BitPro.SchoolMate.Transactions.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Data;
    using OfficeOpenXml.FormulaParsing.Excel.Functions.DateTime;
    using System;
    using BitPro.SchoolMate.Master.Repositories;
    using Serenity.Services;

    [PageAuthorize("Transactions:ProgressCard"), Route("Transactions/ProgressCard")]
    public class ProgressCardController : Controller
    {
        public IActionResult Index()
        {
            var connection = SqlConnections.NewFor<Master.Entities.CoursesRow>();
          
            var x = new DivisionDetailsHelper().GetListOfAcadamicYears(connection);
            //var x = new DivisionDetailsHelper().GetCurrentAcadamicYear();
            //int k=x.Id??0;
            //ListRequest listRequest2 = new ListRequest { Criteria = new Criteria("AcadamicYearId") == k };
            //var data2 = new FeeTermsRepository().List(connection, listRequest2);
            //feeDueRequest.terms = data2.Entities;
            FeeDueRequest feeDueRequest = new FeeDueRequest();
            feeDueRequest.acadamicYearRows = x;
            return View(MVC.Views.Transactions.Reports.ProgressCard, feeDueRequest);
        }
    }
}