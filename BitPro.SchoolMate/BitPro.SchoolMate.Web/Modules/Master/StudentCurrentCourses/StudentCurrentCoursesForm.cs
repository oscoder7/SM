
namespace BitPro.SchoolMate.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.StudentCurrentCourses")]
    [BasedOnRow(typeof(Entities.StudentCurrentCoursesRow), CheckNames = true)]
    public class StudentCurrentCoursesForm
    {
        public Int32 StudentId { get; set; }
        public Int32 CourseId { get; set; }
    }
}