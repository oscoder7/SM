
namespace BitPro.SchoolMate.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[StudentCurrentCourses]")]
    [DisplayName("Student Current Courses"), InstanceName("Student Current Courses")]
    [ReadPermission("Master:Students")]
    [ModifyPermission("Master:Students")]
    public sealed class StudentCurrentCoursesRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Student"), NotNull, ForeignKey("[dbo].[Students]", "Id"), LeftJoin("jStudent"), TextualField("StudentCode")]
        public Int32? StudentId
        {
            get { return Fields.StudentId[this]; }
            set { Fields.StudentId[this] = value; }
        }

        [DisplayName("Course"), NotNull, ForeignKey("[dbo].[Courses]", "Id"), LeftJoin("jCourse"), TextualField("CourseCode")]
        public Int32? CourseId
        {
            get { return Fields.CourseId[this]; }
            set { Fields.CourseId[this] = value; }
        }

        [DisplayName("Student Code"), Expression("jStudent.[Code]")]
        public String StudentCode
        {
            get { return Fields.StudentCode[this]; }
            set { Fields.StudentCode[this] = value; }
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

        [DisplayName("Student Student Name"), Expression("jStudent.[StudentName]")]
        public String StudentStudentName
        {
            get { return Fields.StudentStudentName[this]; }
            set { Fields.StudentStudentName[this] = value; }
        }

        [DisplayName("Student Gender"), Expression("jStudent.[Gender]")]
        public Int32? StudentGender
        {
            get { return Fields.StudentGender[this]; }
            set { Fields.StudentGender[this] = value; }
        }

        [DisplayName("Student Dob"), Expression("jStudent.[DOB]")]
        public DateTime? StudentDob
        {
            get { return Fields.StudentDob[this]; }
            set { Fields.StudentDob[this] = value; }
        }

        [DisplayName("Student Idno"), Expression("jStudent.[IDNO]")]
        public String StudentIdno
        {
            get { return Fields.StudentIdno[this]; }
            set { Fields.StudentIdno[this] = value; }
        }

        [DisplayName("Student Land Mark"), Expression("jStudent.[LandMark]")]
        public String StudentLandMark
        {
            get { return Fields.StudentLandMark[this]; }
            set { Fields.StudentLandMark[this] = value; }
        }

        [DisplayName("Student Bus Stop"), Expression("jStudent.[BusStop]")]
        public String StudentBusStop
        {
            get { return Fields.StudentBusStop[this]; }
            set { Fields.StudentBusStop[this] = value; }
        }

        [DisplayName("Student Remarks"), Expression("jStudent.[Remarks]")]
        public String StudentRemarks
        {
            get { return Fields.StudentRemarks[this]; }
            set { Fields.StudentRemarks[this] = value; }
        }

        [DisplayName("Student Photo"), Expression("jStudent.[Photo]")]
        public String StudentPhoto
        {
            get { return Fields.StudentPhoto[this]; }
            set { Fields.StudentPhoto[this] = value; }
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

        public static readonly RowFields Fields = new RowFields().Init();

        public StudentCurrentCoursesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field StudentId;
            public Int32Field CourseId;

            public StringField StudentCode;
            public DateTimeField StudentJoiningDate;
            public Int32Field StudentJoiningCourse;
            public Int32Field StudentFatherContactId;
            public Int32Field StudentMotherContactId;
            public Int32Field StudentStudentContactId;
            public Int32Field StudentCampusId;
            public StringField StudentOtherInstitute;
            public StringField StudentDivision;
            public Int32Field StudentTenantId;
            public StringField StudentStudentName;
            public Int32Field StudentGender;
            public DateTimeField StudentDob;
            public StringField StudentIdno;
            public StringField StudentLandMark;
            public StringField StudentBusStop;
            public StringField StudentRemarks;
            public StringField StudentPhoto;

            public StringField CourseCode;
            public StringField CourseCourseName;
            public BooleanField CourseActive;
            public BooleanField CourseNonAcadamic;
            public Int32Field CourseTenantId;
        }
    }
}
