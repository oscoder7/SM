namespace BitPro.SchoolMate {
    export interface AcadamicYearSubjectResponse extends Serenity.ServiceResponse {
        promotionid?: number;
        CousrseName?: string;
        SubjectId?: number;
        SubjectName?: string;
        MaxMark?: number;
    }
}
