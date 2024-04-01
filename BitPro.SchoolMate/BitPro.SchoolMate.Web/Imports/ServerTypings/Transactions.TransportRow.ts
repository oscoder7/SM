namespace BitPro.SchoolMate.Transactions {
    export interface TransportRow {
        Id?: number;
        Name?: string;
        Code?: string;
        Address?: string;
        TenantId?: number;
    }

    export namespace TransportRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Transactions.Transport';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Code = "Code",
            Address = "Address",
            TenantId = "TenantId"
        }
    }
}
