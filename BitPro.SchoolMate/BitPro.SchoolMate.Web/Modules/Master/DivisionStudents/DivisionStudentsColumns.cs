
namespace BitPro.SchoolMate.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.DivisionStudents")]
    [BasedOnRow(typeof(Entities.DivisionStudentsRow), CheckNames = true)]
    public class DivisionStudentsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        public String Student { get; set; }
        //public String StudentCode { get; set; }
    }
}