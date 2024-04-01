
namespace BitPro.SchoolMate.Accounts.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.ReceiptRepository;
    using MyRow = Entities.ReceiptRow;
    using System.Collections.Generic;

    [Route("Services/Accounts/Receipt/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class ReceiptController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.EntityType = MyRow.Fields.TableName;
            request.Entity.VType = VoucherTypes.Value1;
            RetrieveRequest retrieveRequest = new RetrieveRequest();
            retrieveRequest.EntityId = request.Entity.DebitAccountId;
            var KK= new Repositories.AccountsRepository().Retrieve(uow.Connection, retrieveRequest);
            request.Entity.DebitAccountHeadId = KK.Entity.AccountHeadId;
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            RetrieveRequest retrieveRequest = new RetrieveRequest();
            retrieveRequest.EntityId = request.Entity.DebitAccountId;
            var KK = new Repositories.AccountsRepository().Retrieve(uow.Connection, retrieveRequest);
            request.Entity.DebitAccountHeadId = KK.Entity.AccountHeadId;
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
            var c = new Criteria("VType") == 1;
            //var k = new ListRequest { Criteria = new Criteria("VType") == 1 };
            request.Criteria = c;
            return new MyRepository().List(connection, request);
        }
        public VoucherNoResponse GetTrxNo(IDbConnection connection, VoucherNoRequest request)
        {
            return new DivisionDetailsHelper().GetVoucherNo(connection, request.vouchertype);
        }
    }
}
