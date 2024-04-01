namespace BitPro.SchoolMate.Master {
    export interface FeesForm {
        Code: Serenity.StringEditor;
        FeeName: Serenity.StringEditor;
        AnnualFee: Serenity.DecimalEditor;
        DebitAccountHeadId: Serenity.LookupEditor;
        IsTranportation: Serenity.BooleanEditor;
        CourseFee: Serenity.LookupEditor;
        FeeStructures: FeeStructureEditor;
    }

    export class FeesForm extends Serenity.PrefixedContext {
        static formKey = 'Master.Fees';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FeesForm.init)  {
                FeesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.LookupEditor;
                var w3 = s.BooleanEditor;
                var w4 = FeeStructureEditor;

                Q.initFormType(FeesForm, [
                    'Code', w0,
                    'FeeName', w0,
                    'AnnualFee', w1,
                    'DebitAccountHeadId', w2,
                    'IsTranportation', w3,
                    'CourseFee', w2,
                    'FeeStructures', w4
                ]);
            }
        }
    }
}
