using FluentMigrator;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200225120700)]
    public class DefaultDB_20200225_120700_TermsAlter
        : AutoReversingMigration
    {
        public override void Up()
        {
            this.Alter.Table("FeeTerms")
             .AddColumn("AcadamicYearId").AsInt32().NotNullable().WithDefaultValue(1)
                  .ForeignKey("FK_FeeTerms_AcadamicYear", "AcadamicYear", "Id");

            this.Alter.Table("Students")
               .AddColumn("StudentName").AsString(200).NotNullable().WithDefaultValue("Name");
        }
    }
}