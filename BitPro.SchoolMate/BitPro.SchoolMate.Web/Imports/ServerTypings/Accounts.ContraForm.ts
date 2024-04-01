namespace BitPro.SchoolMate.Accounts {
    export interface ContraForm {
        VNo: Serenity.IntegerEditor;
        TrxDate: Serenity.DateEditor;
        ContactId: Serenity.LookupEditor;
        DebitAccountId: Serenity.LookupEditor;
        Amount: Serenity.DecimalEditor;
        PaymentMethod: Serenity.EnumEditor;
        CreditAccountId: Serenity.LookupEditor;
        Remarks: Serenity.TextAreaEditor;
        Attachments: Serenity.MultipleImageUploadEditor;
    }

    export class ContraForm extends Serenity.PrefixedContext {
        static formKey = 'Accounts.Contra';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ContraForm.init)  {
                ContraForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;
                var w2 = s.LookupEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.EnumEditor;
                var w5 = s.TextAreaEditor;
                var w6 = s.MultipleImageUploadEditor;

                Q.initFormType(ContraForm, [
                    'VNo', w0,
                    'TrxDate', w1,
                    'ContactId', w2,
                    'DebitAccountId', w2,
                    'Amount', w3,
                    'PaymentMethod', w4,
                    'CreditAccountId', w2,
                    'Remarks', w5,
                    'Attachments', w6
                ]);
            }
        }
    }
}
