using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace BitPro.SchoolMate.Master
{
    public partial class CourseDivisionsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "BitPro.SchoolMate.Master.CourseDivisionsEditor";

        public CourseDivisionsEditorAttribute()
            : base(Key)
        {
        }
    }
}
