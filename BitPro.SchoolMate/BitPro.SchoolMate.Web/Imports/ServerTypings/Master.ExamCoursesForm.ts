namespace BitPro.SchoolMate.Master {
    export interface ExamCoursesForm {
        PromotionId: Serenity.LookupEditor;
        Subjects: ExamMaxMarksEditor;
    }

    export class ExamCoursesForm extends Serenity.PrefixedContext {
        static formKey = 'Master.ExamCourses';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ExamCoursesForm.init)  {
                ExamCoursesForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = ExamMaxMarksEditor;

                Q.initFormType(ExamCoursesForm, [
                    'PromotionId', w0,
                    'Subjects', w1
                ]);
            }
        }
    }
}
