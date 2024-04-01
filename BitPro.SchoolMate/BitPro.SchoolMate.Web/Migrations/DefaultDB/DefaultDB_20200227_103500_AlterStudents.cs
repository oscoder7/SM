using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200227103500)]
    public class DefaultDB_20200227_103500_AlterStudents
        : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Students")
                .AddColumn("Gender").AsInt32().NotNullable().WithDefaultValue(1)
                .AddColumn("DOB").AsDate().NotNullable().WithDefaultValue(DateTime.Today)
                .AddColumn("IDNO").AsString(200).Nullable()
                .AddColumn("LandMark").AsString(200).Nullable()
                .AddColumn("BusStop").AsString(200).Nullable()
                .AddColumn("Remarks").AsString(500).Nullable()
                .AddColumn("Photo").AsString(500).Nullable();


        }
    }
}