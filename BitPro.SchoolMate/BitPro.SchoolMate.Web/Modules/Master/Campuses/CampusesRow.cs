
namespace BitPro.SchoolMate.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[Campuses]")]
    [DisplayName("Campuses"), InstanceName("Campuses")]
    [ReadPermission("Master:Campuses")]
    [ModifyPermission("Master:Campuses")]
    [LookupScript("Master.Campuses", Permission = "*", LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class CampusesRow : Row, IIdRow, INameRow, IMultiTenantRow
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

        [DisplayName("Campus"), Size(200), NotNull]
        public String Campus
        {
            get { return Fields.Campus[this]; }
            set { Fields.Campus[this] = value; }
        }

        [DisplayName("Address"), Size(500),TextAreaEditor]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }
        [DisplayName("Student Prefix"), Size(100),LookupInclude]
        public String Student_Prefix
        {
            get { return Fields.Student_Prefix[this]; }
            set { Fields.Student_Prefix[this] = value; }
        }
        [DisplayName("Code Length"),LookupInclude]
        public Int32? CodeLength
        {
            get { return Fields.CodeLength[this]; }
            set { Fields.CodeLength[this] = value; }
        }
        [DisplayName("Phone"), Size(200)]
        public String Phone
        {
            get { return Fields.Phone[this]; }
            set { Fields.Phone[this] = value; }
        }

        [DisplayName("Contact Person"), Size(200)]
        public String ContactPerson
        {
            get { return Fields.ContactPerson[this]; }
            set { Fields.ContactPerson[this] = value; }
        }

        [DisplayName("Mobile"), Size(200)]
        public String Mobile
        {
            get { return Fields.Mobile[this]; }
            set { Fields.Mobile[this] = value; }
        }

        [DisplayName("Email"), Size(200)]
        [EmailAddressEditor]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Website"), Size(200)]
        public String Website
        {
            get { return Fields.Website[this]; }
            set { Fields.Website[this] = value; }
        }

        [DisplayName("Country"), ForeignKey("[dbo].[Countries]", "Id"), LeftJoin("jCountry"), TextualField("CountryCode")]
        [LookupEditor(typeof(CountriesRow), InplaceAdd = true)]
        public Int32? CountryId
        {
            get { return Fields.CountryId[this]; }
            set { Fields.CountryId[this] = value; }
        }

        [DisplayName("Area"), ForeignKey("[dbo].[Areas]", "Id"), LeftJoin("jArea"), TextualField("AreaCode")]
        [LookupEditor(typeof(AreasRow), InplaceAdd = true, CascadeFrom = "CountryId", CascadeField = "CountryId")]
        public Int32? AreaId
        {
            get { return Fields.AreaId[this]; }
            set { Fields.AreaId[this] = value; }
        }

        [DisplayName("Tenant Id"), NotNull]
        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        [DisplayName("Country Code"), Expression("jCountry.[Code]")]
        public String CountryCode
        {
            get { return Fields.CountryCode[this]; }
            set { Fields.CountryCode[this] = value; }
        }

        [DisplayName("Country Country Name"), Expression("jCountry.[CountryName]")]
        public String CountryCountryName
        {
            get { return Fields.CountryCountryName[this]; }
            set { Fields.CountryCountryName[this] = value; }
        }

        [DisplayName("Country Currency Id"), Expression("jCountry.[CurrencyId]")]
        public Int32? CountryCurrencyId
        {
            get { return Fields.CountryCurrencyId[this]; }
            set { Fields.CountryCurrencyId[this] = value; }
        }

        [DisplayName("Country Tenant Id"), Expression("jCountry.[TenantId]")]
        public Int32? CountryTenantId
        {
            get { return Fields.CountryTenantId[this]; }
            set { Fields.CountryTenantId[this] = value; }
        }

        [DisplayName("Area Code"), Expression("jArea.[Code]")]
        public String AreaCode
        {
            get { return Fields.AreaCode[this]; }
            set { Fields.AreaCode[this] = value; }
        }
        [DisplayName("IsDefault")]
        public Boolean? IsDefault
        {
            get { return Fields.IsDefault[this]; }
            set { Fields.IsDefault[this] = value; }
        }
        [DisplayName("Area Area Name"), Expression("jArea.[AreaName]")]
        public String AreaAreaName
        {
            get { return Fields.AreaAreaName[this]; }
            set { Fields.AreaAreaName[this] = value; }
        }

        [DisplayName("Area Country Id"), Expression("jArea.[CountryId]")]
        public Int32? AreaCountryId
        {
            get { return Fields.AreaCountryId[this]; }
            set { Fields.AreaCountryId[this] = value; }
        }

        [DisplayName("Area Tenant Id"), Expression("jArea.[TenantId]")]
        public Int32? AreaTenantId
        {
            get { return Fields.AreaTenantId[this]; }
            set { Fields.AreaTenantId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FullName; }
        }
        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }
        public static readonly RowFields Fields = new RowFields().Init();

        public CampusesRow()
            : base(Fields)
        {
        }
        [DisplayName("FullName"), QuickSearch, NotMapped, MinSelectLevel(SelectLevel.List), LookupInclude]
        [Expression("CONCAT(T0.[Campus], CONCAT(' (', T0.[Code]),')')")]
        [Expression("(T0.Campus || ' ' || T0.Code)", Dialect = "Sqlite")]
        public String FullName
        {
            get { return Fields.FullName[this]; }
            set { Fields.FullName[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Code;
            public StringField Campus;
            public StringField Address;
            public StringField Phone;
            public StringField ContactPerson;
            public StringField Mobile;
            public StringField Email;
            public StringField Website;
            public Int32Field CountryId;
            public Int32Field AreaId;
            public StringField Student_Prefix;
            public Int32Field CodeLength;
            public readonly Int32Field TenantId;
            public BooleanField IsDefault;
            public StringField FullName;

            public StringField CountryCode;
            public StringField CountryCountryName;
            public Int32Field CountryCurrencyId;
            public Int32Field CountryTenantId;

            public StringField AreaCode;
            public StringField AreaAreaName;
            public Int32Field AreaCountryId;
            public Int32Field AreaTenantId;
        }
    }
}
