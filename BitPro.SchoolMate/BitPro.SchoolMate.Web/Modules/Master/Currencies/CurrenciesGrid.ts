
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class CurrenciesGrid extends Serenity.EntityGrid<CurrenciesRow, any> {
        protected getColumnsKey() { return 'Master.Currencies'; }
        protected getDialogType() { return CurrenciesDialog; }
        protected getIdProperty() { return CurrenciesRow.idProperty; }
        protected getInsertPermission() { return CurrenciesRow.insertPermission; }
        protected getLocalTextPrefix() { return CurrenciesRow.localTextPrefix; }
        protected getService() { return CurrenciesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}