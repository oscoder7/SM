
namespace BitPro.SchoolMate.Transactions {

    @Serenity.Decorators.registerClass()
    export class AttandanceDialog extends Serenity.EntityDialog<AttandanceRow, any> {
        protected getFormKey() { return AttandanceForm.formKey; }
        protected getIdProperty() { return AttandanceRow.idProperty; }
        protected getLocalTextPrefix() { return AttandanceRow.localTextPrefix; }
        protected getNameProperty() { return AttandanceRow.nameProperty; }
        protected getService() { return AttandanceService.baseUrl; }
        protected getDeletePermission() { return AttandanceRow.deletePermission; }
        protected getInsertPermission() { return AttandanceRow.insertPermission; }
        protected getUpdatePermission() { return AttandanceRow.updatePermission; }

        protected form = new AttandanceForm(this.idPrefix);

    }
}