namespace BitPro.SchoolMate.Transactions {
    export interface StudentMarksRow {
        Id?: number;
        AcadamicYearId?: number;
        ExamId?: number;
        ExamDate?: string;
        PromotionId?: number;
        Subjects?: StudentMarksSubjectsRow[];
        TenantId?: number;
        AcadamicYearCode?: string;
        AcadamicYearPeriodFrom?: string;
        AcadamicYearPeriodTo?: string;
        AcadamicYearDescription?: string;
        AcadamicYearTenantId?: number;
        ExamCode?: string;
        ExamExamName?: string;
        ExamAcadamicYearId?: number;
        ExamTenantId?: number;
        PromotionFromCourse?: number;
        PromotionToCourse?: number;
        PromotionCreatedBy?: number;
        PromotionCreatedDate?: string;
        PromotionTenantId?: number;
        PromotionAcadamicYearId?: number;
        PromotionJoiningDivisionId?: number;
    }

    export namespace StudentMarksRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Transactions.StudentMarks';
        export const deletePermission = 'Transactions:StudentMarks';
        export const insertPermission = 'Transactions:StudentMarks';
        export const readPermission = 'Transactions:StudentMarks';
        export const updatePermission = 'Transactions:StudentMarks';

        export declare const enum Fields {
            Id = "Id",
            AcadamicYearId = "AcadamicYearId",
            ExamId = "ExamId",
            ExamDate = "ExamDate",
            PromotionId = "PromotionId",
            Subjects = "Subjects",
            TenantId = "TenantId",
            AcadamicYearCode = "AcadamicYearCode",
            AcadamicYearPeriodFrom = "AcadamicYearPeriodFrom",
            AcadamicYearPeriodTo = "AcadamicYearPeriodTo",
            AcadamicYearDescription = "AcadamicYearDescription",
            AcadamicYearTenantId = "AcadamicYearTenantId",
            ExamCode = "ExamCode",
            ExamExamName = "ExamExamName",
            ExamAcadamicYearId = "ExamAcadamicYearId",
            ExamTenantId = "ExamTenantId",
            PromotionFromCourse = "PromotionFromCourse",
            PromotionToCourse = "PromotionToCourse",
            PromotionCreatedBy = "PromotionCreatedBy",
            PromotionCreatedDate = "PromotionCreatedDate",
            PromotionTenantId = "PromotionTenantId",
            PromotionAcadamicYearId = "PromotionAcadamicYearId",
            PromotionJoiningDivisionId = "PromotionJoiningDivisionId"
        }
    }
}
