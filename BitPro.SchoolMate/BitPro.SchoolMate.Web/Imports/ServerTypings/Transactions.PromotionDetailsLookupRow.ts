namespace BitPro.SchoolMate.Transactions {
    export interface PromotionDetailsLookupRow {
        Id?: number;
        PromotionId?: number;
        StudentId?: number;
        IsCompleted?: boolean;
        PromotionType?: PromotionTypes;
        PromotionFromCourse?: number;
        PromotionToCourse?: number;
        PromotionCreatedBy?: number;
        PromotionCreatedDate?: string;
        PromotionTenantId?: number;
        PromotionAcadamicYearId?: number;
        StudentCode?: string;
        StudentName?: string;
        StudentJoiningDate?: string;
        StudentJoiningCourse?: number;
        StudentFatherContactId?: number;
        StudentMotherContactId?: number;
        StudentStudentContactId?: number;
        StudentCampusId?: number;
        StudentOtherInstitute?: string;
        StudentDivision?: string;
        StudentTenantId?: number;
        Course?: string;
    }

    export namespace PromotionDetailsLookupRow {
        export const idProperty = 'Id';
        export const nameProperty = 'StudentName';
        export const localTextPrefix = 'Transactions.PromotionDetailsLookup';
        export const lookupKey = 'Transactions.PromotionDetailsLookup';

        export function getLookup(): Q.Lookup<PromotionDetailsLookupRow> {
            return Q.getLookup<PromotionDetailsLookupRow>('Transactions.PromotionDetailsLookup');
        }
        export const deletePermission = 'Transactions:Promotions';
        export const insertPermission = 'Transactions:Promotions';
        export const readPermission = 'Transactions:Promotions';
        export const updatePermission = 'Transactions:Promotions';

        export declare const enum Fields {
            Id = "Id",
            PromotionId = "PromotionId",
            StudentId = "StudentId",
            IsCompleted = "IsCompleted",
            PromotionType = "PromotionType",
            PromotionFromCourse = "PromotionFromCourse",
            PromotionToCourse = "PromotionToCourse",
            PromotionCreatedBy = "PromotionCreatedBy",
            PromotionCreatedDate = "PromotionCreatedDate",
            PromotionTenantId = "PromotionTenantId",
            PromotionAcadamicYearId = "PromotionAcadamicYearId",
            StudentCode = "StudentCode",
            StudentName = "StudentName",
            StudentJoiningDate = "StudentJoiningDate",
            StudentJoiningCourse = "StudentJoiningCourse",
            StudentFatherContactId = "StudentFatherContactId",
            StudentMotherContactId = "StudentMotherContactId",
            StudentStudentContactId = "StudentStudentContactId",
            StudentCampusId = "StudentCampusId",
            StudentOtherInstitute = "StudentOtherInstitute",
            StudentDivision = "StudentDivision",
            StudentTenantId = "StudentTenantId",
            Course = "Course"
        }
    }
}
