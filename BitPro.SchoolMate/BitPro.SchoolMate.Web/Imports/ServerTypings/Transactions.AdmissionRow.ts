namespace BitPro.SchoolMate.Transactions {
    export interface AdmissionRow {
        Id?: number;
        AcadamicYearId?: number;
        JoiningDate?: string;
        StudentId?: number;
        JoiningCourse?: number;
        JoiningDivisionId?: number;
        TenantId?: number;
        AcadamicYearCode?: string;
        AcadamicYearPeriodFrom?: string;
        AcadamicYearPeriodTo?: string;
        AcadamicYearDescription?: string;
        AcadamicYearTenantId?: number;
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
        StudentJoiningDivisionId?: number;
        JoiningCourseCode?: string;
        JoiningCourseCourseName?: string;
        JoiningCourseActive?: boolean;
        JoiningCourseNonAcadamic?: boolean;
        JoiningCourseTenantId?: number;
        JoiningDivisionCourseId?: number;
        JoiningDivisionDivisionCode?: string;
        SelectedFees?: number[];
        AdmissionFeeTermId?: number;
    }

    export namespace AdmissionRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Transactions.Admission';
        export const deletePermission = 'Transactions:Admission';
        export const insertPermission = 'Transactions:Admission';
        export const readPermission = 'Transactions:Admission';
        export const updatePermission = 'Transactions:Admission';

        export declare const enum Fields {
            Id = "Id",
            AcadamicYearId = "AcadamicYearId",
            JoiningDate = "JoiningDate",
            StudentId = "StudentId",
            JoiningCourse = "JoiningCourse",
            JoiningDivisionId = "JoiningDivisionId",
            TenantId = "TenantId",
            AcadamicYearCode = "AcadamicYearCode",
            AcadamicYearPeriodFrom = "AcadamicYearPeriodFrom",
            AcadamicYearPeriodTo = "AcadamicYearPeriodTo",
            AcadamicYearDescription = "AcadamicYearDescription",
            AcadamicYearTenantId = "AcadamicYearTenantId",
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
            StudentJoiningDivisionId = "StudentJoiningDivisionId",
            JoiningCourseCode = "JoiningCourseCode",
            JoiningCourseCourseName = "JoiningCourseCourseName",
            JoiningCourseActive = "JoiningCourseActive",
            JoiningCourseNonAcadamic = "JoiningCourseNonAcadamic",
            JoiningCourseTenantId = "JoiningCourseTenantId",
            JoiningDivisionCourseId = "JoiningDivisionCourseId",
            JoiningDivisionDivisionCode = "JoiningDivisionDivisionCode",
            SelectedFees = "SelectedFees",
            AdmissionFeeTermId = "AdmissionFeeTermId"
        }
    }
}
