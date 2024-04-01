namespace BitPro.SchoolMate {
    export interface CourseFeeAmountResponse extends Serenity.ServiceResponse {
        FeeAmount?: number;
        FeeExcemptionsPer?: number;
        Amount?: number;
    }
}
