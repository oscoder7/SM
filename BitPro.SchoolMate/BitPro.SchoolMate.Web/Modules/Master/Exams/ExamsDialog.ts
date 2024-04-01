
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class ExamsDialog extends Serenity.EntityDialog<ExamsRow, any> {
        protected getFormKey() { return ExamsForm.formKey; }
        protected getIdProperty() { return ExamsRow.idProperty; }
        protected getLocalTextPrefix() { return ExamsRow.localTextPrefix; }
        protected getNameProperty() { return ExamsRow.nameProperty; }
        protected getService() { return ExamsService.baseUrl; }
        protected getDeletePermission() { return ExamsRow.deletePermission; }
        protected getInsertPermission() { return ExamsRow.insertPermission; }
        protected getUpdatePermission() { return ExamsRow.updatePermission; }

        protected form = new ExamsForm(this.idPrefix);
        constructor() {
            super();



            this.form.AcadamicYearId.changeSelect2(e => {
                this.setvalue();

            });

        }
        protected setvalue() {
            var acid = Q.toId(this.form.AcadamicYearId.value);
            if (acid > 0) {
                Master.ExamsService.GetAcadamicYearCourseSubjects({

                    acadamicyearid: acid
                }, response => {
                    var detail = this.form.Courses.getItems();
                    detail = [];
                    response.forEach((item, index) => {
                        var smark: ExamMaxMarksRow[];
                        smark = [];
                        item.courseSubjectResponses.forEach((item2, index2) => {
                            smark.push({ CourseSubjectId: item2.SubjectId, CourseSubject: item2.SubjectName, MaxMark: item2.MaxMark });
                        });
                        detail.push({ PromotionId: item.promotionid, Course: item.CousrseName, Subjects: smark });

                    });
                    this.form.Courses.value = detail;

                });
            }
        }
        protected updateInterface() {
            super.updateInterface();

            this.element.find('.add-button').hide();
            if (!this.isEditMode()) {
                Master.CurrentAcadamicYearService.GetCurrentAcadamicYear({


                }, response => {


                        this.form.AcadamicYearId.value = response.Id.toString();
                        this.setvalue();
                });
            }


        }

    }
}