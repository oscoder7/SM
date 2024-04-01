
namespace BitPro.SchoolMate.Master.Entities
{
    using BitPro.SchoolMate.Transactions.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[Divisions]")]
    [DisplayName("Divisions"), InstanceName("Divisions")]
    [ReadPermission("Transactions:Promotions")]
    [ModifyPermission("Transactions:Promotions")]
    [LookupScript("Master.Divisions", Permission = "*", LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class DivisionsRow : Row, IIdRow, INameRow,IMultiTenantRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        //[DisplayName("Course"), NotNull, ForeignKey("[dbo].[Courses]", "Id"), LeftJoin("jCourse"), TextualField("CourseCode")]
        //[LookupEditor(typeof(CoursesRow),InplaceAdd =true),LookupInclude]
        //public Int32? CourseId
        //{
        //    get { return Fields.CourseId[this]; }
        //    set { Fields.CourseId[this] = value; }
        //}

        [DisplayName("Teacher"), ForeignKey("[dbo].[Staffs]", "Id"), LeftJoin("jTeacher"), TextualField("TeacherCode")]
        [LookupEditor(typeof(StaffsRow), InplaceAdd = true, FilterField = "IsTeacher", FilterValue = true)]
        public Int32? TeacherId
        {
            get { return Fields.TeacherId[this]; }
            set { Fields.TeacherId[this] = value; }
        }

        [DisplayName("Division Code"), Size(100), NotNull, QuickSearch]
        public String DivisionCode
        {
            get { return Fields.DivisionCode[this]; }
            set { Fields.DivisionCode[this] = value; }
        }

        [DisplayName("Acadamic Year"), NotNull, ForeignKey("[dbo].[AcadamicYear]", "Id"), LeftJoin("jAcadamicYear"), TextualField("AcadamicYearCode")]
        [LookupEditor(typeof(AcadamicYearRow), InplaceAdd = true)]
        public Int32? AcadamicYearId
        {
            get { return Fields.AcadamicYearId[this]; }
            set { Fields.AcadamicYearId[this] = value; }
        }

        [DisplayName("Tenant Id"), NotNull]
        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        //[DisplayName("Course Code"), Expression("jCourse.[Code]")]
        //public String CourseCode
        //{
        //    get { return Fields.CourseCode[this]; }
        //    set { Fields.CourseCode[this] = value; }
        //}

        //[DisplayName("Course Course Name"), Expression("jCourse.[CourseName]")]
        //public String CourseCourseName
        //{
        //    get { return Fields.CourseCourseName[this]; }
        //    set { Fields.CourseCourseName[this] = value; }
        //}

        //[DisplayName("Course Active"), Expression("jCourse.[Active]")]
        //public Boolean? CourseActive
        //{
        //    get { return Fields.CourseActive[this]; }
        //    set { Fields.CourseActive[this] = value; }
        //}

        //[DisplayName("Course Non Acadamic"), Expression("jCourse.[NonAcadamic]")]
        //public Boolean? CourseNonAcadamic
        //{
        //    get { return Fields.CourseNonAcadamic[this]; }
        //    set { Fields.CourseNonAcadamic[this] = value; }
        //}

        //[DisplayName("Course Tenant Id"), Expression("jCourse.[TenantId]")]
        //public Int32? CourseTenantId
        //{
        //    get { return Fields.CourseTenantId[this]; }
        //    set { Fields.CourseTenantId[this] = value; }
        //}

        [DisplayName("Teacher Code"), Expression("jTeacher.[Code]")]
        public String TeacherCode
        {
            get { return Fields.TeacherCode[this]; }
            set { Fields.TeacherCode[this] = value; }
        }
        //[DisplayName("Teacher FullName"), Expression("jTeacher.[FullName]"),MinSelectLevel(SelectLevel.List)]
        //public String FullName
        //{
        //    get { return Fields.FullName[this]; }
        //    set { Fields.FullName[this] = value; }
        //}
        [DisplayName("Teacher Name"), Expression("jTeacher.[StaffName]"),LookupInclude,MinSelectLevel(SelectLevel.List)]
        public String TeacherStaffName
        {
            get { return Fields.TeacherStaffName[this]; }
            set { Fields.TeacherStaffName[this] = value; }
        }

        [DisplayName("Teacher Contact Id"), Expression("jTeacher.[ContactId]")]
        public Int32? TeacherContactId
        {
            get { return Fields.TeacherContactId[this]; }
            set { Fields.TeacherContactId[this] = value; }
        }

        [DisplayName("Teacher Is Teacher"), Expression("jTeacher.[IsTeacher]")]
        public Boolean? TeacherIsTeacher
        {
            get { return Fields.TeacherIsTeacher[this]; }
            set { Fields.TeacherIsTeacher[this] = value; }
        }

        [DisplayName("Teacher Remarks"), Expression("jTeacher.[Remarks]")]
        public String TeacherRemarks
        {
            get { return Fields.TeacherRemarks[this]; }
            set { Fields.TeacherRemarks[this] = value; }
        }

        [DisplayName("Teacher Daily Wage"), Expression("jTeacher.[DailyWage]")]
        public Decimal? TeacherDailyWage
        {
            get { return Fields.TeacherDailyWage[this]; }
            set { Fields.TeacherDailyWage[this] = value; }
        }

        [DisplayName("Teacher Tenant Id"), Expression("jTeacher.[TenantId]")]
        public Int32? TeacherTenantId
        {
            get { return Fields.TeacherTenantId[this]; }
            set { Fields.TeacherTenantId[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DivisionCode; }
        }
        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }
        [DisplayName("Course"), NotNull, ForeignKey("[dbo].[Promotions]", "Id"), LeftJoin("jPromotion")]
        [LookupEditor(typeof(PromotionsRow), CascadeField = "AcadamicYearId", CascadeFrom = "AcadamicYearId")]
        public Int32? PromotionId
        {
            get { return Fields.PromotionId[this]; }
            set { Fields.PromotionId[this] = value; }
        }
        [DisplayName("Division Students"), MasterDetailRelation(foreignKey: "DivisionId"), NotMapped]
        public List<DivisionStudentsRow> DivisionStudents
        {
            get { return Fields.DivisionStudents[this]; }
            set { Fields.DivisionStudents[this] = value; }
        }
        public static readonly RowFields Fields = new RowFields().Init();

        public DivisionsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            //public Int32Field CourseId;
            public Int32Field TeacherId;
            public StringField DivisionCode;
            public Int32Field AcadamicYearId;
            public  readonly Int32Field TenantId;
            public Int32Field PromotionId;

            public RowListField<DivisionStudentsRow> DivisionStudents;

            //public StringField CourseCode;
            //public StringField CourseCourseName;
            //public BooleanField CourseActive;
            //public BooleanField CourseNonAcadamic;
            //public Int32Field CourseTenantId;

            public StringField TeacherCode;
            public StringField TeacherStaffName;
            public Int32Field TeacherContactId;
            public BooleanField TeacherIsTeacher;
            public StringField TeacherRemarks;
            public DecimalField TeacherDailyWage;
            public Int32Field TeacherTenantId;
            //public StringField FullName;

            public StringField AcadamicYearCode;
            public DateTimeField AcadamicYearPeriodFrom;
            public DateTimeField AcadamicYearPeriodTo;
            public StringField AcadamicYearDescription;
            public Int32Field AcadamicYearTenantId;
        }
    }
}
