using FluentMigrator;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200211103700)]
    public class DefaultDB_20200211_103700_Subjects
        : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Subjects", "Id", s => s
                  .WithColumn("Code").AsString(200).NotNullable()
                  .WithColumn("SubjectName").AsString(200).NotNullable());

            this.CreateTableWithId32("Contacts", "Id", s => s
                  .WithColumn("Name").AsString(200).NotNullable()
                  .WithColumn("Phone").AsString(200).Nullable()
                  .WithColumn("Email").AsString(200).Nullable()
                  .WithColumn("Whatsapp").AsString(200).Nullable()
                  .WithColumn("Address1").AsString(500).Nullable()
                  .WithColumn("Address2").AsString(500).Nullable()
                  .WithColumn("Nationality").AsInt32().Nullable()
                       .ForeignKey("FK_Contacts_Countries", "Countries", "Id"));


            this.CreateTableWithId32("Staffs", "Id", s => s
                  .WithColumn("Code").AsString(200).NotNullable()
                  .WithColumn("StaffName").AsString(200).NotNullable()
                  .WithColumn("ContactId").AsInt32().NotNullable()
                     .ForeignKey("FK_Staffs_Contacts", "Contacts", "Id")
                  .WithColumn("IsTeacher").AsBoolean().Nullable()
                  .WithColumn("Remarks").AsString(500).Nullable()
                  .WithColumn("DailyWage").AsDecimal(18,3).Nullable());

            this.CreateTableWithId32("StaffSubjects", "Id", s => s
                  .WithColumn("StaffId").AsInt32().NotNullable()
                     .ForeignKey("FK_StaffSubjects_Staffs", "Staffs", "Id")
                  .WithColumn("SubjectId").AsInt32().NotNullable()
                      .ForeignKey("FK_StaffSubjects_Subjects", "Subjects", "Id"));


        }
    }
}