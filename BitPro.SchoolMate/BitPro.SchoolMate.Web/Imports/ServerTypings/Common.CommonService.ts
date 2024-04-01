namespace BitPro.SchoolMate.Common {
    export namespace CommonService {
        export const baseUrl = 'Common/Common';

        export declare function DivisionsList(request: SchoolMate.Web.Modules.Common.DivisionsByPromotionRequest, onSuccess?: (response: Serenity.ListResponse<SchoolMate.Master.DivisionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function SendWhatsappMessage(request: SchoolMate.Web.Modules.Common.SendWhatsappMessageRequest, onSuccess?: (response: System.Boolean) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            DivisionsList = "Common/Common/DivisionsList",
            SendWhatsappMessage = "Common/Common/SendWhatsappMessage"
        }

        [
            'DivisionsList', 
            'SendWhatsappMessage'
        ].forEach(x => {
            (<any>CommonService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
