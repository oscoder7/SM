
namespace BitPro.SchoolMate.Transactions {

    @Serenity.Decorators.registerClass()
    export class StudentMarksSubjectsDialog extends Common.GridEditorDialog<StudentMarksSubjectsRow> {
        protected getFormKey() { return StudentMarksSubjectsForm.formKey; }
        //protected getIdProperty() { return StudentMarksSubjectsRow.idProperty; }
        protected getLocalTextPrefix() { return StudentMarksSubjectsRow.localTextPrefix; }
        //protected getService() { return StudentMarksSubjectsService.baseUrl; }
        //protected getDeletePermission() { return StudentMarksSubjectsRow.deletePermission; }
        //protected getInsertPermission() { return StudentMarksSubjectsRow.insertPermission; }
        //protected getUpdatePermission() { return StudentMarksSubjectsRow.updatePermission; }

        protected form: StudentMarksSubjectsForm;
        constructor() {
            super();
            this.form = new StudentMarksSubjectsForm(this.idPrefix);
            this.form.CourseSubjectId.change(e => {
                var id = Q.toId(this.form.CourseSubjectId.value);
                if (id > 0) {
                    Transactions.StudentMarksService.GetMaximumMark({
                        promotionid: this.promotionid,
                        coursesubjectid:id

                    }, response => {


                        this.form.StudentMarksDetails.maxmark = response.MaxMark;
                    });

                    
                    
                }
                

            });
        }
        protected updateInterface() {
            super.updateInterface();
            
            this.element.find('.add-button').hide();



        }
        public promotionid: number;
    }
}