namespace BitPro.SchoolMate.Master {
    export interface AcadamicYearForm {
        Code: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        PeriodFrom: Serenity.DateEditor;
        PeriodTo: Serenity.DateEditor;
        FeeTerms: FeeTermsEditor;
    }

    export class AcadamicYearForm extends Serenity.PrefixedContext {
        static formKey = 'Master.AcadamicYear';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AcadamicYearForm.init)  {
                AcadamicYearForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.DateEditor;
                var w3 = FeeTermsEditor;

                Q.initFormType(AcadamicYearForm, [
                    'Code', w0,
                    'Description', w1,
                    'PeriodFrom', w2,
                    'PeriodTo', w2,
                    'FeeTerms', w3
                ]);
            }
        }
    }
}
