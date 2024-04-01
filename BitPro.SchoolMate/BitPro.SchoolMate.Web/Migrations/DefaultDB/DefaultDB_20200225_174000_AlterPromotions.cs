using FluentMigrator;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200225174000)]
    public class DefaultDB_20200225_174000_AlterPromotions
        : AutoReversingMigration
    {
        public override void Up()
        {
            this.Alter.Table("Promotions")
             .AlterColumn("CreatedBy").AsInt32().Nullable();

            
        }
    }
}