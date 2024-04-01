namespace BitPro.SchoolMate.Transactions {
    export interface PromotionsRow {
        Id?: number;
        FromCourse?: number;
        ToCourse?: number;
        CreatedBy?: number;
        CreatedDate?: string;
        TenantId?: number;
        AcadamicYearId?: number;
        PromotionDetail?: PromotionDetailsRow[];
        PromotionDivisions?: SchoolMate.Master.DivisionsRow[];
        FromCourseCode?: string;
        FromCourseCourseName?: string;
        FromCourseActive?: boolean;
        FromCourseNonAcadamic?: boolean;
        FromCourseTenantId?: number;
        ToCourseCode?: string;
        ToCourseCourseName?: string;
        ToCourseActive?: boolean;
        ToCourseNonAcadamic?: boolean;
        ToCourseTenantId?: number;
        CreatedByCode?: string;
        CreatedByStaffName?: string;
        CreatedByContactId?: number;
        CreatedByIsTeacher?: boolean;
        CreatedByRemarks?: string;
        CreatedByDailyWage?: number;
        CreatedByTenantId?: number;
        AcadamicYearCode?: string;
        AcadamicYearPeriodFrom?: string;
        AcadamicYearPeriodTo?: string;
        AcadamicYearDescription?: string;
        AcadamicYearTenantId?: number;
    }

    export namespace PromotionsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ToCourseCourseName';
        export const localTextPrefix = 'Transactions.Promotions';
        export const lookupKey = 'Transactions.Promotions';

        export function getLookup(): Q.Lookup<PromotionsRow> {
            return Q.getLookup<PromotionsRow>('Transactions.Promotions');
        }
        export const deletePermission = 'Transactions:Promotions';
        export const insertPermission = 'Transactions:Promotions';
        export const readPermission = 'Transactions:Promotions';
        export const updatePermission = 'Transactions:Promotions';

        export declare const enum Fields {
            Id = "Id",
            FromCourse = "FromCourse",
            ToCourse = "ToCourse",
            CreatedBy = "CreatedBy",
            CreatedDate = "CreatedDate",
            TenantId = "TenantId",
            AcadamicYearId = "AcadamicYearId",
            PromotionDetail = "PromotionDetail",
            PromotionDivisions = "PromotionDivisions",
            FromCourseCode = "FromCourseCode",
            FromCourseCourseName = "FromCourseCourseName",
            FromCourseActive = "FromCourseActive",
            FromCourseNonAcadamic = "FromCourseNonAcadamic",
            FromCourseTenantId = "FromCourseTenantId",
            ToCourseCode = "ToCourseCode",
            ToCourseCourseName = "ToCourseCourseName",
            ToCourseActive = "ToCourseActive",
            ToCourseNonAcadamic = "ToCourseNonAcadamic",
            ToCourseTenantId = "ToCourseTenantId",
            CreatedByCode = "CreatedByCode",
            CreatedByStaffName = "CreatedByStaffName",
            CreatedByContactId = "CreatedByContactId",
            CreatedByIsTeacher = "CreatedByIsTeacher",
            CreatedByRemarks = "CreatedByRemarks",
            CreatedByDailyWage = "CreatedByDailyWage",
            CreatedByTenantId = "CreatedByTenantId",
            AcadamicYearCode = "AcadamicYearCode",
            AcadamicYearPeriodFrom = "AcadamicYearPeriodFrom",
            AcadamicYearPeriodTo = "AcadamicYearPeriodTo",
            AcadamicYearDescription = "AcadamicYearDescription",
            AcadamicYearTenantId = "AcadamicYearTenantId"
        }
    }
}
