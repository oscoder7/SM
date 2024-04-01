
namespace BitPro.SchoolMate.Transactions {

    @Serenity.Decorators.registerClass()
    export class StudentMarksDetailsGrid extends Serenity.EntityGrid<StudentMarksDetailsRow, any> {
        protected getColumnsKey() { return 'Transactions.StudentMarksDetails'; }
        protected getDialogType() { return StudentMarksDetailsDialog; }
        protected getIdProperty() { return StudentMarksDetailsRow.idProperty; }
        protected getInsertPermission() { return StudentMarksDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return StudentMarksDetailsRow.localTextPrefix; }
        protected getService() { return StudentMarksDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}