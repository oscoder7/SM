namespace BitPro.SchoolMate {
    export interface DivisonResponse extends Serenity.ServiceResponse {
        StudentId?: number;
        StudentName?: string;
        Status?: boolean;
    }
}
