namespace BitPro.SchoolMate.Transactions {
    export interface CourseExitDetailsRow {
        Id?: number;
        CourseExitId?: number;
        PromotionDetailId?: number;
        Attachments?: string;
        CourseExitAcadamicYearId?: number;
        CourseExitPromotionId?: number;
        CourseExitExitType?: number;
        CourseExitExitDate?: string;
        PromotionDetailPromotionId?: number;
        PromotionDetailStudentId?: number;
        PromotionDetailIsCompleted?: boolean;
        PromotionDetailPromotionType?: number;
        Student?: string;
    }

    export namespace CourseExitDetailsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Attachments';
        export const localTextPrefix = 'Transactions.CourseExitDetails';
        export const deletePermission = 'Transactions:CourseExit';
        export const insertPermission = 'Transactions:CourseExit';
        export const readPermission = 'Transactions:CourseExit';
        export const updatePermission = 'Transactions:CourseExit';

        export declare const enum Fields {
            Id = "Id",
            CourseExitId = "CourseExitId",
            PromotionDetailId = "PromotionDetailId",
            Attachments = "Attachments",
            CourseExitAcadamicYearId = "CourseExitAcadamicYearId",
            CourseExitPromotionId = "CourseExitPromotionId",
            CourseExitExitType = "CourseExitExitType",
            CourseExitExitDate = "CourseExitExitDate",
            PromotionDetailPromotionId = "PromotionDetailPromotionId",
            PromotionDetailStudentId = "PromotionDetailStudentId",
            PromotionDetailIsCompleted = "PromotionDetailIsCompleted",
            PromotionDetailPromotionType = "PromotionDetailPromotionType",
            Student = "Student"
        }
    }
}
