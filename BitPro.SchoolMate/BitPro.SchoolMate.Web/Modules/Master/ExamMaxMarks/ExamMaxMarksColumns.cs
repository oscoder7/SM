
namespace BitPro.SchoolMate.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.ExamMaxMarks")]
    [BasedOnRow(typeof(Entities.ExamMaxMarksRow), CheckNames = true)]
    public class ExamMaxMarksColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        //public Int32 ExamCoursesId { get; set; }
        [EditLink]
        public String CourseSubject { get; set; }
        public Decimal MaxMark { get; set; }
    }
}