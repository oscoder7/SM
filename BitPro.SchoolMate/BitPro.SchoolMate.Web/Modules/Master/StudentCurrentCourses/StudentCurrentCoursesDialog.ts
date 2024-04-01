
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class StudentCurrentCoursesDialog extends Serenity.EntityDialog<StudentCurrentCoursesRow, any> {
        protected getFormKey() { return StudentCurrentCoursesForm.formKey; }
        protected getIdProperty() { return StudentCurrentCoursesRow.idProperty; }
        protected getLocalTextPrefix() { return StudentCurrentCoursesRow.localTextPrefix; }
        protected getService() { return StudentCurrentCoursesService.baseUrl; }
        protected getDeletePermission() { return StudentCurrentCoursesRow.deletePermission; }
        protected getInsertPermission() { return StudentCurrentCoursesRow.insertPermission; }
        protected getUpdatePermission() { return StudentCurrentCoursesRow.updatePermission; }

        protected form = new StudentCurrentCoursesForm(this.idPrefix);

    }
}