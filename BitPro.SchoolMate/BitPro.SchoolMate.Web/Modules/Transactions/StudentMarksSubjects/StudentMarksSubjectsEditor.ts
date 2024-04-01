/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace BitPro.SchoolMate.Transactions {

    @Serenity.Decorators.registerClass()
    export class StudentMarksSubjectsEditor extends Common.GridEditorBase<StudentMarksSubjectsRow> {
        protected getColumnsKey() { return "Transactions.StudentMarksSubjects"; }
        protected getDialogType() { return StudentMarksSubjectsDialog; }
        protected getLocalTextPrefix() { return StudentMarksSubjectsRow.localTextPrefix; }

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

           // row.SubjectSubjectName = Master.SubjectsRow.getLookup().itemById[row.SubjectId].SubjectName;
            //row.DriverDriverName = FleetManagement.Parameters.DriverInfoRow.getLookup().itemById[row.DriverId].DriverName;
            //row.DailyDetailTrxDate = DailyDetailsRow.getLookup().itemById[row.DailyDetailId].TrxDate;
            //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
            return true;
        }
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>) {
            super.initEntityDialog(itemType, dialog);

            // passing category ID from grid editor to detail dialog
            (dialog as StudentMarksSubjectsDialog).promotionid = this.promotionid;
        }
    }
}