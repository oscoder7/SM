namespace BitPro.SchoolMate.Master {
    export interface CountriesRow {
        Id?: number;
        Code?: string;
        CountryName?: string;
        CurrencyId?: number;
        TenantId?: number;
        FullName?: string;
        CurrencyCode?: string;
        CurrencyCurrencyName?: string;
        CurrencyPrecision?: number;
        CurrencyTenantId?: number;
    }

    export namespace CountriesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'FullName';
        export const localTextPrefix = 'Master.Countries';
        export const lookupKey = 'Master.Countries';

        export function getLookup(): Q.Lookup<CountriesRow> {
            return Q.getLookup<CountriesRow>('Master.Countries');
        }
        export const deletePermission = 'Master:Countries';
        export const insertPermission = 'Master:Countries';
        export const readPermission = 'Master:Countries';
        export const updatePermission = 'Master:Countries';

        export declare const enum Fields {
            Id = "Id",
            Code = "Code",
            CountryName = "CountryName",
            CurrencyId = "CurrencyId",
            TenantId = "TenantId",
            FullName = "FullName",
            CurrencyCode = "CurrencyCode",
            CurrencyCurrencyName = "CurrencyCurrencyName",
            CurrencyPrecision = "CurrencyPrecision",
            CurrencyTenantId = "CurrencyTenantId"
        }
    }
}
