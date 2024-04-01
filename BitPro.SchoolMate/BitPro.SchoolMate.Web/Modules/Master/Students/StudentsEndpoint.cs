
namespace BitPro.SchoolMate.Master.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.StudentsRepository;
    using MyRow = Entities.StudentsRow;
    using System;
    using BitPro.SchoolMate.Master.Entities;
    using Serenity.Reporting;
    using Serenity.Web;
    using System.Collections.Generic;
    using Newtonsoft.Json;
    using System.Linq;
    using System.Collections;

    [Route("Services/Master/Students/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class StudentsController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var res= new MyRepository().Create(uow, request);
            if (res.Error == null)
            {
                var x = new DivisionDetailsHelper().GetCurrentAcadamicYear();
                SaveRequest<Transactions.Entities.AdmissionRow> saveRequest = new SaveRequest<Transactions.Entities.AdmissionRow>();
                saveRequest.Entity = new Transactions.Entities.AdmissionRow();
                saveRequest.Entity.AcadamicYearId = request.Entity.AdmissionAcadamicYearId;
                saveRequest.Entity.AdmissionFeeTermId = request.Entity.AdmissionFeeTermId;
                saveRequest.Entity.JoiningCourse = request.Entity.JoiningCourse;
                int id = 0;
                int.TryParse(res.EntityId.ToString(), out id);
                saveRequest.Entity.StudentId =id ;
                saveRequest.Entity.JoiningDivisionId = request.Entity.JoiningDivisionId;
                saveRequest.Entity.JoiningDate = request.Entity.JoiningDate;
                var result = new Transactions.Endpoints.AdmissionController().Create(uow, saveRequest);
                //Transactions.Repositories.PromotionsRepository productsRepository = new Transactions.Repositories.PromotionsRepository();
                
                //var x = new DivisionDetailsHelper().GetCurrentAcadamicYear();
                //if (x.Id > 0)
                //{
                //    var y = new DivisionDetailsHelper().GetPromotion(x.Id??0,request.Entity.JoiningCourse??0);
                //    if (y.Id > 0)
                //    {
                //        RetrieveRequest retrieveRequest = new RetrieveRequest();
                //        retrieveRequest.EntityId = y.Id;
                //        var data = productsRepository.Retrieve(uow.Connection, retrieveRequest);
                //        if (data != null)
                //        {
                //            Transactions.Entities.PromotionDetailsRow d = new Transactions.Entities.PromotionDetailsRow();
                //            d.StudentId = request.Entity.Id;
                //            d.PromotionId = data.Entity.Id;
                //            d.IsCompleted = false;
                //            d.PromotionType = PromotionTypes.Value2;
                //            data.Entity.PromotionDetail.Add(d);
                //            SaveRequest<Transactions.Entities.PromotionDetailsRow> saverequest = new SaveRequest<Transactions.Entities.PromotionDetailsRow>();
                //            saverequest.Entity = d;
                //            saverequest.EntityId = data.Entity.Id;
                //            Transactions.Repositories.PromotionDetailsRepository promotionDetailsRepository = new Transactions.Repositories.PromotionDetailsRepository();
                //            var result = promotionDetailsRepository.Create(uow, saverequest);

                //            if (result != null)
                //            {
                //                if (request.Entity.JoiningDivisionId > 0)
                //                {
                //                    var findexDiv = new DivisionDetailsHelper().GetExsistingDivisionByCode(uow.Connection,data.Entity.Id??0, request.Entity.JoiningDivisionId??0);
                //                    if (findexDiv != null)
                //                    {
                //                        SaveRequest<Master.Entities.DivisionStudentsRow> divisionstudentsaverequest = new SaveRequest<Master.Entities.DivisionStudentsRow>();
                //                        Master.Entities.DivisionStudentsRow divisionStudentsRow = new Entities.DivisionStudentsRow();
                //                        divisionStudentsRow.DivisionId = findexDiv.Id;
                //                        int pdetailid = 0;
                //                        int.TryParse(result.EntityId.ToString(), out pdetailid);
                //                        divisionStudentsRow.PromotionDetailId = pdetailid;
                //                        divisionstudentsaverequest.Entity = divisionStudentsRow;

                //                        Master.Repositories.DivisionStudentsRepository divisionStudentsRepository = new Repositories.DivisionStudentsRepository();
                //                        divisionStudentsRepository.Create(uow, divisionstudentsaverequest);

                //                    }
                //                    else
                //                    {
                //                        RetrieveRequest retrieveRequestcouserdivision = new RetrieveRequest();
                //                        retrieveRequestcouserdivision.EntityId = request.Entity.JoiningDivisionId;
                //                        Master.Repositories.CourseDivisionsRepository courseDivisionsRepository = new Repositories.CourseDivisionsRepository();
                //                        var coursediv=courseDivisionsRepository.Retrieve(uow.Connection, retrieveRequestcouserdivision);

                //                        SaveRequest<Master.Entities.DivisionsRow> divisionsaverequest = new SaveRequest<Master.Entities.DivisionsRow>();
                //                        Master.Entities.DivisionsRow divisionRow = new Entities.DivisionsRow();
                //                        int pdetailid = 0;
                //                        int.TryParse(result.EntityId.ToString(), out pdetailid);
                //                        divisionRow.PromotionId = data.Entity.Id;
                //                        divisionRow.AcadamicYearId = data.Entity.AcadamicYearId;
                //                        divisionRow.DivisionCode = coursediv.Entity.DivisionCode;

                //                        Master.Entities.DivisionStudentsRow row = new Entities.DivisionStudentsRow();
                //                        //row.DivisionId = findexDiv.Id;
                //                        row.PromotionDetailId = pdetailid; 
                //                        divisionRow.DivisionStudents = new System.Collections.Generic.List<Entities.DivisionStudentsRow>();
                //                        divisionRow.DivisionStudents.Add(row);
                //                        divisionsaverequest.Entity = divisionRow;
                //                        Master.Repositories.DivisionsRepository divisionsRepository = new Repositories.DivisionsRepository();
                //                        divisionsRepository.Create(uow, divisionsaverequest);


                //                    }
                //                }
                                

                               
                //            }


                //        }
                //    }
                //    else
                //    {
                //        var data=new Transactions.Entities.PromotionsRow();
                //        data.AcadamicYearId = x.Id;
                //        data.ToCourse = request.Entity.JoiningCourse ?? 0;
                //        //data.PromotionType = PromotionTypes.Value2;

                //        data.CreatedDate = DateTime.Today;
                //        //data.CreatedBy = 1;
                       
                //        SaveRequest<Transactions.Entities.PromotionsRow> saverequest = new SaveRequest<Transactions.Entities.PromotionsRow>();
                //        saverequest.Entity = data;
                //        var result = productsRepository.Create(uow, saverequest);
                //        Transactions.Entities.PromotionDetailsRow d = new Transactions.Entities.PromotionDetailsRow();
                //        d.StudentId = request.Entity.Id;
                //        d.IsCompleted = false;
                //        d.PromotionType = PromotionTypes.Value2;
                //        int promotionid = 0;
                //        int.TryParse(result.EntityId.ToString(), out promotionid);
                //        d.PromotionId = promotionid;

                //        SaveRequest<Transactions.Entities.PromotionDetailsRow> prdetailsaverequest = new SaveRequest<Transactions.Entities.PromotionDetailsRow>();
                //        prdetailsaverequest.Entity = d;

                //        Transactions.Repositories.PromotionDetailsRepository promotiondetailrepository = new Transactions.Repositories.PromotionDetailsRepository();
                //        var resprdetail= promotiondetailrepository.Create(uow, prdetailsaverequest);
                //        //data.PromotionDetail = new System.Collections.Generic.List<Transactions.Entities.PromotionDetailsRow>();
                //        var coursedivisons = new DivisionDetailsHelper().GetDefaultCourseDivsions(uow.Connection,request.Entity.JoiningCourse??0);
                //        Master.Repositories.DivisionsRepository divisionsRepository = new Repositories.DivisionsRepository();
                //        Master.Repositories.CourseDivisionsRepository courseDivisionsRepository = new Repositories.CourseDivisionsRepository();
                //        var coursediv = new RetrieveResponse<Master.Entities.CourseDivisionsRow>();
                //        if (request.Entity.JoiningDivisionId > 0)
                //        {
                //            RetrieveRequest retrieveRequestcouserdivision = new RetrieveRequest();
                //            retrieveRequestcouserdivision.EntityId = request.Entity.JoiningDivisionId;
                //            coursediv = courseDivisionsRepository.Retrieve(uow.Connection, retrieveRequestcouserdivision);
                //        }
                //        foreach (var div in coursedivisons)
                //        {
                //            SaveRequest<Master.Entities.DivisionsRow> divisionsaverequest = new SaveRequest<Master.Entities.DivisionsRow>();
                //            Master.Entities.DivisionsRow divisionRow = new Entities.DivisionsRow();
                //            int pdetailid = 0;
                //            int.TryParse(resprdetail.EntityId.ToString(), out pdetailid);
                            
                //            divisionRow.PromotionId = promotionid;
                //            divisionRow.AcadamicYearId = data.AcadamicYearId;
                //            divisionRow.DivisionCode = div.DivisionCode;
                //            if (request.Entity.JoiningDivisionId > 0)
                //            {
                //                if (coursediv.Entity.Id == div.Id)
                //                {
                //                    Master.Entities.DivisionStudentsRow row = new Entities.DivisionStudentsRow();
                //                    //row.DivisionId = findexDiv.Id;
                //                    row.PromotionDetailId = pdetailid;
                //                    divisionRow.DivisionStudents = new System.Collections.Generic.List<Entities.DivisionStudentsRow>();
                //                    divisionRow.DivisionStudents.Add(row);
                //                }
                               
                                
                //            }
                //            divisionsaverequest.Entity = divisionRow;
                //            divisionsRepository.Create(uow, divisionsaverequest);
                //        }

                //    }
                //}
            }
            return res;
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var res= new MyRepository().Update(uow, request);
            if (res.Error == null)
            {
                

                //var exsist = new DivisionDetailsHelper().GetAdmissionPromotion(request.Entity.Id??0);
                //if (exsist.Id > 0)
                //{
                //    if (exsist.PromotionToCourse != request.Entity.JoiningCourse)
                //    {
                //        Transactions.Repositories.PromotionDetailsRepository promotionDetailsRepository = new Transactions.Repositories.PromotionDetailsRepository();
                //        DeleteRequest deleteRequest = new DeleteRequest();
                //        deleteRequest.EntityId = exsist.Id;
                //        promotionDetailsRepository.Delete(uow, deleteRequest);


                //        Transactions.Repositories.PromotionsRepository productsRepository = new Transactions.Repositories.PromotionsRepository();


                //        var y = new DivisionDetailsHelper().GetPromotion(exsist.PromotionAcadamicYearId ?? 0, request.Entity.JoiningCourse ?? 0);
                //        if (y.Id > 0)
                //        {
                //            RetrieveRequest retrieveRequest = new RetrieveRequest();
                //            retrieveRequest.EntityId = y.Id;
                //            var data = productsRepository.Retrieve(uow.Connection, retrieveRequest);
                //            if (data != null)
                //            {
                //                Transactions.Entities.PromotionDetailsRow d = new Transactions.Entities.PromotionDetailsRow();
                //                d.StudentId = request.Entity.Id;
                //                d.IsCompleted = false;
                //                d.PromotionType = PromotionTypes.Value2;
                //                data.Entity.PromotionDetail.Add(d);
                //                SaveRequest<Transactions.Entities.PromotionsRow> saverequest = new SaveRequest<Transactions.Entities.PromotionsRow>();
                //                saverequest.Entity = data.Entity;
                //                saverequest.EntityId = data.Entity.Id;
                //                var result = productsRepository.Update(uow, saverequest);


                //            }
                //        }
                //        else
                //        {
                //            var data = new Transactions.Entities.PromotionsRow();
                //            data.AcadamicYearId = exsist.PromotionAcadamicYearId;
                //            data.ToCourse = request.Entity.JoiningCourse ?? 0;
                //            //data.PromotionType = PromotionTypes.Value2;
                //            data.CreatedDate = DateTime.Today;
                //            //data.CreatedBy = 1;
                //            Transactions.Entities.PromotionDetailsRow d = new Transactions.Entities.PromotionDetailsRow();
                //            d.StudentId = request.Entity.Id;
                //            d.IsCompleted = false;
                //            d.PromotionType = PromotionTypes.Value2;
                //            data.PromotionDetail = new System.Collections.Generic.List<Transactions.Entities.PromotionDetailsRow>();
                //            data.PromotionDetail.Add(d);
                //            SaveRequest<Transactions.Entities.PromotionsRow> saverequest = new SaveRequest<Transactions.Entities.PromotionsRow>();
                //            saverequest.Entity = data;
                //            var result = productsRepository.Create(uow, saverequest);

                //        }
                //    }
                //}
            }
            return res;
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            //var stingid = request.EntityId.ToString();

            //int id = 0;
            //int.TryParse(stingid,out id);
            //var exsist = new DivisionDetailsHelper().GetAdmissionPromotion(id);
            //if (exsist.Id > 0)
            //{
                
            //        Transactions.Repositories.PromotionDetailsRepository promotionDetailsRepository = new Transactions.Repositories.PromotionDetailsRepository();
            //        DeleteRequest deleteRequest = new DeleteRequest();
            //        deleteRequest.EntityId = exsist.Id;
            //        promotionDetailsRepository.Delete(uow, deleteRequest);
                
            //}
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
            var listofcourses = new List<int>();
            foreach (var x in request.EqualityFilter)
            {
                if (x.Key == "CurrentCourses")
                {

                    IEnumerable myList = x.Value as IEnumerable;
                    if (myList != null)
                    {
                        foreach (object element in myList)
                        {
                           var intitem= Newtonsoft.Json.JsonConvert.DeserializeObject<int>(element.ToString());
                            listofcourses.Add(intitem);
                        }
                    }

                }
            }
            request.EqualityFilter.Remove("CurrentCourses");
            if (listofcourses.Count > 0)
            {
                CurrentCourseRequest currentCourseRequest = new CurrentCourseRequest();
                currentCourseRequest.promotionid = listofcourses;
                var stconnection = SqlConnections.NewFor<StudentsRow>();
                var items= new DivisionDetailsHelper().StudentGridCurrentCourses(stconnection, currentCourseRequest);
                if (items.Count() == 0)
                {

                    items[0] = 1;
                    //items.AddRange(0);
                }
                
                request.EqualityFilter["CurrentCourses"] = items;
            }
          

            return new MyRepository().List(connection, request);
        }
        [HttpPost]
        [AutoValidateAntiforgeryToken]
        public Administration.Entities.SettingsRow GetConfig(IDbConnection connection, ConfigRequest request)
        {
            return new DivisionDetailsHelper().GetConfig(connection, request);
        }
        public GetNextNumberResponse GetNextNumber(IDbConnection connection, GetNextNumberRequest request)
        {
            return new MyRepository().GetNextNumber(connection, request);
        }
        public CampusesRow GetDefaultCampus(IDbConnection connection, GetNextNumberRequest request)
        {
            return new DivisionDetailsHelper().GetDefaultCampus(connection);
        }
       
        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;

            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.StudentsColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "Students_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
    }
}
