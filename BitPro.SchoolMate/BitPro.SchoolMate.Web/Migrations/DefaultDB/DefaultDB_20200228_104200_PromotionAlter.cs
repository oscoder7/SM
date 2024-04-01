using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200228104200)]
    public class DefaultDB_20200228_104200_PromotionAlter
        : AutoReversingMigration
    {
        public override void Up()
        {
            this.Alter.Table("Students")
                 .AddColumn("JoiningDivisionId").AsInt32().Nullable()
                     .ForeignKey("FK_Students_Divisions", "Divisions", "Id");

            this.Alter.Table("Promotions")
                 .AddColumn("JoiningDivisionId").AsInt32().Nullable()
                     .ForeignKey("FK_Promotions_Divisions", "Divisions", "Id");





        }
    }
}