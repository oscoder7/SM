using BitPro.SchoolMate.Accounts.Entities;
using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200406112100)]
    public class DefaultDB_20200406_112100_AlterCampus2
        : AutoReversingMigration
    {
        public override void Up()
        {

            Alter.Table("Campuses")
               .AddColumn("IsDefault").AsBoolean().Nullable();
        }
    }
}