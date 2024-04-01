
namespace BitPro.SchoolMate.Accounts {

    @Serenity.Decorators.registerClass()
    export class PaymentDialog extends Serenity.EntityDialog<PaymentRow, any> {
        protected getFormKey() { return PaymentForm.formKey; }
        protected getIdProperty() { return PaymentRow.idProperty; }
        protected getLocalTextPrefix() { return PaymentRow.localTextPrefix; }
        protected getService() { return PaymentService.baseUrl; }
        protected getDeletePermission() { return PaymentRow.deletePermission; }
        protected getInsertPermission() { return PaymentRow.insertPermission; }
        protected getUpdatePermission() { return PaymentRow.updatePermission; }

        protected form = new PaymentForm(this.idPrefix);
        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew())
                this.getNextNumber();
        }
        private getNextNumber() {


            Accounts.ReceiptService.GetTrxNo({
                vouchertype: VoucherTypes.Value2
            }, response => {
                this.form.VNo.value = response.voucherno;


            });
        }
    }
}