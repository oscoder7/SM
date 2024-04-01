
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class CoursesGrid extends Serenity.EntityGrid<CoursesRow, any> {
        protected getColumnsKey() { return 'Master.Courses'; }
        protected getDialogType() { return CoursesDialog; }
        protected getIdProperty() { return CoursesRow.idProperty; }
        protected getInsertPermission() { return CoursesRow.insertPermission; }
        protected getLocalTextPrefix() { return CoursesRow.localTextPrefix; }
        protected getService() { return CoursesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}