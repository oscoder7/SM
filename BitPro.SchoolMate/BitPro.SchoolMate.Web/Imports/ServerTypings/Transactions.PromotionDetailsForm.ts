namespace BitPro.SchoolMate.Transactions {
    export interface PromotionDetailsForm {
        PromotionId: Serenity.IntegerEditor;
        StudentId: Serenity.IntegerEditor;
        IsCompleted: Serenity.BooleanEditor;
        PromotionType: Serenity.EnumEditor;
    }

    export class PromotionDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Transactions.PromotionDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PromotionDetailsForm.init)  {
                PromotionDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.BooleanEditor;
                var w2 = s.EnumEditor;

                Q.initFormType(PromotionDetailsForm, [
                    'PromotionId', w0,
                    'StudentId', w0,
                    'IsCompleted', w1,
                    'PromotionType', w2
                ]);
            }
        }
    }
}
