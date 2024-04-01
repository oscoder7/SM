namespace BitPro.SchoolMate {
    export interface CourseFeeResponce extends Serenity.ServiceResponse {
        CourseFeeId?: number;
        FeeStructureId?: number;
        FeeAmount?: number;
        FeeCode?: string;
        TermName?: string;
        TermId?: number;
        AcadamicYearId?: number;
        CourseId?: number;
    }
}
