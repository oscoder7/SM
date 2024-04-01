using FluentMigrator;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200219131100)]
    public class DefaultDB_20200219_131100_AlterFeeExcemption
        : AutoReversingMigration
    {
        public override void Up()
        {




            this.Alter.Table("FeeExcemptions")
                .AddColumn("CourseFeeId").AsInt32().NotNullable().WithDefaultValue(1)
                     .ForeignKey("FK_FeeExcemptions_CourseFee", "CourseFee", "Id");

            Alter.Table("FeeCollection")
                .AddColumn("TenantId").AsInt32()
                    .NotNullable().WithDefaultValue(1);

        }
    }
}