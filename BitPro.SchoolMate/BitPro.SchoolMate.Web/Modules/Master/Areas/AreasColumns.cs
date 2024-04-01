
namespace BitPro.SchoolMate.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.Areas")]
    [BasedOnRow(typeof(Entities.AreasRow), CheckNames = true)]
    public class AreasColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        [EditLink]
        public String Code { get; set; }
        public String AreaName { get; set; }
        public String CountryCode { get; set; }
        //public Int32 TenantId { get; set; }
    }
}