namespace BitPro.SchoolMate.Transactions {
    export interface SalaryStructureRow {
        Id?: number;
        FromDate?: string;
        ToDate?: string;
        CreatedDate?: string;
        CreatedBy?: number;
        TenantId?: number;
        SalaryPayments?: SalaryPaymentsRow[];
        CreatedByCode?: string;
        CreatedByStaffName?: string;
        CreatedByContactId?: number;
        CreatedByIsTeacher?: boolean;
        CreatedByRemarks?: string;
        CreatedByDailyWage?: number;
        CreatedByTenantId?: number;
        CreatedByJoiningDate?: string;
        CreatedByQualification?: string;
        CreatedBySalaryAmount?: number;
        CreatedByDaysCount?: number;
    }

    export namespace SalaryStructureRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Transactions.SalaryStructure';
        export const deletePermission = 'Transactions:Salary';
        export const insertPermission = 'Transactions:Salary';
        export const readPermission = 'Transactions:Salary';
        export const updatePermission = 'Transactions:Salary';

        export declare const enum Fields {
            Id = "Id",
            FromDate = "FromDate",
            ToDate = "ToDate",
            CreatedDate = "CreatedDate",
            CreatedBy = "CreatedBy",
            TenantId = "TenantId",
            SalaryPayments = "SalaryPayments",
            CreatedByCode = "CreatedByCode",
            CreatedByStaffName = "CreatedByStaffName",
            CreatedByContactId = "CreatedByContactId",
            CreatedByIsTeacher = "CreatedByIsTeacher",
            CreatedByRemarks = "CreatedByRemarks",
            CreatedByDailyWage = "CreatedByDailyWage",
            CreatedByTenantId = "CreatedByTenantId",
            CreatedByJoiningDate = "CreatedByJoiningDate",
            CreatedByQualification = "CreatedByQualification",
            CreatedBySalaryAmount = "CreatedBySalaryAmount",
            CreatedByDaysCount = "CreatedByDaysCount"
        }
    }
}
