
namespace BitPro.SchoolMate.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.SystemSettings")]
    [BasedOnRow(typeof(Entities.SystemSettingsRow), CheckNames = true)]
    public class SystemSettingsColumns
    {
        [EditLink]
        public String SalaryAccountDescription { get; set; }
        [EditLink]
        public Int32 StudentCodeLength { get; set; }
        public String StudentCodePrefix { get; set; }
        public Int32 SatffCodeLength { get; set; }
        public String SatffCodePrefix { get; set; }

    }
}