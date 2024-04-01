
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class DivisionsGrid extends Serenity.EntityGrid<DivisionsRow, any> {
        protected getColumnsKey() { return 'Master.Divisions'; }
        protected getDialogType() { return DivisionsDialog; }
        protected getIdProperty() { return DivisionsRow.idProperty; }
        protected getInsertPermission() { return DivisionsRow.insertPermission; }
        protected getLocalTextPrefix() { return DivisionsRow.localTextPrefix; }
        protected getService() { return DivisionsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}