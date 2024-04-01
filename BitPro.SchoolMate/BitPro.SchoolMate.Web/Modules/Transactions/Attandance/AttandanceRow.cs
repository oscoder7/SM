
namespace BitPro.SchoolMate.Transactions.Entities
{
    using BitPro.SchoolMate.Master.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[Attandance]")]
    [DisplayName("Attandance"), InstanceName("Attendance")]
    [ReadPermission("Transactions:Attandance")]
    [ModifyPermission("Transactions:Attandance")]
    [LookupScript("Master.Attandance", LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class AttandanceRow : Row, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        //[DisplayName("Student"), ForeignKey("[dbo].[Students]", "Id"), LeftJoin("jStudent"), TextualField("StudentCode")]
        //[LookupEditor(typeof(StudentsRow))]
        //public Int32? StudentId
        //{
        //    get { return Fields.StudentId[this]; }
        //    set { Fields.StudentId[this] = value; }
        //}

        [DisplayName("Staff"), ForeignKey("[dbo].[Staffs]", "Id"), LeftJoin("jStaff"), TextualField("StaffCode")]
        [LookupEditor(typeof(StaffsRow))]
        public Int32? StaffId
        {
            get { return Fields.StaffId[this]; }
            set { Fields.StaffId[this] = value; }
        }

        [DisplayName("Date"), NotNull]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [DisplayName("Academic Year"), NotNull, ForeignKey("[dbo].[AcadamicYear]", "Id"), LeftJoin("jAcadamicYear"), TextualField("AcadamicYearCode")]
        [LookupEditor(typeof(AcadamicYearRow))]
        public Int32? AcadamicYearId
        {
            get { return Fields.AcadamicYearId[this]; }
            set { Fields.AcadamicYearId[this] = value; }
        }

        [DisplayName("Status"), NotNull]
        public AttendanceStatus? Status
        {
            get { return (AttendanceStatus?)Fields.Status[this]; }
            set { Fields.Status[this] = (int?)value; }
        }

        [DisplayName("Attachments"), Size(500), QuickSearch]
        [MultipleFileUploadEditor(FilenameFormat = "Attachments/~", CopyToHistory = true)]
        public String Attachments
        {
            get { return Fields.Attachments[this]; }
            set { Fields.Attachments[this] = value; }
        }

        [DisplayName("Description"), Size(500),TextAreaEditor]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        //[DisplayName("Student Code"), Expression("jStudent.[Code]"),LookupInclude]
        //public String StudentCode
        //{
        //    get { return Fields.StudentCode[this]; }
        //    set { Fields.StudentCode[this] = value; }
        //}

        //[DisplayName("Student Joining Date"), Expression("jStudent.[JoiningDate]")]
        //public DateTime? StudentJoiningDate
        //{
        //    get { return Fields.StudentJoiningDate[this]; }
        //    set { Fields.StudentJoiningDate[this] = value; }
        //}

        //[DisplayName("Student Joining Course"), Expression("jStudent.[JoiningCourse]")]
        //public Int32? StudentJoiningCourse
        //{
        //    get { return Fields.StudentJoiningCourse[this]; }
        //    set { Fields.StudentJoiningCourse[this] = value; }
        //}

        //[DisplayName("Student Father Contact Id"), Expression("jStudent.[FatherContactId]")]
        //public Int32? StudentFatherContactId
        //{
        //    get { return Fields.StudentFatherContactId[this]; }
        //    set { Fields.StudentFatherContactId[this] = value; }
        //}

        //[DisplayName("Student Mother Contact Id"), Expression("jStudent.[MotherContactId]")]
        //public Int32? StudentMotherContactId
        //{
        //    get { return Fields.StudentMotherContactId[this]; }
        //    set { Fields.StudentMotherContactId[this] = value; }
        //}

        //[DisplayName("Student Student Contact Id"), Expression("jStudent.[StudentContactId]")]
        //public Int32? StudentStudentContactId
        //{
        //    get { return Fields.StudentStudentContactId[this]; }
        //    set { Fields.StudentStudentContactId[this] = value; }
        //}

        //[DisplayName("Student Campus Id"), Expression("jStudent.[CampusId]")]
        //public Int32? StudentCampusId
        //{
        //    get { return Fields.StudentCampusId[this]; }
        //    set { Fields.StudentCampusId[this] = value; }
        //}

        //[DisplayName("Student Other Institute"), Expression("jStudent.[OtherInstitute]")]
        //public String StudentOtherInstitute
        //{
        //    get { return Fields.StudentOtherInstitute[this]; }
        //    set { Fields.StudentOtherInstitute[this] = value; }
        //}

        //[DisplayName("Student Division"), Expression("jStudent.[Division]")]
        //public String StudentDivision
        //{
        //    get { return Fields.StudentDivision[this]; }
        //    set { Fields.StudentDivision[this] = value; }
        //}

        //[DisplayName("Student Tenant Id"), Expression("jStudent.[TenantId]")]
        //public Int32? StudentTenantId
        //{
        //    get { return Fields.StudentTenantId[this]; }
        //    set { Fields.StudentTenantId[this] = value; }
        //}

        [DisplayName("Staff Code"), Expression("jStaff.[Code]"),LookupInclude]
        public String StaffCode
        {
            get { return Fields.StaffCode[this]; }
            set { Fields.StaffCode[this] = value; }
        }

        [DisplayName("Staff Staff Name"), Expression("jStaff.[StaffName]"),LookupInclude]
        public String StaffStaffName
        {
            get { return Fields.StaffStaffName[this]; }
            set { Fields.StaffStaffName[this] = value; }
        }

        [DisplayName("Staff Contact Id"), Expression("jStaff.[ContactId]")]
        public Int32? StaffContactId
        {
            get { return Fields.StaffContactId[this]; }
            set { Fields.StaffContactId[this] = value; }
        }

        [DisplayName("Staff Is Teacher"), Expression("jStaff.[IsTeacher]"),LookupInclude]
        public Boolean? StaffIsTeacher
        {
            get { return Fields.StaffIsTeacher[this]; }
            set { Fields.StaffIsTeacher[this] = value; }
        }

        [DisplayName("Staff Remarks"), Expression("jStaff.[Remarks]")]
        public String StaffRemarks
        {
            get { return Fields.StaffRemarks[this]; }
            set { Fields.StaffRemarks[this] = value; }
        }

        [DisplayName("Staff Daily Wage"), Expression("jStaff.[DailyWage]")]
        public Decimal? StaffDailyWage
        {
            get { return Fields.StaffDailyWage[this]; }
            set { Fields.StaffDailyWage[this] = value; }
        }

        [DisplayName("Staff Tenant Id"), Expression("jStaff.[TenantId]")]
        public Int32? StaffTenantId
        {
            get { return Fields.StaffTenantId[this]; }
            set { Fields.StaffTenantId[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AttandanceRow()
            : base(Fields)
        {
        }
        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }
        [DisplayName("Promotion Detail"), NotNull, ForeignKey("[dbo].[PromotionDetails]", "Id"), LeftJoin("jPromotionDetail"), TextualField("StudentName")]
        [DepartmentEditor]
        public Int32? PromotionDetailId
        {
            get { return Fields.PromotionDetailId[this]; }
            set { Fields.PromotionDetailId[this] = value; }
        }
        [DisplayName("Tenant Id"), NotNull]
        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            //public Int32Field StudentId;
            public Int32Field StaffId;
            public DateTimeField Date;
            public Int32Field AcadamicYearId;
            public Int32Field Status;
            public StringField Attachments;
            public StringField Description;
            public Int32Field PromotionDetailId;

            public readonly Int32Field TenantId;

            //public StringField StudentCode;
            //public DateTimeField StudentJoiningDate;
            //public Int32Field StudentJoiningCourse;
            //public Int32Field StudentFatherContactId;
            //public Int32Field StudentMotherContactId;
            //public Int32Field StudentStudentContactId;
            //public Int32Field StudentCampusId;
            //public StringField StudentOtherInstitute;
            //public StringField StudentDivision;
            //public Int32Field StudentTenantId;

            public StringField StaffCode;
            public StringField StaffStaffName;
            public Int32Field StaffContactId;
            public BooleanField StaffIsTeacher;
            public StringField StaffRemarks;
            public DecimalField StaffDailyWage;
            public Int32Field StaffTenantId;

            public StringField AcadamicYearCode;
            public DateTimeField AcadamicYearPeriodFrom;
            public DateTimeField AcadamicYearPeriodTo;
            public StringField AcadamicYearDescription;
            public Int32Field AcadamicYearTenantId;
        }
    }
}
