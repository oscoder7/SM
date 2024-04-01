using BitPro.SchoolMate.Master.Entities;
using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BitPro.SchoolMate
{

    public class DivisonRequest : ServiceRequest
    {
        public int AcadamicYearId { get; set; }
        public int DivisionIds { get; set; }
        public int courseid { get; set; }
    }
    public class DivisonUpdateRequest : ServiceRequest
    {
        public int StudentId { get; set; }
        public int AcadamicYearId { get; set; }
        public int DivisionIds { get; set; }
    }
    public class DivisonResponse : ServiceResponse
    {
        public int StudentId { get; set; }
        public string StudentName { get; set; }
        public bool Status { get; set; }
    }
    public class CourseStudentResponse : ServiceResponse
    {
        public int StudentId { get; set; }
        public string type { get; set; }
        public string StudentName { get; set; }
        public int promotiondetailid { get; set; }
    }
    public class PromotionRequest : ServiceRequest
    {
        public int FromCouseId { get; set; }
        public int ToCouseId { get; set; }
        public int AcadamicYearId { get; set; }
        public int PromotionId { get; set; }
    }
    public class PromotionInsertRequest : ServiceRequest
    {
        public int StudentId { get; set; }
        public int PromotionId { get; set; }
        public int promotiondetailid { get; set; }
        public int divid { get; set; }
    }
    public class AttendanceRequest : ServiceRequest
    {
        public DateTime date { get; set; }
        public int type { get; set; }
        public int courseid { get; set; }
        public int divid { get; set; }

    }
    public class AttendanceUpdateRequest : ServiceRequest
    {
        public int attendanceid { get; set; }
        public int status { get; set; }

    }
    public class StudentCurrentPromotion : ServiceRequest
    {
        public int StudentId { get; set; }

    }
    public class CourseFeeStructure : ServiceRequest
    {
        public int CourseFeeId { get; set; }
        public int StudentId { get; set; }
        public int PromotionDetailIdId { get; set; }
        public int acadamicyearid { get; set; }
        public bool all { get; set; }

    }
    public class CourseFeeStructureResponce : ServiceResponse
    {
        public int FeeStructureId { get; set; }
        public string TermName { get; set; }

    }
    public class StudentCurrentPromotionResponce : ServiceResponse
    {
        public int CourseId { get; set; }
        public string CourseCode { get; set; }

    }
    public class CourseFeeAmountRequest : ServiceRequest
    {
        public int CourseFeeId { get; set; }
        public int FeeSturctureId { get; set; }
        public int StudentId { get; set; }

    }
    public class CourseFeeAmountResponse : ServiceResponse
    {
        public decimal FeeAmount { get; set; }
        public decimal FeeExcemptionsPer { get; set; }
        public decimal Amount { get; set; }

    }
    public class CourseFeeResponce : ServiceResponse
    {
        public int CourseFeeId { get; set; }
        public int FeeStructureId { get; set; }
        public decimal FeeAmount { get; set; }
        public string FeeCode { get; set; }
        public string TermName { get; set; }
        public int TermId { get; set; }
        public int AcadamicYearId { get; set; }
        public int CourseId { get; set; }

    }
    public class UpdateListAttendanceRequest : ServiceRequest
    {
        public List<Transactions.Entities.AttandanceRow> date { get; set; }
        public int status { get; set; }


    }
    public class CourseFeeRequest : ServiceRequest
    {
        public int courseid { get; set; }
        public int termid { get; set; }
        public bool all { get; set; }

    }
    public class TransportationFeeRequest : ServiceRequest
    {
        public int studentid { get; set; }
       

    }
    
    public class CourseFeeResponse : ServiceResponse
    {
        public Master.Entities.StudentsRow student { get; set; }
        public List<CourseFeeResponce> pendingfees { get; set; }


    }
    public class FeeDueRequest : ServiceRequest
    {
        public List<AcadamicYearRow> acadamicYearRows { get; set; }
        public List<FeeTermsRow> terms { get; set; }


    }
    public class LastAcadamicTermsResponse : ServiceResponse
    {

        public string TermName { get; set; }

    }
    public class AcadamicYearTermsResponse : ServiceResponse
    {
        public string TermId { get; set; }
        public string AcadamicYearId { get; set; }
        public string TermName { get; set; }
        public string AcadamicYear { get; set; }

    }
    public class CourseStudentsMarkRequest : ServiceRequest
    {
        public int courseid { get; set; }
        public int studentid { get; set; }

    }
    public class CourseStudentsMarkResponse : ServiceResponse
    {
        public int StudentId { get; set; }
        public int ExamId { get; set; }
        public int SubjectId { get; set; }
        public string StudentName { get; set; }
        public string ExamName { get; set; }
        public DateTime ExamDate { get; set; }
        public string SubjectName { get; set; }
        public decimal Mark { get; set; }
        public decimal MaxMarks { get; set; }

    }
    public class PromotionCurrentAcadamicYearResponse : ServiceResponse
    {
        public int promotionid { get; set; }
        public string CousrseName { get; set; }
    }
    public class PromotionByAcadamicYearRequest : ServiceRequest
    {
        public int acadamicyearid { get; set; }


    }
    public class ExamMarkRequest : ServiceRequest
    {
        public int promotionid { get; set; }


    }
    public class CouseDivisionRequest : ServiceRequest
    {
        public int courseid { get; set; }


    }
    public class CouseDivisionResponse : ServiceResponse
    {
        public string DivisionCode { get; set; }


    }
    public class ExamMarkResponse : ServiceRequest
    {
        public int StudentID { get; set; }
        public int ExamId { get; set; }
        public int SubjectId { get; set; }
        public string Campus { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string FatherName { get; set; }
        public string StudentName { get; set; }
        public string CourseName { get; set; }
        public string ExamName { get; set; }
        public string SubjectName { get; set; }
        public decimal Mark { get; set; }
        public decimal MaxMark { get; set; }

    }
    public class PromotionDivisionResponse : ServiceResponse
    {
        public int promotiondetailsid { get; set; }
        public string StudentName { get; set; }
    }
    public class VoucherNoRequest : ServiceRequest
    {
        public int vouchertype { get; set; }


    }
    public class AcadamicYearCourseSubjectsRequest : ServiceRequest
    {
        public int acadamicyearid { get; set; }


    }
    public class VoucherNoResponse : ServiceResponse
    {
        public int voucherno { get; set; }


    }
    public class AcadamicYearSubjectResponse : ServiceResponse
    {
        public int promotionid { get; set; }
        public string CousrseName { get; set; }
        public int SubjectId { get; set; }
        public string SubjectName { get; set; }
        public decimal MaxMark { get; set; }

    }
    public class AcadamicYearCourseSubjectResponse : ServiceResponse
    {
        public int promotionid { get; set; }
        public string CousrseName { get; set; }
        public List<CourseSubjectResponse> courseSubjectResponses { get; set; }


    }
    public class CourseSubjectResponse : ServiceResponse
    {
        public int SubjectId { get; set; }
        public string SubjectName { get; set; }
        public decimal MaxMark { get; set; }


    }
    public class ConfigRequest : ServiceRequest
    {
        public string ConfigName { get; set; }


    }
    public class SalaryRequest : ServiceRequest
    {
        public DateTime start { get; set; }
        public DateTime to { get; set; }
        public int staffid { get; set; }

    }
    public class SalaryResponse : ServiceResponse
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string StaffName { get; set; }
        public decimal SalaryAmount { get; set; }
        public int DaysCount { get; set; }
        public decimal DailyWage { get; set; }
        public int TotalPresent { get; set; }
        public int TotalAbsente { get; set; }
        public decimal payableamount { get; set; }

    }
    public class MaximumMarkResponse : ServiceResponse
    {
        public decimal MaxMark { get; set; }

    }
    public class MaximumMarkRequest : ServiceRequest
    {
        public int promotionid { get; set; }
        public int coursesubjectid { get; set; }


    }
    public class CurrentCourseRequest : ServiceRequest
    {
        public List<int> promotionid { get; set; }
       


    }
}
