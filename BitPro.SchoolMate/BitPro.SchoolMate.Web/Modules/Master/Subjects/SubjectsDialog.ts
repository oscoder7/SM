
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class SubjectsDialog extends Serenity.EntityDialog<SubjectsRow, any> {
        protected getFormKey() { return SubjectsForm.formKey; }
        protected getIdProperty() { return SubjectsRow.idProperty; }
        protected getLocalTextPrefix() { return SubjectsRow.localTextPrefix; }
        protected getNameProperty() { return SubjectsRow.nameProperty; }
        protected getService() { return SubjectsService.baseUrl; }
        protected getDeletePermission() { return SubjectsRow.deletePermission; }
        protected getInsertPermission() { return SubjectsRow.insertPermission; }
        protected getUpdatePermission() { return SubjectsRow.updatePermission; }

        protected form = new SubjectsForm(this.idPrefix);

    }
}