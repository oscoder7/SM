using BitPro.SchoolMate.Accounts.Entities;
using FluentMigrator;
using Serenity.Data;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20231130162100)]
    public class DefaultDB_20231130_162100_Attachements
        : AutoReversingMigration
    {
        public override void Up()
        {
           


            Alter.Table("JournalEntries")
                  .AddColumn("Attachments").AsString(5000).Nullable() ;


        }
    }
}