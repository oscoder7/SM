namespace BitPro.SchoolMate.Master {
    export interface FeesRow {
        Id?: number;
        Code?: string;
        FeeName?: string;
        AnnualFee?: number;
        IsTranportation?: boolean;
        CourseFee?: number[];
        TenantId?: number;
        DebitAccountHeadId?: number;
        FullName?: string;
        DebitAccountHeadDescription?: string;
        DebitAccountHeadParentHeadId?: number;
        DebitAccountHeadCode?: string;
        DebitAccountHeadTenantId?: number;
        DebitAccountHeadLedgerType?: number;
        FeeStructures?: FeeStructureRow[];
    }

    export namespace FeesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'FullName';
        export const localTextPrefix = 'Master.Fees';
        export const lookupKey = 'Master.Fees';

        export function getLookup(): Q.Lookup<FeesRow> {
            return Q.getLookup<FeesRow>('Master.Fees');
        }
        export const deletePermission = 'Master:Fees';
        export const insertPermission = 'Master:Fees';
        export const readPermission = 'Master:Fees';
        export const updatePermission = 'Master:Fees';

        export declare const enum Fields {
            Id = "Id",
            Code = "Code",
            FeeName = "FeeName",
            AnnualFee = "AnnualFee",
            IsTranportation = "IsTranportation",
            CourseFee = "CourseFee",
            TenantId = "TenantId",
            DebitAccountHeadId = "DebitAccountHeadId",
            FullName = "FullName",
            DebitAccountHeadDescription = "DebitAccountHeadDescription",
            DebitAccountHeadParentHeadId = "DebitAccountHeadParentHeadId",
            DebitAccountHeadCode = "DebitAccountHeadCode",
            DebitAccountHeadTenantId = "DebitAccountHeadTenantId",
            DebitAccountHeadLedgerType = "DebitAccountHeadLedgerType",
            FeeStructures = "FeeStructures"
        }
    }
}
