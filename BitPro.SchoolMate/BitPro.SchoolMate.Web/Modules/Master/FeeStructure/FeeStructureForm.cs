
namespace BitPro.SchoolMate.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.FeeStructure")]
    [BasedOnRow(typeof(Entities.FeeStructureRow), CheckNames = true)]
    public class FeeStructureForm
    {
        [HalfWidth]
        public Int32 AcadamicYearId { get; set; }
        [HalfWidth]
        public Int32 FeeTermId { get; set; }
        public Decimal FeeAmount { get; set; }
       // public Int32 FeeId { get; set; }
        
    }
}