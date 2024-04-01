using FluentMigrator;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200224162200)]
    public class DefaultDB_20200224_162200_StudentMarksAlter
        : AutoReversingMigration
    {
        public override void Up()
        {
            this.Alter.Table("StudentMarks")
             .AddColumn("AcadamicYearId").AsInt32().NotNullable().WithDefaultValue(1)
                  .ForeignKey("FK_StudentMarks_AcadamicYear", "AcadamicYear", "Id")
             .AddColumn("TenantId").AsInt32()
                    .NotNullable().WithDefaultValue(1);
        }
    }
}