
namespace BitPro.SchoolMate.Accounts {

    @Serenity.Decorators.registerClass()
    export class ReceiptDialog extends Serenity.EntityDialog<ReceiptRow, any> {
        protected getFormKey() { return ReceiptForm.formKey; }
        protected getIdProperty() { return ReceiptRow.idProperty; }
        protected getLocalTextPrefix() { return ReceiptRow.localTextPrefix; }
        protected getService() { return ReceiptService.baseUrl; }
        protected getDeletePermission() { return ReceiptRow.deletePermission; }
        protected getInsertPermission() { return ReceiptRow.insertPermission; }
        protected getUpdatePermission() { return ReceiptRow.updatePermission; }

        protected form = new ReceiptForm(this.idPrefix);
        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew())
                this.getNextNumber();
        }
        private getNextNumber() {


            Accounts.ReceiptService.GetTrxNo({
                vouchertype: VoucherTypes.Value1
            }, response => {
                this.form.VNo.value = response.voucherno;

                
            });
        }
        protected updateInterface() {
            super.updateInterface();
            if (this.entity.EntityId > 0) {
                this.readOnly = true;
            }
           
        }
        
    }
}