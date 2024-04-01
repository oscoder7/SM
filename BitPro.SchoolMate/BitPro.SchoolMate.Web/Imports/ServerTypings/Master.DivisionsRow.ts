namespace BitPro.SchoolMate.Master {
    export interface DivisionsRow {
        Id?: number;
        TeacherId?: number;
        DivisionCode?: string;
        AcadamicYearId?: number;
        TenantId?: number;
        PromotionId?: number;
        DivisionStudents?: DivisionStudentsRow[];
        TeacherCode?: string;
        TeacherStaffName?: string;
        TeacherContactId?: number;
        TeacherIsTeacher?: boolean;
        TeacherRemarks?: string;
        TeacherDailyWage?: number;
        TeacherTenantId?: number;
        AcadamicYearCode?: string;
        AcadamicYearPeriodFrom?: string;
        AcadamicYearPeriodTo?: string;
        AcadamicYearDescription?: string;
        AcadamicYearTenantId?: number;
    }

    export namespace DivisionsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'DivisionCode';
        export const localTextPrefix = 'Master.Divisions';
        export const lookupKey = 'Master.Divisions';

        export function getLookup(): Q.Lookup<DivisionsRow> {
            return Q.getLookup<DivisionsRow>('Master.Divisions');
        }
        export const deletePermission = 'Transactions:Promotions';
        export const insertPermission = 'Transactions:Promotions';
        export const readPermission = 'Transactions:Promotions';
        export const updatePermission = 'Transactions:Promotions';

        export declare const enum Fields {
            Id = "Id",
            TeacherId = "TeacherId",
            DivisionCode = "DivisionCode",
            AcadamicYearId = "AcadamicYearId",
            TenantId = "TenantId",
            PromotionId = "PromotionId",
            DivisionStudents = "DivisionStudents",
            TeacherCode = "TeacherCode",
            TeacherStaffName = "TeacherStaffName",
            TeacherContactId = "TeacherContactId",
            TeacherIsTeacher = "TeacherIsTeacher",
            TeacherRemarks = "TeacherRemarks",
            TeacherDailyWage = "TeacherDailyWage",
            TeacherTenantId = "TeacherTenantId",
            AcadamicYearCode = "AcadamicYearCode",
            AcadamicYearPeriodFrom = "AcadamicYearPeriodFrom",
            AcadamicYearPeriodTo = "AcadamicYearPeriodTo",
            AcadamicYearDescription = "AcadamicYearDescription",
            AcadamicYearTenantId = "AcadamicYearTenantId"
        }
    }
}
