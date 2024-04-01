
namespace BitPro.SchoolMate.Transactions {

    @Serenity.Decorators.registerClass()
    export class PromotionsGrid extends Serenity.EntityGrid<PromotionsRow, any> {
        protected getColumnsKey() { return 'Transactions.Promotions'; }
        protected getDialogType() { return PromotionsDialog; }
        protected getIdProperty() { return PromotionsRow.idProperty; }
        protected getInsertPermission() { return PromotionsRow.insertPermission; }
        protected getLocalTextPrefix() { return PromotionsRow.localTextPrefix; }
        protected getService() { return PromotionsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);

        }
    }
}