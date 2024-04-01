
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class ExamCoursesDialog extends Common.GridEditorDialog<ExamCoursesRow> {
        protected getFormKey() { return ExamCoursesForm.formKey; }
        //protected getIdProperty() { return ExamCoursesRow.idProperty; }
        protected getLocalTextPrefix() { return ExamCoursesRow.localTextPrefix; }
        //protected getService() { return ExamCoursesService.baseUrl; }
        //protected getDeletePermission() { return ExamCoursesRow.deletePermission; }
        //protected getInsertPermission() { return ExamCoursesRow.insertPermission; }
        //protected getUpdatePermission() { return ExamCoursesRow.updatePermission; }

        protected form: ExamCoursesForm;
        protected updateInterface() {
            super.updateInterface();

            this.element.find('.add-button').hide();



        }

    }
}