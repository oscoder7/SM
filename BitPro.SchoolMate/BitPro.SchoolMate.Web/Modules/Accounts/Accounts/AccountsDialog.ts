﻿
namespace BitPro.SchoolMate.Accounts {

    @Serenity.Decorators.registerClass()
    export class AccountsDialog extends Serenity.EntityDialog<AccountsRow, any> {
        protected getFormKey() { return AccountsForm.formKey; }
        protected getIdProperty() { return AccountsRow.idProperty; }
        protected getLocalTextPrefix() { return AccountsRow.localTextPrefix; }
        protected getNameProperty() { return AccountsRow.nameProperty; }
        protected getService() { return AccountsService.baseUrl; }
        protected getDeletePermission() { return AccountsRow.deletePermission; }
        protected getInsertPermission() { return AccountsRow.insertPermission; }
        protected getUpdatePermission() { return AccountsRow.updatePermission; }

        protected form = new AccountsForm(this.idPrefix);

    }
}