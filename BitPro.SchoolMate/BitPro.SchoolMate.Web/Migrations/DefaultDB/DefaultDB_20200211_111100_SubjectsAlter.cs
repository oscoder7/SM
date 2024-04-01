using FluentMigrator;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200211_111100)]
    public class DefaultDB_20200211_111100_SubjectsAlter
        : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Subjects")
                .AddColumn("TenantId").AsInt32()
                    .NotNullable().WithDefaultValue(1);

            Alter.Table("Contacts")
                .AddColumn("TenantId").AsInt32()
                    .NotNullable().WithDefaultValue(1);


            Alter.Table("Staffs")
                 .AddColumn("TenantId").AsInt32()
                     .NotNullable().WithDefaultValue(1);


            


        }
    }
}