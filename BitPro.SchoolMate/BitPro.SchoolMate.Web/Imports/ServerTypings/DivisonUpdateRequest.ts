namespace BitPro.SchoolMate {
    export interface DivisonUpdateRequest extends Serenity.ServiceRequest {
        StudentId?: number;
        AcadamicYearId?: number;
        DivisionIds?: number;
    }
}
