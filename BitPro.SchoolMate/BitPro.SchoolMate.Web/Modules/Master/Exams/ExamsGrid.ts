
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class ExamsGrid extends Serenity.EntityGrid<ExamsRow, any> {
        protected getColumnsKey() { return 'Master.Exams'; }
        protected getDialogType() { return ExamsDialog; }
        protected getIdProperty() { return ExamsRow.idProperty; }
        protected getInsertPermission() { return ExamsRow.insertPermission; }
        protected getLocalTextPrefix() { return ExamsRow.localTextPrefix; }
        protected getService() { return ExamsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}