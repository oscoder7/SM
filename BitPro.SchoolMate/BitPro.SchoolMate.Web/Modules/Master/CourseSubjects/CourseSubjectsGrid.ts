
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class CourseSubjectsGrid extends Serenity.EntityGrid<CourseSubjectsRow, any> {
        protected getColumnsKey() { return 'Master.CourseSubjects'; }
        protected getDialogType() { return CourseSubjectsDialog; }
        protected getIdProperty() { return CourseSubjectsRow.idProperty; }
        protected getInsertPermission() { return CourseSubjectsRow.insertPermission; }
        protected getLocalTextPrefix() { return CourseSubjectsRow.localTextPrefix; }
        protected getService() { return CourseSubjectsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}