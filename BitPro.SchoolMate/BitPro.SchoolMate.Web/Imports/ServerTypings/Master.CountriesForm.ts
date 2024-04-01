namespace BitPro.SchoolMate.Master {
    export interface CountriesForm {
        Code: Serenity.StringEditor;
        CountryName: Serenity.StringEditor;
        CurrencyId: Serenity.LookupEditor;
    }

    export class CountriesForm extends Serenity.PrefixedContext {
        static formKey = 'Master.Countries';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CountriesForm.init)  {
                CountriesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(CountriesForm, [
                    'Code', w0,
                    'CountryName', w0,
                    'CurrencyId', w1
                ]);
            }
        }
    }
}
