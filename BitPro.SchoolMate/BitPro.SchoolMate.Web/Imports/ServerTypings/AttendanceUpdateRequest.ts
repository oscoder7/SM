namespace BitPro.SchoolMate {
    export interface AttendanceUpdateRequest extends Serenity.ServiceRequest {
        attendanceid?: number;
        status?: number;
    }
}
