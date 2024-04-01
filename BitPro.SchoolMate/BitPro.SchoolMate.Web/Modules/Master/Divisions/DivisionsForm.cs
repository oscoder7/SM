
namespace BitPro.SchoolMate.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.Divisions")]
    [BasedOnRow(typeof(Entities.DivisionsRow), CheckNames = true)]
    public class DivisionsForm
    {
        //public Int32 CourseId { get; set; }
        //public Int32 AcadamicYearId { get; set; }
        public String DivisionCode { get; set; }
        public Int32 TeacherId { get; set; }
        //public Int32 PromotionId { get; set; }
        //public Int32 TenantId { get; set; }
    }
}