
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class AcadamicYearGrid extends Serenity.EntityGrid<AcadamicYearRow, any> {
        protected getColumnsKey() { return 'Master.AcadamicYear'; }
        protected getDialogType() { return AcadamicYearDialog; }
        protected getIdProperty() { return AcadamicYearRow.idProperty; }
        protected getInsertPermission() { return AcadamicYearRow.insertPermission; }
        protected getLocalTextPrefix() { return AcadamicYearRow.localTextPrefix; }
        protected getService() { return AcadamicYearService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}