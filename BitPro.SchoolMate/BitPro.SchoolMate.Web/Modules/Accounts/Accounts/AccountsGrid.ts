
namespace BitPro.SchoolMate.Accounts {

    @Serenity.Decorators.registerClass()
    export class AccountsGrid extends Serenity.EntityGrid<AccountsRow, any> {
        protected getColumnsKey() { return 'Accounts.Accounts'; }
        protected getDialogType() { return AccountsDialog; }
        protected getIdProperty() { return AccountsRow.idProperty; }
        protected getInsertPermission() { return AccountsRow.insertPermission; }
        protected getLocalTextPrefix() { return AccountsRow.localTextPrefix; }
        protected getService() { return AccountsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}