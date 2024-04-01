namespace BitPro.SchoolMate.Master {
    export interface StaffsForm {
        Code: Serenity.StringEditor;
        StaffName: Serenity.StringEditor;
        ContactId: Serenity.LookupEditor;
        IsTeacher: Serenity.BooleanEditor;
        JoiningDate: Serenity.DateEditor;
        Qualification: Serenity.StringEditor;
        StaffSubjects: Serenity.LookupEditor;
        Remarks: Serenity.TextAreaEditor;
        DailyWage: Serenity.DecimalEditor;
        SalaryAmount: Serenity.DecimalEditor;
        DaysCount: Serenity.IntegerEditor;
    }

    export class StaffsForm extends Serenity.PrefixedContext {
        static formKey = 'Master.Staffs';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!StaffsForm.init)  {
                StaffsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.BooleanEditor;
                var w3 = s.DateEditor;
                var w4 = s.TextAreaEditor;
                var w5 = s.DecimalEditor;
                var w6 = s.IntegerEditor;

                Q.initFormType(StaffsForm, [
                    'Code', w0,
                    'StaffName', w0,
                    'ContactId', w1,
                    'IsTeacher', w2,
                    'JoiningDate', w3,
                    'Qualification', w0,
                    'StaffSubjects', w1,
                    'Remarks', w4,
                    'DailyWage', w5,
                    'SalaryAmount', w5,
                    'DaysCount', w6
                ]);
            }
        }
    }
}
