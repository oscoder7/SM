namespace BitPro.SchoolMate.Transactions {
    export interface FeeCollectionRow {
        Id?: number;
        StudentId?: number;
        PayDate?: string;
        FeeAllocations?: FeeAllocationRow[];
        TranportationFee?: FeeAllocationTranportationRow[];
        TotalAmount?: number;
        AcadamicYearId?: number;
        TenantId?: number;
        PromotionDetailId?: number;
        AccountId?: number;
        PaymentMethod?: AccountTypes;
        StudentCode?: string;
        StudentFullName?: string;
        StudentJoiningDate?: string;
        StudentJoiningCourse?: number;
        StudentFatherContactId?: number;
        StudentMotherContactId?: number;
        StudentStudentContactId?: number;
        StudentCampusId?: number;
        StudentOtherInstitute?: string;
        StudentDivision?: string;
        StudentTenantId?: number;
        CreditAccountType?: number;
        CreditAccountAccountNo?: string;
        CreditAccountAccountHeadId?: number;
    }

    export namespace FeeCollectionRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Transactions.FeeCollection';
        export const lookupKey = 'Master.FeeCollection';

        export function getLookup(): Q.Lookup<FeeCollectionRow> {
            return Q.getLookup<FeeCollectionRow>('Master.FeeCollection');
        }
        export const deletePermission = 'Transactions:FeeCollectionDelete';
        export const insertPermission = 'Transactions:FeeCollectionCreate';
        export const readPermission = 'Transactions:FeeCollection';
        export const updatePermission = 'Transactions:FeeCollectionUpdate';

        export declare const enum Fields {
            Id = "Id",
            StudentId = "StudentId",
            PayDate = "PayDate",
            FeeAllocations = "FeeAllocations",
            TranportationFee = "TranportationFee",
            TotalAmount = "TotalAmount",
            AcadamicYearId = "AcadamicYearId",
            TenantId = "TenantId",
            PromotionDetailId = "PromotionDetailId",
            AccountId = "AccountId",
            PaymentMethod = "PaymentMethod",
            StudentCode = "StudentCode",
            StudentFullName = "StudentFullName",
            StudentJoiningDate = "StudentJoiningDate",
            StudentJoiningCourse = "StudentJoiningCourse",
            StudentFatherContactId = "StudentFatherContactId",
            StudentMotherContactId = "StudentMotherContactId",
            StudentStudentContactId = "StudentStudentContactId",
            StudentCampusId = "StudentCampusId",
            StudentOtherInstitute = "StudentOtherInstitute",
            StudentDivision = "StudentDivision",
            StudentTenantId = "StudentTenantId",
            CreditAccountType = "CreditAccountType",
            CreditAccountAccountNo = "CreditAccountAccountNo",
            CreditAccountAccountHeadId = "CreditAccountAccountHeadId"
        }
    }
}
