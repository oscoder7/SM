
namespace BitPro.SchoolMate.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.CourseFee")]
    [BasedOnRow(typeof(Entities.CourseFeeRow), CheckNames = true)]
    public class CourseFeeColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        public String CourseCode { get; set; }
        public String FeeCode { get; set; }
    }
}