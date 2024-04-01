
namespace BitPro.SchoolMate.Transactions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transactions.StudentMarks")]
    [BasedOnRow(typeof(Entities.StudentMarksRow), CheckNames = true)]
    public class StudentMarksForm
    {
        public Int32 AcadamicYearId { get; set; }
        public Int32 ExamId { get; set; }
        public DateTime ExamDate { get; set; }
        public Int32 PromotionId { get; set; }
        [StudentMarksSubjectsEditor]
        public List<Entities.StudentMarksSubjectsRow> Subjects { get; set; }
    }
}