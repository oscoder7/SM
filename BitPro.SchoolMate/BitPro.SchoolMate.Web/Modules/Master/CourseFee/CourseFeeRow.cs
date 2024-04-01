
namespace BitPro.SchoolMate.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[CourseFee]")]
    [DisplayName("Course Fee"), InstanceName("Course Fee")]
    [ReadPermission("Master:Fees")]
    [ModifyPermission("Master:Fees")]
    [LookupScript(Permission = "*")]
    public sealed class CourseFeeRow : Row, IIdRow,INameRow
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

        [DisplayName("Fee"), NotNull, ForeignKey("[dbo].[Fees]", "Id"), LeftJoin("jFee"), TextualField("FeeCode"),LookupInclude]
        public Int32? FeeId
        {
            get { return Fields.FeeId[this]; }
            set { Fields.FeeId[this] = value; }
        }

        [DisplayName("Course Code"), Expression("jCourse.[Code]"),Unique]
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

        [DisplayName("Fee Code"), Expression("jFee.[Code]")]
        public String FeeCode
        {
            get { return Fields.FeeCode[this]; }
            set { Fields.FeeCode[this] = value; }
        }

        [DisplayName("Fee Fee Name"), Expression("jFee.[FeeName]")]
        public String FeeFeeName
        {
            get { return Fields.FeeFeeName[this]; }
            set { Fields.FeeFeeName[this] = value; }
        }

        [DisplayName("Fee Annual Fee"), Expression("jFee.[AnnualFee]")]
        public Decimal? FeeAnnualFee
        {
            get { return Fields.FeeAnnualFee[this]; }
            set { Fields.FeeAnnualFee[this] = value; }
        }
        StringField INameRow.NameField
        {
            get { return Fields.FeeCode; }
        }
        [DisplayName("Fee Tenant Id"), Expression("jFee.[TenantId]")]
        public Int32? FeeTenantId
        {
            get { return Fields.FeeTenantId[this]; }
            set { Fields.FeeTenantId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CourseFeeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field CourseId;
            public Int32Field FeeId;

            public StringField CourseCode;
            public StringField CourseCourseName;
            public BooleanField CourseActive;
            public BooleanField CourseNonAcadamic;
            public Int32Field CourseTenantId;

            public StringField FeeCode;
            public StringField FeeFeeName;
            public DecimalField FeeAnnualFee;
            public Int32Field FeeTenantId;
        }
    }
}
