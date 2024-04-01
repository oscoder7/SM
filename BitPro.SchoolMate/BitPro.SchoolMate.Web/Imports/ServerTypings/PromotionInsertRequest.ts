namespace BitPro.SchoolMate {
    export interface PromotionInsertRequest extends Serenity.ServiceRequest {
        StudentId?: number;
        PromotionId?: number;
        promotiondetailid?: number;
        divid?: number;
    }
}
