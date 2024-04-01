using BitPro.SchoolMate.Accounts.Entities;
using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200406114600)]
    public class DefaultDB_20200406_114600_UserAlter
        : AutoReversingMigration
    {
        public override void Up()
        {

            Alter.Table("Users")
               .AddColumn("DefaultCampusId").AsInt32().Nullable()
                    .ForeignKey("FK_Users_Campuses", "Campuses", "Id");
        }
    }
}