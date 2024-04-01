
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class StaffSubjectsGrid extends Serenity.EntityGrid<StaffSubjectsRow, any> {
        protected getColumnsKey() { return 'Master.StaffSubjects'; }
        protected getDialogType() { return StaffSubjectsDialog; }
        protected getIdProperty() { return StaffSubjectsRow.idProperty; }
        protected getInsertPermission() { return StaffSubjectsRow.insertPermission; }
        protected getLocalTextPrefix() { return StaffSubjectsRow.localTextPrefix; }
        protected getService() { return StaffSubjectsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}