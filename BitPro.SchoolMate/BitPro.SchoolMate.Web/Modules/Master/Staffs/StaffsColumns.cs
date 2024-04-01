
namespace BitPro.SchoolMate.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.Staffs")]
    [BasedOnRow(typeof(Entities.StaffsRow), CheckNames = true)]
    public class StaffsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        [EditLink]
        public String Code { get; set; }
        public String StaffName { get; set; }
        public String ContactName { get; set; }
        public Boolean IsTeacher { get; set; }
        public String Remarks { get; set; }
        [DisplayFormat("#,##0.000"), AlignRight]
        public Decimal DailyWage { get; set; }
    }
}