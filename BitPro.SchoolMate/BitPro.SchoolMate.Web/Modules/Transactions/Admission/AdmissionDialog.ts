
namespace BitPro.SchoolMate.Transactions {

    @Serenity.Decorators.registerClass()
    export class AdmissionDialog extends Serenity.EntityDialog<AdmissionRow, any> {
        protected getFormKey() { return AdmissionForm.formKey; }
        protected getIdProperty() { return AdmissionRow.idProperty; }
        protected getLocalTextPrefix() { return AdmissionRow.localTextPrefix; }
        protected getService() { return AdmissionService.baseUrl; }
        protected getDeletePermission() { return AdmissionRow.deletePermission; }
        protected getInsertPermission() { return AdmissionRow.insertPermission; }
        protected getUpdatePermission() { return AdmissionRow.updatePermission; }

        protected form = new AdmissionForm(this.idPrefix);
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