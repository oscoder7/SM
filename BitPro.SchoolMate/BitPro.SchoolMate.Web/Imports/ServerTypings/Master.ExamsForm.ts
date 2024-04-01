namespace BitPro.SchoolMate.Master {
    export interface ExamsForm {
        Code: Serenity.StringEditor;
        ExamName: Serenity.StringEditor;
        AcadamicYearId: Serenity.LookupEditor;
        Courses: ExamCoursesEditor;
    }

    export class ExamsForm extends Serenity.PrefixedContext {
        static formKey = 'Master.Exams';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ExamsForm.init)  {
                ExamsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = ExamCoursesEditor;

                Q.initFormType(ExamsForm, [
                    'Code', w0,
                    'ExamName', w0,
                    'AcadamicYearId', w1,
                    'Courses', w2
                ]);
            }
        }
    }
}
