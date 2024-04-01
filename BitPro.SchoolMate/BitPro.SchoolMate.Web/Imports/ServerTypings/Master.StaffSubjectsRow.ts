namespace BitPro.SchoolMate.Master {
    export interface StaffSubjectsRow {
        Id?: number;
        StaffId?: number;
        SubjectId?: number;
        StaffCode?: string;
        StaffStaffName?: string;
        StaffContactId?: number;
        StaffIsTeacher?: boolean;
        StaffRemarks?: string;
        StaffDailyWage?: number;
        SubjectCode?: string;
        SubjectSubjectName?: string;
    }

    export namespace StaffSubjectsRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Master.StaffSubjects';
        export const deletePermission = 'Master:Staffs';
        export const insertPermission = 'Master:Staffs';
        export const readPermission = 'Master:Staffs';
        export const updatePermission = 'Master:Staffs';

        export declare const enum Fields {
            Id = "Id",
            StaffId = "StaffId",
            SubjectId = "SubjectId",
            StaffCode = "StaffCode",
            StaffStaffName = "StaffStaffName",
            StaffContactId = "StaffContactId",
            StaffIsTeacher = "StaffIsTeacher",
            StaffRemarks = "StaffRemarks",
            StaffDailyWage = "StaffDailyWage",
            SubjectCode = "SubjectCode",
            SubjectSubjectName = "SubjectSubjectName"
        }
    }
}
