namespace BitPro.SchoolMate.Transactions {
    export interface StudentMarksDetailsForm {
        PromotionDetailId: DepartmentEditor;
        Mark: Serenity.DecimalEditor;
        Description: Serenity.StringEditor;
    }

    export class StudentMarksDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Transactions.StudentMarksDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!StudentMarksDetailsForm.init)  {
                StudentMarksDetailsForm.init = true;

                var s = Serenity;
                var w0 = DepartmentEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.StringEditor;

                Q.initFormType(StudentMarksDetailsForm, [
                    'PromotionDetailId', w0,
                    'Mark', w1,
                    'Description', w2
                ]);
            }
        }
    }
}
