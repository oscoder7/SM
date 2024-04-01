namespace BitPro.SchoolMate.Accounts {
    export interface ContraRow {
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

    export namespace ContraRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Accounts.Contra';
        export const deletePermission = 'Accounts:ContraDelete';
        export const insertPermission = 'Accounts:ContraCreate';
        export const readPermission = 'Accounts:Contra';
        export const updatePermission = 'Accounts:ContraUpdate';

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
