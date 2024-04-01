using FluentMigrator;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200212123456)]
    public class DefaultDB_20200212_123456_Transport
        : AutoReversingMigration
    {
       
        public override void Up()
        {
            this.CreateTableWithId32("Transport", "Id", s => s
               .WithColumn("Name").AsString(200).NotNullable()
               .WithColumn("Code").AsString(200).NotNullable()
               .WithColumn("Address").AsString(500).Nullable());
        
        }
    }
}