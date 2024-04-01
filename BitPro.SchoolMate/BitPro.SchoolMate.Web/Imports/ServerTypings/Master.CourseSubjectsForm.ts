namespace BitPro.SchoolMate.Master {
    export interface CourseSubjectsForm {
        SubjectId: Serenity.LookupEditor;
        MaxMarks: Serenity.DecimalEditor;
    }

    export class CourseSubjectsForm extends Serenity.PrefixedContext {
        static formKey = 'Master.CourseSubjects';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CourseSubjectsForm.init)  {
                CourseSubjectsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(CourseSubjectsForm, [
                    'SubjectId', w0,
                    'MaxMarks', w1
                ]);
            }
        }
    }
}
