using BitPro.SchoolMate.Accounts.Entities;
using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200305114800)]
    public class DefaultDB_20200305_114800_AlterLedger
        : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("JournalEntries")
              .AddColumn("EntityType").AsString(100).NotNullable().WithDefaultValue(ReceiptRow.Fields.TableName)
              .AddColumn("EntityId").AsInt64().Nullable();
        }
    }
}