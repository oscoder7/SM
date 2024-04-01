
namespace BitPro.SchoolMate.Transactions {

    @Serenity.Decorators.registerClass()
    export class PromotionDetailsGrid extends Serenity.EntityGrid<PromotionDetailsRow, any> {
        protected getColumnsKey() { return 'Transactions.PromotionDetails'; }
        protected getDialogType() { return PromotionDetailsDialog; }
        protected getIdProperty() { return PromotionDetailsRow.idProperty; }
        protected getInsertPermission() { return PromotionDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return PromotionDetailsRow.localTextPrefix; }
        protected getService() { return PromotionDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}