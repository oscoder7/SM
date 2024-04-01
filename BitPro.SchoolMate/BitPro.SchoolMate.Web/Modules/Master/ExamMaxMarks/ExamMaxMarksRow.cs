
namespace BitPro.SchoolMate.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[ExamMaxMarks]")]
    [DisplayName("Exam Max Marks"), InstanceName("Exam Max Marks")]
    [ReadPermission("Master:Exams")]
    [ModifyPermission("Master:Exams")]
    public sealed class ExamMaxMarksRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Exam Courses"), NotNull, ForeignKey("[dbo].[ExamCourses]", "Id"), LeftJoin("jExamCourses")]
        public Int32? ExamCoursesId
        {
            get { return Fields.ExamCoursesId[this]; }
            set { Fields.ExamCoursesId[this] = value; }
        }

        [DisplayName("Subject"), NotNull, ForeignKey("[dbo].[CourseSubjects]", "Id"), LeftJoin("jCourseSubject")]
        [LookupEditor(typeof(CourseSubjectsRow))]
        public Int32? CourseSubjectId
        {
            get { return Fields.CourseSubjectId[this]; }
            set { Fields.CourseSubjectId[this] = value; }
        }

        [DisplayName("Max Mark"), Size(18), Scale(2), NotNull]
        public Decimal? MaxMark
        {
            get { return Fields.MaxMark[this]; }
            set { Fields.MaxMark[this] = value; }
        }

        [DisplayName("Exam Courses Exam Id"), Expression("jExamCourses.[ExamId]")]
        public Int32? ExamCoursesExamId
        {
            get { return Fields.ExamCoursesExamId[this]; }
            set { Fields.ExamCoursesExamId[this] = value; }
        }

        [DisplayName("Exam Courses Promotion Id"), Expression("jExamCourses.[PromotionId]")]
        public Int32? ExamCoursesPromotionId
        {
            get { return Fields.ExamCoursesPromotionId[this]; }
            set { Fields.ExamCoursesPromotionId[this] = value; }
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

        [DisplayName("Course Subject Max Marks"), Expression("jCourseSubject.[MaxMarks]")]
        public Decimal? CourseSubjectMaxMarks
        {
            get { return Fields.CourseSubjectMaxMarks[this]; }
            set { Fields.CourseSubjectMaxMarks[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ExamMaxMarksRow()
            : base(Fields)
        {
        }
        [DisplayName("Subject"), Expression("jSubjects.[SubjectName]"), MinSelectLevel(SelectLevel.List), LookupInclude]
        public String CourseSubject
        {
            get { return Fields.CourseSubject[this]; }
            set { Fields.CourseSubject[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field ExamCoursesId;
            public Int32Field CourseSubjectId;
            public DecimalField MaxMark;

            public Int32Field ExamCoursesExamId;
            public Int32Field ExamCoursesPromotionId;

            public Int32Field CourseSubjectCourseId;
            public Int32Field CourseSubjectSubjectId;
            public DecimalField CourseSubjectMaxMarks;

            public StringField CourseSubject;
        }
    }
}
