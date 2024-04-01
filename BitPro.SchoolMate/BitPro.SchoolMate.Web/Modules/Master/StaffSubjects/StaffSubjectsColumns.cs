
namespace BitPro.SchoolMate.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.StaffSubjects")]
    [BasedOnRow(typeof(Entities.StaffSubjectsRow), CheckNames = true)]
    public class StaffSubjectsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        public String StaffCode { get; set; }
        public String SubjectCode { get; set; }
    }
}