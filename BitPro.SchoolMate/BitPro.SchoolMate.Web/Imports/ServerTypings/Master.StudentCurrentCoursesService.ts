namespace BitPro.SchoolMate.Master {
    export namespace StudentCurrentCoursesService {
        export const baseUrl = 'Master/StudentCurrentCourses';

        export declare function Create(request: Serenity.SaveRequest<StudentCurrentCoursesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<StudentCurrentCoursesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StudentCurrentCoursesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StudentCurrentCoursesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Master/StudentCurrentCourses/Create",
            Update = "Master/StudentCurrentCourses/Update",
            Delete = "Master/StudentCurrentCourses/Delete",
            Retrieve = "Master/StudentCurrentCourses/Retrieve",
            List = "Master/StudentCurrentCourses/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>StudentCurrentCoursesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
