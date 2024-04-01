
namespace BitPro.SchoolMate.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transactions.Admission")]
    [BasedOnRow(typeof(Entities.AdmissionRow), CheckNames = true)]
    public class AdmissionColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        [EditLink]
        public String AcadamicYearCode { get; set; }
        [EditLink]
        public DateTime JoiningDate { get; set; }
        public String StudentCode { get; set; }
        public String StudentStudentName { get; set; }
        public String JoiningCourseCode { get; set; }
        public String JoiningDivisionDivisionCode { get; set; }
    }
}