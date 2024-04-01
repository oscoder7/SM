namespace BitPro.SchoolMate {
    export interface FeeDueRequest extends Serenity.ServiceRequest {
        acadamicYearRows?: SchoolMate.Master.AcadamicYearRow[];
        terms?: SchoolMate.Master.FeeTermsRow[];
    }
}
