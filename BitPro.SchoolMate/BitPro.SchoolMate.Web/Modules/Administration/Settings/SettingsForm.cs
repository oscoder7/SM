
namespace BitPro.SchoolMate.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.Settings")]
    [BasedOnRow(typeof(Entities.SettingsRow), CheckNames = true)]
    public class SettingsForm
    {
        public String Name { get; set; }
        public String Type { get; set; }
        public String ValueString { get; set; }
        public DateTime ValueDate { get; set; }
        public Decimal ValueNumber { get; set; }
        public Boolean ValueBool { get; set; }
    }
}