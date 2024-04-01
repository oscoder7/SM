
namespace BitPro.SchoolMate.Master.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.DivisionsRepository;
    using MyRow = Entities.DivisionsRow;
    using System.Collections.Generic;

    [Route("Services/Master/Divisions/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class DivisionsController : ServiceEndpoint
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
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }

        [HttpPost]
        public List<PromotionDivisionResponse> GetByPromotions(IDbConnection connection, ExamMarkRequest request)
        {
            return new DivisionDetailsHelper().GetPromotionDetailsByPromotion(connection,request);
        }
        [HttpPost]
        public bool UpdateDivision(IDbConnection connection, DivisonUpdateRequest request)
        {
            return new DivisionDetailsHelper().UpdateStudentDiv(connection, request.StudentId, request.DivisionIds);
        }
        [HttpPost]
        public bool DeleteStudentFromDivision(IDbConnection connection, DivisonUpdateRequest request)
        {
            return new DivisionDetailsHelper().DeletetudentDiv(connection, request.StudentId, request.DivisionIds);
        }

    }
}
