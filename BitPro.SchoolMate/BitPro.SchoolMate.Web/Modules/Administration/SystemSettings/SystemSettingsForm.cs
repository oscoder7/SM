
namespace BitPro.SchoolMate.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.SystemSettings")]
    [BasedOnRow(typeof(Entities.SystemSettingsRow), CheckNames = true)]
    public class SystemSettingsForm
    {
        public Int32 SalaryAccount { get; set; }
        public Int32 StudentCodeLength { get; set; }
        public String StudentCodePrefix { get; set; }
        public Int32 SatffCodeLength { get; set; }
        public String SatffCodePrefix { get; set; }

    }
}