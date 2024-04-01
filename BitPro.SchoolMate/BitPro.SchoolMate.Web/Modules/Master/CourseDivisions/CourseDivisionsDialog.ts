
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class CourseDivisionsDialog extends Common.GridEditorDialog<CourseDivisionsRow> {
        protected getFormKey() { return CourseDivisionsForm.formKey; }
        ///protected getIdProperty() { return CourseDivisionsRow.idProperty; }
        protected getLocalTextPrefix() { return CourseDivisionsRow.localTextPrefix; }
        //protected getNameProperty() { return CourseDivisionsRow.nameProperty; }
        //protected getService() { return CourseDivisionsService.baseUrl; }
        //protected getDeletePermission() { return CourseDivisionsRow.deletePermission; }
        //protected getInsertPermission() { return CourseDivisionsRow.insertPermission; }
        //protected getUpdatePermission() { return CourseDivisionsRow.updatePermission; }

        protected form : CourseDivisionsForm;

    }
}