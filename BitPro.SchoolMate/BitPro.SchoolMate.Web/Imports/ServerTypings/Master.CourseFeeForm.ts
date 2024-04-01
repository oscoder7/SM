namespace BitPro.SchoolMate.Master {
    export interface CourseFeeForm {
        CourseId: Serenity.IntegerEditor;
        FeeId: Serenity.IntegerEditor;
    }

    export class CourseFeeForm extends Serenity.PrefixedContext {
        static formKey = 'Master.CourseFee';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CourseFeeForm.init)  {
                CourseFeeForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(CourseFeeForm, [
                    'CourseId', w0,
                    'FeeId', w0
                ]);
            }
        }
    }
}
