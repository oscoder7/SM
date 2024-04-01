namespace BitPro.SchoolMate {
    export interface DivisonRequest extends Serenity.ServiceRequest {
        AcadamicYearId?: number;
        DivisionIds?: number;
        courseid?: number;
    }
}
