namespace BitPro.SchoolMate.Master {
    export interface FeeStructureRow {
        Id?: number;
        FeeTermId?: number;
        FeeAmount?: number;
        FeeId?: number;
        AcadamicYearId?: number;
        FeeTermTermName?: string;
        TenantId?: number;
        FeeCode?: string;
        FeeFeeName?: string;
        FeeAnnualFee?: number;
        FeeTenantId?: number;
        AcadamicYearCode?: string;
        AcadamicYearPeriodFrom?: string;
        AcadamicYearPeriodTo?: string;
        AcadamicYearDescription?: string;
    }

    export namespace FeeStructureRow {
        export const idProperty = 'Id';
        export const nameProperty = 'FeeTermTermName';
        export const localTextPrefix = 'Master.FeeStructure';
        export const lookupKey = 'Master.FeeStructure';

        export function getLookup(): Q.Lookup<FeeStructureRow> {
            return Q.getLookup<FeeStructureRow>('Master.FeeStructure');
        }
        export const deletePermission = 'Master:FeeStructure';
        export const insertPermission = 'Master:FeeStructure';
        export const readPermission = 'Master:FeeStructure';
        export const updatePermission = 'Master:FeeStructure';

        export declare const enum Fields {
            Id = "Id",
            FeeTermId = "FeeTermId",
            FeeAmount = "FeeAmount",
            FeeId = "FeeId",
            AcadamicYearId = "AcadamicYearId",
            FeeTermTermName = "FeeTermTermName",
            TenantId = "TenantId",
            FeeCode = "FeeCode",
            FeeFeeName = "FeeFeeName",
            FeeAnnualFee = "FeeAnnualFee",
            FeeTenantId = "FeeTenantId",
            AcadamicYearCode = "AcadamicYearCode",
            AcadamicYearPeriodFrom = "AcadamicYearPeriodFrom",
            AcadamicYearPeriodTo = "AcadamicYearPeriodTo",
            AcadamicYearDescription = "AcadamicYearDescription"
        }
    }
}
