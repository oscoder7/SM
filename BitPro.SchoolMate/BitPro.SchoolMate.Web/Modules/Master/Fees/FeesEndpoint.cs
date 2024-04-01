
namespace BitPro.SchoolMate.Master.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.FeesRepository;
    using MyRow = Entities.FeesRow;
    using System.Collections.Generic;
    using BitPro.SchoolMate.Master.Repositories;

    [Route("Services/Master/Fees/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class FeesController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            var r= new MyRepository().Retrieve(connection, request);
            return r;
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }
        public List<AcadamicYearTermsResponse> GetTermsOfCurrentAcadamicYear(IUnitOfWork uow)
        {
            List<AcadamicYearTermsResponse> acadamicYearTermsResponses = new List<AcadamicYearTermsResponse>();
            return new DivisionDetailsHelper().GetTermsOfCurrentAcadamicYear(uow.Connection);

           

        }
    }
}
