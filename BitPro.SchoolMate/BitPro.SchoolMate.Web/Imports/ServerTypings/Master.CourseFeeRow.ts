namespace BitPro.SchoolMate.Master {
    export interface CourseFeeRow {
        Id?: number;
        CourseId?: number;
        FeeId?: number;
        CourseCode?: string;
        CourseCourseName?: string;
        CourseActive?: boolean;
        CourseNonAcadamic?: boolean;
        CourseTenantId?: number;
        FeeCode?: string;
        FeeFeeName?: string;
        FeeAnnualFee?: number;
        FeeTenantId?: number;
    }

    export namespace CourseFeeRow {
        export const idProperty = 'Id';
        export const nameProperty = 'FeeCode';
        export const localTextPrefix = 'Master.CourseFee';
        export const lookupKey = 'Master.CourseFee';

        export function getLookup(): Q.Lookup<CourseFeeRow> {
            return Q.getLookup<CourseFeeRow>('Master.CourseFee');
        }
        export const deletePermission = 'Master:Fees';
        export const insertPermission = 'Master:Fees';
        export const readPermission = 'Master:Fees';
        export const updatePermission = 'Master:Fees';

        export declare const enum Fields {
            Id = "Id",
            CourseId = "CourseId",
            FeeId = "FeeId",
            CourseCode = "CourseCode",
            CourseCourseName = "CourseCourseName",
            CourseActive = "CourseActive",
            CourseNonAcadamic = "CourseNonAcadamic",
            CourseTenantId = "CourseTenantId",
            FeeCode = "FeeCode",
            FeeFeeName = "FeeFeeName",
            FeeAnnualFee = "FeeAnnualFee",
            FeeTenantId = "FeeTenantId"
        }
    }
}
