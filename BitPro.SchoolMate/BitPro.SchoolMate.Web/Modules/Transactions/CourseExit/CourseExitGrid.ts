
namespace BitPro.SchoolMate.Transactions {

    @Serenity.Decorators.registerClass()
    export class CourseExitGrid extends Serenity.EntityGrid<CourseExitRow, any> {
        protected getColumnsKey() { return 'Transactions.CourseExit'; }
        protected getDialogType() { return CourseExitDialog; }
        protected getIdProperty() { return CourseExitRow.idProperty; }
        protected getInsertPermission() { return CourseExitRow.insertPermission; }
        protected getLocalTextPrefix() { return CourseExitRow.localTextPrefix; }
        protected getService() { return CourseExitService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}