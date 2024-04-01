
namespace BitPro.SchoolMate.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transactions.FeeCollection")]
    [BasedOnRow(typeof(Entities.FeeCollectionRow), CheckNames = true)]
    public class FeeCollectionColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        [EditLink, SortOrder(0,true)]
        //public String CourseCode { get; set; }
        public DateTime PayDate { get; set; }
        [EditLink]
        public String StudentFullName { get; set; }
       
        [DisplayFormat("#,##0.000"), AlignRight]
        public Decimal TotalAmount { get; set; }
    }
}