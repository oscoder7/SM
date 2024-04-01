namespace BitPro.SchoolMate.Master {
    export interface ContactsRow {
        Id?: number;
        Name?: string;
        Phone?: string;
        Email?: string;
        Whatsapp?: string;
        Address1?: string;
        Address2?: string;
        Nationality?: number;
        TenantId?: number;
        NationalityCode?: string;
        NationalityCountryName?: string;
        NationalityCurrencyId?: number;
        NationalityTenantId?: number;
    }

    export namespace ContactsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Master.Contacts';
        export const lookupKey = 'Master.Contacts';

        export function getLookup(): Q.Lookup<ContactsRow> {
            return Q.getLookup<ContactsRow>('Master.Contacts');
        }
        export const deletePermission = 'Master:ContactsDelete';
        export const insertPermission = 'Master:ContactsCreate';
        export const readPermission = 'Master:Contacts';
        export const updatePermission = 'Master:ContactsUpdate';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Phone = "Phone",
            Email = "Email",
            Whatsapp = "Whatsapp",
            Address1 = "Address1",
            Address2 = "Address2",
            Nationality = "Nationality",
            TenantId = "TenantId",
            NationalityCode = "NationalityCode",
            NationalityCountryName = "NationalityCountryName",
            NationalityCurrencyId = "NationalityCurrencyId",
            NationalityTenantId = "NationalityTenantId"
        }
    }
}
