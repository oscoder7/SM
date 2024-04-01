
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

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[Promotions]")]
    [DisplayName("Promotions"), InstanceName("Promotions")]
    [ReadPermission("Transactions:Promotions")]
    [ModifyPermission("Transactions:Promotions")]
    [LookupScript("Transactions.Promotions", LookupType = typeof(MultiTenantRowLookupScript<>),Permission ="*")]
    public sealed class PromotionsRow : Row, IIdRow,INameRow,IMultiTenantRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("From Course"), ForeignKey("[dbo].[Courses]", "Id"), LeftJoin("jFromCourse"), TextualField("FromCourseCode")]
        [LookupEditor(typeof(CoursesRow))]
        public Int32? FromCourse
        {
            get { return Fields.FromCourse[this]; }
            set { Fields.FromCourse[this] = value; }
        }

        [DisplayName("To Course"), NotNull, ForeignKey("[dbo].[Courses]", "Id"), LeftJoin("jToCourse"), TextualField("ToCourseCode")]
        [LookupEditor(typeof(CoursesRow)),LookupInclude]
        public Int32? ToCourse
        {
            get { return Fields.ToCourse[this]; }
            set { Fields.ToCourse[this] = value; }
        }

        [DisplayName("Created By"), NotNull, ForeignKey("[dbo].[Staffs]", "Id"), LeftJoin("jCreatedBy"), TextualField("CreatedByCode")]
        [LookupEditor(typeof(StaffsRow))]
        public Int32? CreatedBy
        {
            get { return Fields.CreatedBy[this]; }
            set { Fields.CreatedBy[this] = value; }
        }

        [DisplayName("Created Date"), NotNull]
        public DateTime? CreatedDate
        {
            get { return Fields.CreatedDate[this]; }
            set { Fields.CreatedDate[this] = value; }
        }

        [DisplayName("Tenant Id"), NotNull]
        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        [DisplayName("From Course Code"), Expression("jFromCourse.[Code]")]
        public String FromCourseCode
        {
            get { return Fields.FromCourseCode[this]; }
            set { Fields.FromCourseCode[this] = value; }
        }

        [DisplayName("From Course Course Name"), Expression("jFromCourse.[CourseName]")]
        public String FromCourseCourseName
        {
            get { return Fields.FromCourseCourseName[this]; }
            set { Fields.FromCourseCourseName[this] = value; }
        }

        [DisplayName("From Course Active"), Expression("jFromCourse.[Active]")]
        public Boolean? FromCourseActive
        {
            get { return Fields.FromCourseActive[this]; }
            set { Fields.FromCourseActive[this] = value; }
        }

        [DisplayName("From Course Non Academic"), Expression("jFromCourse.[NonAcadamic]")]
        public Boolean? FromCourseNonAcadamic
        {
            get { return Fields.FromCourseNonAcadamic[this]; }
            set { Fields.FromCourseNonAcadamic[this] = value; }
        }

        [DisplayName("From Course Tenant Id"), Expression("jFromCourse.[TenantId]")]
        public Int32? FromCourseTenantId
        {
            get { return Fields.FromCourseTenantId[this]; }
            set { Fields.FromCourseTenantId[this] = value; }
        }

        [DisplayName("To Course Code"), Expression("jToCourse.[Code]")]
        public String ToCourseCode
        {
            get { return Fields.ToCourseCode[this]; }
            set { Fields.ToCourseCode[this] = value; }
        }

        [DisplayName("To Course Course Name"), Expression("jToCourse.[CourseName]")]
        public String ToCourseCourseName
        {
            get { return Fields.ToCourseCourseName[this]; }
            set { Fields.ToCourseCourseName[this] = value; }
        }

        [DisplayName("To Course Active"), Expression("jToCourse.[Active]")]
        public Boolean? ToCourseActive
        {
            get { return Fields.ToCourseActive[this]; }
            set { Fields.ToCourseActive[this] = value; }
        }

        [DisplayName("To Course Non Acadamic"), Expression("jToCourse.[NonAcadamic]")]
        public Boolean? ToCourseNonAcadamic
        {
            get { return Fields.ToCourseNonAcadamic[this]; }
            set { Fields.ToCourseNonAcadamic[this] = value; }
        }

        [DisplayName("To Course Tenant Id"), Expression("jToCourse.[TenantId]")]
        public Int32? ToCourseTenantId
        {
            get { return Fields.ToCourseTenantId[this]; }
            set { Fields.ToCourseTenantId[this] = value; }
        }

        [DisplayName("Created By Code"), Expression("jCreatedBy.[Code]")]
        public String CreatedByCode
        {
            get { return Fields.CreatedByCode[this]; }
            set { Fields.CreatedByCode[this] = value; }
        }

        [DisplayName("Created By Staff Name"), Expression("jCreatedBy.[StaffName]")]
        public String CreatedByStaffName
        {
            get { return Fields.CreatedByStaffName[this]; }
            set { Fields.CreatedByStaffName[this] = value; }
        }

        [DisplayName("Created By Contact Id"), Expression("jCreatedBy.[ContactId]")]
        public Int32? CreatedByContactId
        {
            get { return Fields.CreatedByContactId[this]; }
            set { Fields.CreatedByContactId[this] = value; }
        }

        [DisplayName("Created By Is Teacher"), Expression("jCreatedBy.[IsTeacher]")]
        public Boolean? CreatedByIsTeacher
        {
            get { return Fields.CreatedByIsTeacher[this]; }
            set { Fields.CreatedByIsTeacher[this] = value; }
        }

        [DisplayName("Created By Remarks"), Expression("jCreatedBy.[Remarks]")]
        public String CreatedByRemarks
        {
            get { return Fields.CreatedByRemarks[this]; }
            set { Fields.CreatedByRemarks[this] = value; }
        }

        [DisplayName("Created By Daily Wage"), Expression("jCreatedBy.[DailyWage]")]
        public Decimal? CreatedByDailyWage
        {
            get { return Fields.CreatedByDailyWage[this]; }
            set { Fields.CreatedByDailyWage[this] = value; }
        }
        [DisplayName("Academic Year"), NotNull, ForeignKey("[dbo].[AcadamicYear]", "Id"), LeftJoin("jAcadamicYear"), TextualField("AcadamicYearCode")]
        [LookupEditor(typeof(AcadamicYearRow), InplaceAdd = true),LookupInclude]
        public Int32? AcadamicYearId
        {
            get { return Fields.AcadamicYearId[this]; }
            set { Fields.AcadamicYearId[this] = value; }
        }
        [DisplayName("Created By Tenant Id"), Expression("jCreatedBy.[TenantId]")]
        public Int32? CreatedByTenantId
        {
            get { return Fields.CreatedByTenantId[this]; }
            set { Fields.CreatedByTenantId[this] = value; }
        }
        [DisplayName("Acadamic Year Code"), Expression("jAcadamicYear.[Code]"),QuickFilter,QuickSearch]
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
        //[DisplayName("Promotion Type"), NotNull, DefaultValue(1), QuickSearch, QuickFilter,ReadOnly(true)]
        //public PromotionTypes? PromotionType
        //{
        //    get { return (PromotionTypes?)Fields.PromotionType[this]; }
        //    set { Fields.PromotionType[this] = (int?)value; }
        //}
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }
        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }
        public static readonly RowFields Fields = new RowFields().Init();

        public PromotionsRow()
            : base(Fields)
        {
        }
        [DisplayName("Promotion Detail"), MasterDetailRelation(foreignKey: "PromotionId"), NotMapped]
        public List<PromotionDetailsRow> PromotionDetail
        {
            get { return Fields.PromotionDetail[this]; }
            set { Fields.PromotionDetail[this] = value; }
        }
        [DisplayName("Promotion Divisions"), MasterDetailRelation(foreignKey: "PromotionId"), NotMapped]
        public List<DivisionsRow> PromotionDivisions
        {
            get { return Fields.PromotionDivisions[this]; }
            set { Fields.PromotionDivisions[this] = value; }
        }
        StringField INameRow.NameField
        {
            get { return Fields.ToCourseCourseName; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field FromCourse;
            public Int32Field ToCourse;
            public Int32Field CreatedBy;
            public DateTimeField CreatedDate;
            public readonly Int32Field TenantId;
            public Int32Field AcadamicYearId;
            //public Int32Field PromotionType;
            public RowListField<PromotionDetailsRow> PromotionDetail;
            public RowListField<DivisionsRow> PromotionDivisions;


            public StringField FromCourseCode;
            public StringField FromCourseCourseName;
            public BooleanField FromCourseActive;
            public BooleanField FromCourseNonAcadamic;
            public Int32Field FromCourseTenantId;

            public StringField ToCourseCode;
            public StringField ToCourseCourseName;
            public BooleanField ToCourseActive;
            public BooleanField ToCourseNonAcadamic;
            public Int32Field ToCourseTenantId;

            public StringField CreatedByCode;
            public StringField CreatedByStaffName;
            public Int32Field CreatedByContactId;
            public BooleanField CreatedByIsTeacher;
            public StringField CreatedByRemarks;
            public DecimalField CreatedByDailyWage;
            public Int32Field CreatedByTenantId;

            public StringField AcadamicYearCode;
            public DateTimeField AcadamicYearPeriodFrom;
            public DateTimeField AcadamicYearPeriodTo;
            public StringField AcadamicYearDescription;
            public Int32Field AcadamicYearTenantId;
        }
    }
}
