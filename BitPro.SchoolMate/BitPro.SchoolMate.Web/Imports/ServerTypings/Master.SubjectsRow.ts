namespace BitPro.SchoolMate.Master {
    export interface SubjectsRow {
        Id?: number;
        Code?: string;
        SubjectName?: string;
        TenantId?: number;
    }

    export namespace SubjectsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'SubjectName';
        export const localTextPrefix = 'Master.Subjects';
        export const lookupKey = 'Master.Subjects';

        export function getLookup(): Q.Lookup<SubjectsRow> {
            return Q.getLookup<SubjectsRow>('Master.Subjects');
        }
        export const deletePermission = 'Master:Subjects';
        export const insertPermission = 'Master:Subjects';
        export const readPermission = 'Master:Subjects';
        export const updatePermission = 'Master:Subjects';

        export declare const enum Fields {
            Id = "Id",
            Code = "Code",
            SubjectName = "SubjectName",
            TenantId = "TenantId"
        }
    }
}
