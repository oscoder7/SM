namespace BitPro.SchoolMate {
    export interface CourseSubjectResponse extends Serenity.ServiceResponse {
        SubjectId?: number;
        SubjectName?: string;
        MaxMark?: number;
    }
}
