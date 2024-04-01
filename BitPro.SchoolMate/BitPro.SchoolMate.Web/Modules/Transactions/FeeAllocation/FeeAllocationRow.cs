
namespace BitPro.SchoolMate.Transactions.Entities
{
    using BitPro.SchoolMate.Master.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[FeeAllocation]")]
    [DisplayName("Fee Allocation"), InstanceName("Fee Allocation")]
    [ReadPermission("Transactions:FeeCollection")]
    [ModifyPermission("Transactions:FeeCollection")]
    public sealed class FeeAllocationRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Fee Collection"), NotNull, ForeignKey("[dbo].[FeeCollection]", "Id"), LeftJoin("jFeeCollection")]
        public Int32? FeeCollectionId
        {
            get { return Fields.FeeCollectionId[this]; }
            set { Fields.FeeCollectionId[this] = value; }
        }

        [DisplayName("Course Fee"), NotNull, ForeignKey("[dbo].[CourseFee]", "Id"), LeftJoin("jCourseFee")]
        [LookupEditor(typeof(CourseFeeRow))]
        public Int32? CourseFeeId
        {
            get { return Fields.CourseFeeId[this]; }
            set { Fields.CourseFeeId[this] = value; }
        }

        [DisplayName("Fee Strcture"), NotNull, ForeignKey("[dbo].[FeeStructure]", "Id"), LeftJoin("jFeeStrcture")]
        [LookupEditor(typeof(FeeStructureRow))]
        public Int32? FeeStrctureId
        {
            get { return Fields.FeeStrctureId[this]; }
            set { Fields.FeeStrctureId[this] = value; }
        }

        [DisplayName("Collected"), Size(18), Scale(3), NotNull]
        public Decimal? Collected
        {
            get { return Fields.Collected[this]; }
            set { Fields.Collected[this] = value; }
        }

        [DisplayName("Balance"), Size(18), Scale(3), NotNull]
        public Decimal? Balance
        {
            get { return Fields.Balance[this]; }
            set { Fields.Balance[this] = value; }
        }

        [DisplayName("Fee Collection Student Id"), Expression("jFeeCollection.[StudentId]")]
        public Int32? FeeCollectionStudentId
        {
            get { return Fields.FeeCollectionStudentId[this]; }
            set { Fields.FeeCollectionStudentId[this] = value; }
        }

        [DisplayName("Fee Collection Course Id"), Expression("jFeeCollection.[CourseId]")]
        public Int32? FeeCollectionCourseId
        {
            get { return Fields.FeeCollectionCourseId[this]; }
            set { Fields.FeeCollectionCourseId[this] = value; }
        }

        [DisplayName("Fee Collection Pay Date"), Expression("jFeeCollection.[PayDate]")]
        public DateTime? FeeCollectionPayDate
        {
            get { return Fields.FeeCollectionPayDate[this]; }
            set { Fields.FeeCollectionPayDate[this] = value; }
        }

        [DisplayName("Fee Collection Total Amount"), Expression("jFeeCollection.[TotalAmount]")]
        public Decimal? FeeCollectionTotalAmount
        {
            get { return Fields.FeeCollectionTotalAmount[this]; }
            set { Fields.FeeCollectionTotalAmount[this] = value; }
        }

        [DisplayName("Fee Collection Tenant Id"), Expression("jFeeCollection.[TenantId]")]
        public Int32? FeeCollectionTenantId
        {
            get { return Fields.FeeCollectionTenantId[this]; }
            set { Fields.FeeCollectionTenantId[this] = value; }
        }

        [DisplayName("Course Fee Course Id"), Expression("jCourseFee.[CourseId]")]
        public Int32? CourseFeeCourseId
        {
            get { return Fields.CourseFeeCourseId[this]; }
            set { Fields.CourseFeeCourseId[this] = value; }
        }

        [DisplayName("Course Fee Fee Id"), Expression("jCourseFee.[FeeId]"), ForeignKey("[dbo].[Fees]", "Id"), LeftJoin("jFee")]
        public Int32? CourseFeeFeeId
        {
            get { return Fields.CourseFeeFeeId[this]; }
            set { Fields.CourseFeeFeeId[this] = value; }
        }

        [DisplayName("Fee Strcture Fee Term Id"), Expression("jFeeStrcture.[FeeTermId]"), ForeignKey("[dbo].[FeeTerms]", "Id"), LeftJoin("jFeeTerm")]
        public Int32? FeeStrctureFeeTermId
        {
            get { return Fields.FeeStrctureFeeTermId[this]; }
            set { Fields.FeeStrctureFeeTermId[this] = value; }
        }

        [DisplayName("Fee Strcture Fee Amount"), Expression("jFeeStrcture.[FeeAmount]")]
        public Decimal? FeeStrctureFeeAmount
        {
            get { return Fields.FeeStrctureFeeAmount[this]; }
            set { Fields.FeeStrctureFeeAmount[this] = value; }
        }

        [DisplayName("Fee Strcture Fee Id"), Expression("jFeeStrcture.[FeeId]")]
        public Int32? FeeStrctureFeeId
        {
            get { return Fields.FeeStrctureFeeId[this]; }
            set { Fields.FeeStrctureFeeId[this] = value; }
        }

        [DisplayName("Fee Strcture Acadamic Year Id"), Expression("jFeeStrcture.[AcadamicYearId]")]
        public Int32? FeeStrctureAcadamicYearId
        {
            get { return Fields.FeeStrctureAcadamicYearId[this]; }
            set { Fields.FeeStrctureAcadamicYearId[this] = value; }
        }

        [DisplayName("Fee Strcture Tenant Id"), Expression("jFeeStrcture.[TenantId]")]
        public Int32? FeeStrctureTenantId
        {
            get { return Fields.FeeStrctureTenantId[this]; }
            set { Fields.FeeStrctureTenantId[this] = value; }
        }
        [DisplayName("Term Name"), Expression("jFeeTerm.[TermName]"), MinSelectLevel(SelectLevel.List)]
        public String TermName
        {
            get { return Fields.TermName[this]; }
            set { Fields.TermName[this] = value; }
        }
        [DisplayName("Fee Name"), Expression("jFee.[Code]"), MinSelectLevel(SelectLevel.List)]
        public String FeeCode
        {
            get { return Fields.FeeCode[this]; }
            set { Fields.FeeCode[this] = value; }
        }
        [DisplayName("Receipts"), MasterDetailRelation(foreignKey: "EntityId"), NotMapped, MinSelectLevel(SelectLevel.List)]
        public List<Accounts.Entities.ReceiptRow> Receipts
        {
            get { return Fields.Receipts[this]; }
            set { Fields.Receipts[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FeeAllocationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field FeeCollectionId;
            public Int32Field CourseFeeId;
            public Int32Field FeeStrctureId;
            public DecimalField Collected;
            public DecimalField Balance;
            public RowListField<Accounts.Entities.ReceiptRow> Receipts;

            public Int32Field FeeCollectionStudentId;
            public Int32Field FeeCollectionCourseId;
            public DateTimeField FeeCollectionPayDate;
            public DecimalField FeeCollectionTotalAmount;
            public Int32Field FeeCollectionTenantId;

            public StringField FeeCode;

            public Int32Field CourseFeeCourseId;
            public Int32Field CourseFeeFeeId;

            public StringField TermName;

            public Int32Field FeeStrctureFeeTermId;
            public DecimalField FeeStrctureFeeAmount;
            public Int32Field FeeStrctureFeeId;
            public Int32Field FeeStrctureAcadamicYearId;
            public Int32Field FeeStrctureTenantId;
        }
    }
}
