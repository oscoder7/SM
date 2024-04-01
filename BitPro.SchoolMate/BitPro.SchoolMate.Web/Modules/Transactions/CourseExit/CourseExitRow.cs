
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

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[CourseExit]")]
    [DisplayName("Course Exit"), InstanceName("Course Exit")]
    [ReadPermission("Transactions:CourseExit")]
    [ModifyPermission("Transactions:CourseExit")]
    public sealed class CourseExitRow : Row, IIdRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Academic Year"), NotNull, ForeignKey("[dbo].[AcadamicYear]", "Id"), LeftJoin("jAcadamicYear"), TextualField("AcadamicYearCode")]
        [LookupEditor(typeof(AcadamicYearRow))]
        public Int32? AcadamicYearId
        {
            get { return Fields.AcadamicYearId[this]; }
            set { Fields.AcadamicYearId[this] = value; }
        }

        [DisplayName("Course"), NotNull, ForeignKey("[dbo].[Promotions]", "Id"), LeftJoin("jPromotion")]
        [LookupEditor(typeof(PromotionsRow), CascadeField = "AcadamicYearId", CascadeFrom = "AcadamicYearId")]
        public Int32? PromotionId
        {
            get { return Fields.PromotionId[this]; }
            set { Fields.PromotionId[this] = value; }
        }

        [DisplayName("Exit Type"), NotNull]

        public CourseExitTypes? ExitType
        {
            get { return (CourseExitTypes?)Fields.ExitType[this]; }
            set { Fields.ExitType[this] = (int?)value; }
        }

        [DisplayName("Exit Date"), NotNull]
        public DateTime? ExitDate
        {
            get { return Fields.ExitDate[this]; }
            set { Fields.ExitDate[this] = value; }
        }

        [DisplayName("Acadamic Year Code"), Expression("jAcadamicYear.[Code]")]
        public String AcadamicYearCode
        {
            get { return Fields.AcadamicYearCode[this]; }
            set { Fields.AcadamicYearCode[this] = value; }
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

        [DisplayName("Acadamic Year Tenant Id"), Expression("jAcadamicYear.[TenantId]")]
        public Int32? AcadamicYearTenantId
        {
            get { return Fields.AcadamicYearTenantId[this]; }
            set { Fields.AcadamicYearTenantId[this] = value; }
        }

        [DisplayName("Promotion From Course"), Expression("jPromotion.[FromCourse]")]
        public Int32? PromotionFromCourse
        {
            get { return Fields.PromotionFromCourse[this]; }
            set { Fields.PromotionFromCourse[this] = value; }
        }

        [DisplayName("Promotion To Course"), Expression("jPromotion.[ToCourse]"), ForeignKey("[dbo].[Courses]", "Id"), LeftJoin("jToCourses")]
        public Int32? PromotionToCourse
        {
            get { return Fields.PromotionToCourse[this]; }
            set { Fields.PromotionToCourse[this] = value; }
        }

        [DisplayName("Promotion Created By"), Expression("jPromotion.[CreatedBy]")]
        public Int32? PromotionCreatedBy
        {
            get { return Fields.PromotionCreatedBy[this]; }
            set { Fields.PromotionCreatedBy[this] = value; }
        }
        [DisplayName("Course"), Expression("jToCourses.[CourseName]")]
        public String ToCourse
        {
            get { return Fields.ToCourse[this]; }
            set { Fields.ToCourse[this] = value; }
        }
        [DisplayName("Promotion Created Date"), Expression("jPromotion.[CreatedDate]")]
        public DateTime? PromotionCreatedDate
        {
            get { return Fields.PromotionCreatedDate[this]; }
            set { Fields.PromotionCreatedDate[this] = value; }
        }

        [DisplayName("Promotion Tenant Id"), Expression("jPromotion.[TenantId]")]
        public Int32? PromotionTenantId
        {
            get { return Fields.PromotionTenantId[this]; }
            set { Fields.PromotionTenantId[this] = value; }
        }

        [DisplayName("Promotion Acadamic Year Id"), Expression("jPromotion.[AcadamicYearId]")]
        public Int32? PromotionAcadamicYearId
        {
            get { return Fields.PromotionAcadamicYearId[this]; }
            set { Fields.PromotionAcadamicYearId[this] = value; }
        }

        [DisplayName("Promotion Joining Division Id"), Expression("jPromotion.[JoiningDivisionId]")]
        public Int32? PromotionJoiningDivisionId
        {
            get { return Fields.PromotionJoiningDivisionId[this]; }
            set { Fields.PromotionJoiningDivisionId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CourseExitRow()
            : base(Fields)
        {
        }
        [DisplayName("Students"), MasterDetailRelation(foreignKey: "CourseExitId"), NotMapped]
        public List<CourseExitDetailsRow> Students
        {
            get { return Fields.Students[this]; }
            set { Fields.Students[this] = value; }
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
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field AcadamicYearId;
            public Int32Field PromotionId;
            public Int32Field ExitType;
            public DateTimeField ExitDate;
            public RowListField<CourseExitDetailsRow> Students;
            public readonly Int32Field TenantId;

            public StringField AcadamicYearCode;
            public DateTimeField AcadamicYearPeriodFrom;
            public DateTimeField AcadamicYearPeriodTo;
            public StringField AcadamicYearDescription;
            public Int32Field AcadamicYearTenantId;

            public Int32Field PromotionFromCourse;
            public Int32Field PromotionToCourse;
            public Int32Field PromotionCreatedBy;
            public DateTimeField PromotionCreatedDate;
            public Int32Field PromotionTenantId;
            public Int32Field PromotionAcadamicYearId;
            public Int32Field PromotionJoiningDivisionId;

            public StringField ToCourse;

        }
    }
}
