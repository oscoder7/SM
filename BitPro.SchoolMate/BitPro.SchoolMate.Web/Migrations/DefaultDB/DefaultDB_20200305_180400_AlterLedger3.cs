using BitPro.SchoolMate.Accounts.Entities;
using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200305180400)]
    public class DefaultDB_20200305_180400_AlterLedger3
        : AutoReversingMigration
    {
        public override void Up()
        {

            Execute.Sql("ALTER TABLE FeeCollection DROP CONSTRAINT FK_FeeCollection_CreditAccounts");
            Execute.Sql("ALTER TABLE FeeCollection DROP COLUMN CreditAccountId");

            this.Alter.Table("FeeCollection")
             .AddColumn("AccountId").AsInt32().NotNullable()
                    .ForeignKey("FK_FeeCollection_Accounts", "Accounts", "Id");
        }
    }
}