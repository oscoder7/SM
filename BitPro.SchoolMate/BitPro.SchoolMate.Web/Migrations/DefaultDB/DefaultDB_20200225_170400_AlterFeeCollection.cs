using FluentMigrator;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200225170400)]
    public class DefaultDB_20200225_170400_AlterFeeCollection
        : AutoReversingMigration
    {
        public override void Up()
        {
            this.Alter.Table("FeeCollection")
             .AddColumn("AcadamicYearId").AsInt32().NotNullable().WithDefaultValue(1)
                  .ForeignKey("FK_FeeCollection_AcadamicYear", "AcadamicYear", "Id");

            
        }
    }
}