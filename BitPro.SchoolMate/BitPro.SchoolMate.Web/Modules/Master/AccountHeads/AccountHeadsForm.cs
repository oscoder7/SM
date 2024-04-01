
namespace BitPro.SchoolMate.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.AccountHeads")]
    [BasedOnRow(typeof(Entities.AccountHeadsRow), CheckNames = true)]
    public class AccountHeadsForm
    {
        public String Description { get; set; }
        public Int32 ParentHeadId { get; set; }
        public String Code { get; set; }
        public Int32 LedgerType { get; set; }
    }
}