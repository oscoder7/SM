using FluentMigrator;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200222121900)]
    public class DefaultDB_20200222_121900_MarksAlter
        : AutoReversingMigration
    {
        public override void Up()
        {
            Execute.Sql("ALTER TABLE MarkSheet DROP CONSTRAINT FK_MarkSheet_Subjects");

            Execute.Sql("ALTER TABLE MarkSheet DROP COLUMN SubjectId");

            Alter.Table("MarkSheet").AddColumn("CourseSubjectId").AsInt32().NotNullable().WithDefaultValue(1)
                .ForeignKey("FK_MarkSheet_CourseSubjects", "CourseSubjects", "Id");
        }
    }
}