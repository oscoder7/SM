namespace BitPro.SchoolMate.Master.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.AcadamicYearRepository;
    using MyRow = Entities.AcadamicYearRow;

    [Route("Services/Master/CurrentAcadamicYear/[action]")]
    [ConnectionKey(typeof(MyRow))]
    public class CurrentAcadamicYearController : ServiceEndpoint
    {
        public MyRow GetCurrentAcadamicYear()
        {
            var x = new DivisionDetailsHelper().GetCurrentAcadamicYear();
            return x;
        }
    }
}