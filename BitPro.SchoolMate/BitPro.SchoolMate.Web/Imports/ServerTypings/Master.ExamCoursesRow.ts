namespace BitPro.SchoolMate.Master {
    export interface ExamCoursesRow {
        Id?: number;
        ExamId?: number;
        PromotionId?: number;
        Subjects?: ExamMaxMarksRow[];
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
        Course?: string;
    }

    export namespace ExamCoursesRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Master.ExamCourses';
        export const deletePermission = 'Master:Exams';
        export const insertPermission = 'Master:Exams';
        export const readPermission = 'Master:Exams';
        export const updatePermission = 'Master:Exams';

        export declare const enum Fields {
            Id = "Id",
            ExamId = "ExamId",
            PromotionId = "PromotionId",
            Subjects = "Subjects",
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
            PromotionJoiningDivisionId = "PromotionJoiningDivisionId",
            Course = "Course"
        }
    }
}
