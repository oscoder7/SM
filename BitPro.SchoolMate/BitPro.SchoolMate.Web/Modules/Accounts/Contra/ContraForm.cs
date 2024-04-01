
namespace BitPro.SchoolMate.Accounts.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Accounts.Contra")]
    [BasedOnRow(typeof(Entities.ContraRow), CheckNames = true)]
    public class ContraForm
    {
        //public Int32 VType { get; set; }
        [HalfWidth]
        public Int32 VNo { get; set; }
        [HalfWidth]
        public DateTime TrxDate { get; set; }
        public Int32 ContactId { get; set; }
        //public Int32 DebitAccountHeadId { get; set; }
        //public Int32 CreditAccountHeadId { get; set; }
        [HalfWidth]
        public Int32 DebitAccountId { get; set; }
        [HalfWidth]
        public Decimal Amount { get; set; }
        [HalfWidth]
        public Int32 PaymentMethod { get; set; }
        [HalfWidth]
        public Int32 CreditAccountId { get; set; }
        public String Remarks { get; set; }
        public String Attachments { get; set; }
    }
}