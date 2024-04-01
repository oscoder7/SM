namespace BitPro.SchoolMate.Transactions {
    export interface StudentMarksForm {
        AcadamicYearId: Serenity.LookupEditor;
        ExamId: Serenity.LookupEditor;
        ExamDate: Serenity.DateEditor;
        PromotionId: Serenity.LookupEditor;
        Subjects: StudentMarksSubjectsEditor;
    }

    export class StudentMarksForm extends Serenity.PrefixedContext {
        static formKey = 'Transactions.StudentMarks';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!StudentMarksForm.init)  {
                StudentMarksForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = StudentMarksSubjectsEditor;

                Q.initFormType(StudentMarksForm, [
                    'AcadamicYearId', w0,
                    'ExamId', w0,
                    'ExamDate', w1,
                    'PromotionId', w0,
                    'Subjects', w2
                ]);
            }
        }
    }
}
