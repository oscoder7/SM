
namespace BitPro.SchoolMate.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transactions.Promotions")]
    [BasedOnRow(typeof(Entities.PromotionsRow), CheckNames = true)]
    public class PromotionsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        [EditLink]
        public String AcadamicYearCode { get; set; }
        [EditLink]
        public String FromCourseCode { get; set; }
        public String ToCourseCode { get; set; }
        public String CreatedByCode { get; set; }
        public DateTime CreatedDate { get; set; }
        //public Int32 TenantId { get; set; }
    }
}