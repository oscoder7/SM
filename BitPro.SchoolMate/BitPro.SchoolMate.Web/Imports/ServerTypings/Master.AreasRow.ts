namespace BitPro.SchoolMate.Master {
    export interface AreasRow {
        Id?: number;
        Code?: string;
        AreaName?: string;
        CountryId?: number;
        TenantId?: number;
        CountryCode?: string;
        CountryCurrencyName?: string;
        CountryPrecision?: number;
        CountryTenantId?: number;
    }

    export namespace AreasRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Code';
        export const localTextPrefix = 'Master.Areas';
        export const lookupKey = 'Master.Areas';

        export function getLookup(): Q.Lookup<AreasRow> {
            return Q.getLookup<AreasRow>('Master.Areas');
        }
        export const deletePermission = 'Master:Areas';
        export const insertPermission = 'Master:Areas';
        export const readPermission = 'Master:Areas';
        export const updatePermission = 'Master:Areas';

        export declare const enum Fields {
            Id = "Id",
            Code = "Code",
            AreaName = "AreaName",
            CountryId = "CountryId",
            TenantId = "TenantId",
            CountryCode = "CountryCode",
            CountryCurrencyName = "CountryCurrencyName",
            CountryPrecision = "CountryPrecision",
            CountryTenantId = "CountryTenantId"
        }
    }
}
