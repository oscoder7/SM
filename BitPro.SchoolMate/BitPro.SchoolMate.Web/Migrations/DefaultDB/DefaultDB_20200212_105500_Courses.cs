using FluentMigrator;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200212105500)]
    public class DefaultDB_20200212_105500_Courses
        : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Courses", "Id", s => s
                 .WithColumn("Code").AsString(200).NotNullable()
                 .WithColumn("CourseName").AsString(200).NotNullable()
                 .WithColumn("Active").AsBoolean().Nullable()
                 .WithColumn("NonAcadamic").AsBoolean().Nullable()
                 .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1));



            this.CreateTableWithId32("CourseSubjects", "Id", s => s
                 .WithColumn("CourseId").AsInt32().NotNullable()
                     .ForeignKey("FK_CourseSubjects_Courses", "Courses", "Id")
                 .WithColumn("SubjectId").AsInt32().NotNullable()
                     .ForeignKey("FK_CourseSubjects_Subjects", "Subjects", "Id")
                 .WithColumn("MaxMarks").AsDecimal(18,3).Nullable());



        }
    }
}