
namespace BitPro.SchoolMate.Transactions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transactions.FeeAllocation")]
    [BasedOnRow(typeof(Entities.FeeAllocationRow), CheckNames = true)]
    public class FeeAllocationForm
    {
        //public Int32 FeeCollectionId { get; set; }
        public Int32 CourseFeeId { get; set; }
        public Int32 FeeStrctureId { get; set; }
        public Decimal Collected { get; set; }
        public Decimal Balance { get; set; }
    }
}