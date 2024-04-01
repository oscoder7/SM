namespace BitPro.SchoolMate.Transactions {
    export interface TransportForm {
        Name: Serenity.StringEditor;
        Code: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
    }

    export class TransportForm extends Serenity.PrefixedContext {
        static formKey = 'Transactions.Transport';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TransportForm.init)  {
                TransportForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(TransportForm, [
                    'Name', w0,
                    'Code', w0,
                    'Address', w1
                ]);
            }
        }
    }
}
