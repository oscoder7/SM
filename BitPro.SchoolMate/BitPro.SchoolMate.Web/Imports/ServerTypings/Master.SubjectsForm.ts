namespace BitPro.SchoolMate.Master {
    export interface SubjectsForm {
        Code: Serenity.StringEditor;
        SubjectName: Serenity.StringEditor;
    }

    export class SubjectsForm extends Serenity.PrefixedContext {
        static formKey = 'Master.Subjects';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SubjectsForm.init)  {
                SubjectsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(SubjectsForm, [
                    'Code', w0,
                    'SubjectName', w0
                ]);
            }
        }
    }
}
