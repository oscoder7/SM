namespace BitPro.SchoolMate.Master {
    export interface ExamMaxMarksRow {
        Id?: number;
        ExamCoursesId?: number;
        CourseSubjectId?: number;
        MaxMark?: number;
        ExamCoursesExamId?: number;
        ExamCoursesPromotionId?: number;
        CourseSubjectCourseId?: number;
        CourseSubjectSubjectId?: number;
        CourseSubjectMaxMarks?: number;
        CourseSubject?: string;
    }

    export namespace ExamMaxMarksRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Master.ExamMaxMarks';
        export const deletePermission = 'Master:Exams';
        export const insertPermission = 'Master:Exams';
        export const readPermission = 'Master:Exams';
        export const updatePermission = 'Master:Exams';

        export declare const enum Fields {
            Id = "Id",
            ExamCoursesId = "ExamCoursesId",
            CourseSubjectId = "CourseSubjectId",
            MaxMark = "MaxMark",
            ExamCoursesExamId = "ExamCoursesExamId",
            ExamCoursesPromotionId = "ExamCoursesPromotionId",
            CourseSubjectCourseId = "CourseSubjectCourseId",
            CourseSubjectSubjectId = "CourseSubjectSubjectId",
            CourseSubjectMaxMarks = "CourseSubjectMaxMarks",
            CourseSubject = "CourseSubject"
        }
    }
}
