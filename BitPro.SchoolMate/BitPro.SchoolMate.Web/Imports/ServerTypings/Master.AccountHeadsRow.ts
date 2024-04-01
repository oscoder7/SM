namespace BitPro.SchoolMate.Master {
    export interface AccountHeadsRow {
        Id?: number;
        Description?: string;
        ParentHeadId?: number;
        Code?: string;
        TenantId?: number;
        LedgerType?: LedgerTypes;
        ParentHeadDescription?: string;
        ParentHeadParentHeadId?: number;
        ParentHeadCode?: string;
        ParentHeadTenantId?: number;
    }

    export namespace AccountHeadsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Master.AccountHeads';
        export const lookupKey = 'Master.AccountHeads';

        export function getLookup(): Q.Lookup<AccountHeadsRow> {
            return Q.getLookup<AccountHeadsRow>('Master.AccountHeads');
        }
        export const deletePermission = 'Master:AccountHeads';
        export const insertPermission = 'Master:AccountHeads';
        export const readPermission = 'Master:AccountHeads';
        export const updatePermission = 'Master:AccountHeads';

        export declare const enum Fields {
            Id = "Id",
            Description = "Description",
            ParentHeadId = "ParentHeadId",
            Code = "Code",
            TenantId = "TenantId",
            LedgerType = "LedgerType",
            ParentHeadDescription = "ParentHeadDescription",
            ParentHeadParentHeadId = "ParentHeadParentHeadId",
            ParentHeadCode = "ParentHeadCode",
            ParentHeadTenantId = "ParentHeadTenantId"
        }
    }
}
