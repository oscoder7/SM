namespace BitPro.SchoolMate.Master {
    export interface DivisionStudentsRow {
        Id?: number;
        DivisionId?: number;
        PromotionDetailId?: number;
        DivisionCourseId?: number;
        DivisionTeacherId?: number;
        DivisionDivisionCode?: string;
        DivisionAcadamicYearId?: number;
        DivisionTenantId?: number;
        Student?: string;
        PromotionDetailPromotionId?: number;
        PromotionDetailStudentId?: number;
        PromotionDetailIsCompleted?: boolean;
        PromotionDetailPromotionType?: number;
    }

    export namespace DivisionStudentsRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Master.DivisionStudents';
        export const deletePermission = 'Transactions:Promotions';
        export const insertPermission = 'Transactions:Promotions';
        export const readPermission = 'Transactions:Promotions';
        export const updatePermission = 'Transactions:Promotions';

        export declare const enum Fields {
            Id = "Id",
            DivisionId = "DivisionId",
            PromotionDetailId = "PromotionDetailId",
            DivisionCourseId = "DivisionCourseId",
            DivisionTeacherId = "DivisionTeacherId",
            DivisionDivisionCode = "DivisionDivisionCode",
            DivisionAcadamicYearId = "DivisionAcadamicYearId",
            DivisionTenantId = "DivisionTenantId",
            Student = "Student",
            PromotionDetailPromotionId = "PromotionDetailPromotionId",
            PromotionDetailStudentId = "PromotionDetailStudentId",
            PromotionDetailIsCompleted = "PromotionDetailIsCompleted",
            PromotionDetailPromotionType = "PromotionDetailPromotionType"
        }
    }
}
