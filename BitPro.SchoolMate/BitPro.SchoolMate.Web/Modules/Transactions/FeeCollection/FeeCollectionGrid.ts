
namespace BitPro.SchoolMate.Transactions {

    @Serenity.Decorators.registerClass()
    export class FeeCollectionGrid extends Serenity.EntityGrid<FeeCollectionRow, any> {
        protected getColumnsKey() { return 'Transactions.FeeCollection'; }
        protected getDialogType() { return FeeCollectionDialog; }
        protected getIdProperty() { return FeeCollectionRow.idProperty; }
        protected getInsertPermission() { return FeeCollectionRow.insertPermission; }
        protected getLocalTextPrefix() { return FeeCollectionRow.localTextPrefix; }
        protected getService() { return FeeCollectionService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();
            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: FeeCollectionService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            buttons.push(Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }
    }
}