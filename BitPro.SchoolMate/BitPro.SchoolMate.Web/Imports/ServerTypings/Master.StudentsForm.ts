namespace BitPro.SchoolMate.Master {
    export interface StudentsForm {
        CampusId: Serenity.LookupEditor;
        Code: Serenity.StringEditor;
        StudentName: Serenity.StringEditor;
        Gender: Serenity.EnumEditor;
        DOB: Serenity.DateEditor;
        IDNO: Serenity.StringEditor;
        FatherContactId: Serenity.LookupEditor;
        MotherContactId: Serenity.LookupEditor;
        StudentContactId: Serenity.LookupEditor;
        JoiningDate: Serenity.DateEditor;
        JoiningCourse: Serenity.LookupEditor;
        JoiningDivisionId: Serenity.LookupEditor;
        OtherInstitute: Serenity.StringEditor;
        Division: Serenity.StringEditor;
        AdmissionAcadamicYearId: Serenity.LookupEditor;
        AdmissionFeeTermId: Serenity.LookupEditor;
        LandMark: Serenity.StringEditor;
        BusStop: Serenity.StringEditor;
        Remarks: Serenity.TextAreaEditor;
        CurrentCourses: Serenity.LookupEditor;
        Photo: Serenity.ImageUploadEditor;
        TranportationFeeId: Serenity.LookupEditor;
        FromAcadamicYearId: Serenity.LookupEditor;
        FromFeeTermId: Serenity.LookupEditor;
    }

    export class StudentsForm extends Serenity.PrefixedContext {
        static formKey = 'Master.Students';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!StudentsForm.init)  {
                StudentsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.EnumEditor;
                var w3 = s.DateEditor;
                var w4 = s.TextAreaEditor;
                var w5 = s.ImageUploadEditor;

                Q.initFormType(StudentsForm, [
                    'CampusId', w0,
                    'Code', w1,
                    'StudentName', w1,
                    'Gender', w2,
                    'DOB', w3,
                    'IDNO', w1,
                    'FatherContactId', w0,
                    'MotherContactId', w0,
                    'StudentContactId', w0,
                    'JoiningDate', w3,
                    'JoiningCourse', w0,
                    'JoiningDivisionId', w0,
                    'OtherInstitute', w1,
                    'Division', w1,
                    'AdmissionAcadamicYearId', w0,
                    'AdmissionFeeTermId', w0,
                    'LandMark', w1,
                    'BusStop', w1,
                    'Remarks', w4,
                    'CurrentCourses', w0,
                    'Photo', w5,
                    'TranportationFeeId', w0,
                    'FromAcadamicYearId', w0,
                    'FromFeeTermId', w0
                ]);
            }
        }
    }
}
