namespace BitPro.SchoolMate.Transactions {
    export interface PromotionDetailsRow {
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

    export namespace PromotionDetailsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Course';
        export const localTextPrefix = 'Transactions.PromotionDetails';
        export const lookupKey = 'Transactions.PromotionsDetails';

        export function getLookup(): Q.Lookup<PromotionDetailsRow> {
            return Q.getLookup<PromotionDetailsRow>('Transactions.PromotionsDetails');
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
