namespace BitPro.SchoolMate.Transactions {
    export interface PromotionsForm {
        AcadamicYearId: Serenity.LookupEditor;
        FromCourse: Serenity.LookupEditor;
        ToCourse: Serenity.LookupEditor;
        CreatedBy: Serenity.LookupEditor;
        CreatedDate: Serenity.DateEditor;
        PromotionDivisions: SchoolMate.Master.DivisionsEditor;
    }

    export class PromotionsForm extends Serenity.PrefixedContext {
        static formKey = 'Transactions.Promotions';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PromotionsForm.init)  {
                PromotionsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = SchoolMate.Master.DivisionsEditor;

                Q.initFormType(PromotionsForm, [
                    'AcadamicYearId', w0,
                    'FromCourse', w0,
                    'ToCourse', w0,
                    'CreatedBy', w0,
                    'CreatedDate', w1,
                    'PromotionDivisions', w2
                ]);
            }
        }
    }
}
