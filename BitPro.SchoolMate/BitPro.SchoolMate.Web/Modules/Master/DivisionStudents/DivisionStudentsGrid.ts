
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class DivisionStudentsGrid extends Serenity.EntityGrid<DivisionStudentsRow, any> {
        protected getColumnsKey() { return 'Master.DivisionStudents'; }
        protected getDialogType() { return DivisionStudentsDialog; }
        protected getIdProperty() { return DivisionStudentsRow.idProperty; }
        protected getInsertPermission() { return DivisionStudentsRow.insertPermission; }
        protected getLocalTextPrefix() { return DivisionStudentsRow.localTextPrefix; }
        protected getService() { return DivisionStudentsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}