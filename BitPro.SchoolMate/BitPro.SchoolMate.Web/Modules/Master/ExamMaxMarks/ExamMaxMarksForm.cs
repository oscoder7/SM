
namespace BitPro.SchoolMate.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.ExamMaxMarks")]
    [BasedOnRow(typeof(Entities.ExamMaxMarksRow), CheckNames = true)]
    public class ExamMaxMarksForm
    {
        //public Int32 ExamCoursesId { get; set; }
        public Int32 CourseSubjectId { get; set; }
        public Decimal MaxMark { get; set; }
    }
}