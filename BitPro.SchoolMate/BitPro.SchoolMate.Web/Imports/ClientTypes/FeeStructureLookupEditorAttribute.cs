using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace BitPro.SchoolMate
{
    public partial class FeeStructureLookupEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "BitPro.SchoolMate.FeeStructureLookupEditor";

        public FeeStructureLookupEditorAttribute()
            : base(Key)
        {
        }
    }
}
