namespace BitPro.SchoolMate.Transactions {
    export namespace StudentMarksService {
        export const baseUrl = 'Transactions/StudentMarks';

        export declare function Create(request: Serenity.SaveRequest<StudentMarksRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<StudentMarksRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StudentMarksRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StudentMarksRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetMaximumMark(request: MaximumMarkRequest, onSuccess?: (response: MaximumMarkResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Transactions/StudentMarks/Create",
            Update = "Transactions/StudentMarks/Update",
            Delete = "Transactions/StudentMarks/Delete",
            Retrieve = "Transactions/StudentMarks/Retrieve",
            List = "Transactions/StudentMarks/List",
            GetMaximumMark = "Transactions/StudentMarks/GetMaximumMark"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetMaximumMark'
        ].forEach(x => {
            (<any>StudentMarksService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
