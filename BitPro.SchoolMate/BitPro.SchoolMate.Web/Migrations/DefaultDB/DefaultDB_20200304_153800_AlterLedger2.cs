using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200304153800)]
    public class DefaultDB_20200304_153800_AlterLedger2
        : AutoReversingMigration
    {
        public override void Up()
        {

            


            this.Alter.Table("JournalEntries")
                 .AddColumn("ContactId").AsInt32().Nullable()
                       .ForeignKey("FK_JournalEntries_Contacts", "Contacts", "Id");


            Alter.Table("JournalEntries")
                .AddColumn("TenantId").AsInt32()
                    .NotNullable().WithDefaultValue(1);

            Alter.Table("Accounts")
               .AddColumn("TenantId").AsInt32()
                   .NotNullable().WithDefaultValue(1);



        }
    }
}