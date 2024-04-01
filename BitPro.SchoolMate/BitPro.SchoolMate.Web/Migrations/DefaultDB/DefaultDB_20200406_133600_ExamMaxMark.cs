using BitPro.SchoolMate.Accounts.Entities;
using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200406133600)]
    public class DefaultDB_20200406_133600_ExamMaxMark
        : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("ExamCourses", "Id", s => s
                 .WithColumn("ExamId").AsInt32().NotNullable()
                     .ForeignKey("FK_ExamCourses_Exams", "Exams", "Id")
                 .WithColumn("PromotionId").AsInt32().NotNullable()
                    .ForeignKey("FK_ExamCourses_Promotions", "Promotions", "Id"));

            this.CreateTableWithId32("ExamMaxMarks", "Id", s => s
                .WithColumn("ExamCoursesId").AsInt32().NotNullable()
                    .ForeignKey("FK_ExamMaxMarks_ExamCourses", "ExamCourses", "Id")
                .WithColumn("CourseSubjectId").AsInt32().NotNullable()
                    .ForeignKey("FK_ExamMaxMarks_CourseSubjects", "CourseSubjects", "Id")
               .WithColumn("MaxMark").AsDecimal(18, 2).NotNullable());
        }
    }
}