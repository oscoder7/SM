/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace BitPro.SchoolMate.Transactions {

    @Serenity.Decorators.registerClass()
    export class CourseExitEditor extends Common.GridEditorBase<CourseExitDetailsRow> {
        protected getColumnsKey() { return "Transactions.CourseExitDetails"; }
        protected getDialogType() { return CourseExitDetailsDialog; }
        protected getLocalTextPrefix() { return CourseExitDetailsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
        public promotionid: number;
        validateEntity(row, id) {


            //var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductID === row.ProductID);
            //if (sameProduct && this.id(sameProduct) !== id) {
            //    Q.alert('This product is already in order details!');
            //    return false;
            //}

            row.Student = Transactions.PromotionDetailsRow.getLookup().itemById[row.PromotionDetailId].StudentName;
            //row.DriverDriverName = FleetManagement.Parameters.DriverInfoRow.getLookup().itemById[row.DriverId].DriverName;
            //row.DailyDetailTrxDate = DailyDetailsRow.getLookup().itemById[row.DailyDetailId].TrxDate;
            //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
            return true;
        }
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>) {
            super.initEntityDialog(itemType, dialog);

            // passing category ID from grid editor to detail dialog
            (dialog as CourseExitDetailsDialog).promotionid = this.promotionid;
        }
    }
}