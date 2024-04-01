namespace BitPro.SchoolMate.Master {
    export interface FeeExcemptionsForm {
        StudentId: Serenity.LookupEditor;
        CourseId: Serenity.LookupEditor;
        CourseFeeId: Serenity.LookupEditor;
        FeeExcempted: Serenity.DecimalEditor;
    }

    export class FeeExcemptionsForm extends Serenity.PrefixedContext {
        static formKey = 'Master.FeeExcemptions';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FeeExcemptionsForm.init)  {
                FeeExcemptionsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(FeeExcemptionsForm, [
                    'StudentId', w0,
                    'CourseId', w0,
                    'CourseFeeId', w0,
                    'FeeExcempted', w1
                ]);
            }
        }
    }
}
