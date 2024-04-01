
namespace BitPro.SchoolMate.Transactions {

    @Serenity.Decorators.registerClass()
    export class StudentMarksSubjectsGrid extends Serenity.EntityGrid<StudentMarksSubjectsRow, any> {
        protected getColumnsKey() { return 'Transactions.StudentMarksSubjects'; }
        protected getDialogType() { return StudentMarksSubjectsDialog; }
        protected getIdProperty() { return StudentMarksSubjectsRow.idProperty; }
        protected getInsertPermission() { return StudentMarksSubjectsRow.insertPermission; }
        protected getLocalTextPrefix() { return StudentMarksSubjectsRow.localTextPrefix; }
        protected getService() { return StudentMarksSubjectsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}