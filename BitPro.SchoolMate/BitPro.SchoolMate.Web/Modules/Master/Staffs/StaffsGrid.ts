
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class StaffsGrid extends Serenity.EntityGrid<StaffsRow, any> {
        protected getColumnsKey() { return 'Master.Staffs'; }
        protected getDialogType() { return StaffsDialog; }
        protected getIdProperty() { return StaffsRow.idProperty; }
        protected getInsertPermission() { return StaffsRow.insertPermission; }
        protected getLocalTextPrefix() { return StaffsRow.localTextPrefix; }
        protected getService() { return StaffsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}