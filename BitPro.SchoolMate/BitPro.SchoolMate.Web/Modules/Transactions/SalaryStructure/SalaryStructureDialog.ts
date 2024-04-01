
namespace BitPro.SchoolMate.Transactions {

    @Serenity.Decorators.registerClass()
    export class SalaryStructureDialog extends Serenity.EntityDialog<SalaryStructureRow, any> {
        protected getFormKey() { return SalaryStructureForm.formKey; }
        protected getIdProperty() { return SalaryStructureRow.idProperty; }
        protected getLocalTextPrefix() { return SalaryStructureRow.localTextPrefix; }
        protected getService() { return SalaryStructureService.baseUrl; }
        protected getDeletePermission() { return SalaryStructureRow.deletePermission; }
        protected getInsertPermission() { return SalaryStructureRow.insertPermission; }
        protected getUpdatePermission() { return SalaryStructureRow.updatePermission; }

        protected form = new SalaryStructureForm(this.idPrefix);
      
        constructor() {
            super();
            this.form = new SalaryStructureForm(this.idPrefix);
            this.form.FromDate.changeSelect2(e => {

                this.setdata();

            });
            this.form.ToDate.changeSelect2(e => {

                this.setdata();

            });
        }
        private setdata() {
            if (!this.isEditMode()) {
                if (this.form.FromDate.value != null) {
                    if (this.form.ToDate.value != null) {
                        var k = this.form.SalaryPayments.getItems();
                        k = [];
                        Transactions.SalaryStructureService.GetSalary({
                            start: this.form.FromDate.value,
                            to: this.form.ToDate.value
                        }, response => {

                            response.forEach((item, index) => {

                                k.push({ StaffId: item.Id, StaffStaffName: item.StaffName, SalaryAmount: item.SalaryAmount, TotalPresent: item.TotalPresent, TotalAbsent: item.TotalAbsente, PayableSalaryAmount: item.payableamount, PaidAmount: item.payableamount });

                            });
                            this.form.SalaryPayments.value = k;
                        }
                        );
                    }
                }
            }
        }
    }
}