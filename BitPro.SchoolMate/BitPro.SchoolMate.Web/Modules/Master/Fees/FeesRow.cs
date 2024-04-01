
namespace BitPro.SchoolMate.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[Fees]")]
    [DisplayName("Fees"), InstanceName("Fees")]
    [ReadPermission("Master:Fees")]
    [ModifyPermission("Master:Fees")]
    [LookupScript("Master.Fees", Permission = "*", LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class FeesRow : Row, IIdRow, INameRow, IMultiTenantRow
     {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Code"), Size(200), NotNull, QuickSearch,LookupInclude]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }

        [DisplayName("Fee Name"), Size(200), LookupInclude, NotNull]
        public String FeeName
        {
            get { return Fields.FeeName[this]; }
            set { Fields.FeeName[this] = value; }
        }

        [DisplayName("Annual Fee"), LookupInclude, Size(18), Scale(3), NotNull]
        public Decimal? AnnualFee
        {
            get { return Fields.AnnualFee[this]; }
            set { Fields.AnnualFee[this] = value; }
        }


        [DisplayName("Tenant Id"), NotNull]
        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FullName; }
        }

        
        [LookupEditor(typeof(CoursesRow), Multiple = true), NotMapped]
        [LinkingSetRelation(typeof(CourseFeeRow), "FeeId", "CourseId")]
        [DisplayName("Course Fee")]
        public List<Int32> CourseFee
        {
            get { return Fields.CourseFee[this]; }
            set { Fields.CourseFee[this] = value; }
        }
        [DisplayName("Fee Structures"), MasterDetailRelation(foreignKey: "FeeId"), NotMapped]
        public List<FeeStructureRow> FeeStructures
        {
            get { return Fields.FeeStructures[this]; }
            set { Fields.FeeStructures[this] = value; }
        }
        [DisplayName("Ledger"), NotNull, ForeignKey("[dbo].[AccountHeads]", "ID"), LeftJoin("jDebitAccountHead"), TextualField("DebitAccountHeadDescription")]
        [LookupEditor(typeof(Master.Entities.AccountHeadsRow),InplaceAdd =true)]
        public Int32? DebitAccountHeadId
        {
            get { return Fields.DebitAccountHeadId[this]; }
            set { Fields.DebitAccountHeadId[this] = value; }
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
        public static readonly RowFields Fields = new RowFields().Init();

        public FeesRow()
            : base(Fields)
        {
        }
        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }
        [DisplayName("Is Tranportation"),LookupInclude]
        public Boolean? IsTranportation
        {
            get { return Fields.IsTranportation[this]; }
            set { Fields.IsTranportation[this] = value; }
        }
        [DisplayName("FullName"), QuickSearch, NotMapped, MinSelectLevel(SelectLevel.List), LookupInclude]
        [Expression("CONCAT(T0.[FeeName], CONCAT(' (', T0.[AnnualFee]),')')")]
        [Expression("(T0.FeeName || ' ' || T0.AnnualFee)", Dialect = "Sqlite")]
        public String FullName
        {
            get { return Fields.FullName[this]; }
            set { Fields.FullName[this] = value; }
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Code;
            public StringField FeeName;
            public DecimalField AnnualFee;
            public BooleanField IsTranportation;
            public ListField<Int32> CourseFee;
            public readonly Int32Field TenantId;
            public Int32Field DebitAccountHeadId;
            public StringField FullName;

            public StringField DebitAccountHeadDescription;
            public Int32Field DebitAccountHeadParentHeadId;
            public StringField DebitAccountHeadCode;
            public Int32Field DebitAccountHeadTenantId;
            public Int32Field DebitAccountHeadLedgerType;

            public RowListField<FeeStructureRow> FeeStructures;
        }
    }
}
