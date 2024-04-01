
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class AccountHeadsDialog extends Serenity.EntityDialog<AccountHeadsRow, any> {
        protected getFormKey() { return AccountHeadsForm.formKey; }
        protected getIdProperty() { return AccountHeadsRow.idProperty; }
        protected getLocalTextPrefix() { return AccountHeadsRow.localTextPrefix; }
        protected getNameProperty() { return AccountHeadsRow.nameProperty; }
        protected getService() { return AccountHeadsService.baseUrl; }
        protected getDeletePermission() { return AccountHeadsRow.deletePermission; }
        protected getInsertPermission() { return AccountHeadsRow.insertPermission; }
        protected getUpdatePermission() { return AccountHeadsRow.updatePermission; }

        protected form = new AccountHeadsForm(this.idPrefix);

    }
}