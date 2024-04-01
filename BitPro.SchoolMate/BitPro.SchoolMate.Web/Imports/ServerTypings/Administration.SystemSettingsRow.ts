namespace BitPro.SchoolMate.Administration {
    export interface SystemSettingsRow {
        Id?: number;
        SalaryAccount?: number;
        StudentCodeLength?: number;
        SatffCodeLength?: number;
        SatffCodePrefix?: string;
        StudentCodePrefix?: string;
        TenantId?: number;
        SalaryAccountDescription?: string;
        SalaryAccountParentHeadId?: number;
        SalaryAccountCode?: string;
        SalaryAccountTenantId?: number;
        SalaryAccountLedgerType?: number;
    }

    export namespace SystemSettingsRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Administration.SystemSettings';
        export const deletePermission = 'Administration:Settings';
        export const insertPermission = 'Administration:Settings';
        export const readPermission = '*';
        export const updatePermission = 'Administration:Settings';

        export declare const enum Fields {
            Id = "Id",
            SalaryAccount = "SalaryAccount",
            StudentCodeLength = "StudentCodeLength",
            SatffCodeLength = "SatffCodeLength",
            SatffCodePrefix = "SatffCodePrefix",
            StudentCodePrefix = "StudentCodePrefix",
            TenantId = "TenantId",
            SalaryAccountDescription = "SalaryAccountDescription",
            SalaryAccountParentHeadId = "SalaryAccountParentHeadId",
            SalaryAccountCode = "SalaryAccountCode",
            SalaryAccountTenantId = "SalaryAccountTenantId",
            SalaryAccountLedgerType = "SalaryAccountLedgerType"
        }
    }
}
