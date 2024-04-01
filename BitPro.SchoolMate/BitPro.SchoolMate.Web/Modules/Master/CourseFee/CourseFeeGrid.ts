
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class CourseFeeGrid extends Serenity.EntityGrid<CourseFeeRow, any> {
        protected getColumnsKey() { return 'Master.CourseFee'; }
        protected getDialogType() { return CourseFeeDialog; }
        protected getIdProperty() { return CourseFeeRow.idProperty; }
        protected getInsertPermission() { return CourseFeeRow.insertPermission; }
        protected getLocalTextPrefix() { return CourseFeeRow.localTextPrefix; }
        protected getService() { return CourseFeeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}