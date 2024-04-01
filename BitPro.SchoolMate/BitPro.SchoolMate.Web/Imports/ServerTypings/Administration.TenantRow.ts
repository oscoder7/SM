﻿namespace BitPro.SchoolMate.Administration {
    export interface TenantRow {
        TenantId?: number;
        TenantName?: string;
    }

    export namespace TenantRow {
        export const idProperty = 'TenantId';
        export const nameProperty = 'TenantName';
        export const localTextPrefix = 'Administration.Tenant';
        export const lookupKey = 'Administration.Tenants';

        export function getLookup(): Q.Lookup<TenantRow> {
            return Q.getLookup<TenantRow>('Administration.Tenants');
        }
        export const deletePermission = 'Administration:Tenants';
        export const insertPermission = 'Administration:Tenants';
        export const readPermission = 'Administration:Tenants';
        export const updatePermission = 'Administration:Tenants';

        export declare const enum Fields {
            TenantId = "TenantId",
            TenantName = "TenantName"
        }
    }
}
