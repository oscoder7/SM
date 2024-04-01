
namespace BitPro.SchoolMate.Transactions.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Transactions.SalaryPayments")]
    [BasedOnRow(typeof(Entities.SalaryPaymentsRow), CheckNames = true)]
    public class SalaryPaymentsForm
    {
        // public Int32 SalaryStructureId { get; set; }
        public Int32 StaffId { get; set; }
        [HalfWidth]
        public Decimal SalaryAmount { get; set; }
        [HalfWidth]
        public Int32 TotalPresent { get; set; }
        [HalfWidth]
        public Int32 TotalAbsent { get; set; }
        [HalfWidth]
        public Decimal PayableSalaryAmount { get; set; }
        [Category("Payment Details")]
        [HalfWidth]
        public DateTime PaidDate { get; set; }
        [HalfWidth]
        public Decimal PaidAmount { get; set; }
        [HalfWidth]
        public Int32 PaymentMethod { get; set; }
        [HalfWidth]
        public Int32 CreditAccountId { get; set; }

        [Hidden]
        public List<Accounts.Entities.PaymentRow> Payment { get; set; }
    }
}