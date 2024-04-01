using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200229115200)]
    public class DefaultDB_20200229_115200_UpdateMarks
        : AutoReversingMigration
    {
        public override void Up()
        {

            Execute.Sql("DROP TABLE StudentMarksDetails");
            Execute.Sql("DROP TABLE StudentMarks");

            this.CreateTableWithId32("StudentMarks", "Id", s => s
                .WithColumn("AcadamicYearId").AsInt32().NotNullable()
                  .ForeignKey("FK_StudentMarks_AcadamicYear", "AcadamicYear", "Id")
                .WithColumn("ExamId").AsInt32().NotNullable()
                    .ForeignKey("FK_StudentMarks_Exams", "Exams", "Id")
                 .WithColumn("ExamDate").AsDate().NotNullable()
                 .WithColumn("PromotionId").AsInt32().NotNullable()
                    .ForeignKey("FK_StudentMarks_Promotions", "Promotions", "Id"));

            this.CreateTableWithId32("StudentMarksSubjects", "Id", s => s
                .WithColumn("StudentMarksId").AsInt32().NotNullable()
                  .ForeignKey("FK_StudentMarksSubjects_StudentMarks", "StudentMarks", "Id")
                .WithColumn("CourseSubjectId").AsInt32().NotNullable()
                    .ForeignKey("FK_StudentMarksSubjects_CourseSubjects", "CourseSubjects", "Id"));


            this.CreateTableWithId32("StudentMarksDetails", "Id", s => s
               .WithColumn("StudentMarksSubjectsId").AsInt32().NotNullable()
                   .ForeignKey("FK_StudentMarksDetails_StudentMarksSubjects", "StudentMarksSubjects", "Id")
                .WithColumn("PromotionDetailId").AsInt32().NotNullable()
                      .ForeignKey("FK_StudentMarksDetails_PromotionDetails", "PromotionDetails", "Id")
                .WithColumn("Mark").AsDecimal(18, 2).NotNullable()
                .WithColumn("Description").AsString(500).Nullable());



        }
    }
}