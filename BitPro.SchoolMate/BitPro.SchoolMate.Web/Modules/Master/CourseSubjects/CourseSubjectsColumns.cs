
namespace BitPro.SchoolMate.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.CourseSubjects")]
    [BasedOnRow(typeof(Entities.CourseSubjectsRow), CheckNames = true)]
    public class CourseSubjectsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        [EditLink]
        public String SubjectSubjectName { get; set; }
        public Decimal MaxMarks { get; set; }
    }
}