using FluentMigrator;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200226140600)]
    public class DefaultDB_20200226_140600_Alter2
        : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Exams")
                .AddColumn("TenantId").AsInt32()
                    .NotNullable().WithDefaultValue(1);


        }
    }
}