namespace BitPro.SchoolMate.Transactions {
    export interface FeeAllocationForm {
        CourseFeeId: Serenity.LookupEditor;
        FeeStrctureId: Serenity.LookupEditor;
        Collected: Serenity.DecimalEditor;
        Balance: Serenity.DecimalEditor;
    }

    export class FeeAllocationForm extends Serenity.PrefixedContext {
        static formKey = 'Transactions.FeeAllocation';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FeeAllocationForm.init)  {
                FeeAllocationForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(FeeAllocationForm, [
                    'CourseFeeId', w0,
                    'FeeStrctureId', w0,
                    'Collected', w1,
                    'Balance', w1
                ]);
            }
        }
    }
}
