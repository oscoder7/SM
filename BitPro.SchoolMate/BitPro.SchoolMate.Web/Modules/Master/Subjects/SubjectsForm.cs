
namespace BitPro.SchoolMate.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.Subjects")]
    [BasedOnRow(typeof(Entities.SubjectsRow), CheckNames = true)]
    public class SubjectsForm
    {
        public String Code { get; set; }
        public String SubjectName { get; set; }
    }
}