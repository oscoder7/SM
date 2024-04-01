
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class CampusesGrid extends Serenity.EntityGrid<CampusesRow, any> {
        protected getColumnsKey() { return 'Master.Campuses'; }
        protected getDialogType() { return CampusesDialog; }
        protected getIdProperty() { return CampusesRow.idProperty; }
        protected getInsertPermission() { return CampusesRow.insertPermission; }
        protected getLocalTextPrefix() { return CampusesRow.localTextPrefix; }
        protected getService() { return CampusesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}