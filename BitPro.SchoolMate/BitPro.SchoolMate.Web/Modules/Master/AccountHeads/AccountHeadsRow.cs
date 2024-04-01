
namespace BitPro.SchoolMate.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[AccountHeads]")]
    [DisplayName("Account Heads"), InstanceName("Account Heads")]
    [ReadPermission("Master:AccountHeads")]
    [ModifyPermission("Master:AccountHeads")]
    [LookupScript("Master.AccountHeads", Permission = "*", LookupType = typeof(MultiTenantRowLookupScript<>), Expiration = -1)]
    public sealed class AccountHeadsRow : Row, IIdRow, INameRow,IMultiTenantRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Description"), Size(200), NotNull, QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Parent Head"), ForeignKey("[dbo].[AccountHeads]", "ID"), LeftJoin("jParentHead"), TextualField("ParentHeadDescription")]
        [LookupEditor(typeof(AccountHeadsRow),InplaceAdd =true)]
        public Int32? ParentHeadId
        {
            get { return Fields.ParentHeadId[this]; }
            set { Fields.ParentHeadId[this] = value; }
        }

        [DisplayName("Code"), Size(200)]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }

        [DisplayName("Tenant Id"), NotNull]
        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        [DisplayName("Parent Head Description"), Expression("jParentHead.[Description]")]
        public String ParentHeadDescription
        {
            get { return Fields.ParentHeadDescription[this]; }
            set { Fields.ParentHeadDescription[this] = value; }
        }

        [DisplayName("Parent Head Parent Head Id"), Expression("jParentHead.[ParentHeadId]")]
        public Int32? ParentHeadParentHeadId
        {
            get { return Fields.ParentHeadParentHeadId[this]; }
            set { Fields.ParentHeadParentHeadId[this] = value; }
        }

        [DisplayName("Parent Head Code"), Expression("jParentHead.[Code]")]
        public String ParentHeadCode
        {
            get { return Fields.ParentHeadCode[this]; }
            set { Fields.ParentHeadCode[this] = value; }
        }

        [DisplayName("Parent Head Tenant Id"), Expression("jParentHead.[TenantId]")]
        public Int32? ParentHeadTenantId
        {
            get { return Fields.ParentHeadTenantId[this]; }
            set { Fields.ParentHeadTenantId[this] = value; }
        }
        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AccountHeadsRow()
            : base(Fields)
        {
        }
        [DisplayName("Ledger Type"), NotNull,QuickSearch,QuickFilter]
        public LedgerTypes? LedgerType
        {
            get { return (LedgerTypes?)Fields.LedgerType[this]; }
            set { Fields.LedgerType[this] = (int?)value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Description;
            public Int32Field ParentHeadId;
            public StringField Code;
            public readonly Int32Field TenantId;
            public Int32Field LedgerType;

            public StringField ParentHeadDescription;
            public Int32Field ParentHeadParentHeadId;
            public StringField ParentHeadCode;
            public Int32Field ParentHeadTenantId;
        }
    }
}
