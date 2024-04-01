namespace BitPro.SchoolMate.Transactions {
    export namespace FeeCollectionService {
        export const baseUrl = 'Transactions/FeeCollection';

        export declare function Create(request: Serenity.SaveRequest<FeeCollectionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<FeeCollectionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FeeCollectionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FeeCollectionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function StudentCurrentPromotions(request: StudentCurrentPromotion, onSuccess?: (response: System.Collections.Generic.List<StudentCurrentPromotionResponce>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetCourseFeeStucture(request: CourseFeeStructure, onSuccess?: (response: System.Collections.Generic.List<CourseFeeStructureResponce>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetFeeAmount(request: CourseFeeAmountRequest, onSuccess?: (response: CourseFeeAmountResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetStudentCoursePendingFees(request: CourseFeeStructure, onSuccess?: (response: System.Collections.Generic.List<CourseFeeResponce>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function CourseFeePending(request: CourseFeeRequest, onSuccess?: (response: System.Collections.Generic.List<CourseFeeResponse>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function TransportationFeePending(request: TransportationFeeRequest, onSuccess?: (response: System.Collections.Generic.List<CourseFeeResponce>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetDefaultAccount(request: GetNextNumberRequest, onSuccess?: (response: SchoolMate.Accounts.AccountsRow) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Transactions/FeeCollection/Create",
            Update = "Transactions/FeeCollection/Update",
            Delete = "Transactions/FeeCollection/Delete",
            Retrieve = "Transactions/FeeCollection/Retrieve",
            List = "Transactions/FeeCollection/List",
            StudentCurrentPromotions = "Transactions/FeeCollection/StudentCurrentPromotions",
            GetCourseFeeStucture = "Transactions/FeeCollection/GetCourseFeeStucture",
            GetFeeAmount = "Transactions/FeeCollection/GetFeeAmount",
            GetStudentCoursePendingFees = "Transactions/FeeCollection/GetStudentCoursePendingFees",
            CourseFeePending = "Transactions/FeeCollection/CourseFeePending",
            TransportationFeePending = "Transactions/FeeCollection/TransportationFeePending",
            GetDefaultAccount = "Transactions/FeeCollection/GetDefaultAccount"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'StudentCurrentPromotions', 
            'GetCourseFeeStucture', 
            'GetFeeAmount', 
            'GetStudentCoursePendingFees', 
            'CourseFeePending', 
            'TransportationFeePending', 
            'GetDefaultAccount'
        ].forEach(x => {
            (<any>FeeCollectionService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
