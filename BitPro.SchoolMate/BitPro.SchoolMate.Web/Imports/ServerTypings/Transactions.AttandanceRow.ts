namespace BitPro.SchoolMate.Transactions {
    export interface AttandanceRow {
        Id?: number;
        StaffId?: number;
        Date?: string;
        AcadamicYearId?: number;
        Status?: AttendanceStatus;
        Attachments?: string;
        Description?: string;
        PromotionDetailId?: number;
        TenantId?: number;
        StaffCode?: string;
        StaffStaffName?: string;
        StaffContactId?: number;
        StaffIsTeacher?: boolean;
        StaffRemarks?: string;
        StaffDailyWage?: number;
        StaffTenantId?: number;
        AcadamicYearCode?: string;
        AcadamicYearPeriodFrom?: string;
        AcadamicYearPeriodTo?: string;
        AcadamicYearDescription?: string;
        AcadamicYearTenantId?: number;
    }

    export namespace AttandanceRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Transactions.Attandance';
        export const lookupKey = 'Master.Attandance';

        export function getLookup(): Q.Lookup<AttandanceRow> {
            return Q.getLookup<AttandanceRow>('Master.Attandance');
        }
        export const deletePermission = 'Transactions:Attandance';
        export const insertPermission = 'Transactions:Attandance';
        export const readPermission = 'Transactions:Attandance';
        export const updatePermission = 'Transactions:Attandance';

        export declare const enum Fields {
            Id = "Id",
            StaffId = "StaffId",
            Date = "Date",
            AcadamicYearId = "AcadamicYearId",
            Status = "Status",
            Attachments = "Attachments",
            Description = "Description",
            PromotionDetailId = "PromotionDetailId",
            TenantId = "TenantId",
            StaffCode = "StaffCode",
            StaffStaffName = "StaffStaffName",
            StaffContactId = "StaffContactId",
            StaffIsTeacher = "StaffIsTeacher",
            StaffRemarks = "StaffRemarks",
            StaffDailyWage = "StaffDailyWage",
            StaffTenantId = "StaffTenantId",
            AcadamicYearCode = "AcadamicYearCode",
            AcadamicYearPeriodFrom = "AcadamicYearPeriodFrom",
            AcadamicYearPeriodTo = "AcadamicYearPeriodTo",
            AcadamicYearDescription = "AcadamicYearDescription",
            AcadamicYearTenantId = "AcadamicYearTenantId"
        }
    }
}
