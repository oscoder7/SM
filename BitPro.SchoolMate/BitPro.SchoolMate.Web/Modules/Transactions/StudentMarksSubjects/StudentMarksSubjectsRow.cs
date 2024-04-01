
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

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[StudentMarksSubjects]")]
    [DisplayName("Student Marks Subjects"), InstanceName("Student Marks Subjects")]
    [ReadPermission("Transactions:StudentMarks")]
    [ModifyPermission("Transactions:StudentMarks")]
    public sealed class StudentMarksSubjectsRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Student Marks"), NotNull, ForeignKey("[dbo].[StudentMarks]", "Id"), LeftJoin("jStudentMarks")]
        public Int32? StudentMarksId
        {
            get { return Fields.StudentMarksId[this]; }
            set { Fields.StudentMarksId[this] = value; }
        }

        [DisplayName("Course Subject"), NotNull, ForeignKey("[dbo].[CourseSubjects]", "Id"), LeftJoin("jCourseSubject"),ReadOnly(true)]
        [LookupEditor(typeof(CourseSubjectsRow))]
        public Int32? CourseSubjectId
        {
            get { return Fields.CourseSubjectId[this]; }
            set { Fields.CourseSubjectId[this] = value; }
        }

        [DisplayName("Student Marks Acadamic Year Id"), Expression("jStudentMarks.[AcadamicYearId]")]
        public Int32? StudentMarksAcadamicYearId
        {
            get { return Fields.StudentMarksAcadamicYearId[this]; }
            set { Fields.StudentMarksAcadamicYearId[this] = value; }
        }

        [DisplayName("Student Marks Exam Id"), Expression("jStudentMarks.[ExamId]")]
        public Int32? StudentMarksExamId
        {
            get { return Fields.StudentMarksExamId[this]; }
            set { Fields.StudentMarksExamId[this] = value; }
        }

        [DisplayName("Student Marks Exam Date"), Expression("jStudentMarks.[ExamDate]")]
        public DateTime? StudentMarksExamDate
        {
            get { return Fields.StudentMarksExamDate[this]; }
            set { Fields.StudentMarksExamDate[this] = value; }
        }

        [DisplayName("Student Marks Promotion Id"), Expression("jStudentMarks.[PromotionId]")]
        public Int32? StudentMarksPromotionId
        {
            get { return Fields.StudentMarksPromotionId[this]; }
            set { Fields.StudentMarksPromotionId[this] = value; }
        }

        [DisplayName("Course Subject Course Id"), Expression("jCourseSubject.[CourseId]")]
        public Int32? CourseSubjectCourseId
        {
            get { return Fields.CourseSubjectCourseId[this]; }
            set { Fields.CourseSubjectCourseId[this] = value; }
        }

        [DisplayName("Course Subject Subject Id"), Expression("jCourseSubject.[SubjectId]"), ForeignKey("[dbo].[Subjects]", "Id"), LeftJoin("jSubjects")]
        public Int32? CourseSubjectSubjectId
        {
            get { return Fields.CourseSubjectSubjectId[this]; }
            set { Fields.CourseSubjectSubjectId[this] = value; }
        }
        [DisplayName("Subject"), Expression("jSubjects.[SubjectName]"), MinSelectLevel(SelectLevel.List), LookupInclude]
        public String CourseSubject
        {
            get { return Fields.CourseSubject[this]; }
            set { Fields.CourseSubject[this] = value; }
        }

        [DisplayName("Course Subject Max Marks"), Expression("jCourseSubject.[MaxMarks]")]
        public Decimal? CourseSubjectMaxMarks
        {
            get { return Fields.CourseSubjectMaxMarks[this]; }
            set { Fields.CourseSubjectMaxMarks[this] = value; }
        }
        [DisplayName("Student Marks Details"), MasterDetailRelation(foreignKey: "StudentMarksSubjectsId"), NotMapped, MinSelectLevel(SelectLevel.List)]
        public List<StudentMarksDetailsRow> StudentMarksDetails
        {
            get { return Fields.StudentMarksDetails[this]; }
            set { Fields.StudentMarksDetails[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public StudentMarksSubjectsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field StudentMarksId;
            public Int32Field CourseSubjectId;
            public RowListField<StudentMarksDetailsRow> StudentMarksDetails;

            public Int32Field StudentMarksAcadamicYearId;
            public Int32Field StudentMarksExamId;
            public DateTimeField StudentMarksExamDate;
            public Int32Field StudentMarksPromotionId;

            public Int32Field CourseSubjectCourseId;
            public Int32Field CourseSubjectSubjectId;
            public DecimalField CourseSubjectMaxMarks;

            public StringField CourseSubject;


        }
    }
}
