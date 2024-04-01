
namespace BitPro.SchoolMate.Transactions {

    @Serenity.Decorators.registerClass()
    export class FeeCollectionDialog extends Serenity.EntityDialog<FeeCollectionRow, any> {
        protected getFormKey() { return FeeCollectionForm.formKey; }
        protected getIdProperty() { return FeeCollectionRow.idProperty; }
        protected getLocalTextPrefix() { return FeeCollectionRow.localTextPrefix; }
        protected getService() { return FeeCollectionService.baseUrl; }
        protected getDeletePermission() { return FeeCollectionRow.deletePermission; }
        protected getInsertPermission() { return FeeCollectionRow.insertPermission; }
        protected getUpdatePermission() { return FeeCollectionRow.updatePermission; }

        protected form = new FeeCollectionForm(this.idPrefix);
        constructor() {
            super();
           // this.form = new FeeCollectionForm(this.idPrefix);
            //(this.form.FeeAllocations.view as any).onDataChanged.subscribe(() => {
            //    var total = 0;
            //    for (var k of this.form.FeeAllocations.getItems()) {
            //        total += k.Collected || 0;
            //    }
            //    this.form.TotalAmount.value = total;

            //}
            //);
            this.form.FeeAllocations.element.on('DOMNodeInserted DOMNodeRemoved', () => {
                var total = 0;
                for (var k of this.form.FeeAllocations.getItems()) {
                    total += k.Collected || 0;
                }
                for (var m of this.form.TranportationFee.getItems()) {
                    total += m.Collected || 0;
                }
                this.form.TotalAmount.value = total;
            });
            (this.form.TranportationFee.view as any).onDataChanged.subscribe(() => {
                var total = 0;
                for (var k of this.form.FeeAllocations.getItems()) {
                    total += k.Collected || 0;
                }
                for (var m of this.form.TranportationFee.getItems()) {
                    total += m.Collected || 0;
                }
                this.form.TotalAmount.value = total;
            });
            
            //this.form.StudentId.changeSelect2(e => {
            //    let currentValue = Serenity.EditorUtils.getValue(this.form.StudentId);
            //    //let currentText = Serenity.EnumFormatter.format(MyEnum, Q.toId(currentValue));

            //    //Q.notifySuccess(`You selected ${currentText}, lookup items will be reloaded`);

            //    // clear old value
            //   // this.form.FeeAllocations.studentid = Q.toId(this.form.StudentId.value);
            //    this.form.CourseId.value = null;

            //    // pass value into lookup editor and update items
            //    this.form.CourseId.myId = currentValue;
            //    Transactions.FeeCollectionService.StudentCurrentPromotions({
            //        StudentId: currentValue

            //    }, response => {
            //            // $('#myTable2 tbody').empty();
            //            this.form.CourseId.studentcourse = response,
            //            this.form.CourseId.updateItems();

            //            // select first lookup item after changing
            //            if (this.form.CourseId.items && this.form.CourseId.items.length > 0) {
            //                Serenity.EditorUtils.setValue(this.form.CourseId, this.form.CourseId.items[0].id);
            //                //this.form.FeeAllocations.myPassValue = Q.toId(this.form.CourseId.value);
            //                this.SetFeeDetails();
            //            }
            //            else {
            //                var k = this.form.FeeAllocations.getItems();
            //                k = [];
            //                this.form.FeeAllocations.value = k;
            //            }
            //    }
            //    );
                
            //});
            this.form.PromotionDetailId.changeSelect2(e => {
                
                this.SetFeeDetails();

            });
            this.form.StudentId.changeSelect2(e => {

                var k = this.form.TranportationFee.getItems();
                k = [];
                Transactions.FeeCollectionService.TransportationFeePending({
                    studentid: Q.toId(this.form.StudentId.value),
                }, response => {

                    response.forEach((item, index) => {

                        k.push({ FeeId: item.CourseFeeId, FeeStrctureId: item.FeeStructureId, Collected: 0, Balance: item.FeeAmount, FeeCode: item.FeeCode, TermName: item.TermName });

                    });
                    this.form.TranportationFee.value = k;
                }
                );

            });
        }
        private SetFeeDetails() {
            var k = this.form.FeeAllocations.getItems();
            k = [];
            Transactions.FeeCollectionService.GetStudentCoursePendingFees({
                StudentId: Q.toId(this.form.StudentId.value),
                PromotionDetailIdId: Q.toId(this.form.PromotionDetailId.value),
                acadamicyearid: Q.toId(this.form.AcadamicYearId.value)
                

            }, response => {
                   
                    response.forEach((item, index) => {

                        k.push({ CourseFeeId: item.CourseFeeId, FeeStrctureId: item.FeeStructureId, Collected: 0, Balance: item.FeeAmount, FeeCode: item.FeeCode, TermName: item.TermName });

                    });
                    this.form.FeeAllocations.value = k;
            }
            );
            

        }
        protected updateInterface() {
            super.updateInterface();
            if (!this.isEditMode()) {
                Master.CurrentAcadamicYearService.GetCurrentAcadamicYear({


                }, response => {


                        this.form.AcadamicYearId.value = response.Id.toString();
                });
            }
            
            if (this.isEditMode()) {
                Serenity.EditorUtils.setReadonly(this.form.PromotionDetailId.element, true);
                Serenity.EditorUtils.setReadonly(this.form.StudentId.element, true);
            }
            this.element.find('.add-button').hide();
            this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
        
            let currentValue = Serenity.EditorUtils.getValue(this.form.StudentId);
            //let currentText = Serenity.EnumFormatter.format(MyEnum, Q.toId(currentValue));

            //Q.notifySuccess(`You selected ${currentText}, lookup items will be reloaded`);

            // clear old value
            //this.form.CourseId.value = null;

            // pass value into lookup editor and update items
            //this.form.CourseId.myId = currentValue;
            //this.form.CourseId.isedit = this.isEditMode();
            //Transactions.FeeCollectionService.StudentCurrentPromotions({
            //    StudentId: currentValue

            //}, response => {
            //    // $('#myTable2 tbody').empty();
            //    this.form.CourseId.studentcourse = response,
            //        this.form.CourseId.updateItems();

            //    // select first lookup item after changing
            //        if (this.form.CourseId.items && this.form.CourseId.items.length > 0) {
            //            Serenity.EditorUtils.setValue(this.form.CourseId, this.entity.CourseId);
            //    }
            //}
            //);

        }
       
        protected afterLoadEntity() {
            super.afterLoadEntity();
            if (this.isNew()) {
                Transactions.FeeCollectionService.GetDefaultAccount({

                }, response => {
                        if (response.Id > 0) {
                            this.form.PaymentMethod.value = response.Type.toString();
                            this.form.AccountId.value = response.Id.toString();
                    }

                });
            }
           // this.form.FeeAllocations.myPassValue = this.entity.CourseId;
           // this.form.FeeAllocations.studentid = this.entity.StudentId;
        }
    }
}