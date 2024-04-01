
namespace BitPro.SchoolMate.Transactions {

    @Serenity.Decorators.registerClass()
    export class PromotionDetailsDialog extends Serenity.EntityDialog<PromotionDetailsRow, any> {
        protected getFormKey() { return PromotionDetailsForm.formKey; }
        protected getIdProperty() { return PromotionDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return PromotionDetailsRow.localTextPrefix; }
        protected getService() { return PromotionDetailsService.baseUrl; }
        protected getDeletePermission() { return PromotionDetailsRow.deletePermission; }
        protected getInsertPermission() { return PromotionDetailsRow.insertPermission; }
        protected getUpdatePermission() { return PromotionDetailsRow.updatePermission; }

        protected form = new PromotionDetailsForm(this.idPrefix);
        
    }
    
}