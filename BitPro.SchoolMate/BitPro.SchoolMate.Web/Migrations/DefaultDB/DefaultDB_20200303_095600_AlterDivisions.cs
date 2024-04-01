using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200303095600)]
    public class DefaultDB_20200303_095600_AlterDivisions
        : AutoReversingMigration
    {
        public override void Up()
        {
            Execute.Sql("ALTER TABLE Divisions DROP CONSTRAINT FK_Divisions_Courses");
            Execute.Sql("ALTER TABLE Divisions DROP COLUMN CourseId");

            this.CreateTableWithId32("CourseDivisions", "Id", s => s
                 .WithColumn("CourseId").AsInt32().NotNullable()
                     .ForeignKey("FK_CourseDivisions_Courses", "Courses", "Id")
                  .WithColumn("DivisionCode").AsString(100).NotNullable());

            this.Alter.Table("Divisions")
                 .AddColumn("PromotionId").AsInt32().NotNullable()
                      .ForeignKey("FK_Divisions_Promotions", "Promotions", "Id");

            Execute.Sql("ALTER TABLE DivisionStudents DROP CONSTRAINT FK_DivisionStudents_Students");
            Execute.Sql("ALTER TABLE DivisionStudents DROP COLUMN StudentId");

            this.Alter.Table("DivisionStudents")
                 .AddColumn("PromotionDetailId").AsInt32().NotNullable()
                     .ForeignKey("FK_DivisionStudents_PromotionDetails", "PromotionDetails", "Id");




        }
    }
}