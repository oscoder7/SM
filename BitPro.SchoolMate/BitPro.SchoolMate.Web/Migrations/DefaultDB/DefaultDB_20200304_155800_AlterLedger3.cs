using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200304155800)]
    public class DefaultDB_20200304_155800_AlterLedger3
        : AutoReversingMigration
    {
        public override void Up()
        {

            


            this.Alter.Table("JournalEntries")
                 .AddColumn("TrxDate").AsDate().NotNullable();


          



        }
    }
}