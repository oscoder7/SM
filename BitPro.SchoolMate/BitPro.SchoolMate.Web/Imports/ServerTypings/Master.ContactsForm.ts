namespace BitPro.SchoolMate.Master {
    export interface ContactsForm {
        Name: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.EmailAddressEditor;
        Whatsapp: Serenity.StringEditor;
        Address1: Serenity.TextAreaEditor;
        Address2: Serenity.TextAreaEditor;
        Nationality: Serenity.LookupEditor;
    }

    export class ContactsForm extends Serenity.PrefixedContext {
        static formKey = 'Master.Contacts';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ContactsForm.init)  {
                ContactsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EmailAddressEditor;
                var w2 = s.TextAreaEditor;
                var w3 = s.LookupEditor;

                Q.initFormType(ContactsForm, [
                    'Name', w0,
                    'Phone', w0,
                    'Email', w1,
                    'Whatsapp', w0,
                    'Address1', w2,
                    'Address2', w2,
                    'Nationality', w3
                ]);
            }
        }
    }
}
