using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace BitPro.SchoolMate.Transactions
{
    public partial class DepartmentEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "BitPro.SchoolMate.Transactions.DepartmentEditor";

        public DepartmentEditorAttribute()
            : base(Key)
        {
        }
    }
}
