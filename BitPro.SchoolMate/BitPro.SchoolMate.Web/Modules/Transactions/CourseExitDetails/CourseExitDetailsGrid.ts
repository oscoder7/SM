
namespace BitPro.SchoolMate.Transactions {

    @Serenity.Decorators.registerClass()
    export class CourseExitDetailsGrid extends Serenity.EntityGrid<CourseExitDetailsRow, any> {
        protected getColumnsKey() { return 'Transactions.CourseExitDetails'; }
        protected getDialogType() { return CourseExitDetailsDialog; }
        protected getIdProperty() { return CourseExitDetailsRow.idProperty; }
        protected getInsertPermission() { return CourseExitDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return CourseExitDetailsRow.localTextPrefix; }
        protected getService() { return CourseExitDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}