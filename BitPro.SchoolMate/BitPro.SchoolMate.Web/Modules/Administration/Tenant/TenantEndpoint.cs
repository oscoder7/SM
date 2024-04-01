
namespace BitPro.SchoolMate.Administration.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.TenantRepository;
    using MyRow = Entities.TenantRow;

    [Route("Services/Administration/Tenant/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class TenantController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var k= new MyRepository().Create(uow, request);
            using (var connection = SqlConnections.NewFor<Administration.Entities.TenantRow>())
            {
                //accountheads
                 connection.Execute("INSERT [dbo].[AccountHeads] ( [Description], [ParentHeadId], [Code], [TenantId], [LedgerType]) VALUES ( N'Balance sheet', NULL, N'BS', " + k.EntityId + ", 1)");
                connection.Execute("INSERT [dbo].[AccountHeads] ( [Description], [ParentHeadId], [Code], [TenantId], [LedgerType]) VALUES ( N'Profit and loss', NULL, N'PL', " + k.EntityId + ", 1)");
                connection.Execute("INSERT [dbo].[AccountHeads] ( [Description], [ParentHeadId], [Code], [TenantId], [LedgerType]) VALUES ( N'Fee', (select Id from AccountHeads where Description='Profit and loss' and tenantid=" + k.EntityId + "), N'Fee', " + k.EntityId + ", 1)");
                connection.Execute("INSERT [dbo].[AccountHeads] ( [Description], [ParentHeadId], [Code], [TenantId], [LedgerType]) VALUES ( N'Salary', (select Id from AccountHeads where Description='Profit and loss' and tenantid=" + k.EntityId + "), N'Salary', " + k.EntityId + ", 1)");
                connection.Execute("INSERT [dbo].[AccountHeads] ( [Description], [ParentHeadId], [Code], [TenantId], [LedgerType]) VALUES ( N'Rent', (select Id from AccountHeads where Description='Profit and loss' and tenantid=" + k.EntityId + "), N'Rent', " + k.EntityId + ", 1)");
                connection.Execute("INSERT [dbo].[AccountHeads] ( [Description], [ParentHeadId], [Code], [TenantId], [LedgerType]) VALUES ( N'Electricity', (select Id from AccountHeads where Description='Profit and loss' and tenantid=" + k.EntityId + "), N'Electricity', " + k.EntityId + ", 1)");
                connection.Execute("INSERT [dbo].[AccountHeads] ( [Description], [ParentHeadId], [Code], [TenantId], [LedgerType]) VALUES ( N'Cash on Hand', (select Id from AccountHeads where Description='Balance sheet' and tenantid=" + k.EntityId + "), N'Cash on Hand', " + k.EntityId + ", 1)");
                connection.Execute("INSERT [dbo].[AccountHeads] ( [Description], [ParentHeadId], [Code], [TenantId], [LedgerType]) VALUES ( N'Cash at Bank', (select Id from AccountHeads where Description='Balance sheet' and tenantid=" + k.EntityId + "), N'Cash at bank', " + k.EntityId + ", 1)");

                //accounts
                connection.Execute("INSERT [dbo].[Accounts] ( [Type], [AccountNo], [AccountHeadId], [TenantId], [IsDefault]) VALUES ( 1, N'Cash on hand', (select ID from AccountHeads where Description='Cash on Hand' and tenantid=" + k.EntityId + "), " + k.EntityId + ", NULL)");
                connection.Execute("INSERT [dbo].[Accounts] ( [Type], [AccountNo], [AccountHeadId], [TenantId], [IsDefault]) VALUES ( 2, N'Cash at bank', (select ID from AccountHeads where Description='Cash at bank' and tenantid=" + k.EntityId + "), " + k.EntityId + ", NULL)");


                //configs
                connection.Execute("INSERT [dbo].[Config] ( [Name], [Type], [ValueString], [ValueDate], [ValueNumber], [ValueBool], [TenantId]) VALUES (N'Student Code Prefix', N'Student Code Prefix', N'STD_', NULL, NULL, NULL, " + k.EntityId + ")");
                connection.Execute("INSERT [dbo].[Config] ( [Name], [Type], [ValueString], [ValueDate], [ValueNumber], [ValueBool], [TenantId]) VALUES (N'Student Code Length', N'Student Last Code', NULL, NULL, CAST(0.000 AS Decimal(18, 3)), NULL, " + k.EntityId + ")");
                connection.Execute("INSERT [dbo].[Settings] ([TenantId]) VALUES( " + k.EntityId + ")");
            }
            return k;
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
    }
}
