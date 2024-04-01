namespace BitPro.SchoolMate
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System.Collections.Generic;
    using System.Data.SqlClient;

    [LookupScript("CustomLookup.MyCustomLookupAbcXyz", Expiration = -1, Permission = "*")]
    public class MyCustomLookup : Serenity.Web.LookupScript
    {
        public MyCustomLookup()
        {
            this.IdField = "Id";
            this.TextField = "CourseName";
            this.getItems = this.GetItems;
        }

        protected virtual IEnumerable<dynamic> GetItems()
        { 

           using (var con = SqlConnections.NewFor<BitPro.SchoolMate.Transactions.Entities.PromotionsRow>())
            {
                var p = Master.Entities.CoursesRow.Fields.As("p");

                var query = new SqlQuery()
                    .Select(p.Id)
                    .Select(p.CourseName)
                    .From(p);

                return con.Query(query);
            }
        }
    }
}
