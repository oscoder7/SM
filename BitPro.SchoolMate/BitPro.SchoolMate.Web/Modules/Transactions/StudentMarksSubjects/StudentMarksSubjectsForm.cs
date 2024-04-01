
namespace BitPro.SchoolMate.Transactions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transactions.StudentMarksSubjects")]
    [BasedOnRow(typeof(Entities.StudentMarksSubjectsRow), CheckNames = true)]
    public class StudentMarksSubjectsForm
    {
        public Int32 CourseSubjectId { get; set; }
        [StudentMarksEditor]
        public List<Entities.StudentMarksDetailsRow> StudentMarksDetails { get; set; }
    }
}