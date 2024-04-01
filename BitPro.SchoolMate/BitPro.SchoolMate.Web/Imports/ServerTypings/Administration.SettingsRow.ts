namespace BitPro.SchoolMate.Administration {
    export interface SettingsRow {
        Id?: number;
        Name?: string;
        Type?: string;
        ValueString?: string;
        ValueDate?: string;
        ValueNumber?: number;
        ValueBool?: boolean;
        TenantId?: number;
    }

    export namespace SettingsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Administration.Settings';
        export const deletePermission = 'Administration:Settings';
        export const insertPermission = 'Administration:Settings';
        export const readPermission = 'Administration:Settings';
        export const updatePermission = 'Administration:Settings';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Type = "Type",
            ValueString = "ValueString",
            ValueDate = "ValueDate",
            ValueNumber = "ValueNumber",
            ValueBool = "ValueBool",
            TenantId = "TenantId"
        }
    }
}
