using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200304175100)]
    public class DefaultDB_20200304_175100_AlterLedger4
        : AutoReversingMigration
    {
        public override void Up()
        {

            


            this.Alter.Table("JournalEntries")
                 .AddColumn("Remarks").AsString(500).Nullable();


          



        }
    }
}