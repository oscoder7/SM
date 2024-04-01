
namespace BitPro.SchoolMate.Transactions {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class PromotionsDialog extends Serenity.EntityDialog<PromotionsRow, any> {
        protected getFormKey() { return PromotionsForm.formKey; }
        protected getIdProperty() { return PromotionsRow.idProperty; }
        protected getLocalTextPrefix() { return PromotionsRow.localTextPrefix; }
        protected getService() { return PromotionsService.baseUrl; }
        protected getDeletePermission() { return PromotionsRow.deletePermission; }
        protected getInsertPermission() { return PromotionsRow.insertPermission; }
        protected getUpdatePermission() { return PromotionsRow.updatePermission; }

        protected form = new PromotionsForm(this.idPrefix);
       
        constructor() {
            super();

            this.form = new PromotionsForm(this.idPrefix);

            this.form.ToCourse.changeSelect2(e => {

                Transactions.PromotionsService.GetDivisionsByCourse({
                    courseid: Q.toId(this.form.ToCourse.value)

                }, response => {
                    var k = this.form.PromotionDivisions.getItems();
                    k = [];
                    response.forEach((item, index) => {

                        k.push({ DivisionCode: item.DivisionCode });

                    });
                    this.form.PromotionDivisions.value = k;


                });
            

            });

        }
        protected getToolbarButtons() {
            let buttons = super.getToolbarButtons();

            buttons.push({
                title: 'Promotion Students',
                cssClass: 'edit-permissions-button',
                icon: 'fa-lock text-green',
                onClick: () => {
                    new PromotionStudentsDialog({
                        fromcourseid: this.entity.FromCourse,
                        tocourseid: this.entity.ToCourse,
                        promotionid: this.entity.Id,
                        acadamicyearid: this.entity.AcadamicYearId
                    }).dialogOpen();


                }
            });

            return buttons;
        }

        protected updateInterface() {
            super.updateInterface();

            this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
        }

    }
}