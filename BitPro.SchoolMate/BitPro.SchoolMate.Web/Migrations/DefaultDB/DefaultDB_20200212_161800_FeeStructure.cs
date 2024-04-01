using FluentMigrator;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200212161800)]
    public class DefaultDB_20200212_161800_FeeStructure
        : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("FeeTerms", "Id", s => s
                 .WithColumn("TermName").AsString(200).NotNullable());

            this.CreateTableWithId32("AcadamicYear", "Id", s => s
                .WithColumn("Code").AsString(200).NotNullable()
                .WithColumn("PeriodFrom").AsDate().NotNullable()
                .WithColumn("PeriodTo").AsDate().NotNullable()
                .WithColumn("Description").AsString(500).Nullable());

            this.CreateTableWithId32("FeeStructure", "Id", s => s
                 .WithColumn("FeeTermId").AsInt32().NotNullable()
                     .ForeignKey("FK_FeeStructure_FeeTerms", "FeeTerms", "Id")
                 .WithColumn("FeeAmount").AsDecimal(18,3).NotNullable()
                 .WithColumn("FeeId").AsInt32().NotNullable()
                     .ForeignKey("FK_FeeStructure_Fees", "Fees", "Id")
                 .WithColumn("AcadamicYearId").AsInt32().NotNullable()
                     .ForeignKey("FK_FeeStructure_AcadamicYear", "AcadamicYear", "Id"));



        }
    }
}