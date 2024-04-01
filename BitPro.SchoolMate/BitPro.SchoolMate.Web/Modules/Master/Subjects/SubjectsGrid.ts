
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class SubjectsGrid extends Serenity.EntityGrid<SubjectsRow, any> {
        protected getColumnsKey() { return 'Master.Subjects'; }
        protected getDialogType() { return SubjectsDialog; }
        protected getIdProperty() { return SubjectsRow.idProperty; }
        protected getInsertPermission() { return SubjectsRow.insertPermission; }
        protected getLocalTextPrefix() { return SubjectsRow.localTextPrefix; }
        protected getService() { return SubjectsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}