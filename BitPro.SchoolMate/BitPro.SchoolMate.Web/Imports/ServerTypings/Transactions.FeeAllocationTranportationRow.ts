namespace BitPro.SchoolMate.Transactions {
    export interface FeeAllocationTranportationRow {
        Id?: number;
        FeeCollectionId?: number;
        FeeId?: number;
        FeeStrctureId?: number;
        Collected?: number;
        Balance?: number;
        Receipts?: SchoolMate.Accounts.ReceiptRow[];
        FeeCollectionStudentId?: number;
        FeeCollectionPayDate?: string;
        FeeCollectionTotalAmount?: number;
        FeeCollectionTenantId?: number;
        FeeCollectionAcadamicYearId?: number;
        FeeCollectionPromotionDetailId?: number;
        FeeCollectionPaymentMethod?: number;
        FeeCollectionAccountId?: number;
        FeeCode?: string;
        FeeFeeName?: string;
        FeeAnnualFee?: number;
        FeeTenantId?: number;
        FeeDebitAccountHeadId?: number;
        FeeIsTranportation?: boolean;
        FeeStrctureFeeTermId?: number;
        FeeStrctureFeeAmount?: number;
        FeeStrctureFeeId?: number;
        FeeStrctureAcadamicYearId?: number;
        FeeStrctureTenantId?: number;
        TermName?: string;
    }

    export namespace FeeAllocationTranportationRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Transactions.FeeAllocationTranportation';
        export const deletePermission = 'Transactions:FeeCollection';
        export const insertPermission = 'Transactions:FeeCollection';
        export const readPermission = 'Transactions:FeeCollection';
        export const updatePermission = 'Transactions:FeeCollection';

        export declare const enum Fields {
            Id = "Id",
            FeeCollectionId = "FeeCollectionId",
            FeeId = "FeeId",
            FeeStrctureId = "FeeStrctureId",
            Collected = "Collected",
            Balance = "Balance",
            Receipts = "Receipts",
            FeeCollectionStudentId = "FeeCollectionStudentId",
            FeeCollectionPayDate = "FeeCollectionPayDate",
            FeeCollectionTotalAmount = "FeeCollectionTotalAmount",
            FeeCollectionTenantId = "FeeCollectionTenantId",
            FeeCollectionAcadamicYearId = "FeeCollectionAcadamicYearId",
            FeeCollectionPromotionDetailId = "FeeCollectionPromotionDetailId",
            FeeCollectionPaymentMethod = "FeeCollectionPaymentMethod",
            FeeCollectionAccountId = "FeeCollectionAccountId",
            FeeCode = "FeeCode",
            FeeFeeName = "FeeFeeName",
            FeeAnnualFee = "FeeAnnualFee",
            FeeTenantId = "FeeTenantId",
            FeeDebitAccountHeadId = "FeeDebitAccountHeadId",
            FeeIsTranportation = "FeeIsTranportation",
            FeeStrctureFeeTermId = "FeeStrctureFeeTermId",
            FeeStrctureFeeAmount = "FeeStrctureFeeAmount",
            FeeStrctureFeeId = "FeeStrctureFeeId",
            FeeStrctureAcadamicYearId = "FeeStrctureAcadamicYearId",
            FeeStrctureTenantId = "FeeStrctureTenantId",
            TermName = "TermName"
        }
    }
}
