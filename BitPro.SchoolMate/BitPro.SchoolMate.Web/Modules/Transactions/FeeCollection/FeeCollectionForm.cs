
namespace BitPro.SchoolMate.Transactions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transactions.FeeCollection")]
    [BasedOnRow(typeof(Entities.FeeCollectionRow), CheckNames = true)]
    public class FeeCollectionForm
    {
        [HalfWidth]
        public Int32 AcadamicYearId { get; set; }
        [HalfWidth]
        public Int32 StudentId { get; set; }
        [HalfWidth]
        public Int32 PromotionDetailId { get; set; }
        [HalfWidth]
        public DateTime PayDate { get; set; }
        [Category("Allocations")]
        [FeeAllocationEditor]
        public List<Entities.FeeAllocationRow> FeeAllocations { get; set; }
        [Category("Transportation Fee")]
        [FeeAllocationTranportationEditor]
        public List<Entities.FeeAllocationTranportationRow> TranportationFee { get; set; }
        public Decimal TotalAmount { get; set; }
        [HalfWidth]
        public Int32 PaymentMethod { get; set; }
        [HalfWidth]
        public Int32 AccountId { get; set; }
        
    }
}