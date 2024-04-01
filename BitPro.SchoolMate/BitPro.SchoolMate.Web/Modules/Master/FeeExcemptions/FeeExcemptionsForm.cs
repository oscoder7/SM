namespace BitPro.SchoolMate.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.FeeExcemptions")]
    [BasedOnRow(typeof(Entities.FeeExcemptionsRow), CheckNames = true)]
    public class FeeExcemptionsForm
    {
        public Int32 StudentId { get; set; }
        public Int32 CourseId { get; set; }
        public Int32 CourseFeeId { get; set; }
 
        public Decimal FeeExcempted { get; set; }


    }
}
