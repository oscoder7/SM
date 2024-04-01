
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class StudentCurrentCoursesGrid extends Serenity.EntityGrid<StudentCurrentCoursesRow, any> {
        protected getColumnsKey() { return 'Master.StudentCurrentCourses'; }
        protected getDialogType() { return StudentCurrentCoursesDialog; }
        protected getIdProperty() { return StudentCurrentCoursesRow.idProperty; }
        protected getInsertPermission() { return StudentCurrentCoursesRow.insertPermission; }
        protected getLocalTextPrefix() { return StudentCurrentCoursesRow.localTextPrefix; }
        protected getService() { return StudentCurrentCoursesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}