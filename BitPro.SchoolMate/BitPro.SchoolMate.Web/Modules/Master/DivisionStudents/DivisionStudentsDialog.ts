
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class DivisionStudentsDialog extends Serenity.EntityDialog<DivisionStudentsRow, any> {
        protected getFormKey() { return DivisionStudentsForm.formKey; }
        protected getIdProperty() { return DivisionStudentsRow.idProperty; }
        protected getLocalTextPrefix() { return DivisionStudentsRow.localTextPrefix; }
        protected getService() { return DivisionStudentsService.baseUrl; }
        protected getDeletePermission() { return DivisionStudentsRow.deletePermission; }
        protected getInsertPermission() { return DivisionStudentsRow.insertPermission; }
        protected getUpdatePermission() { return DivisionStudentsRow.updatePermission; }

        protected form = new DivisionStudentsForm(this.idPrefix);

    }
}