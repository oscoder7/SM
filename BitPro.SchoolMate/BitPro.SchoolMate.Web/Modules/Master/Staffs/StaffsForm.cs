
namespace BitPro.SchoolMate.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.Staffs")]
    [BasedOnRow(typeof(Entities.StaffsRow), CheckNames = true)]
    public class StaffsForm
    {
        [HalfWidth]
        public String Code { get; set; }
        [HalfWidth]
        public String StaffName { get; set; }
        [HalfWidth]
        public Int32 ContactId { get; set; }
        [HalfWidth]
        public Boolean IsTeacher { get; set; }
        [HalfWidth]
        public DateTime JoiningDate { get; set; }
        [HalfWidth]
        public String Qualification { get; set; }
        public List<Int32> StaffSubjects { get; set; }
        public String Remarks { get; set; }
        public Decimal DailyWage { get; set; }
        [HalfWidth]
        public Decimal SalaryAmount { get; set; }
        [HalfWidth]
        public Int32 DaysCount { get; set; }


    }
}