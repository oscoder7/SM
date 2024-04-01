
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class ExamMaxMarksDialog extends Common.GridEditorDialog<ExamMaxMarksRow> {
        protected getFormKey() { return ExamMaxMarksForm.formKey; }
       // protected getIdProperty() { return ExamMaxMarksRow.idProperty; }
        protected getLocalTextPrefix() { return ExamMaxMarksRow.localTextPrefix; }
        //protected getService() { return ExamMaxMarksService.baseUrl; }
        //protected getDeletePermission() { return ExamMaxMarksRow.deletePermission; }
        //protected getInsertPermission() { return ExamMaxMarksRow.insertPermission; }
        //protected getUpdatePermission() { return ExamMaxMarksRow.updatePermission; }

        protected form : ExamMaxMarksForm;

    }
}