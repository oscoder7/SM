
namespace BitPro.SchoolMate.Transactions {

    @Serenity.Decorators.registerClass()
    export class StudentMarksGrid extends Serenity.EntityGrid<StudentMarksRow, any> {
        protected getColumnsKey() { return 'Transactions.StudentMarks'; }
        protected getDialogType() { return StudentMarksDialog; }
        protected getIdProperty() { return StudentMarksRow.idProperty; }
        protected getInsertPermission() { return StudentMarksRow.insertPermission; }
        protected getLocalTextPrefix() { return StudentMarksRow.localTextPrefix; }
        protected getService() { return StudentMarksService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}