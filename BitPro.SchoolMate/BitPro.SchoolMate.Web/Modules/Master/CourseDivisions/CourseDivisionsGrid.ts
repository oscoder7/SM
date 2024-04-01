
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class CourseDivisionsGrid extends Serenity.EntityGrid<CourseDivisionsRow, any> {
        protected getColumnsKey() { return 'Master.CourseDivisions'; }
        protected getDialogType() { return CourseDivisionsDialog; }
        protected getIdProperty() { return CourseDivisionsRow.idProperty; }
        protected getInsertPermission() { return CourseDivisionsRow.insertPermission; }
        protected getLocalTextPrefix() { return CourseDivisionsRow.localTextPrefix; }
        protected getService() { return CourseDivisionsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}