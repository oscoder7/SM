
namespace BitPro.SchoolMate.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.Students")]
    [BasedOnRow(typeof(Entities.StudentsRow), CheckNames = true)]
    public class StudentsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        [EditLink,SortOrder(0)]
        public String Code { get; set; }
        [EditLink]
        public String StudentName { get; set; }
        public Int32 Gender { get; set; }
        public String  IDNO { get; set; }
        public DateTime DOB { get; set; }
        public String BusStop { get; set; }
        public DateTime JoiningDate { get; set; }
        public String JoiningCourseCode { get; set; }
        public String FatherContactName { get; set; }
        public String FatherContactPhone { get; set; }
        public String MotherContactName { get; set; }
        public String StudentContactName { get; set; }
        public String CampusCode { get; set; }
        public String OtherInstitute { get; set; }
        public String Division { get; set; }
        [GenreListFormatter]
        public List<Int32> CurrentCourses { get; set; }
        //[PromotionFormatter]
     //  public Int32Field Promotions { get; set; }
        //public Int32 TenantId { get; set; }
    }
}