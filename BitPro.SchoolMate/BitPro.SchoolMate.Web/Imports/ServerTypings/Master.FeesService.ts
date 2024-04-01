namespace BitPro.SchoolMate.Master {
    export namespace FeesService {
        export const baseUrl = 'Master/Fees';

        export declare function Create(request: Serenity.SaveRequest<FeesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<FeesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FeesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FeesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetTermsOfCurrentAcadamicYear(request: Serenity.ServiceRequest, onSuccess?: (response: System.Collections.Generic.List<AcadamicYearTermsResponse>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Master/Fees/Create",
            Update = "Master/Fees/Update",
            Delete = "Master/Fees/Delete",
            Retrieve = "Master/Fees/Retrieve",
            List = "Master/Fees/List",
            GetTermsOfCurrentAcadamicYear = "Master/Fees/GetTermsOfCurrentAcadamicYear"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetTermsOfCurrentAcadamicYear'
        ].forEach(x => {
            (<any>FeesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
