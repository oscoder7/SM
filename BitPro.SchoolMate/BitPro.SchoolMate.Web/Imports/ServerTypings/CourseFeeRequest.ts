namespace BitPro.SchoolMate {
    export interface CourseFeeRequest extends Serenity.ServiceRequest {
        courseid?: number;
        termid?: number;
        all?: boolean;
    }
}
