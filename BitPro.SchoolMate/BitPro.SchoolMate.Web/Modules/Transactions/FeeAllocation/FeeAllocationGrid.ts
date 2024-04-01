
namespace BitPro.SchoolMate.Transactions {

    @Serenity.Decorators.registerClass()
    export class FeeAllocationGrid extends Serenity.EntityGrid<FeeAllocationRow, any> {
        protected getColumnsKey() { return 'Transactions.FeeAllocation'; }
        protected getDialogType() { return FeeAllocationDialog; }
        protected getIdProperty() { return FeeAllocationRow.idProperty; }
        protected getInsertPermission() { return FeeAllocationRow.insertPermission; }
        protected getLocalTextPrefix() { return FeeAllocationRow.localTextPrefix; }
        protected getService() { return FeeAllocationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}