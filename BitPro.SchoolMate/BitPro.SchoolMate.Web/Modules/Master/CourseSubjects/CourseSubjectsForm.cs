
namespace BitPro.SchoolMate.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.CourseSubjects")]
    [BasedOnRow(typeof(Entities.CourseSubjectsRow), CheckNames = true)]
    public class CourseSubjectsForm
    {
        
        public Int32 SubjectId { get; set; }
        public Decimal MaxMarks { get; set; }
    }
}