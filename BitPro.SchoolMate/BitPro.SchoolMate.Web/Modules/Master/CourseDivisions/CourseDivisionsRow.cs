
namespace BitPro.SchoolMate.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[CourseDivisions]")]
    [DisplayName("Course Divisions"), InstanceName("Course Divisions")]
    [ReadPermission("Master:Courses")]
    [ModifyPermission("Master:Courses")]
    [LookupScript(Permission = "*")]
    public sealed class CourseDivisionsRow : Row, IIdRow, INameRow
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

        [DisplayName("Division Code"), Size(100), NotNull, QuickSearch]
        public String DivisionCode
        {
            get { return Fields.DivisionCode[this]; }
            set { Fields.DivisionCode[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DivisionCode; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CourseDivisionsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field CourseId;
            public StringField DivisionCode;

            public StringField CourseCode;
            public StringField CourseCourseName;
            public BooleanField CourseActive;
            public BooleanField CourseNonAcadamic;
            public Int32Field CourseTenantId;
        }
    }
}
