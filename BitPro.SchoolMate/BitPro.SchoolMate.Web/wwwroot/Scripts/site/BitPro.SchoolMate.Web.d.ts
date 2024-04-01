/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace BitPro.SchoolMate {
    interface AcadamicYearCourseSubjectResponse extends Serenity.ServiceResponse {
        promotionid?: number;
        CousrseName?: string;
        courseSubjectResponses?: CourseSubjectResponse[];
    }
}
declare namespace BitPro.SchoolMate {
    interface AcadamicYearCourseSubjectsRequest extends Serenity.ServiceRequest {
        acadamicyearid?: number;
    }
}
declare namespace BitPro.SchoolMate {
    interface AcadamicYearSubjectResponse extends Serenity.ServiceResponse {
        promotionid?: number;
        CousrseName?: string;
        SubjectId?: number;
        SubjectName?: string;
        MaxMark?: number;
    }
}
declare namespace BitPro.SchoolMate {
    interface AcadamicYearTermsResponse extends Serenity.ServiceResponse {
        TermId?: string;
        AcadamicYearId?: string;
        TermName?: string;
        AcadamicYear?: string;
    }
}
declare namespace BitPro.SchoolMate.Accounts {
}
declare namespace BitPro.SchoolMate.Accounts {
    interface AccountsForm {
        Type: Serenity.EnumEditor;
        AccountNo: Serenity.StringEditor;
        AccountHeadId: Serenity.LookupEditor;
        IsDefault: Serenity.BooleanEditor;
    }
    class AccountsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Accounts {
    interface AccountsRow {
        Id?: number;
        Type?: AccountTypes;
        AccountNo?: string;
        AccountHeadId?: number;
        TenantId?: number;
        IsDefault?: boolean;
        AccountHeadDescription?: string;
        AccountHeadParentHeadId?: number;
        AccountHeadCode?: string;
        AccountHeadTenantId?: number;
        AccountHeadLedgerType?: number;
    }
    namespace AccountsRow {
        const idProperty = "Id";
        const nameProperty = "AccountNo";
        const localTextPrefix = "Accounts.Accounts";
        const lookupKey = "Accounts.Accounts";
        function getLookup(): Q.Lookup<AccountsRow>;
        const deletePermission = "Accounts:Accounts";
        const insertPermission = "Accounts:Accounts";
        const readPermission = "Accounts:Accounts";
        const updatePermission = "Accounts:Accounts";
        const enum Fields {
            Id = "Id",
            Type = "Type",
            AccountNo = "AccountNo",
            AccountHeadId = "AccountHeadId",
            TenantId = "TenantId",
            IsDefault = "IsDefault",
            AccountHeadDescription = "AccountHeadDescription",
            AccountHeadParentHeadId = "AccountHeadParentHeadId",
            AccountHeadCode = "AccountHeadCode",
            AccountHeadTenantId = "AccountHeadTenantId",
            AccountHeadLedgerType = "AccountHeadLedgerType"
        }
    }
}
declare namespace BitPro.SchoolMate.Accounts {
    namespace AccountsService {
        const baseUrl = "Accounts/Accounts";
        function Create(request: Serenity.SaveRequest<AccountsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AccountsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AccountsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AccountsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Accounts/Accounts/Create",
            Update = "Accounts/Accounts/Update",
            Delete = "Accounts/Accounts/Delete",
            Retrieve = "Accounts/Accounts/Retrieve",
            List = "Accounts/Accounts/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Accounts {
}
declare namespace BitPro.SchoolMate.Accounts {
    interface ContraForm {
        VNo: Serenity.IntegerEditor;
        TrxDate: Serenity.DateEditor;
        ContactId: Serenity.LookupEditor;
        DebitAccountId: Serenity.LookupEditor;
        Amount: Serenity.DecimalEditor;
        PaymentMethod: Serenity.EnumEditor;
        CreditAccountId: Serenity.LookupEditor;
        Remarks: Serenity.TextAreaEditor;
        Attachments: Serenity.MultipleImageUploadEditor;
    }
    class ContraForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Accounts {
    interface ContraRow {
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
    namespace ContraRow {
        const idProperty = "Id";
        const localTextPrefix = "Accounts.Contra";
        const deletePermission = "Accounts:ContraDelete";
        const insertPermission = "Accounts:ContraCreate";
        const readPermission = "Accounts:Contra";
        const updatePermission = "Accounts:ContraUpdate";
        const enum Fields {
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
declare namespace BitPro.SchoolMate.Accounts {
    namespace ContraService {
        const baseUrl = "Accounts/Contra";
        function Create(request: Serenity.SaveRequest<ContraRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ContraRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ContraRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ContraRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Accounts/Contra/Create",
            Update = "Accounts/Contra/Update",
            Delete = "Accounts/Contra/Delete",
            Retrieve = "Accounts/Contra/Retrieve",
            List = "Accounts/Contra/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Accounts {
}
declare namespace BitPro.SchoolMate.Accounts {
    interface PaymentForm {
        VNo: Serenity.IntegerEditor;
        TrxDate: Serenity.DateEditor;
        ContactId: Serenity.LookupEditor;
        DebitAccountHeadId: Serenity.LookupEditor;
        Amount: Serenity.DecimalEditor;
        PaymentMethod: Serenity.EnumEditor;
        CreditAccountId: Serenity.LookupEditor;
        Remarks: Serenity.TextAreaEditor;
        Attachments: Serenity.MultipleImageUploadEditor;
    }
    class PaymentForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Accounts {
    interface PaymentRow {
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
    namespace PaymentRow {
        const idProperty = "Id";
        const localTextPrefix = "Accounts.Payment";
        const deletePermission = "Accounts:PaymentDelete";
        const insertPermission = "Accounts:PaymentCreate";
        const readPermission = "Accounts:Payment";
        const updatePermission = "Accounts:PaymentUpdate";
        const enum Fields {
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
declare namespace BitPro.SchoolMate.Accounts {
    namespace PaymentService {
        const baseUrl = "Accounts/Payment";
        function Create(request: Serenity.SaveRequest<PaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PaymentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PaymentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Accounts/Payment/Create",
            Update = "Accounts/Payment/Update",
            Delete = "Accounts/Payment/Delete",
            Retrieve = "Accounts/Payment/Retrieve",
            List = "Accounts/Payment/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Accounts {
}
declare namespace BitPro.SchoolMate.Accounts {
    interface ReceiptForm {
        VNo: Serenity.IntegerEditor;
        TrxDate: Serenity.DateEditor;
        ContactId: Serenity.LookupEditor;
        CreditAccountHeadId: Serenity.LookupEditor;
        Amount: Serenity.DecimalEditor;
        PaymentMethod: Serenity.EnumEditor;
        DebitAccountId: Serenity.LookupEditor;
        Remarks: Serenity.TextAreaEditor;
        Attachments: Serenity.MultipleImageUploadEditor;
    }
    class ReceiptForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Accounts {
    interface ReceiptRow {
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
    namespace ReceiptRow {
        const idProperty = "Id";
        const localTextPrefix = "Accounts.Receipt";
        const deletePermission = "Accounts:ReceiptDelete";
        const insertPermission = "Accounts:ReceiptCreate";
        const readPermission = "Accounts:Receipt";
        const updatePermission = "Accounts:ReceiptUpdate";
        const enum Fields {
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
declare namespace BitPro.SchoolMate.Accounts {
    namespace ReceiptService {
        const baseUrl = "Accounts/Receipt";
        function Create(request: Serenity.SaveRequest<ReceiptRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ReceiptRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReceiptRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReceiptRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetTrxNo(request: VoucherNoRequest, onSuccess?: (response: VoucherNoResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Accounts/Receipt/Create",
            Update = "Accounts/Receipt/Update",
            Delete = "Accounts/Receipt/Delete",
            Retrieve = "Accounts/Receipt/Retrieve",
            List = "Accounts/Receipt/List",
            GetTrxNo = "Accounts/Receipt/GetTrxNo"
        }
    }
}
declare namespace BitPro.SchoolMate {
    enum AccountTypes {
        Value1 = 1,
        Value2 = 2
    }
}
declare namespace BitPro.SchoolMate.Administration {
}
declare namespace BitPro.SchoolMate.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace BitPro.SchoolMate.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Administration {
}
declare namespace BitPro.SchoolMate.Administration {
}
declare namespace BitPro.SchoolMate.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace BitPro.SchoolMate.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace BitPro.SchoolMate.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace BitPro.SchoolMate.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace BitPro.SchoolMate.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
        TenantId?: number;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName",
            TenantId = "TenantId"
        }
    }
}
declare namespace BitPro.SchoolMate.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Administration {
    interface SergenConnection {
        Key?: string;
    }
}
declare namespace BitPro.SchoolMate.Administration {
    interface SergenGenerateOptions {
        Row?: boolean;
        Service?: boolean;
        UI?: boolean;
    }
}
declare namespace BitPro.SchoolMate.Administration {
    interface SergenGenerateRequest extends Serenity.ServiceRequest {
        ConnectionKey?: string;
        Table?: SergenTable;
        GenerateOptions?: SergenGenerateOptions;
    }
}
declare namespace BitPro.SchoolMate.Administration {
    interface SergenListTablesRequest extends Serenity.ServiceRequest {
        ConnectionKey?: string;
    }
}
declare namespace BitPro.SchoolMate.Administration {
    namespace SergenService {
        const baseUrl = "Administration/Sergen";
        function ListConnections(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<SergenConnection>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListTables(request: SergenListTablesRequest, onSuccess?: (response: Serenity.ListResponse<SergenTable>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Generate(request: SergenGenerateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            ListConnections = "Administration/Sergen/ListConnections",
            ListTables = "Administration/Sergen/ListTables",
            Generate = "Administration/Sergen/Generate"
        }
    }
}
declare namespace BitPro.SchoolMate.Administration {
    interface SergenTable {
        Tablename?: string;
        Identifier?: string;
        Module?: string;
        PermissionKey?: string;
    }
}
declare namespace BitPro.SchoolMate.Administration {
}
declare namespace BitPro.SchoolMate.Administration {
    interface SettingsForm {
        Name: Serenity.StringEditor;
        Type: Serenity.StringEditor;
        ValueString: Serenity.StringEditor;
        ValueDate: Serenity.DateEditor;
        ValueNumber: Serenity.DecimalEditor;
        ValueBool: Serenity.BooleanEditor;
    }
    class SettingsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Administration {
    interface SettingsRow {
        Id?: number;
        Name?: string;
        Type?: string;
        ValueString?: string;
        ValueDate?: string;
        ValueNumber?: number;
        ValueBool?: boolean;
        TenantId?: number;
    }
    namespace SettingsRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Administration.Settings";
        const deletePermission = "Administration:Settings";
        const insertPermission = "Administration:Settings";
        const readPermission = "Administration:Settings";
        const updatePermission = "Administration:Settings";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Type = "Type",
            ValueString = "ValueString",
            ValueDate = "ValueDate",
            ValueNumber = "ValueNumber",
            ValueBool = "ValueBool",
            TenantId = "TenantId"
        }
    }
}
declare namespace BitPro.SchoolMate.Administration {
    namespace SettingsService {
        const baseUrl = "Administration/Settings";
        function Create(request: Serenity.SaveRequest<SettingsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SettingsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SettingsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SettingsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Settings/Create",
            Update = "Administration/Settings/Update",
            Delete = "Administration/Settings/Delete",
            Retrieve = "Administration/Settings/Retrieve",
            List = "Administration/Settings/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Administration {
}
declare namespace BitPro.SchoolMate.Administration {
    interface SystemSettingsForm {
        SalaryAccount: Serenity.LookupEditor;
        StudentCodeLength: Serenity.IntegerEditor;
        StudentCodePrefix: Serenity.StringEditor;
        SatffCodeLength: Serenity.IntegerEditor;
        SatffCodePrefix: Serenity.StringEditor;
    }
    class SystemSettingsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Administration {
    interface SystemSettingsRow {
        Id?: number;
        SalaryAccount?: number;
        StudentCodeLength?: number;
        SatffCodeLength?: number;
        SatffCodePrefix?: string;
        StudentCodePrefix?: string;
        TenantId?: number;
        SalaryAccountDescription?: string;
        SalaryAccountParentHeadId?: number;
        SalaryAccountCode?: string;
        SalaryAccountTenantId?: number;
        SalaryAccountLedgerType?: number;
    }
    namespace SystemSettingsRow {
        const idProperty = "Id";
        const localTextPrefix = "Administration.SystemSettings";
        const deletePermission = "Administration:Settings";
        const insertPermission = "Administration:Settings";
        const readPermission = "*";
        const updatePermission = "Administration:Settings";
        const enum Fields {
            Id = "Id",
            SalaryAccount = "SalaryAccount",
            StudentCodeLength = "StudentCodeLength",
            SatffCodeLength = "SatffCodeLength",
            SatffCodePrefix = "SatffCodePrefix",
            StudentCodePrefix = "StudentCodePrefix",
            TenantId = "TenantId",
            SalaryAccountDescription = "SalaryAccountDescription",
            SalaryAccountParentHeadId = "SalaryAccountParentHeadId",
            SalaryAccountCode = "SalaryAccountCode",
            SalaryAccountTenantId = "SalaryAccountTenantId",
            SalaryAccountLedgerType = "SalaryAccountLedgerType"
        }
    }
}
declare namespace BitPro.SchoolMate.Administration {
    namespace SystemSettingsService {
        const baseUrl = "Administration/SystemSettings";
        function Create(request: Serenity.SaveRequest<SystemSettingsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SystemSettingsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SystemSettingsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SystemSettingsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/SystemSettings/Create",
            Update = "Administration/SystemSettings/Update",
            Delete = "Administration/SystemSettings/Delete",
            Retrieve = "Administration/SystemSettings/Retrieve",
            List = "Administration/SystemSettings/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Administration {
}
declare namespace BitPro.SchoolMate.Administration {
    interface TenantForm {
        TenantName: Serenity.StringEditor;
    }
    class TenantForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Administration {
    interface TenantRow {
        TenantId?: number;
        TenantName?: string;
    }
    namespace TenantRow {
        const idProperty = "TenantId";
        const nameProperty = "TenantName";
        const localTextPrefix = "Administration.Tenant";
        const lookupKey = "Administration.Tenants";
        function getLookup(): Q.Lookup<TenantRow>;
        const deletePermission = "Administration:Tenants";
        const insertPermission = "Administration:Tenants";
        const readPermission = "Administration:Tenants";
        const updatePermission = "Administration:Tenants";
        const enum Fields {
            TenantId = "TenantId",
            TenantName = "TenantName"
        }
    }
}
declare namespace BitPro.SchoolMate.Administration {
    namespace TenantService {
        const baseUrl = "Administration/Tenant";
        function Create(request: Serenity.SaveRequest<TenantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TenantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TenantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TenantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Tenant/Create",
            Update = "Administration/Tenant/Update",
            Delete = "Administration/Tenant/Delete",
            Retrieve = "Administration/Tenant/Retrieve",
            List = "Administration/Tenant/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace BitPro.SchoolMate.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace BitPro.SchoolMate.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace BitPro.SchoolMate.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace BitPro.SchoolMate.Administration {
}
declare namespace BitPro.SchoolMate.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        DefaultCampusId: Serenity.LookupEditor;
        Source: Serenity.StringEditor;
        TenantId: Serenity.LookupEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace BitPro.SchoolMate.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace BitPro.SchoolMate.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace BitPro.SchoolMate.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace BitPro.SchoolMate.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace BitPro.SchoolMate.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace BitPro.SchoolMate.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace BitPro.SchoolMate.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace BitPro.SchoolMate.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        TenantId?: number;
        DefaultCampusId?: number;
        TenantName?: string;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            TenantId = "TenantId",
            DefaultCampusId = "DefaultCampusId",
            TenantName = "TenantName",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace BitPro.SchoolMate.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace BitPro.SchoolMate {
    interface AttendanceRequest extends Serenity.ServiceRequest {
        date?: string;
        type?: number;
        courseid?: number;
        divid?: number;
    }
}
declare namespace BitPro.SchoolMate {
    enum AttendanceStatus {
        Value1 = 1,
        Value2 = 2,
        Value3 = 3
    }
}
declare namespace BitPro.SchoolMate {
    interface AttendanceUpdateRequest extends Serenity.ServiceRequest {
        attendanceid?: number;
        status?: number;
    }
}
declare namespace BitPro.SchoolMate.Common {
    namespace CommonService {
        const baseUrl = "Common/Common";
        function DivisionsList(request: SchoolMate.Web.Modules.Common.DivisionsByPromotionRequest, onSuccess?: (response: Serenity.ListResponse<SchoolMate.Master.DivisionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function SendWhatsappMessage(request: SchoolMate.Web.Modules.Common.SendWhatsappMessageRequest, onSuccess?: (response: System.Boolean) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            DivisionsList = "Common/Common/DivisionsList",
            SendWhatsappMessage = "Common/Common/SendWhatsappMessage"
        }
    }
}
declare namespace BitPro.SchoolMate.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace BitPro.SchoolMate.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace BitPro.SchoolMate.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const deletePermission = "";
        const insertPermission = "";
        const readPermission = "";
        const updatePermission = "";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace BitPro.SchoolMate.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace BitPro.SchoolMate.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace BitPro.SchoolMate {
    interface ConfigRequest extends Serenity.ServiceRequest {
        ConfigName?: string;
    }
}
declare namespace BitPro.SchoolMate {
    enum CourseExitTypes {
        Value1 = 1,
        Value2 = 2,
        Value3 = 3
    }
}
declare namespace BitPro.SchoolMate {
    interface CourseFeeAmountRequest extends Serenity.ServiceRequest {
        CourseFeeId?: number;
        FeeSturctureId?: number;
        StudentId?: number;
    }
}
declare namespace BitPro.SchoolMate {
    interface CourseFeeAmountResponse extends Serenity.ServiceResponse {
        FeeAmount?: number;
        FeeExcemptionsPer?: number;
        Amount?: number;
    }
}
declare namespace BitPro.SchoolMate {
    interface CourseFeeRequest extends Serenity.ServiceRequest {
        courseid?: number;
        termid?: number;
        all?: boolean;
    }
}
declare namespace BitPro.SchoolMate {
    interface CourseFeeResponce extends Serenity.ServiceResponse {
        CourseFeeId?: number;
        FeeStructureId?: number;
        FeeAmount?: number;
        FeeCode?: string;
        TermName?: string;
        TermId?: number;
        AcadamicYearId?: number;
        CourseId?: number;
    }
}
declare namespace BitPro.SchoolMate {
    interface CourseFeeResponse extends Serenity.ServiceResponse {
        student?: SchoolMate.Master.StudentsRow;
        pendingfees?: CourseFeeResponce[];
    }
}
declare namespace BitPro.SchoolMate {
    interface CourseFeeStructure extends Serenity.ServiceRequest {
        CourseFeeId?: number;
        StudentId?: number;
        PromotionDetailIdId?: number;
        acadamicyearid?: number;
        all?: boolean;
    }
}
declare namespace BitPro.SchoolMate {
    interface CourseFeeStructureResponce extends Serenity.ServiceResponse {
        FeeStructureId?: number;
        TermName?: string;
    }
}
declare namespace BitPro.SchoolMate {
    interface CourseStudentResponse extends Serenity.ServiceResponse {
        StudentId?: number;
        type?: string;
        StudentName?: string;
        promotiondetailid?: number;
    }
}
declare namespace BitPro.SchoolMate {
    interface CourseStudentsMarkRequest extends Serenity.ServiceRequest {
        courseid?: number;
        studentid?: number;
    }
}
declare namespace BitPro.SchoolMate {
    interface CourseStudentsMarkResponse extends Serenity.ServiceResponse {
        StudentId?: number;
        ExamId?: number;
        SubjectId?: number;
        StudentName?: string;
        ExamName?: string;
        ExamDate?: string;
        SubjectName?: string;
        Mark?: number;
        MaxMarks?: number;
    }
}
declare namespace BitPro.SchoolMate {
    interface CourseSubjectResponse extends Serenity.ServiceResponse {
        SubjectId?: number;
        SubjectName?: string;
        MaxMark?: number;
    }
}
declare namespace BitPro.SchoolMate {
    interface CouseDivisionRequest extends Serenity.ServiceRequest {
        courseid?: number;
    }
}
declare namespace BitPro.SchoolMate {
    interface CouseDivisionResponse extends Serenity.ServiceResponse {
        DivisionCode?: string;
    }
}
declare namespace BitPro.SchoolMate {
    interface CurrentCourseRequest extends Serenity.ServiceRequest {
        promotionid?: number[];
    }
}
declare namespace BitPro.SchoolMate {
    interface DivisonRequest extends Serenity.ServiceRequest {
        AcadamicYearId?: number;
        DivisionIds?: number;
        courseid?: number;
    }
}
declare namespace BitPro.SchoolMate {
    interface DivisonResponse extends Serenity.ServiceResponse {
        StudentId?: number;
        StudentName?: string;
        Status?: boolean;
    }
}
declare namespace BitPro.SchoolMate {
    interface DivisonUpdateRequest extends Serenity.ServiceRequest {
        StudentId?: number;
        AcadamicYearId?: number;
        DivisionIds?: number;
    }
}
declare namespace BitPro.SchoolMate {
    interface ExamMarkRequest extends Serenity.ServiceRequest {
        promotionid?: number;
    }
}
declare namespace BitPro.SchoolMate {
    interface ExamMarkResponse extends Serenity.ServiceRequest {
        StudentID?: number;
        ExamId?: number;
        SubjectId?: number;
        Campus?: string;
        Address?: string;
        Phone?: string;
        FatherName?: string;
        StudentName?: string;
        CourseName?: string;
        ExamName?: string;
        SubjectName?: string;
        Mark?: number;
        MaxMark?: number;
    }
}
declare namespace BitPro.SchoolMate {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace BitPro.SchoolMate {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace BitPro.SchoolMate {
    interface FeeDueRequest extends Serenity.ServiceRequest {
        acadamicYearRows?: SchoolMate.Master.AcadamicYearRow[];
        terms?: SchoolMate.Master.FeeTermsRow[];
    }
}
declare namespace BitPro.SchoolMate {
    enum Gender {
        Value1 = 1,
        Value2 = 2
    }
}
declare namespace BitPro.SchoolMate {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace BitPro.SchoolMate {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace BitPro.SchoolMate {
    interface LastAcadamicTermsResponse extends Serenity.ServiceResponse {
        TermName?: string;
    }
}
declare namespace BitPro.SchoolMate {
    enum LedgerTypes {
        Value1 = 1,
        Value2 = 2,
        Value3 = 3,
        Value4 = 4,
        Value5 = 5,
        Value6 = 6
    }
}
declare namespace BitPro.SchoolMate.Master {
}
declare namespace BitPro.SchoolMate.Master {
    interface AcadamicYearForm {
        Code: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        PeriodFrom: Serenity.DateEditor;
        PeriodTo: Serenity.DateEditor;
        FeeTerms: FeeTermsEditor;
    }
    class AcadamicYearForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Master {
    interface AcadamicYearRow {
        Id?: number;
        Code?: string;
        PeriodFrom?: string;
        PeriodTo?: string;
        Description?: string;
        FeeTerms?: FeeTermsRow[];
        TenantId?: number;
    }
    namespace AcadamicYearRow {
        const idProperty = "Id";
        const nameProperty = "Code";
        const localTextPrefix = "Master.AcadamicYear";
        const lookupKey = "Master.AcademicYear";
        function getLookup(): Q.Lookup<AcadamicYearRow>;
        const deletePermission = "Master:AcademicYear";
        const insertPermission = "Master:AcademicYear";
        const readPermission = "Master:AcademicYear";
        const updatePermission = "Master:AcademicYear";
        const enum Fields {
            Id = "Id",
            Code = "Code",
            PeriodFrom = "PeriodFrom",
            PeriodTo = "PeriodTo",
            Description = "Description",
            FeeTerms = "FeeTerms",
            TenantId = "TenantId"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
    namespace AcadamicYearService {
        const baseUrl = "Master/AcadamicYear";
        function Create(request: Serenity.SaveRequest<AcadamicYearRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AcadamicYearRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AcadamicYearRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AcadamicYearRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetLastAcadamicTerms(request: Serenity.ServiceRequest, onSuccess?: (response: System.Collections.Generic.List<LastAcadamicTermsResponse>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/AcadamicYear/Create",
            Update = "Master/AcadamicYear/Update",
            Delete = "Master/AcadamicYear/Delete",
            Retrieve = "Master/AcadamicYear/Retrieve",
            List = "Master/AcadamicYear/List",
            GetLastAcadamicTerms = "Master/AcadamicYear/GetLastAcadamicTerms"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
}
declare namespace BitPro.SchoolMate.Master {
    interface AccountHeadsForm {
        Description: Serenity.StringEditor;
        ParentHeadId: Serenity.LookupEditor;
        Code: Serenity.StringEditor;
        LedgerType: Serenity.EnumEditor;
    }
    class AccountHeadsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Master {
    interface AccountHeadsRow {
        Id?: number;
        Description?: string;
        ParentHeadId?: number;
        Code?: string;
        TenantId?: number;
        LedgerType?: LedgerTypes;
        ParentHeadDescription?: string;
        ParentHeadParentHeadId?: number;
        ParentHeadCode?: string;
        ParentHeadTenantId?: number;
    }
    namespace AccountHeadsRow {
        const idProperty = "Id";
        const nameProperty = "Description";
        const localTextPrefix = "Master.AccountHeads";
        const lookupKey = "Master.AccountHeads";
        function getLookup(): Q.Lookup<AccountHeadsRow>;
        const deletePermission = "Master:AccountHeads";
        const insertPermission = "Master:AccountHeads";
        const readPermission = "Master:AccountHeads";
        const updatePermission = "Master:AccountHeads";
        const enum Fields {
            Id = "Id",
            Description = "Description",
            ParentHeadId = "ParentHeadId",
            Code = "Code",
            TenantId = "TenantId",
            LedgerType = "LedgerType",
            ParentHeadDescription = "ParentHeadDescription",
            ParentHeadParentHeadId = "ParentHeadParentHeadId",
            ParentHeadCode = "ParentHeadCode",
            ParentHeadTenantId = "ParentHeadTenantId"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
    namespace AccountHeadsService {
        const baseUrl = "Master/AccountHeads";
        function Create(request: Serenity.SaveRequest<AccountHeadsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AccountHeadsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AccountHeadsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AccountHeadsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/AccountHeads/Create",
            Update = "Master/AccountHeads/Update",
            Delete = "Master/AccountHeads/Delete",
            Retrieve = "Master/AccountHeads/Retrieve",
            List = "Master/AccountHeads/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
}
declare namespace BitPro.SchoolMate.Master {
    interface AreasForm {
        Code: Serenity.StringEditor;
        AreaName: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
    }
    class AreasForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Master {
    interface AreasRow {
        Id?: number;
        Code?: string;
        AreaName?: string;
        CountryId?: number;
        TenantId?: number;
        CountryCode?: string;
        CountryCurrencyName?: string;
        CountryPrecision?: number;
        CountryTenantId?: number;
    }
    namespace AreasRow {
        const idProperty = "Id";
        const nameProperty = "Code";
        const localTextPrefix = "Master.Areas";
        const lookupKey = "Master.Areas";
        function getLookup(): Q.Lookup<AreasRow>;
        const deletePermission = "Master:Areas";
        const insertPermission = "Master:Areas";
        const readPermission = "Master:Areas";
        const updatePermission = "Master:Areas";
        const enum Fields {
            Id = "Id",
            Code = "Code",
            AreaName = "AreaName",
            CountryId = "CountryId",
            TenantId = "TenantId",
            CountryCode = "CountryCode",
            CountryCurrencyName = "CountryCurrencyName",
            CountryPrecision = "CountryPrecision",
            CountryTenantId = "CountryTenantId"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
    namespace AreasService {
        const baseUrl = "Master/Areas";
        function Create(request: Serenity.SaveRequest<AreasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AreasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AreasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AreasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/Areas/Create",
            Update = "Master/Areas/Update",
            Delete = "Master/Areas/Delete",
            Retrieve = "Master/Areas/Retrieve",
            List = "Master/Areas/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
}
declare namespace BitPro.SchoolMate.Master {
    interface CampusesForm {
        Code: Serenity.StringEditor;
        Campus: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
        Phone: Serenity.StringEditor;
        ContactPerson: Serenity.StringEditor;
        Mobile: Serenity.StringEditor;
        Email: Serenity.EmailAddressEditor;
        Website: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
        AreaId: Serenity.LookupEditor;
        CodeLength: Serenity.IntegerEditor;
        Student_Prefix: Serenity.StringEditor;
    }
    class CampusesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Master {
    interface CampusesRow {
        Id?: number;
        Code?: string;
        Campus?: string;
        Address?: string;
        Phone?: string;
        ContactPerson?: string;
        Mobile?: string;
        Email?: string;
        Website?: string;
        CountryId?: number;
        AreaId?: number;
        Student_Prefix?: string;
        CodeLength?: number;
        TenantId?: number;
        IsDefault?: boolean;
        FullName?: string;
        CountryCode?: string;
        CountryCountryName?: string;
        CountryCurrencyId?: number;
        CountryTenantId?: number;
        AreaCode?: string;
        AreaAreaName?: string;
        AreaCountryId?: number;
        AreaTenantId?: number;
    }
    namespace CampusesRow {
        const idProperty = "Id";
        const nameProperty = "FullName";
        const localTextPrefix = "Master.Campuses";
        const lookupKey = "Master.Campuses";
        function getLookup(): Q.Lookup<CampusesRow>;
        const deletePermission = "Master:Campuses";
        const insertPermission = "Master:Campuses";
        const readPermission = "Master:Campuses";
        const updatePermission = "Master:Campuses";
        const enum Fields {
            Id = "Id",
            Code = "Code",
            Campus = "Campus",
            Address = "Address",
            Phone = "Phone",
            ContactPerson = "ContactPerson",
            Mobile = "Mobile",
            Email = "Email",
            Website = "Website",
            CountryId = "CountryId",
            AreaId = "AreaId",
            Student_Prefix = "Student_Prefix",
            CodeLength = "CodeLength",
            TenantId = "TenantId",
            IsDefault = "IsDefault",
            FullName = "FullName",
            CountryCode = "CountryCode",
            CountryCountryName = "CountryCountryName",
            CountryCurrencyId = "CountryCurrencyId",
            CountryTenantId = "CountryTenantId",
            AreaCode = "AreaCode",
            AreaAreaName = "AreaAreaName",
            AreaCountryId = "AreaCountryId",
            AreaTenantId = "AreaTenantId"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
    namespace CampusesService {
        const baseUrl = "Master/Campuses";
        function Create(request: Serenity.SaveRequest<CampusesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CampusesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CampusesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CampusesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/Campuses/Create",
            Update = "Master/Campuses/Update",
            Delete = "Master/Campuses/Delete",
            Retrieve = "Master/Campuses/Retrieve",
            List = "Master/Campuses/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
}
declare namespace BitPro.SchoolMate.Master {
    interface ContactsForm {
        Name: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.EmailAddressEditor;
        Whatsapp: Serenity.StringEditor;
        Address1: Serenity.TextAreaEditor;
        Address2: Serenity.TextAreaEditor;
        Nationality: Serenity.LookupEditor;
    }
    class ContactsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Master {
    interface ContactsRow {
        Id?: number;
        Name?: string;
        Phone?: string;
        Email?: string;
        Whatsapp?: string;
        Address1?: string;
        Address2?: string;
        Nationality?: number;
        TenantId?: number;
        NationalityCode?: string;
        NationalityCountryName?: string;
        NationalityCurrencyId?: number;
        NationalityTenantId?: number;
    }
    namespace ContactsRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Master.Contacts";
        const lookupKey = "Master.Contacts";
        function getLookup(): Q.Lookup<ContactsRow>;
        const deletePermission = "Master:ContactsDelete";
        const insertPermission = "Master:ContactsCreate";
        const readPermission = "Master:Contacts";
        const updatePermission = "Master:ContactsUpdate";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Phone = "Phone",
            Email = "Email",
            Whatsapp = "Whatsapp",
            Address1 = "Address1",
            Address2 = "Address2",
            Nationality = "Nationality",
            TenantId = "TenantId",
            NationalityCode = "NationalityCode",
            NationalityCountryName = "NationalityCountryName",
            NationalityCurrencyId = "NationalityCurrencyId",
            NationalityTenantId = "NationalityTenantId"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
    namespace ContactsService {
        const baseUrl = "Master/Contacts";
        function Create(request: Serenity.SaveRequest<ContactsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ContactsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ContactsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ContactsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/Contacts/Create",
            Update = "Master/Contacts/Update",
            Delete = "Master/Contacts/Delete",
            Retrieve = "Master/Contacts/Retrieve",
            List = "Master/Contacts/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
}
declare namespace BitPro.SchoolMate.Master {
    interface CountriesForm {
        Code: Serenity.StringEditor;
        CountryName: Serenity.StringEditor;
        CurrencyId: Serenity.LookupEditor;
    }
    class CountriesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Master {
    interface CountriesRow {
        Id?: number;
        Code?: string;
        CountryName?: string;
        CurrencyId?: number;
        TenantId?: number;
        FullName?: string;
        CurrencyCode?: string;
        CurrencyCurrencyName?: string;
        CurrencyPrecision?: number;
        CurrencyTenantId?: number;
    }
    namespace CountriesRow {
        const idProperty = "Id";
        const nameProperty = "FullName";
        const localTextPrefix = "Master.Countries";
        const lookupKey = "Master.Countries";
        function getLookup(): Q.Lookup<CountriesRow>;
        const deletePermission = "Master:Countries";
        const insertPermission = "Master:Countries";
        const readPermission = "Master:Countries";
        const updatePermission = "Master:Countries";
        const enum Fields {
            Id = "Id",
            Code = "Code",
            CountryName = "CountryName",
            CurrencyId = "CurrencyId",
            TenantId = "TenantId",
            FullName = "FullName",
            CurrencyCode = "CurrencyCode",
            CurrencyCurrencyName = "CurrencyCurrencyName",
            CurrencyPrecision = "CurrencyPrecision",
            CurrencyTenantId = "CurrencyTenantId"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
    namespace CountriesService {
        const baseUrl = "Master/Countries";
        function Create(request: Serenity.SaveRequest<CountriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CountriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CountriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CountriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/Countries/Create",
            Update = "Master/Countries/Update",
            Delete = "Master/Countries/Delete",
            Retrieve = "Master/Countries/Retrieve",
            List = "Master/Countries/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
}
declare namespace BitPro.SchoolMate.Master {
    interface CourseDivisionsForm {
        DivisionCode: Serenity.StringEditor;
    }
    class CourseDivisionsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Master {
    interface CourseDivisionsRow {
        Id?: number;
        CourseId?: number;
        DivisionCode?: string;
        CourseCode?: string;
        CourseCourseName?: string;
        CourseActive?: boolean;
        CourseNonAcadamic?: boolean;
        CourseTenantId?: number;
    }
    namespace CourseDivisionsRow {
        const idProperty = "Id";
        const nameProperty = "DivisionCode";
        const localTextPrefix = "Master.CourseDivisions";
        const lookupKey = "Master.CourseDivisions";
        function getLookup(): Q.Lookup<CourseDivisionsRow>;
        const deletePermission = "Master:Courses";
        const insertPermission = "Master:Courses";
        const readPermission = "Master:Courses";
        const updatePermission = "Master:Courses";
        const enum Fields {
            Id = "Id",
            CourseId = "CourseId",
            DivisionCode = "DivisionCode",
            CourseCode = "CourseCode",
            CourseCourseName = "CourseCourseName",
            CourseActive = "CourseActive",
            CourseNonAcadamic = "CourseNonAcadamic",
            CourseTenantId = "CourseTenantId"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
    namespace CourseDivisionsService {
        const baseUrl = "Master/CourseDivisions";
        function Create(request: Serenity.SaveRequest<CourseDivisionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CourseDivisionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CourseDivisionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CourseDivisionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/CourseDivisions/Create",
            Update = "Master/CourseDivisions/Update",
            Delete = "Master/CourseDivisions/Delete",
            Retrieve = "Master/CourseDivisions/Retrieve",
            List = "Master/CourseDivisions/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
}
declare namespace BitPro.SchoolMate.Master {
    interface CourseFeeForm {
        CourseId: Serenity.IntegerEditor;
        FeeId: Serenity.IntegerEditor;
    }
    class CourseFeeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Master {
    interface CourseFeeRow {
        Id?: number;
        CourseId?: number;
        FeeId?: number;
        CourseCode?: string;
        CourseCourseName?: string;
        CourseActive?: boolean;
        CourseNonAcadamic?: boolean;
        CourseTenantId?: number;
        FeeCode?: string;
        FeeFeeName?: string;
        FeeAnnualFee?: number;
        FeeTenantId?: number;
    }
    namespace CourseFeeRow {
        const idProperty = "Id";
        const nameProperty = "FeeCode";
        const localTextPrefix = "Master.CourseFee";
        const lookupKey = "Master.CourseFee";
        function getLookup(): Q.Lookup<CourseFeeRow>;
        const deletePermission = "Master:Fees";
        const insertPermission = "Master:Fees";
        const readPermission = "Master:Fees";
        const updatePermission = "Master:Fees";
        const enum Fields {
            Id = "Id",
            CourseId = "CourseId",
            FeeId = "FeeId",
            CourseCode = "CourseCode",
            CourseCourseName = "CourseCourseName",
            CourseActive = "CourseActive",
            CourseNonAcadamic = "CourseNonAcadamic",
            CourseTenantId = "CourseTenantId",
            FeeCode = "FeeCode",
            FeeFeeName = "FeeFeeName",
            FeeAnnualFee = "FeeAnnualFee",
            FeeTenantId = "FeeTenantId"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
    namespace CourseFeeService {
        const baseUrl = "Master/CourseFee";
        function Create(request: Serenity.SaveRequest<CourseFeeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CourseFeeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CourseFeeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CourseFeeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/CourseFee/Create",
            Update = "Master/CourseFee/Update",
            Delete = "Master/CourseFee/Delete",
            Retrieve = "Master/CourseFee/Retrieve",
            List = "Master/CourseFee/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
}
declare namespace BitPro.SchoolMate.Master {
    interface CoursesForm {
        Code: Serenity.StringEditor;
        CourseName: Serenity.StringEditor;
        Active: Serenity.BooleanEditor;
        NonAcadamic: Serenity.BooleanEditor;
        CourseSubject: CourseSubjectEditor;
        CourseDivisions: CourseDivisionsEditor;
    }
    class CoursesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Master {
    interface CoursesRow {
        Id?: number;
        Code?: string;
        CourseName?: string;
        Active?: boolean;
        NonAcadamic?: boolean;
        TenantId?: number;
        CourseSubject?: CourseSubjectsRow[];
        CourseDivisions?: CourseDivisionsRow[];
        CourseFullName?: string;
    }
    namespace CoursesRow {
        const idProperty = "Id";
        const nameProperty = "CourseName";
        const localTextPrefix = "Master.Courses";
        const lookupKey = "Master.Courses";
        function getLookup(): Q.Lookup<CoursesRow>;
        const deletePermission = "Master:Courses";
        const insertPermission = "Master:Courses";
        const readPermission = "Master:Courses";
        const updatePermission = "Master:Courses";
        const enum Fields {
            Id = "Id",
            Code = "Code",
            CourseName = "CourseName",
            Active = "Active",
            NonAcadamic = "NonAcadamic",
            TenantId = "TenantId",
            CourseSubject = "CourseSubject",
            CourseDivisions = "CourseDivisions",
            CourseFullName = "CourseFullName"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
    namespace CoursesService {
        const baseUrl = "Master/Courses";
        function Create(request: Serenity.SaveRequest<CoursesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CoursesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CoursesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CoursesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/Courses/Create",
            Update = "Master/Courses/Update",
            Delete = "Master/Courses/Delete",
            Retrieve = "Master/Courses/Retrieve",
            List = "Master/Courses/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
}
declare namespace BitPro.SchoolMate.Master {
    interface CourseSubjectsForm {
        SubjectId: Serenity.LookupEditor;
        MaxMarks: Serenity.DecimalEditor;
    }
    class CourseSubjectsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Master {
    interface CourseSubjectsRow {
        Id?: number;
        CourseId?: number;
        SubjectId?: number;
        MaxMarks?: number;
        CourseCode?: string;
        CourseCourseName?: string;
        CourseActive?: boolean;
        CourseNonAcadamic?: boolean;
        CourseTenantId?: number;
        SubjectCode?: string;
        SubjectSubjectName?: string;
        SubjectTenantId?: number;
    }
    namespace CourseSubjectsRow {
        const idProperty = "Id";
        const nameProperty = "SubjectCode";
        const localTextPrefix = "Master.CourseSubjects";
        const lookupKey = "Master.CourseSubjects";
        function getLookup(): Q.Lookup<CourseSubjectsRow>;
        const deletePermission = "Master:CourseSubjects";
        const insertPermission = "Master:CourseSubjects";
        const readPermission = "Master:CourseSubjects";
        const updatePermission = "Master:CourseSubjects";
        const enum Fields {
            Id = "Id",
            CourseId = "CourseId",
            SubjectId = "SubjectId",
            MaxMarks = "MaxMarks",
            CourseCode = "CourseCode",
            CourseCourseName = "CourseCourseName",
            CourseActive = "CourseActive",
            CourseNonAcadamic = "CourseNonAcadamic",
            CourseTenantId = "CourseTenantId",
            SubjectCode = "SubjectCode",
            SubjectSubjectName = "SubjectSubjectName",
            SubjectTenantId = "SubjectTenantId"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
    namespace CourseSubjectsService {
        const baseUrl = "Master/CourseSubjects";
        function Create(request: Serenity.SaveRequest<CourseSubjectsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CourseSubjectsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CourseSubjectsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CourseSubjectsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/CourseSubjects/Create",
            Update = "Master/CourseSubjects/Update",
            Delete = "Master/CourseSubjects/Delete",
            Retrieve = "Master/CourseSubjects/Retrieve",
            List = "Master/CourseSubjects/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
}
declare namespace BitPro.SchoolMate.Master {
    interface CurrenciesForm {
        Code: Serenity.StringEditor;
        CurrencyName: Serenity.StringEditor;
        Precision: Serenity.IntegerEditor;
    }
    class CurrenciesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Master {
    interface CurrenciesRow {
        Id?: number;
        Code?: string;
        CurrencyName?: string;
        Precision?: number;
        TenantId?: number;
    }
    namespace CurrenciesRow {
        const idProperty = "Id";
        const nameProperty = "Code";
        const localTextPrefix = "Master.Currencies";
        const lookupKey = "Master.Currencies";
        function getLookup(): Q.Lookup<CurrenciesRow>;
        const deletePermission = "Master:Currencies";
        const insertPermission = "Master:Currencies";
        const readPermission = "Master:Currencies";
        const updatePermission = "Master:Currencies";
        const enum Fields {
            Id = "Id",
            Code = "Code",
            CurrencyName = "CurrencyName",
            Precision = "Precision",
            TenantId = "TenantId"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
    namespace CurrenciesService {
        const baseUrl = "Master/Currencies";
        function Create(request: Serenity.SaveRequest<CurrenciesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CurrenciesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CurrenciesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CurrenciesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/Currencies/Create",
            Update = "Master/Currencies/Update",
            Delete = "Master/Currencies/Delete",
            Retrieve = "Master/Currencies/Retrieve",
            List = "Master/Currencies/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
    namespace CurrentAcadamicYearService {
        const baseUrl = "Master/CurrentAcadamicYear";
        function GetCurrentAcadamicYear(request: Serenity.ServiceRequest, onSuccess?: (response: AcadamicYearRow) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            GetCurrentAcadamicYear = "Master/CurrentAcadamicYear/GetCurrentAcadamicYear"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
}
declare namespace BitPro.SchoolMate.Master {
    interface DivisionsForm {
        DivisionCode: Serenity.StringEditor;
        TeacherId: Serenity.LookupEditor;
    }
    class DivisionsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Master {
    interface DivisionsRow {
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
    namespace DivisionsRow {
        const idProperty = "Id";
        const nameProperty = "DivisionCode";
        const localTextPrefix = "Master.Divisions";
        const lookupKey = "Master.Divisions";
        function getLookup(): Q.Lookup<DivisionsRow>;
        const deletePermission = "Transactions:Promotions";
        const insertPermission = "Transactions:Promotions";
        const readPermission = "Transactions:Promotions";
        const updatePermission = "Transactions:Promotions";
        const enum Fields {
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
declare namespace BitPro.SchoolMate.Master {
    namespace DivisionsService {
        const baseUrl = "Master/Divisions";
        function Create(request: Serenity.SaveRequest<DivisionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DivisionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DivisionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DivisionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetByPromotions(request: ExamMarkRequest, onSuccess?: (response: System.Collections.Generic.List<PromotionDivisionResponse>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function UpdateDivision(request: DivisonUpdateRequest, onSuccess?: (response: System.Boolean) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function DeleteStudentFromDivision(request: DivisonUpdateRequest, onSuccess?: (response: System.Boolean) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/Divisions/Create",
            Update = "Master/Divisions/Update",
            Delete = "Master/Divisions/Delete",
            Retrieve = "Master/Divisions/Retrieve",
            List = "Master/Divisions/List",
            GetByPromotions = "Master/Divisions/GetByPromotions",
            UpdateDivision = "Master/Divisions/UpdateDivision",
            DeleteStudentFromDivision = "Master/Divisions/DeleteStudentFromDivision"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
}
declare namespace BitPro.SchoolMate.Master {
    interface DivisionStudentsForm {
        DivisionId: Serenity.IntegerEditor;
        PromotionDetailId: SchoolMate.Transactions.DepartmentEditor;
    }
    class DivisionStudentsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Master {
    interface DivisionStudentsRow {
        Id?: number;
        DivisionId?: number;
        PromotionDetailId?: number;
        DivisionCourseId?: number;
        DivisionTeacherId?: number;
        DivisionDivisionCode?: string;
        DivisionAcadamicYearId?: number;
        DivisionTenantId?: number;
        Student?: string;
        PromotionDetailPromotionId?: number;
        PromotionDetailStudentId?: number;
        PromotionDetailIsCompleted?: boolean;
        PromotionDetailPromotionType?: number;
    }
    namespace DivisionStudentsRow {
        const idProperty = "Id";
        const localTextPrefix = "Master.DivisionStudents";
        const deletePermission = "Transactions:Promotions";
        const insertPermission = "Transactions:Promotions";
        const readPermission = "Transactions:Promotions";
        const updatePermission = "Transactions:Promotions";
        const enum Fields {
            Id = "Id",
            DivisionId = "DivisionId",
            PromotionDetailId = "PromotionDetailId",
            DivisionCourseId = "DivisionCourseId",
            DivisionTeacherId = "DivisionTeacherId",
            DivisionDivisionCode = "DivisionDivisionCode",
            DivisionAcadamicYearId = "DivisionAcadamicYearId",
            DivisionTenantId = "DivisionTenantId",
            Student = "Student",
            PromotionDetailPromotionId = "PromotionDetailPromotionId",
            PromotionDetailStudentId = "PromotionDetailStudentId",
            PromotionDetailIsCompleted = "PromotionDetailIsCompleted",
            PromotionDetailPromotionType = "PromotionDetailPromotionType"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
    namespace DivisionStudentsService {
        const baseUrl = "Master/DivisionStudents";
        function Create(request: Serenity.SaveRequest<DivisionStudentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DivisionStudentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DivisionStudentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DivisionStudentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/DivisionStudents/Create",
            Update = "Master/DivisionStudents/Update",
            Delete = "Master/DivisionStudents/Delete",
            Retrieve = "Master/DivisionStudents/Retrieve",
            List = "Master/DivisionStudents/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
}
declare namespace BitPro.SchoolMate.Master {
    interface ExamCoursesForm {
        PromotionId: Serenity.LookupEditor;
        Subjects: ExamMaxMarksEditor;
    }
    class ExamCoursesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Master {
    interface ExamCoursesRow {
        Id?: number;
        ExamId?: number;
        PromotionId?: number;
        Subjects?: ExamMaxMarksRow[];
        ExamCode?: string;
        ExamExamName?: string;
        ExamAcadamicYearId?: number;
        ExamTenantId?: number;
        PromotionFromCourse?: number;
        PromotionToCourse?: number;
        PromotionCreatedBy?: number;
        PromotionCreatedDate?: string;
        PromotionTenantId?: number;
        PromotionAcadamicYearId?: number;
        PromotionJoiningDivisionId?: number;
        Course?: string;
    }
    namespace ExamCoursesRow {
        const idProperty = "Id";
        const localTextPrefix = "Master.ExamCourses";
        const deletePermission = "Master:Exams";
        const insertPermission = "Master:Exams";
        const readPermission = "Master:Exams";
        const updatePermission = "Master:Exams";
        const enum Fields {
            Id = "Id",
            ExamId = "ExamId",
            PromotionId = "PromotionId",
            Subjects = "Subjects",
            ExamCode = "ExamCode",
            ExamExamName = "ExamExamName",
            ExamAcadamicYearId = "ExamAcadamicYearId",
            ExamTenantId = "ExamTenantId",
            PromotionFromCourse = "PromotionFromCourse",
            PromotionToCourse = "PromotionToCourse",
            PromotionCreatedBy = "PromotionCreatedBy",
            PromotionCreatedDate = "PromotionCreatedDate",
            PromotionTenantId = "PromotionTenantId",
            PromotionAcadamicYearId = "PromotionAcadamicYearId",
            PromotionJoiningDivisionId = "PromotionJoiningDivisionId",
            Course = "Course"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
    namespace ExamCoursesService {
        const baseUrl = "Master/ExamCourses";
        function Create(request: Serenity.SaveRequest<ExamCoursesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ExamCoursesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ExamCoursesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ExamCoursesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/ExamCourses/Create",
            Update = "Master/ExamCourses/Update",
            Delete = "Master/ExamCourses/Delete",
            Retrieve = "Master/ExamCourses/Retrieve",
            List = "Master/ExamCourses/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
}
declare namespace BitPro.SchoolMate.Master {
    interface ExamMaxMarksForm {
        CourseSubjectId: Serenity.LookupEditor;
        MaxMark: Serenity.DecimalEditor;
    }
    class ExamMaxMarksForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Master {
    interface ExamMaxMarksRow {
        Id?: number;
        ExamCoursesId?: number;
        CourseSubjectId?: number;
        MaxMark?: number;
        ExamCoursesExamId?: number;
        ExamCoursesPromotionId?: number;
        CourseSubjectCourseId?: number;
        CourseSubjectSubjectId?: number;
        CourseSubjectMaxMarks?: number;
        CourseSubject?: string;
    }
    namespace ExamMaxMarksRow {
        const idProperty = "Id";
        const localTextPrefix = "Master.ExamMaxMarks";
        const deletePermission = "Master:Exams";
        const insertPermission = "Master:Exams";
        const readPermission = "Master:Exams";
        const updatePermission = "Master:Exams";
        const enum Fields {
            Id = "Id",
            ExamCoursesId = "ExamCoursesId",
            CourseSubjectId = "CourseSubjectId",
            MaxMark = "MaxMark",
            ExamCoursesExamId = "ExamCoursesExamId",
            ExamCoursesPromotionId = "ExamCoursesPromotionId",
            CourseSubjectCourseId = "CourseSubjectCourseId",
            CourseSubjectSubjectId = "CourseSubjectSubjectId",
            CourseSubjectMaxMarks = "CourseSubjectMaxMarks",
            CourseSubject = "CourseSubject"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
    namespace ExamMaxMarksService {
        const baseUrl = "Master/ExamMaxMarks";
        function Create(request: Serenity.SaveRequest<ExamMaxMarksRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ExamMaxMarksRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ExamMaxMarksRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ExamMaxMarksRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/ExamMaxMarks/Create",
            Update = "Master/ExamMaxMarks/Update",
            Delete = "Master/ExamMaxMarks/Delete",
            Retrieve = "Master/ExamMaxMarks/Retrieve",
            List = "Master/ExamMaxMarks/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
}
declare namespace BitPro.SchoolMate.Master {
    interface ExamsForm {
        Code: Serenity.StringEditor;
        ExamName: Serenity.StringEditor;
        AcadamicYearId: Serenity.LookupEditor;
        Courses: ExamCoursesEditor;
    }
    class ExamsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Master {
    interface ExamsRow {
        Id?: number;
        Code?: string;
        ExamName?: string;
        AcadamicYearId?: number;
        Courses?: ExamCoursesRow[];
        TenantId?: number;
        AcadamicYearCode?: string;
        AcadamicYearPeriodFrom?: string;
        AcadamicYearPeriodTo?: string;
        AcadamicYearDescription?: string;
        AcadamicYearTenantId?: number;
    }
    namespace ExamsRow {
        const idProperty = "Id";
        const nameProperty = "ExamName";
        const localTextPrefix = "Master.Exams";
        const lookupKey = "Master.Exams";
        function getLookup(): Q.Lookup<ExamsRow>;
        const deletePermission = "Master:Exams";
        const insertPermission = "Master:Exams";
        const readPermission = "Master:Exams";
        const updatePermission = "Master:Exams";
        const enum Fields {
            Id = "Id",
            Code = "Code",
            ExamName = "ExamName",
            AcadamicYearId = "AcadamicYearId",
            Courses = "Courses",
            TenantId = "TenantId",
            AcadamicYearCode = "AcadamicYearCode",
            AcadamicYearPeriodFrom = "AcadamicYearPeriodFrom",
            AcadamicYearPeriodTo = "AcadamicYearPeriodTo",
            AcadamicYearDescription = "AcadamicYearDescription",
            AcadamicYearTenantId = "AcadamicYearTenantId"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
    namespace ExamsService {
        const baseUrl = "Master/Exams";
        function Create(request: Serenity.SaveRequest<ExamsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ExamsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ExamsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ExamsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetAcadamicYearCourseSubjects(request: AcadamicYearCourseSubjectsRequest, onSuccess?: (response: System.Collections.Generic.List<AcadamicYearCourseSubjectResponse>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/Exams/Create",
            Update = "Master/Exams/Update",
            Delete = "Master/Exams/Delete",
            Retrieve = "Master/Exams/Retrieve",
            List = "Master/Exams/List",
            GetAcadamicYearCourseSubjects = "Master/Exams/GetAcadamicYearCourseSubjects"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
}
declare namespace BitPro.SchoolMate.Master {
    interface FeeExcemptionsForm {
        StudentId: Serenity.LookupEditor;
        CourseId: Serenity.LookupEditor;
        CourseFeeId: Serenity.LookupEditor;
        FeeExcempted: Serenity.DecimalEditor;
    }
    class FeeExcemptionsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Master {
    interface FeeExcemptionsRow {
        Id?: number;
        StudentId?: number;
        FeeExcempted?: number;
        CourseFeeId?: number;
        CourseId?: number;
        TenantId?: number;
        StudentCode?: string;
        StudentJoiningDate?: string;
        StudentJoiningCourse?: number;
        StudentFatherContactId?: number;
        StudentMotherContactId?: number;
        StudentStudentContactId?: number;
        StudentCampusId?: number;
        StudentOtherInstitute?: string;
        StudentDivision?: string;
        StudentTenantId?: number;
    }
    namespace FeeExcemptionsRow {
        const idProperty = "Id";
        const localTextPrefix = "Master.FeeExcemptions";
        const lookupKey = "Master.FeeExcemptions";
        function getLookup(): Q.Lookup<FeeExcemptionsRow>;
        const deletePermission = "Master:FeeExcemptions";
        const insertPermission = "Master:FeeExcemptions";
        const readPermission = "Master:FeeExcemptions";
        const updatePermission = "Master:FeeExcemptions";
        const enum Fields {
            Id = "Id",
            StudentId = "StudentId",
            FeeExcempted = "FeeExcempted",
            CourseFeeId = "CourseFeeId",
            CourseId = "CourseId",
            TenantId = "TenantId",
            StudentCode = "StudentCode",
            StudentJoiningDate = "StudentJoiningDate",
            StudentJoiningCourse = "StudentJoiningCourse",
            StudentFatherContactId = "StudentFatherContactId",
            StudentMotherContactId = "StudentMotherContactId",
            StudentStudentContactId = "StudentStudentContactId",
            StudentCampusId = "StudentCampusId",
            StudentOtherInstitute = "StudentOtherInstitute",
            StudentDivision = "StudentDivision",
            StudentTenantId = "StudentTenantId"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
    namespace FeeExcemptionsService {
        const baseUrl = "Master/FeeExcemptions";
        function Create(request: Serenity.SaveRequest<FeeExcemptionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FeeExcemptionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FeeExcemptionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FeeExcemptionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/FeeExcemptions/Create",
            Update = "Master/FeeExcemptions/Update",
            Delete = "Master/FeeExcemptions/Delete",
            Retrieve = "Master/FeeExcemptions/Retrieve",
            List = "Master/FeeExcemptions/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
}
declare namespace BitPro.SchoolMate.Master {
    interface FeesForm {
        Code: Serenity.StringEditor;
        FeeName: Serenity.StringEditor;
        AnnualFee: Serenity.DecimalEditor;
        DebitAccountHeadId: Serenity.LookupEditor;
        IsTranportation: Serenity.BooleanEditor;
        CourseFee: Serenity.LookupEditor;
        FeeStructures: FeeStructureEditor;
    }
    class FeesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Master {
    interface FeesRow {
        Id?: number;
        Code?: string;
        FeeName?: string;
        AnnualFee?: number;
        IsTranportation?: boolean;
        CourseFee?: number[];
        TenantId?: number;
        DebitAccountHeadId?: number;
        FullName?: string;
        DebitAccountHeadDescription?: string;
        DebitAccountHeadParentHeadId?: number;
        DebitAccountHeadCode?: string;
        DebitAccountHeadTenantId?: number;
        DebitAccountHeadLedgerType?: number;
        FeeStructures?: FeeStructureRow[];
    }
    namespace FeesRow {
        const idProperty = "Id";
        const nameProperty = "FullName";
        const localTextPrefix = "Master.Fees";
        const lookupKey = "Master.Fees";
        function getLookup(): Q.Lookup<FeesRow>;
        const deletePermission = "Master:Fees";
        const insertPermission = "Master:Fees";
        const readPermission = "Master:Fees";
        const updatePermission = "Master:Fees";
        const enum Fields {
            Id = "Id",
            Code = "Code",
            FeeName = "FeeName",
            AnnualFee = "AnnualFee",
            IsTranportation = "IsTranportation",
            CourseFee = "CourseFee",
            TenantId = "TenantId",
            DebitAccountHeadId = "DebitAccountHeadId",
            FullName = "FullName",
            DebitAccountHeadDescription = "DebitAccountHeadDescription",
            DebitAccountHeadParentHeadId = "DebitAccountHeadParentHeadId",
            DebitAccountHeadCode = "DebitAccountHeadCode",
            DebitAccountHeadTenantId = "DebitAccountHeadTenantId",
            DebitAccountHeadLedgerType = "DebitAccountHeadLedgerType",
            FeeStructures = "FeeStructures"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
    namespace FeesService {
        const baseUrl = "Master/Fees";
        function Create(request: Serenity.SaveRequest<FeesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FeesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FeesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FeesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetTermsOfCurrentAcadamicYear(request: Serenity.ServiceRequest, onSuccess?: (response: System.Collections.Generic.List<AcadamicYearTermsResponse>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/Fees/Create",
            Update = "Master/Fees/Update",
            Delete = "Master/Fees/Delete",
            Retrieve = "Master/Fees/Retrieve",
            List = "Master/Fees/List",
            GetTermsOfCurrentAcadamicYear = "Master/Fees/GetTermsOfCurrentAcadamicYear"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
}
declare namespace BitPro.SchoolMate.Master {
    interface FeeStructureForm {
        AcadamicYearId: Serenity.LookupEditor;
        FeeTermId: Serenity.LookupEditor;
        FeeAmount: Serenity.DecimalEditor;
    }
    class FeeStructureForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Master {
    interface FeeStructureRow {
        Id?: number;
        FeeTermId?: number;
        FeeAmount?: number;
        FeeId?: number;
        AcadamicYearId?: number;
        FeeTermTermName?: string;
        TenantId?: number;
        FeeCode?: string;
        FeeFeeName?: string;
        FeeAnnualFee?: number;
        FeeTenantId?: number;
        AcadamicYearCode?: string;
        AcadamicYearPeriodFrom?: string;
        AcadamicYearPeriodTo?: string;
        AcadamicYearDescription?: string;
    }
    namespace FeeStructureRow {
        const idProperty = "Id";
        const nameProperty = "FeeTermTermName";
        const localTextPrefix = "Master.FeeStructure";
        const lookupKey = "Master.FeeStructure";
        function getLookup(): Q.Lookup<FeeStructureRow>;
        const deletePermission = "Master:FeeStructure";
        const insertPermission = "Master:FeeStructure";
        const readPermission = "Master:FeeStructure";
        const updatePermission = "Master:FeeStructure";
        const enum Fields {
            Id = "Id",
            FeeTermId = "FeeTermId",
            FeeAmount = "FeeAmount",
            FeeId = "FeeId",
            AcadamicYearId = "AcadamicYearId",
            FeeTermTermName = "FeeTermTermName",
            TenantId = "TenantId",
            FeeCode = "FeeCode",
            FeeFeeName = "FeeFeeName",
            FeeAnnualFee = "FeeAnnualFee",
            FeeTenantId = "FeeTenantId",
            AcadamicYearCode = "AcadamicYearCode",
            AcadamicYearPeriodFrom = "AcadamicYearPeriodFrom",
            AcadamicYearPeriodTo = "AcadamicYearPeriodTo",
            AcadamicYearDescription = "AcadamicYearDescription"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
    namespace FeeStructureService {
        const baseUrl = "Master/FeeStructure";
        function Create(request: Serenity.SaveRequest<FeeStructureRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FeeStructureRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FeeStructureRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FeeStructureRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/FeeStructure/Create",
            Update = "Master/FeeStructure/Update",
            Delete = "Master/FeeStructure/Delete",
            Retrieve = "Master/FeeStructure/Retrieve",
            List = "Master/FeeStructure/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
}
declare namespace BitPro.SchoolMate.Master {
    interface FeeTermsForm {
        TermName: Serenity.StringEditor;
    }
    class FeeTermsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Master {
    interface FeeTermsRow {
        Id?: number;
        TermName?: string;
        TenantId?: number;
        AcadamicYearId?: number;
    }
    namespace FeeTermsRow {
        const idProperty = "Id";
        const nameProperty = "TermName";
        const localTextPrefix = "Master.FeeTerms";
        const lookupKey = "Master.FeeTerms";
        function getLookup(): Q.Lookup<FeeTermsRow>;
        const deletePermission = "Master:FeeTerms";
        const insertPermission = "Master:FeeTerms";
        const readPermission = "Master:FeeTerms";
        const updatePermission = "Master:FeeTerms";
        const enum Fields {
            Id = "Id",
            TermName = "TermName",
            TenantId = "TenantId",
            AcadamicYearId = "AcadamicYearId"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
    namespace FeeTermsService {
        const baseUrl = "Master/FeeTerms";
        function Create(request: Serenity.SaveRequest<FeeTermsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FeeTermsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FeeTermsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FeeTermsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/FeeTerms/Create",
            Update = "Master/FeeTerms/Update",
            Delete = "Master/FeeTerms/Delete",
            Retrieve = "Master/FeeTerms/Retrieve",
            List = "Master/FeeTerms/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
}
declare namespace BitPro.SchoolMate.Master {
    interface StaffsForm {
        Code: Serenity.StringEditor;
        StaffName: Serenity.StringEditor;
        ContactId: Serenity.LookupEditor;
        IsTeacher: Serenity.BooleanEditor;
        JoiningDate: Serenity.DateEditor;
        Qualification: Serenity.StringEditor;
        StaffSubjects: Serenity.LookupEditor;
        Remarks: Serenity.TextAreaEditor;
        DailyWage: Serenity.DecimalEditor;
        SalaryAmount: Serenity.DecimalEditor;
        DaysCount: Serenity.IntegerEditor;
    }
    class StaffsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Master {
    interface StaffsRow {
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
    namespace StaffsRow {
        const idProperty = "Id";
        const nameProperty = "FullName";
        const localTextPrefix = "Master.Staffs";
        const lookupKey = "Master.Staffs";
        function getLookup(): Q.Lookup<StaffsRow>;
        const deletePermission = "Master:Staffs";
        const insertPermission = "Master:Staffs";
        const readPermission = "Master:Staffs";
        const updatePermission = "Master:Staffs";
        const enum Fields {
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
declare namespace BitPro.SchoolMate.Master {
    namespace StaffsService {
        const baseUrl = "Master/Staffs";
        function Create(request: Serenity.SaveRequest<StaffsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StaffsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StaffsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StaffsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/Staffs/Create",
            Update = "Master/Staffs/Update",
            Delete = "Master/Staffs/Delete",
            Retrieve = "Master/Staffs/Retrieve",
            List = "Master/Staffs/List",
            GetNextNumber = "Master/Staffs/GetNextNumber"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
}
declare namespace BitPro.SchoolMate.Master {
    interface StaffSubjectsForm {
        StaffId: Serenity.IntegerEditor;
        SubjectId: Serenity.IntegerEditor;
    }
    class StaffSubjectsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Master {
    interface StaffSubjectsRow {
        Id?: number;
        StaffId?: number;
        SubjectId?: number;
        StaffCode?: string;
        StaffStaffName?: string;
        StaffContactId?: number;
        StaffIsTeacher?: boolean;
        StaffRemarks?: string;
        StaffDailyWage?: number;
        SubjectCode?: string;
        SubjectSubjectName?: string;
    }
    namespace StaffSubjectsRow {
        const idProperty = "Id";
        const localTextPrefix = "Master.StaffSubjects";
        const deletePermission = "Master:Staffs";
        const insertPermission = "Master:Staffs";
        const readPermission = "Master:Staffs";
        const updatePermission = "Master:Staffs";
        const enum Fields {
            Id = "Id",
            StaffId = "StaffId",
            SubjectId = "SubjectId",
            StaffCode = "StaffCode",
            StaffStaffName = "StaffStaffName",
            StaffContactId = "StaffContactId",
            StaffIsTeacher = "StaffIsTeacher",
            StaffRemarks = "StaffRemarks",
            StaffDailyWage = "StaffDailyWage",
            SubjectCode = "SubjectCode",
            SubjectSubjectName = "SubjectSubjectName"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
    namespace StaffSubjectsService {
        const baseUrl = "Master/StaffSubjects";
        function Create(request: Serenity.SaveRequest<StaffSubjectsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StaffSubjectsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StaffSubjectsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StaffSubjectsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/StaffSubjects/Create",
            Update = "Master/StaffSubjects/Update",
            Delete = "Master/StaffSubjects/Delete",
            Retrieve = "Master/StaffSubjects/Retrieve",
            List = "Master/StaffSubjects/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
}
declare namespace BitPro.SchoolMate.Master {
    interface StudentCurrentCoursesForm {
        StudentId: Serenity.IntegerEditor;
        CourseId: Serenity.IntegerEditor;
    }
    class StudentCurrentCoursesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Master {
    interface StudentCurrentCoursesRow {
        Id?: number;
        StudentId?: number;
        CourseId?: number;
        StudentCode?: string;
        StudentJoiningDate?: string;
        StudentJoiningCourse?: number;
        StudentFatherContactId?: number;
        StudentMotherContactId?: number;
        StudentStudentContactId?: number;
        StudentCampusId?: number;
        StudentOtherInstitute?: string;
        StudentDivision?: string;
        StudentTenantId?: number;
        StudentStudentName?: string;
        StudentGender?: number;
        StudentDob?: string;
        StudentIdno?: string;
        StudentLandMark?: string;
        StudentBusStop?: string;
        StudentRemarks?: string;
        StudentPhoto?: string;
        CourseCode?: string;
        CourseCourseName?: string;
        CourseActive?: boolean;
        CourseNonAcadamic?: boolean;
        CourseTenantId?: number;
    }
    namespace StudentCurrentCoursesRow {
        const idProperty = "Id";
        const localTextPrefix = "Master.StudentCurrentCourses";
        const deletePermission = "Master:Students";
        const insertPermission = "Master:Students";
        const readPermission = "Master:Students";
        const updatePermission = "Master:Students";
        const enum Fields {
            Id = "Id",
            StudentId = "StudentId",
            CourseId = "CourseId",
            StudentCode = "StudentCode",
            StudentJoiningDate = "StudentJoiningDate",
            StudentJoiningCourse = "StudentJoiningCourse",
            StudentFatherContactId = "StudentFatherContactId",
            StudentMotherContactId = "StudentMotherContactId",
            StudentStudentContactId = "StudentStudentContactId",
            StudentCampusId = "StudentCampusId",
            StudentOtherInstitute = "StudentOtherInstitute",
            StudentDivision = "StudentDivision",
            StudentTenantId = "StudentTenantId",
            StudentStudentName = "StudentStudentName",
            StudentGender = "StudentGender",
            StudentDob = "StudentDob",
            StudentIdno = "StudentIdno",
            StudentLandMark = "StudentLandMark",
            StudentBusStop = "StudentBusStop",
            StudentRemarks = "StudentRemarks",
            StudentPhoto = "StudentPhoto",
            CourseCode = "CourseCode",
            CourseCourseName = "CourseCourseName",
            CourseActive = "CourseActive",
            CourseNonAcadamic = "CourseNonAcadamic",
            CourseTenantId = "CourseTenantId"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
    namespace StudentCurrentCoursesService {
        const baseUrl = "Master/StudentCurrentCourses";
        function Create(request: Serenity.SaveRequest<StudentCurrentCoursesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StudentCurrentCoursesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StudentCurrentCoursesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StudentCurrentCoursesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/StudentCurrentCourses/Create",
            Update = "Master/StudentCurrentCourses/Update",
            Delete = "Master/StudentCurrentCourses/Delete",
            Retrieve = "Master/StudentCurrentCourses/Retrieve",
            List = "Master/StudentCurrentCourses/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
}
declare namespace BitPro.SchoolMate.Master {
    interface StudentsForm {
        CampusId: Serenity.LookupEditor;
        Code: Serenity.StringEditor;
        StudentName: Serenity.StringEditor;
        Gender: Serenity.EnumEditor;
        DOB: Serenity.DateEditor;
        IDNO: Serenity.StringEditor;
        FatherContactId: Serenity.LookupEditor;
        MotherContactId: Serenity.LookupEditor;
        StudentContactId: Serenity.LookupEditor;
        JoiningDate: Serenity.DateEditor;
        JoiningCourse: Serenity.LookupEditor;
        JoiningDivisionId: Serenity.LookupEditor;
        OtherInstitute: Serenity.StringEditor;
        Division: Serenity.StringEditor;
        AdmissionAcadamicYearId: Serenity.LookupEditor;
        AdmissionFeeTermId: Serenity.LookupEditor;
        LandMark: Serenity.StringEditor;
        BusStop: Serenity.StringEditor;
        Remarks: Serenity.TextAreaEditor;
        CurrentCourses: Serenity.LookupEditor;
        Photo: Serenity.ImageUploadEditor;
        TranportationFeeId: Serenity.LookupEditor;
        FromAcadamicYearId: Serenity.LookupEditor;
        FromFeeTermId: Serenity.LookupEditor;
    }
    class StudentsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Master {
    interface StudentsRow {
        Id?: number;
        Code?: string;
        JoiningDate?: string;
        JoiningCourse?: number;
        FatherContactId?: number;
        MotherContactId?: number;
        StudentContactId?: number;
        CampusId?: number;
        OtherInstitute?: string;
        Division?: string;
        TenantId?: number;
        StudentName?: string;
        Gender?: Gender;
        DOB?: string;
        IDNO?: string;
        LandMark?: string;
        BusStop?: string;
        Remarks?: string;
        Photo?: string;
        CurrentCourses?: number[];
        JoiningDivisionId?: number;
        FullName?: string;
        TranportationFeeId?: number;
        FromAcadamicYearId?: number;
        FromFeeTermId?: number;
        JoiningCourseCode?: string;
        JoiningCourseCourseName?: string;
        JoiningCourseActive?: boolean;
        JoiningCourseNonAcadamic?: boolean;
        JoiningCourseTenantId?: number;
        FatherContactName?: string;
        FatherContactPhone?: string;
        FatherContactEmail?: string;
        FatherContactWhatsapp?: string;
        FatherContactAddress1?: string;
        FatherContactAddress2?: string;
        FatherContactNationality?: number;
        FatherContactTenantId?: number;
        MotherContactName?: string;
        MotherContactPhone?: string;
        MotherContactEmail?: string;
        MotherContactWhatsapp?: string;
        MotherContactAddress1?: string;
        MotherContactAddress2?: string;
        MotherContactNationality?: number;
        MotherContactTenantId?: number;
        StudentContactName?: string;
        StudentContactPhone?: string;
        StudentContactEmail?: string;
        StudentContactWhatsapp?: string;
        StudentContactAddress1?: string;
        StudentContactAddress2?: string;
        StudentContactNationality?: number;
        StudentContactTenantId?: number;
        CampusCode?: string;
        Campus?: string;
        CampusAddress?: string;
        CampusPhone?: string;
        CampusContactPerson?: string;
        CampusMobile?: string;
        CampusEmail?: string;
        CampusWebsite?: string;
        CampusCountryId?: number;
        CampusAreaId?: number;
        CampusTenantId?: number;
        AdmissionFeeTermId?: number;
        AdmissionAcadamicYearId?: number;
    }
    namespace StudentsRow {
        const idProperty = "Id";
        const nameProperty = "FullName";
        const localTextPrefix = "Master.Students";
        const lookupKey = "Master.Students";
        function getLookup(): Q.Lookup<StudentsRow>;
        const deletePermission = "Master:StudentsDelete";
        const insertPermission = "Master:StudentsCreate";
        const readPermission = "Master:Students";
        const updatePermission = "Master:StudentsUpdate";
        const enum Fields {
            Id = "Id",
            Code = "Code",
            JoiningDate = "JoiningDate",
            JoiningCourse = "JoiningCourse",
            FatherContactId = "FatherContactId",
            MotherContactId = "MotherContactId",
            StudentContactId = "StudentContactId",
            CampusId = "CampusId",
            OtherInstitute = "OtherInstitute",
            Division = "Division",
            TenantId = "TenantId",
            StudentName = "StudentName",
            Gender = "Gender",
            DOB = "DOB",
            IDNO = "IDNO",
            LandMark = "LandMark",
            BusStop = "BusStop",
            Remarks = "Remarks",
            Photo = "Photo",
            CurrentCourses = "CurrentCourses",
            JoiningDivisionId = "JoiningDivisionId",
            FullName = "FullName",
            TranportationFeeId = "TranportationFeeId",
            FromAcadamicYearId = "FromAcadamicYearId",
            FromFeeTermId = "FromFeeTermId",
            JoiningCourseCode = "JoiningCourseCode",
            JoiningCourseCourseName = "JoiningCourseCourseName",
            JoiningCourseActive = "JoiningCourseActive",
            JoiningCourseNonAcadamic = "JoiningCourseNonAcadamic",
            JoiningCourseTenantId = "JoiningCourseTenantId",
            FatherContactName = "FatherContactName",
            FatherContactPhone = "FatherContactPhone",
            FatherContactEmail = "FatherContactEmail",
            FatherContactWhatsapp = "FatherContactWhatsapp",
            FatherContactAddress1 = "FatherContactAddress1",
            FatherContactAddress2 = "FatherContactAddress2",
            FatherContactNationality = "FatherContactNationality",
            FatherContactTenantId = "FatherContactTenantId",
            MotherContactName = "MotherContactName",
            MotherContactPhone = "MotherContactPhone",
            MotherContactEmail = "MotherContactEmail",
            MotherContactWhatsapp = "MotherContactWhatsapp",
            MotherContactAddress1 = "MotherContactAddress1",
            MotherContactAddress2 = "MotherContactAddress2",
            MotherContactNationality = "MotherContactNationality",
            MotherContactTenantId = "MotherContactTenantId",
            StudentContactName = "StudentContactName",
            StudentContactPhone = "StudentContactPhone",
            StudentContactEmail = "StudentContactEmail",
            StudentContactWhatsapp = "StudentContactWhatsapp",
            StudentContactAddress1 = "StudentContactAddress1",
            StudentContactAddress2 = "StudentContactAddress2",
            StudentContactNationality = "StudentContactNationality",
            StudentContactTenantId = "StudentContactTenantId",
            CampusCode = "CampusCode",
            Campus = "Campus",
            CampusAddress = "CampusAddress",
            CampusPhone = "CampusPhone",
            CampusContactPerson = "CampusContactPerson",
            CampusMobile = "CampusMobile",
            CampusEmail = "CampusEmail",
            CampusWebsite = "CampusWebsite",
            CampusCountryId = "CampusCountryId",
            CampusAreaId = "CampusAreaId",
            CampusTenantId = "CampusTenantId",
            AdmissionFeeTermId = "AdmissionFeeTermId",
            AdmissionAcadamicYearId = "AdmissionAcadamicYearId"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
    namespace StudentsService {
        const baseUrl = "Master/Students";
        function Create(request: Serenity.SaveRequest<StudentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StudentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StudentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StudentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetConfig(request: ConfigRequest, onSuccess?: (response: SchoolMate.Administration.SettingsRow) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetDefaultCampus(request: GetNextNumberRequest, onSuccess?: (response: CampusesRow) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/Students/Create",
            Update = "Master/Students/Update",
            Delete = "Master/Students/Delete",
            Retrieve = "Master/Students/Retrieve",
            List = "Master/Students/List",
            GetConfig = "Master/Students/GetConfig",
            GetNextNumber = "Master/Students/GetNextNumber",
            GetDefaultCampus = "Master/Students/GetDefaultCampus"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
}
declare namespace BitPro.SchoolMate.Master {
    interface SubjectsForm {
        Code: Serenity.StringEditor;
        SubjectName: Serenity.StringEditor;
    }
    class SubjectsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Master {
    interface SubjectsRow {
        Id?: number;
        Code?: string;
        SubjectName?: string;
        TenantId?: number;
    }
    namespace SubjectsRow {
        const idProperty = "Id";
        const nameProperty = "SubjectName";
        const localTextPrefix = "Master.Subjects";
        const lookupKey = "Master.Subjects";
        function getLookup(): Q.Lookup<SubjectsRow>;
        const deletePermission = "Master:Subjects";
        const insertPermission = "Master:Subjects";
        const readPermission = "Master:Subjects";
        const updatePermission = "Master:Subjects";
        const enum Fields {
            Id = "Id",
            Code = "Code",
            SubjectName = "SubjectName",
            TenantId = "TenantId"
        }
    }
}
declare namespace BitPro.SchoolMate.Master {
    namespace SubjectsService {
        const baseUrl = "Master/Subjects";
        function Create(request: Serenity.SaveRequest<SubjectsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SubjectsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SubjectsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SubjectsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/Subjects/Create",
            Update = "Master/Subjects/Update",
            Delete = "Master/Subjects/Delete",
            Retrieve = "Master/Subjects/Retrieve",
            List = "Master/Subjects/List"
        }
    }
}
declare namespace BitPro.SchoolMate {
    interface MaximumMarkRequest extends Serenity.ServiceRequest {
        promotionid?: number;
        coursesubjectid?: number;
    }
}
declare namespace BitPro.SchoolMate {
    interface MaximumMarkResponse extends Serenity.ServiceResponse {
        MaxMark?: number;
    }
}
declare namespace BitPro.SchoolMate.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace BitPro.SchoolMate.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace BitPro.SchoolMate.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace BitPro.SchoolMate.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace BitPro.SchoolMate.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace BitPro.SchoolMate {
    interface PromotionByAcadamicYearRequest extends Serenity.ServiceRequest {
        acadamicyearid?: number;
    }
}
declare namespace BitPro.SchoolMate {
    interface PromotionCurrentAcadamicYearResponse extends Serenity.ServiceResponse {
        promotionid?: number;
        CousrseName?: string;
    }
}
declare namespace BitPro.SchoolMate {
    interface PromotionDivisionResponse extends Serenity.ServiceResponse {
        promotiondetailsid?: number;
        StudentName?: string;
    }
}
declare namespace BitPro.SchoolMate {
    interface PromotionInsertRequest extends Serenity.ServiceRequest {
        StudentId?: number;
        PromotionId?: number;
        promotiondetailid?: number;
        divid?: number;
    }
}
declare namespace BitPro.SchoolMate {
    interface PromotionRequest extends Serenity.ServiceRequest {
        FromCouseId?: number;
        ToCouseId?: number;
        AcadamicYearId?: number;
        PromotionId?: number;
    }
}
declare namespace BitPro.SchoolMate {
    enum PromotionTypes {
        Value1 = 1,
        Value2 = 2
    }
}
declare namespace BitPro.SchoolMate {
    interface SalaryRequest extends Serenity.ServiceRequest {
        start?: string;
        to?: string;
        staffid?: number;
    }
}
declare namespace BitPro.SchoolMate {
    interface SalaryResponse extends Serenity.ServiceResponse {
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
declare namespace BitPro.SchoolMate {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace BitPro.SchoolMate {
    interface StudentCurrentPromotion extends Serenity.ServiceRequest {
        StudentId?: number;
    }
}
declare namespace BitPro.SchoolMate {
    interface StudentCurrentPromotionResponce extends Serenity.ServiceResponse {
        CourseId?: number;
        CourseCode?: string;
    }
}
declare namespace BitPro.SchoolMate.Texts {
}
declare namespace BitPro.SchoolMate.Transactions {
}
declare namespace BitPro.SchoolMate.Transactions {
    interface AdmissionForm {
        AcadamicYearId: Serenity.LookupEditor;
        JoiningDate: Serenity.DateEditor;
        StudentId: Serenity.LookupEditor;
        JoiningCourse: Serenity.LookupEditor;
        JoiningDivisionId: Serenity.LookupEditor;
        SelectedFees: Serenity.LookupEditor;
        AdmissionFeeTermId: Serenity.LookupEditor;
    }
    class AdmissionForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    interface AdmissionRow {
        Id?: number;
        AcadamicYearId?: number;
        JoiningDate?: string;
        StudentId?: number;
        JoiningCourse?: number;
        JoiningDivisionId?: number;
        TenantId?: number;
        AcadamicYearCode?: string;
        AcadamicYearPeriodFrom?: string;
        AcadamicYearPeriodTo?: string;
        AcadamicYearDescription?: string;
        AcadamicYearTenantId?: number;
        StudentCode?: string;
        StudentJoiningDate?: string;
        StudentJoiningCourse?: number;
        StudentFatherContactId?: number;
        StudentMotherContactId?: number;
        StudentStudentContactId?: number;
        StudentCampusId?: number;
        StudentOtherInstitute?: string;
        StudentDivision?: string;
        StudentTenantId?: number;
        StudentStudentName?: string;
        StudentGender?: number;
        StudentDob?: string;
        StudentIdno?: string;
        StudentLandMark?: string;
        StudentBusStop?: string;
        StudentRemarks?: string;
        StudentPhoto?: string;
        StudentJoiningDivisionId?: number;
        JoiningCourseCode?: string;
        JoiningCourseCourseName?: string;
        JoiningCourseActive?: boolean;
        JoiningCourseNonAcadamic?: boolean;
        JoiningCourseTenantId?: number;
        JoiningDivisionCourseId?: number;
        JoiningDivisionDivisionCode?: string;
        SelectedFees?: number[];
        AdmissionFeeTermId?: number;
    }
    namespace AdmissionRow {
        const idProperty = "Id";
        const localTextPrefix = "Transactions.Admission";
        const deletePermission = "Transactions:Admission";
        const insertPermission = "Transactions:Admission";
        const readPermission = "Transactions:Admission";
        const updatePermission = "Transactions:Admission";
        const enum Fields {
            Id = "Id",
            AcadamicYearId = "AcadamicYearId",
            JoiningDate = "JoiningDate",
            StudentId = "StudentId",
            JoiningCourse = "JoiningCourse",
            JoiningDivisionId = "JoiningDivisionId",
            TenantId = "TenantId",
            AcadamicYearCode = "AcadamicYearCode",
            AcadamicYearPeriodFrom = "AcadamicYearPeriodFrom",
            AcadamicYearPeriodTo = "AcadamicYearPeriodTo",
            AcadamicYearDescription = "AcadamicYearDescription",
            AcadamicYearTenantId = "AcadamicYearTenantId",
            StudentCode = "StudentCode",
            StudentJoiningDate = "StudentJoiningDate",
            StudentJoiningCourse = "StudentJoiningCourse",
            StudentFatherContactId = "StudentFatherContactId",
            StudentMotherContactId = "StudentMotherContactId",
            StudentStudentContactId = "StudentStudentContactId",
            StudentCampusId = "StudentCampusId",
            StudentOtherInstitute = "StudentOtherInstitute",
            StudentDivision = "StudentDivision",
            StudentTenantId = "StudentTenantId",
            StudentStudentName = "StudentStudentName",
            StudentGender = "StudentGender",
            StudentDob = "StudentDob",
            StudentIdno = "StudentIdno",
            StudentLandMark = "StudentLandMark",
            StudentBusStop = "StudentBusStop",
            StudentRemarks = "StudentRemarks",
            StudentPhoto = "StudentPhoto",
            StudentJoiningDivisionId = "StudentJoiningDivisionId",
            JoiningCourseCode = "JoiningCourseCode",
            JoiningCourseCourseName = "JoiningCourseCourseName",
            JoiningCourseActive = "JoiningCourseActive",
            JoiningCourseNonAcadamic = "JoiningCourseNonAcadamic",
            JoiningCourseTenantId = "JoiningCourseTenantId",
            JoiningDivisionCourseId = "JoiningDivisionCourseId",
            JoiningDivisionDivisionCode = "JoiningDivisionDivisionCode",
            SelectedFees = "SelectedFees",
            AdmissionFeeTermId = "AdmissionFeeTermId"
        }
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    namespace AdmissionService {
        const baseUrl = "Transactions/Admission";
        function Create(request: Serenity.SaveRequest<AdmissionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AdmissionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AdmissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AdmissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transactions/Admission/Create",
            Update = "Transactions/Admission/Update",
            Delete = "Transactions/Admission/Delete",
            Retrieve = "Transactions/Admission/Retrieve",
            List = "Transactions/Admission/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Transactions {
}
declare namespace BitPro.SchoolMate.Transactions {
    interface AttandanceForm {
        StaffId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        AcadamicYearId: Serenity.LookupEditor;
        Status: Serenity.EnumEditor;
        Attachments: Serenity.MultipleImageUploadEditor;
        Description: Serenity.TextAreaEditor;
    }
    class AttandanceForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    interface AttandanceRow {
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
    namespace AttandanceRow {
        const idProperty = "Id";
        const nameProperty = "Description";
        const localTextPrefix = "Transactions.Attandance";
        const lookupKey = "Master.Attandance";
        function getLookup(): Q.Lookup<AttandanceRow>;
        const deletePermission = "Transactions:Attandance";
        const insertPermission = "Transactions:Attandance";
        const readPermission = "Transactions:Attandance";
        const updatePermission = "Transactions:Attandance";
        const enum Fields {
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
declare namespace BitPro.SchoolMate.Transactions {
    namespace AttandanceService {
        const baseUrl = "Transactions/Attandance";
        function Create(request: Serenity.SaveRequest<AttandanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AttandanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AttandanceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AttandanceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function UpdateAttendance(request: AttendanceUpdateRequest, onSuccess?: (response: System.Boolean) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetPromotionCurrentAcadamicYear(request: AttendanceUpdateRequest, onSuccess?: (response: System.Collections.Generic.List<PromotionCurrentAcadamicYearResponse>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetAttendanceList(request: AttendanceRequest, onSuccess?: (response: Serenity.ListResponse<AttandanceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function UpdateAttendanceList(request: UpdateListAttendanceRequest, onSuccess?: (response: System.Boolean) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transactions/Attandance/Create",
            Update = "Transactions/Attandance/Update",
            Delete = "Transactions/Attandance/Delete",
            Retrieve = "Transactions/Attandance/Retrieve",
            List = "Transactions/Attandance/List",
            UpdateAttendance = "Transactions/Attandance/UpdateAttendance",
            GetPromotionCurrentAcadamicYear = "Transactions/Attandance/GetPromotionCurrentAcadamicYear",
            GetAttendanceList = "Transactions/Attandance/GetAttendanceList",
            UpdateAttendanceList = "Transactions/Attandance/UpdateAttendanceList"
        }
    }
}
declare namespace BitPro.SchoolMate.Transactions {
}
declare namespace BitPro.SchoolMate.Transactions {
}
declare namespace BitPro.SchoolMate.Transactions {
    interface CourseExitDetailsForm {
        PromotionDetailId: Serenity.LookupEditor;
        Attachments: Serenity.MultipleImageUploadEditor;
    }
    class CourseExitDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    interface CourseExitDetailsRow {
        Id?: number;
        CourseExitId?: number;
        PromotionDetailId?: number;
        Attachments?: string;
        CourseExitAcadamicYearId?: number;
        CourseExitPromotionId?: number;
        CourseExitExitType?: number;
        CourseExitExitDate?: string;
        PromotionDetailPromotionId?: number;
        PromotionDetailStudentId?: number;
        PromotionDetailIsCompleted?: boolean;
        PromotionDetailPromotionType?: number;
        Student?: string;
    }
    namespace CourseExitDetailsRow {
        const idProperty = "Id";
        const nameProperty = "Attachments";
        const localTextPrefix = "Transactions.CourseExitDetails";
        const deletePermission = "Transactions:CourseExit";
        const insertPermission = "Transactions:CourseExit";
        const readPermission = "Transactions:CourseExit";
        const updatePermission = "Transactions:CourseExit";
        const enum Fields {
            Id = "Id",
            CourseExitId = "CourseExitId",
            PromotionDetailId = "PromotionDetailId",
            Attachments = "Attachments",
            CourseExitAcadamicYearId = "CourseExitAcadamicYearId",
            CourseExitPromotionId = "CourseExitPromotionId",
            CourseExitExitType = "CourseExitExitType",
            CourseExitExitDate = "CourseExitExitDate",
            PromotionDetailPromotionId = "PromotionDetailPromotionId",
            PromotionDetailStudentId = "PromotionDetailStudentId",
            PromotionDetailIsCompleted = "PromotionDetailIsCompleted",
            PromotionDetailPromotionType = "PromotionDetailPromotionType",
            Student = "Student"
        }
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    namespace CourseExitDetailsService {
        const baseUrl = "Transactions/CourseExitDetails";
        function Create(request: Serenity.SaveRequest<CourseExitDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CourseExitDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CourseExitDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CourseExitDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transactions/CourseExitDetails/Create",
            Update = "Transactions/CourseExitDetails/Update",
            Delete = "Transactions/CourseExitDetails/Delete",
            Retrieve = "Transactions/CourseExitDetails/Retrieve",
            List = "Transactions/CourseExitDetails/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    interface CourseExitForm {
        AcadamicYearId: Serenity.LookupEditor;
        PromotionId: Serenity.LookupEditor;
        ExitType: Serenity.EnumEditor;
        ExitDate: Serenity.DateEditor;
        Students: CourseExitEditor;
    }
    class CourseExitForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    interface CourseExitRow {
        Id?: number;
        AcadamicYearId?: number;
        PromotionId?: number;
        ExitType?: CourseExitTypes;
        ExitDate?: string;
        Students?: CourseExitDetailsRow[];
        TenantId?: number;
        AcadamicYearCode?: string;
        AcadamicYearPeriodFrom?: string;
        AcadamicYearPeriodTo?: string;
        AcadamicYearDescription?: string;
        AcadamicYearTenantId?: number;
        PromotionFromCourse?: number;
        PromotionToCourse?: number;
        PromotionCreatedBy?: number;
        PromotionCreatedDate?: string;
        PromotionTenantId?: number;
        PromotionAcadamicYearId?: number;
        PromotionJoiningDivisionId?: number;
        ToCourse?: string;
    }
    namespace CourseExitRow {
        const idProperty = "Id";
        const localTextPrefix = "Transactions.CourseExit";
        const deletePermission = "Transactions:CourseExit";
        const insertPermission = "Transactions:CourseExit";
        const readPermission = "Transactions:CourseExit";
        const updatePermission = "Transactions:CourseExit";
        const enum Fields {
            Id = "Id",
            AcadamicYearId = "AcadamicYearId",
            PromotionId = "PromotionId",
            ExitType = "ExitType",
            ExitDate = "ExitDate",
            Students = "Students",
            TenantId = "TenantId",
            AcadamicYearCode = "AcadamicYearCode",
            AcadamicYearPeriodFrom = "AcadamicYearPeriodFrom",
            AcadamicYearPeriodTo = "AcadamicYearPeriodTo",
            AcadamicYearDescription = "AcadamicYearDescription",
            AcadamicYearTenantId = "AcadamicYearTenantId",
            PromotionFromCourse = "PromotionFromCourse",
            PromotionToCourse = "PromotionToCourse",
            PromotionCreatedBy = "PromotionCreatedBy",
            PromotionCreatedDate = "PromotionCreatedDate",
            PromotionTenantId = "PromotionTenantId",
            PromotionAcadamicYearId = "PromotionAcadamicYearId",
            PromotionJoiningDivisionId = "PromotionJoiningDivisionId",
            ToCourse = "ToCourse"
        }
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    namespace CourseExitService {
        const baseUrl = "Transactions/CourseExit";
        function Create(request: Serenity.SaveRequest<CourseExitRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CourseExitRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CourseExitRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CourseExitRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transactions/CourseExit/Create",
            Update = "Transactions/CourseExit/Update",
            Delete = "Transactions/CourseExit/Delete",
            Retrieve = "Transactions/CourseExit/Retrieve",
            List = "Transactions/CourseExit/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Transactions {
}
declare namespace BitPro.SchoolMate.Transactions {
    interface FeeAllocationForm {
        CourseFeeId: Serenity.LookupEditor;
        FeeStrctureId: Serenity.LookupEditor;
        Collected: Serenity.DecimalEditor;
        Balance: Serenity.DecimalEditor;
    }
    class FeeAllocationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    interface FeeAllocationRow {
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
    namespace FeeAllocationRow {
        const idProperty = "Id";
        const localTextPrefix = "Transactions.FeeAllocation";
        const deletePermission = "Transactions:FeeCollection";
        const insertPermission = "Transactions:FeeCollection";
        const readPermission = "Transactions:FeeCollection";
        const updatePermission = "Transactions:FeeCollection";
        const enum Fields {
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
declare namespace BitPro.SchoolMate.Transactions {
    namespace FeeAllocationService {
        const baseUrl = "Transactions/FeeAllocation";
        function Create(request: Serenity.SaveRequest<FeeAllocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FeeAllocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FeeAllocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FeeAllocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transactions/FeeAllocation/Create",
            Update = "Transactions/FeeAllocation/Update",
            Delete = "Transactions/FeeAllocation/Delete",
            Retrieve = "Transactions/FeeAllocation/Retrieve",
            List = "Transactions/FeeAllocation/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Transactions {
}
declare namespace BitPro.SchoolMate.Transactions {
    interface FeeAllocationTranportationForm {
        FeeId: Serenity.LookupEditor;
        FeeStrctureId: Serenity.LookupEditor;
        Collected: Serenity.DecimalEditor;
        Balance: Serenity.DecimalEditor;
    }
    class FeeAllocationTranportationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    interface FeeAllocationTranportationRow {
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
    namespace FeeAllocationTranportationRow {
        const idProperty = "Id";
        const localTextPrefix = "Transactions.FeeAllocationTranportation";
        const deletePermission = "Transactions:FeeCollection";
        const insertPermission = "Transactions:FeeCollection";
        const readPermission = "Transactions:FeeCollection";
        const updatePermission = "Transactions:FeeCollection";
        const enum Fields {
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
declare namespace BitPro.SchoolMate.Transactions {
    namespace FeeAllocationTranportationService {
        const baseUrl = "Transactions/FeeAllocationTranportation";
        function Create(request: Serenity.SaveRequest<FeeAllocationTranportationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FeeAllocationTranportationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FeeAllocationTranportationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FeeAllocationTranportationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transactions/FeeAllocationTranportation/Create",
            Update = "Transactions/FeeAllocationTranportation/Update",
            Delete = "Transactions/FeeAllocationTranportation/Delete",
            Retrieve = "Transactions/FeeAllocationTranportation/Retrieve",
            List = "Transactions/FeeAllocationTranportation/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Transactions {
}
declare namespace BitPro.SchoolMate.Transactions {
    interface FeeCollectionForm {
        AcadamicYearId: Serenity.LookupEditor;
        StudentId: Serenity.LookupEditor;
        PromotionDetailId: Serenity.LookupEditor;
        PayDate: Serenity.DateEditor;
        FeeAllocations: FeeAllocationEditor;
        TranportationFee: FeeAllocationTranportationEditor;
        TotalAmount: Serenity.DecimalEditor;
        PaymentMethod: Serenity.EnumEditor;
        AccountId: Serenity.LookupEditor;
    }
    class FeeCollectionForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    interface FeeCollectionRow {
        Id?: number;
        StudentId?: number;
        PayDate?: string;
        FeeAllocations?: FeeAllocationRow[];
        TranportationFee?: FeeAllocationTranportationRow[];
        TotalAmount?: number;
        AcadamicYearId?: number;
        TenantId?: number;
        PromotionDetailId?: number;
        AccountId?: number;
        PaymentMethod?: AccountTypes;
        StudentCode?: string;
        StudentFullName?: string;
        StudentJoiningDate?: string;
        StudentJoiningCourse?: number;
        StudentFatherContactId?: number;
        StudentMotherContactId?: number;
        StudentStudentContactId?: number;
        StudentCampusId?: number;
        StudentOtherInstitute?: string;
        StudentDivision?: string;
        StudentTenantId?: number;
        CreditAccountType?: number;
        CreditAccountAccountNo?: string;
        CreditAccountAccountHeadId?: number;
    }
    namespace FeeCollectionRow {
        const idProperty = "Id";
        const localTextPrefix = "Transactions.FeeCollection";
        const lookupKey = "Master.FeeCollection";
        function getLookup(): Q.Lookup<FeeCollectionRow>;
        const deletePermission = "Transactions:FeeCollectionDelete";
        const insertPermission = "Transactions:FeeCollectionCreate";
        const readPermission = "Transactions:FeeCollection";
        const updatePermission = "Transactions:FeeCollectionUpdate";
        const enum Fields {
            Id = "Id",
            StudentId = "StudentId",
            PayDate = "PayDate",
            FeeAllocations = "FeeAllocations",
            TranportationFee = "TranportationFee",
            TotalAmount = "TotalAmount",
            AcadamicYearId = "AcadamicYearId",
            TenantId = "TenantId",
            PromotionDetailId = "PromotionDetailId",
            AccountId = "AccountId",
            PaymentMethod = "PaymentMethod",
            StudentCode = "StudentCode",
            StudentFullName = "StudentFullName",
            StudentJoiningDate = "StudentJoiningDate",
            StudentJoiningCourse = "StudentJoiningCourse",
            StudentFatherContactId = "StudentFatherContactId",
            StudentMotherContactId = "StudentMotherContactId",
            StudentStudentContactId = "StudentStudentContactId",
            StudentCampusId = "StudentCampusId",
            StudentOtherInstitute = "StudentOtherInstitute",
            StudentDivision = "StudentDivision",
            StudentTenantId = "StudentTenantId",
            CreditAccountType = "CreditAccountType",
            CreditAccountAccountNo = "CreditAccountAccountNo",
            CreditAccountAccountHeadId = "CreditAccountAccountHeadId"
        }
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    namespace FeeCollectionService {
        const baseUrl = "Transactions/FeeCollection";
        function Create(request: Serenity.SaveRequest<FeeCollectionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FeeCollectionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FeeCollectionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FeeCollectionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function StudentCurrentPromotions(request: StudentCurrentPromotion, onSuccess?: (response: System.Collections.Generic.List<StudentCurrentPromotionResponce>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetCourseFeeStucture(request: CourseFeeStructure, onSuccess?: (response: System.Collections.Generic.List<CourseFeeStructureResponce>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetFeeAmount(request: CourseFeeAmountRequest, onSuccess?: (response: CourseFeeAmountResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetStudentCoursePendingFees(request: CourseFeeStructure, onSuccess?: (response: System.Collections.Generic.List<CourseFeeResponce>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function CourseFeePending(request: CourseFeeRequest, onSuccess?: (response: System.Collections.Generic.List<CourseFeeResponse>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function TransportationFeePending(request: TransportationFeeRequest, onSuccess?: (response: System.Collections.Generic.List<CourseFeeResponce>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetDefaultAccount(request: GetNextNumberRequest, onSuccess?: (response: SchoolMate.Accounts.AccountsRow) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transactions/FeeCollection/Create",
            Update = "Transactions/FeeCollection/Update",
            Delete = "Transactions/FeeCollection/Delete",
            Retrieve = "Transactions/FeeCollection/Retrieve",
            List = "Transactions/FeeCollection/List",
            StudentCurrentPromotions = "Transactions/FeeCollection/StudentCurrentPromotions",
            GetCourseFeeStucture = "Transactions/FeeCollection/GetCourseFeeStucture",
            GetFeeAmount = "Transactions/FeeCollection/GetFeeAmount",
            GetStudentCoursePendingFees = "Transactions/FeeCollection/GetStudentCoursePendingFees",
            CourseFeePending = "Transactions/FeeCollection/CourseFeePending",
            TransportationFeePending = "Transactions/FeeCollection/TransportationFeePending",
            GetDefaultAccount = "Transactions/FeeCollection/GetDefaultAccount"
        }
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    interface ProgressCard {
        Campus?: string;
        Address?: string;
        Phone?: string;
        student?: string;
        CourseName?: string;
        FatherName?: string;
        Exams?: SchoolMate.Master.ExamsRow[];
        Subjects?: any[];
    }
}
declare namespace BitPro.SchoolMate.Transactions {
}
declare namespace BitPro.SchoolMate.Transactions {
    interface PromotionDetailsForm {
        PromotionId: Serenity.IntegerEditor;
        StudentId: Serenity.IntegerEditor;
        IsCompleted: Serenity.BooleanEditor;
        PromotionType: Serenity.EnumEditor;
    }
    class PromotionDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    interface PromotionDetailsLookupRow {
        Id?: number;
        PromotionId?: number;
        StudentId?: number;
        IsCompleted?: boolean;
        PromotionType?: PromotionTypes;
        PromotionFromCourse?: number;
        PromotionToCourse?: number;
        PromotionCreatedBy?: number;
        PromotionCreatedDate?: string;
        PromotionTenantId?: number;
        PromotionAcadamicYearId?: number;
        StudentCode?: string;
        StudentName?: string;
        StudentJoiningDate?: string;
        StudentJoiningCourse?: number;
        StudentFatherContactId?: number;
        StudentMotherContactId?: number;
        StudentStudentContactId?: number;
        StudentCampusId?: number;
        StudentOtherInstitute?: string;
        StudentDivision?: string;
        StudentTenantId?: number;
        Course?: string;
    }
    namespace PromotionDetailsLookupRow {
        const idProperty = "Id";
        const nameProperty = "StudentName";
        const localTextPrefix = "Transactions.PromotionDetailsLookup";
        const lookupKey = "Transactions.PromotionDetailsLookup";
        function getLookup(): Q.Lookup<PromotionDetailsLookupRow>;
        const deletePermission = "Transactions:Promotions";
        const insertPermission = "Transactions:Promotions";
        const readPermission = "Transactions:Promotions";
        const updatePermission = "Transactions:Promotions";
        const enum Fields {
            Id = "Id",
            PromotionId = "PromotionId",
            StudentId = "StudentId",
            IsCompleted = "IsCompleted",
            PromotionType = "PromotionType",
            PromotionFromCourse = "PromotionFromCourse",
            PromotionToCourse = "PromotionToCourse",
            PromotionCreatedBy = "PromotionCreatedBy",
            PromotionCreatedDate = "PromotionCreatedDate",
            PromotionTenantId = "PromotionTenantId",
            PromotionAcadamicYearId = "PromotionAcadamicYearId",
            StudentCode = "StudentCode",
            StudentName = "StudentName",
            StudentJoiningDate = "StudentJoiningDate",
            StudentJoiningCourse = "StudentJoiningCourse",
            StudentFatherContactId = "StudentFatherContactId",
            StudentMotherContactId = "StudentMotherContactId",
            StudentStudentContactId = "StudentStudentContactId",
            StudentCampusId = "StudentCampusId",
            StudentOtherInstitute = "StudentOtherInstitute",
            StudentDivision = "StudentDivision",
            StudentTenantId = "StudentTenantId",
            Course = "Course"
        }
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    interface PromotionDetailsRow {
        Id?: number;
        PromotionId?: number;
        StudentId?: number;
        IsCompleted?: boolean;
        PromotionType?: PromotionTypes;
        PromotionFromCourse?: number;
        PromotionToCourse?: number;
        PromotionCreatedBy?: number;
        PromotionCreatedDate?: string;
        PromotionTenantId?: number;
        PromotionAcadamicYearId?: number;
        StudentCode?: string;
        StudentName?: string;
        StudentJoiningDate?: string;
        StudentJoiningCourse?: number;
        StudentFatherContactId?: number;
        StudentMotherContactId?: number;
        StudentStudentContactId?: number;
        StudentCampusId?: number;
        StudentOtherInstitute?: string;
        StudentDivision?: string;
        StudentTenantId?: number;
        Course?: string;
    }
    namespace PromotionDetailsRow {
        const idProperty = "Id";
        const nameProperty = "Course";
        const localTextPrefix = "Transactions.PromotionDetails";
        const lookupKey = "Transactions.PromotionsDetails";
        function getLookup(): Q.Lookup<PromotionDetailsRow>;
        const deletePermission = "Transactions:Promotions";
        const insertPermission = "Transactions:Promotions";
        const readPermission = "Transactions:Promotions";
        const updatePermission = "Transactions:Promotions";
        const enum Fields {
            Id = "Id",
            PromotionId = "PromotionId",
            StudentId = "StudentId",
            IsCompleted = "IsCompleted",
            PromotionType = "PromotionType",
            PromotionFromCourse = "PromotionFromCourse",
            PromotionToCourse = "PromotionToCourse",
            PromotionCreatedBy = "PromotionCreatedBy",
            PromotionCreatedDate = "PromotionCreatedDate",
            PromotionTenantId = "PromotionTenantId",
            PromotionAcadamicYearId = "PromotionAcadamicYearId",
            StudentCode = "StudentCode",
            StudentName = "StudentName",
            StudentJoiningDate = "StudentJoiningDate",
            StudentJoiningCourse = "StudentJoiningCourse",
            StudentFatherContactId = "StudentFatherContactId",
            StudentMotherContactId = "StudentMotherContactId",
            StudentStudentContactId = "StudentStudentContactId",
            StudentCampusId = "StudentCampusId",
            StudentOtherInstitute = "StudentOtherInstitute",
            StudentDivision = "StudentDivision",
            StudentTenantId = "StudentTenantId",
            Course = "Course"
        }
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    namespace PromotionDetailsService {
        const baseUrl = "Transactions/PromotionDetails";
        function Create(request: Serenity.SaveRequest<PromotionDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PromotionDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PromotionDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PromotionDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transactions/PromotionDetails/Create",
            Update = "Transactions/PromotionDetails/Update",
            Delete = "Transactions/PromotionDetails/Delete",
            Retrieve = "Transactions/PromotionDetails/Retrieve",
            List = "Transactions/PromotionDetails/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Transactions {
}
declare namespace BitPro.SchoolMate.Transactions {
    interface PromotionsForm {
        AcadamicYearId: Serenity.LookupEditor;
        FromCourse: Serenity.LookupEditor;
        ToCourse: Serenity.LookupEditor;
        CreatedBy: Serenity.LookupEditor;
        CreatedDate: Serenity.DateEditor;
        PromotionDivisions: SchoolMate.Master.DivisionsEditor;
    }
    class PromotionsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    interface PromotionsRow {
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
    namespace PromotionsRow {
        const idProperty = "Id";
        const nameProperty = "ToCourseCourseName";
        const localTextPrefix = "Transactions.Promotions";
        const lookupKey = "Transactions.Promotions";
        function getLookup(): Q.Lookup<PromotionsRow>;
        const deletePermission = "Transactions:Promotions";
        const insertPermission = "Transactions:Promotions";
        const readPermission = "Transactions:Promotions";
        const updatePermission = "Transactions:Promotions";
        const enum Fields {
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
declare namespace BitPro.SchoolMate.Transactions {
    namespace PromotionsService {
        const baseUrl = "Transactions/Promotions";
        function Create(request: Serenity.SaveRequest<PromotionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PromotionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PromotionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PromotionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetStudentsByCourse(request: PromotionRequest, onSuccess?: (response: System.Collections.Generic.List<CourseStudentResponse>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetPromotionDetails(request: PromotionRequest, onSuccess?: (response: System.Collections.Generic.List<CourseStudentResponse>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function DeletePromotionDetails(request: PromotionInsertRequest, onSuccess?: (response: System.Boolean) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function InsertIntoPromotionDetails(request: PromotionInsertRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetDivisionsByCourse(request: CouseDivisionRequest, onSuccess?: (response: System.Collections.Generic.List<SchoolMate.Master.CourseDivisionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transactions/Promotions/Create",
            Update = "Transactions/Promotions/Update",
            Delete = "Transactions/Promotions/Delete",
            Retrieve = "Transactions/Promotions/Retrieve",
            List = "Transactions/Promotions/List",
            GetStudentsByCourse = "Transactions/Promotions/GetStudentsByCourse",
            GetPromotionDetails = "Transactions/Promotions/GetPromotionDetails",
            DeletePromotionDetails = "Transactions/Promotions/DeletePromotionDetails",
            InsertIntoPromotionDetails = "Transactions/Promotions/InsertIntoPromotionDetails",
            GetDivisionsByCourse = "Transactions/Promotions/GetDivisionsByCourse"
        }
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    namespace ReportEndPointService {
        const baseUrl = "Transactions/ReportEndPoint";
        function CourseFeePending(request: CourseFeeRequest, onSuccess?: (response: System.Collections.Generic.List<CourseFeeResponse>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function CourseStudentMarks(request: CourseStudentsMarkRequest, onSuccess?: (response: System.Collections.Generic.List<CourseStudentsMarkResponse>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function CoursePromotionsByAcadamicYear(request: PromotionByAcadamicYearRequest, onSuccess?: (response: System.Collections.Generic.List<PromotionCurrentAcadamicYearResponse>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function TersmsByAcadamicYear(request: PromotionByAcadamicYearRequest, onSuccess?: (response: System.Collections.Generic.List<SchoolMate.Master.FeeTermsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetExamMarkByPromotion(request: ExamMarkRequest, onSuccess?: (response: System.Collections.Generic.List<ProgressCard>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            CourseFeePending = "Transactions/ReportEndPoint/CourseFeePending",
            CourseStudentMarks = "Transactions/ReportEndPoint/CourseStudentMarks",
            CoursePromotionsByAcadamicYear = "Transactions/ReportEndPoint/CoursePromotionsByAcadamicYear",
            TersmsByAcadamicYear = "Transactions/ReportEndPoint/TersmsByAcadamicYear",
            GetExamMarkByPromotion = "Transactions/ReportEndPoint/GetExamMarkByPromotion"
        }
    }
}
declare namespace BitPro.SchoolMate.Transactions {
}
declare namespace BitPro.SchoolMate.Transactions {
    interface SalaryPaymentsForm {
        StaffId: Serenity.LookupEditor;
        SalaryAmount: Serenity.DecimalEditor;
        TotalPresent: Serenity.IntegerEditor;
        TotalAbsent: Serenity.IntegerEditor;
        PayableSalaryAmount: Serenity.DecimalEditor;
        PaidDate: Serenity.DateEditor;
        PaidAmount: Serenity.DecimalEditor;
        PaymentMethod: Serenity.EnumEditor;
        CreditAccountId: Serenity.LookupEditor;
        Payment: Serenity.StringEditor;
    }
    class SalaryPaymentsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    interface SalaryPaymentsRow {
        Id?: number;
        SalaryStructureId?: number;
        StaffId?: number;
        PaidDate?: string;
        PaidAmount?: number;
        PaymentMethod?: AccountTypes;
        CreditAccountId?: number;
        SalaryAmount?: number;
        Payment?: SchoolMate.Accounts.PaymentRow[];
        PayableSalaryAmount?: number;
        TotalPresent?: number;
        TotalAbsent?: number;
        SalaryStructureFromDate?: string;
        SalaryStructureToDate?: string;
        SalaryStructureCreatedDate?: string;
        SalaryStructureCreatedBy?: number;
        SalaryStructureTenantId?: number;
        StaffCode?: string;
        StaffStaffName?: string;
        StaffContactId?: number;
        StaffIsTeacher?: boolean;
        StaffRemarks?: string;
        StaffDailyWage?: number;
        StaffTenantId?: number;
        StaffJoiningDate?: string;
        StaffQualification?: string;
        StaffSalaryAmount?: number;
        StaffDaysCount?: number;
        CreditAccountType?: number;
        CreditAccountAccountNo?: string;
        CreditAccountAccountHeadId?: number;
        CreditAccountTenantId?: number;
        CreditAccountIsDefault?: boolean;
    }
    namespace SalaryPaymentsRow {
        const idProperty = "Id";
        const localTextPrefix = "Transactions.SalaryPayments";
        const deletePermission = "Transactions:Salary";
        const insertPermission = "Transactions:Salary";
        const readPermission = "Transactions:Salary";
        const updatePermission = "Transactions:Salary";
        const enum Fields {
            Id = "Id",
            SalaryStructureId = "SalaryStructureId",
            StaffId = "StaffId",
            PaidDate = "PaidDate",
            PaidAmount = "PaidAmount",
            PaymentMethod = "PaymentMethod",
            CreditAccountId = "CreditAccountId",
            SalaryAmount = "SalaryAmount",
            Payment = "Payment",
            PayableSalaryAmount = "PayableSalaryAmount",
            TotalPresent = "TotalPresent",
            TotalAbsent = "TotalAbsent",
            SalaryStructureFromDate = "SalaryStructureFromDate",
            SalaryStructureToDate = "SalaryStructureToDate",
            SalaryStructureCreatedDate = "SalaryStructureCreatedDate",
            SalaryStructureCreatedBy = "SalaryStructureCreatedBy",
            SalaryStructureTenantId = "SalaryStructureTenantId",
            StaffCode = "StaffCode",
            StaffStaffName = "StaffStaffName",
            StaffContactId = "StaffContactId",
            StaffIsTeacher = "StaffIsTeacher",
            StaffRemarks = "StaffRemarks",
            StaffDailyWage = "StaffDailyWage",
            StaffTenantId = "StaffTenantId",
            StaffJoiningDate = "StaffJoiningDate",
            StaffQualification = "StaffQualification",
            StaffSalaryAmount = "StaffSalaryAmount",
            StaffDaysCount = "StaffDaysCount",
            CreditAccountType = "CreditAccountType",
            CreditAccountAccountNo = "CreditAccountAccountNo",
            CreditAccountAccountHeadId = "CreditAccountAccountHeadId",
            CreditAccountTenantId = "CreditAccountTenantId",
            CreditAccountIsDefault = "CreditAccountIsDefault"
        }
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    namespace SalaryPaymentsService {
        const baseUrl = "Transactions/SalaryPayments";
        function Create(request: Serenity.SaveRequest<SalaryPaymentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SalaryPaymentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SalaryPaymentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalaryPaymentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transactions/SalaryPayments/Create",
            Update = "Transactions/SalaryPayments/Update",
            Delete = "Transactions/SalaryPayments/Delete",
            Retrieve = "Transactions/SalaryPayments/Retrieve",
            List = "Transactions/SalaryPayments/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Transactions {
}
declare namespace BitPro.SchoolMate.Transactions {
    interface SalaryStructureForm {
        FromDate: Serenity.DateEditor;
        ToDate: Serenity.DateEditor;
        CreatedDate: Serenity.DateEditor;
        CreatedBy: Serenity.LookupEditor;
        SalaryPayments: SalaryPaymentEditor;
    }
    class SalaryStructureForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    interface SalaryStructureRow {
        Id?: number;
        FromDate?: string;
        ToDate?: string;
        CreatedDate?: string;
        CreatedBy?: number;
        TenantId?: number;
        SalaryPayments?: SalaryPaymentsRow[];
        CreatedByCode?: string;
        CreatedByStaffName?: string;
        CreatedByContactId?: number;
        CreatedByIsTeacher?: boolean;
        CreatedByRemarks?: string;
        CreatedByDailyWage?: number;
        CreatedByTenantId?: number;
        CreatedByJoiningDate?: string;
        CreatedByQualification?: string;
        CreatedBySalaryAmount?: number;
        CreatedByDaysCount?: number;
    }
    namespace SalaryStructureRow {
        const idProperty = "Id";
        const localTextPrefix = "Transactions.SalaryStructure";
        const deletePermission = "Transactions:Salary";
        const insertPermission = "Transactions:Salary";
        const readPermission = "Transactions:Salary";
        const updatePermission = "Transactions:Salary";
        const enum Fields {
            Id = "Id",
            FromDate = "FromDate",
            ToDate = "ToDate",
            CreatedDate = "CreatedDate",
            CreatedBy = "CreatedBy",
            TenantId = "TenantId",
            SalaryPayments = "SalaryPayments",
            CreatedByCode = "CreatedByCode",
            CreatedByStaffName = "CreatedByStaffName",
            CreatedByContactId = "CreatedByContactId",
            CreatedByIsTeacher = "CreatedByIsTeacher",
            CreatedByRemarks = "CreatedByRemarks",
            CreatedByDailyWage = "CreatedByDailyWage",
            CreatedByTenantId = "CreatedByTenantId",
            CreatedByJoiningDate = "CreatedByJoiningDate",
            CreatedByQualification = "CreatedByQualification",
            CreatedBySalaryAmount = "CreatedBySalaryAmount",
            CreatedByDaysCount = "CreatedByDaysCount"
        }
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    namespace SalaryStructureService {
        const baseUrl = "Transactions/SalaryStructure";
        function Create(request: Serenity.SaveRequest<SalaryStructureRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SalaryStructureRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SalaryStructureRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalaryStructureRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetSalary(request: SalaryRequest, onSuccess?: (response: System.Collections.Generic.List<SalaryResponse>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transactions/SalaryStructure/Create",
            Update = "Transactions/SalaryStructure/Update",
            Delete = "Transactions/SalaryStructure/Delete",
            Retrieve = "Transactions/SalaryStructure/Retrieve",
            List = "Transactions/SalaryStructure/List",
            GetSalary = "Transactions/SalaryStructure/GetSalary"
        }
    }
}
declare namespace BitPro.SchoolMate.Transactions {
}
declare namespace BitPro.SchoolMate.Transactions {
}
declare namespace BitPro.SchoolMate.Transactions {
    interface StudentMarksDetailsForm {
        PromotionDetailId: DepartmentEditor;
        Mark: Serenity.DecimalEditor;
        Description: Serenity.StringEditor;
    }
    class StudentMarksDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    interface StudentMarksDetailsRow {
        Id?: number;
        StudentMarksSubjectsId?: number;
        PromotionDetailId?: number;
        Mark?: number;
        Description?: string;
        StudentMarksSubjectsStudentMarksId?: number;
        StudentMarksSubjectsCourseSubjectId?: number;
        PromotionDetailPromotionId?: number;
        PromotionDetailStudentId?: number;
        PromotionDetailIsCompleted?: boolean;
        PromotionDetailPromotionType?: number;
        Student?: string;
    }
    namespace StudentMarksDetailsRow {
        const idProperty = "Id";
        const nameProperty = "Description";
        const localTextPrefix = "Transactions.StudentMarksDetails";
        const deletePermission = "Transactions:StudentMarks";
        const insertPermission = "Transactions:StudentMarks";
        const readPermission = "Transactions:StudentMarks";
        const updatePermission = "Transactions:StudentMarks";
        const enum Fields {
            Id = "Id",
            StudentMarksSubjectsId = "StudentMarksSubjectsId",
            PromotionDetailId = "PromotionDetailId",
            Mark = "Mark",
            Description = "Description",
            StudentMarksSubjectsStudentMarksId = "StudentMarksSubjectsStudentMarksId",
            StudentMarksSubjectsCourseSubjectId = "StudentMarksSubjectsCourseSubjectId",
            PromotionDetailPromotionId = "PromotionDetailPromotionId",
            PromotionDetailStudentId = "PromotionDetailStudentId",
            PromotionDetailIsCompleted = "PromotionDetailIsCompleted",
            PromotionDetailPromotionType = "PromotionDetailPromotionType",
            Student = "Student"
        }
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    namespace StudentMarksDetailsService {
        const baseUrl = "Transactions/StudentMarksDetails";
        function Create(request: Serenity.SaveRequest<StudentMarksDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StudentMarksDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StudentMarksDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StudentMarksDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transactions/StudentMarksDetails/Create",
            Update = "Transactions/StudentMarksDetails/Update",
            Delete = "Transactions/StudentMarksDetails/Delete",
            Retrieve = "Transactions/StudentMarksDetails/Retrieve",
            List = "Transactions/StudentMarksDetails/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    interface StudentMarksForm {
        AcadamicYearId: Serenity.LookupEditor;
        ExamId: Serenity.LookupEditor;
        ExamDate: Serenity.DateEditor;
        PromotionId: Serenity.LookupEditor;
        Subjects: StudentMarksSubjectsEditor;
    }
    class StudentMarksForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    interface StudentMarksRow {
        Id?: number;
        AcadamicYearId?: number;
        ExamId?: number;
        ExamDate?: string;
        PromotionId?: number;
        Subjects?: StudentMarksSubjectsRow[];
        TenantId?: number;
        AcadamicYearCode?: string;
        AcadamicYearPeriodFrom?: string;
        AcadamicYearPeriodTo?: string;
        AcadamicYearDescription?: string;
        AcadamicYearTenantId?: number;
        ExamCode?: string;
        ExamExamName?: string;
        ExamAcadamicYearId?: number;
        ExamTenantId?: number;
        PromotionFromCourse?: number;
        PromotionToCourse?: number;
        PromotionCreatedBy?: number;
        PromotionCreatedDate?: string;
        PromotionTenantId?: number;
        PromotionAcadamicYearId?: number;
        PromotionJoiningDivisionId?: number;
    }
    namespace StudentMarksRow {
        const idProperty = "Id";
        const localTextPrefix = "Transactions.StudentMarks";
        const deletePermission = "Transactions:StudentMarks";
        const insertPermission = "Transactions:StudentMarks";
        const readPermission = "Transactions:StudentMarks";
        const updatePermission = "Transactions:StudentMarks";
        const enum Fields {
            Id = "Id",
            AcadamicYearId = "AcadamicYearId",
            ExamId = "ExamId",
            ExamDate = "ExamDate",
            PromotionId = "PromotionId",
            Subjects = "Subjects",
            TenantId = "TenantId",
            AcadamicYearCode = "AcadamicYearCode",
            AcadamicYearPeriodFrom = "AcadamicYearPeriodFrom",
            AcadamicYearPeriodTo = "AcadamicYearPeriodTo",
            AcadamicYearDescription = "AcadamicYearDescription",
            AcadamicYearTenantId = "AcadamicYearTenantId",
            ExamCode = "ExamCode",
            ExamExamName = "ExamExamName",
            ExamAcadamicYearId = "ExamAcadamicYearId",
            ExamTenantId = "ExamTenantId",
            PromotionFromCourse = "PromotionFromCourse",
            PromotionToCourse = "PromotionToCourse",
            PromotionCreatedBy = "PromotionCreatedBy",
            PromotionCreatedDate = "PromotionCreatedDate",
            PromotionTenantId = "PromotionTenantId",
            PromotionAcadamicYearId = "PromotionAcadamicYearId",
            PromotionJoiningDivisionId = "PromotionJoiningDivisionId"
        }
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    namespace StudentMarksService {
        const baseUrl = "Transactions/StudentMarks";
        function Create(request: Serenity.SaveRequest<StudentMarksRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StudentMarksRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StudentMarksRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StudentMarksRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetMaximumMark(request: MaximumMarkRequest, onSuccess?: (response: MaximumMarkResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transactions/StudentMarks/Create",
            Update = "Transactions/StudentMarks/Update",
            Delete = "Transactions/StudentMarks/Delete",
            Retrieve = "Transactions/StudentMarks/Retrieve",
            List = "Transactions/StudentMarks/List",
            GetMaximumMark = "Transactions/StudentMarks/GetMaximumMark"
        }
    }
}
declare namespace BitPro.SchoolMate.Transactions {
}
declare namespace BitPro.SchoolMate.Transactions {
    interface StudentMarksSubjectsForm {
        CourseSubjectId: Serenity.LookupEditor;
        StudentMarksDetails: StudentMarksEditor;
    }
    class StudentMarksSubjectsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    interface StudentMarksSubjectsRow {
        Id?: number;
        StudentMarksId?: number;
        CourseSubjectId?: number;
        StudentMarksDetails?: StudentMarksDetailsRow[];
        StudentMarksAcadamicYearId?: number;
        StudentMarksExamId?: number;
        StudentMarksExamDate?: string;
        StudentMarksPromotionId?: number;
        CourseSubjectCourseId?: number;
        CourseSubjectSubjectId?: number;
        CourseSubjectMaxMarks?: number;
        CourseSubject?: string;
    }
    namespace StudentMarksSubjectsRow {
        const idProperty = "Id";
        const localTextPrefix = "Transactions.StudentMarksSubjects";
        const deletePermission = "Transactions:StudentMarks";
        const insertPermission = "Transactions:StudentMarks";
        const readPermission = "Transactions:StudentMarks";
        const updatePermission = "Transactions:StudentMarks";
        const enum Fields {
            Id = "Id",
            StudentMarksId = "StudentMarksId",
            CourseSubjectId = "CourseSubjectId",
            StudentMarksDetails = "StudentMarksDetails",
            StudentMarksAcadamicYearId = "StudentMarksAcadamicYearId",
            StudentMarksExamId = "StudentMarksExamId",
            StudentMarksExamDate = "StudentMarksExamDate",
            StudentMarksPromotionId = "StudentMarksPromotionId",
            CourseSubjectCourseId = "CourseSubjectCourseId",
            CourseSubjectSubjectId = "CourseSubjectSubjectId",
            CourseSubjectMaxMarks = "CourseSubjectMaxMarks",
            CourseSubject = "CourseSubject"
        }
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    namespace StudentMarksSubjectsService {
        const baseUrl = "Transactions/StudentMarksSubjects";
        function Create(request: Serenity.SaveRequest<StudentMarksSubjectsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StudentMarksSubjectsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StudentMarksSubjectsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StudentMarksSubjectsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transactions/StudentMarksSubjects/Create",
            Update = "Transactions/StudentMarksSubjects/Update",
            Delete = "Transactions/StudentMarksSubjects/Delete",
            Retrieve = "Transactions/StudentMarksSubjects/Retrieve",
            List = "Transactions/StudentMarksSubjects/List"
        }
    }
}
declare namespace BitPro.SchoolMate.Transactions {
}
declare namespace BitPro.SchoolMate.Transactions {
    interface TransportForm {
        Name: Serenity.StringEditor;
        Code: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
    }
    class TransportForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    interface TransportRow {
        Id?: number;
        Name?: string;
        Code?: string;
        Address?: string;
        TenantId?: number;
    }
    namespace TransportRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Transactions.Transport";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Code = "Code",
            Address = "Address",
            TenantId = "TenantId"
        }
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    namespace TransportService {
        const baseUrl = "Transactions/Transport";
        function Create(request: Serenity.SaveRequest<TransportRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TransportRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TransportRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TransportRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Transactions/Transport/Create",
            Update = "Transactions/Transport/Update",
            Delete = "Transactions/Transport/Delete",
            Retrieve = "Transactions/Transport/Retrieve",
            List = "Transactions/Transport/List"
        }
    }
}
declare namespace BitPro.SchoolMate {
    interface TransportationFeeRequest extends Serenity.ServiceRequest {
        studentid?: number;
    }
}
declare namespace BitPro.SchoolMate {
    interface UpdateListAttendanceRequest extends Serenity.ServiceRequest {
        date?: SchoolMate.Transactions.AttandanceRow[];
        status?: number;
    }
}
declare namespace BitPro.SchoolMate {
    interface VoucherNoRequest extends Serenity.ServiceRequest {
        vouchertype?: number;
    }
}
declare namespace BitPro.SchoolMate {
    interface VoucherNoResponse extends Serenity.ServiceResponse {
        voucherno?: number;
    }
}
declare namespace BitPro.SchoolMate {
    enum VoucherTypes {
        Value1 = 1,
        Value2 = 2,
        Value3 = 3
    }
}
declare namespace BitPro.SchoolMate.Web.Modules.Common {
    interface DivisionsByPromotionRequest extends Serenity.ServiceRequest {
        promotionid?: number;
    }
}
declare namespace BitPro.SchoolMate.Web.Modules.Common {
    interface SendWhatsappMessageRequest extends Serenity.ServiceRequest {
        PhoneNumber?: string;
        Message?: string;
    }
}
declare namespace BitPro.SchoolMate.LanguageList {
    function getValue(): string[][];
}
declare namespace BitPro.SchoolMate.ScriptInitialization {
}
declare namespace BitPro.SchoolMate.Accounts {
    class AccountsDialog extends Serenity.EntityDialog<AccountsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AccountsForm;
    }
}
declare namespace BitPro.SchoolMate.Accounts {
    class AccountsGrid extends Serenity.EntityGrid<AccountsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AccountsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Accounts {
    class ContraDialog extends Serenity.EntityDialog<ContraRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ContraForm;
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace BitPro.SchoolMate.Accounts {
    class ContraGrid extends Serenity.EntityGrid<ContraRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ContraDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Accounts {
    class PaymentDialog extends Serenity.EntityDialog<PaymentRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PaymentForm;
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace BitPro.SchoolMate.Accounts {
    class PaymentGrid extends Serenity.EntityGrid<PaymentRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PaymentDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Accounts {
    class ReceiptDialog extends Serenity.EntityDialog<ReceiptRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ReceiptForm;
        protected afterLoadEntity(): void;
        private getNextNumber;
        protected updateInterface(): void;
    }
}
declare namespace BitPro.SchoolMate.Accounts {
    class ReceiptGrid extends Serenity.EntityGrid<ReceiptRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReceiptDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace BitPro.SchoolMate.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace BitPro.SchoolMate.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace BitPro.SchoolMate.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace BitPro.SchoolMate.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare var Vue: any;
declare namespace BitPro.SchoolMate.Administration {
    class SergenPanel extends Serenity.Widget<any> {
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Administration {
    class SettingsDialog extends Serenity.EntityDialog<SettingsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SettingsForm;
        protected updateInterface(): void;
    }
}
declare namespace BitPro.SchoolMate.Administration {
    class SettingsGrid extends Serenity.EntityGrid<SettingsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SettingsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected updateInterface(): void;
    }
}
declare namespace BitPro.SchoolMate.Administration {
    class SystemSettingsDialog extends Serenity.EntityDialog<SystemSettingsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SystemSettingsForm;
    }
}
declare namespace BitPro.SchoolMate.Administration {
    class SystemSettingsGrid extends Serenity.EntityGrid<SystemSettingsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SystemSettingsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace BitPro.SchoolMate.Administration {
    class TenantDialog extends Serenity.EntityDialog<TenantRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TenantForm;
    }
}
declare namespace BitPro.SchoolMate.Administration {
    class TenantGrid extends Serenity.EntityGrid<TenantRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TenantDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace BitPro.SchoolMate.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
        protected getPropertyItems(): Serenity.PropertyItem[];
    }
}
declare namespace BitPro.SchoolMate.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace BitPro.SchoolMate.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace BitPro.SchoolMate.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace BitPro.SchoolMate.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace BitPro.SchoolMate.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace BitPro.SchoolMate {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace BitPro.SchoolMate.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace BitPro.SchoolMate.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace BitPro.SchoolMate.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace BitPro.SchoolMate.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace BitPro.SchoolMate.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace BitPro.SchoolMate.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace BitPro.SchoolMate {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace BitPro.SchoolMate.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace BitPro.SchoolMate.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace BitPro.SchoolMate.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace BitPro.SchoolMate.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace BitPro.SchoolMate.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace BitPro.SchoolMate.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace BitPro.SchoolMate.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace BitPro.SchoolMate.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class AcadamicYearDialog extends Serenity.EntityDialog<AcadamicYearRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AcadamicYearForm;
        protected afterLoadEntity(): void;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class AcadamicYearGrid extends Serenity.EntityGrid<AcadamicYearRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AcadamicYearDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Master {
    class AccountHeadsDialog extends Serenity.EntityDialog<AccountHeadsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AccountHeadsForm;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class AccountHeadsGrid extends Serenity.EntityGrid<AccountHeadsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AccountHeadsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private treeMixin;
        constructor(container: JQuery);
        protected usePager(): boolean;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class AreasDialog extends Serenity.EntityDialog<AreasRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AreasForm;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class AreasGrid extends Serenity.EntityGrid<AreasRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AreasDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Master {
    class CampusesDialog extends Serenity.EntityDialog<CampusesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CampusesForm;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class CampusesGrid extends Serenity.EntityGrid<CampusesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CampusesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Master {
    class ContactsDialog extends Serenity.EntityDialog<ContactsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ContactsForm;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class ContactsGrid extends Serenity.EntityGrid<ContactsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ContactsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace BitPro.SchoolMate.Master {
    class CountriesDialog extends Serenity.EntityDialog<CountriesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CountriesForm;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class CountriesGrid extends Serenity.EntityGrid<CountriesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CountriesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Master {
    class CourseDivisionsDialog extends Common.GridEditorDialog<CourseDivisionsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: CourseDivisionsForm;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class CourseDivisionsEditor extends Common.GridEditorBase<CourseDivisionsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CourseDivisionsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class CourseDivisionsGrid extends Serenity.EntityGrid<CourseDivisionsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CourseDivisionsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Master {
    class CourseFeeDialog extends Serenity.EntityDialog<CourseFeeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CourseFeeForm;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class CourseFeeGrid extends Serenity.EntityGrid<CourseFeeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CourseFeeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Master {
    class CoursesDialog extends Serenity.EntityDialog<CoursesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CoursesForm;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class CoursesGrid extends Serenity.EntityGrid<CoursesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CoursesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Master {
    class CourseSubjectEditor extends Common.GridEditorBase<CourseSubjectsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CourseSubjectsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class CourseSubjectsDialog extends Common.GridEditorDialog<CourseSubjectsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: CourseSubjectsForm;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class CourseSubjectsGrid extends Serenity.EntityGrid<CourseSubjectsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CourseSubjectsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Master {
    class CurrenciesDialog extends Serenity.EntityDialog<CurrenciesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CurrenciesForm;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class CurrenciesGrid extends Serenity.EntityGrid<CurrenciesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CurrenciesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Master {
    class DivisionsDialog extends Common.GridEditorDialog<DivisionsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: DivisionsForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class DivisionsEditor extends Common.GridEditorBase<DivisionsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DivisionsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class DivisionsGrid extends Serenity.EntityGrid<DivisionsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DivisionsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Master {
    class DivisionStudentsCheckDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        myFunc2(): void;
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
    interface RolePermissionDialogOptions {
        divid?: number;
        prormotionid?: number;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class DivisionStudentsDialog extends Serenity.EntityDialog<DivisionStudentsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DivisionStudentsForm;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class DivisionStudentsGrid extends Serenity.EntityGrid<DivisionStudentsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DivisionStudentsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Master {
    class ExamCoursesDialog extends Common.GridEditorDialog<ExamCoursesRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ExamCoursesForm;
        protected updateInterface(): void;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class ExamCoursesEditor extends Common.GridEditorBase<ExamCoursesRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ExamCoursesDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class ExamCoursesGrid extends Serenity.EntityGrid<ExamCoursesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ExamCoursesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Master {
    class ExamMaxMarksDialog extends Common.GridEditorDialog<ExamMaxMarksRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ExamMaxMarksForm;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class ExamMaxMarksEditor extends Common.GridEditorBase<ExamMaxMarksRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ExamMaxMarksDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class ExamMaxMarksGrid extends Serenity.EntityGrid<ExamMaxMarksRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ExamMaxMarksDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Master {
    class ExamsDialog extends Serenity.EntityDialog<ExamsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ExamsForm;
        constructor();
        protected setvalue(): void;
        protected updateInterface(): void;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class ExamsGrid extends Serenity.EntityGrid<ExamsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ExamsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Master {
    class FeeExcemptionsDialog extends Common.GridEditorDialog<FeeExcemptionsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: FeeExcemptionsForm;
        constructor();
        protected afterLoadEntity(): void;
        private updateTotalFreight;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class FeeExcemptionsGrid extends Serenity.EntityGrid<FeeExcemptionsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FeeExcemptionsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Master {
    class FeesDialog extends Serenity.EntityDialog<FeesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: FeesForm;
        constructor();
        protected afterLoadEntity(): void;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class FeesGrid extends Serenity.EntityGrid<FeesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FeesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Master {
    class FeeStructureDialog extends Common.GridEditorDialog<FeeStructureRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: FeeStructureForm;
        constructor();
        protected afterLoadEntity(): void;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class FeeStructureEditor extends Common.GridEditorBase<FeeStructureRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FeeStructureDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected layout(): void;
        private number;
        protected onViewSubmit(): boolean;
        protected enableFiltering(): boolean;
        protected getDefaultSortBy(): string[];
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class FeeStructureGrid extends Serenity.EntityGrid<FeeStructureRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FeeStructureDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Master {
    class FeeTermsDialog extends Common.GridEditorDialog<FeeTermsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: FeeTermsForm;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class FeeTermsEditor extends Common.GridEditorBase<FeeTermsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FeeTermsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class FeeTermsGrid extends Serenity.EntityGrid<FeeTermsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FeeTermsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Master {
    class StaffsDialog extends Serenity.EntityDialog<StaffsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: StaffsForm;
        constructor();
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
        protected setCode(): void;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class StaffsGrid extends Serenity.EntityGrid<StaffsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StaffsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Master {
    class StaffSubjectsDialog extends Serenity.EntityDialog<StaffSubjectsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: StaffSubjectsForm;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class StaffSubjectsGrid extends Serenity.EntityGrid<StaffSubjectsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StaffSubjectsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Master {
    class StudentCurrentCoursesDialog extends Serenity.EntityDialog<StudentCurrentCoursesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: StudentCurrentCoursesForm;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class StudentCurrentCoursesGrid extends Serenity.EntityGrid<StudentCurrentCoursesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StudentCurrentCoursesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Master {
    class GenreListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class PromotionFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class StudentsDialog extends Serenity.EntityDialog<StudentsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: StudentsForm;
        constructor();
        protected setCode(): void;
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
        private getNextNumber;
        /**
         * Overriding this method is optional to customize cloned entity
         */
        protected getCloningEntity(): StudentsRow;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class StudentsGrid extends Serenity.EntityGrid<StudentsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StudentsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace BitPro.SchoolMate.Master {
    class SubjectsDialog extends Serenity.EntityDialog<SubjectsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SubjectsForm;
    }
}
declare namespace BitPro.SchoolMate.Master {
    class SubjectsGrid extends Serenity.EntityGrid<SubjectsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SubjectsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class AdmissionDialog extends Serenity.EntityDialog<AdmissionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AdmissionForm;
        protected updateInterface(): void;
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class AdmissionGrid extends Serenity.EntityGrid<AdmissionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AdmissionDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class AttandanceDialog extends Serenity.EntityDialog<AttandanceRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AttandanceForm;
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class AttandanceGrid extends Serenity.EntityGrid<AttandanceRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AttandanceDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare var Morris: any;
declare namespace BitPro.SchoolMate {
    class AttendanceEdit extends Serenity.TemplatedDialog<any> {
        private areaChart;
        static initializePage(): void;
        static getdat(val: any): void;
        static UpdateAll(list: any): void;
        protected onDialogOpen(): void;
        protected arrange(): void;
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class CourseExitDialog extends Serenity.EntityDialog<CourseExitRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CourseExitForm;
        constructor();
        protected updateInterface(): void;
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class CourseExitGrid extends Serenity.EntityGrid<CourseExitRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CourseExitDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class CourseExitDetailsDialog extends Common.GridEditorDialog<CourseExitDetailsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: CourseExitDetailsForm;
        constructor();
        protected afterLoadEntity(): void;
        protected beforeLoadEntity(entity: any): void;
        promotionid: number;
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class CourseExitDetailsGrid extends Serenity.EntityGrid<CourseExitDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CourseExitDetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class CourseExitEditor extends Common.GridEditorBase<CourseExitDetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CourseExitDetailsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        promotionid: number;
        validateEntity(row: any, id: any): boolean;
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class FeeAllocationDialog extends Common.GridEditorDialog<FeeAllocationRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: FeeAllocationForm;
        constructor();
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class FeeAllocationEditor extends Common.GridEditorBase<FeeAllocationRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FeeAllocationDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class FeeAllocationGrid extends Serenity.EntityGrid<FeeAllocationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FeeAllocationDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate {
    class FeeStructureLookupEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, any> {
        myId: number;
        feestructures: any;
        feestuctureid: number;
        stucturename: string;
        constructor(container: JQuery, opt: Serenity.LookupEditorOptions);
        protected getLookupKey(): string;
        protected getItems(lookup: Q.Lookup<any>): any;
        private buildLookupKey;
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class FeeAllocationTranportationDialog extends Common.GridEditorDialog<FeeAllocationTranportationRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: FeeAllocationTranportationForm;
        constructor();
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class FeeAllocationTranportationEditor extends Common.GridEditorBase<FeeAllocationTranportationRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FeeAllocationTranportationDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class FeeAllocationTranportationGrid extends Serenity.EntityGrid<FeeAllocationTranportationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FeeAllocationTranportationDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class FeeCollectionDialog extends Serenity.EntityDialog<FeeCollectionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: FeeCollectionForm;
        constructor();
        private SetFeeDetails;
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class FeeCollectionGrid extends Serenity.EntityGrid<FeeCollectionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FeeCollectionDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace BitPro.SchoolMate {
    class MyLookupEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, any> {
        myId: number;
        studentcourse: any;
        isedit: boolean;
        constructor(container: JQuery, opt: Serenity.LookupEditorOptions);
        protected getLookupKey(): string;
        protected getItems(lookup: Q.Lookup<any>): any;
        private buildLookupKey;
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class PromotionDetailsDialog extends Serenity.EntityDialog<PromotionDetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PromotionDetailsForm;
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class PromotionDetailsGrid extends Serenity.EntityGrid<PromotionDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PromotionDetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class PromotionStudentsDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        myFunc2(): void;
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
    interface RolePermissionDialogOptions {
        fromcourseid?: number;
        tocourseid?: number;
        promotionid?: number;
        acadamicyearid?: number;
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class PromotionsDialog extends Serenity.EntityDialog<PromotionsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PromotionsForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class PromotionsGrid extends Serenity.EntityGrid<PromotionsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PromotionsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare var Morris: any;
declare namespace BitPro.SchoolMate {
    class FeeDue extends Serenity.TemplatedDialog<any> {
        private areaChart;
        static initializePage(): void;
        static sendwhatsappmessage(number: any, message: any): void;
        static UpdateAll(list: any): void;
        protected onDialogOpen(): void;
        protected arrange(): void;
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare var Morris: any;
declare namespace BitPro.SchoolMate {
    class ProgressCard extends Serenity.TemplatedDialog<any> {
        private areaChart;
        static initializePage(): void;
        static UpdateAll(list: any): void;
        protected onDialogOpen(): void;
        protected arrange(): void;
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class SalaryPaymentEditor extends Common.GridEditorBase<SalaryPaymentsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SalaryPaymentsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class SalaryPaymentsDialog extends Common.GridEditorDialog<SalaryPaymentsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: SalaryPaymentsForm;
        constructor();
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class SalaryPaymentsGrid extends Serenity.EntityGrid<SalaryPaymentsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SalaryPaymentsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class SalaryStructureDialog extends Serenity.EntityDialog<SalaryStructureRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SalaryStructureForm;
        constructor();
        private setdata;
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class SalaryStructureGrid extends Serenity.EntityGrid<SalaryStructureRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SalaryStructureDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class StudentMarksDialog extends Serenity.EntityDialog<StudentMarksRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: StudentMarksForm;
        constructor();
        protected updateInterface(): void;
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class StudentMarksGrid extends Serenity.EntityGrid<StudentMarksRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StudentMarksDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class DepartmentEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, PromotionDetailsRow> {
        constructor(hidden: JQuery);
        protected getLookupKey(): string;
        protected getItemText(item: any, lookup: any): any;
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class StudentMarksDetailsDialog extends Common.GridEditorDialog<StudentMarksDetailsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: StudentMarksDetailsForm;
        constructor();
        maxmark: number;
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class StudentMarksDetailsGrid extends Serenity.EntityGrid<StudentMarksDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StudentMarksDetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class StudentMarksEditor extends Common.GridEditorBase<StudentMarksDetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StudentMarksDetailsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        maxmark: number;
        validateEntity(row: any, id: any): boolean;
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class StudentMarksSubjectsDialog extends Common.GridEditorDialog<StudentMarksSubjectsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: StudentMarksSubjectsForm;
        constructor();
        protected updateInterface(): void;
        promotionid: number;
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class StudentMarksSubjectsEditor extends Common.GridEditorBase<StudentMarksSubjectsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StudentMarksSubjectsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        promotionid: number;
        validateEntity(row: any, id: any): boolean;
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class StudentMarksSubjectsGrid extends Serenity.EntityGrid<StudentMarksSubjectsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StudentMarksSubjectsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class TransportDialog extends Serenity.EntityDialog<TransportRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TransportForm;
    }
}
declare namespace BitPro.SchoolMate.Transactions {
    class TransportGrid extends Serenity.EntityGrid<TransportRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TransportDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace BitPro.SchoolMate.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace BitPro.SchoolMate.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
