
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class CourseSubjectsDialog extends Common.GridEditorDialog<CourseSubjectsRow> {
        protected getFormKey() { return CourseSubjectsForm.formKey; }
       // protected getIdProperty() { return CourseSubjectsRow.idProperty; }
        protected getLocalTextPrefix() { return CourseSubjectsRow.localTextPrefix; }
        //protected getService() { return CourseSubjectsService.baseUrl; }
        //protected getDeletePermission() { return CourseSubjectsRow.deletePermission; }
        //protected getInsertPermission() { return CourseSubjectsRow.insertPermission; }
        //protected getUpdatePermission() { return CourseSubjectsRow.updatePermission; }

        protected form : CourseSubjectsForm;

    }
}