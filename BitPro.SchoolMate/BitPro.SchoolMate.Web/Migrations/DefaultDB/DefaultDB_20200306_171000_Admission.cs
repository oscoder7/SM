using BitPro.SchoolMate.Accounts.Entities;
using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200306171000)]
    public class DefaultDB_20200306_171000_Admission
        : AutoReversingMigration
    {
        public override void Up()
        {

            this.CreateTableWithId32("Admission", "Id", s => s
                .WithColumn("AcadamicYearId").AsInt32().NotNullable()
                    .ForeignKey("FK_Admission_AcadamicYear", "AcadamicYear", "Id")
                 .WithColumn("JoiningDate").AsDate().NotNullable()
                 .WithColumn("StudentId").AsInt32().NotNullable()
                    .ForeignKey("FK_Admission_Students", "Students", "Id")
                 .WithColumn("JoiningCourse").AsInt32().NotNullable()
                     .ForeignKey("FK_Admission_Courses", "Courses", "Id")
                 .WithColumn("JoiningDivisionId").AsInt32().Nullable()
                     .ForeignKey("FK_Admission_CourseDivisions", "CourseDivisions", "Id"));

        }
    }
}