
namespace BitPro.SchoolMate.Transactions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transactions.FeeAllocationTranportation")]
    [BasedOnRow(typeof(Entities.FeeAllocationTranportationRow), CheckNames = true)]
    public class FeeAllocationTranportationForm
    {
       // public Int32 FeeCollectionId { get; set; }
       [HalfWidth]
        public Int32 FeeId { get; set; }
        [HalfWidth]
        public Int32 FeeStrctureId { get; set; }
        [HalfWidth]
        public Decimal Collected { get; set; }
        [HalfWidth]
        public Decimal Balance { get; set; }
    }
}