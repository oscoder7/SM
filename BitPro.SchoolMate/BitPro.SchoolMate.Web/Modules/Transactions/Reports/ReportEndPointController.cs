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
    using BitPro.SchoolMate.Master.Entities;
    using System.Linq;

    [Route("Services/Transactions/ReportEndPoint/[action]")]
    [ConnectionKey(typeof(MyRow))]
    public class ReportEndPointController : ServiceEndpoint
    {
        [HttpPost]
        public List<CourseFeeResponse> CourseFeePending(IUnitOfWork uow, CourseFeeRequest request)
        {
            var x = new DivisionDetailsHelper().GetPendingFeeByCourse(uow.Connection, request);
            return x;
        }
        [HttpPost]
        public List<CourseStudentsMarkResponse> CourseStudentMarks(IUnitOfWork uow, CourseStudentsMarkRequest request)
        {
            var x = new DivisionDetailsHelper().GetStudentMarksByCourse(uow.Connection, request);
            return x;
        }
        [HttpPost]
        public List<PromotionCurrentAcadamicYearResponse> CoursePromotionsByAcadamicYear(IUnitOfWork uow, PromotionByAcadamicYearRequest request)
        {
            var x = new DivisionDetailsHelper().GetPromotionByAcadamicYear(uow.Connection, request.acadamicyearid);
            return x;
        }
        [HttpPost]
        public List<FeeTermsRow> TersmsByAcadamicYear(IUnitOfWork uow, PromotionByAcadamicYearRequest request)
        {
            var x = new DivisionDetailsHelper().GetTermsByAcadamicYear(uow.Connection, request.acadamicyearid);
            return x;
        }
        [HttpPost]
        public List<ProgressCard> GetExamMarkByPromotion(IUnitOfWork uow, ExamMarkRequest request)
        {
            var x = new DivisionDetailsHelper().GetExamMark(uow.Connection, request);
            var groupedStudentList = x.GroupBy(u => u.StudentID).Select(grp => grp.ToList()).ToList();
            List<ProgressCard> progressCards = new List<ProgressCard>();
            foreach (var item in groupedStudentList)
            {
                ProgressCard progressCard = new ProgressCard(item);
                progressCards.Add(progressCard);
            }
            return progressCards;
            
        }
       
        public class ProgressCard
        {
            public string Campus { get; set; }
            public string Address { get; set; }
            public string Phone { get; set; }
            public string student { get; set; }
            public string CourseName { get; set; }
            public string FatherName { get; set; }
            public List<ExamsRow> Exams { get; set; }
            public List<dynamic> Subjects { get; set; }
            

            public ProgressCard(List<ExamMarkResponse> listofstudent)
            {
                student = listofstudent[0].StudentName;
                Campus = listofstudent[0].Campus;
                Address = listofstudent[0].Address;
                Phone = listofstudent[0].Phone;
                CourseName = listofstudent[0].CourseName;
                FatherName = listofstudent[0].FatherName;
                var groupedExamList = listofstudent.OrderBy(y=>y.ExamId).GroupBy(u => u.ExamId).Select(grp => grp.ToList()).ToList();
                Exams = new List<ExamsRow>();
                Subjects = new List<dynamic>();
                foreach (var exams in groupedExamList)
                {
                    var item = new ExamsRow();
                    item.Id = exams[0].ExamId;
                    item.ExamName = exams[0].ExamName;
                    Exams.Add(item);
                    foreach(var subj in exams)
                    {
                        Subjects.Add(new { ExamId = subj.ExamId,subjectid=subj.SubjectId, SubjectName = subj.SubjectName,Mark=subj.Mark, MaxMark=subj.MaxMark });
                      
                    }
                    
                }
            }

        }
    }
}