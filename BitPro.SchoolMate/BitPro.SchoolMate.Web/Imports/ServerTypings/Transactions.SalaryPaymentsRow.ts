namespace BitPro.SchoolMate.Transactions {
    export interface SalaryPaymentsRow {
        Id?: number;
        SalaryStructureId?: number;
        StaffId?: number;
        PaidDate?: string;
        PaidAmount?: number;
        PaymentMethod?: AccountTypes;
        CreditAccountId?: number;
        SalaryAmount?: number;
        Payment?: SchoolMate.Accounts.PaymentRow[];
        PayableSalaryAmount?: number;
        TotalPresent?: number;
        TotalAbsent?: number;
        SalaryStructureFromDate?: string;
        SalaryStructureToDate?: string;
        SalaryStructureCreatedDate?: string;
        SalaryStructureCreatedBy?: number;
        SalaryStructureTenantId?: number;
        StaffCode?: string;
        StaffStaffName?: string;
        StaffContactId?: number;
        StaffIsTeacher?: boolean;
        StaffRemarks?: string;
        StaffDailyWage?: number;
        StaffTenantId?: number;
        StaffJoiningDate?: string;
        StaffQualification?: string;
        StaffSalaryAmount?: number;
        StaffDaysCount?: number;
        CreditAccountType?: number;
        CreditAccountAccountNo?: string;
        CreditAccountAccountHeadId?: number;
        CreditAccountTenantId?: number;
        CreditAccountIsDefault?: boolean;
    }

    export namespace SalaryPaymentsRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Transactions.SalaryPayments';
        export const deletePermission = 'Transactions:Salary';
        export const insertPermission = 'Transactions:Salary';
        export const readPermission = 'Transactions:Salary';
        export const updatePermission = 'Transactions:Salary';

        export declare const enum Fields {
            Id = "Id",
            SalaryStructureId = "SalaryStructureId",
            StaffId = "StaffId",
            PaidDate = "PaidDate",
            PaidAmount = "PaidAmount",
            PaymentMethod = "PaymentMethod",
            CreditAccountId = "CreditAccountId",
            SalaryAmount = "SalaryAmount",
            Payment = "Payment",
            PayableSalaryAmount = "PayableSalaryAmount",
            TotalPresent = "TotalPresent",
            TotalAbsent = "TotalAbsent",
            SalaryStructureFromDate = "SalaryStructureFromDate",
            SalaryStructureToDate = "SalaryStructureToDate",
            SalaryStructureCreatedDate = "SalaryStructureCreatedDate",
            SalaryStructureCreatedBy = "SalaryStructureCreatedBy",
            SalaryStructureTenantId = "SalaryStructureTenantId",
            StaffCode = "StaffCode",
            StaffStaffName = "StaffStaffName",
            StaffContactId = "StaffContactId",
            StaffIsTeacher = "StaffIsTeacher",
            StaffRemarks = "StaffRemarks",
            StaffDailyWage = "StaffDailyWage",
            StaffTenantId = "StaffTenantId",
            StaffJoiningDate = "StaffJoiningDate",
            StaffQualification = "StaffQualification",
            StaffSalaryAmount = "StaffSalaryAmount",
            StaffDaysCount = "StaffDaysCount",
            CreditAccountType = "CreditAccountType",
            CreditAccountAccountNo = "CreditAccountAccountNo",
            CreditAccountAccountHeadId = "CreditAccountAccountHeadId",
            CreditAccountTenantId = "CreditAccountTenantId",
            CreditAccountIsDefault = "CreditAccountIsDefault"
        }
    }
}
