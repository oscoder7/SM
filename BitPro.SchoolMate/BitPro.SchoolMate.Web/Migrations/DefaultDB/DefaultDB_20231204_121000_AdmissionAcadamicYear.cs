using BitPro.SchoolMate.Accounts.Entities;
using FluentMigrator;
using Serenity.Data;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20231204121000)]
    public class DefaultDB_20231204_121000_AdmissionAcadamicYear
        : AutoReversingMigration
    {
        public override void Up()
        {
           


            Alter.Table("Students")
                  .AddColumn("AdmissionAcadamicYearId").AsInt32().Nullable()
                    .ForeignKey("FK_Students_AcadamicYear", "AcadamicYear", "Id");


            

        }
    }
}