namespace BitPro.SchoolMate {
    export interface SalaryResponse extends Serenity.ServiceResponse {
        Id?: number;
        Code?: string;
        StaffName?: string;
        SalaryAmount?: number;
        DaysCount?: number;
        DailyWage?: number;
        TotalPresent?: number;
        TotalAbsente?: number;
        payableamount?: number;
    }
}
