namespace BitPro.SchoolMate.Transactions {
    export namespace FeeAllocationTranportationService {
        export const baseUrl = 'Transactions/FeeAllocationTranportation';

        export declare function Create(request: Serenity.SaveRequest<FeeAllocationTranportationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<FeeAllocationTranportationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FeeAllocationTranportationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FeeAllocationTranportationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Transactions/FeeAllocationTranportation/Create",
            Update = "Transactions/FeeAllocationTranportation/Update",
            Delete = "Transactions/FeeAllocationTranportation/Delete",
            Retrieve = "Transactions/FeeAllocationTranportation/Retrieve",
            List = "Transactions/FeeAllocationTranportation/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>FeeAllocationTranportationService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
