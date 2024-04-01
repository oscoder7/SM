using BitPro.SchoolMate.Accounts.Entities;
using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200613154800)]
    public class DefaultDB_20200613_154800_SalaryAlter
        : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("SalaryPayments")
             .AddColumn("SalaryAmount").AsDecimal(18,3).NotNullable();




        }
    }
}