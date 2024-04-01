
namespace BitPro.SchoolMate.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.StudentCurrentCourses")]
    [BasedOnRow(typeof(Entities.StudentCurrentCoursesRow), CheckNames = true)]
    public class StudentCurrentCoursesColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        public String StudentCode { get; set; }
        public String CourseCode { get; set; }
    }
}