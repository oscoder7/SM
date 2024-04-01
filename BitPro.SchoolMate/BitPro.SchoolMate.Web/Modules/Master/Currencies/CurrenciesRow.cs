
namespace BitPro.SchoolMate.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[Currencies]")]
    [DisplayName("Currencies"), InstanceName("Currencies")]
    [ReadPermission("Master:Currencies")]
    [ModifyPermission("Master:Currencies")]
    [LookupScript("Master.Currencies"/*, LookupType = typeof(MultiTenantRowLookupScript<>)*/,Permission ="*")]
    public sealed class CurrenciesRow : Row, IIdRow, INameRow /*IMultiTenantRow*/
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

        [DisplayName("Currency Name"), Size(200), NotNull]
        public String CurrencyName
        {
            get { return Fields.CurrencyName[this]; }
            set { Fields.CurrencyName[this] = value; }
        }

        [DisplayName("Precision")]
        public Int32? Precision
        {
            get { return Fields.Precision[this]; }
            set { Fields.Precision[this] = value; }
        }

        [DisplayName("Tenant Id"), NotNull]
        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Code; }
        }
        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CurrenciesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Code;
            public StringField CurrencyName;
            public Int32Field Precision;
            public readonly Int32Field TenantId;
        }
    }
}
