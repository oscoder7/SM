
namespace BitPro.SchoolMate.Transactions.Entities
{
    using BitPro.SchoolMate.Master.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[SalaryStructure]")]
    [DisplayName("Salary Structure"), InstanceName("Salary Structure")]
    [ReadPermission("Transactions:Salary")]
    [ModifyPermission("Transactions:Salary")]
    public sealed class SalaryStructureRow : Row, IIdRow,IMultiTenantRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("From Date"), NotNull]
        public DateTime? FromDate
        {
            get { return Fields.FromDate[this]; }
            set { Fields.FromDate[this] = value; }
        }

        [DisplayName("To Date"), NotNull]
        public DateTime? ToDate
        {
            get { return Fields.ToDate[this]; }
            set { Fields.ToDate[this] = value; }
        }

        [DisplayName("Created Date"), NotNull,DefaultValue("today")]
        public DateTime? CreatedDate
        {
            get { return Fields.CreatedDate[this]; }
            set { Fields.CreatedDate[this] = value; }
        }

        [DisplayName("Created By"), ForeignKey("[dbo].[Staffs]", "Id"), LeftJoin("jCreatedBy"), TextualField("CreatedByCode")]
        [LookupEditor(typeof(StaffsRow))]
        public Int32? CreatedBy
        {
            get { return Fields.CreatedBy[this]; }
            set { Fields.CreatedBy[this] = value; }
        }

        [DisplayName("Tenant Id"), NotNull]
        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        [DisplayName("Created By Code"), Expression("jCreatedBy.[Code]")]
        public String CreatedByCode
        {
            get { return Fields.CreatedByCode[this]; }
            set { Fields.CreatedByCode[this] = value; }
        }

        [DisplayName("Created By Staff Name"), Expression("jCreatedBy.[StaffName]")]
        public String CreatedByStaffName
        {
            get { return Fields.CreatedByStaffName[this]; }
            set { Fields.CreatedByStaffName[this] = value; }
        }

        [DisplayName("Created By Contact Id"), Expression("jCreatedBy.[ContactId]")]
        public Int32? CreatedByContactId
        {
            get { return Fields.CreatedByContactId[this]; }
            set { Fields.CreatedByContactId[this] = value; }
        }

        [DisplayName("Created By Is Teacher"), Expression("jCreatedBy.[IsTeacher]")]
        public Boolean? CreatedByIsTeacher
        {
            get { return Fields.CreatedByIsTeacher[this]; }
            set { Fields.CreatedByIsTeacher[this] = value; }
        }

        [DisplayName("Created By Remarks"), Expression("jCreatedBy.[Remarks]")]
        public String CreatedByRemarks
        {
            get { return Fields.CreatedByRemarks[this]; }
            set { Fields.CreatedByRemarks[this] = value; }
        }

        [DisplayName("Created By Daily Wage"), Expression("jCreatedBy.[DailyWage]")]
        public Decimal? CreatedByDailyWage
        {
            get { return Fields.CreatedByDailyWage[this]; }
            set { Fields.CreatedByDailyWage[this] = value; }
        }

        [DisplayName("Created By Tenant Id"), Expression("jCreatedBy.[TenantId]")]
        public Int32? CreatedByTenantId
        {
            get { return Fields.CreatedByTenantId[this]; }
            set { Fields.CreatedByTenantId[this] = value; }
        }

        [DisplayName("Created By Joining Date"), Expression("jCreatedBy.[JoiningDate]")]
        public DateTime? CreatedByJoiningDate
        {
            get { return Fields.CreatedByJoiningDate[this]; }
            set { Fields.CreatedByJoiningDate[this] = value; }
        }

        [DisplayName("Created By Qualification"), Expression("jCreatedBy.[Qualification]")]
        public String CreatedByQualification
        {
            get { return Fields.CreatedByQualification[this]; }
            set { Fields.CreatedByQualification[this] = value; }
        }

        [DisplayName("Created By Salary Amount"), Expression("jCreatedBy.[SalaryAmount]")]
        public Decimal? CreatedBySalaryAmount
        {
            get { return Fields.CreatedBySalaryAmount[this]; }
            set { Fields.CreatedBySalaryAmount[this] = value; }
        }

        [DisplayName("Created By Days Count"), Expression("jCreatedBy.[DaysCount]")]
        public Int32? CreatedByDaysCount
        {
            get { return Fields.CreatedByDaysCount[this]; }
            set { Fields.CreatedByDaysCount[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }
        [DisplayName("Salary Payments"), MasterDetailRelation(foreignKey: "SalaryStructureId"), NotMapped]
        public List<SalaryPaymentsRow> SalaryPayments
        {
            get { return Fields.SalaryPayments[this]; }
            set { Fields.SalaryPayments[this] = value; }
        }
        public static readonly RowFields Fields = new RowFields().Init();

        public SalaryStructureRow()
            : base(Fields)
        {
        }
        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public DateTimeField FromDate;
            public DateTimeField ToDate;
            public DateTimeField CreatedDate;
            public Int32Field CreatedBy;
            public readonly Int32Field TenantId;

            public RowListField<SalaryPaymentsRow> SalaryPayments;

            public StringField CreatedByCode;
            public StringField CreatedByStaffName;
            public Int32Field CreatedByContactId;
            public BooleanField CreatedByIsTeacher;
            public StringField CreatedByRemarks;
            public DecimalField CreatedByDailyWage;
            public Int32Field CreatedByTenantId;
            public DateTimeField CreatedByJoiningDate;
            public StringField CreatedByQualification;
            public DecimalField CreatedBySalaryAmount;
            public Int32Field CreatedByDaysCount;
        }
    }
}
