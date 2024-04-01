
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class FeeExcemptionsGrid extends Serenity.EntityGrid<FeeExcemptionsRow, any> {
        protected getColumnsKey() { return 'Master.FeeExcemptions'; }
        protected getDialogType() { return FeeExcemptionsDialog; }
        protected getIdProperty() { return FeeExcemptionsRow.idProperty; }
        protected getInsertPermission() { return FeeExcemptionsRow.insertPermission; }
        protected getLocalTextPrefix() { return FeeExcemptionsRow.localTextPrefix; }
        protected getService() { return FeeExcemptionsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}