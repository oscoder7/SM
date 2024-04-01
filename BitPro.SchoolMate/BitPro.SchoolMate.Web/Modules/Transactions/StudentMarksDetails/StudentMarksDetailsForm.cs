
namespace BitPro.SchoolMate.Transactions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transactions.StudentMarksDetails")]
    [BasedOnRow(typeof(Entities.StudentMarksDetailsRow), CheckNames = true)]
    public class StudentMarksDetailsForm
    {
        //public Int32 StudentMarksSubjectsId { get; set; }
        public Int32 PromotionDetailId { get; set; }
        public Decimal Mark { get; set; }
        public String Description { get; set; }
    }
}