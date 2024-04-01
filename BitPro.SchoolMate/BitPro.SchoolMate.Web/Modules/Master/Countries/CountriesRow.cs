
namespace BitPro.SchoolMate.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[Countries]")]
    [DisplayName("Countries"), InstanceName("Countries")]
    [ReadPermission("Master:Countries")]
    [ModifyPermission("Master:Countries")]
    [LookupScript("Master.Countries"/*, LookupType = typeof(MultiTenantRowLookupScript<>)*/,Permission ="*")]
    public sealed class CountriesRow : Row, IIdRow, INameRow
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

        [DisplayName("Country Name"), Size(200), NotNull]
        public String CountryName
        {
            get { return Fields.CountryName[this]; }
            set { Fields.CountryName[this] = value; }
        }

        [DisplayName("Currency"), ForeignKey("[dbo].[Currencies]", "Id"), LeftJoin("jCurrency"), TextualField("CurrencyCode")]
        [LookupEditor(typeof(CurrenciesRow), InplaceAdd = true)]
        public Int32? CurrencyId
        {
            get { return Fields.CurrencyId[this]; }
            set { Fields.CurrencyId[this] = value; }
        }

        [DisplayName("Tenant Id"), NotNull]
        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        [DisplayName("Currency Code"), Expression("jCurrency.[Code]")]
        public String CurrencyCode
        {
            get { return Fields.CurrencyCode[this]; }
            set { Fields.CurrencyCode[this] = value; }
        }

        [DisplayName("Currency Currency Name"), Expression("jCurrency.[CurrencyName]")]
        public String CurrencyCurrencyName
        {
            get { return Fields.CurrencyCurrencyName[this]; }
            set { Fields.CurrencyCurrencyName[this] = value; }
        }

        [DisplayName("Currency Precision"), Expression("jCurrency.[Precision]")]
        public Int32? CurrencyPrecision
        {
            get { return Fields.CurrencyPrecision[this]; }
            set { Fields.CurrencyPrecision[this] = value; }
        }

        [DisplayName("Currency Tenant Id"), Expression("jCurrency.[TenantId]")]
        public Int32? CurrencyTenantId
        {
            get { return Fields.CurrencyTenantId[this]; }
            set { Fields.CurrencyTenantId[this] = value; }
        }
        [DisplayName("FullName"), QuickSearch,NotMapped]
        [Expression("CONCAT(T0.[CountryName], CONCAT(' (', T0.[Code]),')')")]
        [Expression("(T0.CountryName || ' ' || T0.Code)", Dialect = "Sqlite")]
        public String FullName
        {
            get { return Fields.FullName[this]; }
            set { Fields.FullName[this] = value; }
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
            get { return Fields.FullName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CountriesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Code;
            public StringField CountryName;
            public Int32Field CurrencyId;
            public readonly Int32Field TenantId;
            public StringField FullName;

            public StringField CurrencyCode;
            public StringField CurrencyCurrencyName;
            public Int32Field CurrencyPrecision;
            public Int32Field CurrencyTenantId;
        }
    }
}
