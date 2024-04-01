namespace BitPro.SchoolMate.Master {
    export interface CourseDivisionsRow {
        Id?: number;
        CourseId?: number;
        DivisionCode?: string;
        CourseCode?: string;
        CourseCourseName?: string;
        CourseActive?: boolean;
        CourseNonAcadamic?: boolean;
        CourseTenantId?: number;
    }

    export namespace CourseDivisionsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'DivisionCode';
        export const localTextPrefix = 'Master.CourseDivisions';
        export const lookupKey = 'Master.CourseDivisions';

        export function getLookup(): Q.Lookup<CourseDivisionsRow> {
            return Q.getLookup<CourseDivisionsRow>('Master.CourseDivisions');
        }
        export const deletePermission = 'Master:Courses';
        export const insertPermission = 'Master:Courses';
        export const readPermission = 'Master:Courses';
        export const updatePermission = 'Master:Courses';

        export declare const enum Fields {
            Id = "Id",
            CourseId = "CourseId",
            DivisionCode = "DivisionCode",
            CourseCode = "CourseCode",
            CourseCourseName = "CourseCourseName",
            CourseActive = "CourseActive",
            CourseNonAcadamic = "CourseNonAcadamic",
            CourseTenantId = "CourseTenantId"
        }
    }
}
