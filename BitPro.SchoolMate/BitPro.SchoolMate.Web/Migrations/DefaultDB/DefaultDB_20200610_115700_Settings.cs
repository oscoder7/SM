using BitPro.SchoolMate.Accounts.Entities;
using FluentMigrator;
using Serenity.Data;
using System;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200610115700)]
    public class DefaultDB_20200610_115700_Settings
        : AutoReversingMigration
    {
        public override void Up()
        {

            this.Execute.Sql("delete from Config");
            using (var connection = SqlConnections.NewFor<Administration.Entities.TenantRow>())
            {
                string sql = "select TenantId from Tenants";
                var value = connection.Query<int>(sql);
                foreach(var item in value)
                {
                    this.Insert.IntoTable("Config").Row(new { Name = "Student Code Prefix", Type = "Student", ValueString = "STD_", TenantId = item });
                    this.Insert.IntoTable("Config").Row(new { Name = "Student Code Length", Type = "Student", ValueNumber = 0, TenantId = item });
                    this.Insert.IntoTable("Config").Row(new { Name = "Satff Code Prefix", Type = "Staff", ValueString = "STF_", TenantId = item });
                    this.Insert.IntoTable("Config").Row(new { Name = "Satff Code Length", Type = "Satff", ValueNumber = 0, TenantId = item });
                }
            }


        }
    }
}