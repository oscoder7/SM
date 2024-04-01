
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

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[StudentMarks]")]
    [DisplayName("Student Marks"), InstanceName("Student Marks")]
    [ReadPermission("Transactions:StudentMarks")]
    [ModifyPermission("Transactions:StudentMarks")]
    public sealed class StudentMarksRow : Row, IIdRow,IMultiTenantRow
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

        [DisplayName("Exam"), NotNull, ForeignKey("[dbo].[Exams]", "Id"), LeftJoin("jExam"), TextualField("ExamCode")]
        [LookupEditor(typeof(ExamsRow), CascadeField = "AcadamicYearId", CascadeFrom = "AcadamicYearId")]
        public Int32? ExamId
        {
            get { return Fields.ExamId[this]; }
            set { Fields.ExamId[this] = value; }
        }

        [DisplayName("Exam Date"), NotNull]
        public DateTime? ExamDate
        {
            get { return Fields.ExamDate[this]; }
            set { Fields.ExamDate[this] = value; }
        }

        [DisplayName("Course"), NotNull, ForeignKey("[dbo].[Promotions]", "Id"), LeftJoin("jPromotion")]
        [LookupEditor(typeof(PromotionsRow),CascadeField = "AcadamicYearId",CascadeFrom = "AcadamicYearId")]
        public Int32? PromotionId
        {
            get { return Fields.PromotionId[this]; }
            set { Fields.PromotionId[this] = value; }
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

        [DisplayName("Promotion To Course"), Expression("jPromotion.[ToCourse]")]
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
        [DisplayName("Subjects"), MasterDetailRelation(foreignKey: "StudentMarksId"), NotMapped]
        public List<StudentMarksSubjectsRow> Subjects
        {
            get { return Fields.Subjects[this]; }
            set { Fields.Subjects[this] = value; }
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
        public static readonly RowFields Fields = new RowFields().Init();

        public StudentMarksRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field AcadamicYearId;
            public Int32Field ExamId;
            public DateTimeField ExamDate;
            public Int32Field PromotionId;
            public RowListField<StudentMarksSubjectsRow> Subjects;

            public readonly Int32Field TenantId;

            public StringField AcadamicYearCode;
            public DateTimeField AcadamicYearPeriodFrom;
            public DateTimeField AcadamicYearPeriodTo;
            public StringField AcadamicYearDescription;
            public Int32Field AcadamicYearTenantId;

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
        }
    }
}
