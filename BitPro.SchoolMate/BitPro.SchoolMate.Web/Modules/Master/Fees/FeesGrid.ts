
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class FeesGrid extends Serenity.EntityGrid<FeesRow, any> {
        protected getColumnsKey() { return 'Master.Fees'; }
        protected getDialogType() { return FeesDialog; }
        protected getIdProperty() { return FeesRow.idProperty; }
        protected getInsertPermission() { return FeesRow.insertPermission; }
        protected getLocalTextPrefix() { return FeesRow.localTextPrefix; }
        protected getService() { return FeesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}