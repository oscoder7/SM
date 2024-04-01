using FluentMigrator;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200221171400)]
    public class DefaultDB_20200221_171400_Marks
        : AutoReversingMigration
    {
        public override void Up()
        {




            this.CreateTableWithId32("Exams", "Id", s => s
               .WithColumn("Code").AsString(100).NotNullable()
               .WithColumn("ExamName").AsString(100).NotNullable()
               .WithColumn("AcadamicYearId").AsInt32().NotNullable()
                  .ForeignKey("FK_Exams_AcadamicYear", "AcadamicYear", "Id"));


            this.CreateTableWithId32("MarkSheet", "Id", s => s
              .WithColumn("ExamId").AsInt32().NotNullable()
                  .ForeignKey("FK_MarkSheet_Exams", "Exams", "Id")
               .WithColumn("ExamDate").AsDate().NotNullable()
               .WithColumn("CourseId").AsInt32().NotNullable()
                  .ForeignKey("FK_MarkSheet_Courses", "Courses", "Id")
               .WithColumn("SubjectId").AsInt32().NotNullable()
                  .ForeignKey("FK_MarkSheet_Subjects", "Subjects", "Id")
               .WithColumn("StudentId").AsInt32().NotNullable()
                  .ForeignKey("FK_MarkSheet_Students", "Students", "Id")
               .WithColumn("Mark").AsDecimal(18,2).NotNullable());






        }
    }
}