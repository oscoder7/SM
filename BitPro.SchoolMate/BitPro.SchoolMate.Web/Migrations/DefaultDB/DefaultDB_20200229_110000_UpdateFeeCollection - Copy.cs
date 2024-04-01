using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200229110000)]
    public class DefaultDB_20200229_110000_UpdateFeeCollection
        : AutoReversingMigration
    {
        public override void Up()
        {

            Execute.Sql("ALTER TABLE FeeCollection DROP CONSTRAINT FK_FeeCollection_Courses");
            Execute.Sql("ALTER TABLE FeeCollection DROP COLUMN CourseId");



        }
    }
}