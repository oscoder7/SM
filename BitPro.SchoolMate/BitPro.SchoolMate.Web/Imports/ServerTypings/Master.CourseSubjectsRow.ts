namespace BitPro.SchoolMate.Master {
    export interface CourseSubjectsRow {
        Id?: number;
        CourseId?: number;
        SubjectId?: number;
        MaxMarks?: number;
        CourseCode?: string;
        CourseCourseName?: string;
        CourseActive?: boolean;
        CourseNonAcadamic?: boolean;
        CourseTenantId?: number;
        SubjectCode?: string;
        SubjectSubjectName?: string;
        SubjectTenantId?: number;
    }

    export namespace CourseSubjectsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'SubjectCode';
        export const localTextPrefix = 'Master.CourseSubjects';
        export const lookupKey = 'Master.CourseSubjects';

        export function getLookup(): Q.Lookup<CourseSubjectsRow> {
            return Q.getLookup<CourseSubjectsRow>('Master.CourseSubjects');
        }
        export const deletePermission = 'Master:CourseSubjects';
        export const insertPermission = 'Master:CourseSubjects';
        export const readPermission = 'Master:CourseSubjects';
        export const updatePermission = 'Master:CourseSubjects';

        export declare const enum Fields {
            Id = "Id",
            CourseId = "CourseId",
            SubjectId = "SubjectId",
            MaxMarks = "MaxMarks",
            CourseCode = "CourseCode",
            CourseCourseName = "CourseCourseName",
            CourseActive = "CourseActive",
            CourseNonAcadamic = "CourseNonAcadamic",
            CourseTenantId = "CourseTenantId",
            SubjectCode = "SubjectCode",
            SubjectSubjectName = "SubjectSubjectName",
            SubjectTenantId = "SubjectTenantId"
        }
    }
}
