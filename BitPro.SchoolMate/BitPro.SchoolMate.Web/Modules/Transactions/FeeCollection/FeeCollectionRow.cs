
namespace BitPro.SchoolMate.Transactions.Entities
{
    using BitPro.SchoolMate.Accounts.Entities;
    using BitPro.SchoolMate.Master.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[FeeCollection]")]
    [DisplayName("Fee Collection"), InstanceName("Fee Collection")]
    [ReadPermission("Transactions:FeeCollection")]
    [ModifyPermission("Transactions:FeeCollectionModify")]
    [InsertPermission("Transactions:FeeCollectionCreate")]
    [DeletePermission("Transactions:FeeCollectionDelete")]
    [UpdatePermission("Transactions:FeeCollectionUpdate")]
    [LookupScript("Master.FeeCollection",Permission ="*", LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class FeeCollectionRow : Row, IIdRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Student"), NotNull, ForeignKey(typeof(StudentsRow)), LeftJoin("jStudent")]
        [LookupEditor(typeof(StudentsRow)), TextualField("StudentFullName")]
        public Int32? StudentId
        {
            get { return Fields.StudentId[this]; }
            set { Fields.StudentId[this] = value; }
        }

        //[DisplayName("Course"), NotNull, ForeignKey("[dbo].[Courses]", "Id"), LeftJoin("jCourse"), TextualField("CourseCode")]
        //[MyLookupEditor]
        //public Int32? CourseId
        //{
        //    get { return Fields.CourseId[this]; }
        //    set { Fields.CourseId[this] = value; }
        //}

        [DisplayName("Course"), NotNull, ForeignKey("[dbo].[PromotionDetails]", "Id"), LeftJoin("jPromotionDetails")]
        [LookupEditor(typeof(PromotionDetailsRow),CascadeField  = "StudentId", CascadeFrom = "StudentId")]
        public Int32? PromotionDetailId
        {
            get { return Fields.PromotionDetailId[this]; }
            set { Fields.PromotionDetailId[this] = value; }
        }
        [DisplayName("Pay Date"), NotNull,DefaultValue("today"),QuickFilter]
        public DateTime? PayDate
        {
            get { return Fields.PayDate[this]; }
            set { Fields.PayDate[this] = value; }
        }

        [DisplayName("Total Amount"), Size(18), Scale(3), NotNull,ReadOnly(true),DefaultValue(0),QuickSearch]
        public Decimal? TotalAmount
        {
            get { return Fields.TotalAmount[this]; }
            set { Fields.TotalAmount[this] = value; }
        }

        [DisplayName("Student Code"), Expression("jStudent.[Code]")]
        public String StudentCode
        {
            get { return Fields.StudentCode[this]; }
            set { Fields.StudentCode[this] = value; }
        }
        [Origin("jStudent"), DisplayName("Student Name"),QuickFilter,QuickSearch]
        public String StudentFullName
        {
            get { return Fields.StudentFullName[this]; }
            set { Fields.StudentFullName[this] = value; }
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

        //[DisplayName("Course Code"), Expression("jCourse.[Code]")]
        //public String CourseCode
        //{
        //    get { return Fields.CourseCode[this]; }
        //    set { Fields.CourseCode[this] = value; }
        //}

        //[DisplayName("Course Course Name"), Expression("jCourse.[CourseName]")]
        //public String CourseCourseName
        //{
        //    get { return Fields.CourseCourseName[this]; }
        //    set { Fields.CourseCourseName[this] = value; }
        //}

        //[DisplayName("Course Active"), Expression("jCourse.[Active]")]
        //public Boolean? CourseActive
        //{
        //    get { return Fields.CourseActive[this]; }
        //    set { Fields.CourseActive[this] = value; }
        //}

        //[DisplayName("Course Non Acadamic"), Expression("jCourse.[NonAcadamic]")]
        //public Boolean? CourseNonAcadamic
        //{
        //    get { return Fields.CourseNonAcadamic[this]; }
        //    set { Fields.CourseNonAcadamic[this] = value; }
        //}
        [DisplayName("Fee Allocations"), MasterDetailRelation(foreignKey: "FeeCollectionId"), NotMapped]
        public List<FeeAllocationRow> FeeAllocations
        {
            get { return Fields.FeeAllocations[this]; }
            set { Fields.FeeAllocations[this] = value; }
        }
        [DisplayName("Transportation Fees"), MasterDetailRelation(foreignKey: "FeeCollectionId"), NotMapped]
        public List<FeeAllocationTranportationRow> TranportationFee
        {
            get { return Fields.TranportationFee[this]; }
            set { Fields.TranportationFee[this] = value; }
        }
        //[DisplayName("Course Tenant Id"), Expression("jCourse.[TenantId]")]
        //public Int32? CourseTenantId
        //{
        //    get { return Fields.CourseTenantId[this]; }
        //    set { Fields.CourseTenantId[this] = value; }
        //}
        [DisplayName("Academic Year"), NotNull, ForeignKey("[dbo].[AcadamicYear]", "Id"), LeftJoin("jAcadamicYear"), TextualField("AcadamicYearCode")]
        [LookupEditor(typeof(AcadamicYearRow), InplaceAdd = true)]
        public Int32? AcadamicYearId
        {
            get { return Fields.AcadamicYearId[this]; }
            set { Fields.AcadamicYearId[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FeeCollectionRow()
            : base(Fields)
        {
        }
        [DisplayName("Payment Method"), NotNull]
        public AccountTypes? PaymentMethod
        {
            get { return (AccountTypes?)Fields.PaymentMethod[this]; }
            set { Fields.PaymentMethod[this] = (int?)value; }
        }
        [DisplayName("Affected Account"), ForeignKey("[dbo].[Accounts]", "Id"), LeftJoin("jCreditAccount"), TextualField("CreditAccountAccountNo"), Required]
        [LookupEditor(typeof(AccountsRow), CascadeField = "Type", CascadeFrom = "PaymentMethod")]
        public Int32? AccountId
        {
            get { return Fields.AccountId[this]; }
            set { Fields.AccountId[this] = value; }
        }
        [DisplayName("Credit Account Type"), Expression("jCreditAccount.[Type]")]
        public Int32? CreditAccountType
        {
            get { return Fields.CreditAccountType[this]; }
            set { Fields.CreditAccountType[this] = value; }
        }

        [DisplayName("Affected Account No"), Expression("jCreditAccount.[AccountNo]")]
        public String CreditAccountAccountNo
        {
            get { return Fields.CreditAccountAccountNo[this]; }
            set { Fields.CreditAccountAccountNo[this] = value; }
        }

        [DisplayName("Credit Account Account Head Id"), Expression("jCreditAccount.[AccountHeadId]")]
        public Int32? CreditAccountAccountHeadId
        {
            get { return Fields.CreditAccountAccountHeadId[this]; }
            set { Fields.CreditAccountAccountHeadId[this] = value; }
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
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field StudentId;
            //public Int32Field CourseId;
            public DateTimeField PayDate;
            public RowListField<FeeAllocationRow> FeeAllocations;
            public RowListField<FeeAllocationTranportationRow> TranportationFee;
            public DecimalField TotalAmount;
            public Int32Field AcadamicYearId;
            public readonly Int32Field TenantId;
            public Int32Field PromotionDetailId;
            public Int32Field AccountId;
            public Int32Field PaymentMethod;


            public StringField StudentCode;
            public StringField StudentFullName;
            public DateTimeField StudentJoiningDate;
            public Int32Field StudentJoiningCourse;
            public Int32Field StudentFatherContactId;
            public Int32Field StudentMotherContactId;
            public Int32Field StudentStudentContactId;
            public Int32Field StudentCampusId;
            public StringField StudentOtherInstitute;
            public StringField StudentDivision;
            public Int32Field StudentTenantId;

            public Int32Field CreditAccountType;
            public StringField CreditAccountAccountNo;
            public Int32Field CreditAccountAccountHeadId;

            //public StringField CourseCode;
            //public StringField CourseCourseName;
            //public BooleanField CourseActive;
            //public BooleanField CourseNonAcadamic;
            //public Int32Field CourseTenantId;
        }
    }
}
