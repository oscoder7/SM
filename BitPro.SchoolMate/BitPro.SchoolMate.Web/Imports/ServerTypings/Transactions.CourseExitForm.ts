namespace BitPro.SchoolMate.Transactions {
    export interface CourseExitForm {
        AcadamicYearId: Serenity.LookupEditor;
        PromotionId: Serenity.LookupEditor;
        ExitType: Serenity.EnumEditor;
        ExitDate: Serenity.DateEditor;
        Students: CourseExitEditor;
    }

    export class CourseExitForm extends Serenity.PrefixedContext {
        static formKey = 'Transactions.CourseExit';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CourseExitForm.init)  {
                CourseExitForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.EnumEditor;
                var w2 = s.DateEditor;
                var w3 = CourseExitEditor;

                Q.initFormType(CourseExitForm, [
                    'AcadamicYearId', w0,
                    'PromotionId', w0,
                    'ExitType', w1,
                    'ExitDate', w2,
                    'Students', w3
                ]);
            }
        }
    }
}
