
namespace BitPro.SchoolMate.Transactions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transactions.CourseExit")]
    [BasedOnRow(typeof(Entities.CourseExitRow), CheckNames = true)]
    public class CourseExitForm
    {
        [HalfWidth]
        public Int32 AcadamicYearId { get; set; }
        [HalfWidth]
        public Int32 PromotionId { get; set; }
        [HalfWidth]
        public Int32 ExitType { get; set; }
        [HalfWidth]
        public DateTime ExitDate { get; set; }
        [CourseExitEditor]
        public List<Entities.CourseExitDetailsRow> Students { get; set; }
    }
}