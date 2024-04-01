namespace BitPro.SchoolMate {
    export interface CourseFeeAmountRequest extends Serenity.ServiceRequest {
        CourseFeeId?: number;
        FeeSturctureId?: number;
        StudentId?: number;
    }
}
