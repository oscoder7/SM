namespace BitPro.SchoolMate.Administration {
    export interface SystemSettingsForm {
        SalaryAccount: Serenity.LookupEditor;
        StudentCodeLength: Serenity.IntegerEditor;
        StudentCodePrefix: Serenity.StringEditor;
        SatffCodeLength: Serenity.IntegerEditor;
        SatffCodePrefix: Serenity.StringEditor;
    }

    export class SystemSettingsForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.SystemSettings';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SystemSettingsForm.init)  {
                SystemSettingsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.StringEditor;

                Q.initFormType(SystemSettingsForm, [
                    'SalaryAccount', w0,
                    'StudentCodeLength', w1,
                    'StudentCodePrefix', w2,
                    'SatffCodeLength', w1,
                    'SatffCodePrefix', w2
                ]);
            }
        }
    }
}
