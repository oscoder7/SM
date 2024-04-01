using BitPro.SchoolMate.Accounts.Entities;
using FluentMigrator;
using Serenity.Data;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200620143100)]
    public class DefaultDB_20200620_143100_SettingsAlter
        : AutoReversingMigration
    {
        public override void Up()
        {
           


            Alter.Table("Settings")
                  .AddColumn("StudentCodePrefix").AsString().Nullable()
                  .AddColumn("StudentCodeLength").AsInt32().NotNullable().WithDefaultValue(5)
                  .AddColumn("SatffCodePrefix").AsString().Nullable()
                  .AddColumn("SatffCodeLength").AsInt32().NotNullable().WithDefaultValue(5);


        }
    }
}