namespace BitPro.SchoolMate.Master {
    export interface AcadamicYearRow {
        Id?: number;
        Code?: string;
        PeriodFrom?: string;
        PeriodTo?: string;
        Description?: string;
        FeeTerms?: FeeTermsRow[];
        TenantId?: number;
    }

    export namespace AcadamicYearRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Code';
        export const localTextPrefix = 'Master.AcadamicYear';
        export const lookupKey = 'Master.AcademicYear';

        export function getLookup(): Q.Lookup<AcadamicYearRow> {
            return Q.getLookup<AcadamicYearRow>('Master.AcademicYear');
        }
        export const deletePermission = 'Master:AcademicYear';
        export const insertPermission = 'Master:AcademicYear';
        export const readPermission = 'Master:AcademicYear';
        export const updatePermission = 'Master:AcademicYear';

        export declare const enum Fields {
            Id = "Id",
            Code = "Code",
            PeriodFrom = "PeriodFrom",
            PeriodTo = "PeriodTo",
            Description = "Description",
            FeeTerms = "FeeTerms",
            TenantId = "TenantId"
        }
    }
}
