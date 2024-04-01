namespace BitPro.SchoolMate.Master {
    export namespace AcadamicYearService {
        export const baseUrl = 'Master/AcadamicYear';

        export declare function Create(request: Serenity.SaveRequest<AcadamicYearRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<AcadamicYearRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AcadamicYearRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AcadamicYearRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetLastAcadamicTerms(request: Serenity.ServiceRequest, onSuccess?: (response: System.Collections.Generic.List<LastAcadamicTermsResponse>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Master/AcadamicYear/Create",
            Update = "Master/AcadamicYear/Update",
            Delete = "Master/AcadamicYear/Delete",
            Retrieve = "Master/AcadamicYear/Retrieve",
            List = "Master/AcadamicYear/List",
            GetLastAcadamicTerms = "Master/AcadamicYear/GetLastAcadamicTerms"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetLastAcadamicTerms'
        ].forEach(x => {
            (<any>AcadamicYearService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
