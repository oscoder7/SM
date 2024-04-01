
namespace BitPro.SchoolMate.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[Contacts]")]
    [DisplayName("Contacts"), InstanceName("Contacts")]
    [ReadPermission("Master:Contacts")]
    [ModifyPermission("Master:ContactsModify")]
    [InsertPermission("Master:ContactsCreate")]
    [DeletePermission("Master:ContactsDelete")]
    [UpdatePermission("Master:ContactsUpdate")]
    [LookupScript("Master.Contacts", Permission = "*", LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class ContactsRow : Row, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Name"), Size(200), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Phone"), Size(200)]
        public String Phone
        {
            get { return Fields.Phone[this]; }
            set { Fields.Phone[this] = value; }
        }

        [DisplayName("Email"), Size(200),EmailAddressEditor]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Whatsapp"), Size(200)]
        public String Whatsapp
        {
            get { return Fields.Whatsapp[this]; }
            set { Fields.Whatsapp[this] = value; }
        }

        [DisplayName("Address1"), Size(500),TextAreaEditor]
        public String Address1
        {
            get { return Fields.Address1[this]; }
            set { Fields.Address1[this] = value; }
        }

        [DisplayName("Address2"), Size(500),TextAreaEditor]
        public String Address2
        {
            get { return Fields.Address2[this]; }
            set { Fields.Address2[this] = value; }
        }

        [DisplayName("Nationality"), ForeignKey("[dbo].[Countries]", "Id"), LeftJoin("jNationality"), TextualField("NationalityCode")]
        [LookupEditor(typeof(CountriesRow), InplaceAdd = true)]
        public Int32? Nationality
        {
            get { return Fields.Nationality[this]; }
            set { Fields.Nationality[this] = value; }
        }

        [DisplayName("Nationality Code"), Expression("jNationality.[Code]")]
        public String NationalityCode
        {
            get { return Fields.NationalityCode[this]; }
            set { Fields.NationalityCode[this] = value; }
        }

        [DisplayName("Nationality Country Name"), Expression("jNationality.[CountryName]")]
        public String NationalityCountryName
        {
            get { return Fields.NationalityCountryName[this]; }
            set { Fields.NationalityCountryName[this] = value; }
        }

        [DisplayName("Nationality Currency Id"), Expression("jNationality.[CurrencyId]")]
        public Int32? NationalityCurrencyId
        {
            get { return Fields.NationalityCurrencyId[this]; }
            set { Fields.NationalityCurrencyId[this] = value; }
        }

        [DisplayName("Nationality Tenant Id"), Expression("jNationality.[TenantId]")]
        public Int32? NationalityTenantId
        {
            get { return Fields.NationalityTenantId[this]; }
            set { Fields.NationalityTenantId[this] = value; }
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
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ContactsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Name;
            public StringField Phone;
            public StringField Email;
            public StringField Whatsapp;
            public StringField Address1;
            public StringField Address2;
            public Int32Field Nationality;
            public readonly Int32Field TenantId;

            public StringField NationalityCode;
            public StringField NationalityCountryName;
            public Int32Field NationalityCurrencyId;
            public Int32Field NationalityTenantId;
        }
    }
}
