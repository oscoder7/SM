
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class ExamMaxMarksGrid extends Serenity.EntityGrid<ExamMaxMarksRow, any> {
        protected getColumnsKey() { return 'Master.ExamMaxMarks'; }
        protected getDialogType() { return ExamMaxMarksDialog; }
        protected getIdProperty() { return ExamMaxMarksRow.idProperty; }
        protected getInsertPermission() { return ExamMaxMarksRow.insertPermission; }
        protected getLocalTextPrefix() { return ExamMaxMarksRow.localTextPrefix; }
        protected getService() { return ExamMaxMarksService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}