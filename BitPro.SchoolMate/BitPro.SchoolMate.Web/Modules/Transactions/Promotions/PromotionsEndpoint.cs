
namespace BitPro.SchoolMate.Transactions.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.PromotionsRepository;
    using MyRow = Entities.PromotionsRow;
    using System.Collections.Generic;

    [Route("Services/Transactions/Promotions/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class PromotionsController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            foreach(var k in request.Entity.PromotionDivisions)
            {
                k.AcadamicYearId = request.Entity.AcadamicYearId;
            }
            ListRequest listRequest = new ListRequest { Criteria = new Criteria("AcadamicYearId")== (request.Entity.AcadamicYearId??0) & new Criteria("ToCourse") == (request.Entity.ToCourse ?? 0) };
            
            var K=new MyRepository().List(uow.Connection, listRequest);
            if (K.TotalCount > 0)
            {
                var Response = new SaveResponse();
                Response.EntityId = request.EntityId;
                Response.Error = new ServiceError { Arguments="sdws",Code="wsdw",Message="wdw",Details="wsd"};
                return Response;
            }
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            foreach (var k in request.Entity.PromotionDivisions)
            {
                k.AcadamicYearId = request.Entity.AcadamicYearId;
            }
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
        public List<CourseStudentResponse> GetStudentsByCourse(IDbConnection connection, PromotionRequest request)
        {
            return new DivisionDetailsHelper().GetCourseStudents(connection, request);
        }
        [HttpPost]
        public List<CourseStudentResponse> GetPromotionDetails(IDbConnection connection, PromotionRequest request)
        {
            return new DivisionDetailsHelper().GetPromosionDetails(connection, request.PromotionId);
        }
        [HttpPost]
        public bool DeletePromotionDetails(IUnitOfWork uow, PromotionInsertRequest request)
        {
            var x= new DivisionDetailsHelper().GetCount(uow.Connection, request.promotiondetailid,request.StudentId);
            if (x > 0)
            {
                return false;
            }
            else
            {
                Transactions.Repositories.PromotionDetailsRepository promotionDetailsRepository = new Transactions.Repositories.PromotionDetailsRepository();
                DeleteRequest deleteRequest = new DeleteRequest();
                deleteRequest.EntityId = request.promotiondetailid;
                promotionDetailsRepository.Delete(uow,deleteRequest);
                var y = new DivisionDetailsHelper().UpdatePromtionDetails(uow.Connection, request.StudentId,request.promotiondetailid);
                return true;
            }
        }
        [HttpPost]
        public SaveResponse InsertIntoPromotionDetails(IUnitOfWork uow, PromotionInsertRequest request)
        {
            Transactions.Repositories.PromotionDetailsRepository promotionDetailsRepository = new Transactions.Repositories.PromotionDetailsRepository();
            Transactions.Entities.PromotionDetailsRow d = new Transactions.Entities.PromotionDetailsRow();
            d.PromotionId = request.PromotionId;
            d.StudentId = request.StudentId;
            d.IsCompleted = false;
            SaveRequest<Transactions.Entities.PromotionDetailsRow> saverequest = new SaveRequest<Transactions.Entities.PromotionDetailsRow>();
            saverequest.Entity = d;
            var res= promotionDetailsRepository.Create(uow, saverequest);
            if (res != null)
            {
                int pidetailid = 0;
                int.TryParse(res.EntityId.ToString(), out pidetailid);
                if (pidetailid > 0)
                {
                    if (request.divid > 0)
                    {
                        Master.Repositories.DivisionStudentsRepository divisionStudentsRepository = new Master.Repositories.DivisionStudentsRepository();
                        Master.Entities.DivisionStudentsRow divstudent = new Master.Entities.DivisionStudentsRow();
                        divstudent.DivisionId = request.divid;
                        int detailsid = 0;
                        int.TryParse(res.EntityId.ToString(), out detailsid);
                        divstudent.PromotionDetailId = detailsid;
                        SaveRequest<Master.Entities.DivisionStudentsRow> save = new SaveRequest<Master.Entities.DivisionStudentsRow>();
                        save.Entity = divstudent;
                        var resul = divisionStudentsRepository.Create(uow, save);
                    }
                }
            }
            RetrieveRequest retrieveRequest = new RetrieveRequest();
            retrieveRequest.EntityId = request.promotiondetailid;

            var data=promotionDetailsRepository.Retrieve(uow.Connection, retrieveRequest);
            if (data != null)
            {
                data.Entity.IsCompleted = true;
                SaveRequest<Transactions.Entities.PromotionDetailsRow> saverequest2 = new SaveRequest<Transactions.Entities.PromotionDetailsRow>();
                saverequest2.Entity = data.Entity;
                saverequest2.EntityId = data.Entity.Id;
                promotionDetailsRepository.Update(uow, saverequest2);

            }
            return res;

        }
        [HttpPost]
        public List<Master.Entities.CourseDivisionsRow> GetDivisionsByCourse(IDbConnection connection, CouseDivisionRequest request)
        {
            return new DivisionDetailsHelper().GetCouseDivisons(connection, request.courseid);
        }

    }
}
