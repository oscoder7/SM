
namespace BitPro.SchoolMate.Transactions {

    @Serenity.Decorators.registerClass()
    export class SalaryStructureGrid extends Serenity.EntityGrid<SalaryStructureRow, any> {
        protected getColumnsKey() { return 'Transactions.SalaryStructure'; }
        protected getDialogType() { return SalaryStructureDialog; }
        protected getIdProperty() { return SalaryStructureRow.idProperty; }
        protected getInsertPermission() { return SalaryStructureRow.insertPermission; }
        protected getLocalTextPrefix() { return SalaryStructureRow.localTextPrefix; }
        protected getService() { return SalaryStructureService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}