
namespace BitPro.SchoolMate.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.CourseFee")]
    [BasedOnRow(typeof(Entities.CourseFeeRow), CheckNames = true)]
    public class CourseFeeForm
    {
        public Int32 CourseId { get; set; }
        public Int32 FeeId { get; set; }
    }
}