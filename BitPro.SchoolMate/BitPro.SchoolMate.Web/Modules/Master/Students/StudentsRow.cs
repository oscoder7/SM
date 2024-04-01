
namespace BitPro.SchoolMate.Master.Entities
{
    using BitPro.SchoolMate.Transactions.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[Students]")]
    [DisplayName("Students"), InstanceName("Students")]
    [ReadPermission("Master:Students")]
    [ModifyPermission("Master:StudentsModify")]
    [InsertPermission("Master:StudentsCreate")]
    [DeletePermission("Master:StudentsDelete")]
    [UpdatePermission("Master:StudentsUpdate")]
    [LookupScript("Master.Students", Permission = "*", LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class StudentsRow : Row, IIdRow, INameRow,IMultiTenantRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Code"), Size(200), NotNull, QuickSearch,Unique]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }

        [DisplayName("Joining Date"), NotNull, QuickSearch/*, QuickFilter*/]
        public DateTime? JoiningDate
        {
            get { return Fields.JoiningDate[this]; }
            set { Fields.JoiningDate[this] = value; }
        }
        [DisplayName("DOB"), NotNull,QuickSearch/*,QuickFilter*/]
        public DateTime? DOB
        {
            get { return Fields.DOB[this]; }
            set { Fields.DOB[this] = value; }
        }
        [DisplayName("Student Name"), Size(200), NotNull, QuickSearch, LookupInclude]
        public String StudentName
        {
            get { return Fields.StudentName[this]; }
            set { Fields.StudentName[this] = value; }
        }
        [DisplayName("Joining Course"), NotNull, ForeignKey("[dbo].[Courses]", "Id"), LeftJoin("jCourse"), TextualField("CourseName")]
        [LookupEditor(typeof(CoursesRow), InplaceAdd = true), QuickSearch, QuickFilter]
        public Int32? JoiningCourse
        {
            get { return Fields.JoiningCourse[this]; }
            set { Fields.JoiningCourse[this] = value; }
        }
        [DisplayName("Joining Division"), ForeignKey("[dbo].[CourseDivisions]", "Id"), LeftJoin("jJoiningDivisions")]
        [LookupEditor(typeof(CourseDivisionsRow),CascadeField = "CourseId", CascadeFrom = "JoiningCourse"), QuickSearch, QuickFilter]
        public Int32? JoiningDivisionId
        {
            get { return Fields.JoiningDivisionId[this]; }
            set { Fields.JoiningDivisionId[this] = value; }
        }
        [DisplayName("Father"), ForeignKey("[dbo].[Contacts]", "Id"), LeftJoin("jFatherContact"), TextualField("FatherContactName")]
        [LookupEditor(typeof(ContactsRow), InplaceAdd = true), QuickSearch, QuickFilter]
        public Int32? FatherContactId
        {
            get { return Fields.FatherContactId[this]; }
            set { Fields.FatherContactId[this] = value; }
        }

        [DisplayName("Mother"), ForeignKey("[dbo].[Contacts]", "Id"), LeftJoin("jMotherContact"), TextualField("MotherContactName")]
        [LookupEditor(typeof(ContactsRow), InplaceAdd = true), QuickSearch, QuickFilter]
        public Int32? MotherContactId
        {
            get { return Fields.MotherContactId[this]; }
            set { Fields.MotherContactId[this] = value; }
        }

        [DisplayName("Guardian"), ForeignKey("[dbo].[Contacts]", "Id"), LeftJoin("jStudentContact"), TextualField("StudentContactName")]
        [LookupEditor(typeof(ContactsRow), InplaceAdd = true), QuickSearch, QuickFilter]
        public Int32? StudentContactId
        {
            get { return Fields.StudentContactId[this]; }
            set { Fields.StudentContactId[this] = value; }
        }

        [DisplayName("Campus"), NotNull, ForeignKey("[dbo].[Campuses]", "Id"), LeftJoin("jCampus"), TextualField("CampusCode")]
        [LookupEditor(typeof(CampusesRow), InplaceAdd = true)]
        public Int32? CampusId
        {
            get { return Fields.CampusId[this]; }
            set { Fields.CampusId[this] = value; }
        }

        [DisplayName("Other Institute"), Size(500),QuickSearch]
        public String OtherInstitute
        {
            get { return Fields.OtherInstitute[this]; }
            set { Fields.OtherInstitute[this] = value; }
        }

        [DisplayName("Division"), Size(100), QuickSearch]
        public String Division
        {
            get { return Fields.Division[this]; }
            set { Fields.Division[this] = value; }
        }
        [DisplayName("Gender"), Size(100),NotNull,QuickSearch,QuickFilter]
        public Gender? Gender
        {
            get { return (Gender?)Fields.Gender[this]; }
            set { Fields.Gender[this] = (int?)value; }
        }
        [DisplayName("Tenant Id"), NotNull]
        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        [DisplayName("Joining Course Code"), Expression("jCourse.[CourseName]"),QuickSearch,QuickFilter]
        public String JoiningCourseCode
        {
            get { return Fields.JoiningCourseCode[this]; }
            set { Fields.JoiningCourseCode[this] = value; }
        }

        [DisplayName("Joining Course Course Name"), Expression("jCourse.[CourseName]")]
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

        [DisplayName("Father Contact Name"), Expression("jFatherContact.[Name]"), QuickFilter, QuickSearch]
        public String FatherContactName
        {
            get { return Fields.FatherContactName[this]; }
            set { Fields.FatherContactName[this] = value; }
        }

        [DisplayName("Father Contact Phone"), Expression("jFatherContact.[Phone]"),QuickSearch]
        public String FatherContactPhone
        {
            get { return Fields.FatherContactPhone[this]; }
            set { Fields.FatherContactPhone[this] = value; }
        }

        [DisplayName("Father Contact Email"), Expression("jFatherContact.[Email]")]
        public String FatherContactEmail
        {
            get { return Fields.FatherContactEmail[this]; }
            set { Fields.FatherContactEmail[this] = value; }
        }

        [DisplayName("Father Contact Whatsapp"), Expression("jFatherContact.[Whatsapp]")]
        public String FatherContactWhatsapp
        {
            get { return Fields.FatherContactWhatsapp[this]; }
            set { Fields.FatherContactWhatsapp[this] = value; }
        }

        [DisplayName("Father Contact Address1"), Expression("jFatherContact.[Address1]")]
        public String FatherContactAddress1
        {
            get { return Fields.FatherContactAddress1[this]; }
            set { Fields.FatherContactAddress1[this] = value; }
        }

        [DisplayName("Father Contact Address2"), Expression("jFatherContact.[Address2]")]
        public String FatherContactAddress2
        {
            get { return Fields.FatherContactAddress2[this]; }
            set { Fields.FatherContactAddress2[this] = value; }
        }

        [DisplayName("Father Contact Nationality"), Expression("jFatherContact.[Nationality]")]
        public Int32? FatherContactNationality
        {
            get { return Fields.FatherContactNationality[this]; }
            set { Fields.FatherContactNationality[this] = value; }
        }

        [DisplayName("Father Contact Tenant Id"), Expression("jFatherContact.[TenantId]")]
        public Int32? FatherContactTenantId
        {
            get { return Fields.FatherContactTenantId[this]; }
            set { Fields.FatherContactTenantId[this] = value; }
        }

        [DisplayName("Mother Contact Name"), Expression("jMotherContact.[Name]"), QuickFilter, QuickSearch]
        public String MotherContactName
        {
            get { return Fields.MotherContactName[this]; }
            set { Fields.MotherContactName[this] = value; }
        }

        [DisplayName("Mother Contact Phone"), Expression("jMotherContact.[Phone]")]
        public String MotherContactPhone
        {
            get { return Fields.MotherContactPhone[this]; }
            set { Fields.MotherContactPhone[this] = value; }
        }

        [DisplayName("Mother Contact Email"), Expression("jMotherContact.[Email]")]
        public String MotherContactEmail
        {
            get { return Fields.MotherContactEmail[this]; }
            set { Fields.MotherContactEmail[this] = value; }
        }

        [DisplayName("Mother Contact Whatsapp"), Expression("jMotherContact.[Whatsapp]")]
        public String MotherContactWhatsapp
        {
            get { return Fields.MotherContactWhatsapp[this]; }
            set { Fields.MotherContactWhatsapp[this] = value; }
        }

        [DisplayName("Mother Contact Address1"), Expression("jMotherContact.[Address1]")]
        public String MotherContactAddress1
        {
            get { return Fields.MotherContactAddress1[this]; }
            set { Fields.MotherContactAddress1[this] = value; }
        }

        [DisplayName("Mother Contact Address2"), Expression("jMotherContact.[Address2]")]
        public String MotherContactAddress2
        {
            get { return Fields.MotherContactAddress2[this]; }
            set { Fields.MotherContactAddress2[this] = value; }
        }

        [DisplayName("Mother Contact Nationality"), Expression("jMotherContact.[Nationality]")]
        public Int32? MotherContactNationality
        {
            get { return Fields.MotherContactNationality[this]; }
            set { Fields.MotherContactNationality[this] = value; }
        }

        [DisplayName("Mother Contact Tenant Id"), Expression("jMotherContact.[TenantId]")]
        public Int32? MotherContactTenantId
        {
            get { return Fields.MotherContactTenantId[this]; }
            set { Fields.MotherContactTenantId[this] = value; }
        }

        [DisplayName("Student Contact Name"), Expression("jStudentContact.[Name]"), QuickFilter, QuickSearch]
        public String StudentContactName
        {
            get { return Fields.StudentContactName[this]; }
            set { Fields.StudentContactName[this] = value; }
        }

        [DisplayName("Student Contact Phone"), Expression("jStudentContact.[Phone]")]
        public String StudentContactPhone
        {
            get { return Fields.StudentContactPhone[this]; }
            set { Fields.StudentContactPhone[this] = value; }
        }

        [DisplayName("Student Contact Email"), Expression("jStudentContact.[Email]")]
        public String StudentContactEmail
        {
            get { return Fields.StudentContactEmail[this]; }
            set { Fields.StudentContactEmail[this] = value; }
        }

        [DisplayName("Student Contact Whatsapp"), Expression("jStudentContact.[Whatsapp]")]
        public String StudentContactWhatsapp
        {
            get { return Fields.StudentContactWhatsapp[this]; }
            set { Fields.StudentContactWhatsapp[this] = value; }
        }

        [DisplayName("Student Contact Address1"), Expression("jStudentContact.[Address1]")]
        public String StudentContactAddress1
        {
            get { return Fields.StudentContactAddress1[this]; }
            set { Fields.StudentContactAddress1[this] = value; }
        }

        [DisplayName("Student Contact Address2"), Expression("jStudentContact.[Address2]")]
        public String StudentContactAddress2
        {
            get { return Fields.StudentContactAddress2[this]; }
            set { Fields.StudentContactAddress2[this] = value; }
        }

        [DisplayName("Student Contact Nationality"), Expression("jStudentContact.[Nationality]")]
        public Int32? StudentContactNationality
        {
            get { return Fields.StudentContactNationality[this]; }
            set { Fields.StudentContactNationality[this] = value; }
        }

        [DisplayName("Student Contact Tenant Id"), Expression("jStudentContact.[TenantId]")]
        public Int32? StudentContactTenantId
        {
            get { return Fields.StudentContactTenantId[this]; }
            set { Fields.StudentContactTenantId[this] = value; }
        }

        [DisplayName("Campus Code"), Expression("jCampus.[Code]"),QuickFilter,QuickSearch]
        public String CampusCode
        {
            get { return Fields.CampusCode[this]; }
            set { Fields.CampusCode[this] = value; }
        }

        [DisplayName("Campus"), Expression("jCampus.[Campus]")]
        public String Campus
        {
            get { return Fields.Campus[this]; }
            set { Fields.Campus[this] = value; }
        }

        [DisplayName("Campus Address"), Expression("jCampus.[Address]")]
        public String CampusAddress
        {
            get { return Fields.CampusAddress[this]; }
            set { Fields.CampusAddress[this] = value; }
        }

        [DisplayName("Campus Phone"), Expression("jCampus.[Phone]")]
        public String CampusPhone
        {
            get { return Fields.CampusPhone[this]; }
            set { Fields.CampusPhone[this] = value; }
        }

        [DisplayName("Campus Contact Person"), Expression("jCampus.[ContactPerson]")]
        public String CampusContactPerson
        {
            get { return Fields.CampusContactPerson[this]; }
            set { Fields.CampusContactPerson[this] = value; }
        }

        [DisplayName("Campus Mobile"), Expression("jCampus.[Mobile]")]
        public String CampusMobile
        {
            get { return Fields.CampusMobile[this]; }
            set { Fields.CampusMobile[this] = value; }
        }

        [DisplayName("Campus Email"), Expression("jCampus.[Email]")]
        public String CampusEmail
        {
            get { return Fields.CampusEmail[this]; }
            set { Fields.CampusEmail[this] = value; }
        }

        [DisplayName("Campus Website"), Expression("jCampus.[Website]")]
        public String CampusWebsite
        {
            get { return Fields.CampusWebsite[this]; }
            set { Fields.CampusWebsite[this] = value; }
        }

        [DisplayName("Campus Country Id"), Expression("jCampus.[CountryId]")]
        public Int32? CampusCountryId
        {
            get { return Fields.CampusCountryId[this]; }
            set { Fields.CampusCountryId[this] = value; }
        }

        [DisplayName("Campus Area Id"), Expression("jCampus.[AreaId]")]
        public Int32? CampusAreaId
        {
            get { return Fields.CampusAreaId[this]; }
            set { Fields.CampusAreaId[this] = value; }
        }
        [DisplayName("IDNO"), Size(200), QuickSearch,LookupInclude]
        public String IDNO
        {
            get { return Fields.IDNO[this]; }
            set { Fields.IDNO[this] = value; }
        }
        [DisplayName("Land Mark"), Size(200), QuickSearch, LookupInclude]
        public String LandMark
        {
            get { return Fields.LandMark[this]; }
            set { Fields.LandMark[this] = value; }
        }
        [DisplayName("Bus Stop"), Size(200), QuickSearch, LookupInclude]
        public String BusStop
        {
            get { return Fields.BusStop[this]; }
            set { Fields.BusStop[this] = value; }
        }
        [DisplayName("Remarks"), Size(500),TextAreaEditor, QuickSearch]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }
        [DisplayName("Photo"), Size(500)]
        [ImageUploadEditor(FilenameFormat = "UserImage/~", CopyToHistory = true)]
        public String Photo
        {
            get { return Fields.Photo[this]; }
            set { Fields.Photo[this] = value; }
        }
        [DisplayName("Campus Tenant Id"), Expression("jCampus.[TenantId]")]
        public Int32? CampusTenantId
        {
            get { return Fields.CampusTenantId[this]; }
            set { Fields.CampusTenantId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FullName; }
        }
        [LookupEditor(typeof(PromotionDetailsRow), Multiple = true), NotMapped,ReadOnly(true)]
        [LinkingSetRelation(typeof(PromotionDetailsRow), "StudentId", "Id",FilterField = "IsCompleted",FilterValue =0)]
        [DisplayName("Current Courses")]
        public List<Int32> CurrentCourses
        {
            get { return Fields.CurrentCourses[this]; }
            set { Fields.CurrentCourses[this] = value; }
        }
        [DisplayName("FullName"), QuickSearch, NotMapped,MinSelectLevel(SelectLevel.List),LookupInclude]
        [Expression("CONCAT(T0.[StudentName], CONCAT(' (', T0.[Code]),')')")]
        [Expression("(T0.StudentName || ' ' || T0.Code)", Dialect = "Sqlite")]
        public String FullName
        {
            get { return Fields.FullName[this]; }
            set { Fields.FullName[this] = value; }
        }
        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }
        public static readonly RowFields Fields = new RowFields().Init();

        public StudentsRow()
            : base(Fields)
        {
        }
        [DisplayName("Transportation Fee"), ForeignKey("[dbo].[Fees]", "Id"), LeftJoin("jFees")]
        [LookupEditor(typeof(FeesRow),FilterField = "IsTransportation", FilterValue = true, InplaceAdd = true)]
        public Int32? TranportationFeeId
        {
            get { return Fields.TranportationFeeId[this]; }
            set { Fields.TranportationFeeId[this] = value; }
        }
        [DisplayName("From AcadamicYear"), ForeignKey("[dbo].[AcadamicYear]", "Id"), LeftJoin("jAcadamicYear")]
        [LookupEditor(typeof(AcadamicYearRow))]
        public Int32? FromAcadamicYearId
        {
            get { return Fields.FromAcadamicYearId[this]; }
            set { Fields.FromAcadamicYearId[this] = value; }
        }
        [DisplayName("From FeeTerm"), ForeignKey("[dbo].[FeeTerms]", "Id"), LeftJoin("jFeeTerms")]
        [LookupEditor(typeof(FeeTermsRow),CascadeField = "AcadamicYearId",CascadeFrom = "FromAcadamicYearId")]
        public Int32? FromFeeTermId
        {
            get { return Fields.FromFeeTermId[this]; }
            set { Fields.FromFeeTermId[this] = value; }
        }
        [DisplayName("Academic Year"), NotNull, ForeignKey("[dbo].[AcadamicYear]", "Id"), LeftJoin("jAdmissionAcadamicYear")]
        [LookupEditor(typeof(Master.Entities.AcadamicYearRow))]
        public Int32? AdmissionAcadamicYearId
        {
            get { return Fields.AdmissionAcadamicYearId[this]; }
            set { Fields.AdmissionAcadamicYearId[this] = value; }
        }
        [DisplayName("Fee Term"), ForeignKey("[dbo].[FeeTerms]", "Id"), LeftJoin("jAdmissionFeeTerm")]
        [LookupEditor(typeof(FeeTermsRow), CascadeField = "AcadamicYearId", CascadeFrom = "AdmissionAcadamicYearId")]
        public Int32? AdmissionFeeTermId
        {
            get { return Fields.AdmissionFeeTermId[this]; }
            set { Fields.AdmissionFeeTermId[this] = value; }
        }

        //[LookupEditor(typeof(PromotionsRow), Multiple = true), QuickFilter, QuickSearch,MinSelectLevel(SelectLevel.List)]
        //[DisplayName("Promotions"),Expression("(select p.Id as Promotions  from students s inner join PromotionDetails pd on pd.studentid=s.Id inner join promotions p on p.id=pd.PromotionId where pd.IsCompleted=0 and pd.StudentId=T0.Id)")]
        //public Int32? Promotions
        //{
        //    get { return Fields.Promotions[this]; }
        //    set { Fields.Promotions[this] = value; }
        //}
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Code;
            public DateTimeField JoiningDate;
            public Int32Field JoiningCourse;
            public Int32Field FatherContactId;
            public Int32Field MotherContactId;
            public Int32Field StudentContactId;
            public Int32Field CampusId;
            public StringField OtherInstitute;
            public StringField Division;
            public readonly Int32Field TenantId;
            public StringField StudentName;
            public Int32Field Gender;
            public DateTimeField DOB;
            public StringField IDNO;
            public StringField LandMark;
            public StringField BusStop;
            public StringField Remarks;
            public StringField Photo;
            public ListField<Int32> CurrentCourses;
            public Int32Field JoiningDivisionId;
            public StringField FullName;
        //    public Int32Field Promotions;

            public Int32Field TranportationFeeId;
            public Int32Field FromAcadamicYearId;
            public Int32Field FromFeeTermId;


            public StringField JoiningCourseCode;
            public StringField JoiningCourseCourseName;
            public BooleanField JoiningCourseActive;
            public BooleanField JoiningCourseNonAcadamic;
            public Int32Field JoiningCourseTenantId;

            public StringField FatherContactName;
            public StringField FatherContactPhone;
            public StringField FatherContactEmail;
            public StringField FatherContactWhatsapp;
            public StringField FatherContactAddress1;
            public StringField FatherContactAddress2;
            public Int32Field FatherContactNationality;
            public Int32Field FatherContactTenantId;

            public StringField MotherContactName;
            public StringField MotherContactPhone;
            public StringField MotherContactEmail;
            public StringField MotherContactWhatsapp;
            public StringField MotherContactAddress1;
            public StringField MotherContactAddress2;
            public Int32Field MotherContactNationality;
            public Int32Field MotherContactTenantId;

            public StringField StudentContactName;
            public StringField StudentContactPhone;
            public StringField StudentContactEmail;
            public StringField StudentContactWhatsapp;
            public StringField StudentContactAddress1;
            public StringField StudentContactAddress2;
            public Int32Field StudentContactNationality;
            public Int32Field StudentContactTenantId;

            public StringField CampusCode;
            public StringField Campus;
            public StringField CampusAddress;
            public StringField CampusPhone;
            public StringField CampusContactPerson;
            public StringField CampusMobile;
            public StringField CampusEmail;
            public StringField CampusWebsite;
            public Int32Field CampusCountryId;
            public Int32Field CampusAreaId;
            public Int32Field CampusTenantId;

            public Int32Field AdmissionFeeTermId;
            public Int32Field AdmissionAcadamicYearId;
        }
    }
}
