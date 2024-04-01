
namespace BitPro.SchoolMate.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.Settings")]
    [BasedOnRow(typeof(Entities.SettingsRow), CheckNames = true)]
    public class SettingsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Type { get; set; }
        public String ValueString { get; set; }
        public DateTime ValueDate { get; set; }
        public Decimal ValueNumber { get; set; }
        public Boolean ValueBool { get; set; }
    }
}