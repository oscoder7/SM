
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

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[AcadamicYear]")]
    [DisplayName("Academic Year"), InstanceName("Academic Year")]
    [ReadPermission("Master:AcademicYear")]
    [ModifyPermission("Master:AcademicYear")]
    [LookupScript("Master.AcademicYear", Permission = "*", LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class AcadamicYearRow : Row, IIdRow, INameRow,IMultiTenantRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
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
        [DisplayName("Code"), Size(200), NotNull, QuickSearch]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }

        [DisplayName("Period From"), NotNull]
        [DateFormatter(DisplayFormat = "dd/MM/yyyy")]
        public DateTime? PeriodFrom
        {
            get { return Fields.PeriodFrom[this]; }
            set { Fields.PeriodFrom[this] = value; }
        }

        [DisplayName("Period To"), NotNull]
        public DateTime? PeriodTo
        {
            get { return Fields.PeriodTo[this]; }
            set { Fields.PeriodTo[this] = value; }
        }

        [DisplayName("Description"), Size(500),TextAreaEditor]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Code; }
        }
        [DisplayName("Fee Terms"), MasterDetailRelation(foreignKey: "AcadamicYearId"), NotMapped]
        public List<FeeTermsRow> FeeTerms
        {
            get { return Fields.FeeTerms[this]; }
            set { Fields.FeeTerms[this] = value; }
        }
        public static readonly RowFields Fields = new RowFields().Init();

        public AcadamicYearRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Code;
            public DateTimeField PeriodFrom;
            public DateTimeField PeriodTo;
            public StringField Description;
            public RowListField<FeeTermsRow> FeeTerms;

            public readonly Int32Field TenantId;
        }
    }
}
