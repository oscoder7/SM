namespace BitPro.SchoolMate.Transactions {
    export interface StudentMarksSubjectsRow {
        Id?: number;
        StudentMarksId?: number;
        CourseSubjectId?: number;
        StudentMarksDetails?: StudentMarksDetailsRow[];
        StudentMarksAcadamicYearId?: number;
        StudentMarksExamId?: number;
        StudentMarksExamDate?: string;
        StudentMarksPromotionId?: number;
        CourseSubjectCourseId?: number;
        CourseSubjectSubjectId?: number;
        CourseSubjectMaxMarks?: number;
        CourseSubject?: string;
    }

    export namespace StudentMarksSubjectsRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Transactions.StudentMarksSubjects';
        export const deletePermission = 'Transactions:StudentMarks';
        export const insertPermission = 'Transactions:StudentMarks';
        export const readPermission = 'Transactions:StudentMarks';
        export const updatePermission = 'Transactions:StudentMarks';

        export declare const enum Fields {
            Id = "Id",
            StudentMarksId = "StudentMarksId",
            CourseSubjectId = "CourseSubjectId",
            StudentMarksDetails = "StudentMarksDetails",
            StudentMarksAcadamicYearId = "StudentMarksAcadamicYearId",
            StudentMarksExamId = "StudentMarksExamId",
            StudentMarksExamDate = "StudentMarksExamDate",
            StudentMarksPromotionId = "StudentMarksPromotionId",
            CourseSubjectCourseId = "CourseSubjectCourseId",
            CourseSubjectSubjectId = "CourseSubjectSubjectId",
            CourseSubjectMaxMarks = "CourseSubjectMaxMarks",
            CourseSubject = "CourseSubject"
        }
    }
}
