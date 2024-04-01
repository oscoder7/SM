namespace BitPro.SchoolMate.Master {
    export interface CourseDivisionsForm {
        DivisionCode: Serenity.StringEditor;
    }

    export class CourseDivisionsForm extends Serenity.PrefixedContext {
        static formKey = 'Master.CourseDivisions';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CourseDivisionsForm.init)  {
                CourseDivisionsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(CourseDivisionsForm, [
                    'DivisionCode', w0
                ]);
            }
        }
    }
}
