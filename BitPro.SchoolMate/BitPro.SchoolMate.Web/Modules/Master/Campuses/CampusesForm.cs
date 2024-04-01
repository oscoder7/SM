
namespace BitPro.SchoolMate.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.Campuses")]
    [BasedOnRow(typeof(Entities.CampusesRow), CheckNames = true)]
    public class CampusesForm
    {
        [HalfWidth]
        public String Code { get; set; }
        [HalfWidth]
        public String Campus { get; set; }
        public String Address { get; set; }
        [HalfWidth]
        public String Phone { get; set; }
        [HalfWidth]
        public String ContactPerson { get; set; }
        [HalfWidth]
        public String Mobile { get; set; }
        [HalfWidth]
        public String Email { get; set; }
        [HalfWidth]
        public String Website { get; set; }
        [HalfWidth]
        public Int32 CountryId { get; set; }
        [HalfWidth]
        public Int32 AreaId { get; set; }
        [HalfWidth]
        public Int32 CodeLength { get; set; }
        [HalfWidth]
        public String Student_Prefix { get; set; }
        //[HalfWidth]
        //public Boolean IsDefault { get; set; }
    }
}