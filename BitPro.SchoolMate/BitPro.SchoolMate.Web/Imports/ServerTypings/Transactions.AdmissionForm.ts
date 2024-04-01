namespace BitPro.SchoolMate.Transactions {
    export interface AdmissionForm {
        AcadamicYearId: Serenity.LookupEditor;
        JoiningDate: Serenity.DateEditor;
        StudentId: Serenity.LookupEditor;
        JoiningCourse: Serenity.LookupEditor;
        JoiningDivisionId: Serenity.LookupEditor;
        SelectedFees: Serenity.LookupEditor;
        AdmissionFeeTermId: Serenity.LookupEditor;
    }

    export class AdmissionForm extends Serenity.PrefixedContext {
        static formKey = 'Transactions.Admission';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AdmissionForm.init)  {
                AdmissionForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;

                Q.initFormType(AdmissionForm, [
                    'AcadamicYearId', w0,
                    'JoiningDate', w1,
                    'StudentId', w0,
                    'JoiningCourse', w0,
                    'JoiningDivisionId', w0,
                    'SelectedFees', w0,
                    'AdmissionFeeTermId', w0
                ]);
            }
        }
    }
}
