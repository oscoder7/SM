
namespace BitPro.SchoolMate.Accounts {

    @Serenity.Decorators.registerClass()
    export class ContraDialog extends Serenity.EntityDialog<ContraRow, any> {
        protected getFormKey() { return ContraForm.formKey; }
        protected getIdProperty() { return ContraRow.idProperty; }
        protected getLocalTextPrefix() { return ContraRow.localTextPrefix; }
        protected getService() { return ContraService.baseUrl; }
        protected getDeletePermission() { return ContraRow.deletePermission; }
        protected getInsertPermission() { return ContraRow.insertPermission; }
        protected getUpdatePermission() { return ContraRow.updatePermission; }

        protected form = new ContraForm(this.idPrefix);
        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew())
                this.getNextNumber();
        }
        private getNextNumber() {


            Accounts.ReceiptService.GetTrxNo({
                vouchertype: VoucherTypes.Value3
            }, response => {
                this.form.VNo.value = response.voucherno;


            });
        }
    }
}