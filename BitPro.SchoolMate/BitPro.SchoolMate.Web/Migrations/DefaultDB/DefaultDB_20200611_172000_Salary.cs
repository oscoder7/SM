using BitPro.SchoolMate.Accounts.Entities;
using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200611172000)]
    public class DefaultDB_20200611_172000_Salary
        : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("SalaryStructure", "Id", s => s
                 .WithColumn("FromDate").AsDate().NotNullable()
                 .WithColumn("ToDate").AsDate().NotNullable()
                 .WithColumn("CreatedDate").AsDate().NotNullable()
                 .WithColumn("CreatedBy").AsInt32().Nullable()
                     .ForeignKey("FK_SalaryStructure_Staffs", "Staffs", "Id")
                 .WithColumn("TenantId").AsInt32().NotNullable());

            Alter.Table("JournalEntries")
               .AddColumn("SalaryPaymentEntityId").AsBoolean().Nullable();

            this.CreateTableWithId32("SalaryPayments", "Id", s => s
                .WithColumn("SalaryStructureId").AsInt32().NotNullable()
                     .ForeignKey("FK_SalaryPayments_SalaryStructure", "SalaryStructure", "Id")
                .WithColumn("StaffId").AsInt32().NotNullable()
                     .ForeignKey("FK_SalaryPayments_Staffs", "Staffs", "Id")
                .WithColumn("PaidDate").AsDate().Nullable()
                .WithColumn("PaidAmount").AsDecimal(18,3).Nullable()
                .WithColumn("PaymentMethod").AsInt32().Nullable()
                .WithColumn("CreditAccountId").AsInt32().Nullable()
                     .ForeignKey("FK_SalaryPayments_CreditAccounts", "Accounts", "Id"));




        }
    }
}