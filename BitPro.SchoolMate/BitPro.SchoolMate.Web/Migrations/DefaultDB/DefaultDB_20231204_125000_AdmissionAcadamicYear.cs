using BitPro.SchoolMate.Accounts.Entities;
using FluentMigrator;
using Serenity.Data;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20231204125000)]
    public class DefaultDB_20231204_125000_AdmissionAcadamicYear
        : AutoReversingMigration
    {
        public override void Up()
        {
           
            Execute.Sql("update Students set AdmissionAcadamicYearId=(select top 1 Id from AcadamicYear)");

        }
    }
}