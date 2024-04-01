
namespace BitPro.SchoolMate.Transactions.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.FeeCollectionRepository;
    using MyRow = Entities.FeeCollectionRow;
    using System.Collections.Generic;
    using System.Linq;
    using BitPro.SchoolMate.Accounts.Entities;
    using Serenity.Reporting;
    using Serenity.Web;
    using System;

    [Route("Services/Transactions/FeeCollection/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class FeeCollectionController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            
            request.Entity.FeeAllocations.RemoveAll(vehicle => vehicle.Collected == 0);
            request.Entity.TranportationFee.RemoveAll(vehicle => vehicle.Collected == 0);
            RetrieveRequest accountheadretrieveRequest = new RetrieveRequest();
            accountheadretrieveRequest.EntityId = request.Entity.AccountId;
            var KK = new Accounts.Repositories.AccountsRepository().Retrieve(uow.Connection, accountheadretrieveRequest);

            foreach (var k in request.Entity.FeeAllocations)
            {
                
                Master.Repositories.CourseFeeRepository courseFeeRepository = new Master.Repositories.CourseFeeRepository();
                RetrieveRequest courseretriverequest = new RetrieveRequest();
                courseretriverequest.EntityId = k.CourseFeeId;
                var coursefee = courseFeeRepository.Retrieve(uow.Connection, courseretriverequest);


                Master.Repositories.FeesRepository feesRepository = new Master.Repositories.FeesRepository();
                RetrieveRequest retrieveRequest = new RetrieveRequest();
                retrieveRequest.EntityId = coursefee.Entity.FeeId;
                var fee=feesRepository.Retrieve(uow.Connection, retrieveRequest);


                Accounts.Entities.ReceiptRow receiptRow = new Accounts.Entities.ReceiptRow();
                receiptRow.VNo= new DivisionDetailsHelper().GetVoucherNo(uow.Connection, 1).voucherno;
                receiptRow.TrxDate = request.Entity.PayDate;
                receiptRow.Amount = k.Collected;
                receiptRow.CreditAccountHeadId = fee.Entity.DebitAccountHeadId;
                receiptRow.PaymentMethod = request.Entity.PaymentMethod;
                receiptRow.DebitAccountId = request.Entity.AccountId;
                receiptRow.EntityType = k.Table;
                receiptRow.VType = VoucherTypes.Value1;

                receiptRow.DebitAccountHeadId = KK.Entity.AccountHeadId;
                k.Receipts = new List<Accounts.Entities.ReceiptRow>();
                k.Receipts.Add(receiptRow);
            }
            foreach (var k in request.Entity.TranportationFee)
            {

               


                Master.Repositories.FeesRepository feesRepository = new Master.Repositories.FeesRepository();
                RetrieveRequest retrieveRequest = new RetrieveRequest();
                retrieveRequest.EntityId = k.FeeId;
                var fee = feesRepository.Retrieve(uow.Connection, retrieveRequest);


                Accounts.Entities.ReceiptRow receiptRow = new Accounts.Entities.ReceiptRow();
                receiptRow.VNo = new DivisionDetailsHelper().GetVoucherNo(uow.Connection, 1).voucherno;
                receiptRow.TrxDate = request.Entity.PayDate;
                receiptRow.Amount = k.Collected;
                receiptRow.CreditAccountHeadId = fee.Entity.DebitAccountHeadId;
                receiptRow.PaymentMethod = request.Entity.PaymentMethod;
                receiptRow.DebitAccountId = request.Entity.AccountId;
                receiptRow.EntityType = k.Table;
                receiptRow.VType = VoucherTypes.Value1;

                receiptRow.DebitAccountHeadId = KK.Entity.AccountHeadId;
                k.Receipts = new List<Accounts.Entities.ReceiptRow>();
                k.Receipts.Add(receiptRow);
            }
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            RetrieveRequest accountheadretrieveRequest = new RetrieveRequest();
            accountheadretrieveRequest.EntityId = request.Entity.AccountId;
            var KK = new Accounts.Repositories.AccountsRepository().Retrieve(uow.Connection, accountheadretrieveRequest);

            foreach (var k in request.Entity.FeeAllocations)
            {
                Master.Repositories.CourseFeeRepository courseFeeRepository = new Master.Repositories.CourseFeeRepository();
                RetrieveRequest courseretriverequest = new RetrieveRequest();
                courseretriverequest.EntityId = k.CourseFeeId;
                var coursefee = courseFeeRepository.Retrieve(uow.Connection, courseretriverequest);


                Master.Repositories.FeesRepository feesRepository = new Master.Repositories.FeesRepository();
                RetrieveRequest retrieveRequest = new RetrieveRequest();
                retrieveRequest.EntityId = coursefee.Entity.FeeId;
                var fee = feesRepository.Retrieve(uow.Connection, retrieveRequest);

               
                if (k.Id > 0)
                {
                   
                    k.Receipts[0].TrxDate = request.Entity.PayDate;
                    k.Receipts[0].Amount = k.Collected;
                    k.Receipts[0].CreditAccountHeadId = fee.Entity.DebitAccountHeadId;
                    k.Receipts[0].PaymentMethod = request.Entity.PaymentMethod;
                    k.Receipts[0].DebitAccountId = request.Entity.AccountId;
                    k.Receipts[0].DebitAccountHeadId = KK.Entity.AccountHeadId;
                }
                else
                {
                    Accounts.Entities.ReceiptRow receiptRow = new Accounts.Entities.ReceiptRow();
                    receiptRow.VNo = new DivisionDetailsHelper().GetVoucherNo(uow.Connection, 1).voucherno;
                    receiptRow.TrxDate = request.Entity.PayDate;
                    receiptRow.Amount = k.Collected;
                    receiptRow.CreditAccountHeadId = fee.Entity.DebitAccountHeadId;
                    receiptRow.PaymentMethod = request.Entity.PaymentMethod;
                    receiptRow.DebitAccountId = request.Entity.AccountId;
                    receiptRow.EntityType = k.Table;
                    receiptRow.VType = VoucherTypes.Value1;
                    receiptRow.DebitAccountHeadId = KK.Entity.AccountHeadId;
                    k.Receipts = new List<Accounts.Entities.ReceiptRow>();
                    k.Receipts.Add(receiptRow);
                }
            }
            foreach (var k in request.Entity.TranportationFee)
            {
                


                Master.Repositories.FeesRepository feesRepository = new Master.Repositories.FeesRepository();
                RetrieveRequest retrieveRequest = new RetrieveRequest();
                retrieveRequest.EntityId = k.FeeId;
                var fee = feesRepository.Retrieve(uow.Connection, retrieveRequest);


                if (k.Id > 0)
                {

                    k.Receipts[0].TrxDate = request.Entity.PayDate;
                    k.Receipts[0].Amount = k.Collected;
                    k.Receipts[0].CreditAccountHeadId = fee.Entity.DebitAccountHeadId;
                    k.Receipts[0].PaymentMethod = request.Entity.PaymentMethod;
                    k.Receipts[0].DebitAccountId = request.Entity.AccountId;
                    k.Receipts[0].DebitAccountHeadId = KK.Entity.AccountHeadId;
                }
                else
                {
                    Accounts.Entities.ReceiptRow receiptRow = new Accounts.Entities.ReceiptRow();
                    receiptRow.VNo = new DivisionDetailsHelper().GetVoucherNo(uow.Connection, 1).voucherno;
                    receiptRow.TrxDate = request.Entity.PayDate;
                    receiptRow.Amount = k.Collected;
                    receiptRow.CreditAccountHeadId = fee.Entity.DebitAccountHeadId;
                    receiptRow.PaymentMethod = request.Entity.PaymentMethod;
                    receiptRow.DebitAccountId = request.Entity.AccountId;
                    receiptRow.EntityType = k.Table;
                    receiptRow.VType = VoucherTypes.Value1;
                    receiptRow.DebitAccountHeadId = KK.Entity.AccountHeadId;
                    k.Receipts = new List<Accounts.Entities.ReceiptRow>();
                    k.Receipts.Add(receiptRow);
                }
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
            var k= new MyRepository().Retrieve(connection, request);
            
            return k;
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
            
        }
        [HttpPost]
        public List<StudentCurrentPromotionResponce> StudentCurrentPromotions(IUnitOfWork uow, StudentCurrentPromotion request)
        {
            return new DivisionDetailsHelper().GetCurrentPromotions(uow.Connection, request.StudentId);

        }
        [HttpPost]
        public List<CourseFeeStructureResponce> GetCourseFeeStucture(IUnitOfWork uow, CourseFeeStructure request)
        {
            return new DivisionDetailsHelper().GetCourseFeeStructure(uow.Connection, request);

        }
        public CourseFeeAmountResponse GetFeeAmount(IUnitOfWork uow, CourseFeeAmountRequest request)
        {
            return new DivisionDetailsHelper().GetCourseFeeAmount(uow.Connection, request);

        }
        public List<CourseFeeResponce> GetStudentCoursePendingFees(IUnitOfWork uow, CourseFeeStructure request)
        {
            return new DivisionDetailsHelper().GetStudentCoursePendingFees(uow.Connection, request);

        }
        public List<CourseFeeResponse> CourseFeePending(IUnitOfWork uow, CourseFeeRequest request)
        {
            var x = new DivisionDetailsHelper().GetPendingFeeByCourse(uow.Connection, request);
            return x;
        }
        public List<CourseFeeResponce> TransportationFeePending(IUnitOfWork uow, TransportationFeeRequest request)
        {
            var x = new DivisionDetailsHelper().GetStudentTransportaionPendingFees(uow.Connection, request);
            return x;
        }
        public AccountsRow GetDefaultAccount(IDbConnection connection, GetNextNumberRequest request)
        {
            return new DivisionDetailsHelper().GetDefaultAccount(connection);
        }
        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;

            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.FeeCollectionColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "FeeCollection_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
    }
}
