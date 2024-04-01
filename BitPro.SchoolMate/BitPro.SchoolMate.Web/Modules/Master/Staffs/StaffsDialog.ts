
namespace BitPro.SchoolMate.Master {

    @Serenity.Decorators.registerClass()
    export class StaffsDialog extends Serenity.EntityDialog<StaffsRow, any> {
        protected getFormKey() { return StaffsForm.formKey; }
        protected getIdProperty() { return StaffsRow.idProperty; }
        protected getLocalTextPrefix() { return StaffsRow.localTextPrefix; }
        protected getNameProperty() { return StaffsRow.nameProperty; }
        protected getService() { return StaffsService.baseUrl; }
        protected getDeletePermission() { return StaffsRow.deletePermission; }
        protected getInsertPermission() { return StaffsRow.insertPermission; }
        protected getUpdatePermission() { return StaffsRow.updatePermission; }

        protected form = new StaffsForm(this.idPrefix);

 
        constructor() {
            super();

            this.form = new StaffsForm(this.idPrefix);
            this.form.IsTeacher.change(e => {

                if (this.form.IsTeacher.value == true) {

                   
                    Serenity.EditorUtils.setReadOnly(this.form.StaffSubjects, false);
                }
                else {
                    Serenity.EditorUtils.setReadOnly(this.form.StaffSubjects, true);
                }

            })

            
        }
        protected updateInterface() {
            super.updateInterface();
            if (this.form.IsTeacher.value == true) {


                Serenity.EditorUtils.setReadOnly(this.form.StaffSubjects, false);
            }
            else {
                Serenity.EditorUtils.setReadOnly(this.form.StaffSubjects, true);
            }
           
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew()) {
               
                this.setCode();
            }
        }
        protected setCode() {


            Administration.SystemSettingsService.List(
                {}
                , response => {
                    var val = Q.trimToNull(this.form.Code.value);

                    // we will only get next number when customer ID is empty or 1 character in length
                    if (!val || val.length <= 1) {

                        // if no customer ID yet (new record mode probably) use 'C' as a prefix
                        var prefix = (val || response.Entities[0].StudentCodePrefix);
                        if (prefix == null) {
                            prefix = "";
                        }
                        // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                        StaffsService.GetNextNumber({
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

    }
}