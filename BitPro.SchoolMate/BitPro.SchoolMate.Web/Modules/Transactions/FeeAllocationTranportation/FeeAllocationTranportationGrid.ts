
namespace BitPro.SchoolMate.Transactions {

    @Serenity.Decorators.registerClass()
    export class FeeAllocationTranportationGrid extends Serenity.EntityGrid<FeeAllocationTranportationRow, any> {
        protected getColumnsKey() { return 'Transactions.FeeAllocationTranportation'; }
        protected getDialogType() { return FeeAllocationTranportationDialog; }
        protected getIdProperty() { return FeeAllocationTranportationRow.idProperty; }
        protected getInsertPermission() { return FeeAllocationTranportationRow.insertPermission; }
        protected getLocalTextPrefix() { return FeeAllocationTranportationRow.localTextPrefix; }
        protected getService() { return FeeAllocationTranportationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}