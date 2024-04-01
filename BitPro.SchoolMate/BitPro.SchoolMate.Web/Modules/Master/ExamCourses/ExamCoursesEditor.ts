/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class ExamCoursesEditor extends Common.GridEditorBase<ExamCoursesRow> {
        protected getColumnsKey() { return "Master.ExamCourses"; }
        protected getDialogType() { return ExamCoursesDialog; }
        protected getLocalTextPrefix() { return ExamCoursesRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

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
    }
}