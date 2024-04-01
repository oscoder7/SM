namespace BitPro.SchoolMate.Transactions {

    @Serenity.Decorators.registerEditor()
    export class DepartmentEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, PromotionDetailsRow> {


        constructor(hidden: JQuery) {
            super(hidden);
        }

        protected getLookupKey() {
            return PromotionDetailsRow.lookupKey;
        }

        protected getItemText(item, lookup) {
            return item.StudentName;
        }
    }
}