
namespace BitPro.SchoolMate.Accounts {

    @Serenity.Decorators.registerClass()
    export class PaymentGrid extends Serenity.EntityGrid<PaymentRow, any> {
        protected getColumnsKey() { return 'Accounts.Payment'; }
        protected getDialogType() { return PaymentDialog; }
        protected getIdProperty() { return PaymentRow.idProperty; }
        protected getInsertPermission() { return PaymentRow.insertPermission; }
        protected getLocalTextPrefix() { return PaymentRow.localTextPrefix; }
        protected getService() { return PaymentService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}