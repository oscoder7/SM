namespace BitPro.SchoolMate.Accounts {
    export interface PaymentRow {
        Id?: number;
        VType?: number;
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
        SalaryPaymentEntityId?: number;
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

    export namespace PaymentRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Accounts.Payment';
        export const deletePermission = 'Accounts:PaymentDelete';
        export const insertPermission = 'Accounts:PaymentCreate';
        export const readPermission = 'Accounts:Payment';
        export const updatePermission = 'Accounts:PaymentUpdate';

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
            SalaryPaymentEntityId = "SalaryPaymentEntityId",
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
