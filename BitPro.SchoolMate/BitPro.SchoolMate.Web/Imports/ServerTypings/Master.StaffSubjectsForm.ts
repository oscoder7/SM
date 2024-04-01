namespace BitPro.SchoolMate.Master {
    export interface StaffSubjectsForm {
        StaffId: Serenity.IntegerEditor;
        SubjectId: Serenity.IntegerEditor;
    }

    export class StaffSubjectsForm extends Serenity.PrefixedContext {
        static formKey = 'Master.StaffSubjects';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!StaffSubjectsForm.init)  {
                StaffSubjectsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(StaffSubjectsForm, [
                    'StaffId', w0,
                    'SubjectId', w0
                ]);
            }
        }
    }
}
