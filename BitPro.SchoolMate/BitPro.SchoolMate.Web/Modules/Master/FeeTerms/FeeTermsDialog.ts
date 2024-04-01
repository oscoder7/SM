
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class FeeTermsDialog extends Common.GridEditorDialog<FeeTermsRow> {
        protected getFormKey() { return FeeTermsForm.formKey; }
       // protected getIdProperty() { return FeeTermsRow.idProperty; }
        protected getLocalTextPrefix() { return FeeTermsRow.localTextPrefix; }
        //protected getNameProperty() { return FeeTermsRow.nameProperty; }
        //protected getService() { return FeeTermsService.baseUrl; }
        //protected getDeletePermission() { return FeeTermsRow.deletePermission; }
        //protected getInsertPermission() { return FeeTermsRow.insertPermission; }
        //protected getUpdatePermission() { return FeeTermsRow.updatePermission; }

        protected form : FeeTermsForm;

    }
}