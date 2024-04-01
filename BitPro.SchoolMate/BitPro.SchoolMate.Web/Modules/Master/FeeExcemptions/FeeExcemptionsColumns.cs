
namespace BitPro.SchoolMate.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.FeeExcemptions")]
    [BasedOnRow(typeof(Entities.FeeExcemptionsRow), CheckNames = true)]
    public class FeeExcemptionsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        [EditLink]
        public String StudentCode { get; set; }
        public Decimal FeeExcempted { get; set; }
        
    }
}