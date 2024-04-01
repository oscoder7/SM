using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace BitPro.SchoolMate.Transactions
{
    public partial class FeeAllocationEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "BitPro.SchoolMate.Transactions.FeeAllocationEditor";

        public FeeAllocationEditorAttribute()
            : base(Key)
        {
        }
    }
}
