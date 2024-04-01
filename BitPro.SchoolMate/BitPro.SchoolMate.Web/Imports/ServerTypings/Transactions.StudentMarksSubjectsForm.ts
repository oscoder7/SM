namespace BitPro.SchoolMate.Transactions {
    export interface StudentMarksSubjectsForm {
        CourseSubjectId: Serenity.LookupEditor;
        StudentMarksDetails: StudentMarksEditor;
    }

    export class StudentMarksSubjectsForm extends Serenity.PrefixedContext {
        static formKey = 'Transactions.StudentMarksSubjects';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!StudentMarksSubjectsForm.init)  {
                StudentMarksSubjectsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = StudentMarksEditor;

                Q.initFormType(StudentMarksSubjectsForm, [
                    'CourseSubjectId', w0,
                    'StudentMarksDetails', w1
                ]);
            }
        }
    }
}
