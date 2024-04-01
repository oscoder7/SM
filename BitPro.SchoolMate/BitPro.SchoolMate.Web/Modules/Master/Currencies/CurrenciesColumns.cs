
namespace BitPro.SchoolMate.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.Currencies")]
    [BasedOnRow(typeof(Entities.CurrenciesRow), CheckNames = true)]
    public class CurrenciesColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        [EditLink]
        public String Code { get; set; }
        public String CurrencyName { get; set; }
        public Int32 Precision { get; set; }
       // public Int32 TenantId { get; set; }
    }
}