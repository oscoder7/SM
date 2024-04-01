namespace BitPro.SchoolMate.Master {
    export interface AreasForm {
        Code: Serenity.StringEditor;
        AreaName: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
    }

    export class AreasForm extends Serenity.PrefixedContext {
        static formKey = 'Master.Areas';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AreasForm.init)  {
                AreasForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(AreasForm, [
                    'Code', w0,
                    'AreaName', w0,
                    'CountryId', w1
                ]);
            }
        }
    }
}
