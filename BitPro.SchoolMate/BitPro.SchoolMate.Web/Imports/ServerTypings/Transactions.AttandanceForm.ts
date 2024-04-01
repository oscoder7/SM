namespace BitPro.SchoolMate.Transactions {
    export interface AttandanceForm {
        StaffId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        AcadamicYearId: Serenity.LookupEditor;
        Status: Serenity.EnumEditor;
        Attachments: Serenity.MultipleImageUploadEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class AttandanceForm extends Serenity.PrefixedContext {
        static formKey = 'Transactions.Attandance';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AttandanceForm.init)  {
                AttandanceForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = s.EnumEditor;
                var w3 = s.MultipleImageUploadEditor;
                var w4 = s.TextAreaEditor;

                Q.initFormType(AttandanceForm, [
                    'StaffId', w0,
                    'Date', w1,
                    'AcadamicYearId', w0,
                    'Status', w2,
                    'Attachments', w3,
                    'Description', w4
                ]);
            }
        }
    }
}
