
namespace BitPro.SchoolMate.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.Currencies")]
    [BasedOnRow(typeof(Entities.CurrenciesRow), CheckNames = true)]
    public class CurrenciesForm
    {
        public String Code { get; set; }
        public String CurrencyName { get; set; }
        public Int32 Precision { get; set; }
        
    }
}