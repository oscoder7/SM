
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

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[Admission]")]
    [DisplayName("Admission"), InstanceName("Admission")]
    [ReadPermission("Transactions:Admission")]
    [ModifyPermission("Transactions:Admission")]

    public sealed class AdmissionRow : Row, IIdRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Academic Year"), NotNull, ForeignKey("[dbo].[AcadamicYear]", "Id"), LeftJoin("jAcadamicYear"), TextualField("AcadamicYearCode")]
        [LookupEditor(typeof(Master.Entities.AcadamicYearRow))]
        public Int32? AcadamicYearId
        {
            get { return Fields.AcadamicYearId[this]; }
            set { Fields.AcadamicYearId[this] = value; }
        }

        [DisplayName("Joining Date"), NotNull]
        public DateTime? JoiningDate
        {
            get { return Fields.JoiningDate[this]; }
            set { Fields.JoiningDate[this] = value; }
        }

        [DisplayName("Student"), NotNull, ForeignKey("[dbo].[Students]", "Id"), LeftJoin("jStudent"), TextualField("StudentCode")]
        [LookupEditor(typeof(Master.Entities.StudentsRow))]
        public Int32? StudentId
        {
            get { return Fields.StudentId[this]; }
            set { Fields.StudentId[this] = value; }
        }

        [DisplayName("Joining Course"), NotNull, ForeignKey("[dbo].[Courses]", "Id"), LeftJoin("jJoiningCourse"), TextualField("JoiningCourseCode")]
        [LookupEditor(typeof(CoursesRow), InplaceAdd = true), QuickSearch, QuickFilter]
        public Int32? JoiningCourse
        {
            get { return Fields.JoiningCourse[this]; }
            set { Fields.JoiningCourse[this] = value; }
        }

        [DisplayName("Joining Division"), ForeignKey("[dbo].[CourseDivisions]", "Id"), LeftJoin("jJoiningDivision"), TextualField("JoiningDivisionDivisionCode")]
        [LookupEditor(typeof(CourseDivisionsRow), CascadeField = "CourseId", CascadeFrom = "JoiningCourse"), QuickSearch, QuickFilter]
        public Int32? JoiningDivisionId
        {
            get { return Fields.JoiningDivisionId[this]; }
            set { Fields.JoiningDivisionId[this] = value; }
        }

        [DisplayName("Acadamic Year"), Expression("jAcadamicYear.[Code]"),QuickFilter,QuickSearch]
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

        [DisplayName("Student Code"), Expression("jStudent.[Code]"),QuickFilter,QuickSearch]
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

        [DisplayName("Student Name"), Expression("jStudent.[StudentName]")]
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

        [DisplayName("Student Joining Division Id"), Expression("jStudent.[JoiningDivisionId]")]
        public Int32? StudentJoiningDivisionId
        {
            get { return Fields.StudentJoiningDivisionId[this]; }
            set { Fields.StudentJoiningDivisionId[this] = value; }
        }

        [DisplayName("Joining Course"), Expression("jJoiningCourse.[Code]"),QuickSearch,QuickFilter]
        public String JoiningCourseCode
        {
            get { return Fields.JoiningCourseCode[this]; }
            set { Fields.JoiningCourseCode[this] = value; }
        }

        [DisplayName("Joining Course Course Name"), Expression("jJoiningCourse.[CourseName]")]
        public String JoiningCourseCourseName
        {
            get { return Fields.JoiningCourseCourseName[this]; }
            set { Fields.JoiningCourseCourseName[this] = value; }
        }

        [DisplayName("Joining Course Active"), Expression("jJoiningCourse.[Active]")]
        public Boolean? JoiningCourseActive
        {
            get { return Fields.JoiningCourseActive[this]; }
            set { Fields.JoiningCourseActive[this] = value; }
        }

        [DisplayName("Joining Course Non Acadamic"), Expression("jJoiningCourse.[NonAcadamic]")]
        public Boolean? JoiningCourseNonAcadamic
        {
            get { return Fields.JoiningCourseNonAcadamic[this]; }
            set { Fields.JoiningCourseNonAcadamic[this] = value; }
        }

        [DisplayName("Joining Course Tenant Id"), Expression("jJoiningCourse.[TenantId]")]
        public Int32? JoiningCourseTenantId
        {
            get { return Fields.JoiningCourseTenantId[this]; }
            set { Fields.JoiningCourseTenantId[this] = value; }
        }

        [DisplayName("Joining Division Course Id"), Expression("jJoiningDivision.[CourseId]")]
        public Int32? JoiningDivisionCourseId
        {
            get { return Fields.JoiningDivisionCourseId[this]; }
            set { Fields.JoiningDivisionCourseId[this] = value; }
        }

        [DisplayName("Joining Division"), Expression("jJoiningDivision.[DivisionCode]"),QuickFilter,QuickSearch]
        public String JoiningDivisionDivisionCode
        {
            get { return Fields.JoiningDivisionDivisionCode[this]; }
            set { Fields.JoiningDivisionDivisionCode[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AdmissionRow()
            : base(Fields)
        {
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

        [DisplayName("Select Fees"), NotMapped]
        [LookupEditor(typeof(FeesRow), Multiple = true)]
        public List<int> SelectedFees
        {
            get { return Fields.SelectedFees[this]; }
            set { Fields.SelectedFees[this] = value; }
        }

        [DisplayName("Fee Term"), ForeignKey("[dbo].[FeeTerms]", "Id"), LeftJoin("jAdmissionFeeTerm")]
        [LookupEditor(typeof(FeeTermsRow), CascadeField = "AcadamicYearId", CascadeFrom = "AcadamicYearId")]
        public Int32? AdmissionFeeTermId
        {
            get { return Fields.AdmissionFeeTermId[this]; }
            set { Fields.AdmissionFeeTermId[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field AcadamicYearId;
            public DateTimeField JoiningDate;
            public Int32Field StudentId;
            public Int32Field JoiningCourse;
            public Int32Field JoiningDivisionId;
            public readonly Int32Field TenantId;

            public StringField AcadamicYearCode;
            public DateTimeField AcadamicYearPeriodFrom;
            public DateTimeField AcadamicYearPeriodTo;
            public StringField AcadamicYearDescription;
            public Int32Field AcadamicYearTenantId;

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
            public Int32Field StudentJoiningDivisionId;

            public StringField JoiningCourseCode;
            public StringField JoiningCourseCourseName;
            public BooleanField JoiningCourseActive;
            public BooleanField JoiningCourseNonAcadamic;
            public Int32Field JoiningCourseTenantId;

            public Int32Field JoiningDivisionCourseId;
            public StringField JoiningDivisionDivisionCode;

            public ListField<int> SelectedFees;

            public Int32Field AdmissionFeeTermId;
        }
    }
}
