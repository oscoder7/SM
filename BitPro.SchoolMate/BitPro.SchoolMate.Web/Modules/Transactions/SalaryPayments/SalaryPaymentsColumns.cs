
namespace BitPro.SchoolMate.Transactions.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transactions.SalaryPayments")]
    [BasedOnRow(typeof(Entities.SalaryPaymentsRow), CheckNames = true)]
    public class SalaryPaymentsColumns
    {
      [EditLink]
        //public Int32 SalaryStructureId { get; set; }
        public String StaffStaffName { get; set; }
        [EditLink]
        public Decimal SalaryAmount { get; set; }
        public Int32 TotalPresent { get; set; }
        public Int32 TotalAbsent { get; set; }
        public Decimal PayableSalaryAmount { get; set; }
        public DateTime PaidDate { get; set; }
        [DisplayFormat("#,##0.000"), AlignRight]
        public Decimal PaidAmount { get; set; }
        public String CreditAccountAccountNo { get; set; }
      
    }
}