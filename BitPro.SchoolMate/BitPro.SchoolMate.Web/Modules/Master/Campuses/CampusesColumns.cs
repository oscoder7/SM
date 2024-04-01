
namespace BitPro.SchoolMate.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.Campuses")]
    [BasedOnRow(typeof(Entities.CampusesRow), CheckNames = true)]
    public class CampusesColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        [EditLink]
        public String Code { get; set; }
        public String Campus { get; set; }
        public String Address { get; set; }
        public String Phone { get; set; }
        public String ContactPerson { get; set; }
        public String Mobile { get; set; }
        public String Email { get; set; }
        public String Website { get; set; }
        public String CountryCode { get; set; }
        public String AreaCode { get; set; }
       // public Int32 TenantId { get; set; }
    }
}