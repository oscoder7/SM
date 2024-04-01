
namespace BitPro.SchoolMate.Transactions {

    @Serenity.Decorators.registerClass()
    export class SalaryPaymentsDialog extends Common.GridEditorDialog<SalaryPaymentsRow> {
        protected getFormKey() { return SalaryPaymentsForm.formKey; }
      //  protected getIdProperty() { return SalaryPaymentsRow.idProperty; }
        protected getLocalTextPrefix() { return SalaryPaymentsRow.localTextPrefix; }
        //protected getService() { return SalaryPaymentsService.baseUrl; }
        //protected getDeletePermission() { return SalaryPaymentsRow.deletePermission; }
        //protected getInsertPermission() { return SalaryPaymentsRow.insertPermission; }
        //protected getUpdatePermission() { return SalaryPaymentsRow.updatePermission; }

        protected form: SalaryPaymentsForm;
        constructor() {
            super();
            //this.form = new SalaryPaymentsForm(this.idPrefix);
            this.form.PayableSalaryAmount.changeSelect2(e => {

                this.form.PaidAmount.value = this.form.PayableSalaryAmount.value;

            });
           
        }

    }
}