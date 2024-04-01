
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class CoursesDialog extends Serenity.EntityDialog<CoursesRow, any> {
        protected getFormKey() { return CoursesForm.formKey; }
        protected getIdProperty() { return CoursesRow.idProperty; }
        protected getLocalTextPrefix() { return CoursesRow.localTextPrefix; }
        protected getNameProperty() { return CoursesRow.nameProperty; }
        protected getService() { return CoursesService.baseUrl; }
        protected getDeletePermission() { return CoursesRow.deletePermission; }
        protected getInsertPermission() { return CoursesRow.insertPermission; }
        protected getUpdatePermission() { return CoursesRow.updatePermission; }

        protected form = new CoursesForm(this.idPrefix);

    }
}