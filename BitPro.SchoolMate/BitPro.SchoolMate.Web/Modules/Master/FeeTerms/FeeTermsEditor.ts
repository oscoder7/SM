/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class FeeTermsEditor extends Common.GridEditorBase<FeeTermsRow> {
        protected getColumnsKey() { return "Master.FeeTerms"; }
        protected getDialogType() { return FeeTermsDialog; }
        protected getLocalTextPrefix() { return FeeTermsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        validateEntity(row, id) {


            //var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductID === row.ProductID);
            //if (sameProduct && this.id(sameProduct) !== id) {
            //    Q.alert('This product is already in order details!');
            //    return false;
            //}
            //row.DriverDriverName = FleetManagement.Parameters.DriverInfoRow.getLookup().itemById[row.DriverId].DriverName;
            //row.DailyDetailTrxDate = DailyDetailsRow.getLookup().itemById[row.DailyDetailId].TrxDate;
            //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
            return true;
        }
    }
}