namespace BitPro.SchoolMate.Accounts {
    export interface ReceiptRow {
        Id?: number;
        VType?: VoucherTypes;
        VNo?: number;
        DebitAccountHeadId?: number;
        CreditAccountHeadId?: number;
        Amount?: number;
        PaymentMethod?: AccountTypes;
        DebitAccountId?: number;
        CreditAccountId?: number;
        ContactId?: number;
        TrxDate?: string;
        TenantId?: number;
        Remarks?: string;
        EntityType?: string;
        EntityId?: number;
        TranportationEntityId?: number;
        DebitAccountHeadDescription?: string;
        DebitAccountHeadParentHeadId?: number;
        DebitAccountHeadCode?: string;
        DebitAccountHeadTenantId?: number;
        DebitAccountHeadLedgerType?: number;
        CreditAccountHeadDescription?: string;
        CreditAccountHeadParentHeadId?: number;
        CreditAccountHeadCode?: string;
        CreditAccountHeadTenantId?: number;
        CreditAccountHeadLedgerType?: number;
        DebitAccountType?: number;
        DebitAccountAccountNo?: string;
        DebitAccountAccountHeadId?: number;
        CreditAccountType?: number;
        CreditAccountAccountNo?: string;
        CreditAccountAccountHeadId?: number;
        Attachments?: string;
    }

    export namespace ReceiptRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Accounts.Receipt';
        export const deletePermission = 'Accounts:ReceiptDelete';
        export const insertPermission = 'Accounts:ReceiptCreate';
        export const readPermission = 'Accounts:Receipt';
        export const updatePermission = 'Accounts:ReceiptUpdate';

        export declare const enum Fields {
            Id = "Id",
            VType = "VType",
            VNo = "VNo",
            DebitAccountHeadId = "DebitAccountHeadId",
            CreditAccountHeadId = "CreditAccountHeadId",
            Amount = "Amount",
            PaymentMethod = "PaymentMethod",
            DebitAccountId = "DebitAccountId",
            CreditAccountId = "CreditAccountId",
            ContactId = "ContactId",
            TrxDate = "TrxDate",
            TenantId = "TenantId",
            Remarks = "Remarks",
            EntityType = "EntityType",
            EntityId = "EntityId",
            TranportationEntityId = "TranportationEntityId",
            DebitAccountHeadDescription = "DebitAccountHeadDescription",
            DebitAccountHeadParentHeadId = "DebitAccountHeadParentHeadId",
            DebitAccountHeadCode = "DebitAccountHeadCode",
            DebitAccountHeadTenantId = "DebitAccountHeadTenantId",
            DebitAccountHeadLedgerType = "DebitAccountHeadLedgerType",
            CreditAccountHeadDescription = "CreditAccountHeadDescription",
            CreditAccountHeadParentHeadId = "CreditAccountHeadParentHeadId",
            CreditAccountHeadCode = "CreditAccountHeadCode",
            CreditAccountHeadTenantId = "CreditAccountHeadTenantId",
            CreditAccountHeadLedgerType = "CreditAccountHeadLedgerType",
            DebitAccountType = "DebitAccountType",
            DebitAccountAccountNo = "DebitAccountAccountNo",
            DebitAccountAccountHeadId = "DebitAccountAccountHeadId",
            CreditAccountType = "CreditAccountType",
            CreditAccountAccountNo = "CreditAccountAccountNo",
            CreditAccountAccountHeadId = "CreditAccountAccountHeadId",
            Attachments = "Attachments"
        }
    }
}
