
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class FeeTermsGrid extends Serenity.EntityGrid<FeeTermsRow, any> {
        protected getColumnsKey() { return 'Master.FeeTerms'; }
        protected getDialogType() { return FeeTermsDialog; }
        protected getIdProperty() { return FeeTermsRow.idProperty; }
        protected getInsertPermission() { return FeeTermsRow.insertPermission; }
        protected getLocalTextPrefix() { return FeeTermsRow.localTextPrefix; }
        protected getService() { return FeeTermsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}