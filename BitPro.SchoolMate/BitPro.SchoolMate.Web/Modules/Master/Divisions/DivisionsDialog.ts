
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class DivisionsDialog extends Common.GridEditorDialog<DivisionsRow> {
        protected getFormKey() { return DivisionsForm.formKey; }
        //protected getIdProperty() { return DivisionsRow.idProperty; }
        protected getLocalTextPrefix() { return DivisionsRow.localTextPrefix; }
        //protected getNameProperty() { return DivisionsRow.nameProperty; }
        //protected getService() { return DivisionsService.baseUrl; }
        //protected getDeletePermission() { return DivisionsRow.deletePermission; }
        //protected getInsertPermission() { return DivisionsRow.insertPermission; }
        //protected getUpdatePermission() { return DivisionsRow.updatePermission; }

        protected form = new DivisionsForm(this.idPrefix);

        protected getToolbarButtons() {
            let buttons = super.getToolbarButtons();

            buttons.push({
                title: 'Division Students',
                cssClass: 'edit-permissions-button',
                icon: 'fa-lock text-green',
                onClick: () => {
                    new DivisionStudentsCheckDialog({
                        divid: this.entity.Id,
                        prormotionid: this.entity.PromotionId
                    }).dialogOpen();
                   
                    
                }
            });

            return buttons;
        }
        protected updateInterface() {
            super.updateInterface();
            if (this.entity.Id > 0) {
                
            }
            else {
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", true);
            }
            
        }

    }
}