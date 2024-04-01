namespace BitPro.SchoolMate.Master {
    export interface StaffsRow {
        Id?: number;
        Code?: string;
        StaffName?: string;
        ContactId?: number;
        IsTeacher?: boolean;
        Remarks?: string;
        DailyWage?: number;
        StaffSubjects?: number[];
        FullName?: string;
        JoiningDate?: string;
        Qualification?: string;
        SalaryAmount?: number;
        DaysCount?: number;
        TenantId?: number;
        ContactName?: string;
        ContactPhone?: string;
        ContactEmail?: string;
        ContactWhatsapp?: string;
        ContactAddress1?: string;
        ContactAddress2?: string;
        ContactNationality?: number;
    }

    export namespace StaffsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'FullName';
        export const localTextPrefix = 'Master.Staffs';
        export const lookupKey = 'Master.Staffs';

        export function getLookup(): Q.Lookup<StaffsRow> {
            return Q.getLookup<StaffsRow>('Master.Staffs');
        }
        export const deletePermission = 'Master:Staffs';
        export const insertPermission = 'Master:Staffs';
        export const readPermission = 'Master:Staffs';
        export const updatePermission = 'Master:Staffs';

        export declare const enum Fields {
            Id = "Id",
            Code = "Code",
            StaffName = "StaffName",
            ContactId = "ContactId",
            IsTeacher = "IsTeacher",
            Remarks = "Remarks",
            DailyWage = "DailyWage",
            StaffSubjects = "StaffSubjects",
            FullName = "FullName",
            JoiningDate = "JoiningDate",
            Qualification = "Qualification",
            SalaryAmount = "SalaryAmount",
            DaysCount = "DaysCount",
            TenantId = "TenantId",
            ContactName = "ContactName",
            ContactPhone = "ContactPhone",
            ContactEmail = "ContactEmail",
            ContactWhatsapp = "ContactWhatsapp",
            ContactAddress1 = "ContactAddress1",
            ContactAddress2 = "ContactAddress2",
            ContactNationality = "ContactNationality"
        }
    }
}
