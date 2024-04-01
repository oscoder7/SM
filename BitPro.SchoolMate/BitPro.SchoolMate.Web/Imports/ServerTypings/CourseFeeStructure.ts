namespace BitPro.SchoolMate {
    export interface CourseFeeStructure extends Serenity.ServiceRequest {
        CourseFeeId?: number;
        StudentId?: number;
        PromotionDetailIdId?: number;
        acadamicyearid?: number;
        all?: boolean;
    }
}
