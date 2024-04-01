namespace BitPro.SchoolMate.Transactions {
    export interface FeeAllocationTranportationForm {
        FeeId: Serenity.LookupEditor;
        FeeStrctureId: Serenity.LookupEditor;
        Collected: Serenity.DecimalEditor;
        Balance: Serenity.DecimalEditor;
    }

    export class FeeAllocationTranportationForm extends Serenity.PrefixedContext {
        static formKey = 'Transactions.FeeAllocationTranportation';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FeeAllocationTranportationForm.init)  {
                FeeAllocationTranportationForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(FeeAllocationTranportationForm, [
                    'FeeId', w0,
                    'FeeStrctureId', w0,
                    'Collected', w1,
                    'Balance', w1
                ]);
            }
        }
    }
}
