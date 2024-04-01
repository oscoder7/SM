
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

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[Exams]")]
    [DisplayName("Exams"), InstanceName("Exams")]
    [ReadPermission("Master:Exams")]
    [ModifyPermission("Master:Exams")]
    [LookupScript("Master.Exams", LookupType = typeof(MultiTenantRowLookupScript<>), Permission = "*")]
    public sealed class ExamsRow : Row, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Code"), Size(100), NotNull, QuickSearch]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }

        [DisplayName("Exam Name"), Size(100), NotNull]
        public String ExamName
        {
            get { return Fields.ExamName[this]; }
            set { Fields.ExamName[this] = value; }
        }

        [DisplayName("Acadamic Year"), NotNull, ForeignKey("[dbo].[AcadamicYear]", "Id"), LeftJoin("jAcadamicYear"), TextualField("AcadamicYearCode")]
        [LookupEditor(typeof(AcadamicYearRow)),LookupInclude]
        public Int32? AcadamicYearId
        {
            get { return Fields.AcadamicYearId[this]; }
            set { Fields.AcadamicYearId[this] = value; }
        }

        [DisplayName("Acadamic Year Code"), Expression("jAcadamicYear.[Code]")]
        public String AcadamicYearCode
        {
            get { return Fields.AcadamicYearCode[this]; }
            set { Fields.AcadamicYearCode[this] = value; }
        }

        [DisplayName("Acadamic Year Period From"), Expression("jAcadamicYear.[PeriodFrom]")]
        public DateTime? AcadamicYearPeriodFrom
        {
            get { return Fields.AcadamicYearPeriodFrom[this]; }
            set { Fields.AcadamicYearPeriodFrom[this] = value; }
        }

        [DisplayName("Acadamic Year Period To"), Expression("jAcadamicYear.[PeriodTo]")]
        public DateTime? AcadamicYearPeriodTo
        {
            get { return Fields.AcadamicYearPeriodTo[this]; }
            set { Fields.AcadamicYearPeriodTo[this] = value; }
        }

        [DisplayName("Acadamic Year Description"), Expression("jAcadamicYear.[Description]")]
        public String AcadamicYearDescription
        {
            get { return Fields.AcadamicYearDescription[this]; }
            set { Fields.AcadamicYearDescription[this] = value; }
        }

        [DisplayName("Acadamic Year Tenant Id"), Expression("jAcadamicYear.[TenantId]")]
        public Int32? AcadamicYearTenantId
        {
            get { return Fields.AcadamicYearTenantId[this]; }
            set { Fields.AcadamicYearTenantId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ExamName; }
        }
        [DisplayName("Courses"), MasterDetailRelation(foreignKey: "ExamId"), NotMapped]
        public List<ExamCoursesRow> Courses
        {
            get { return Fields.Courses[this]; }
            set { Fields.Courses[this] = value; }
        }
        public static readonly RowFields Fields = new RowFields().Init();

        public ExamsRow()
            : base(Fields)
        {
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
            public StringField Code;
            public StringField ExamName;
            public Int32Field AcadamicYearId;
            public RowListField<ExamCoursesRow> Courses;
            public readonly Int32Field TenantId;

            public StringField AcadamicYearCode;
            public DateTimeField AcadamicYearPeriodFrom;
            public DateTimeField AcadamicYearPeriodTo;
            public StringField AcadamicYearDescription;
            public Int32Field AcadamicYearTenantId;
        }
    }
}
