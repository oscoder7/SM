
namespace BitPro.SchoolMate.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.FeeTerms")]
    [BasedOnRow(typeof(Entities.FeeTermsRow), CheckNames = true)]
    public class FeeTermsForm
    {
        public String TermName { get; set; }
    }
}