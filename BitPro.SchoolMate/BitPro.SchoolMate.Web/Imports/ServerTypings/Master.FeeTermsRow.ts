namespace BitPro.SchoolMate.Master {
    export interface FeeTermsRow {
        Id?: number;
        TermName?: string;
        TenantId?: number;
        AcadamicYearId?: number;
    }

    export namespace FeeTermsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'TermName';
        export const localTextPrefix = 'Master.FeeTerms';
        export const lookupKey = 'Master.FeeTerms';

        export function getLookup(): Q.Lookup<FeeTermsRow> {
            return Q.getLookup<FeeTermsRow>('Master.FeeTerms');
        }
        export const deletePermission = 'Master:FeeTerms';
        export const insertPermission = 'Master:FeeTerms';
        export const readPermission = 'Master:FeeTerms';
        export const updatePermission = 'Master:FeeTerms';

        export declare const enum Fields {
            Id = "Id",
            TermName = "TermName",
            TenantId = "TenantId",
            AcadamicYearId = "AcadamicYearId"
        }
    }
}
