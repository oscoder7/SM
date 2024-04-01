
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class ExamCoursesGrid extends Serenity.EntityGrid<ExamCoursesRow, any> {
        protected getColumnsKey() { return 'Master.ExamCourses'; }
        protected getDialogType() { return ExamCoursesDialog; }
        protected getIdProperty() { return ExamCoursesRow.idProperty; }
        protected getInsertPermission() { return ExamCoursesRow.insertPermission; }
        protected getLocalTextPrefix() { return ExamCoursesRow.localTextPrefix; }
        protected getService() { return ExamCoursesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}