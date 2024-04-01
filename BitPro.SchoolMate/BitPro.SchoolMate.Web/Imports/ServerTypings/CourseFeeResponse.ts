namespace BitPro.SchoolMate {
    export interface CourseFeeResponse extends Serenity.ServiceResponse {
        student?: SchoolMate.Master.StudentsRow;
        pendingfees?: CourseFeeResponce[];
    }
}
