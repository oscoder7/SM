using BitPro.SchoolMate.Accounts.Entities;
using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200610102600)]
    public class DefaultDB_20200610_102600_StaffAlter
        : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Staffs")
               .AddColumn("JoiningDate").AsDate().Nullable()
               .AddColumn("Qualification").AsString(500).Nullable();

           






        }
    }
}