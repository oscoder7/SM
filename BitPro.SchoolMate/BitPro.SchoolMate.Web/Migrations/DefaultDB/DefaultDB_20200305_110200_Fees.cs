using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200305110200)]
    public class DefaultDB_20200305_110200_Fees
        : AutoReversingMigration
    {
        public override void Up()
        {




            this.Alter.Table("Fees")
                 .AddColumn("DebitAccountHeadId").AsInt32().NotNullable().WithDefaultValue(1)
                    .ForeignKey("FK_Fees_DebitAccountHeads", "AccountHeads", "Id");

            this.Alter.Table("FeeCollection")
              .AddColumn("PaymentMethod").AsInt32().NotNullable()
              .AddColumn("CreditAccountId").AsInt32().NotNullable()
                     .ForeignKey("FK_FeeCollection_CreditAccounts", "Accounts", "Id");
        }
    }
}