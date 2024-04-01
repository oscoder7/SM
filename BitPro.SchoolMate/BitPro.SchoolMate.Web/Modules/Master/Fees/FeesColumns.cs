
namespace BitPro.SchoolMate.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.Fees")]
    [BasedOnRow(typeof(Entities.FeesRow), CheckNames = true)]
    public class FeesColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        [EditLink]
        public String Code { get; set; }
        public String FeeName { get; set; }
        [DisplayFormat("#,##0.000"), AlignRight]
        public Decimal AnnualFee { get; set; }
        //public Int32 TenantId { get; set; }
    }
}