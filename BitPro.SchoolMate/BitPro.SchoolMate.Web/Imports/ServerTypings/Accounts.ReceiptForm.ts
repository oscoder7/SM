namespace BitPro.SchoolMate.Accounts {
    export interface ReceiptForm {
        VNo: Serenity.IntegerEditor;
        TrxDate: Serenity.DateEditor;
        ContactId: Serenity.LookupEditor;
        CreditAccountHeadId: Serenity.LookupEditor;
        Amount: Serenity.DecimalEditor;
        PaymentMethod: Serenity.EnumEditor;
        DebitAccountId: Serenity.LookupEditor;
        Remarks: Serenity.TextAreaEditor;
        Attachments: Serenity.MultipleImageUploadEditor;
    }

    export class ReceiptForm extends Serenity.PrefixedContext {
        static formKey = 'Accounts.Receipt';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ReceiptForm.init)  {
                ReceiptForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;
                var w2 = s.LookupEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.EnumEditor;
                var w5 = s.TextAreaEditor;
                var w6 = s.MultipleImageUploadEditor;

                Q.initFormType(ReceiptForm, [
                    'VNo', w0,
                    'TrxDate', w1,
                    'ContactId', w2,
                    'CreditAccountHeadId', w2,
                    'Amount', w3,
                    'PaymentMethod', w4,
                    'DebitAccountId', w2,
                    'Remarks', w5,
                    'Attachments', w6
                ]);
            }
        }
    }
}
