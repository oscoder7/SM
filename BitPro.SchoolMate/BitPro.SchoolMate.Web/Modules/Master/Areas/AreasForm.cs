
namespace BitPro.SchoolMate.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.Areas")]
    [BasedOnRow(typeof(Entities.AreasRow), CheckNames = true)]
    public class AreasForm
    {
        public String Code { get; set; }
        public String AreaName { get; set; }
        public Int32 CountryId { get; set; }
       
    }
}