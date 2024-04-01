using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200303103700)]
    public class DefaultDB_20200303_103700_AlterDivisions
        : AutoReversingMigration
    {
        public override void Up()
        {
            this.Alter.Table("Divisions")
                 .AlterColumn("TeacherId").AsInt32().Nullable();
        }
    }
}