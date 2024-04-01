
namespace BitPro.SchoolMate.Transactions {

    @Serenity.Decorators.registerClass()
    export class StudentMarksDialog extends Serenity.EntityDialog<StudentMarksRow, any> {
        protected getFormKey() { return StudentMarksForm.formKey; }
        protected getIdProperty() { return StudentMarksRow.idProperty; }
        protected getLocalTextPrefix() { return StudentMarksRow.localTextPrefix; }
        protected getService() { return StudentMarksService.baseUrl; }
        protected getDeletePermission() { return StudentMarksRow.deletePermission; }
        protected getInsertPermission() { return StudentMarksRow.insertPermission; }
        protected getUpdatePermission() { return StudentMarksRow.updatePermission; }

        protected form = new StudentMarksForm(this.idPrefix);
        constructor() {
            super();
          
            

            this.form.PromotionId.changeSelect2(e => {

                var id = Q.toId(this.form.PromotionId.value);
                var k = Transactions.PromotionsRow.getLookup().itemById[id];
                var criteria: any;
                var detail = this.form.Subjects.getItems();
                detail = [];
                this.form.Subjects.promotionid = id;
                Transactions.PromotionDetailsService.List({

                    Criteria: Serenity.Criteria.and(criteria, [[Transactions.PromotionDetailsRow.Fields.PromotionId], '=', id])

                }, response => {
                        Master.CourseSubjectsService.List({

                            Criteria: Serenity.Criteria.and(criteria, [[Master.CourseSubjectsRow.Fields.CourseId], '=', k.ToCourse])
                            
                        }, response1 => {
                                response1.Entities.forEach((item, index) => {
                                    var smark: StudentMarksDetailsRow[];
                                    smark = [];
                                    response.Entities.forEach((item2, index2) => {
                                        smark.push({ PromotionDetailId: item2.Id, Mark: 0, Student: item2.StudentName });
                                    });
                                    detail.push({ CourseSubjectId: item.Id, StudentMarksDetails: smark, CourseSubject: item.SubjectSubjectName });

                                });
                                this.form.Subjects.value = detail;
                        }
                        );
                }
                );
                
            });

        }
        protected updateInterface() {
            super.updateInterface();

            this.element.find('.add-button').hide();
            if (!this.isEditMode()) {
                
                Master.CurrentAcadamicYearService.GetCurrentAcadamicYear({


                }, response => {


                    this.form.AcadamicYearId.value = response.Id.toString();
                });
            }
            else {
                this.form.Subjects.promotionid = Q.toId(this.form.PromotionId.value);
            }


        }

    }
}