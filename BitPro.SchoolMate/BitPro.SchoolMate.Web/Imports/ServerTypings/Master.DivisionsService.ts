namespace BitPro.SchoolMate.Master {
    export namespace DivisionsService {
        export const baseUrl = 'Master/Divisions';

        export declare function Create(request: Serenity.SaveRequest<DivisionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<DivisionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DivisionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DivisionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetByPromotions(request: ExamMarkRequest, onSuccess?: (response: System.Collections.Generic.List<PromotionDivisionResponse>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function UpdateDivision(request: DivisonUpdateRequest, onSuccess?: (response: System.Boolean) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function DeleteStudentFromDivision(request: DivisonUpdateRequest, onSuccess?: (response: System.Boolean) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Master/Divisions/Create",
            Update = "Master/Divisions/Update",
            Delete = "Master/Divisions/Delete",
            Retrieve = "Master/Divisions/Retrieve",
            List = "Master/Divisions/List",
            GetByPromotions = "Master/Divisions/GetByPromotions",
            UpdateDivision = "Master/Divisions/UpdateDivision",
            DeleteStudentFromDivision = "Master/Divisions/DeleteStudentFromDivision"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetByPromotions', 
            'UpdateDivision', 
            'DeleteStudentFromDivision'
        ].forEach(x => {
            (<any>DivisionsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
