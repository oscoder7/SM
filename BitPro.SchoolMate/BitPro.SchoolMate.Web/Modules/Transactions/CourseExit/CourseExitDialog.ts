
namespace BitPro.SchoolMate.Transactions {

    @Serenity.Decorators.registerClass()
    export class CourseExitDialog extends Serenity.EntityDialog<CourseExitRow, any> {
        protected getFormKey() { return CourseExitForm.formKey; }
        protected getIdProperty() { return CourseExitRow.idProperty; }
        protected getLocalTextPrefix() { return CourseExitRow.localTextPrefix; }
        protected getService() { return CourseExitService.baseUrl; }
        protected getDeletePermission() { return CourseExitRow.deletePermission; }
        protected getInsertPermission() { return CourseExitRow.insertPermission; }
        protected getUpdatePermission() { return CourseExitRow.updatePermission; }

        protected form = new CourseExitForm(this.idPrefix);
        constructor() {
            super();

            this.form = new CourseExitForm(this.idPrefix);
            this.form.PromotionId.change(e => {
                this.form.Students.promotionid = Q.toId(this.form.PromotionId.value);
            });
        }
        protected updateInterface() {
            super.updateInterface();
            if (!this.isEditMode()) {
                Master.CurrentAcadamicYearService.GetCurrentAcadamicYear({


                }, response => {


                        this.form.AcadamicYearId.value = response.Id.toString();
                });
            }

            
           

        }
    }
}