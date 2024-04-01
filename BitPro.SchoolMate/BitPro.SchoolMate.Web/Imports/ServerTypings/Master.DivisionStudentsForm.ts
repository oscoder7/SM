namespace BitPro.SchoolMate.Master {
    export interface DivisionStudentsForm {
        DivisionId: Serenity.IntegerEditor;
        PromotionDetailId: SchoolMate.Transactions.DepartmentEditor;
    }

    export class DivisionStudentsForm extends Serenity.PrefixedContext {
        static formKey = 'Master.DivisionStudents';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DivisionStudentsForm.init)  {
                DivisionStudentsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = SchoolMate.Transactions.DepartmentEditor;

                Q.initFormType(DivisionStudentsForm, [
                    'DivisionId', w0,
                    'PromotionDetailId', w1
                ]);
            }
        }
    }
}
