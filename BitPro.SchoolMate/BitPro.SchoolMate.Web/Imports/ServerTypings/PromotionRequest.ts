namespace BitPro.SchoolMate {
    export interface PromotionRequest extends Serenity.ServiceRequest {
        FromCouseId?: number;
        ToCouseId?: number;
        AcadamicYearId?: number;
        PromotionId?: number;
    }
}
