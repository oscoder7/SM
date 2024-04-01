
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class FeeStructureDialog extends Common.GridEditorDialog<FeeStructureRow> {
        protected getFormKey() { return FeeStructureForm.formKey; }
        //protected getIdProperty() { return FeeStructureRow.idProperty; }
        protected getLocalTextPrefix() { return FeeStructureRow.localTextPrefix; }
        //protected getService() { return FeeStructureService.baseUrl; }
        //protected getDeletePermission() { return FeeStructureRow.deletePermission; }
        //protected getInsertPermission() { return FeeStructureRow.insertPermission; }
        //protected getUpdatePermission() { return FeeStructureRow.updatePermission; }

        protected form: FeeStructureForm;
        constructor() {
            super();

            this.form =new FeeStructureForm(this.idPrefix);
          
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();
            if (!this.isEditMode()) {
                Master.CurrentAcadamicYearService.GetCurrentAcadamicYear({


                }, response => {


                    this.form.AcadamicYearId.value = response.Id.toString();
                });
            }

        }


    }
}