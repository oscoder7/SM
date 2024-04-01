using FluentMigrator;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200218102200)]
    public class DefaultDB_20200218_102200_FeeCollection
        : AutoReversingMigration
    {
        public override void Up()
        {




            this.CreateTableWithId32("FeeCollection", "Id", s => s
               .WithColumn("StudentId").AsInt32().NotNullable()
                     .ForeignKey("FK_FeeCollection_Students", "Students", "Id")
               .WithColumn("CourseId").AsInt32().NotNullable()
                     .ForeignKey("FK_FeeCollection_Courses", "Courses", "Id")
               .WithColumn("PayDate").AsDate().NotNullable()
               .WithColumn("TotalAmount").AsDecimal(18,3).NotNullable());

            this.CreateTableWithId32("FeeAllocation", "Id", s => s
               .WithColumn("FeeCollectionId").AsInt32().NotNullable()
                     .ForeignKey("FK_FeeAllocation_FeeCollection", "FeeCollection", "Id")
               .WithColumn("CourseFeeId").AsInt32().NotNullable()
                     .ForeignKey("FK_FeeAllocation_CourseFee", "CourseFee", "Id")
               .WithColumn("FeeStrctureId").AsInt32().NotNullable()
                     .ForeignKey("FK_FeeAllocation_FeeStructure", "FeeStructure", "Id")
               .WithColumn("Collected").AsDecimal(18, 3).NotNullable()
               .WithColumn("Balance").AsDecimal(18, 3).NotNullable());

        }
    }
}