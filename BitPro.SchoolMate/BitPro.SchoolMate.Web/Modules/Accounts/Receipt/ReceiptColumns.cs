
namespace BitPro.SchoolMate.Accounts.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Accounts.Receipt")]
    [BasedOnRow(typeof(Entities.ReceiptRow), CheckNames = true)]
    public class ReceiptColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        // public Int32 VType { get; set; }
        [EditLink]

        public Int32 VNo { get; set; }
        [EditLink]

        //public String DebitAccountHeadDescription { get; set; }
        public String CreditAccountHeadDescription { get; set; }
        [DisplayFormat("#,##0.000"), AlignRight]
        public Decimal Amount { get; set; }
        public Int32 PaymentMethod { get; set; }
        public String DebitAccountAccountNo { get; set; }
        public String Remarks { get; set; }
        //public String CreditAccountAccountNo { get; set; }
    }
}