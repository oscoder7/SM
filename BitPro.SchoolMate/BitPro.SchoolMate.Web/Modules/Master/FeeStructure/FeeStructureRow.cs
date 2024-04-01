
namespace BitPro.SchoolMate.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[FeeStructure]")]
    [DisplayName("Fee Structure"), InstanceName("Fee Structure")]
    [ReadPermission("Master:FeeStructure")]
    [ModifyPermission("Master:FeeStructure")]
    [LookupScript("Master.FeeStructure", Permission = "*", LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class FeeStructureRow : Row, IIdRow,IMultiTenantRow,INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Fee Term"), NotNull, ForeignKey("[dbo].[FeeTerms]", "Id"), LeftJoin("jFeeTerm"), TextualField("FeeTermTermName")]
        [LookupEditor(typeof(FeeTermsRow), InplaceAdd = true,CascadeField = "AcadamicYearId",CascadeFrom = "AcadamicYearId"),LookupInclude]
        public Int32? FeeTermId
        {
            get { return Fields.FeeTermId[this]; }
            set { Fields.FeeTermId[this] = value; }
        }

        [DisplayName("Fee Amount"), Size(18), Scale(3), NotNull]
        public Decimal? FeeAmount
        {
            get { return Fields.FeeAmount[this]; }
            set { Fields.FeeAmount[this] = value; }
        }

        [DisplayName("Fee"), NotNull, ForeignKey("[dbo].[Fees]", "Id"), LeftJoin("jFee"), TextualField("FeeCode")]
        [LookupEditor(typeof(FeesRow), InplaceAdd = true)]
        public Int32? FeeId
        {
            get { return Fields.FeeId[this]; }
            set { Fields.FeeId[this] = value; }
        }

        [DisplayName("Academic Year"), NotNull, ForeignKey("[dbo].[AcadamicYear]", "Id"), LeftJoin("jAcadamicYear"), TextualField("AcadamicYearCode")]
        [LookupEditor(typeof(AcadamicYearRow), InplaceAdd = true)]
        public Int32? AcadamicYearId
        {
            get { return Fields.AcadamicYearId[this]; }
            set { Fields.AcadamicYearId[this] = value; }
        }

        [DisplayName("Term Name"), Expression("jFeeTerm.[TermName]"), MinSelectLevel(SelectLevel.List)]
        public String FeeTermTermName
        {
            get { return Fields.FeeTermTermName[this]; }
            set { Fields.FeeTermTermName[this] = value; }
        }

        [DisplayName("Fee Code"), Expression("jFee.[Code]")]
        public String FeeCode
        {
            get { return Fields.FeeCode[this]; }
            set { Fields.FeeCode[this] = value; }
        }

        [DisplayName("Fee Fee Name"), Expression("jFee.[FeeName]")]
        public String FeeFeeName
        {
            get { return Fields.FeeFeeName[this]; }
            set { Fields.FeeFeeName[this] = value; }
        }

        [DisplayName("Fee Annual Fee"), Expression("jFee.[AnnualFee]")]
        public Decimal? FeeAnnualFee
        {
            get { return Fields.FeeAnnualFee[this]; }
            set { Fields.FeeAnnualFee[this] = value; }
        }

        [DisplayName("Fee Tenant Id"), Expression("jFee.[TenantId]")]
        public Int32? FeeTenantId
        {
            get { return Fields.FeeTenantId[this]; }
            set { Fields.FeeTenantId[this] = value; }
        }

        [DisplayName("Acadamic Year"), Expression("jAcadamicYear.[Code]"), MinSelectLevel(SelectLevel.List),QuickFilter]
        public String AcadamicYearCode
        {
            get { return Fields.AcadamicYearCode[this]; }
            set { Fields.AcadamicYearCode[this] = value; }
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
        [DisplayName("Acadamic Year Period From"), Expression("jAcadamicYear.[PeriodFrom]")]
        public DateTime? AcadamicYearPeriodFrom
        {
            get { return Fields.AcadamicYearPeriodFrom[this]; }
            set { Fields.AcadamicYearPeriodFrom[this] = value; }
        }

        [DisplayName("Acadamic Year Period To"), Expression("jAcadamicYear.[PeriodTo]")]
        public DateTime? AcadamicYearPeriodTo
        {
            get { return Fields.AcadamicYearPeriodTo[this]; }
            set { Fields.AcadamicYearPeriodTo[this] = value; }
        }

        [DisplayName("Acadamic Year Description"), Expression("jAcadamicYear.[Description]")]
        public String AcadamicYearDescription
        {
            get { return Fields.AcadamicYearDescription[this]; }
            set { Fields.AcadamicYearDescription[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }
        StringField INameRow.NameField
        {
            get { return Fields.FeeTermTermName; }
        }
        public static readonly RowFields Fields = new RowFields().Init();

        public FeeStructureRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field FeeTermId;
            public DecimalField FeeAmount;
            public Int32Field FeeId;
            public Int32Field AcadamicYearId;

            public StringField FeeTermTermName;
            public readonly Int32Field TenantId;

            public StringField FeeCode;
            public StringField FeeFeeName;
            public DecimalField FeeAnnualFee;
            public Int32Field FeeTenantId;

            public StringField AcadamicYearCode;
            public DateTimeField AcadamicYearPeriodFrom;
            public DateTimeField AcadamicYearPeriodTo;
            public StringField AcadamicYearDescription;
        }
    }
}
