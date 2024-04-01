
namespace BitPro.SchoolMate.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transactions.PromotionDetails")]
    [BasedOnRow(typeof(Entities.PromotionDetailsRow), CheckNames = true)]
    public class PromotionDetailsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        [EditLink]
        public Int32 PromotionId { get; set; }
        public String StudentCode { get; set; }
        public Boolean IsCompleted { get; set; }
    }
}