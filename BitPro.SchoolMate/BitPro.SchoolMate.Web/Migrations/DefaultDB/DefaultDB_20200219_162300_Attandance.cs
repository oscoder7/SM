using FluentMigrator;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200219162300)]
    public class DefaultDB_20200219_162300_Attandance
        : AutoReversingMigration
    {
        public override void Up()
        {




            this.CreateTableWithId32("Attandance", "Id", s => s
               .WithColumn("StudentId").AsInt32().Nullable()
                     .ForeignKey("FK_Attandance_Students", "Students", "Id")
               .WithColumn("StaffId").AsInt32().Nullable()
                     .ForeignKey("FK_Attandance_Staffs", "Staffs", "Id")
               .WithColumn("Date").AsDate().NotNullable()
               .WithColumn("AcadamicYearId").AsInt32().NotNullable()
                  .ForeignKey("FK_Attandance_AcadamicYear", "AcadamicYear", "Id")
               .WithColumn("Status").AsInt32().NotNullable()
               .WithColumn("Attachments").AsString(500).Nullable()
               .WithColumn("Description").AsString(500).Nullable());




        }
    }
}