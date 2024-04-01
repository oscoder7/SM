namespace BitPro.SchoolMate.Administration {
    export interface SettingsForm {
        Name: Serenity.StringEditor;
        Type: Serenity.StringEditor;
        ValueString: Serenity.StringEditor;
        ValueDate: Serenity.DateEditor;
        ValueNumber: Serenity.DecimalEditor;
        ValueBool: Serenity.BooleanEditor;
    }

    export class SettingsForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Settings';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SettingsForm.init)  {
                SettingsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(SettingsForm, [
                    'Name', w0,
                    'Type', w0,
                    'ValueString', w0,
                    'ValueDate', w1,
                    'ValueNumber', w2,
                    'ValueBool', w3
                ]);
            }
        }
    }
}
