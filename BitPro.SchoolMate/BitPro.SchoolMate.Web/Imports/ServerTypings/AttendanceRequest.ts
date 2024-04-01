namespace BitPro.SchoolMate {
    export interface AttendanceRequest extends Serenity.ServiceRequest {
        date?: string;
        type?: number;
        courseid?: number;
        divid?: number;
    }
}
