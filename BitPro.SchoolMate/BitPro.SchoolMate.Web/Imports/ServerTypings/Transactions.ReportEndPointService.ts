namespace BitPro.SchoolMate.Transactions {
    export namespace ReportEndPointService {
        export const baseUrl = 'Transactions/ReportEndPoint';

        export declare function CourseFeePending(request: CourseFeeRequest, onSuccess?: (response: System.Collections.Generic.List<CourseFeeResponse>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function CourseStudentMarks(request: CourseStudentsMarkRequest, onSuccess?: (response: System.Collections.Generic.List<CourseStudentsMarkResponse>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function CoursePromotionsByAcadamicYear(request: PromotionByAcadamicYearRequest, onSuccess?: (response: System.Collections.Generic.List<PromotionCurrentAcadamicYearResponse>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function TersmsByAcadamicYear(request: PromotionByAcadamicYearRequest, onSuccess?: (response: System.Collections.Generic.List<SchoolMate.Master.FeeTermsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetExamMarkByPromotion(request: ExamMarkRequest, onSuccess?: (response: System.Collections.Generic.List<ProgressCard>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            CourseFeePending = "Transactions/ReportEndPoint/CourseFeePending",
            CourseStudentMarks = "Transactions/ReportEndPoint/CourseStudentMarks",
            CoursePromotionsByAcadamicYear = "Transactions/ReportEndPoint/CoursePromotionsByAcadamicYear",
            TersmsByAcadamicYear = "Transactions/ReportEndPoint/TersmsByAcadamicYear",
            GetExamMarkByPromotion = "Transactions/ReportEndPoint/GetExamMarkByPromotion"
        }

        [
            'CourseFeePending', 
            'CourseStudentMarks', 
            'CoursePromotionsByAcadamicYear', 
            'TersmsByAcadamicYear', 
            'GetExamMarkByPromotion'
        ].forEach(x => {
            (<any>ReportEndPointService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
