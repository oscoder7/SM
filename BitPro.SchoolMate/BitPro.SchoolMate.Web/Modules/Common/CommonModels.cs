using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BitPro.SchoolMate.Web.Modules.Common
{
    public class DivisionsByPromotionRequest:ServiceRequest
    {
        public int promotionid { get; set; }
    }

    public class SendWhatsappMessageRequest : ServiceRequest
    {
        public string PhoneNumber { get; set; }
        public string Message { get; set; }
    }
}
