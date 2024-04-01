
namespace BitPro.SchoolMate.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.ExamCourses")]
    [BasedOnRow(typeof(Entities.ExamCoursesRow), CheckNames = true)]
    public class ExamCoursesForm
    {
        //public Int32 ExamId { get; set; }
        public Int32 PromotionId { get; set; }
        [ExamMaxMarksEditor]
        public List<Entities.ExamMaxMarksRow> Subjects { get; set; }
    }
}