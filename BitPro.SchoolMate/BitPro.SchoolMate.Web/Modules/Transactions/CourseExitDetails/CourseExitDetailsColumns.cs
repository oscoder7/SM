
namespace BitPro.SchoolMate.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transactions.CourseExitDetails")]
    [BasedOnRow(typeof(Entities.CourseExitDetailsRow), CheckNames = true)]
    public class CourseExitDetailsColumns
    {


        [EditLink]
        public String Student { get; set; }
    }
}