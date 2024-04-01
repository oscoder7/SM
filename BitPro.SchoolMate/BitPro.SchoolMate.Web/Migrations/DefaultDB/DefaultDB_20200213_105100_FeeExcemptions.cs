using FluentMigrator;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200213105100)]
    public class DefaultDB_20200213_105100_FeeExcemptions
        : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("FeeExcemptions", "Id", s => s
               .WithColumn("StudentId").AsInt32().NotNullable()
                     .ForeignKey("FK_FeeExcemptions_Students", "Students", "Id")
                .WithColumn("FeeExcempted").AsDecimal(18,2).NotNullable()
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1));


            this.CreateTableWithId32("Divisions", "Id", s => s
               .WithColumn("CourseId").AsInt32().NotNullable()
                     .ForeignKey("FK_Divisions_Courses", "Courses", "Id")
                .WithColumn("TeacherId").AsInt32().NotNullable()
                     .ForeignKey("FK_Divisions_Staffs", "Staffs", "Id")
                .WithColumn("DivisionCode").AsString(100).NotNullable()
                .WithColumn("AcadamicYearId").AsInt32().NotNullable()
                     .ForeignKey("FK_Divisions_AcadamicYear", "AcadamicYear", "Id")
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1));

            this.CreateTableWithId32("DivisionStudents", "Id", s => s
               .WithColumn("DivisionId").AsInt32().NotNullable()
                     .ForeignKey("FK_DivisionStudents_Divisions", "Divisions", "Id")
                .WithColumn("StudentId").AsInt32().NotNullable()
                     .ForeignKey("FK_DivisionStudents_Students", "Students", "Id"));

            Create.Table("AccountHeads")
                            .WithColumn("ID").AsInt32().PrimaryKey().Identity().NotNullable()
                            .WithColumn("Description").AsString(200).NotNullable()
                            .WithColumn("ParentHeadId").AsInt32().Nullable()
                                .ForeignKey("FK_AccountHead_ParentAccountHead", "AccountHeads", "ID")
                            .WithColumn("Code").AsString(200).Nullable()
                            .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);
        }
    }
}