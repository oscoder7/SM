namespace BitPro.SchoolMate.Transactions {
    export namespace AttandanceService {
        export const baseUrl = 'Transactions/Attandance';

        export declare function Create(request: Serenity.SaveRequest<AttandanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<AttandanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AttandanceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AttandanceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function UpdateAttendance(request: AttendanceUpdateRequest, onSuccess?: (response: System.Boolean) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetPromotionCurrentAcadamicYear(request: AttendanceUpdateRequest, onSuccess?: (response: System.Collections.Generic.List<PromotionCurrentAcadamicYearResponse>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetAttendanceList(request: AttendanceRequest, onSuccess?: (response: Serenity.ListResponse<AttandanceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function UpdateAttendanceList(request: UpdateListAttendanceRequest, onSuccess?: (response: System.Boolean) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Transactions/Attandance/Create",
            Update = "Transactions/Attandance/Update",
            Delete = "Transactions/Attandance/Delete",
            Retrieve = "Transactions/Attandance/Retrieve",
            List = "Transactions/Attandance/List",
            UpdateAttendance = "Transactions/Attandance/UpdateAttendance",
            GetPromotionCurrentAcadamicYear = "Transactions/Attandance/GetPromotionCurrentAcadamicYear",
            GetAttendanceList = "Transactions/Attandance/GetAttendanceList",
            UpdateAttendanceList = "Transactions/Attandance/UpdateAttendanceList"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'UpdateAttendance', 
            'GetPromotionCurrentAcadamicYear', 
            'GetAttendanceList', 
            'UpdateAttendanceList'
        ].forEach(x => {
            (<any>AttandanceService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
