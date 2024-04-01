
namespace BitPro.SchoolMate.Transactions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transactions.CourseExitDetails")]
    [BasedOnRow(typeof(Entities.CourseExitDetailsRow), CheckNames = true)]
    public class CourseExitDetailsForm
    {
       // public Int32 CourseExitId { get; set; }
        public Int32 PromotionDetailId { get; set; }
        public String Attachments { get; set; }
    }
}