namespace BitPro.SchoolMate.Master {
    export interface DivisionsForm {
        DivisionCode: Serenity.StringEditor;
        TeacherId: Serenity.LookupEditor;
    }

    export class DivisionsForm extends Serenity.PrefixedContext {
        static formKey = 'Master.Divisions';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DivisionsForm.init)  {
                DivisionsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(DivisionsForm, [
                    'DivisionCode', w0,
                    'TeacherId', w1
                ]);
            }
        }
    }
}
