
namespace BitPro.SchoolMate.Transactions {

    @Serenity.Decorators.registerClass()
    export class TransportGrid extends Serenity.EntityGrid<TransportRow, any> {
        protected getColumnsKey() { return 'Transactions.Transport'; }
        protected getDialogType() { return TransportDialog; }
        protected getIdProperty() { return TransportRow.idProperty; }
        protected getInsertPermission() { return TransportRow.insertPermission; }
        protected getLocalTextPrefix() { return TransportRow.localTextPrefix; }
        protected getService() { return TransportService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}