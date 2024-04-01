using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace BitPro.SchoolMate.Master
{
    public partial class FeeStructureEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "BitPro.SchoolMate.Master.FeeStructureEditor";

        public FeeStructureEditorAttribute()
            : base(Key)
        {
        }
    }
}
