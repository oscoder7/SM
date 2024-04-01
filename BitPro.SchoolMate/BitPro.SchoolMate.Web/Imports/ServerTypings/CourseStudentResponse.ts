namespace BitPro.SchoolMate {
    export interface CourseStudentResponse extends Serenity.ServiceResponse {
        StudentId?: number;
        type?: string;
        StudentName?: string;
        promotiondetailid?: number;
    }
}
