using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200304141500)]
    public class DefaultDB_20200304_141500_AlterLedger
        : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("AccountHeads")
                 .AddColumn("LedgerType").AsInt32().NotNullable().WithDefaultValue(1);

            this.CreateTableWithId32("Accounts", "Id", s => s
                 .WithColumn("Type").AsInt32().NotNullable()
                 .WithColumn("AccountNo").AsString(500).NotNullable()
                 .WithColumn("AccountHeadId").AsInt32().NotNullable()
                     .ForeignKey("FK_Accounts_AccountHeads", "AccountHeads", "Id"));


            this.CreateTableWithId32("JournalEntries", "Id", s => s
                .WithColumn("VType").AsInt32().NotNullable()
                .WithColumn("VNo").AsInt32().NotNullable()
                .WithColumn("DebitAccountHeadId").AsInt32().NotNullable()
                     .ForeignKey("FK_JournalEntries_DebitAccountHeads", "AccountHeads", "Id")
                .WithColumn("CreditAccountHeadId").AsInt32().NotNullable()
                     .ForeignKey("FK_JournalEntries_CreditAccountHeads", "AccountHeads", "Id")
                .WithColumn("Amount").AsDecimal(18,3).NotNullable()
                .WithColumn("PaymentMethod").AsInt32().NotNullable()
                .WithColumn("DebitAccountId").AsInt32().Nullable()
                     .ForeignKey("FK_JournalEntries_DebitAccounts", "Accounts", "Id")
                .WithColumn("CreditAccountId").AsInt32().Nullable()
                     .ForeignKey("FK_JournalEntries_CreditAccounts", "Accounts", "Id"));






        }
    }
}