namespace BitPro.SchoolMate.Master {
    export interface CampusesRow {
        Id?: number;
        Code?: string;
        Campus?: string;
        Address?: string;
        Phone?: string;
        ContactPerson?: string;
        Mobile?: string;
        Email?: string;
        Website?: string;
        CountryId?: number;
        AreaId?: number;
        Student_Prefix?: string;
        CodeLength?: number;
        TenantId?: number;
        IsDefault?: boolean;
        FullName?: string;
        CountryCode?: string;
        CountryCountryName?: string;
        CountryCurrencyId?: number;
        CountryTenantId?: number;
        AreaCode?: string;
        AreaAreaName?: string;
        AreaCountryId?: number;
        AreaTenantId?: number;
    }

    export namespace CampusesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'FullName';
        export const localTextPrefix = 'Master.Campuses';
        export const lookupKey = 'Master.Campuses';

        export function getLookup(): Q.Lookup<CampusesRow> {
            return Q.getLookup<CampusesRow>('Master.Campuses');
        }
        export const deletePermission = 'Master:Campuses';
        export const insertPermission = 'Master:Campuses';
        export const readPermission = 'Master:Campuses';
        export const updatePermission = 'Master:Campuses';

        export declare const enum Fields {
            Id = "Id",
            Code = "Code",
            Campus = "Campus",
            Address = "Address",
            Phone = "Phone",
            ContactPerson = "ContactPerson",
            Mobile = "Mobile",
            Email = "Email",
            Website = "Website",
            CountryId = "CountryId",
            AreaId = "AreaId",
            Student_Prefix = "Student_Prefix",
            CodeLength = "CodeLength",
            TenantId = "TenantId",
            IsDefault = "IsDefault",
            FullName = "FullName",
            CountryCode = "CountryCode",
            CountryCountryName = "CountryCountryName",
            CountryCurrencyId = "CountryCurrencyId",
            CountryTenantId = "CountryTenantId",
            AreaCode = "AreaCode",
            AreaAreaName = "AreaAreaName",
            AreaCountryId = "AreaCountryId",
            AreaTenantId = "AreaTenantId"
        }
    }
}
