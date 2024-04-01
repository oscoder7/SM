namespace BitPro.SchoolMate {
    export interface ExamMarkResponse extends Serenity.ServiceRequest {
        StudentID?: number;
        ExamId?: number;
        SubjectId?: number;
        Campus?: string;
        Address?: string;
        Phone?: string;
        FatherName?: string;
        StudentName?: string;
        CourseName?: string;
        ExamName?: string;
        SubjectName?: string;
        Mark?: number;
        MaxMark?: number;
    }
}
