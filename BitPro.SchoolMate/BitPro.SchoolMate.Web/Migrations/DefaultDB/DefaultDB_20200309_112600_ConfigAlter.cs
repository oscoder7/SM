using BitPro.SchoolMate.Accounts.Entities;
using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200309112600)]
    public class DefaultDB_20200309_112600_ConfigAlter
        : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Config")
               .AddColumn("TenantId").AsInt32()
                   .NotNullable().WithDefaultValue(1);

            this.Insert.IntoTable("Config").Row(new { Name = "Student Code Prefix", Type = "Student Code Prefix", ValueString = "STD_" });
            this.Insert.IntoTable("Config").Row(new { Name = "Student Last Code", Type = "Student Last Code", ValueNumber = 0 });
        }
    }
}