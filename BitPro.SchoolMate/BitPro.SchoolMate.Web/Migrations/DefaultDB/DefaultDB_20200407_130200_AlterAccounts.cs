using BitPro.SchoolMate.Accounts.Entities;
using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200407130200)]
    public class DefaultDB_20200407_130200_AlterAccounts
        : AutoReversingMigration
    {
        public override void Up()
        {

            Alter.Table("Accounts")
               .AddColumn("IsDefault").AsBoolean().Nullable();
        }
    }
}