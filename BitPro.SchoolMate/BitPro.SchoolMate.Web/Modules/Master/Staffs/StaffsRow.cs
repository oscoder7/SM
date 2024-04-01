
namespace BitPro.SchoolMate.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[Staffs]")]
    [DisplayName("Staffs"), InstanceName("Staffs")]
    [ReadPermission("Master:Staffs")]
    [ModifyPermission("Master:Staffs")]
    [LookupScript("Master.Staffs", Permission = "*", LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class StaffsRow : Row, IIdRow, INameRow,IMultiTenantRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Code"), Size(200), NotNull, QuickSearch]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }

        [DisplayName("Staff Name"), Size(200), NotNull,LookupInclude]
        public String StaffName
        {
            get { return Fields.StaffName[this]; }
            set { Fields.StaffName[this] = value; }
        }

        [DisplayName("Contact"), NotNull, ForeignKey("[dbo].[Contacts]", "Id"), LeftJoin("jContact"), TextualField("ContactName")]
        [LookupEditor(typeof(ContactsRow), InplaceAdd = true)]
        public Int32? ContactId
        {
            get { return Fields.ContactId[this]; }
            set { Fields.ContactId[this] = value; }
        }

        [DisplayName("Is Teacher"),LookupInclude,QuickSearch,QuickFilter]
        public Boolean? IsTeacher
        {
            get { return Fields.IsTeacher[this]; }
            set { Fields.IsTeacher[this] = value; }
        }

        [DisplayName("Remarks"), Size(500),TextAreaEditor]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }

        [DisplayName("Daily Wage"), Size(18), Scale(3)]
        public Decimal? DailyWage
        {
            get { return Fields.DailyWage[this]; }
            set { Fields.DailyWage[this] = value; }
        }

        [DisplayName("Contact Name"), Expression("jContact.[Name]")]
        public String ContactName
        {
            get { return Fields.ContactName[this]; }
            set { Fields.ContactName[this] = value; }
        }

        [DisplayName("Contact Phone"), Expression("jContact.[Phone]")]
        public String ContactPhone
        {
            get { return Fields.ContactPhone[this]; }
            set { Fields.ContactPhone[this] = value; }
        }

        [DisplayName("Contact Email"), Expression("jContact.[Email]")]
        public String ContactEmail
        {
            get { return Fields.ContactEmail[this]; }
            set { Fields.ContactEmail[this] = value; }
        }

        [DisplayName("Contact Whatsapp"), Expression("jContact.[Whatsapp]")]
        public String ContactWhatsapp
        {
            get { return Fields.ContactWhatsapp[this]; }
            set { Fields.ContactWhatsapp[this] = value; }
        }

        [DisplayName("Contact Address1"), Expression("jContact.[Address1]")]
        public String ContactAddress1
        {
            get { return Fields.ContactAddress1[this]; }
            set { Fields.ContactAddress1[this] = value; }
        }

        [DisplayName("Contact Address2"), Expression("jContact.[Address2]")]
        public String ContactAddress2
        {
            get { return Fields.ContactAddress2[this]; }
            set { Fields.ContactAddress2[this] = value; }
        }

        [DisplayName("Contact Nationality"), Expression("jContact.[Nationality]")]
        public Int32? ContactNationality
        {
            get { return Fields.ContactNationality[this]; }
            set { Fields.ContactNationality[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FullName; }
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

        [LookupEditor(typeof(SubjectsRow), Multiple = true), NotMapped]
        [LinkingSetRelation(typeof(StaffSubjectsRow), "StaffId", "SubjectId")]
        public List<Int32> StaffSubjects
        {
            get { return Fields.StaffSubjects[this]; }
            set { Fields.StaffSubjects[this] = value; }
        }

        [DisplayName("FullName"), QuickSearch, NotMapped,LookupInclude,MinSelectLevel(SelectLevel.Always)]
        [Expression("CONCAT(T0.[StaffName], CONCAT(' (', T0.[Code]),')')")]
        [Expression("(T0.StaffName || ' ' || T0.Code)", Dialect = "Sqlite")]
        public String FullName
        {
            get { return Fields.FullName[this]; }
            set { Fields.FullName[this] = value; }
        }
        [DisplayName("Qualification")]
        public String Qualification
        {
            get { return Fields.Qualification[this]; }
            set { Fields.Qualification[this] = value; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public StaffsRow()
            : base(Fields)
        {
        }
        [DisplayName("Joining Date"), QuickSearch/*, QuickFilter*/]
        public DateTime? JoiningDate
        {
            get { return Fields.JoiningDate[this]; }
            set { Fields.JoiningDate[this] = value; }
        }
        [DisplayName("Salary"), Size(18), Scale(3)]
        public Decimal? SalaryAmount
        {
            get { return Fields.SalaryAmount[this]; }
            set { Fields.SalaryAmount[this] = value; }
        }
        [DisplayName("DaysCount")]
        public Int32? DaysCount
        {
            get { return Fields.DaysCount[this]; }
            set { Fields.DaysCount[this] = value; }
        }
         
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Code;
            public StringField StaffName;
            public Int32Field ContactId;
            public BooleanField IsTeacher;
            public StringField Remarks;
            public DecimalField DailyWage;
            public ListField<Int32> StaffSubjects;
            public StringField FullName;
            public DateTimeField JoiningDate;
            public StringField Qualification;
            public DecimalField SalaryAmount;
            public Int32Field DaysCount;


           

            public readonly Int32Field TenantId;

            public StringField ContactName;
            public StringField ContactPhone;
            public StringField ContactEmail;
            public StringField ContactWhatsapp;
            public StringField ContactAddress1;
            public StringField ContactAddress2;
            public Int32Field ContactNationality;


            
        }
    }
}
