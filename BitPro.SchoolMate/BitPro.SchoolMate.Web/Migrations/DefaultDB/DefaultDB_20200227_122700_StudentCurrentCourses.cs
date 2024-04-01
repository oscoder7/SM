using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200227122700)]
    public class DefaultDB_20200227_122700_StudentCurrentCourses
        : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("StudentCurrentCourses", "Id", s => s
                 .WithColumn("StudentId").AsInt32().NotNullable()
                     .ForeignKey("FK_StudentCurrentCourses_Students", "Students", "Id")
                 .WithColumn("CourseId").AsInt32().NotNullable()
                     .ForeignKey("FK_StudentCurrentCourses_Courses", "Courses", "Id"));


        }
    }
}