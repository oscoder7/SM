
namespace BitPro.SchoolMate.Transactions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transactions.SalaryStructure")]
    [BasedOnRow(typeof(Entities.SalaryStructureRow), CheckNames = true)]
    public class SalaryStructureForm
    {
        [HalfWidth]
        public DateTime FromDate { get; set; }
        [HalfWidth]
        public DateTime ToDate { get; set; }
        [HalfWidth]
        public DateTime CreatedDate { get; set; }
        [HalfWidth]
        public Int32 CreatedBy { get; set; }

        [Category("Salary Payments")]
        [SalaryPaymentEditor]
        public List<Entities.SalaryPaymentsRow> SalaryPayments { get; set; }

    }
}