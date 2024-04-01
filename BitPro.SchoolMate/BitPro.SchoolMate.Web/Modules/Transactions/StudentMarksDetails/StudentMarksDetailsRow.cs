
namespace BitPro.SchoolMate.Transactions.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[StudentMarksDetails]")]
    [DisplayName("Student Marks Details"), InstanceName("Student Marks Details")]
    [ReadPermission("Transactions:StudentMarks")]
    [ModifyPermission("Transactions:StudentMarks")]
    public sealed class StudentMarksDetailsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Student Marks Subjects"), NotNull, ForeignKey("[dbo].[StudentMarksSubjects]", "Id"), LeftJoin("jStudentMarksSubjects")]
        public Int32? StudentMarksSubjectsId
        {
            get { return Fields.StudentMarksSubjectsId[this]; }
            set { Fields.StudentMarksSubjectsId[this] = value; }
        }

        [DisplayName("Promotion Detail"), NotNull, ForeignKey("[dbo].[PromotionDetails]", "Id"), LeftJoin("jPromotionDetail"), TextualField("StudentName"),ReadOnly(true)]
        [DepartmentEditor]
        public Int32? PromotionDetailId
        {
            get { return Fields.PromotionDetailId[this]; }
            set { Fields.PromotionDetailId[this] = value; }
        }

        [DisplayName("Mark"), Size(18), Scale(2), NotNull]
        public Decimal? Mark
        {
            get { return Fields.Mark[this]; }
            set { Fields.Mark[this] = value; }
        }

        [DisplayName("Description"), Size(500), QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Student Marks Subjects Student Marks Id"), Expression("jStudentMarksSubjects.[StudentMarksId]")]
        public Int32? StudentMarksSubjectsStudentMarksId
        {
            get { return Fields.StudentMarksSubjectsStudentMarksId[this]; }
            set { Fields.StudentMarksSubjectsStudentMarksId[this] = value; }
        }

        [DisplayName("Student Marks Subjects Course Subject Id"), Expression("jStudentMarksSubjects.[CourseSubjectId]")]
        public Int32? StudentMarksSubjectsCourseSubjectId
        {
            get { return Fields.StudentMarksSubjectsCourseSubjectId[this]; }
            set { Fields.StudentMarksSubjectsCourseSubjectId[this] = value; }
        }

        [DisplayName("Promotion Detail Promotion Id"), Expression("jPromotionDetail.[PromotionId]")]
        public Int32? PromotionDetailPromotionId
        {
            get { return Fields.PromotionDetailPromotionId[this]; }
            set { Fields.PromotionDetailPromotionId[this] = value; }
        }
        [DisplayName("Student"), Expression("jStudents.[StudentName]"),MinSelectLevel(SelectLevel.List)]
        public String Student
        {
            get { return Fields.Student[this]; }
            set { Fields.Student[this] = value; }
        }
        [DisplayName("Promotion Detail Student Id"), Expression("jPromotionDetail.[StudentId]"), ForeignKey("[dbo].[Students]", "Id"), LeftJoin("jStudents")]
        public Int32? PromotionDetailStudentId
        {
            get { return Fields.PromotionDetailStudentId[this]; }
            set { Fields.PromotionDetailStudentId[this] = value; }
        }

        [DisplayName("Promotion Detail Is Completed"), Expression("jPromotionDetail.[IsCompleted]")]
        public Boolean? PromotionDetailIsCompleted
        {
            get { return Fields.PromotionDetailIsCompleted[this]; }
            set { Fields.PromotionDetailIsCompleted[this] = value; }
        }

        [DisplayName("Promotion Detail Promotion Type"), Expression("jPromotionDetail.[PromotionType]")]
        public Int32? PromotionDetailPromotionType
        {
            get { return Fields.PromotionDetailPromotionType[this]; }
            set { Fields.PromotionDetailPromotionType[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public StudentMarksDetailsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field StudentMarksSubjectsId;
            public Int32Field PromotionDetailId;
            public DecimalField Mark;
            public StringField Description;

            public Int32Field StudentMarksSubjectsStudentMarksId;
            public Int32Field StudentMarksSubjectsCourseSubjectId;

            public Int32Field PromotionDetailPromotionId;
            public Int32Field PromotionDetailStudentId;
            public BooleanField PromotionDetailIsCompleted;
            public Int32Field PromotionDetailPromotionType;

            public StringField Student;

        }
    }
}
