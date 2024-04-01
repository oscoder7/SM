using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200228_160200)]
    public class DefaultDB_20200228_160200_UpdatePromotions
        : AutoReversingMigration
    {
        public override void Up()
        {

            Execute.Sql("ALTER TABLE Promotions DROP CONSTRAINT DF_Promotions_PromotionType");
            Execute.Sql("ALTER TABLE Promotions DROP COLUMN PromotionType");



        }
    }
}