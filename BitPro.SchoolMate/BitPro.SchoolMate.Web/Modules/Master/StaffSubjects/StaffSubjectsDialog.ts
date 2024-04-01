
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class StaffSubjectsDialog extends Serenity.EntityDialog<StaffSubjectsRow, any> {
        protected getFormKey() { return StaffSubjectsForm.formKey; }
        protected getIdProperty() { return StaffSubjectsRow.idProperty; }
        protected getLocalTextPrefix() { return StaffSubjectsRow.localTextPrefix; }
        protected getService() { return StaffSubjectsService.baseUrl; }
        protected getDeletePermission() { return StaffSubjectsRow.deletePermission; }
        protected getInsertPermission() { return StaffSubjectsRow.insertPermission; }
        protected getUpdatePermission() { return StaffSubjectsRow.updatePermission; }

        protected form = new StaffSubjectsForm(this.idPrefix);

    }
}