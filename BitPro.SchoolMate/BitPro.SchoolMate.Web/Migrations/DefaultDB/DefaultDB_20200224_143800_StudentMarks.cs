using FluentMigrator;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200224143800)]
    public class DefaultDB_20200224_143800_StudentMarks
        : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("StudentMarks", "Id", s => s
                .WithColumn("ExamId").AsInt32().NotNullable()
                    .ForeignKey("FK_StudentMarks_Exams", "Exams", "Id")
                 .WithColumn("ExamDate").AsDate().NotNullable()
                 .WithColumn("CourseId").AsInt32().NotNullable()
                    .ForeignKey("FK_StudentMarks_Courses", "Courses", "Id")
                 .WithColumn("CourseSubjectId").AsInt32().NotNullable()
                   .ForeignKey("FK_StudentMarks_CourseSubjects", "CourseSubjects", "Id"));


            this.CreateTableWithId32("StudentMarksDetails", "Id", s => s
               .WithColumn("StudentMarksId").AsInt32().NotNullable()
                   .ForeignKey("FK_StudentMarksDetails_StudentMarks", "StudentMarks", "Id")
                .WithColumn("StudentId").AsInt32().NotNullable()
                   .ForeignKey("FK_StudentMarksDetails_Students", "Students", "Id")
                .WithColumn("Mark").AsDecimal(18, 2).NotNullable()
                .WithColumn("Description").AsString(500).Nullable());
        }
    }
}