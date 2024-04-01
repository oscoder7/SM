
namespace BitPro.SchoolMate.Transactions.Entities
{
    using BitPro.SchoolMate.Accounts.Entities;
    using BitPro.SchoolMate.Master.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Transactions"), TableName("[dbo].[SalaryPayments]")]
    [DisplayName("Salary Payments"), InstanceName("Salary Payments")]
    [ReadPermission("Transactions:Salary")]
    [ModifyPermission("Transactions:Salary")]
    public sealed class SalaryPaymentsRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Salary Structure"), NotNull, ForeignKey("[dbo].[SalaryStructure]", "Id"), LeftJoin("jSalaryStructure"), LookupInclude]
        public Int32? SalaryStructureId
        {
            get { return Fields.SalaryStructureId[this]; }
            set { Fields.SalaryStructureId[this] = value; }
        }

        [DisplayName("Staff"), NotNull, ForeignKey("[dbo].[Staffs]", "Id"), LeftJoin("jStaff"), TextualField("StaffCode"),LookupInclude]
        [LookupEditor(typeof(StaffsRow))]
        public Int32? StaffId
        {
            get { return Fields.StaffId[this]; }
            set { Fields.StaffId[this] = value; }
        }

        [DisplayName("Paid Date")]
        public DateTime? PaidDate
        {
            get { return Fields.PaidDate[this]; }
            set { Fields.PaidDate[this] = value; }
        }

        [DisplayName("Paid Amount"), Size(18), Scale(3),ReadOnly(true)]
        public Decimal? PaidAmount
        {
            get { return Fields.PaidAmount[this]; }
            set { Fields.PaidAmount[this] = value; }
        }
        [DisplayName("Salary Amount"), Size(18), Scale(3)]
        public Decimal? SalaryAmount
        {
            get { return Fields.SalaryAmount[this]; }
            set { Fields.SalaryAmount[this] = value; }
        }
        [DisplayName("Payment Method")]
        public AccountTypes? PaymentMethod
        {
            get { return (AccountTypes?)Fields.PaymentMethod[this]; }
            set { Fields.PaymentMethod[this] = (int?)value; }
        }

        [DisplayName("Account"), ForeignKey("[dbo].[Accounts]", "Id"), LeftJoin("jCreditAccount"), TextualField("CreditAccountAccountNo")]
        [LookupEditor(typeof(AccountsRow), CascadeField = "Type", CascadeFrom = "PaymentMethod")]
        public Int32? CreditAccountId
        {
            get { return Fields.CreditAccountId[this]; }
            set { Fields.CreditAccountId[this] = value; }
        }

        [DisplayName("Salary Structure From Date"), Expression("jSalaryStructure.[FromDate]")]
        public DateTime? SalaryStructureFromDate
        {
            get { return Fields.SalaryStructureFromDate[this]; }
            set { Fields.SalaryStructureFromDate[this] = value; }
        }

        [DisplayName("Salary Structure To Date"), Expression("jSalaryStructure.[ToDate]")]
        public DateTime? SalaryStructureToDate
        {
            get { return Fields.SalaryStructureToDate[this]; }
            set { Fields.SalaryStructureToDate[this] = value; }
        }

        [DisplayName("Salary Structure Created Date"), Expression("jSalaryStructure.[CreatedDate]")]
        public DateTime? SalaryStructureCreatedDate
        {
            get { return Fields.SalaryStructureCreatedDate[this]; }
            set { Fields.SalaryStructureCreatedDate[this] = value; }
        }

        [DisplayName("Salary Structure Created By"), Expression("jSalaryStructure.[CreatedBy]")]
        public Int32? SalaryStructureCreatedBy
        {
            get { return Fields.SalaryStructureCreatedBy[this]; }
            set { Fields.SalaryStructureCreatedBy[this] = value; }
        }

        [DisplayName("Salary Structure Tenant Id"), Expression("jSalaryStructure.[TenantId]")]
        public Int32? SalaryStructureTenantId
        {
            get { return Fields.SalaryStructureTenantId[this]; }
            set { Fields.SalaryStructureTenantId[this] = value; }
        }

        [DisplayName("Staff Code"), Expression("jStaff.[Code]")]
        public String StaffCode
        {
            get { return Fields.StaffCode[this]; }
            set { Fields.StaffCode[this] = value; }
        }

        [DisplayName("Staff Staff Name"), Expression("jStaff.[StaffName]"),MinSelectLevel(SelectLevel.List)]
        public String StaffStaffName
        {
            get { return Fields.StaffStaffName[this]; }
            set { Fields.StaffStaffName[this] = value; }
        }

        [DisplayName("Staff Contact Id"), Expression("jStaff.[ContactId]")]
        public Int32? StaffContactId
        {
            get { return Fields.StaffContactId[this]; }
            set { Fields.StaffContactId[this] = value; }
        }

        [DisplayName("Staff Is Teacher"), Expression("jStaff.[IsTeacher]")]
        public Boolean? StaffIsTeacher
        {
            get { return Fields.StaffIsTeacher[this]; }
            set { Fields.StaffIsTeacher[this] = value; }
        }

        [DisplayName("Staff Remarks"), Expression("jStaff.[Remarks]")]
        public String StaffRemarks
        {
            get { return Fields.StaffRemarks[this]; }
            set { Fields.StaffRemarks[this] = value; }
        }

        [DisplayName("Staff Daily Wage"), Expression("jStaff.[DailyWage]")]
        public Decimal? StaffDailyWage
        {
            get { return Fields.StaffDailyWage[this]; }
            set { Fields.StaffDailyWage[this] = value; }
        }

        [DisplayName("Staff Tenant Id"), Expression("jStaff.[TenantId]")]
        public Int32? StaffTenantId
        {
            get { return Fields.StaffTenantId[this]; }
            set { Fields.StaffTenantId[this] = value; }
        }

        [DisplayName("Staff Joining Date"), Expression("jStaff.[JoiningDate]")]
        public DateTime? StaffJoiningDate
        {
            get { return Fields.StaffJoiningDate[this]; }
            set { Fields.StaffJoiningDate[this] = value; }
        }

        [DisplayName("Staff Qualification"), Expression("jStaff.[Qualification]")]
        public String StaffQualification
        {
            get { return Fields.StaffQualification[this]; }
            set { Fields.StaffQualification[this] = value; }
        }

        [DisplayName("Staff Salary Amount"), Expression("jStaff.[SalaryAmount]")]
        public Decimal? StaffSalaryAmount
        {
            get { return Fields.StaffSalaryAmount[this]; }
            set { Fields.StaffSalaryAmount[this] = value; }
        }

        [DisplayName("Staff Days Count"), Expression("jStaff.[DaysCount]")]
        public Int32? StaffDaysCount
        {
            get { return Fields.StaffDaysCount[this]; }
            set { Fields.StaffDaysCount[this] = value; }
        }

        [DisplayName("Credit Account Type"), Expression("jCreditAccount.[Type]")]
        public Int32? CreditAccountType
        {
            get { return Fields.CreditAccountType[this]; }
            set { Fields.CreditAccountType[this] = value; }
        }

        [DisplayName("Account No"), Expression("jCreditAccount.[AccountNo]"),MinSelectLevel(SelectLevel.List)]
        public String CreditAccountAccountNo
        {
            get { return Fields.CreditAccountAccountNo[this]; }
            set { Fields.CreditAccountAccountNo[this] = value; }
        }

        [DisplayName("Credit Account Account Head Id"), Expression("jCreditAccount.[AccountHeadId]")]
        public Int32? CreditAccountAccountHeadId
        {
            get { return Fields.CreditAccountAccountHeadId[this]; }
            set { Fields.CreditAccountAccountHeadId[this] = value; }
        }

        [DisplayName("Credit Account Tenant Id"), Expression("jCreditAccount.[TenantId]")]
        public Int32? CreditAccountTenantId
        {
            get { return Fields.CreditAccountTenantId[this]; }
            set { Fields.CreditAccountTenantId[this] = value; }
        }

        [DisplayName("Credit Account Is Default"), Expression("jCreditAccount.[IsDefault]")]
        public Boolean? CreditAccountIsDefault
        {
            get { return Fields.CreditAccountIsDefault[this]; }
            set { Fields.CreditAccountIsDefault[this] = value; }
        }
        [DisplayName("Total Present"), Expression("(select sum(case when Status=2 then 1 else 0 end) as TotalPresent  from Attandance where  StaffId=T0.StaffId and Date >=(select FromDate from SalaryStructure where Id= T0.SalaryStructureId) and Date <=(select ToDate from SalaryStructure where Id=T0.SalaryStructureId))"), MinSelectLevel(SelectLevel.List)]
        public Int32? TotalPresent
        {
            get { return Fields.TotalPresent[this]; }
            set { Fields.TotalPresent[this] = value; }
        }
        [DisplayName("Total Absent"),  Expression("(select sum(case when Status=1 then 1 else 0 end) as TotalAbsente  from Attandance where  StaffId=T0.StaffId and Date >=(select FromDate from SalaryStructure where Id= T0.SalaryStructureId) and Date <=(select ToDate from SalaryStructure where Id=T0.SalaryStructureId))"), MinSelectLevel(SelectLevel.List)]
        public Int32? TotalAbsent
        {
            get { return Fields.TotalAbsent[this]; }
            set { Fields.TotalAbsent[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SalaryPaymentsRow()
            : base(Fields)
        {
        }
        [DisplayName("Payable Salary Amount"), Size(18), Scale(3),Expression("(select case when (select   DaysCount  from Staffs where id=T0.StaffId) >0 then   case when (select   DailyWage  from Staffs where id=T0.StaffId) >0 then   case when (DATEDIFF(DAY, (select FromDate from SalaryStructure where Id= T0.SalaryStructureId), (select ToDate from SalaryStructure where Id=T0.SalaryStructureId))-(select sum(case when Status=1 then 1 else 0 end) as TotalAbsente  from Attandance where  StaffId=T0.StaffId and Date >=(select FromDate from SalaryStructure where Id= T0.SalaryStructureId) and Date <=(select ToDate from SalaryStructure where Id=T0.SalaryStructureId))+1)<(select   DaysCount  from Staffs where id=T0.StaffId) then T0.SalaryAmount- ((select   DailyWage  from Staffs where id=T0.StaffId)*((select   DaysCount  from Staffs where id=T0.StaffId)-(DATEDIFF(DAY, (select FromDate from SalaryStructure where Id= T0.SalaryStructureId), (select ToDate from SalaryStructure where Id=T0.SalaryStructureId))-(select sum(case when Status=1 then 1 else 0 end) as TotalAbsente  from Attandance where  StaffId=T0.StaffId and Date >=(select FromDate from SalaryStructure where Id= T0.SalaryStructureId) and Date <=(select ToDate from SalaryStructure where Id=T0.SalaryStructureId))+1))) else T0.SalaryAmount end else T0.SalaryAmount  end else T0.SalaryAmount end as PayableSalaryAmoun)"), MinSelectLevel(SelectLevel.List)]
        public Decimal? PayableSalaryAmount
        {
            get { return Fields.PayableSalaryAmount[this]; }
            set { Fields.PayableSalaryAmount[this] = value; }
        }
        [DisplayName("Payment"), MasterDetailRelation(foreignKey: "SalaryPaymentEntityId"), MinSelectLevel(SelectLevel.List)]
        public List<Accounts.Entities.PaymentRow> Payment
        {
            get { return Fields.Payment[this]; }
            set { Fields.Payment[this] = value; }
        }
        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field SalaryStructureId;
            public Int32Field StaffId;
            public DateTimeField PaidDate;
            public DecimalField PaidAmount;
            public Int32Field PaymentMethod;
            public Int32Field CreditAccountId;
            public DecimalField SalaryAmount;
            public RowListField<Accounts.Entities.PaymentRow> Payment;

            public DecimalField PayableSalaryAmount;
            public Int32Field TotalPresent;
            public Int32Field TotalAbsent;

            public DateTimeField SalaryStructureFromDate;
            public DateTimeField SalaryStructureToDate;
            public DateTimeField SalaryStructureCreatedDate;
            public Int32Field SalaryStructureCreatedBy;
            public Int32Field SalaryStructureTenantId;



            public StringField StaffCode;
            public StringField StaffStaffName;
            public Int32Field StaffContactId;
            public BooleanField StaffIsTeacher;
            public StringField StaffRemarks;
            public DecimalField StaffDailyWage;
            public Int32Field StaffTenantId;
            public DateTimeField StaffJoiningDate;
            public StringField StaffQualification;
            public DecimalField StaffSalaryAmount;
            public Int32Field StaffDaysCount;

            public Int32Field CreditAccountType;
            public StringField CreditAccountAccountNo;
            public Int32Field CreditAccountAccountHeadId;
            public Int32Field CreditAccountTenantId;
            public BooleanField CreditAccountIsDefault;
        }
    }
}
