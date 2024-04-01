
namespace BitPro.SchoolMate.Administration.Entities
{
    using BitPro.SchoolMate.Master.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Administration"), TableName("[dbo].[Settings]")]
    [DisplayName("System Settings"), InstanceName("System Settings")]
    [ReadPermission("*")]
    [ModifyPermission("Administration:Settings")]
    public sealed class SystemSettingsRow : Row, IIdRow,IMultiTenantRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Salary Account"), ForeignKey("[dbo].[AccountHeads]", "ID"), LeftJoin("jSalaryAccount"), TextualField("SalaryAccountDescription")]
        [LookupEditor(typeof(AccountHeadsRow))]
        public Int32? SalaryAccount
        {
            get { return Fields.SalaryAccount[this]; }
            set { Fields.SalaryAccount[this] = value; }
        }

        [DisplayName("Tenant Id"), NotNull]
        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        [DisplayName("Salary Account"), Expression("jSalaryAccount.[Description]")]
        public String SalaryAccountDescription
        {
            get { return Fields.SalaryAccountDescription[this]; }
            set { Fields.SalaryAccountDescription[this] = value; }
        }

        [DisplayName("Salary Account Parent Head Id"), Expression("jSalaryAccount.[ParentHeadId]")]
        public Int32? SalaryAccountParentHeadId
        {
            get { return Fields.SalaryAccountParentHeadId[this]; }
            set { Fields.SalaryAccountParentHeadId[this] = value; }
        }

        [DisplayName("Salary Account Code"), Expression("jSalaryAccount.[Code]")]
        public String SalaryAccountCode
        {
            get { return Fields.SalaryAccountCode[this]; }
            set { Fields.SalaryAccountCode[this] = value; }
        }

        [DisplayName("Salary Account Tenant Id"), Expression("jSalaryAccount.[TenantId]")]
        public Int32? SalaryAccountTenantId
        {
            get { return Fields.SalaryAccountTenantId[this]; }
            set { Fields.SalaryAccountTenantId[this] = value; }
        }

        [DisplayName("Salary Account Ledger Type"), Expression("jSalaryAccount.[LedgerType]")]
        public Int32? SalaryAccountLedgerType
        {
            get { return Fields.SalaryAccountLedgerType[this]; }
            set { Fields.SalaryAccountLedgerType[this] = value; }
        }

        [DisplayName("Student Code Length"), NotNull]
        public Int32? StudentCodeLength
        {
            get { return Fields.StudentCodeLength[this]; }
            set { Fields.StudentCodeLength[this] = value; }
        }
        [DisplayName("Satff Code Length"), NotNull]
        public Int32? SatffCodeLength
        {
            get { return Fields.SatffCodeLength[this]; }
            set { Fields.SatffCodeLength[this] = value; }
        }
        [DisplayName("Satff Code Prefix")]
        public String SatffCodePrefix
        {
            get { return Fields.SatffCodePrefix[this]; }
            set { Fields.SatffCodePrefix[this] = value; }
        }
        [DisplayName("Student Code Prefix")]
        public String StudentCodePrefix
        {
            get { return Fields.StudentCodePrefix[this]; }
            set { Fields.StudentCodePrefix[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SystemSettingsRow()
            : base(Fields)
        {
        }
        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field SalaryAccount;
            public Int32Field StudentCodeLength;
            public Int32Field SatffCodeLength;
            public StringField SatffCodePrefix;
            public StringField StudentCodePrefix;
            public readonly Int32Field TenantId;

            public StringField SalaryAccountDescription;
            public Int32Field SalaryAccountParentHeadId;
            public StringField SalaryAccountCode;
            public Int32Field SalaryAccountTenantId;
            public Int32Field SalaryAccountLedgerType;
        }
    }
}
