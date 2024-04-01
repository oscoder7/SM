using FluentMigrator;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200219141900)]
    public class DefaultDB_20200219_141900_AlterFeeExcemption2
        : AutoReversingMigration
    {
        public override void Up()
        {




            this.Alter.Table("FeeExcemptions")
                .AddColumn("CourseId").AsInt32().NotNullable().WithDefaultValue(1)
                     .ForeignKey("FK_FeeExcemptions_Courses", "Courses", "Id");




        }
    }
}