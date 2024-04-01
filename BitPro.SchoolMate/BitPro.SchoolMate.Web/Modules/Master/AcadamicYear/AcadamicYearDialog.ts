
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class AcadamicYearDialog extends Serenity.EntityDialog<AcadamicYearRow, any> {
        protected getFormKey() { return AcadamicYearForm.formKey; }
        protected getIdProperty() { return AcadamicYearRow.idProperty; }
        protected getLocalTextPrefix() { return AcadamicYearRow.localTextPrefix; }
        protected getNameProperty() { return AcadamicYearRow.nameProperty; }
        protected getService() { return AcadamicYearService.baseUrl; }
        protected getDeletePermission() { return AcadamicYearRow.deletePermission; }
        protected getInsertPermission() { return AcadamicYearRow.insertPermission; }
        protected getUpdatePermission() { return AcadamicYearRow.updatePermission; }

        protected form = new AcadamicYearForm(this.idPrefix);
        protected afterLoadEntity() {
            super.afterLoadEntity();
            if (!this.isEditMode()) {
                Master.AcadamicYearService.GetLastAcadamicTerms({


                }, response => {
                        var k = this.form.FeeTerms.getItems();
                        k = [];
                        response.forEach((item, index) => {

                            k.push({ TermName: item.TermName });

                        });
                        this.form.FeeTerms.value = k;


                });
            }

        }

    }
}