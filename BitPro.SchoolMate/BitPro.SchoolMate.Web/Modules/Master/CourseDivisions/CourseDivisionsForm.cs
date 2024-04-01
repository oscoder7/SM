
namespace BitPro.SchoolMate.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.CourseDivisions")]
    [BasedOnRow(typeof(Entities.CourseDivisionsRow), CheckNames = true)]
    public class CourseDivisionsForm
    {
        //public Int32 CourseId { get; set; }
        public String DivisionCode { get; set; }
    }
}