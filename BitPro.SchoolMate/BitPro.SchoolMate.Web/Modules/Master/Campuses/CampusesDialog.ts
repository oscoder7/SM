
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class CampusesDialog extends Serenity.EntityDialog<CampusesRow, any> {
        protected getFormKey() { return CampusesForm.formKey; }
        protected getIdProperty() { return CampusesRow.idProperty; }
        protected getLocalTextPrefix() { return CampusesRow.localTextPrefix; }
        protected getNameProperty() { return CampusesRow.nameProperty; }
        protected getService() { return CampusesService.baseUrl; }
        protected getDeletePermission() { return CampusesRow.deletePermission; }
        protected getInsertPermission() { return CampusesRow.insertPermission; }
        protected getUpdatePermission() { return CampusesRow.updatePermission; }

        protected form = new CampusesForm(this.idPrefix);

    }
}