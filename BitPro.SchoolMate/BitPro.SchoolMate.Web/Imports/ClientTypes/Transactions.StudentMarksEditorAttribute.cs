﻿using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace BitPro.SchoolMate.Transactions
{
    public partial class StudentMarksEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "BitPro.SchoolMate.Transactions.StudentMarksEditor";

        public StudentMarksEditorAttribute()
            : base(Key)
        {
        }
    }
}
