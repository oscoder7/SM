namespace BitPro.SchoolMate.Transactions {
    export interface StudentMarksDetailsRow {
        Id?: number;
        StudentMarksSubjectsId?: number;
        PromotionDetailId?: number;
        Mark?: number;
        Description?: string;
        StudentMarksSubjectsStudentMarksId?: number;
        StudentMarksSubjectsCourseSubjectId?: number;
        PromotionDetailPromotionId?: number;
        PromotionDetailStudentId?: number;
        PromotionDetailIsCompleted?: boolean;
        PromotionDetailPromotionType?: number;
        Student?: string;
    }

    export namespace StudentMarksDetailsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Transactions.StudentMarksDetails';
        export const deletePermission = 'Transactions:StudentMarks';
        export const insertPermission = 'Transactions:StudentMarks';
        export const readPermission = 'Transactions:StudentMarks';
        export const updatePermission = 'Transactions:StudentMarks';

        export declare const enum Fields {
            Id = "Id",
            StudentMarksSubjectsId = "StudentMarksSubjectsId",
            PromotionDetailId = "PromotionDetailId",
            Mark = "Mark",
            Description = "Description",
            StudentMarksSubjectsStudentMarksId = "StudentMarksSubjectsStudentMarksId",
            StudentMarksSubjectsCourseSubjectId = "StudentMarksSubjectsCourseSubjectId",
            PromotionDetailPromotionId = "PromotionDetailPromotionId",
            PromotionDetailStudentId = "PromotionDetailStudentId",
            PromotionDetailIsCompleted = "PromotionDetailIsCompleted",
            PromotionDetailPromotionType = "PromotionDetailPromotionType",
            Student = "Student"
        }
    }
}
