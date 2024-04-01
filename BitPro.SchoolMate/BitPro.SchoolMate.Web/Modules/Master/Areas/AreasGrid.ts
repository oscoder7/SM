
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class AreasGrid extends Serenity.EntityGrid<AreasRow, any> {
        protected getColumnsKey() { return 'Master.Areas'; }
        protected getDialogType() { return AreasDialog; }
        protected getIdProperty() { return AreasRow.idProperty; }
        protected getInsertPermission() { return AreasRow.insertPermission; }
        protected getLocalTextPrefix() { return AreasRow.localTextPrefix; }
        protected getService() { return AreasService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}