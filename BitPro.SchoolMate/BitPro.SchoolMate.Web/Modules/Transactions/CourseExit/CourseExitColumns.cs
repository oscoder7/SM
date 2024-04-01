
namespace BitPro.SchoolMate.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transactions.CourseExit")]
    [BasedOnRow(typeof(Entities.CourseExitRow), CheckNames = true)]
    public class CourseExitColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        [EditLink]
        public DateTime ExitDate { get; set; }
        [EditLink]
        public String AcadamicYearCode { get; set; }
        public String ToCourse { get; set; }
        public Int32 ExitType { get; set; }
        
    }
}