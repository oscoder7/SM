
namespace BitPro.SchoolMate.Transactions {

    @Serenity.Decorators.registerClass()
    export class FeeAllocationTranportationDialog extends Common.GridEditorDialog<FeeAllocationTranportationRow> {
        protected getFormKey() { return FeeAllocationTranportationForm.formKey; }
        //protected getIdProperty() { return FeeAllocationTranportationRow.idProperty; }
        protected getLocalTextPrefix() { return FeeAllocationTranportationRow.localTextPrefix; }
        //protected getService() { return FeeAllocationTranportationService.baseUrl; }
        //protected getDeletePermission() { return FeeAllocationTranportationRow.deletePermission; }
        //protected getInsertPermission() { return FeeAllocationTranportationRow.insertPermission; }
        //protected getUpdatePermission() { return FeeAllocationTranportationRow.updatePermission; }

        protected form:FeeAllocationTranportationForm;
        constructor() {
            super();
            this.form = new FeeAllocationTranportationForm(this.idPrefix);
            this.form.Collected.change(e => {

                this.form.Balance.value = this.entity.Balance - this.form.Collected.value;

            });
        }
    }
}