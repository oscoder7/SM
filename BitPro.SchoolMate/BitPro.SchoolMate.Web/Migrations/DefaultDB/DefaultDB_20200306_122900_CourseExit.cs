using BitPro.SchoolMate.Accounts.Entities;
using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200306122900)]
    public class DefaultDB_20200306_122900_CourseExit
        : AutoReversingMigration
    {
        public override void Up()
        {

            this.CreateTableWithId32("CourseExit", "Id", s => s
                .WithColumn("AcadamicYearId").AsInt32().NotNullable()
                  .ForeignKey("FK_CourseExit_AcadamicYear", "AcadamicYear", "Id")
                 .WithColumn("PromotionId").AsInt32().NotNullable()
                    .ForeignKey("FK_CourseExit_Promotions", "Promotions", "Id")
                 .WithColumn("ExitType").AsInt32().NotNullable()
                 .WithColumn("ExitDate").AsDate().NotNullable());

            this.CreateTableWithId32("CourseExitDetails", "Id", s => s
    .WithColumn("CourseExitId").AsInt32().NotNullable()
      .ForeignKey("FK_CourseExitDetails_CourseExit", "CourseExit", "Id")
     .WithColumn("PromotionDetailId").AsInt32().NotNullable()
                      .ForeignKey("FK_CourseExitDetails_PromotionDetails", "PromotionDetails", "Id")
     .WithColumn("Attachments").AsString(500).Nullable());



        }
    }
}