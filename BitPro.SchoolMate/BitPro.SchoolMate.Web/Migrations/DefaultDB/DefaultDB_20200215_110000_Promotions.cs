using FluentMigrator;

namespace BitPro.SchoolMate.Migrations.DefaultDB
{
    [Migration(20200215110000)]
    public class DefaultDB_20200215_110000_Promotions
        : AutoReversingMigration
    {
        public override void Up()
        {


            this.CreateTableWithId32("Promotions", "Id", s => s
               .WithColumn("FromCourse").AsInt32().Nullable()
                     .ForeignKey("FK_Promotions_FromCourses", "Courses", "Id")
                .WithColumn("ToCourse").AsInt32().NotNullable()
                     .ForeignKey("FK_Promotions_ToCourses", "Courses", "Id")
                .WithColumn("CreatedBy").AsInt32().NotNullable()
                     .ForeignKey("FK_Promotions_Staffs", "Staffs", "Id")
                .WithColumn("CreatedDate").AsDate().NotNullable()
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1));


            this.CreateTableWithId32("PromotionDetails", "Id", s => s
              .WithColumn("PromotionId").AsInt32().NotNullable()
                    .ForeignKey("FK_PromotionDetails_Promotions", "Promotions", "Id")
              .WithColumn("StudentId").AsInt32().NotNullable()
                    .ForeignKey("FK_PromotionDetails_Students", "Students", "Id")
              .WithColumn("IsCompleted").AsBoolean().NotNullable());





        }
    }
}