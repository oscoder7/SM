namespace BitPro.SchoolMate.Transactions {
    export interface SalaryPaymentsForm {
        StaffId: Serenity.LookupEditor;
        SalaryAmount: Serenity.DecimalEditor;
        TotalPresent: Serenity.IntegerEditor;
        TotalAbsent: Serenity.IntegerEditor;
        PayableSalaryAmount: Serenity.DecimalEditor;
        PaidDate: Serenity.DateEditor;
        PaidAmount: Serenity.DecimalEditor;
        PaymentMethod: Serenity.EnumEditor;
        CreditAccountId: Serenity.LookupEditor;
        Payment: Serenity.StringEditor;
    }

    export class SalaryPaymentsForm extends Serenity.PrefixedContext {
        static formKey = 'Transactions.SalaryPayments';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SalaryPaymentsForm.init)  {
                SalaryPaymentsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DateEditor;
                var w4 = s.EnumEditor;
                var w5 = s.StringEditor;

                Q.initFormType(SalaryPaymentsForm, [
                    'StaffId', w0,
                    'SalaryAmount', w1,
                    'TotalPresent', w2,
                    'TotalAbsent', w2,
                    'PayableSalaryAmount', w1,
                    'PaidDate', w3,
                    'PaidAmount', w1,
                    'PaymentMethod', w4,
                    'CreditAccountId', w0,
                    'Payment', w5
                ]);
            }
        }
    }
}
