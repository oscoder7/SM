
namespace BitPro.SchoolMate.Transactions.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.AdmissionRepository;
    using MyRow = Entities.AdmissionRow;
    using System;

    [Route("Services/Transactions/Admission/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class AdmissionController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var res= new MyRepository().Create(uow, request);
            if (res.Error == null)
            {
                Transactions.Repositories.PromotionsRepository productsRepository = new Transactions.Repositories.PromotionsRepository();

                var x = new DivisionDetailsHelper().GetCurrentAcadamicYear();
                if (x.Id > 0)
                {
                    var y = new DivisionDetailsHelper().GetPromotion(x.Id ?? 0, request.Entity.JoiningCourse ?? 0);
                    if (y.Id > 0)
                    {
                        RetrieveRequest retrieveRequest = new RetrieveRequest();
                        retrieveRequest.EntityId = y.Id;
                        var data = productsRepository.Retrieve(uow.Connection, retrieveRequest);
                        if (data != null)
                        {
                            Transactions.Entities.PromotionDetailsRow d = new Transactions.Entities.PromotionDetailsRow();
                            d.StudentId = request.Entity.StudentId;
                            d.PromotionId = data.Entity.Id;
                            d.IsCompleted = false;
                            d.PromotionType = PromotionTypes.Value2;
                            data.Entity.PromotionDetail.Add(d);
                            SaveRequest<Transactions.Entities.PromotionDetailsRow> saverequest = new SaveRequest<Transactions.Entities.PromotionDetailsRow>();
                            saverequest.Entity = d;
                            saverequest.EntityId = data.Entity.Id;
                            Transactions.Repositories.PromotionDetailsRepository promotionDetailsRepository = new Transactions.Repositories.PromotionDetailsRepository();
                            var result = promotionDetailsRepository.Create(uow, saverequest);

                            if (result != null)
                            {
                                if (request.Entity.JoiningDivisionId > 0)
                                {
                                    var findexDiv = new DivisionDetailsHelper().GetExsistingDivisionByCode(uow.Connection, data.Entity.Id ?? 0, request.Entity.JoiningDivisionId ?? 0);
                                    if (findexDiv != null)
                                    {
                                        SaveRequest<Master.Entities.DivisionStudentsRow> divisionstudentsaverequest = new SaveRequest<Master.Entities.DivisionStudentsRow>();
                                        Master.Entities.DivisionStudentsRow divisionStudentsRow = new Master.Entities.DivisionStudentsRow();
                                        divisionStudentsRow.DivisionId = findexDiv.Id;
                                        int pdetailid = 0;
                                        int.TryParse(result.EntityId.ToString(), out pdetailid);
                                        divisionStudentsRow.PromotionDetailId = pdetailid;
                                        divisionstudentsaverequest.Entity = divisionStudentsRow;

                                        Master.Repositories.DivisionStudentsRepository divisionStudentsRepository = new Master.Repositories.DivisionStudentsRepository();
                                        divisionStudentsRepository.Create(uow, divisionstudentsaverequest);

                                    }
                                    else
                                    {
                                        RetrieveRequest retrieveRequestcouserdivision = new RetrieveRequest();
                                        retrieveRequestcouserdivision.EntityId = request.Entity.JoiningDivisionId;
                                        Master.Repositories.CourseDivisionsRepository courseDivisionsRepository = new Master.Repositories.CourseDivisionsRepository();
                                        var coursediv = courseDivisionsRepository.Retrieve(uow.Connection, retrieveRequestcouserdivision);

                                        SaveRequest<Master.Entities.DivisionsRow> divisionsaverequest = new SaveRequest<Master.Entities.DivisionsRow>();
                                        Master.Entities.DivisionsRow divisionRow = new Master.Entities.DivisionsRow();
                                        int pdetailid = 0;
                                        int.TryParse(result.EntityId.ToString(), out pdetailid);
                                        divisionRow.PromotionId = data.Entity.Id;
                                        divisionRow.AcadamicYearId = data.Entity.AcadamicYearId;
                                        divisionRow.DivisionCode = coursediv.Entity.DivisionCode;

                                        Master.Entities.DivisionStudentsRow row = new Master.Entities.DivisionStudentsRow();
                                        //row.DivisionId = findexDiv.Id;
                                        row.PromotionDetailId = pdetailid;
                                        divisionRow.DivisionStudents = new System.Collections.Generic.List<Master.Entities.DivisionStudentsRow>();
                                        divisionRow.DivisionStudents.Add(row);
                                        divisionsaverequest.Entity = divisionRow;
                                        Master.Repositories.DivisionsRepository divisionsRepository = new Master.Repositories.DivisionsRepository();
                                        divisionsRepository.Create(uow, divisionsaverequest);


                                    }
                                }



                            }


                        }
                    }
                    else
                    {
                        var data = new Transactions.Entities.PromotionsRow();
                        data.AcadamicYearId = x.Id;
                        data.ToCourse = request.Entity.JoiningCourse ?? 0;
                        //data.PromotionType = PromotionTypes.Value2;

                        data.CreatedDate = DateTime.Today;
                        //data.CreatedBy = 1;

                        SaveRequest<Transactions.Entities.PromotionsRow> saverequest = new SaveRequest<Transactions.Entities.PromotionsRow>();
                        saverequest.Entity = data;
                        var result = productsRepository.Create(uow, saverequest);
                        Transactions.Entities.PromotionDetailsRow d = new Transactions.Entities.PromotionDetailsRow();
                        d.StudentId = request.Entity.StudentId;
                        d.IsCompleted = false;
                        d.PromotionType = PromotionTypes.Value2;
                        int promotionid = 0;
                        int.TryParse(result.EntityId.ToString(), out promotionid);
                        d.PromotionId = promotionid;

                        SaveRequest<Transactions.Entities.PromotionDetailsRow> prdetailsaverequest = new SaveRequest<Transactions.Entities.PromotionDetailsRow>();
                        prdetailsaverequest.Entity = d;

                        Transactions.Repositories.PromotionDetailsRepository promotiondetailrepository = new Transactions.Repositories.PromotionDetailsRepository();
                        var resprdetail = promotiondetailrepository.Create(uow, prdetailsaverequest);
                        //data.PromotionDetail = new System.Collections.Generic.List<Transactions.Entities.PromotionDetailsRow>();
                        var coursedivisons = new DivisionDetailsHelper().GetDefaultCourseDivsions(uow.Connection, request.Entity.JoiningCourse ?? 0);
                        Master.Repositories.DivisionsRepository divisionsRepository = new Master.Repositories.DivisionsRepository();
                        Master.Repositories.CourseDivisionsRepository courseDivisionsRepository = new Master.Repositories.CourseDivisionsRepository();
                        var coursediv = new RetrieveResponse<Master.Entities.CourseDivisionsRow>();
                        if (request.Entity.JoiningDivisionId > 0)
                        {
                            RetrieveRequest retrieveRequestcouserdivision = new RetrieveRequest();
                            retrieveRequestcouserdivision.EntityId = request.Entity.JoiningDivisionId;
                            coursediv = courseDivisionsRepository.Retrieve(uow.Connection, retrieveRequestcouserdivision);
                        }
                        foreach (var div in coursedivisons)
                        {
                            SaveRequest<Master.Entities.DivisionsRow> divisionsaverequest = new SaveRequest<Master.Entities.DivisionsRow>();
                            Master.Entities.DivisionsRow divisionRow = new Master.Entities.DivisionsRow();
                            int pdetailid = 0;
                            int.TryParse(resprdetail.EntityId.ToString(), out pdetailid);

                            divisionRow.PromotionId = promotionid;
                            divisionRow.AcadamicYearId = data.AcadamicYearId;
                            divisionRow.DivisionCode = div.DivisionCode;
                            if (request.Entity.JoiningDivisionId > 0)
                            {
                                if (coursediv.Entity.Id == div.Id)
                                {
                                    Master.Entities.DivisionStudentsRow row = new Master.Entities.DivisionStudentsRow();
                                    //row.DivisionId = findexDiv.Id;
                                    row.PromotionDetailId = pdetailid;
                                    divisionRow.DivisionStudents = new System.Collections.Generic.List<Master.Entities.DivisionStudentsRow>();
                                    divisionRow.DivisionStudents.Add(row);
                                }


                            }
                            divisionsaverequest.Entity = divisionRow;
                            divisionsRepository.Create(uow, divisionsaverequest);
                        }

                    }
                }
            }
            return res;
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            RetrieveRequest exdataretrieveRequest = new RetrieveRequest();
            exdataretrieveRequest.EntityId = request.EntityId;
            var xdata = new MyRepository().Retrieve(uow.Connection, exdataretrieveRequest);
            var exsist = new DivisionDetailsHelper().GetAdmissionPromotion(request.Entity.StudentId ?? 0, xdata.Entity.JoiningCourse ?? 0);
            var res = new MyRepository().Update(uow, request);
            if (res.Error == null)
            {
                if (exsist.Id > 0)
                {
                    if (exsist.PromotionToCourse != request.Entity.JoiningCourse)
                    {
                        Transactions.Repositories.PromotionDetailsRepository promotionDetailsRepository = new Transactions.Repositories.PromotionDetailsRepository();
                        DeleteRequest deleteRequest = new DeleteRequest();
                        deleteRequest.EntityId = exsist.Id;
                        promotionDetailsRepository.Delete(uow, deleteRequest);


                        Transactions.Repositories.PromotionsRepository productsRepository = new Transactions.Repositories.PromotionsRepository();


                        var y = new DivisionDetailsHelper().GetPromotion(exsist.PromotionAcadamicYearId ?? 0, request.Entity.JoiningCourse ?? 0);
                        if (y.Id > 0)
                        {
                            RetrieveRequest retrieveRequest = new RetrieveRequest();
                            retrieveRequest.EntityId = y.Id;
                            var data = productsRepository.Retrieve(uow.Connection, retrieveRequest);
                            if (data != null)
                            {
                                Transactions.Entities.PromotionDetailsRow d = new Transactions.Entities.PromotionDetailsRow();
                                d.StudentId = request.Entity.StudentId;
                                d.PromotionId = data.Entity.Id;
                                d.IsCompleted = false;
                                d.PromotionType = PromotionTypes.Value2;
                                data.Entity.PromotionDetail.Add(d);
                                SaveRequest<Transactions.Entities.PromotionDetailsRow> saverequest = new SaveRequest<Transactions.Entities.PromotionDetailsRow>();
                                saverequest.Entity = d;
                                saverequest.EntityId = data.Entity.Id;
                                //Transactions.Repositories.PromotionDetailsRepository promotionDetailsRepository = new Transactions.Repositories.PromotionDetailsRepository();
                                var result = promotionDetailsRepository.Create(uow, saverequest);

                                if (result != null)
                                {
                                    if (request.Entity.JoiningDivisionId > 0)
                                    {
                                        var findexDiv = new DivisionDetailsHelper().GetExsistingDivisionByCode(uow.Connection, data.Entity.Id ?? 0, request.Entity.JoiningDivisionId ?? 0);
                                        if (findexDiv != null)
                                        {
                                            SaveRequest<Master.Entities.DivisionStudentsRow> divisionstudentsaverequest = new SaveRequest<Master.Entities.DivisionStudentsRow>();
                                            Master.Entities.DivisionStudentsRow divisionStudentsRow = new Master.Entities.DivisionStudentsRow();
                                            divisionStudentsRow.DivisionId = findexDiv.Id;
                                            int pdetailid = 0;
                                            int.TryParse(result.EntityId.ToString(), out pdetailid);
                                            divisionStudentsRow.PromotionDetailId = pdetailid;
                                            divisionstudentsaverequest.Entity = divisionStudentsRow;

                                            Master.Repositories.DivisionStudentsRepository divisionStudentsRepository = new Master.Repositories.DivisionStudentsRepository();
                                            divisionStudentsRepository.Create(uow, divisionstudentsaverequest);

                                        }
                                        else
                                        {
                                            RetrieveRequest retrieveRequestcouserdivision = new RetrieveRequest();
                                            retrieveRequestcouserdivision.EntityId = request.Entity.JoiningDivisionId;
                                            Master.Repositories.CourseDivisionsRepository courseDivisionsRepository = new Master.Repositories.CourseDivisionsRepository();
                                            var coursediv = courseDivisionsRepository.Retrieve(uow.Connection, retrieveRequestcouserdivision);

                                            SaveRequest<Master.Entities.DivisionsRow> divisionsaverequest = new SaveRequest<Master.Entities.DivisionsRow>();
                                            Master.Entities.DivisionsRow divisionRow = new Master.Entities.DivisionsRow();
                                            int pdetailid = 0;
                                            int.TryParse(result.EntityId.ToString(), out pdetailid);
                                            divisionRow.PromotionId = data.Entity.Id;
                                            divisionRow.AcadamicYearId = data.Entity.AcadamicYearId;
                                            divisionRow.DivisionCode = coursediv.Entity.DivisionCode;

                                            Master.Entities.DivisionStudentsRow row = new Master.Entities.DivisionStudentsRow();
                                            //row.DivisionId = findexDiv.Id;
                                            row.PromotionDetailId = pdetailid;
                                            divisionRow.DivisionStudents = new System.Collections.Generic.List<Master.Entities.DivisionStudentsRow>();
                                            divisionRow.DivisionStudents.Add(row);
                                            divisionsaverequest.Entity = divisionRow;
                                            Master.Repositories.DivisionsRepository divisionsRepository = new Master.Repositories.DivisionsRepository();
                                            divisionsRepository.Create(uow, divisionsaverequest);


                                        }
                                    }



                                }


                            }
                        }
                        else
                        {
                            var data = new Transactions.Entities.PromotionsRow();
                            data.AcadamicYearId = exsist.PromotionAcadamicYearId;
                            data.ToCourse = request.Entity.JoiningCourse ?? 0;
                            //data.PromotionType = PromotionTypes.Value2;

                            data.CreatedDate = DateTime.Today;
                            //data.CreatedBy = 1;

                            SaveRequest<Transactions.Entities.PromotionsRow> saverequest = new SaveRequest<Transactions.Entities.PromotionsRow>();
                            saverequest.Entity = data;
                            var result = productsRepository.Create(uow, saverequest);
                            Transactions.Entities.PromotionDetailsRow d = new Transactions.Entities.PromotionDetailsRow();
                            d.StudentId = request.Entity.StudentId;
                            d.IsCompleted = false;
                            d.PromotionType = PromotionTypes.Value2;
                            int promotionid = 0;
                            int.TryParse(result.EntityId.ToString(), out promotionid);
                            d.PromotionId = promotionid;

                            SaveRequest<Transactions.Entities.PromotionDetailsRow> prdetailsaverequest = new SaveRequest<Transactions.Entities.PromotionDetailsRow>();
                            prdetailsaverequest.Entity = d;

                            Transactions.Repositories.PromotionDetailsRepository promotiondetailrepository = new Transactions.Repositories.PromotionDetailsRepository();
                            var resprdetail = promotiondetailrepository.Create(uow, prdetailsaverequest);
                            //data.PromotionDetail = new System.Collections.Generic.List<Transactions.Entities.PromotionDetailsRow>();
                            var coursedivisons = new DivisionDetailsHelper().GetDefaultCourseDivsions(uow.Connection, request.Entity.JoiningCourse ?? 0);
                            Master.Repositories.DivisionsRepository divisionsRepository = new Master.Repositories.DivisionsRepository();
                            Master.Repositories.CourseDivisionsRepository courseDivisionsRepository = new Master.Repositories.CourseDivisionsRepository();
                            var coursediv = new RetrieveResponse<Master.Entities.CourseDivisionsRow>();
                            if (request.Entity.JoiningDivisionId > 0)
                            {
                                RetrieveRequest retrieveRequestcouserdivision = new RetrieveRequest();
                                retrieveRequestcouserdivision.EntityId = request.Entity.JoiningDivisionId;
                                coursediv = courseDivisionsRepository.Retrieve(uow.Connection, retrieveRequestcouserdivision);
                            }
                            foreach (var div in coursedivisons)
                            {
                                SaveRequest<Master.Entities.DivisionsRow> divisionsaverequest = new SaveRequest<Master.Entities.DivisionsRow>();
                                Master.Entities.DivisionsRow divisionRow = new Master.Entities.DivisionsRow();
                                int pdetailid = 0;
                                int.TryParse(resprdetail.EntityId.ToString(), out pdetailid);

                                divisionRow.PromotionId = promotionid;
                                divisionRow.AcadamicYearId = data.AcadamicYearId;
                                divisionRow.DivisionCode = div.DivisionCode;
                                if (request.Entity.JoiningDivisionId > 0)
                                {
                                    if (coursediv.Entity.Id == div.Id)
                                    {
                                        Master.Entities.DivisionStudentsRow row = new Master.Entities.DivisionStudentsRow();
                                        //row.DivisionId = findexDiv.Id;
                                        row.PromotionDetailId = pdetailid;
                                        divisionRow.DivisionStudents = new System.Collections.Generic.List<Master.Entities.DivisionStudentsRow>();
                                        divisionRow.DivisionStudents.Add(row);
                                    }


                                }
                                divisionsaverequest.Entity = divisionRow;
                                divisionsRepository.Create(uow, divisionsaverequest);
                            }

                        }
                    }
                }
            }
            return res;
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            
            var stingid = request.EntityId.ToString();
            
            int id = 0;
            int.TryParse(stingid, out id);
            RetrieveRequest retrieveRequest = new RetrieveRequest();
            retrieveRequest.EntityId = id;
            var ex = new MyRepository().Retrieve(uow.Connection,retrieveRequest);
            var exsist = new DivisionDetailsHelper().GetAdmissionPromotion(ex.Entity.StudentId??0,ex.Entity.JoiningCourse??0);
            if (exsist.Id > 0)
            {

                Transactions.Repositories.PromotionDetailsRepository promotionDetailsRepository = new Transactions.Repositories.PromotionDetailsRepository();
                DeleteRequest deleteRequest = new DeleteRequest();
                deleteRequest.EntityId = exsist.Id;
                promotionDetailsRepository.Delete(uow, deleteRequest);

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
