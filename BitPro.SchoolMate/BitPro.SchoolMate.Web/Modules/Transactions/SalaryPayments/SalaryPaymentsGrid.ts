
namespace BitPro.SchoolMate.Transactions {

    @Serenity.Decorators.registerClass()
    export class SalaryPaymentsGrid extends Serenity.EntityGrid<SalaryPaymentsRow, any> {
        protected getColumnsKey() { return 'Transactions.SalaryPayments'; }
        protected getDialogType() { return SalaryPaymentsDialog; }
        protected getIdProperty() { return SalaryPaymentsRow.idProperty; }
        protected getInsertPermission() { return SalaryPaymentsRow.insertPermission; }
        protected getLocalTextPrefix() { return SalaryPaymentsRow.localTextPrefix; }
        protected getService() { return SalaryPaymentsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}