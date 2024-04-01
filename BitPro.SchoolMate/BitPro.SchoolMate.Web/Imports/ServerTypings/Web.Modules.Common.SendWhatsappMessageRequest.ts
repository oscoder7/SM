namespace BitPro.SchoolMate.Web.Modules.Common {
    export interface SendWhatsappMessageRequest extends Serenity.ServiceRequest {
        PhoneNumber?: string;
        Message?: string;
    }
}
