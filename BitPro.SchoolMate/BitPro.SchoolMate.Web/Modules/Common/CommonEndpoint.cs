
namespace BitPro.SchoolMate.Common.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
   
    using MyRow =Transactions.Entities.PromotionsRow;
    using System.Collections.Generic;
    using BitPro.SchoolMate.Master.Entities;
    using BitPro.SchoolMate.Web.Modules.Common;
    using Twilio;
    using Twilio.Rest.Api.V2010.Account;
    using Twilio.Types;

    [Route("Services/Common/Common/[action]")]
    [ConnectionKey(typeof(MyRow))]
    public class CommonController : ServiceEndpoint
    {
        public ListResponse<DivisionsRow> DivisionsList(IDbConnection connection, DivisionsByPromotionRequest request)
        {
           var r= connection.List<DivisionsRow>(q => q
            .Select()
            .SelectTableFields(DivisionsRow.Fields.DivisionCode)
            .Where(DivisionsRow.Fields.PromotionId == request.promotionid));
            var res = new ListResponse<DivisionsRow>();
            res.Entities = r;
            return res;
        }

        public bool SendWhatsappMessage(IDbConnection connection, SendWhatsappMessageRequest request)
        {
            var accountSid = "ACf5aa484c6255ddb82db9cd079668fed4";
            var authToken = "63b2551f13b58a0e188d2b0042ca70d8";
            TwilioClient.Init(accountSid, authToken);

            var messageOptions = new CreateMessageOptions(
              new PhoneNumber("whatsapp:"+request.PhoneNumber+""));
            //new PhoneNumber("whatsapp:+918606873086")
            //new PhoneNumber("whatsapp:+96878307075")
            messageOptions.From = new PhoneNumber("whatsapp:+14155238886");
            messageOptions.Body = request.Message;


            var message = MessageResource.Create(messageOptions);
            return true;
        }

    }
}
