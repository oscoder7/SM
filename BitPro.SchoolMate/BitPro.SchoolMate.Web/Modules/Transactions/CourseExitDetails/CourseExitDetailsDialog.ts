
namespace BitPro.SchoolMate.Transactions {

    @Serenity.Decorators.registerClass()
    export class CourseExitDetailsDialog extends Common.GridEditorDialog<CourseExitDetailsRow> {
        protected getFormKey() { return CourseExitDetailsForm.formKey; }
       // protected getIdProperty() { return CourseExitDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return CourseExitDetailsRow.localTextPrefix; }
        //protected getNameProperty() { return CourseExitDetailsRow.nameProperty; }
        //protected getService() { return CourseExitDetailsService.baseUrl; }
        //protected getDeletePermission() { return CourseExitDetailsRow.deletePermission; }
        //protected getInsertPermission() { return CourseExitDetailsRow.insertPermission; }
        //protected getUpdatePermission() { return CourseExitDetailsRow.updatePermission; }

        protected form : CourseExitDetailsForm;
        constructor() {
            super();

            this.form = new CourseExitDetailsForm(this.idPrefix);

            // we can set cascade field in constructor
            // we could also use FilterField but in this case, when CategoryID is null
            // lookup editor would show all products in any category
            //this.form.PromotionDetailId.cascadeField = Northwind.ProductRow.Fields.CategoryID;
            this.form.PromotionDetailId.cascadeField = Transactions.PromotionDetailsRow.Fields.PromotionId;
            //if (this.form.PromotionDetailId.value !="") {


            //        this.form.PromotionDetailId.readOnly = true;
            //    }
            //    else {
            //        this.form.PromotionDetailId.filterField = "IsCompleted";
            //        this.form.PromotionDetailId.filterValue = false;
            //    }
            }
           

           
            // but CategoryID value is not yet available here as detail editor will set it 
        // after calling constructor (creating a detail dialog) so we'll use BeforeLoadEntity
        protected afterLoadEntity() {
            super.afterLoadEntity();
            if (this.form.PromotionDetailId.value !="") {


                    this.form.PromotionDetailId.readOnly = true;
                }
                else {
                    this.form.PromotionDetailId.filterField = "IsCompleted";
                    this.form.PromotionDetailId.filterValue = false;
                }
        
            // setting cascade value here
            // make sure you have [LookupInclude] on CategoryID property of ProductRow
            // otherwise this field won't be available in lookup script (will always be null),
            // so can't be filtered and you'll end up with an empty product list.
            
        }
        protected beforeLoadEntity(entity) {
            super.beforeLoadEntity(entity);

            // setting cascade value here
            // make sure you have [LookupInclude] on CategoryID property of ProductRow
            // otherwise this field won't be available in lookup script (will always be null),
            // so can't be filtered and you'll end up with an empty product list.
            this.form.PromotionDetailId.cascadeValue = this.promotionid;
        }
        public promotionid: number;
    }
}