using BitPro.SchoolMate.Accounts.Entities;
using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200408113800)]
    public class DefaultDB_20200408_113800_Tranportation
        : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Fees")
               .AddColumn("IsTranportation").AsBoolean().Nullable();

            Alter.Table("Students")
              .AddColumn("TranportationFeeId").AsInt32().Nullable()
                    .ForeignKey("FK_Students_Fees", "Fees", "Id")
              .AddColumn("FromAcadamicYearId").AsInt32().Nullable()
                    .ForeignKey("FK_Students_FromAcadamicYear", "AcadamicYear", "Id")
              .AddColumn("FromFeeTermId").AsInt32().Nullable()
                    .ForeignKey("FK_Students_FromFeeTerm", "FeeTerms", "Id");

            this.CreateTableWithId32("FeeAllocationTranportation", "Id", s => s
              .WithColumn("FeeCollectionId").AsInt32().NotNullable()
                  .ForeignKey("FK_FeeAllocationTranportation_FeeCollection", "FeeCollection", "Id")
              .WithColumn("FeeId").AsInt32().NotNullable()
                  .ForeignKey("FK_FeeAllocationTranportation_Fees", "Fees", "Id")
             .WithColumn("FeeStrctureId").AsInt32().NotNullable()
                  .ForeignKey("FK_FeeAllocationTranportation_FeeStructure", "FeeStructure", "Id")
             .WithColumn("Collected").AsDecimal(18,3).NotNullable()
             .WithColumn("Balance").AsDecimal(18, 3).NotNullable());






        }
    }
}