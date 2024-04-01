
namespace BitPro.SchoolMate.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Administration"), TableName("[dbo].[Config]")]
    [DisplayName("Settings"), InstanceName("Settings")]
    [ReadPermission("Administration:Settings")]
    [ModifyPermission("Administration:Settings")]
    public sealed class SettingsRow : Row, IIdRow, INameRow, IMultiTenantRow
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

        [DisplayName("Type"), Size(200), NotNull]
        public String Type
        {
            get { return Fields.Type[this]; }
            set { Fields.Type[this] = value; }
        }

        [DisplayName("Value String"), Size(200)]
        public String ValueString
        {
            get { return Fields.ValueString[this]; }
            set { Fields.ValueString[this] = value; }
        }

        [DisplayName("Value Date")]
        public DateTime? ValueDate
        {
            get { return Fields.ValueDate[this]; }
            set { Fields.ValueDate[this] = value; }
        }

        [DisplayName("Value Number"), Size(18), Scale(3)]
        public Decimal? ValueNumber
        {
            get { return Fields.ValueNumber[this]; }
            set { Fields.ValueNumber[this] = value; }
        }

        [DisplayName("Value Bool")]
        public Boolean? ValueBool
        {
            get { return Fields.ValueBool[this]; }
            set { Fields.ValueBool[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
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
        public static readonly RowFields Fields = new RowFields().Init();

        public SettingsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Name;
            public StringField Type;
            public StringField ValueString;
            public DateTimeField ValueDate;
            public DecimalField ValueNumber;
            public BooleanField ValueBool;
            public readonly Int32Field TenantId;
        }
    }
}
