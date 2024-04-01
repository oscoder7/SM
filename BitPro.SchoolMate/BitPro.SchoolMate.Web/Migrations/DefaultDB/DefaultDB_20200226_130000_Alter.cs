using FluentMigrator;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200226130000)]
    public class DefaultDB_20200226_130000_Alter
        : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Attandance")
                .AddColumn("TenantId").AsInt32()
                    .NotNullable().WithDefaultValue(1);


        }
    }
}