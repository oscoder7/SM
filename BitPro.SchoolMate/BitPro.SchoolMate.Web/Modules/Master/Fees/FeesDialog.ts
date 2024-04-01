
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class FeesDialog extends Serenity.EntityDialog<FeesRow, any> {
        protected getFormKey() { return FeesForm.formKey; }
        protected getIdProperty() { return FeesRow.idProperty; }
        protected getLocalTextPrefix() { return FeesRow.localTextPrefix; }
        protected getNameProperty() { return FeesRow.nameProperty; }
        protected getService() { return FeesService.baseUrl; }
        protected getDeletePermission() { return FeesRow.deletePermission; }
        protected getInsertPermission() { return FeesRow.insertPermission; }
        protected getUpdatePermission() { return FeesRow.updatePermission; }

        protected form = new FeesForm(this.idPrefix);
        constructor() {
            super();

            this.form = new FeesForm(this.idPrefix);
            this.form.IsTranportation.change(e => {
               
                

            })


        }
        protected afterLoadEntity() {
            super.afterLoadEntity();
            if (!this.isEditMode()) {
                Master.FeesService.GetTermsOfCurrentAcadamicYear({


                }, response => {
                    var k = this.form.FeeStructures.getItems();
                   
                    response.forEach((item, index) => {

                        k.push({ FeeTermId: item.TermId, AcadamicYearId: item.AcadamicYearId, FeeTermTermName: item.TermName, AcadamicYearCode: item.AcadamicYear, FeeAmount: 0 });

                    });
                    this.form.FeeStructures.value = k;
                });
            }
            else {
                Master.CurrentAcadamicYearService.GetCurrentAcadamicYear({


                }, response => {

                        var k = this.form.FeeStructures.getItems();
                        var li = k.filter(i => i.AcadamicYearId == response.Id);
                        if (li.length <= 0) {
                            Master.FeesService.GetTermsOfCurrentAcadamicYear({


                            }, response => {
                                var k = this.form.FeeStructures.getItems();
                                response.forEach((item, index) => {

                                    k.push({ FeeTermId: item.TermId, AcadamicYearId: item.AcadamicYearId, FeeTermTermName: item.TermName, AcadamicYearCode: item.AcadamicYear, FeeAmount: 0 });

                                });
                                this.form.FeeStructures.value = k;
                            });
                        }
                    //this.view.endUpdate();

                });
                //var k = this.entity.FeeStructures.filter(i => i.AcadamicYearId == 2);
            }

        }

    }
}