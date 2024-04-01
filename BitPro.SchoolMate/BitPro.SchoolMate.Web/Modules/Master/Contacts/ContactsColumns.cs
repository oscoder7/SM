
namespace BitPro.SchoolMate.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.Contacts")]
    [BasedOnRow(typeof(Entities.ContactsRow), CheckNames = true)]
    public class ContactsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 Id { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Phone { get; set; }
        public String Email { get; set; }
        public String Whatsapp { get; set; }
        public String Address1 { get; set; }
        public String Address2 { get; set; }
        public String NationalityCode { get; set; }
    }
}