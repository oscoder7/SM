using FluentMigrator;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200210162800)]
    public class DefaultDB_20200210_162800_Campuses
        : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Currencies", "Id", s => s
                 .WithColumn("Code").AsString(200).NotNullable()
                 .WithColumn("CurrencyName").AsString(200).NotNullable()
                 .WithColumn("Precision").AsInt32().Nullable());

            this.CreateTableWithId32("Countries", "Id", s => s
                .WithColumn("Code").AsString(200).NotNullable()
                .WithColumn("CountryName").AsString(200).NotNullable()
                .WithColumn("CurrencyId").AsInt32().Nullable()
                   .ForeignKey("FK_Countries_Currencies", "Currencies", "Id"));


            this.CreateTableWithId32("Areas", "Id", s => s
                .WithColumn("Code").AsString(200).NotNullable()
                .WithColumn("AreaName").AsString(200).NotNullable()
                .WithColumn("CountryId").AsInt32().Nullable()
                   .ForeignKey("FK_Areas_Countries", "Countries", "Id"));

            this.CreateTableWithId32("Campuses", "Id", s => s
                 .WithColumn("Code").AsString(200).NotNullable()
                 .WithColumn("Campus").AsString(200).NotNullable()
                 .WithColumn("Address").AsString(500).Nullable()
                 .WithColumn("Phone").AsString(200).Nullable()
                 .WithColumn("ContactPerson").AsString(200).Nullable()
                 .WithColumn("Mobile").AsString(200).Nullable()
                 .WithColumn("Email").AsString(200).Nullable()
                 .WithColumn("Website").AsString(200).Nullable()
                 .WithColumn("CountryId").AsInt32().Nullable()
                   .ForeignKey("FK_Campuses_Countries", "Countries", "Id")
                 .WithColumn("AreaId").AsInt32().Nullable()
                   .ForeignKey("FK_Campuses_Areas", "Areas", "Id"));
        }
    }
}