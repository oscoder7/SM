
namespace BitPro.SchoolMate.Transactions {

    @Serenity.Decorators.registerClass()
    export class AdmissionGrid extends Serenity.EntityGrid<AdmissionRow, any> {
        protected getColumnsKey() { return 'Transactions.Admission'; }
        protected getDialogType() { return AdmissionDialog; }
        protected getIdProperty() { return AdmissionRow.idProperty; }
        protected getInsertPermission() { return AdmissionRow.insertPermission; }
        protected getLocalTextPrefix() { return AdmissionRow.localTextPrefix; }
        protected getService() { return AdmissionService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}