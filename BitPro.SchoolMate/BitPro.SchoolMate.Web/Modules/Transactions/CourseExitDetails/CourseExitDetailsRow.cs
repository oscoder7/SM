
namespace BitPro.SchoolMate.Transactions.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[CourseExitDetails]")]
    [DisplayName("Course Exit Details"), InstanceName("Course Exit Details")]
    [ReadPermission("Transactions:CourseExit")]
    [ModifyPermission("Transactions:CourseExit")]
    public sealed class CourseExitDetailsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Course Exit"), NotNull, ForeignKey("[dbo].[CourseExit]", "Id"), LeftJoin("jCourseExit")]
        public Int32? CourseExitId
        {
            get { return Fields.CourseExitId[this]; }
            set { Fields.CourseExitId[this] = value; }
        }

        [DisplayName("Student"), NotNull, ForeignKey("[dbo].[PromotionDetails]", "Id"), LeftJoin("jPromotionDetail")]
        [LookupEditor(typeof(PromotionDetailsLookupRow))]
        public Int32? PromotionDetailId
        {
            get { return Fields.PromotionDetailId[this]; }
            set { Fields.PromotionDetailId[this] = value; }
        }

        [DisplayName("Attachments"), MultipleFileUploadEditor(FilenameFormat = "Claims/Attatchments/~"), Size(500), QuickSearch]
        public String Attachments
        {
            get { return Fields.Attachments[this]; }
            set { Fields.Attachments[this] = value; }
        }

        [DisplayName("Course Exit Acadamic Year Id"), Expression("jCourseExit.[AcadamicYearId]")]
        public Int32? CourseExitAcadamicYearId
        {
            get { return Fields.CourseExitAcadamicYearId[this]; }
            set { Fields.CourseExitAcadamicYearId[this] = value; }
        }

        [DisplayName("Course Exit Promotion Id"), Expression("jCourseExit.[PromotionId]")]
        public Int32? CourseExitPromotionId
        {
            get { return Fields.CourseExitPromotionId[this]; }
            set { Fields.CourseExitPromotionId[this] = value; }
        }

        [DisplayName("Course Exit Exit Type"), Expression("jCourseExit.[ExitType]")]
        public Int32? CourseExitExitType
        {
            get { return Fields.CourseExitExitType[this]; }
            set { Fields.CourseExitExitType[this] = value; }
        }

        [DisplayName("Course Exit Exit Date"), Expression("jCourseExit.[ExitDate]")]
        public DateTime? CourseExitExitDate
        {
            get { return Fields.CourseExitExitDate[this]; }
            set { Fields.CourseExitExitDate[this] = value; }
        }

        [DisplayName("Promotion Detail Promotion Id"), Expression("jPromotionDetail.[PromotionId]")]
        public Int32? PromotionDetailPromotionId
        {
            get { return Fields.PromotionDetailPromotionId[this]; }
            set { Fields.PromotionDetailPromotionId[this] = value; }
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
            get { return Fields.Attachments; }
        }
        [DisplayName("Student"), Expression("jStudents.[StudentName]"), MinSelectLevel(SelectLevel.List)]
        public String Student
        {
            get { return Fields.Student[this]; }
            set { Fields.Student[this] = value; }
        }
        public static readonly RowFields Fields = new RowFields().Init();

        public CourseExitDetailsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field CourseExitId;
            public Int32Field PromotionDetailId;
            public StringField Attachments;

            public Int32Field CourseExitAcadamicYearId;
            public Int32Field CourseExitPromotionId;
            public Int32Field CourseExitExitType;
            public DateTimeField CourseExitExitDate;

            public Int32Field PromotionDetailPromotionId;
            public Int32Field PromotionDetailStudentId;
            public BooleanField PromotionDetailIsCompleted;
            public Int32Field PromotionDetailPromotionType;
            public StringField Student;
        }
    }
}
