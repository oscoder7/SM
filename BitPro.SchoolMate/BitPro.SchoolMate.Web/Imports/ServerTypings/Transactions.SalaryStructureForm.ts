namespace BitPro.SchoolMate.Transactions {
    export interface SalaryStructureForm {
        FromDate: Serenity.DateEditor;
        ToDate: Serenity.DateEditor;
        CreatedDate: Serenity.DateEditor;
        CreatedBy: Serenity.LookupEditor;
        SalaryPayments: SalaryPaymentEditor;
    }

    export class SalaryStructureForm extends Serenity.PrefixedContext {
        static formKey = 'Transactions.SalaryStructure';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SalaryStructureForm.init)  {
                SalaryStructureForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.LookupEditor;
                var w2 = SalaryPaymentEditor;

                Q.initFormType(SalaryStructureForm, [
                    'FromDate', w0,
                    'ToDate', w0,
                    'CreatedDate', w0,
                    'CreatedBy', w1,
                    'SalaryPayments', w2
                ]);
            }
        }
    }
}
