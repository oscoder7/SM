namespace BitPro.SchoolMate.Transactions {
    export namespace StudentMarksSubjectsService {
        export const baseUrl = 'Transactions/StudentMarksSubjects';

        export declare function Create(request: Serenity.SaveRequest<StudentMarksSubjectsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<StudentMarksSubjectsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StudentMarksSubjectsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StudentMarksSubjectsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Transactions/StudentMarksSubjects/Create",
            Update = "Transactions/StudentMarksSubjects/Update",
            Delete = "Transactions/StudentMarksSubjects/Delete",
            Retrieve = "Transactions/StudentMarksSubjects/Retrieve",
            List = "Transactions/StudentMarksSubjects/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>StudentMarksSubjectsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
