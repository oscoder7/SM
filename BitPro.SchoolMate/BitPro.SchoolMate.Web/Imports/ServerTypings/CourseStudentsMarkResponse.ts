namespace BitPro.SchoolMate {
    export interface CourseStudentsMarkResponse extends Serenity.ServiceResponse {
        StudentId?: number;
        ExamId?: number;
        SubjectId?: number;
        StudentName?: string;
        ExamName?: string;
        ExamDate?: string;
        SubjectName?: string;
        Mark?: number;
        MaxMarks?: number;
    }
}
