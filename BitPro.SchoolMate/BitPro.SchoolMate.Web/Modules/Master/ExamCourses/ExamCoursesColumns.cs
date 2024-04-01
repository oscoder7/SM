
namespace BitPro.SchoolMate.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.ExamCourses")]
    [BasedOnRow(typeof(Entities.ExamCoursesRow), CheckNames = true)]
    public class ExamCoursesColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        [EditLink]
        public String Course { get; set; }
        //public Int32 PromotionId { get; set; }
    }
}