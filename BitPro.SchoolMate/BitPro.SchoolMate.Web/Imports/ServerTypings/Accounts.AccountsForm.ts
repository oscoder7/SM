namespace BitPro.SchoolMate.Accounts {
    export interface AccountsForm {
        Type: Serenity.EnumEditor;
        AccountNo: Serenity.StringEditor;
        AccountHeadId: Serenity.LookupEditor;
        IsDefault: Serenity.BooleanEditor;
    }

    export class AccountsForm extends Serenity.PrefixedContext {
        static formKey = 'Accounts.Accounts';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AccountsForm.init)  {
                AccountsForm.init = true;

                var s = Serenity;
                var w0 = s.EnumEditor;
                var w1 = s.StringEditor;
                var w2 = s.LookupEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(AccountsForm, [
                    'Type', w0,
                    'AccountNo', w1,
                    'AccountHeadId', w2,
                    'IsDefault', w3
                ]);
            }
        }
    }
}
