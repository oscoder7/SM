namespace BitPro.SchoolMate.Transactions {
    export namespace SalaryStructureService {
        export const baseUrl = 'Transactions/SalaryStructure';

        export declare function Create(request: Serenity.SaveRequest<SalaryStructureRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<SalaryStructureRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SalaryStructureRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalaryStructureRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetSalary(request: SalaryRequest, onSuccess?: (response: System.Collections.Generic.List<SalaryResponse>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Transactions/SalaryStructure/Create",
            Update = "Transactions/SalaryStructure/Update",
            Delete = "Transactions/SalaryStructure/Delete",
            Retrieve = "Transactions/SalaryStructure/Retrieve",
            List = "Transactions/SalaryStructure/List",
            GetSalary = "Transactions/SalaryStructure/GetSalary"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetSalary'
        ].forEach(x => {
            (<any>SalaryStructureService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
