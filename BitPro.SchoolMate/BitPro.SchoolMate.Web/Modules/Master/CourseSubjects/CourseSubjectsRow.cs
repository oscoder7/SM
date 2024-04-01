
namespace BitPro.SchoolMate.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[CourseSubjects]")]
    [DisplayName("Course Subjects"), InstanceName("Course Subjects")]
    [ReadPermission("Master:CourseSubjects")]
    [ModifyPermission("Master:CourseSubjects")]
    [LookupScript(Permission = "*")]
    public sealed class CourseSubjectsRow : Row, IIdRow,INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Course"), NotNull, ForeignKey("[dbo].[Courses]", "Id"), LeftJoin("jCourse"), TextualField("CourseCode"),LookupInclude]
        public Int32? CourseId
        {
            get { return Fields.CourseId[this]; }
            set { Fields.CourseId[this] = value; }
        }

        [DisplayName("Subject"), NotNull, ForeignKey("[dbo].[Subjects]", "Id"), LeftJoin("jSubject"), TextualField("SubjectCode")]
        [LookupEditor(typeof(SubjectsRow), InplaceAdd = true)]
        public Int32? SubjectId
        {
            get { return Fields.SubjectId[this]; }
            set { Fields.SubjectId[this] = value; }
        }

        [DisplayName("Max Marks"), Size(18), Scale(3),LookupInclude]
        public Decimal? MaxMarks
        {
            get { return Fields.MaxMarks[this]; }
            set { Fields.MaxMarks[this] = value; }
        }

        [DisplayName("Course Code"), Expression("jCourse.[Code]")]
        public String CourseCode
        {
            get { return Fields.CourseCode[this]; }
            set { Fields.CourseCode[this] = value; }
        }

        [DisplayName("Course Course Name"), Expression("jCourse.[CourseName]")]
        public String CourseCourseName
        {
            get { return Fields.CourseCourseName[this]; }
            set { Fields.CourseCourseName[this] = value; }
        }

        [DisplayName("Course Active"), Expression("jCourse.[Active]")]
        public Boolean? CourseActive
        {
            get { return Fields.CourseActive[this]; }
            set { Fields.CourseActive[this] = value; }
        }

        [DisplayName("Course Non Acadamic"), Expression("jCourse.[NonAcadamic]")]
        public Boolean? CourseNonAcadamic
        {
            get { return Fields.CourseNonAcadamic[this]; }
            set { Fields.CourseNonAcadamic[this] = value; }
        }

        [DisplayName("Course Tenant Id"), Expression("jCourse.[TenantId]")]
        public Int32? CourseTenantId
        {
            get { return Fields.CourseTenantId[this]; }
            set { Fields.CourseTenantId[this] = value; }
        }

        [DisplayName("Subject Code"), Expression("jSubject.[Code]")]
        public String SubjectCode
        {
            get { return Fields.SubjectCode[this]; }
            set { Fields.SubjectCode[this] = value; }
        }

        [DisplayName("Subject Subject Name"), Expression("jSubject.[SubjectName]"), MinSelectLevel(SelectLevel.List),LookupInclude]
        public String SubjectSubjectName
        {
            get { return Fields.SubjectSubjectName[this]; }
            set { Fields.SubjectSubjectName[this] = value; }
        }

        [DisplayName("Subject Tenant Id"), Expression("jSubject.[TenantId]")]
        public Int32? SubjectTenantId
        {
            get { return Fields.SubjectTenantId[this]; }
            set { Fields.SubjectTenantId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SubjectCode; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CourseSubjectsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field CourseId;
            public Int32Field SubjectId;
            public DecimalField MaxMarks;

            public StringField CourseCode;
            public StringField CourseCourseName;
            public BooleanField CourseActive;
            public BooleanField CourseNonAcadamic;
            public Int32Field CourseTenantId;

            public StringField SubjectCode;
            public StringField SubjectSubjectName;
            public Int32Field SubjectTenantId;
        }
    }
}
