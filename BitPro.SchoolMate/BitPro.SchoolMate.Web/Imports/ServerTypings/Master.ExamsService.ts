namespace BitPro.SchoolMate.Master {
    export namespace ExamsService {
        export const baseUrl = 'Master/Exams';

        export declare function Create(request: Serenity.SaveRequest<ExamsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ExamsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ExamsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ExamsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetAcadamicYearCourseSubjects(request: AcadamicYearCourseSubjectsRequest, onSuccess?: (response: System.Collections.Generic.List<AcadamicYearCourseSubjectResponse>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Master/Exams/Create",
            Update = "Master/Exams/Update",
            Delete = "Master/Exams/Delete",
            Retrieve = "Master/Exams/Retrieve",
            List = "Master/Exams/List",
            GetAcadamicYearCourseSubjects = "Master/Exams/GetAcadamicYearCourseSubjects"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetAcadamicYearCourseSubjects'
        ].forEach(x => {
            (<any>ExamsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
