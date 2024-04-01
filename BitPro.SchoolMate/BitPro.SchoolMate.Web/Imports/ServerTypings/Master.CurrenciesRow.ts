namespace BitPro.SchoolMate.Master {
    export interface CurrenciesRow {
        Id?: number;
        Code?: string;
        CurrencyName?: string;
        Precision?: number;
        TenantId?: number;
    }

    export namespace CurrenciesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Code';
        export const localTextPrefix = 'Master.Currencies';
        export const lookupKey = 'Master.Currencies';

        export function getLookup(): Q.Lookup<CurrenciesRow> {
            return Q.getLookup<CurrenciesRow>('Master.Currencies');
        }
        export const deletePermission = 'Master:Currencies';
        export const insertPermission = 'Master:Currencies';
        export const readPermission = 'Master:Currencies';
        export const updatePermission = 'Master:Currencies';

        export declare const enum Fields {
            Id = "Id",
            Code = "Code",
            CurrencyName = "CurrencyName",
            Precision = "Precision",
            TenantId = "TenantId"
        }
    }
}
