using BitPro.SchoolMate.Accounts.Entities;
using FluentMigrator;
using Serenity.Data;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200613183200)]
    public class DefaultDB_20200613_183200_Settings
        : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Settings", "Id", s => s
             .WithColumn("SalaryAccount").AsInt32().Nullable()
                   .ForeignKey("FK_Settings_SalaryAccountHeads", "AccountHeads", "Id")
              .WithColumn("TenantId").AsInt32().NotNullable());
            using (var connection = SqlConnections.NewFor<Administration.Entities.TenantRow>())
            {
                string sql = "select TenantId from Tenants";
                var value = connection.Query<int>(sql);
                foreach (var item in value)
                {
                    this.Insert.IntoTable("Settings").Row(new { TenantId = item });
                }
            }


        }
    }
}