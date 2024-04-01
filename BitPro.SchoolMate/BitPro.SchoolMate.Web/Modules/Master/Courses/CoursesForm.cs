
namespace BitPro.SchoolMate.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.Courses")]
    [BasedOnRow(typeof(Entities.CoursesRow), CheckNames = true)]
    public class CoursesForm
    {
        [HalfWidth]
        public String Code { get; set; }
        [HalfWidth]
        public String CourseName { get; set; }
        [HalfWidth]
        public Boolean Active { get; set; }
        [HalfWidth]
        public Boolean NonAcadamic { get; set; }
        [Category("Course Subjects")]
        [CourseSubjectEditor]
        public List<Entities.CourseSubjectsRow> CourseSubject { get; set; }
        [Category("Default Course Divisions")]
        [CourseDivisionsEditor]
        public List<Entities.CourseDivisionsRow> CourseDivisions { get; set; }

    }
}