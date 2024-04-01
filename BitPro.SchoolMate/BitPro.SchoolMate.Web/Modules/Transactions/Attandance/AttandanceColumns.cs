
namespace BitPro.SchoolMate.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transactions.Attandance")]
    [BasedOnRow(typeof(Entities.AttandanceRow), CheckNames = true)]
    public class AttandanceColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        [EditLink]
        public DateTime Date { get; set; }
        [EditLink]
        //public String StudentCode { get; set; }
        public String StaffCode { get; set; }
        public String AcadamicYearCode { get; set; }
        public Int32 Status { get; set; }
        public String Attachments { get; set; }
        public String Description { get; set; }
    }
}