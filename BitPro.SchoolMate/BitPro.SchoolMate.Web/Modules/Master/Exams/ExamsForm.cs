
namespace BitPro.SchoolMate.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.Exams")]
    [BasedOnRow(typeof(Entities.ExamsRow), CheckNames = true)]
    public class ExamsForm
    {
        public String Code { get; set; }
        public String ExamName { get; set; }
        public Int32 AcadamicYearId { get; set; }
        [ExamCoursesEditor]
        public List<Entities.ExamCoursesRow> Courses { get; set; }
    }
}