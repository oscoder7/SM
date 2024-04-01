namespace BitPro.SchoolMate.Transactions {
    export interface ProgressCard {
        Campus?: string;
        Address?: string;
        Phone?: string;
        student?: string;
        CourseName?: string;
        FatherName?: string;
        Exams?: SchoolMate.Master.ExamsRow[];
        Subjects?: any[];
    }
}
