
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class CourseFeeDialog extends Serenity.EntityDialog<CourseFeeRow, any> {
        protected getFormKey() { return CourseFeeForm.formKey; }
        protected getIdProperty() { return CourseFeeRow.idProperty; }
        protected getLocalTextPrefix() { return CourseFeeRow.localTextPrefix; }
        protected getService() { return CourseFeeService.baseUrl; }
        protected getDeletePermission() { return CourseFeeRow.deletePermission; }
        protected getInsertPermission() { return CourseFeeRow.insertPermission; }
        protected getUpdatePermission() { return CourseFeeRow.updatePermission; }

        protected form = new CourseFeeForm(this.idPrefix);

    }
}