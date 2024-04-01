using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200228144400)]
    public class DefaultDB_20200228_144400_InsertPromotion
        : AutoReversingMigration
    {
        public override void Up()
        {
            this.Alter.Table("Attandance")
                 .AddColumn("PromotionDetailId").AsInt32().NotNullable()
                     .ForeignKey("FK_PromotionDetails_Attandance", "PromotionDetails", "Id");

            this.Alter.Table("FeeCollection")
                  .AddColumn("PromotionDetailId").AsInt32().NotNullable().WithDefaultValue(1)
                      .ForeignKey("FK_PromotionDetails_FeeCollection", "PromotionDetails", "Id");


            this.Alter.Table("PromotionDetails")
                  .AddColumn("PromotionType").AsInt32().NotNullable();


            this.Alter.Table("StudentMarks")
                  .AddColumn("PromotionId").AsInt32().NotNullable()
                      .ForeignKey("FK_StudentMarks_Promotions", "Promotions", "Id");


            this.Alter.Table("StudentMarksDetails")
                  .AddColumn("PromotionDetailId").AsInt32().NotNullable()
                      .ForeignKey("FK_PromotionDetails_StudentMarksDetails", "StudentMarksDetails", "Id");


        }
    }
}