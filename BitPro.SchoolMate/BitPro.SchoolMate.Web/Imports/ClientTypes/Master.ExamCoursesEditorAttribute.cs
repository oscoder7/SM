using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace BitPro.SchoolMate.Master
{
    public partial class ExamCoursesEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "BitPro.SchoolMate.Master.ExamCoursesEditor";

        public ExamCoursesEditorAttribute()
            : base(Key)
        {
        }
    }
}
