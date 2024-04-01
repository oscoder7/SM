
namespace BitPro.SchoolMate.Administration {

    @Serenity.Decorators.registerClass()
    export class SettingsDialog extends Serenity.EntityDialog<SettingsRow, any> {
        protected getFormKey() { return SettingsForm.formKey; }
        protected getIdProperty() { return SettingsRow.idProperty; }
        protected getLocalTextPrefix() { return SettingsRow.localTextPrefix; }
        protected getNameProperty() { return SettingsRow.nameProperty; }
        protected getService() { return SettingsService.baseUrl; }
        protected getDeletePermission() { return SettingsRow.deletePermission; }
        protected getInsertPermission() { return SettingsRow.insertPermission; }
        protected getUpdatePermission() { return SettingsRow.updatePermission; }

        protected form = new SettingsForm(this.idPrefix);
        protected updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadonly(this.form.Type.element, true);
            Serenity.EditorUtils.setReadonly(this.form.Name.element, true);

            this.element.find('.delete-button').hide();

        

        }
    }
}