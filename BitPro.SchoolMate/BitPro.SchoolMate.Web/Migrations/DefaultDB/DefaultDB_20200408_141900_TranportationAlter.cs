using BitPro.SchoolMate.Accounts.Entities;
using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200408141900)]
    public class DefaultDB_20200408_141900_TranportationAlter
        : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("JournalEntries")
               .AddColumn("TranportationEntityId").AsBoolean().Nullable();

           






        }
    }
}