
namespace BitPro.SchoolMate.Transactions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transactions.PromotionDetails")]
    [BasedOnRow(typeof(Entities.PromotionDetailsRow), CheckNames = true)]
    public class PromotionDetailsForm
    {
        public Int32 PromotionId { get; set; }
        public Int32 StudentId { get; set; }
        public Boolean IsCompleted { get; set; }
        public Int32 PromotionType { get; set; }
    }
}