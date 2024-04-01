
namespace BitPro.SchoolMate.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.Contacts")]
    [BasedOnRow(typeof(Entities.ContactsRow), CheckNames = true)]
    public class ContactsForm
    {
        public String Name { get; set; }
        public String Phone { get; set; }
        public String Email { get; set; }
        public String Whatsapp { get; set; }
        public String Address1 { get; set; }
        public String Address2 { get; set; }
        public Int32 Nationality { get; set; }

        
    }
}