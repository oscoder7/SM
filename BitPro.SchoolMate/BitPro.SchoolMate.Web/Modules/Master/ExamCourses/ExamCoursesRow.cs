
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

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[ExamCourses]")]
    [DisplayName("Exam Courses"), InstanceName("Exam Courses")]
    [ReadPermission("Master:Exams")]
    [ModifyPermission("Master:Exams")]
    public sealed class ExamCoursesRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Exam"), NotNull, ForeignKey("[dbo].[Exams]", "Id"), LeftJoin("jExam"), TextualField("ExamCode")]
        public Int32? ExamId
        {
            get { return Fields.ExamId[this]; }
            set { Fields.ExamId[this] = value; }
        }

        [DisplayName("Course"), NotNull, ForeignKey("[dbo].[Promotions]", "Id"), LeftJoin("jPromotion")]
        [LookupEditor(typeof(PromotionsRow))]
        public Int32? PromotionId
        {
            get { return Fields.PromotionId[this]; }
            set { Fields.PromotionId[this] = value; }
        }

        [DisplayName("Exam Code"), Expression("jExam.[Code]")]
        public String ExamCode
        {
            get { return Fields.ExamCode[this]; }
            set { Fields.ExamCode[this] = value; }
        }

        [DisplayName("Exam Exam Name"), Expression("jExam.[ExamName]")]
        public String ExamExamName
        {
            get { return Fields.ExamExamName[this]; }
            set { Fields.ExamExamName[this] = value; }
        }

        [DisplayName("Exam Acadamic Year Id"), Expression("jExam.[AcadamicYearId]")]
        public Int32? ExamAcadamicYearId
        {
            get { return Fields.ExamAcadamicYearId[this]; }
            set { Fields.ExamAcadamicYearId[this] = value; }
        }

        [DisplayName("Exam Tenant Id"), Expression("jExam.[TenantId]")]
        public Int32? ExamTenantId
        {
            get { return Fields.ExamTenantId[this]; }
            set { Fields.ExamTenantId[this] = value; }
        }

        [DisplayName("Promotion From Course"), Expression("jPromotion.[FromCourse]")]
        public Int32? PromotionFromCourse
        {
            get { return Fields.PromotionFromCourse[this]; }
            set { Fields.PromotionFromCourse[this] = value; }
        }

        [DisplayName("Promotion To Course"), Expression("jPromotion.[ToCourse]"), ForeignKey("[dbo].[Courses]", "Id"), LeftJoin("jCourses")]
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

        public ExamCoursesRow()
            : base(Fields)
        {
        }
        [DisplayName("Course"), Expression("jCourses.[CourseName]"), MinSelectLevel(SelectLevel.List)]
        public String Course
        {
            get { return Fields.Course[this]; }
            set { Fields.Course[this] = value; }
        }
        [DisplayName("Subjects"), MasterDetailRelation(foreignKey: "ExamCoursesId"), NotMapped,MinSelectLevel(SelectLevel.List)]
        public List<ExamMaxMarksRow> Subjects
        {
            get { return Fields.Subjects[this]; }
            set { Fields.Subjects[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field ExamId;
            public Int32Field PromotionId;
            public RowListField<ExamMaxMarksRow> Subjects;

            public StringField ExamCode;
            public StringField ExamExamName;
            public Int32Field ExamAcadamicYearId;
            public Int32Field ExamTenantId;

            public Int32Field PromotionFromCourse;
            public Int32Field PromotionToCourse;
            public Int32Field PromotionCreatedBy;
            public DateTimeField PromotionCreatedDate;
            public Int32Field PromotionTenantId;
            public Int32Field PromotionAcadamicYearId;
            public Int32Field PromotionJoiningDivisionId;

            public StringField Course;
        }
    }
}
