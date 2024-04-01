namespace BitPro.SchoolMate.Master {
    export interface StudentsRow {
        Id?: number;
        Code?: string;
        JoiningDate?: string;
        JoiningCourse?: number;
        FatherContactId?: number;
        MotherContactId?: number;
        StudentContactId?: number;
        CampusId?: number;
        OtherInstitute?: string;
        Division?: string;
        TenantId?: number;
        StudentName?: string;
        Gender?: Gender;
        DOB?: string;
        IDNO?: string;
        LandMark?: string;
        BusStop?: string;
        Remarks?: string;
        Photo?: string;
        CurrentCourses?: number[];
        JoiningDivisionId?: number;
        FullName?: string;
        TranportationFeeId?: number;
        FromAcadamicYearId?: number;
        FromFeeTermId?: number;
        JoiningCourseCode?: string;
        JoiningCourseCourseName?: string;
        JoiningCourseActive?: boolean;
        JoiningCourseNonAcadamic?: boolean;
        JoiningCourseTenantId?: number;
        FatherContactName?: string;
        FatherContactPhone?: string;
        FatherContactEmail?: string;
        FatherContactWhatsapp?: string;
        FatherContactAddress1?: string;
        FatherContactAddress2?: string;
        FatherContactNationality?: number;
        FatherContactTenantId?: number;
        MotherContactName?: string;
        MotherContactPhone?: string;
        MotherContactEmail?: string;
        MotherContactWhatsapp?: string;
        MotherContactAddress1?: string;
        MotherContactAddress2?: string;
        MotherContactNationality?: number;
        MotherContactTenantId?: number;
        StudentContactName?: string;
        StudentContactPhone?: string;
        StudentContactEmail?: string;
        StudentContactWhatsapp?: string;
        StudentContactAddress1?: string;
        StudentContactAddress2?: string;
        StudentContactNationality?: number;
        StudentContactTenantId?: number;
        CampusCode?: string;
        Campus?: string;
        CampusAddress?: string;
        CampusPhone?: string;
        CampusContactPerson?: string;
        CampusMobile?: string;
        CampusEmail?: string;
        CampusWebsite?: string;
        CampusCountryId?: number;
        CampusAreaId?: number;
        CampusTenantId?: number;
        AdmissionFeeTermId?: number;
        AdmissionAcadamicYearId?: number;
    }

    export namespace StudentsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'FullName';
        export const localTextPrefix = 'Master.Students';
        export const lookupKey = 'Master.Students';

        export function getLookup(): Q.Lookup<StudentsRow> {
            return Q.getLookup<StudentsRow>('Master.Students');
        }
        export const deletePermission = 'Master:StudentsDelete';
        export const insertPermission = 'Master:StudentsCreate';
        export const readPermission = 'Master:Students';
        export const updatePermission = 'Master:StudentsUpdate';

        export declare const enum Fields {
            Id = "Id",
            Code = "Code",
            JoiningDate = "JoiningDate",
            JoiningCourse = "JoiningCourse",
            FatherContactId = "FatherContactId",
            MotherContactId = "MotherContactId",
            StudentContactId = "StudentContactId",
            CampusId = "CampusId",
            OtherInstitute = "OtherInstitute",
            Division = "Division",
            TenantId = "TenantId",
            StudentName = "StudentName",
            Gender = "Gender",
            DOB = "DOB",
            IDNO = "IDNO",
            LandMark = "LandMark",
            BusStop = "BusStop",
            Remarks = "Remarks",
            Photo = "Photo",
            CurrentCourses = "CurrentCourses",
            JoiningDivisionId = "JoiningDivisionId",
            FullName = "FullName",
            TranportationFeeId = "TranportationFeeId",
            FromAcadamicYearId = "FromAcadamicYearId",
            FromFeeTermId = "FromFeeTermId",
            JoiningCourseCode = "JoiningCourseCode",
            JoiningCourseCourseName = "JoiningCourseCourseName",
            JoiningCourseActive = "JoiningCourseActive",
            JoiningCourseNonAcadamic = "JoiningCourseNonAcadamic",
            JoiningCourseTenantId = "JoiningCourseTenantId",
            FatherContactName = "FatherContactName",
            FatherContactPhone = "FatherContactPhone",
            FatherContactEmail = "FatherContactEmail",
            FatherContactWhatsapp = "FatherContactWhatsapp",
            FatherContactAddress1 = "FatherContactAddress1",
            FatherContactAddress2 = "FatherContactAddress2",
            FatherContactNationality = "FatherContactNationality",
            FatherContactTenantId = "FatherContactTenantId",
            MotherContactName = "MotherContactName",
            MotherContactPhone = "MotherContactPhone",
            MotherContactEmail = "MotherContactEmail",
            MotherContactWhatsapp = "MotherContactWhatsapp",
            MotherContactAddress1 = "MotherContactAddress1",
            MotherContactAddress2 = "MotherContactAddress2",
            MotherContactNationality = "MotherContactNationality",
            MotherContactTenantId = "MotherContactTenantId",
            StudentContactName = "StudentContactName",
            StudentContactPhone = "StudentContactPhone",
            StudentContactEmail = "StudentContactEmail",
            StudentContactWhatsapp = "StudentContactWhatsapp",
            StudentContactAddress1 = "StudentContactAddress1",
            StudentContactAddress2 = "StudentContactAddress2",
            StudentContactNationality = "StudentContactNationality",
            StudentContactTenantId = "StudentContactTenantId",
            CampusCode = "CampusCode",
            Campus = "Campus",
            CampusAddress = "CampusAddress",
            CampusPhone = "CampusPhone",
            CampusContactPerson = "CampusContactPerson",
            CampusMobile = "CampusMobile",
            CampusEmail = "CampusEmail",
            CampusWebsite = "CampusWebsite",
            CampusCountryId = "CampusCountryId",
            CampusAreaId = "CampusAreaId",
            CampusTenantId = "CampusTenantId",
            AdmissionFeeTermId = "AdmissionFeeTermId",
            AdmissionAcadamicYearId = "AdmissionAcadamicYearId"
        }
    }
}
