
namespace BitPro.SchoolMate.Accounts.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Accounts.Receipt")]
    [BasedOnRow(typeof(Entities.ReceiptRow), CheckNames = true)]
    public class ReceiptForm
    {
        //public Int32 VType { get; set; }
        [HalfWidth]
        public Int32 VNo { get; set; }
        [HalfWidth]
        public DateTime TrxDate { get; set; }
        public Int32 ContactId { get; set; }
        [HalfWidth]
        public Int32 CreditAccountHeadId { get; set; }
        [HalfWidth]
        //public Int32 CreditAccountHeadId { get; set; }
        public Decimal Amount { get; set; }
        [HalfWidth]
        public Int32 PaymentMethod { get; set; }
        [HalfWidth]
        public Int32 DebitAccountId { get; set; }
        //public Int32 CreditAccountId { get; set; }
        public String Remarks { get; set; }

        public String Attachments { get; set; }
    }
}