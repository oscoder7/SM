
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class StudentsDialog extends Serenity.EntityDialog<StudentsRow, any> {
        protected getFormKey() { return StudentsForm.formKey; }
        protected getIdProperty() { return StudentsRow.idProperty; }
        protected getLocalTextPrefix() { return StudentsRow.localTextPrefix; }
        protected getNameProperty() { return StudentsRow.nameProperty; }
        protected getService() { return StudentsService.baseUrl; }
        protected getDeletePermission() { return StudentsRow.deletePermission; }
        protected getInsertPermission() { return StudentsRow.insertPermission; }
        protected getUpdatePermission() { return StudentsRow.updatePermission; }

        protected form = new StudentsForm(this.idPrefix);
        constructor() {
            super();

            this.form = new StudentsForm(this.idPrefix);
            this.form.CampusId.changeSelect2(e => {
               
                

            })
            this.form.TranportationFeeId.changeSelect2(e => {

                var id = Q.toId(this.form.TranportationFeeId.value);
                if (id > 0) {
                    Master.CurrentAcadamicYearService.GetCurrentAcadamicYear({


                    }, response => {


                        this.form.FromAcadamicYearId.value = response.Id.toString();
                    });
                }

            })

        }
        protected setCode() {

            var id = Q.toId(this.form.CampusId.value);
            //if (id > 0) {
            //var campus = Master.CampusesRow.getLookup().itemById[id];

            Administration.SystemSettingsService.List(
                {}
                , response => {
                    var val = Q.trimToNull(this.form.Code.value);
                    if (!val || val.length <= 1) {

                        // if no customer ID yet (new record mode probably) use 'C' as a prefix
                        var prefix = (val || response.Entities[0].StudentCodePrefix);
                        if (prefix == null) {
                            prefix = "";
                        }
                        // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                        StudentsService.GetNextNumber({
                            Prefix: prefix,
                            Length: response.Entities[0].StudentCodeLength // we want service to search for and return serials of 5 in length
                        }, response => {
                            this.form.Code.value = response.Serial;

                            // this is to mark numerical part after prefix
                            (this.form.Code.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);

                        });
                    }
                });
          

        }
        protected updateInterface() {

            // by default cloneButton is hidden in base UpdateInterface method
            super.updateInterface();

            // here we show it if it is edit mode (not new)
            this.cloneButton.toggle(this.isEditMode());
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew())
            {
                StudentsService.GetDefaultCampus({
                  
                }, response => {
                        if (response.Id > 0) {
                            this.form.CampusId.value = response.Id.toString();
                           
                        }
                    
                });
                this.setCode();
            }
        }
        private getNextNumber() {

            
        }
        /**
         * Overriding this method is optional to customize cloned entity
         */
        protected getCloningEntity() {
            var clone = super.getCloningEntity();

            // add (Clone) suffix if it's not already added
            var suffix = ' (Clone)';
            if (!Q.endsWith(clone.StudentName || '', suffix)) {
                clone.StudentName = (clone.StudentName || '') + suffix;
            }

            // it's better to clear image for this sample
            // otherwise we would have to create a temporary copy of it
            // and upload
            clone.IDNO = null;

            clone.DOB = null;
            clone.Photo = null;
            clone.StudentName = null;
            clone.Code = null;
            clone.CurrentCourses = null;
            return clone;
        }

    }
}