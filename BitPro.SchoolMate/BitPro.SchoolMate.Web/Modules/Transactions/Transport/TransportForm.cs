
namespace BitPro.SchoolMate.Transactions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transactions.Transport")]
    [BasedOnRow(typeof(Entities.TransportRow), CheckNames = true)]
    public class TransportForm
    {
        public String Name { get; set; }
        public String Code { get; set; }
        [TextAreaEditor(Rows = 8)]
        public String Address { get; set; }
        
    }
}