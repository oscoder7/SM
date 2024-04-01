
//namespace BitPro.SchoolMate.Master {

//    @Serenity.Decorators.registerClass()
//    export class FeeExcemptionsDialog extends Serenity.EntityDialog<FeeExcemptionsRow, any> {
//        protected getFormKey() { return FeeExcemptionsForm.formKey; }
//        protected getIdProperty() { return FeeExcemptionsRow.idProperty; }
//        protected getLocalTextPrefix() { return FeeExcemptionsRow.localTextPrefix; }
//        protected getService() { return FeeExcemptionsService.baseUrl; }
//        protected getDeletePermission() { return FeeExcemptionsRow.deletePermission; }
//        protected getInsertPermission() { return FeeExcemptionsRow.insertPermission; }
//        protected getUpdatePermission() { return FeeExcemptionsRow.updatePermission; }

//        protected form = new FeeExcemptionsForm(this.idPrefix);

//    }
//}
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class FeeExcemptionsDialog extends Common.GridEditorDialog<FeeExcemptionsRow> {

        protected getFormKey() { return FeeExcemptionsForm.formKey; }
        //protected getIdProperty() { return UOMAmountRow.idProperty; }
        protected getLocalTextPrefix() { return FeeExcemptionsRow.localTextPrefix; }

        protected form = new FeeExcemptionsForm(this.idPrefix);
        constructor() {
            super();

            this.form = new FeeExcemptionsForm(this.idPrefix);



        }
        protected afterLoadEntity() {
            super.afterLoadEntity();

            // Subscribe to changes in MaterialId
            this.form.CourseFeeId.changeSelect2(e => {
                this.updateTotalFreight();
            });         
        }




        private updateTotalFreight() {
            const materialId = Q.toId(this.form.CourseFeeId.value);
            if (materialId > 0) {
                /*  const uomAmountRow = UOMAmount.UOMAmountRow.getLookup().item();*/
                //const uomAmountRowArray = Object.values(UOMAmount.UOMAmountRow.getLookup());
                //const uomAmountRow = uomAmountRowArray.find(row => row.materialId === materialId);
                /*var uomAmountRowLookup = Master.FeesRow.getLookup().items;*/
                const shipperRow = Master.FeesRow.getLookup().itemById[materialId];
                /*const uomAmountRow = uomAmountRowLookup.filter(row => row.Id === materialId);*/
                //if (uomAmountRow.length > 0) {
                //    // Check if the filtered array is not empty
                //    var rate = uomAmountRow[0].Rate; // Store the value of Rate from the first element
                //}

                //if (uomAmountRow != null) {

                //    //this.form.UnitPrice.value = rate;
                //    ///* this.form.TotalFreight.value = this.form.UnitPrice.value * this.form.PerTonRate.value;*/
                //    //this.form.TotalCommission.value = this.calculateCommission(this.form.TotalFreight.value);
                //    //this.form.UnitPrice.value = this.form.TotalFreight.value / this.form.PerTonRate.value;
                //}
                if (shipperRow != null) {
                    const shipperState = shipperRow.FeeName;
                    const fee = shipperRow.AnnualFee;
                    /*const consigneeState = consigneeRow.StateName;*/
                }
                /*this.form.c*/

            }
        }

       
    }
}