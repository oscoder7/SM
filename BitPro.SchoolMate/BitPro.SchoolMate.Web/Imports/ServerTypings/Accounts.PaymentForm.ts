namespace BitPro.SchoolMate.Accounts {
    export interface PaymentForm {
        VNo: Serenity.IntegerEditor;
        TrxDate: Serenity.DateEditor;
        ContactId: Serenity.LookupEditor;
        DebitAccountHeadId: Serenity.LookupEditor;
        Amount: Serenity.DecimalEditor;
        PaymentMethod: Serenity.EnumEditor;
        CreditAccountId: Serenity.LookupEditor;
        Remarks: Serenity.TextAreaEditor;
        Attachments: Serenity.MultipleImageUploadEditor;
    }

    export class PaymentForm extends Serenity.PrefixedContext {
        static formKey = 'Accounts.Payment';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PaymentForm.init)  {
                PaymentForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;
                var w2 = s.LookupEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.EnumEditor;
                var w5 = s.TextAreaEditor;
                var w6 = s.MultipleImageUploadEditor;

                Q.initFormType(PaymentForm, [
                    'VNo', w0,
                    'TrxDate', w1,
                    'ContactId', w2,
                    'DebitAccountHeadId', w2,
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
