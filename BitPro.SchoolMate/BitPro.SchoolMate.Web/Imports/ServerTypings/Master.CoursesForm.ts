namespace BitPro.SchoolMate.Master {
    export interface CoursesForm {
        Code: Serenity.StringEditor;
        CourseName: Serenity.StringEditor;
        Active: Serenity.BooleanEditor;
        NonAcadamic: Serenity.BooleanEditor;
        CourseSubject: CourseSubjectEditor;
        CourseDivisions: CourseDivisionsEditor;
    }

    export class CoursesForm extends Serenity.PrefixedContext {
        static formKey = 'Master.Courses';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CoursesForm.init)  {
                CoursesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.BooleanEditor;
                var w2 = CourseSubjectEditor;
                var w3 = CourseDivisionsEditor;

                Q.initFormType(CoursesForm, [
                    'Code', w0,
                    'CourseName', w0,
                    'Active', w1,
                    'NonAcadamic', w1,
                    'CourseSubject', w2,
                    'CourseDivisions', w3
                ]);
            }
        }
    }
}
