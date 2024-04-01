namespace BitPro.SchoolMate.Transactions {
    export interface CourseExitRow {
        Id?: number;
        AcadamicYearId?: number;
        PromotionId?: number;
        ExitType?: CourseExitTypes;
        ExitDate?: string;
        Students?: CourseExitDetailsRow[];
        TenantId?: number;
        AcadamicYearCode?: string;
        AcadamicYearPeriodFrom?: string;
        AcadamicYearPeriodTo?: string;
        AcadamicYearDescription?: string;
        AcadamicYearTenantId?: number;
        PromotionFromCourse?: number;
        PromotionToCourse?: number;
        PromotionCreatedBy?: number;
        PromotionCreatedDate?: string;
        PromotionTenantId?: number;
        PromotionAcadamicYearId?: number;
        PromotionJoiningDivisionId?: number;
        ToCourse?: string;
    }

    export namespace CourseExitRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Transactions.CourseExit';
        export const deletePermission = 'Transactions:CourseExit';
        export const insertPermission = 'Transactions:CourseExit';
        export const readPermission = 'Transactions:CourseExit';
        export const updatePermission = 'Transactions:CourseExit';

        export declare const enum Fields {
            Id = "Id",
            AcadamicYearId = "AcadamicYearId",
            PromotionId = "PromotionId",
            ExitType = "ExitType",
            ExitDate = "ExitDate",
            Students = "Students",
            TenantId = "TenantId",
            AcadamicYearCode = "AcadamicYearCode",
            AcadamicYearPeriodFrom = "AcadamicYearPeriodFrom",
            AcadamicYearPeriodTo = "AcadamicYearPeriodTo",
            AcadamicYearDescription = "AcadamicYearDescription",
            AcadamicYearTenantId = "AcadamicYearTenantId",
            PromotionFromCourse = "PromotionFromCourse",
            PromotionToCourse = "PromotionToCourse",
            PromotionCreatedBy = "PromotionCreatedBy",
            PromotionCreatedDate = "PromotionCreatedDate",
            PromotionTenantId = "PromotionTenantId",
            PromotionAcadamicYearId = "PromotionAcadamicYearId",
            PromotionJoiningDivisionId = "PromotionJoiningDivisionId",
            ToCourse = "ToCourse"
        }
    }
}
