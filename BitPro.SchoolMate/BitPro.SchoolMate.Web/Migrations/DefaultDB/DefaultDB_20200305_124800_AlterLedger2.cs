using BitPro.SchoolMate.Accounts.Entities;
using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200305124800)]
    public class DefaultDB_20200305_124800_AlterLedger2
        : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("JournalEntries")
              .AlterColumn("EntityId").AsInt32().Nullable();
        }
    }
}