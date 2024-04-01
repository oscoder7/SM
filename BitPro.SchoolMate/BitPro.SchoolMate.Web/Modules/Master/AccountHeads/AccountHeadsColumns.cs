
namespace BitPro.SchoolMate.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.AccountHeads")]
    [BasedOnRow(typeof(Entities.AccountHeadsRow), CheckNames = true)]
    public class AccountHeadsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        [EditLink]
        public String Description { get; set; }
        public String ParentHeadDescription { get; set; }
        public String Code { get; set; }
        public Int32 LedgerType { get; set; }
        //public Int32 TenantId { get; set; }
    }
}