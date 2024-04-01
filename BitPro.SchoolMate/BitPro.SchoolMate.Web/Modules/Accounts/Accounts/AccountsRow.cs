
namespace BitPro.SchoolMate.Accounts.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Accounts"), TableName("[dbo].[Accounts]")]
    [DisplayName("Accounts"), InstanceName("Accounts")]
    [ReadPermission("Accounts:Accounts")]
    [ModifyPermission("Accounts:Accounts")]
    [LookupScript("Accounts.Accounts",Permission ="*", LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class AccountsRow : Row, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Type"), NotNull,LookupInclude]
        public AccountTypes? Type
        {
            get { return (AccountTypes?)Fields.Type[this]; }
            set { Fields.Type[this] = (int?)value; }
        }

        [DisplayName("Account No"), Size(500), NotNull, QuickSearch]
        public String AccountNo
        {
            get { return Fields.AccountNo[this]; }
            set { Fields.AccountNo[this] = value; }
        }

        [DisplayName("Account Head"), NotNull, ForeignKey("[dbo].[AccountHeads]", "ID"), LeftJoin("jAccountHead"), TextualField("AccountHeadDescription")]
        [LookupEditor(typeof(Master.Entities.AccountHeadsRow))]
        public Int32? AccountHeadId
        {
            get { return Fields.AccountHeadId[this]; }
            set { Fields.AccountHeadId[this] = value; }
        }

        [DisplayName("Account Head Description"), Expression("jAccountHead.[Description]")]
        public String AccountHeadDescription
        {
            get { return Fields.AccountHeadDescription[this]; }
            set { Fields.AccountHeadDescription[this] = value; }
        }

        [DisplayName("Account Head Parent Head Id"), Expression("jAccountHead.[ParentHeadId]")]
        public Int32? AccountHeadParentHeadId
        {
            get { return Fields.AccountHeadParentHeadId[this]; }
            set { Fields.AccountHeadParentHeadId[this] = value; }
        }

        [DisplayName("Account Head Code"), Expression("jAccountHead.[Code]")]
        public String AccountHeadCode
        {
            get { return Fields.AccountHeadCode[this]; }
            set { Fields.AccountHeadCode[this] = value; }
        }

        [DisplayName("Account Head Tenant Id"), Expression("jAccountHead.[TenantId]")]
        public Int32? AccountHeadTenantId
        {
            get { return Fields.AccountHeadTenantId[this]; }
            set { Fields.AccountHeadTenantId[this] = value; }
        }

        [DisplayName("Account Head Ledger Type"), Expression("jAccountHead.[LedgerType]")]
        public Int32? AccountHeadLedgerType
        {
            get { return Fields.AccountHeadLedgerType[this]; }
            set { Fields.AccountHeadLedgerType[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.AccountNo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AccountsRow()
            : base(Fields)
        {
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
        [DisplayName("IsDefault")]
        public Boolean? IsDefault
        {
            get { return Fields.IsDefault[this]; }
            set { Fields.IsDefault[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field Type;
            public StringField AccountNo;
            public Int32Field AccountHeadId;
            public readonly Int32Field TenantId;
            public BooleanField IsDefault;


            public StringField AccountHeadDescription;
            public Int32Field AccountHeadParentHeadId;
            public StringField AccountHeadCode;
            public Int32Field AccountHeadTenantId;
            public Int32Field AccountHeadLedgerType;
        }
    }
}
