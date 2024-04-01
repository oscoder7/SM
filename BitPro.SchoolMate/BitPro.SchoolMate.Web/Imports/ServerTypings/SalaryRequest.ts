namespace BitPro.SchoolMate {
    export interface SalaryRequest extends Serenity.ServiceRequest {
        start?: string;
        to?: string;
        staffid?: number;
    }
}
