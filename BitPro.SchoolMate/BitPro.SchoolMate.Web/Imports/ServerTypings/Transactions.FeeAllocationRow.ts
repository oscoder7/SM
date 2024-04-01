namespace BitPro.SchoolMate.Transactions {
    export interface FeeAllocationRow {
        Id?: number;
        FeeCollectionId?: number;
        CourseFeeId?: number;
        FeeStrctureId?: number;
        Collected?: number;
        Balance?: number;
        Receipts?: SchoolMate.Accounts.ReceiptRow[];
        FeeCollectionStudentId?: number;
        FeeCollectionCourseId?: number;
        FeeCollectionPayDate?: string;
        FeeCollectionTotalAmount?: number;
        FeeCollectionTenantId?: number;
        FeeCode?: string;
        CourseFeeCourseId?: number;
        CourseFeeFeeId?: number;
        TermName?: string;
        FeeStrctureFeeTermId?: number;
        FeeStrctureFeeAmount?: number;
        FeeStrctureFeeId?: number;
        FeeStrctureAcadamicYearId?: number;
        FeeStrctureTenantId?: number;
    }

    export namespace FeeAllocationRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Transactions.FeeAllocation';
        export const deletePermission = 'Transactions:FeeCollection';
        export const insertPermission = 'Transactions:FeeCollection';
        export const readPermission = 'Transactions:FeeCollection';
        export const updatePermission = 'Transactions:FeeCollection';

        export declare const enum Fields {
            Id = "Id",
            FeeCollectionId = "FeeCollectionId",
            CourseFeeId = "CourseFeeId",
            FeeStrctureId = "FeeStrctureId",
            Collected = "Collected",
            Balance = "Balance",
            Receipts = "Receipts",
            FeeCollectionStudentId = "FeeCollectionStudentId",
            FeeCollectionCourseId = "FeeCollectionCourseId",
            FeeCollectionPayDate = "FeeCollectionPayDate",
            FeeCollectionTotalAmount = "FeeCollectionTotalAmount",
            FeeCollectionTenantId = "FeeCollectionTenantId",
            FeeCode = "FeeCode",
            CourseFeeCourseId = "CourseFeeCourseId",
            CourseFeeFeeId = "CourseFeeFeeId",
            TermName = "TermName",
            FeeStrctureFeeTermId = "FeeStrctureFeeTermId",
            FeeStrctureFeeAmount = "FeeStrctureFeeAmount",
            FeeStrctureFeeId = "FeeStrctureFeeId",
            FeeStrctureAcadamicYearId = "FeeStrctureAcadamicYearId",
            FeeStrctureTenantId = "FeeStrctureTenantId"
        }
    }
}
