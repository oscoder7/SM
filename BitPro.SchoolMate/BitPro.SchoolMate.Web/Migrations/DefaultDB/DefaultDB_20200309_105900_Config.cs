using BitPro.SchoolMate.Accounts.Entities;
using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200309105900)]
    public class DefaultDB_20200309_105900_Config
        : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Config", "Id", s => s
                          .WithColumn("Name").AsString(200).NotNullable()
                          .WithColumn("Type").AsString(200).NotNullable()
                          .WithColumn("ValueString").AsString(200).Nullable()
                          .WithColumn("ValueDate").AsDateTime().Nullable()
                          .WithColumn("ValueNumber").AsDecimal(18,3).Nullable()
                          .WithColumn("ValueBool").AsBoolean().Nullable());
        }
    }
}