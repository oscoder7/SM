using FluentMigrator;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200212164600)]
    public class DefaultDB_20200212_164600_Students
        : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Students", "Id", s => s
               .WithColumn("Code").AsString(200).NotNullable()
               .WithColumn("JoiningDate").AsDate().NotNullable()
               .WithColumn("JoiningCourse").AsInt32().NotNullable()
                     .ForeignKey("FK_Students_Courses", "Courses", "Id")
                .WithColumn("FatherContactId").AsInt32().Nullable()
                     .ForeignKey("FK_Students_FatherContacts", "Contacts", "Id")
                .WithColumn("MotherContactId").AsInt32().Nullable()
                     .ForeignKey("FK_Students_MotherContacts", "Contacts", "Id")
                .WithColumn("StudentContactId").AsInt32().Nullable()
                     .ForeignKey("FK_Students_StudentContacts", "Contacts", "Id")
                .WithColumn("CampusId").AsInt32().NotNullable()
                     .ForeignKey("FK_Students_Campuses", "Campuses", "Id")
                .WithColumn("OtherInstitute").AsString(500).Nullable()
                .WithColumn("Division").AsString(100).Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1));

            Alter.Table("FeeTerms")
               .AddColumn("TenantId").AsInt32()
                   .NotNullable().WithDefaultValue(1);

            Alter.Table("AcadamicYear")
               .AddColumn("TenantId").AsInt32()
                   .NotNullable().WithDefaultValue(1);

            Alter.Table("FeeStructure")
              .AddColumn("TenantId").AsInt32()
                  .NotNullable().WithDefaultValue(1);



        }
    }
}