
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

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[FeeAllocationTranportation]")]
    [DisplayName("Fee Allocation Tranportation"), InstanceName("Fee Allocation Tranportation")]
    [ReadPermission("Transactions:FeeCollection")]
    [ModifyPermission("Transactions:FeeCollection")]
    public sealed class FeeAllocationTranportationRow : Row, IIdRow
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

        [DisplayName("Fee"), NotNull, ForeignKey("[dbo].[Fees]", "Id"), LeftJoin("jFee"), TextualField("FeeCode")]
        [LookupEditor(typeof(FeesRow))]
        public Int32? FeeId
        {
            get { return Fields.FeeId[this]; }
            set { Fields.FeeId[this] = value; }
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

        [DisplayName("Fee Collection Acadamic Year Id"), Expression("jFeeCollection.[AcadamicYearId]")]
        public Int32? FeeCollectionAcadamicYearId
        {
            get { return Fields.FeeCollectionAcadamicYearId[this]; }
            set { Fields.FeeCollectionAcadamicYearId[this] = value; }
        }

        [DisplayName("Fee Collection Promotion Detail Id"), Expression("jFeeCollection.[PromotionDetailId]")]
        public Int32? FeeCollectionPromotionDetailId
        {
            get { return Fields.FeeCollectionPromotionDetailId[this]; }
            set { Fields.FeeCollectionPromotionDetailId[this] = value; }
        }

        [DisplayName("Fee Collection Payment Method"), Expression("jFeeCollection.[PaymentMethod]")]
        public Int32? FeeCollectionPaymentMethod
        {
            get { return Fields.FeeCollectionPaymentMethod[this]; }
            set { Fields.FeeCollectionPaymentMethod[this] = value; }
        }

        [DisplayName("Fee Collection Account Id"), Expression("jFeeCollection.[AccountId]")]
        public Int32? FeeCollectionAccountId
        {
            get { return Fields.FeeCollectionAccountId[this]; }
            set { Fields.FeeCollectionAccountId[this] = value; }
        }

        //[DisplayName("Fee Code"), Expression("jFee.[Code]")]
        //public String FeeCode
        //{
        //    get { return Fields.FeeCode[this]; }
        //    set { Fields.FeeCode[this] = value; }
        //}

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

        [DisplayName("Fee Debit Account Head Id"), Expression("jFee.[DebitAccountHeadId]")]
        public Int32? FeeDebitAccountHeadId
        {
            get { return Fields.FeeDebitAccountHeadId[this]; }
            set { Fields.FeeDebitAccountHeadId[this] = value; }
        }

        [DisplayName("Fee Is Tranportation"), Expression("jFee.[IsTranportation]")]
        public Boolean? FeeIsTranportation
        {
            get { return Fields.FeeIsTranportation[this]; }
            set { Fields.FeeIsTranportation[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FeeAllocationTranportationRow()
            : base(Fields)
        {
        }
        [DisplayName("Fee Name"), Expression("jFee.[Code]"), MinSelectLevel(SelectLevel.List)]
        public String FeeCode
        {
            get { return Fields.FeeCode[this]; }
            set { Fields.FeeCode[this] = value; }
        }
        [DisplayName("Term Name"), Expression("jFeeTerm.[TermName]"), MinSelectLevel(SelectLevel.List)]
        public String TermName
        {
            get { return Fields.TermName[this]; }
            set { Fields.TermName[this] = value; }
        }
        [DisplayName("Receipts"), MasterDetailRelation(foreignKey: "TranportationEntityId"), NotMapped, MinSelectLevel(SelectLevel.List)]
        public List<Accounts.Entities.ReceiptRow> Receipts
        {
            get { return Fields.Receipts[this]; }
            set { Fields.Receipts[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field FeeCollectionId;
            public Int32Field FeeId;
            public Int32Field FeeStrctureId;
            public DecimalField Collected;
            public DecimalField Balance;
            public RowListField<Accounts.Entities.ReceiptRow> Receipts;

            public Int32Field FeeCollectionStudentId;
            public DateTimeField FeeCollectionPayDate;
            public DecimalField FeeCollectionTotalAmount;
            public Int32Field FeeCollectionTenantId;
            public Int32Field FeeCollectionAcadamicYearId;
            public Int32Field FeeCollectionPromotionDetailId;
            public Int32Field FeeCollectionPaymentMethod;
            public Int32Field FeeCollectionAccountId;

            public StringField FeeCode;
            public StringField FeeFeeName;
            public DecimalField FeeAnnualFee;
            public Int32Field FeeTenantId;
            public Int32Field FeeDebitAccountHeadId;
            public BooleanField FeeIsTranportation;

            public Int32Field FeeStrctureFeeTermId;
            public DecimalField FeeStrctureFeeAmount;
            public Int32Field FeeStrctureFeeId;
            public Int32Field FeeStrctureAcadamicYearId;
            public Int32Field FeeStrctureTenantId;

            public StringField TermName;
        }
    }
}
