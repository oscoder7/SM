
namespace BitPro.SchoolMate.Transactions {

    @Serenity.Decorators.registerClass()
    export class FeeAllocationDialog extends Common.GridEditorDialog<FeeAllocationRow> {
        protected getFormKey() { return FeeAllocationForm.formKey; }
        //protected getIdProperty() { return FeeAllocationRow.idProperty; }
        protected getLocalTextPrefix() { return FeeAllocationRow.localTextPrefix; }
        //protected getService() { return FeeAllocationService.baseUrl; }
        //protected getDeletePermission() { return FeeAllocationRow.deletePermission; }
        //protected getInsertPermission() { return FeeAllocationRow.insertPermission; }
        //protected getUpdatePermission() { return FeeAllocationRow.updatePermission; }

        protected form: FeeAllocationForm;
        constructor() {
            super();
            this.form = new FeeAllocationForm(this.idPrefix);
            this.form.Collected.change(e => {

                this.form.Balance.value = this.entity.Balance - this.form.Collected.value;

            });
        }

    }
}