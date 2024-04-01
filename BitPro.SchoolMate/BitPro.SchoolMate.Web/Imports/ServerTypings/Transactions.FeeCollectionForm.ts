namespace BitPro.SchoolMate.Transactions {
    export interface FeeCollectionForm {
        AcadamicYearId: Serenity.LookupEditor;
        StudentId: Serenity.LookupEditor;
        PromotionDetailId: Serenity.LookupEditor;
        PayDate: Serenity.DateEditor;
        FeeAllocations: FeeAllocationEditor;
        TranportationFee: FeeAllocationTranportationEditor;
        TotalAmount: Serenity.DecimalEditor;
        PaymentMethod: Serenity.EnumEditor;
        AccountId: Serenity.LookupEditor;
    }

    export class FeeCollectionForm extends Serenity.PrefixedContext {
        static formKey = 'Transactions.FeeCollection';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FeeCollectionForm.init)  {
                FeeCollectionForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = FeeAllocationEditor;
                var w3 = FeeAllocationTranportationEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.EnumEditor;

                Q.initFormType(FeeCollectionForm, [
                    'AcadamicYearId', w0,
                    'StudentId', w0,
                    'PromotionDetailId', w0,
                    'PayDate', w1,
                    'FeeAllocations', w2,
                    'TranportationFee', w3,
                    'TotalAmount', w4,
                    'PaymentMethod', w5,
                    'AccountId', w0
                ]);
            }
        }
    }
}
