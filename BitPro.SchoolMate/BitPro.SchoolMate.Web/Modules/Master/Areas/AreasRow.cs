
namespace BitPro.SchoolMate.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[Areas]")]
    [DisplayName("Areas"), InstanceName("Areas")]
    [ReadPermission("Master:Areas")]
    [ModifyPermission("Master:Areas")]
    [LookupScript("Master.Areas", Permission = "*", LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class AreasRow : Row, IIdRow, INameRow, IMultiTenantRow
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

        [DisplayName("Area Name"), Size(200), NotNull]
        public String AreaName
        {
            get { return Fields.AreaName[this]; }
            set { Fields.AreaName[this] = value; }
        }

        [DisplayName("Country"), ForeignKey("[dbo].[Currencies]", "Id"), LeftJoin("jCountry"), TextualField("CountryCode")]
        [LookupEditor(typeof(CountriesRow),InplaceAdd =true),LookupInclude]
        public Int32? CountryId
        {
            get { return Fields.CountryId[this]; }
            set { Fields.CountryId[this] = value; }
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

        [DisplayName("Country Currency Name"), Expression("jCountry.[CurrencyName]")]
        public String CountryCurrencyName
        {
            get { return Fields.CountryCurrencyName[this]; }
            set { Fields.CountryCurrencyName[this] = value; }
        }

        [DisplayName("Country Precision"), Expression("jCountry.[Precision]")]
        public Int32? CountryPrecision
        {
            get { return Fields.CountryPrecision[this]; }
            set { Fields.CountryPrecision[this] = value; }
        }

        [DisplayName("Country Tenant Id"), Expression("jCountry.[TenantId]")]
        public Int32? CountryTenantId
        {
            get { return Fields.CountryTenantId[this]; }
            set { Fields.CountryTenantId[this] = value; }
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
            get { return Fields.Code; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AreasRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Code;
            public StringField AreaName;
            public Int32Field CountryId;
            public readonly Int32Field TenantId;

            public StringField CountryCode;
            public StringField CountryCurrencyName;
            public Int32Field CountryPrecision;
            public Int32Field CountryTenantId;
        }
    }
}
