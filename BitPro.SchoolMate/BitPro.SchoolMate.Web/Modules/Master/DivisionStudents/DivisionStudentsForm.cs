
namespace BitPro.SchoolMate.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.DivisionStudents")]
    [BasedOnRow(typeof(Entities.DivisionStudentsRow), CheckNames = true)]
    public class DivisionStudentsForm
    {
        public Int32 DivisionId { get; set; }
        public Int32 PromotionDetailId { get; set; }
        //public Int32 StudentId { get; set; }
    }
}