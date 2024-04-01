
namespace BitPro.SchoolMate.Transactions.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.SalaryStructureRepository;
    using MyRow = Entities.SalaryStructureRow;
    using System.Collections.Generic;
    using System.Linq;
    using BitPro.SchoolMate.Master.Entities;

    [Route("Services/Transactions/SalaryStructure/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class SalaryStructureController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {

            //accountheadretrieveRequest.EntityId = request.Entity.cre;
            //var KK = new Accounts.Repositories.AccountsRepository().Retrieve(uow.Connection, accountheadretrieveRequest);
            ListRequest listRequest = new ListRequest();
            var systemSettingsRow = new Administration.Repositories.SystemSettingsRepository().List(uow.Connection, listRequest).Entities[0];
            foreach (var k in request.Entity.SalaryPayments.Where(i=>i.CreditAccountId!=null))
            {

              


                Accounts.Entities.PaymentRow receiptRow = new Accounts.Entities.PaymentRow();
                receiptRow.VNo = new DivisionDetailsHelper().GetVoucherNo(uow.Connection, 2).voucherno;
                receiptRow.TrxDate = k.PaidDate;
                receiptRow.Amount = k.PaidAmount;

                RetrieveRequest staffretrequest = new RetrieveRequest();
                staffretrequest.EntityId = k.StaffId;
                var staff = new Master.Repositories.StaffsRepository().Retrieve(uow.Connection, staffretrequest);

                receiptRow.ContactId = staff.Entity.ContactId;

                receiptRow.DebitAccountHeadId = systemSettingsRow.SalaryAccount;
                receiptRow.PaymentMethod = k.PaymentMethod;
                receiptRow.CreditAccountId = k.CreditAccountId;
                receiptRow.EntityType = k.Table;
                receiptRow.VType = 2;

                RetrieveRequest accountheadretrieveRequest = new RetrieveRequest();
                accountheadretrieveRequest.EntityId = k.CreditAccountId;
                var KK = new Accounts.Repositories.AccountsRepository().Retrieve(uow.Connection, accountheadretrieveRequest);

                receiptRow.CreditAccountHeadId = KK.Entity.AccountHeadId;
                k.Payment = new List<Accounts.Entities.PaymentRow>();
                k.Payment.Add(receiptRow);
            }
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            ListRequest listRequest = new ListRequest();
            var systemSettingsRow = new Administration.Repositories.SystemSettingsRepository().List(uow.Connection, listRequest).Entities[0];
            foreach (var k in request.Entity.SalaryPayments.Where(i => i.CreditAccountId != null))
            {
                RetrieveRequest accountheadretrieveRequest = new RetrieveRequest();
                accountheadretrieveRequest.EntityId = k.CreditAccountId;
                var KK = new Accounts.Repositories.AccountsRepository().Retrieve(uow.Connection, accountheadretrieveRequest);

                RetrieveRequest staffretrequest = new RetrieveRequest();
                staffretrequest.EntityId = k.StaffId;
                var staff = new Master.Repositories.StaffsRepository().Retrieve(uow.Connection, staffretrequest);

                if (k.Payment.Count > 0)
                {

                    k.Payment[0].TrxDate = k.PaidDate;
                    k.Payment[0].Amount = k.PaidAmount;
                    k.Payment[0].PaymentMethod = k.PaymentMethod;
                    k.Payment[0].CreditAccountId = k.CreditAccountId;
                    k.Payment[0].CreditAccountHeadId = KK.Entity.AccountHeadId;
                    k.Payment[0].ContactId = staff.Entity.ContactId;
                }
                else
                {

                    Accounts.Entities.PaymentRow receiptRow = new Accounts.Entities.PaymentRow();

                  

                    receiptRow.ContactId = staff.Entity.ContactId;

                    receiptRow.VNo = new DivisionDetailsHelper().GetVoucherNo(uow.Connection, 2).voucherno;
                    receiptRow.TrxDate = k.PaidDate;
                    receiptRow.Amount = k.PaidAmount;
                    receiptRow.DebitAccountHeadId = systemSettingsRow.SalaryAccount;
                    receiptRow.PaymentMethod = k.PaymentMethod;
                    receiptRow.CreditAccountId = k.CreditAccountId;
                    receiptRow.EntityType = k.Table;
                    receiptRow.VType = 2;

                    receiptRow.CreditAccountHeadId = KK.Entity.AccountHeadId;
                    k.Payment = new List<Accounts.Entities.PaymentRow>();
                    k.Payment.Add(receiptRow);
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
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }
        [HttpPost]
        public List<SalaryResponse> GetSalary(IDbConnection connection,SalaryRequest salaryRequest)
        {
            var x = new DivisionDetailsHelper().GetSalary(connection,salaryRequest);
            return x;
        }
    }
}
