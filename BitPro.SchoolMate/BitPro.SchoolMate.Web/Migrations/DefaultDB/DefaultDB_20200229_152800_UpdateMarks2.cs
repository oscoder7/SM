using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200229152800)]
    public class DefaultDB_20200229_152800_UpdateMarks2
        : AutoReversingMigration
    {
        public override void Up()
        {


            this.Alter.Table("StudentMarks")
                  .AddColumn("TenantId").AsInt32()
                    .NotNullable().WithDefaultValue(1);

            Execute.Sql("ALTER TABLE Attandance DROP CONSTRAINT FK_Attandance_Students");
            Execute.Sql("ALTER TABLE Attandance DROP COLUMN StudentId");

            this.Alter.Table("Attandance")
                  .AlterColumn("PromotionDetailId").AsInt32()
                    .Nullable();





        }
    }
}