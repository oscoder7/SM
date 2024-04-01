using BitPro.SchoolMate.Accounts.Entities;
using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200309140400)]
    public class DefaultDB_20200309_140400_AlterCampus
        : AutoReversingMigration
    {
        public override void Up()
        {

            Alter.Table("Campuses")
               .AddColumn("Student_Prefix").AsString(100).Nullable()
               .AddColumn("CodeLength").AsInt32().Nullable();
        }
    }
}