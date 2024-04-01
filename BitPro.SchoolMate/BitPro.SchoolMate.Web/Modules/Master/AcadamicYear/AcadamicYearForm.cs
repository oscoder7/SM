
namespace BitPro.SchoolMate.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.AcadamicYear")]
    [BasedOnRow(typeof(Entities.AcadamicYearRow), CheckNames = true)]
    public class AcadamicYearForm
    {
        [HalfWidth]
        public String Code { get; set; }
        [HalfWidth]
        public String Description { get; set; }
        [HalfWidth]
        public DateTime PeriodFrom { get; set; }
        [HalfWidth]
        public DateTime PeriodTo { get; set; }

       
        [Category("Fee Terms")]
        [FeeTermsEditor]
        public List<Entities.FeeTermsRow> FeeTerms { get; set; }
    }
}