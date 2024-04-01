
namespace BitPro.SchoolMate.Transactions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transactions.Admission")]
    [BasedOnRow(typeof(Entities.AdmissionRow), CheckNames = true)]
    public class AdmissionForm
    {
        [HalfWidth]
        public Int32 AcadamicYearId { get; set; }
        [HalfWidth]
        public DateTime JoiningDate { get; set; }
        public Int32 StudentId { get; set; }
        [HalfWidth]
        public Int32 JoiningCourse { get; set; }
        [HalfWidth]
        public Int32 JoiningDivisionId { get; set; }

        [HalfWidth]
        public ListField<int> SelectedFees {  get; set; }


        public Int32 AdmissionFeeTermId { get; set; }
    }
}