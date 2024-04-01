
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class AreasDialog extends Serenity.EntityDialog<AreasRow, any> {
        protected getFormKey() { return AreasForm.formKey; }
        protected getIdProperty() { return AreasRow.idProperty; }
        protected getLocalTextPrefix() { return AreasRow.localTextPrefix; }
        protected getNameProperty() { return AreasRow.nameProperty; }
        protected getService() { return AreasService.baseUrl; }
        protected getDeletePermission() { return AreasRow.deletePermission; }
        protected getInsertPermission() { return AreasRow.insertPermission; }
        protected getUpdatePermission() { return AreasRow.updatePermission; }

        protected form = new AreasForm(this.idPrefix);
        //protected updateInterface() {
        //    super.updateInterface();

        //    var k = this.form;
          

        //}

    }
}