namespace BitPro.SchoolMate.Master {
    export interface CoursesRow {
        Id?: number;
        Code?: string;
        CourseName?: string;
        Active?: boolean;
        NonAcadamic?: boolean;
        TenantId?: number;
        CourseSubject?: CourseSubjectsRow[];
        CourseDivisions?: CourseDivisionsRow[];
        CourseFullName?: string;
    }

    export namespace CoursesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'CourseName';
        export const localTextPrefix = 'Master.Courses';
        export const lookupKey = 'Master.Courses';

        export function getLookup(): Q.Lookup<CoursesRow> {
            return Q.getLookup<CoursesRow>('Master.Courses');
        }
        export const deletePermission = 'Master:Courses';
        export const insertPermission = 'Master:Courses';
        export const readPermission = 'Master:Courses';
        export const updatePermission = 'Master:Courses';

        export declare const enum Fields {
            Id = "Id",
            Code = "Code",
            CourseName = "CourseName",
            Active = "Active",
            NonAcadamic = "NonAcadamic",
            TenantId = "TenantId",
            CourseSubject = "CourseSubject",
            CourseDivisions = "CourseDivisions",
            CourseFullName = "CourseFullName"
        }
    }
}
