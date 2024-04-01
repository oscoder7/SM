
namespace BitPro.SchoolMate.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.Students")]
    [BasedOnRow(typeof(Entities.StudentsRow), CheckNames = true)]
    public class StudentsForm
    {
        [Category("Student Details")]
        [HalfWidth]
        public Int32 CampusId { get; set; }
        [HalfWidth]
        public String Code { get; set; }
        [HalfWidth]
        public String StudentName { get; set; }
        [HalfWidth]
        public Int32 Gender { get; set; }
        [HalfWidth]
        public DateTime DOB { get; set; }
        [HalfWidth]
        public String IDNO { get; set; }
   
        [HalfWidth]
        public Int32 FatherContactId { get; set; }
        [HalfWidth]
        public Int32 MotherContactId { get; set; }
        [HalfWidth]
        public Int32 StudentContactId { get; set; }

        [Category("Course Details")]
        [HalfWidth]
        public DateTime JoiningDate { get; set; }

        [HalfWidth]
        public Int32 JoiningCourse { get; set; }
        [HalfWidth]
        public Int32 JoiningDivisionId { get; set; }
       
        [HalfWidth]
        public String OtherInstitute { get; set; }
        [HalfWidth]
        public String Division { get; set; }
        [HalfWidth]
        public Int32? AdmissionAcadamicYearId { get; set; }
        [HalfWidth]
        public Int32? AdmissionFeeTermId { get; set; }
        [Category("Other Details")]
        [HalfWidth]
        public String LandMark { get; set; }
        [HalfWidth]
        public String BusStop { get; set; }
        public String Remarks { get; set; }

        [Category("Current Courses")]
        public List<Int32> CurrentCourses { get; set; }

        [Category("Photo")]
        public String Photo { get; set; }

        [Tab("Transportation")]
        [Category("Transportation")]
        [HalfWidth]
        public Int32 TranportationFeeId { get; set; }
        [HalfWidth]
        public Int32 FromAcadamicYearId { get; set; }
        [HalfWidth]
        public Int32 FromFeeTermId { get; set; }

        //public Int32 TenantId { get; set; }
    }
}