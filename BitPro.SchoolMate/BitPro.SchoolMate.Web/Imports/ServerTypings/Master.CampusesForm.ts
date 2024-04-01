namespace BitPro.SchoolMate.Master {
    export interface CampusesForm {
        Code: Serenity.StringEditor;
        Campus: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
        Phone: Serenity.StringEditor;
        ContactPerson: Serenity.StringEditor;
        Mobile: Serenity.StringEditor;
        Email: Serenity.EmailAddressEditor;
        Website: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
        AreaId: Serenity.LookupEditor;
        CodeLength: Serenity.IntegerEditor;
        Student_Prefix: Serenity.StringEditor;
    }

    export class CampusesForm extends Serenity.PrefixedContext {
        static formKey = 'Master.Campuses';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CampusesForm.init)  {
                CampusesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.EmailAddressEditor;
                var w3 = s.LookupEditor;
                var w4 = s.IntegerEditor;

                Q.initFormType(CampusesForm, [
                    'Code', w0,
                    'Campus', w0,
                    'Address', w1,
                    'Phone', w0,
                    'ContactPerson', w0,
                    'Mobile', w0,
                    'Email', w2,
                    'Website', w0,
                    'CountryId', w3,
                    'AreaId', w3,
                    'CodeLength', w4,
                    'Student_Prefix', w0
                ]);
            }
        }
    }
}
