namespace BitPro.SchoolMate.Accounts {
    export interface AccountsRow {
        Id?: number;
        Type?: AccountTypes;
        AccountNo?: string;
        AccountHeadId?: number;
        TenantId?: number;
        IsDefault?: boolean;
        AccountHeadDescription?: string;
        AccountHeadParentHeadId?: number;
        AccountHeadCode?: string;
        AccountHeadTenantId?: number;
        AccountHeadLedgerType?: number;
    }

    export namespace AccountsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'AccountNo';
        export const localTextPrefix = 'Accounts.Accounts';
        export const lookupKey = 'Accounts.Accounts';

        export function getLookup(): Q.Lookup<AccountsRow> {
            return Q.getLookup<AccountsRow>('Accounts.Accounts');
        }
        export const deletePermission = 'Accounts:Accounts';
        export const insertPermission = 'Accounts:Accounts';
        export const readPermission = 'Accounts:Accounts';
        export const updatePermission = 'Accounts:Accounts';

        export declare const enum Fields {
            Id = "Id",
            Type = "Type",
            AccountNo = "AccountNo",
            AccountHeadId = "AccountHeadId",
            TenantId = "TenantId",
            IsDefault = "IsDefault",
            AccountHeadDescription = "AccountHeadDescription",
            AccountHeadParentHeadId = "AccountHeadParentHeadId",
            AccountHeadCode = "AccountHeadCode",
            AccountHeadTenantId = "AccountHeadTenantId",
            AccountHeadLedgerType = "AccountHeadLedgerType"
        }
    }
}
