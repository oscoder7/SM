namespace BitPro.SchoolMate.Master {
    export namespace StudentsService {
        export const baseUrl = 'Master/Students';

        export declare function Create(request: Serenity.SaveRequest<StudentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<StudentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StudentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StudentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetConfig(request: ConfigRequest, onSuccess?: (response: SchoolMate.Administration.SettingsRow) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetDefaultCampus(request: GetNextNumberRequest, onSuccess?: (response: CampusesRow) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Master/Students/Create",
            Update = "Master/Students/Update",
            Delete = "Master/Students/Delete",
            Retrieve = "Master/Students/Retrieve",
            List = "Master/Students/List",
            GetConfig = "Master/Students/GetConfig",
            GetNextNumber = "Master/Students/GetNextNumber",
            GetDefaultCampus = "Master/Students/GetDefaultCampus"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetConfig', 
            'GetNextNumber', 
            'GetDefaultCampus'
        ].forEach(x => {
            (<any>StudentsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
