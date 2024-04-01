
namespace BitPro.SchoolMate.Transactions {

    @Serenity.Decorators.registerClass()
    export class StudentMarksDetailsDialog extends Common.GridEditorDialog<StudentMarksDetailsRow> {
        protected getFormKey() { return StudentMarksDetailsForm.formKey; }
       // protected getIdProperty() { return StudentMarksDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return StudentMarksDetailsRow.localTextPrefix; }
        //protected getNameProperty() { return StudentMarksDetailsRow.nameProperty; }
        //protected getService() { return StudentMarksDetailsService.baseUrl; }
        //protected getDeletePermission() { return StudentMarksDetailsRow.deletePermission; }
        //protected getInsertPermission() { return StudentMarksDetailsRow.insertPermission; }
        //protected getUpdatePermission() { return StudentMarksDetailsRow.updatePermission; }

        protected form: StudentMarksDetailsForm;
        constructor() {
            super();
            this.form = new StudentMarksDetailsForm(this.idPrefix);
            this.form.Mark.change(e => {
                if (this.form.Mark.value > this.maxmark) {
                    Q.notifyError("Mark should be less than maximum mark(" + this.maxmark + ")");
                    this.form.Mark.value = 0;
                }
            
                
            });
        }
        public maxmark: number;
    }
}