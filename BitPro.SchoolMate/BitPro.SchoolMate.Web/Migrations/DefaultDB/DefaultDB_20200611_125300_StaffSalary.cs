using BitPro.SchoolMate.Accounts.Entities;
using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200611125300)]
    public class DefaultDB_20200611_125300_StaffSalary
        : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Staffs")
               .AddColumn("SalaryAmount").AsDecimal(18,3).Nullable()
               .AddColumn("DaysCount").AsInt32().Nullable();

           






        }
    }
}