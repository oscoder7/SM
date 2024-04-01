
namespace BitPro.SchoolMate.Transactions.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[PromotionDetails]")]
    [DisplayName("Promotion Details"), InstanceName("Promotion Details")]
    [ReadPermission("Transactions:Promotions")]
    [ModifyPermission("Transactions:Promotions")]
    [LookupScript("Transactions.PromotionDetailsLookup")]
    public sealed class PromotionDetailsLookupRow : Row, IIdRow,INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Promotion"), NotNull, ForeignKey("[dbo].[Promotions]", "Id"), LeftJoin("jPromotion"),LookupInclude]
        public Int32? PromotionId
        {
            get { return Fields.PromotionId[this]; }
            set { Fields.PromotionId[this] = value; }
        }

        [DisplayName("Student"), NotNull, ForeignKey("[dbo].[Students]", "Id"), LeftJoin("jStudent"), TextualField("StudentCode"),LookupInclude]
        public Int32? StudentId
        {
            get { return Fields.StudentId[this]; }
            set { Fields.StudentId[this] = value; }
        }

        [DisplayName("Is Completed"), NotNull,LookupInclude]
        public Boolean? IsCompleted
        {
            get { return Fields.IsCompleted[this]; }
            set { Fields.IsCompleted[this] = value; }
        }

        [DisplayName("Promotion From Course"), Expression("jPromotion.[FromCourse]")]
        public Int32? PromotionFromCourse
        {
            get { return Fields.PromotionFromCourse[this]; }
            set { Fields.PromotionFromCourse[this] = value; }
        }

        [DisplayName("Promotion To Course"), Expression("jPromotion.[ToCourse]"), ForeignKey("[dbo].[Courses]", "Id"), LeftJoin("jCourse")]
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
        [DisplayName("Promotion AcadamicYear Id"), Expression("jPromotion.[AcadamicYearId]"),LookupInclude]
        public Int32? PromotionAcadamicYearId
        {
            get { return Fields.PromotionAcadamicYearId[this]; }
            set { Fields.PromotionAcadamicYearId[this] = value; }
        }
        [DisplayName("Student Code"), Expression("jStudent.[Code]")]
        public String StudentCode
        {
            get { return Fields.StudentCode[this]; }
            set { Fields.StudentCode[this] = value; }
        }
        [DisplayName("Student Name"), Expression("jStudent.[StudentName]"), MinSelectLevel(SelectLevel.List), LookupInclude]
        public String StudentName
        {
            get { return Fields.StudentName[this]; }
            set { Fields.StudentName[this] = value; }
        }
        [DisplayName("Course"), Expression("jCourse.[CourseName]")]
        public String Course
        {
            get { return Fields.Course[this]; }
            set { Fields.Course[this] = value; }
        }

        [DisplayName("Student Joining Date"), Expression("jStudent.[JoiningDate]")]
        public DateTime? StudentJoiningDate
        {
            get { return Fields.StudentJoiningDate[this]; }
            set { Fields.StudentJoiningDate[this] = value; }
        }

        [DisplayName("Student Joining Course"), Expression("jStudent.[JoiningCourse]")]
        public Int32? StudentJoiningCourse
        {
            get { return Fields.StudentJoiningCourse[this]; }
            set { Fields.StudentJoiningCourse[this] = value; }
        }

        [DisplayName("Student Father Contact Id"), Expression("jStudent.[FatherContactId]")]
        public Int32? StudentFatherContactId
        {
            get { return Fields.StudentFatherContactId[this]; }
            set { Fields.StudentFatherContactId[this] = value; }
        }

        [DisplayName("Student Mother Contact Id"), Expression("jStudent.[MotherContactId]")]
        public Int32? StudentMotherContactId
        {
            get { return Fields.StudentMotherContactId[this]; }
            set { Fields.StudentMotherContactId[this] = value; }
        }

        [DisplayName("Student Student Contact Id"), Expression("jStudent.[StudentContactId]")]
        public Int32? StudentStudentContactId
        {
            get { return Fields.StudentStudentContactId[this]; }
            set { Fields.StudentStudentContactId[this] = value; }
        }

        [DisplayName("Student Campus Id"), Expression("jStudent.[CampusId]")]
        public Int32? StudentCampusId
        {
            get { return Fields.StudentCampusId[this]; }
            set { Fields.StudentCampusId[this] = value; }
        }

        [DisplayName("Student Other Institute"), Expression("jStudent.[OtherInstitute]")]
        public String StudentOtherInstitute
        {
            get { return Fields.StudentOtherInstitute[this]; }
            set { Fields.StudentOtherInstitute[this] = value; }
        }

        [DisplayName("Student Division"), Expression("jStudent.[Division]")]
        public String StudentDivision
        {
            get { return Fields.StudentDivision[this]; }
            set { Fields.StudentDivision[this] = value; }
        }

        [DisplayName("Student Tenant Id"), Expression("jStudent.[TenantId]")]
        public Int32? StudentTenantId
        {
            get { return Fields.StudentTenantId[this]; }
            set { Fields.StudentTenantId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PromotionDetailsLookupRow()
            : base(Fields)
        {
        }
        StringField INameRow.NameField
        {
            get { return Fields.StudentName; }
        }
        [DisplayName("Promotion Type"), NotNull, DefaultValue(1), QuickSearch, QuickFilter, ReadOnly(true)]
        public PromotionTypes? PromotionType
        {
            get { return (PromotionTypes?)Fields.PromotionType[this]; }
            set { Fields.PromotionType[this] = (int?)value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field PromotionId;
            public Int32Field StudentId;
            public BooleanField IsCompleted;
            public Int32Field PromotionType;

            public Int32Field PromotionFromCourse;
            public Int32Field PromotionToCourse;
            public Int32Field PromotionCreatedBy;
            public DateTimeField PromotionCreatedDate;
            public Int32Field PromotionTenantId;
            public Int32Field PromotionAcadamicYearId;

            public StringField StudentCode;
            public StringField StudentName;
            public DateTimeField StudentJoiningDate;
            public Int32Field StudentJoiningCourse;
            public Int32Field StudentFatherContactId;
            public Int32Field StudentMotherContactId;
            public Int32Field StudentStudentContactId;
            public Int32Field StudentCampusId;
            public StringField StudentOtherInstitute;
            public StringField StudentDivision;
            public Int32Field StudentTenantId;

            public StringField Course;
        }
    }
}
