namespace BitPro.SchoolMate.Master {
    export interface FeeStructureForm {
        AcadamicYearId: Serenity.LookupEditor;
        FeeTermId: Serenity.LookupEditor;
        FeeAmount: Serenity.DecimalEditor;
    }

    export class FeeStructureForm extends Serenity.PrefixedContext {
        static formKey = 'Master.FeeStructure';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FeeStructureForm.init)  {
                FeeStructureForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(FeeStructureForm, [
                    'AcadamicYearId', w0,
                    'FeeTermId', w0,
                    'FeeAmount', w1
                ]);
            }
        }
    }
}
