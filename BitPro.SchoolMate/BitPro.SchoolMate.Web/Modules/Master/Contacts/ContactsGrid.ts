
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class ContactsGrid extends Serenity.EntityGrid<ContactsRow, any> {
        protected getColumnsKey() { return 'Master.Contacts'; }
        protected getDialogType() { return ContactsDialog; }
        protected getIdProperty() { return ContactsRow.idProperty; }
        protected getInsertPermission() { return ContactsRow.insertPermission; }
        protected getLocalTextPrefix() { return ContactsRow.localTextPrefix; }
        protected getService() { return ContactsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: ContactsService.baseUrl + '/ListExcel',
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