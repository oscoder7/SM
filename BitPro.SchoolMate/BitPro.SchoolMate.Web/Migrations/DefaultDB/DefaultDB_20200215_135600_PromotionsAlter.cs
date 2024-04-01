using FluentMigrator;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200215135600)]
    public class DefaultDB_20200215_135600_PromotionsAlter
        : AutoReversingMigration
    {
        public override void Up()
        {


            this.Alter.Table("Promotions")
               .AddColumn("PromotionType").AsInt32().NotNullable().WithDefaultValue(1)
               .AddColumn("AcadamicYearId").AsInt32().NotNullable().WithDefaultValue(1)
                    .ForeignKey("FK_Promotions_AcadamicYear", "AcadamicYear", "Id");


           





        }
    }
}