
namespace BitPro.SchoolMate.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transactions.Transport")]
    [BasedOnRow(typeof(Entities.TransportRow), CheckNames = true)]
    public class TransportColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Code { get; set; }
        public String Address { get; set; }
     
    }
}