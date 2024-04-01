
namespace BitPro.SchoolMate.Transactions.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.CourseExitRepository;
    using MyRow = Entities.CourseExitRow;
    using System.Linq;

    [Route("Services/Transactions/CourseExit/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class CourseExitController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var res= new MyRepository().Create(uow, request);
            foreach(var stu in request.Entity.Students)
            {
                RetrieveRequest retrieveRequest = new RetrieveRequest();
                retrieveRequest.EntityId = stu.PromotionDetailId;
                var k = new Repositories.PromotionDetailsRepository().Retrieve(uow.Connection,retrieveRequest );
                k.Entity.IsCompleted = true;
                SaveRequest<Entities.PromotionDetailsRow> saveRequest = new SaveRequest<Entities.PromotionDetailsRow>();
                saveRequest.Entity = k.Entity;
                saveRequest.EntityId = k.Entity.Id;
                var result= new Repositories.PromotionDetailsRepository().Update(uow, saveRequest);
            }
            return res;
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            RetrieveRequest retrieveRequest = new RetrieveRequest();
             retrieveRequest.EntityId = request.EntityId;
            var xdata = new MyRepository().Retrieve(uow.Connection, retrieveRequest);

            var inListButNotInList2 = xdata.Entity.Students.Except(request.Entity.Students);
            foreach(var item in inListButNotInList2)
            {
                RetrieveRequest retrieveRequestpromotion = new RetrieveRequest();
                retrieveRequestpromotion.EntityId = item.PromotionDetailId;
                var k = new Repositories.PromotionDetailsRepository().Retrieve(uow.Connection, retrieveRequestpromotion);
                k.Entity.IsCompleted = false;
                SaveRequest<Entities.PromotionDetailsRow> saveRequest = new SaveRequest<Entities.PromotionDetailsRow>();
                saveRequest.Entity = k.Entity;
                saveRequest.EntityId = k.Entity.Id;
                var result = new Repositories.PromotionDetailsRepository().Update(uow, saveRequest);
            }
            foreach(var item in request.Entity.Students)
            {
                if (item.Id == null)
                {
                    RetrieveRequest retrieveRequestpromotiondetail = new RetrieveRequest();
                    retrieveRequestpromotiondetail.EntityId = item.PromotionDetailId;
                    var k = new Repositories.PromotionDetailsRepository().Retrieve(uow.Connection, retrieveRequestpromotiondetail);
                    k.Entity.IsCompleted = true;
                    SaveRequest<Entities.PromotionDetailsRow> saveRequest = new SaveRequest<Entities.PromotionDetailsRow>();
                    saveRequest.Entity = k.Entity;
                    saveRequest.EntityId = k.Entity.Id;
                    var result = new Repositories.PromotionDetailsRepository().Update(uow, saveRequest);
                }
            }
            return new MyRepository().Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            RetrieveRequest retrieveRequest = new RetrieveRequest();
            retrieveRequest.EntityId = request.EntityId;
            var xdata = new MyRepository().Retrieve(uow.Connection, retrieveRequest);
            foreach (var item in xdata.Entity.Students)
            {
                RetrieveRequest retrieveRequestpromotion = new RetrieveRequest();
                retrieveRequestpromotion.EntityId = item.PromotionDetailId;
                var k = new Repositories.PromotionDetailsRepository().Retrieve(uow.Connection, retrieveRequestpromotion);
                k.Entity.IsCompleted = false;
                SaveRequest<Entities.PromotionDetailsRow> saveRequest = new SaveRequest<Entities.PromotionDetailsRow>();
                saveRequest.Entity = k.Entity;
                saveRequest.EntityId = k.Entity.Id;
                var result = new Repositories.PromotionDetailsRepository().Update(uow, saveRequest);
            }
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
    }
}
