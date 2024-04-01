using FluentMigrator;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200302172100)]
    public class DefaultDB_20200302_172100_DeleteFromCurencies
        : AutoReversingMigration
    {
        public override void Up()
        {


            this.Execute.Sql("delete from Currencies where id not in(select CurrencyId from Countries)");


        }
    }
}