namespace BitPro.SchoolMate.Master {
    export interface FeeTermsForm {
        TermName: Serenity.StringEditor;
    }

    export class FeeTermsForm extends Serenity.PrefixedContext {
        static formKey = 'Master.FeeTerms';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FeeTermsForm.init)  {
                FeeTermsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(FeeTermsForm, [
                    'TermName', w0
                ]);
            }
        }
    }
}
