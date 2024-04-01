
namespace BitPro.SchoolMate.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.Fees")]
    [BasedOnRow(typeof(Entities.FeesRow), CheckNames = true)]
    public class FeesForm
    {
        [HalfWidth]
        public String Code { get; set; }
        [HalfWidth]
        public String FeeName { get; set; }
        [HalfWidth]
        public Decimal AnnualFee { get; set; }
        [HalfWidth]
        public Int32 DebitAccountHeadId { get; set; }
        [HalfWidth]
        public Boolean IsTranportation { get; set; }
        [Category("Courses")]
        public List<Int32> CourseFee { get; set; }
        [Category("Fee Structures")]
        [FeeStructureEditor]
        public List<Entities.FeeStructureRow> FeeStructures { get; set; }
    }
}