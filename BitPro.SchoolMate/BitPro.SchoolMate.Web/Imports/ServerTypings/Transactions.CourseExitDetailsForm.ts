namespace BitPro.SchoolMate.Transactions {
    export interface CourseExitDetailsForm {
        PromotionDetailId: Serenity.LookupEditor;
        Attachments: Serenity.MultipleImageUploadEditor;
    }

    export class CourseExitDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Transactions.CourseExitDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CourseExitDetailsForm.init)  {
                CourseExitDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.MultipleImageUploadEditor;

                Q.initFormType(CourseExitDetailsForm, [
                    'PromotionDetailId', w0,
                    'Attachments', w1
                ]);
            }
        }
    }
}
