
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class AccountHeadsGrid extends Serenity.EntityGrid<AccountHeadsRow, any> {
        protected getColumnsKey() { return 'Master.AccountHeads'; }
        protected getDialogType() { return AccountHeadsDialog; }
        protected getIdProperty() { return AccountHeadsRow.idProperty; }
        protected getInsertPermission() { return AccountHeadsRow.insertPermission; }
        protected getLocalTextPrefix() { return AccountHeadsRow.localTextPrefix; }
        protected getService() { return AccountHeadsService.baseUrl; }
        private treeMixin: Serenity.TreeGridMixin<AccountHeadsRow>;
        
        constructor(container: JQuery) {
            super(container);
            this.treeMixin = new Serenity.TreeGridMixin({
                grid: this,
                // bring tree items initially collapsed
                initialCollapse: () => true,
                // which column to place tree toggle / expand/collapse button
                toggleField: AccountHeadsRow.Fields.Description,
                getParentId: x => {
                    // as we don't have parentId column here, we are cheating by using modulus 10 and 50
                    // e.g. order with ID 1605 will have parent 1600, order with ID 1613 will have parent 1610


                    // if you had a ParentID column, you'd just return x.ParentID
                    return x.ParentHeadId;
                }
            });
        }

        protected usePager() {
            return false;
        }
    }
}