
namespace BitPro.SchoolMate.Transactions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transactions.Promotions")]
    [BasedOnRow(typeof(Entities.PromotionsRow), CheckNames = true)]
    public class PromotionsForm
    {
        [Category("Promotions Details")]
        [HalfWidth]
        public Int32 AcadamicYearId { get; set; }
      
        [HalfWidth]
        public Int32 FromCourse { get; set; }
        [HalfWidth]
        public Int32 ToCourse { get; set; }
        [HalfWidth]
        [Category("Creation Details")]
        public Int32 CreatedBy { get; set; }
        [HalfWidth]
        public DateTime CreatedDate { get; set; }
        [Category("Divisions")]
        [Master.DivisionsEditor]
        public List<Master.Entities.DivisionsRow> PromotionDivisions { get; set; }


        //public Int32 TenantId { get; set; }
    }
}