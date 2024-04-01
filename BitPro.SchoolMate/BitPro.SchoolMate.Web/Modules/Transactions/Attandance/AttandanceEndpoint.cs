
namespace BitPro.SchoolMate.Transactions.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.AttandanceRepository;
    using MyRow = Entities.AttandanceRow;
    using System;
    using System.Collections.Generic;

    [Route("Services/Transactions/Attandance/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class AttandanceController : ServiceEndpoint
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
        [HttpGet]
        public bool UpdateAttendance(IDbConnection connection, AttendanceUpdateRequest attendanceUpdateRequest)
        {
            return true;
        }
        public List<PromotionCurrentAcadamicYearResponse> GetPromotionCurrentAcadamicYear(IDbConnection connection, AttendanceUpdateRequest attendanceUpdateRequest)
        {
            var x = new DivisionDetailsHelper().GetPromotionCurrentAcadamicYear(connection);
            return x;
        }
        public ListResponse<MyRow> GetAttendanceList(IDbConnection connection, AttendanceRequest request)
        {
            ListRequest listRequest = new ListRequest { Criteria = new Criteria("Date") == request.date };
            var k = new MyRepository().List(connection, listRequest);
            if (k.Entities.Count == 0)
            {
                var x = new DivisionDetailsHelper().GetAttendance(connection, request);


            }
            Nullable<int> g = null;
            var fld = Entities.AttandanceRow.Fields;
            if (request.type == 2)
            {
                var Criteria = new Criteria("Date") == request.date && new Criteria("PromotionDetailId").IsNull() && new Criteria("StaffIsTeacher") == 1;
                listRequest = new ListRequest { Criteria = Criteria };
            }
            if (request.type == 3)
            {
                var Criteria = new Criteria("Date") == request.date && new Criteria("PromotionDetailId").IsNull() && new Criteria("StaffIsTeacher") == 0;
                listRequest = new ListRequest { Criteria = Criteria };
            }
            if (request.type == 1)
            {

                var x = new DivisionDetailsHelper().GetStudentsAttendances(connection, request.courseid, request.date, request.divid);
                var Criteria = new Criteria("Date") == request.date && new Criteria("StudentId").IsNotNull();
                listRequest = new ListRequest { Criteria = Criteria };
                ListResponse<MyRow> listResponse = new ListResponse<MyRow>();
                listResponse.Entities = x;
                return listResponse;
            }
            HashSet<string> ds = new HashSet<string>();
            ds.Add("StaffStaffName");
            ds.Add("StaffCode");
            ds.Add("StudentCode");
           
            listRequest.IncludeColumns = ds;
            var k1 = new MyRepository().List(connection, listRequest);

            return k1;
        }
        public bool UpdateAttendanceList(IDbConnection connection, UpdateListAttendanceRequest request)
        {
            var x = new DivisionDetailsHelper().UpdateAttendanceLisr(connection, request);
            return true;
        }
    }
}
