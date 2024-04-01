namespace BitPro.SchoolMate {
    export interface UpdateListAttendanceRequest extends Serenity.ServiceRequest {
        date?: SchoolMate.Transactions.AttandanceRow[];
        status?: number;
    }
}
