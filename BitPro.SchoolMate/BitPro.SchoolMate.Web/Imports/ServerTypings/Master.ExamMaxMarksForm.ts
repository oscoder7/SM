namespace BitPro.SchoolMate.Master {
    export interface ExamMaxMarksForm {
        CourseSubjectId: Serenity.LookupEditor;
        MaxMark: Serenity.DecimalEditor;
    }

    export class ExamMaxMarksForm extends Serenity.PrefixedContext {
        static formKey = 'Master.ExamMaxMarks';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ExamMaxMarksForm.init)  {
                ExamMaxMarksForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(ExamMaxMarksForm, [
                    'CourseSubjectId', w0,
                    'MaxMark', w1
                ]);
            }
        }
    }
}
