
namespace BitPro.SchoolMate.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transactions.StudentMarks")]
    [BasedOnRow(typeof(Entities.StudentMarksRow), CheckNames = true)]
    public class StudentMarksColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        [EditLink]
        public String AcadamicYearCode { get; set; }
        [EditLink]
        public String ExamCode { get; set; }
        public DateTime ExamDate { get; set; }
        //public Int32 PromotionId { get; set; }
    }
}