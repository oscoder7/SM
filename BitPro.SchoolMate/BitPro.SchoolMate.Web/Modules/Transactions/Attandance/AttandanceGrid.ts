
namespace BitPro.SchoolMate.Transactions {

    @Serenity.Decorators.registerClass()
    export class AttandanceGrid extends Serenity.EntityGrid<AttandanceRow, any> {
        protected getColumnsKey() { return 'Transactions.Attandance'; }
        protected getDialogType() { return AttandanceDialog; }
        protected getIdProperty() { return AttandanceRow.idProperty; }
        protected getInsertPermission() { return AttandanceRow.insertPermission; }
        protected getLocalTextPrefix() { return AttandanceRow.localTextPrefix; }
        protected getService() { return AttandanceService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}