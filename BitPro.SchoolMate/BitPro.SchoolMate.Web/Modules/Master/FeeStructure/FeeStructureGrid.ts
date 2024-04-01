
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class FeeStructureGrid extends Serenity.EntityGrid<FeeStructureRow, any> {
        protected getColumnsKey() { return 'Master.FeeStructure'; }
        protected getDialogType() { return FeeStructureDialog; }
        protected getIdProperty() { return FeeStructureRow.idProperty; }
        protected getInsertPermission() { return FeeStructureRow.insertPermission; }
        protected getLocalTextPrefix() { return FeeStructureRow.localTextPrefix; }
        protected getService() { return FeeStructureService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}