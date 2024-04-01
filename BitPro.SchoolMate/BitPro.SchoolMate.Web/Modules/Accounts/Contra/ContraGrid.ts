
namespace BitPro.SchoolMate.Accounts {

    @Serenity.Decorators.registerClass()
    export class ContraGrid extends Serenity.EntityGrid<ContraRow, any> {
        protected getColumnsKey() { return 'Accounts.Contra'; }
        protected getDialogType() { return ContraDialog; }
        protected getIdProperty() { return ContraRow.idProperty; }
        protected getInsertPermission() { return ContraRow.insertPermission; }
        protected getLocalTextPrefix() { return ContraRow.localTextPrefix; }
        protected getService() { return ContraService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}