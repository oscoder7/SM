namespace BitPro.SchoolMate.Transactions {
    export namespace PromotionsService {
        export const baseUrl = 'Transactions/Promotions';

        export declare function Create(request: Serenity.SaveRequest<PromotionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<PromotionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PromotionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PromotionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetStudentsByCourse(request: PromotionRequest, onSuccess?: (response: System.Collections.Generic.List<CourseStudentResponse>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetPromotionDetails(request: PromotionRequest, onSuccess?: (response: System.Collections.Generic.List<CourseStudentResponse>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function DeletePromotionDetails(request: PromotionInsertRequest, onSuccess?: (response: System.Boolean) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function InsertIntoPromotionDetails(request: PromotionInsertRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetDivisionsByCourse(request: CouseDivisionRequest, onSuccess?: (response: System.Collections.Generic.List<SchoolMate.Master.CourseDivisionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Transactions/Promotions/Create",
            Update = "Transactions/Promotions/Update",
            Delete = "Transactions/Promotions/Delete",
            Retrieve = "Transactions/Promotions/Retrieve",
            List = "Transactions/Promotions/List",
            GetStudentsByCourse = "Transactions/Promotions/GetStudentsByCourse",
            GetPromotionDetails = "Transactions/Promotions/GetPromotionDetails",
            DeletePromotionDetails = "Transactions/Promotions/DeletePromotionDetails",
            InsertIntoPromotionDetails = "Transactions/Promotions/InsertIntoPromotionDetails",
            GetDivisionsByCourse = "Transactions/Promotions/GetDivisionsByCourse"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetStudentsByCourse', 
            'GetPromotionDetails', 
            'DeletePromotionDetails', 
            'InsertIntoPromotionDetails', 
            'GetDivisionsByCourse'
        ].forEach(x => {
            (<any>PromotionsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
