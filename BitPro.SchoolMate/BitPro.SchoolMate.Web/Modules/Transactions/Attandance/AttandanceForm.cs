
namespace BitPro.SchoolMate.Transactions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transactions.Attandance")]
    [BasedOnRow(typeof(Entities.AttandanceRow), CheckNames = true)]
    public class AttandanceForm
    {
        //public Int32 StudentId { get; set; }
        public Int32 StaffId { get; set; }
        public DateTime Date { get; set; }
        public Int32 AcadamicYearId { get; set; }
        public Int32 Status { get; set; }
        public String Attachments { get; set; }
        public String Description { get; set; }
    }
}