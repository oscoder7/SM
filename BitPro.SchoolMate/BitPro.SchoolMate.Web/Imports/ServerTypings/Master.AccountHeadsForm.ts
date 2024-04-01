namespace BitPro.SchoolMate.Master {
    export interface AccountHeadsForm {
        Description: Serenity.StringEditor;
        ParentHeadId: Serenity.LookupEditor;
        Code: Serenity.StringEditor;
        LedgerType: Serenity.EnumEditor;
    }

    export class AccountHeadsForm extends Serenity.PrefixedContext {
        static formKey = 'Master.AccountHeads';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AccountHeadsForm.init)  {
                AccountHeadsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.EnumEditor;

                Q.initFormType(AccountHeadsForm, [
                    'Description', w0,
                    'ParentHeadId', w1,
                    'Code', w0,
                    'LedgerType', w2
                ]);
            }
        }
    }
}
