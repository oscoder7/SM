﻿
namespace BitPro.SchoolMate.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.FeeStructure")]
    [BasedOnRow(typeof(Entities.FeeStructureRow), CheckNames = true)]
    public class FeeStructureColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        [EditLink]
        public String AcadamicYearCode { get; set; }
        public String FeeTermTermName { get; set; }
        public Decimal FeeAmount { get; set; }

    }
}