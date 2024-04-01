using BitPro.SchoolMate.Accounts.Entities;
using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200309104100)]
    public class DefaultDB_20200309_104100_AdmissionAlter
        : AutoReversingMigration
    {
        public override void Up()
        {

            Alter.Table("CourseExit")
                   .AddColumn("TenantId").AsInt32()
                       .NotNullable().WithDefaultValue(1);

            Alter.Table("Admission")
                .AddColumn("TenantId").AsInt32()
                    .NotNullable().WithDefaultValue(1);




        }
    }
}