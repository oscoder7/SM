using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace BitPro.SchoolMate.Master
{
    public partial class FeeTermsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "BitPro.SchoolMate.Master.FeeTermsEditor";

        public FeeTermsEditorAttribute()
            : base(Key)
        {
        }
    }
}
