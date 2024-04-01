
namespace BitPro.SchoolMate.Administration {

    @Serenity.Decorators.registerClass()
    export class SystemSettingsDialog extends Serenity.EntityDialog<SystemSettingsRow, any> {
        protected getFormKey() { return SystemSettingsForm.formKey; }
        protected getIdProperty() { return SystemSettingsRow.idProperty; }
        protected getLocalTextPrefix() { return SystemSettingsRow.localTextPrefix; }
        protected getService() { return SystemSettingsService.baseUrl; }
        protected getDeletePermission() { return SystemSettingsRow.deletePermission; }
        protected getInsertPermission() { return SystemSettingsRow.insertPermission; }
        protected getUpdatePermission() { return SystemSettingsRow.updatePermission; }

        protected form = new SystemSettingsForm(this.idPrefix);

    }
}