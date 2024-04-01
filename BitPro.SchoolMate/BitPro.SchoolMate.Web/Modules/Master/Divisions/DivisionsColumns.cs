
namespace BitPro.SchoolMate.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.Divisions")]
    [BasedOnRow(typeof(Entities.DivisionsRow), CheckNames = true)]
    public class DivisionsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        [EditLink]
        public String DivisionCode { get; set; }
        //public String CourseCode { get; set; }
        public String TeacherStaffName { get; set; }
        //public String AcadamicYearCode { get; set; }
        //public Int32 TenantId { get; set; }
    }
}