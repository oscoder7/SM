using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200303140700)]
    public class DefaultDB_20200303_140700_AlterStudent
        : AutoReversingMigration
    {
        public override void Up()
        {
            Execute.Sql("ALTER TABLE Students DROP CONSTRAINT FK_Students_Divisions");
            Execute.Sql("ALTER TABLE Students DROP COLUMN JoiningDivisionId");

            this.Alter.Table("Students")
                 .AddColumn("JoiningDivisionId").AsInt32().Nullable()
                     .ForeignKey("FK_Students_CourseDivisions", "CourseDivisions", "Id");
        }
    }
}