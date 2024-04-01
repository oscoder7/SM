namespace BitPro.SchoolMate.Master {
    export interface FeeExcemptionsRow {
        Id?: number;
        StudentId?: number;
        FeeExcempted?: number;
        CourseFeeId?: number;
        CourseId?: number;
        TenantId?: number;
        StudentCode?: string;
        StudentJoiningDate?: string;
        StudentJoiningCourse?: number;
        StudentFatherContactId?: number;
        StudentMotherContactId?: number;
        StudentStudentContactId?: number;
        StudentCampusId?: number;
        StudentOtherInstitute?: string;
        StudentDivision?: string;
        StudentTenantId?: number;
    }

    export namespace FeeExcemptionsRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Master.FeeExcemptions';
        export const lookupKey = 'Master.FeeExcemptions';

        export function getLookup(): Q.Lookup<FeeExcemptionsRow> {
            return Q.getLookup<FeeExcemptionsRow>('Master.FeeExcemptions');
        }
        export const deletePermission = 'Master:FeeExcemptions';
        export const insertPermission = 'Master:FeeExcemptions';
        export const readPermission = 'Master:FeeExcemptions';
        export const updatePermission = 'Master:FeeExcemptions';

        export declare const enum Fields {
            Id = "Id",
            StudentId = "StudentId",
            FeeExcempted = "FeeExcempted",
            CourseFeeId = "CourseFeeId",
            CourseId = "CourseId",
            TenantId = "TenantId",
            StudentCode = "StudentCode",
            StudentJoiningDate = "StudentJoiningDate",
            StudentJoiningCourse = "StudentJoiningCourse",
            StudentFatherContactId = "StudentFatherContactId",
            StudentMotherContactId = "StudentMotherContactId",
            StudentStudentContactId = "StudentStudentContactId",
            StudentCampusId = "StudentCampusId",
            StudentOtherInstitute = "StudentOtherInstitute",
            StudentDivision = "StudentDivision",
            StudentTenantId = "StudentTenantId"
        }
    }
}
