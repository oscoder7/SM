
namespace BitPro.SchoolMate.Transactions {

    @Serenity.Decorators.registerClass()
    export class TransportDialog extends Serenity.EntityDialog<TransportRow, any> {
        protected getFormKey() { return TransportForm.formKey; }
        protected getIdProperty() { return TransportRow.idProperty; }
        protected getLocalTextPrefix() { return TransportRow.localTextPrefix; }
        protected getNameProperty() { return TransportRow.nameProperty; }
        protected getService() { return TransportService.baseUrl; }
        protected getDeletePermission() { return TransportRow.deletePermission; }
        protected getInsertPermission() { return TransportRow.insertPermission; }
        protected getUpdatePermission() { return TransportRow.updatePermission; }

        protected form = new TransportForm(this.idPrefix);

    }
}