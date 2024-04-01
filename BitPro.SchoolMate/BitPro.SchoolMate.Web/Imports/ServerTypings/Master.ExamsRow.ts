namespace BitPro.SchoolMate.Master {
    export interface ExamsRow {
        Id?: number;
        Code?: string;
        ExamName?: string;
        AcadamicYearId?: number;
        Courses?: ExamCoursesRow[];
        TenantId?: number;
        AcadamicYearCode?: string;
        AcadamicYearPeriodFrom?: string;
        AcadamicYearPeriodTo?: string;
        AcadamicYearDescription?: string;
        AcadamicYearTenantId?: number;
    }

    export namespace ExamsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ExamName';
        export const localTextPrefix = 'Master.Exams';
        export const lookupKey = 'Master.Exams';

        export function getLookup(): Q.Lookup<ExamsRow> {
            return Q.getLookup<ExamsRow>('Master.Exams');
        }
        export const deletePermission = 'Master:Exams';
        export const insertPermission = 'Master:Exams';
        export const readPermission = 'Master:Exams';
        export const updatePermission = 'Master:Exams';

        export declare const enum Fields {
            Id = "Id",
            Code = "Code",
            ExamName = "ExamName",
            AcadamicYearId = "AcadamicYearId",
            Courses = "Courses",
            TenantId = "TenantId",
            AcadamicYearCode = "AcadamicYearCode",
            AcadamicYearPeriodFrom = "AcadamicYearPeriodFrom",
            AcadamicYearPeriodTo = "AcadamicYearPeriodTo",
            AcadamicYearDescription = "AcadamicYearDescription",
            AcadamicYearTenantId = "AcadamicYearTenantId"
        }
    }
}
