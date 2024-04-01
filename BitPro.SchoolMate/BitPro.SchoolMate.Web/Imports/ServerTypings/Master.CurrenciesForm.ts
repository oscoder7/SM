namespace BitPro.SchoolMate.Master {
    export interface CurrenciesForm {
        Code: Serenity.StringEditor;
        CurrencyName: Serenity.StringEditor;
        Precision: Serenity.IntegerEditor;
    }

    export class CurrenciesForm extends Serenity.PrefixedContext {
        static formKey = 'Master.Currencies';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CurrenciesForm.init)  {
                CurrenciesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(CurrenciesForm, [
                    'Code', w0,
                    'CurrencyName', w0,
                    'Precision', w1
                ]);
            }
        }
    }
}
