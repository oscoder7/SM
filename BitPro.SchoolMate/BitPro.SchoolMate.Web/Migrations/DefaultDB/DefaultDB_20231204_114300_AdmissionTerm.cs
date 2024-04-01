using BitPro.SchoolMate.Accounts.Entities;
using FluentMigrator;
using Serenity.Data;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20231204114300)]
    public class DefaultDB_20231204_114300_AdmissionTerm
        : AutoReversingMigration
    {
        public override void Up()
        {
           


            Alter.Table("Students")
                  .AddColumn("AdmissionFeeTermId").AsInt32().Nullable()
                    .ForeignKey("FK_Students_FeeTerms", "FeeTerms", "Id");


            Alter.Table("Admission")
                .AddColumn("AdmissionFeeTermId").AsInt32().Nullable()
                .ForeignKey("FK_Admission_FeeTerms", "FeeTerms", "Id");


        }
    }
}