namespace BitPro.SchoolMate.Accounts {
    export namespace ReceiptService {
        export const baseUrl = 'Accounts/Receipt';

        export declare function Create(request: Serenity.SaveRequest<ReceiptRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ReceiptRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReceiptRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReceiptRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetTrxNo(request: VoucherNoRequest, onSuccess?: (response: VoucherNoResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Accounts/Receipt/Create",
            Update = "Accounts/Receipt/Update",
            Delete = "Accounts/Receipt/Delete",
            Retrieve = "Accounts/Receipt/Retrieve",
            List = "Accounts/Receipt/List",
            GetTrxNo = "Accounts/Receipt/GetTrxNo"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetTrxNo'
        ].forEach(x => {
            (<any>ReceiptService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
