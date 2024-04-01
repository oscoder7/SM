namespace BitPro.SchoolMate {
    export interface AcadamicYearCourseSubjectResponse extends Serenity.ServiceResponse {
        promotionid?: number;
        CousrseName?: string;
        courseSubjectResponses?: CourseSubjectResponse[];
    }
}
