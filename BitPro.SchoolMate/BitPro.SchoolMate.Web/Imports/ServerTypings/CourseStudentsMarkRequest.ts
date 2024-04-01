namespace BitPro.SchoolMate {
    export interface CourseStudentsMarkRequest extends Serenity.ServiceRequest {
        courseid?: number;
        studentid?: number;
    }
}
