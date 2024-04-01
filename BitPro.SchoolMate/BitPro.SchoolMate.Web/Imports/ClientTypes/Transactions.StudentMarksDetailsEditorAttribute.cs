using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace BitPro.SchoolMate.Transactions
{
    public partial class StudentMarksDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "BitPro.SchoolMate.Transactions.StudentMarksDetailsEditor";

        public StudentMarksDetailsEditorAttribute()
            : base(Key)
        {
        }
    }
}
