
namespace BitPro.SchoolMate.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transactions.StudentMarksDetails")]
    [BasedOnRow(typeof(Entities.StudentMarksDetailsRow), CheckNames = true)]
    public class StudentMarksDetailsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        [EditLink]
        public String Student { get; set; }
        [EditLink]
        public Decimal Mark { get; set; }
        public String Description { get; set; }
    }
}