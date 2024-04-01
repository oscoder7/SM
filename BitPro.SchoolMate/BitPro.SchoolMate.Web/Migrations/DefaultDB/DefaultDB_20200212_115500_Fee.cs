using FluentMigrator;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200212115500)]
    public class DefaultDB_20200212_115500_Fee
        : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Fees", "Id", s => s
                 .WithColumn("Code").AsString(200).NotNullable()
                 .WithColumn("FeeName").AsString(200).NotNullable()
                 .WithColumn("AnnualFee").AsDecimal(18,3).NotNullable()
                 .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1));



            this.CreateTableWithId32("CourseFee", "Id", s => s
                 .WithColumn("CourseId").AsInt32().NotNullable()
                     .ForeignKey("FK_CourseFee_Courses", "Courses", "Id")
                 .WithColumn("FeeId").AsInt32().NotNullable()
                     .ForeignKey("FK_CourseFee_Fees", "Fees", "Id"));



        }
    }
}