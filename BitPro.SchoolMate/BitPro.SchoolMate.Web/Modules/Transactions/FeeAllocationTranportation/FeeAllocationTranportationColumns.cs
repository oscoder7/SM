
namespace BitPro.SchoolMate.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transactions.FeeAllocationTranportation")]
    [BasedOnRow(typeof(Entities.FeeAllocationTranportationRow), CheckNames = true)]
    public class FeeAllocationTranportationColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        ////public Int32 Id { get; set; }
        ////public Int32 FeeCollectionId { get; set; }
        [EditLink]
        public String FeeCode { get; set; }
        [EditLink]
        public String TermName { get; set; }
        [DisplayFormat("#,##0.000"), AlignRight]
        public Decimal Collected { get; set; }
        [DisplayFormat("#,##0.000"), AlignRight]
        public Decimal Balance { get; set; }
    }
}