namespace BitPro.SchoolMate.Master {
    export interface StudentCurrentCoursesForm {
        StudentId: Serenity.IntegerEditor;
        CourseId: Serenity.IntegerEditor;
    }

    export class StudentCurrentCoursesForm extends Serenity.PrefixedContext {
        static formKey = 'Master.StudentCurrentCourses';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!StudentCurrentCoursesForm.init)  {
                StudentCurrentCoursesForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(StudentCurrentCoursesForm, [
                    'StudentId', w0,
                    'CourseId', w0
                ]);
            }
        }
    }
}
