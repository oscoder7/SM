
namespace BitPro.SchoolMate.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.StaffSubjects")]
    [BasedOnRow(typeof(Entities.StaffSubjectsRow), CheckNames = true)]
    public class StaffSubjectsForm
    {
        public Int32 StaffId { get; set; }
        public Int32 SubjectId { get; set; }
    }
}