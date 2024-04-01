namespace BitPro.SchoolMate.Master {
    export interface StudentCurrentCoursesRow {
        Id?: number;
        StudentId?: number;
        CourseId?: number;
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
        StudentStudentName?: string;
        StudentGender?: number;
        StudentDob?: string;
        StudentIdno?: string;
        StudentLandMark?: string;
        StudentBusStop?: string;
        StudentRemarks?: string;
        StudentPhoto?: string;
        CourseCode?: string;
        CourseCourseName?: string;
        CourseActive?: boolean;
        CourseNonAcadamic?: boolean;
        CourseTenantId?: number;
    }

    export namespace StudentCurrentCoursesRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Master.StudentCurrentCourses';
        export const deletePermission = 'Master:Students';
        export const insertPermission = 'Master:Students';
        export const readPermission = 'Master:Students';
        export const updatePermission = 'Master:Students';

        export declare const enum Fields {
            Id = "Id",
            StudentId = "StudentId",
            CourseId = "CourseId",
            StudentCode = "StudentCode",
            StudentJoiningDate = "StudentJoiningDate",
            StudentJoiningCourse = "StudentJoiningCourse",
            StudentFatherContactId = "StudentFatherContactId",
            StudentMotherContactId = "StudentMotherContactId",
            StudentStudentContactId = "StudentStudentContactId",
            StudentCampusId = "StudentCampusId",
            StudentOtherInstitute = "StudentOtherInstitute",
            StudentDivision = "StudentDivision",
            StudentTenantId = "StudentTenantId",
            StudentStudentName = "StudentStudentName",
            StudentGender = "StudentGender",
            StudentDob = "StudentDob",
            StudentIdno = "StudentIdno",
            StudentLandMark = "StudentLandMark",
            StudentBusStop = "StudentBusStop",
            StudentRemarks = "StudentRemarks",
            StudentPhoto = "StudentPhoto",
            CourseCode = "CourseCode",
            CourseCourseName = "CourseCourseName",
            CourseActive = "CourseActive",
            CourseNonAcadamic = "CourseNonAcadamic",
            CourseTenantId = "CourseTenantId"
        }
    }
}
