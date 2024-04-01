
namespace BitPro.SchoolMate.Accounts.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Accounts.Payment")]
    [BasedOnRow(typeof(Entities.PaymentRow), CheckNames = true)]
    public class PaymentForm
    {
       // public Int32 VType { get; set; }
       [HalfWidth]
        public Int32 VNo { get; set; }
        [HalfWidth]
        public DateTime TrxDate { get; set; }
        public Int32 ContactId { get; set; }
        //public Int32 DebitAccountHeadId { get; set; }
        [HalfWidth]
        public Int32 DebitAccountHeadId { get; set; }
        [HalfWidth]
        public Decimal Amount { get; set; }
        [HalfWidth]
        public Int32 PaymentMethod { get; set; }
        [HalfWidth]
        public Int32 CreditAccountId { get; set; }
        public String Remarks { get; set; }
        public String Attachments { get; set; }
        //public Int32 CreditAccountId { get; set; }
    }
}