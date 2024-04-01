
namespace BitPro.SchoolMate.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[FeeTerms]")]
    [DisplayName("Fee Terms"), InstanceName("Fee Terms")]
    [ReadPermission("Master:FeeTerms")]
    [ModifyPermission("Master:FeeTerms")]
    [LookupScript("Master.FeeTerms", Permission = "*", LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class FeeTermsRow : Row, IIdRow, INameRow,IMultiTenantRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Term Name"), Size(200), NotNull, QuickSearch]
        public String TermName
        {
            get { return Fields.TermName[this]; }
            set { Fields.TermName[this] = value; }
        }

       

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.TermName; }
        }
        [DisplayName("Tenant Id"), NotNull]
        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }
        [DisplayName("Acadamic Year"), NotNull, ForeignKey("[dbo].[AcadamicYear]", "Id"), LeftJoin("jAcadamicYear"), TextualField("AcadamicYearCode")]
        [LookupEditor(typeof(AcadamicYearRow)),LookupInclude]
        public Int32? AcadamicYearId
        {
            get { return Fields.AcadamicYearId[this]; }
            set { Fields.AcadamicYearId[this] = value; }
        }
        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }
        public static readonly RowFields Fields = new RowFields().Init();

        public FeeTermsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField TermName;
            public readonly Int32Field TenantId;

            public Int32Field AcadamicYearId;
        }
    }
}
