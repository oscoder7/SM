
namespace BitPro.SchoolMate.Accounts.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Accounts"), TableName("[dbo].[JournalEntries]")]
    [DisplayName("Receipt"), InstanceName("Receipt")]
    [ReadPermission("Accounts:Receipt")]
    [ModifyPermission("Accounts:ReceiptModify")]
    [InsertPermission("Accounts:ReceiptCreate")]
    [DeletePermission("Accounts:ReceiptDelete")]
    [UpdatePermission("Accounts:ReceiptUpdate")]
    public sealed class ReceiptRow : Row, IIdRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("V Type"), NotNull]
        public VoucherTypes? VType
        {
            get { return (VoucherTypes?)Fields.VType[this]; }
            set { Fields.VType[this] = (int?)value; }
        }

        [DisplayName("V No"), NotNull,ReadOnly(true)]
        public Int32? VNo
        {
            get { return Fields.VNo[this]; }
            set { Fields.VNo[this] = value; }
        }

        [DisplayName("Ledger"), NotNull, ForeignKey("[dbo].[AccountHeads]", "ID"), LeftJoin("jDebitAccountHead"), TextualField("DebitAccountHeadDescription")]
        [LookupEditor(typeof(Master.Entities.AccountHeadsRow))]
        public Int32? DebitAccountHeadId
        {
            get { return Fields.DebitAccountHeadId[this]; }
            set { Fields.DebitAccountHeadId[this] = value; }
        }

        [DisplayName("Ledger"), NotNull, ForeignKey("[dbo].[AccountHeads]", "ID"), LeftJoin("jCreditAccountHead"), TextualField("CreditAccountHeadDescription")]
        [LookupEditor(typeof(Master.Entities.AccountHeadsRow))]
        public Int32? CreditAccountHeadId
        {
            get { return Fields.CreditAccountHeadId[this]; }
            set { Fields.CreditAccountHeadId[this] = value; }
        }

        [DisplayName("Amount"), Size(18), Scale(3), NotNull]
        public Decimal? Amount
        {
            get { return Fields.Amount[this]; }
            set { Fields.Amount[this] = value; }
        }

        [DisplayName("Payment Method"), NotNull]
        public AccountTypes? PaymentMethod
        {
            get { return (AccountTypes?)Fields.PaymentMethod[this]; }
            set { Fields.PaymentMethod[this] = (int?)value; }
        }

        [DisplayName("Affected Account"),NotNull, ForeignKey("[dbo].[Accounts]", "Id"), LeftJoin("jDebitAccount"), TextualField("DebitAccountAccountNo")]
        [LookupEditor(typeof(AccountsRow), CascadeField = "Type", CascadeFrom = "PaymentMethod")]
        public Int32? DebitAccountId
        {
            get { return Fields.DebitAccountId[this]; }
            set { Fields.DebitAccountId[this] = value; }
        }
        [DisplayName("Party"), ForeignKey("[dbo].[Contacts]", "Id"), LeftJoin("jContacts")]
        [LookupEditor(typeof(Master.Entities.ContactsRow))]
        public Int32? ContactId
        {
            get { return Fields.ContactId[this]; }
            set { Fields.ContactId[this] = value; }
        }
        [DisplayName("Affected Account"), ForeignKey("[dbo].[Accounts]", "Id"), LeftJoin("jCreditAccount"), TextualField("CreditAccountAccountNo"),Required]
        [LookupEditor(typeof(AccountsRow),CascadeField = "Type", CascadeFrom = "PaymentMethod")]
        public Int32? CreditAccountId
        {
            get { return Fields.CreditAccountId[this]; }
            set { Fields.CreditAccountId[this] = value; }
        }

        [DisplayName("Ledger"), Expression("jDebitAccountHead.[Description]")]
        public String DebitAccountHeadDescription
        {
            get { return Fields.DebitAccountHeadDescription[this]; }
            set { Fields.DebitAccountHeadDescription[this] = value; }
        }

        [DisplayName("Debit Account Head Parent Head Id"), Expression("jDebitAccountHead.[ParentHeadId]")]
        public Int32? DebitAccountHeadParentHeadId
        {
            get { return Fields.DebitAccountHeadParentHeadId[this]; }
            set { Fields.DebitAccountHeadParentHeadId[this] = value; }
        }

        [DisplayName("Debit Account Head Code"), Expression("jDebitAccountHead.[Code]")]
        public String DebitAccountHeadCode
        {
            get { return Fields.DebitAccountHeadCode[this]; }
            set { Fields.DebitAccountHeadCode[this] = value; }
        }

        [DisplayName("Debit Account Head Tenant Id"), Expression("jDebitAccountHead.[TenantId]")]
        public Int32? DebitAccountHeadTenantId
        {
            get { return Fields.DebitAccountHeadTenantId[this]; }
            set { Fields.DebitAccountHeadTenantId[this] = value; }
        }

        [DisplayName("Debit Account Head Ledger Type"), Expression("jDebitAccountHead.[LedgerType]")]
        public Int32? DebitAccountHeadLedgerType
        {
            get { return Fields.DebitAccountHeadLedgerType[this]; }
            set { Fields.DebitAccountHeadLedgerType[this] = value; }
        }

        [DisplayName("Credit Account Head Description"), Expression("jCreditAccountHead.[Description]")]
        public String CreditAccountHeadDescription
        {
            get { return Fields.CreditAccountHeadDescription[this]; }
            set { Fields.CreditAccountHeadDescription[this] = value; }
        }

        [DisplayName("Credit Account Head Parent Head Id"), Expression("jCreditAccountHead.[ParentHeadId]")]
        public Int32? CreditAccountHeadParentHeadId
        {
            get { return Fields.CreditAccountHeadParentHeadId[this]; }
            set { Fields.CreditAccountHeadParentHeadId[this] = value; }
        }

        [DisplayName("Credit Account Head Code"), Expression("jCreditAccountHead.[Code]")]
        public String CreditAccountHeadCode
        {
            get { return Fields.CreditAccountHeadCode[this]; }
            set { Fields.CreditAccountHeadCode[this] = value; }
        }

        [DisplayName("Credit Account Head Tenant Id"), Expression("jCreditAccountHead.[TenantId]")]
        public Int32? CreditAccountHeadTenantId
        {
            get { return Fields.CreditAccountHeadTenantId[this]; }
            set { Fields.CreditAccountHeadTenantId[this] = value; }
        }

        [DisplayName("Credit Account Head Ledger Type"), Expression("jCreditAccountHead.[LedgerType]")]
        public Int32? CreditAccountHeadLedgerType
        {
            get { return Fields.CreditAccountHeadLedgerType[this]; }
            set { Fields.CreditAccountHeadLedgerType[this] = value; }
        }

        [DisplayName("Debit Account Type"), Expression("jDebitAccount.[Type]")]
        public Int32? DebitAccountType
        {
            get { return Fields.DebitAccountType[this]; }
            set { Fields.DebitAccountType[this] = value; }
        }

        [DisplayName("Affected Account No"), Expression("jDebitAccount.[AccountNo]")]
        public String DebitAccountAccountNo
        {
            get { return Fields.DebitAccountAccountNo[this]; }
            set { Fields.DebitAccountAccountNo[this] = value; }
        }

        [DisplayName("Debit Account Account Head Id"), Expression("jDebitAccount.[AccountHeadId]")]
        public Int32? DebitAccountAccountHeadId
        {
            get { return Fields.DebitAccountAccountHeadId[this]; }
            set { Fields.DebitAccountAccountHeadId[this] = value; }
        }

        [DisplayName("Credit Account Type"), Expression("jCreditAccount.[Type]")]
        public Int32? CreditAccountType
        {
            get { return Fields.CreditAccountType[this]; }
            set { Fields.CreditAccountType[this] = value; }
        }

        [DisplayName("Affected Account No"), Expression("jCreditAccount.[AccountNo]")]
        public String CreditAccountAccountNo
        {
            get { return Fields.CreditAccountAccountNo[this]; }
            set { Fields.CreditAccountAccountNo[this] = value; }
        }

        [DisplayName("Credit Account Account Head Id"), Expression("jCreditAccount.[AccountHeadId]")]
        public Int32? CreditAccountAccountHeadId
        {
            get { return Fields.CreditAccountAccountHeadId[this]; }
            set { Fields.CreditAccountAccountHeadId[this] = value; }
        }
        [DisplayName("Tenant Id"), NotNull]
        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }
        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }
        [DisplayName("Remarks"), TextAreaEditor]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ReceiptRow()
            : base(Fields)
        {
        }
        [DisplayName("Trx Date"), NotNull,DefaultValue("today")]
        public DateTime? TrxDate
        {
            get { return Fields.TrxDate[this]; }
            set { Fields.TrxDate[this] = value; }
        }
        [DisplayName("Entity Type"), Size(100), NotNull]
        public String EntityType
        {
            get { return Fields.EntityType[this]; }
            set { Fields.EntityType[this] = value; }
        }
        [DisplayName("Entity Id"), Column("EntityID"), Size(100)]
        public Int32? EntityId
        {
            get { return Fields.EntityId[this]; }
            set { Fields.EntityId[this] = value; }
        }
        [DisplayName("TranportationEntityId")]
        public Int32? TranportationEntityId
        {
            get { return Fields.TranportationEntityId[this]; }
            set { Fields.TranportationEntityId[this] = value; }
        }

        [DisplayName("Attachments")]
        [MultipleFileUploadEditor(FilenameFormat = "JV/Attachments/~", ScaleWidth = 800, ScaleHeight = 600,MaxSize = 2097152)]
        public String Attachments
        {
            get { return Fields.Attachments[this]; }
            set { Fields.Attachments[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field VType;
            public Int32Field VNo;
            public Int32Field DebitAccountHeadId;
            public Int32Field CreditAccountHeadId;
            public DecimalField Amount;
            public Int32Field PaymentMethod;
            public Int32Field DebitAccountId;
            public Int32Field CreditAccountId;
            public Int32Field ContactId;
            public DateTimeField TrxDate;
            public readonly Int32Field TenantId;
            public StringField Remarks;
            public StringField EntityType;
            public Int32Field EntityId;
            public Int32Field TranportationEntityId;

            public StringField DebitAccountHeadDescription;
            public Int32Field DebitAccountHeadParentHeadId;
            public StringField DebitAccountHeadCode;
            public Int32Field DebitAccountHeadTenantId;
            public Int32Field DebitAccountHeadLedgerType;

            public StringField CreditAccountHeadDescription;
            public Int32Field CreditAccountHeadParentHeadId;
            public StringField CreditAccountHeadCode;
            public Int32Field CreditAccountHeadTenantId;
            public Int32Field CreditAccountHeadLedgerType;

            public Int32Field DebitAccountType;
            public StringField DebitAccountAccountNo;
            public Int32Field DebitAccountAccountHeadId;

            public Int32Field CreditAccountType;
            public StringField CreditAccountAccountNo;
            public Int32Field CreditAccountAccountHeadId;


            public StringField Attachments;
        }
    }
}
