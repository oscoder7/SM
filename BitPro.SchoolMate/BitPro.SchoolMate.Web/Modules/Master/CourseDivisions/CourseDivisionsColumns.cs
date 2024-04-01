
namespace BitPro.SchoolMate.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.CourseDivisions")]
    [BasedOnRow(typeof(Entities.CourseDivisionsRow), CheckNames = true)]
    public class CourseDivisionsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        //public String CourseCode { get; set; }
        [EditLink]
        public String DivisionCode { get; set; }
    }
}