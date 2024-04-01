
namespace BitPro.SchoolMate
{
    using BitPro.SchoolMate.Administration.Entities;
    using Serenity;
    using Serenity.Data;
    using System.Data;
    using System.Linq;

    public static class GetNextNumberHelper
    {
        public static GetNextNumberResponse GetNextNumber(IDbConnection connection, GetNextNumberRequest request,
            Field field)
        {

            int userid = 0;
            int.TryParse(Authorization.UserId, out userid);
            var fld = UserRow.Fields;
            SqlQuery query = new SqlQuery();
            var id = connection.Query<int>(query
              .From(fld)
              .Select(fld.TenantId)
              //.Where(new Criteria(fld.SiteId) == 17)
              .Where(new Criteria(fld.UserId) == userid)).FirstOrDefault();
            var prefix = request.Prefix ?? "";

            var max = connection.Query<string>(new SqlQuery()
                .From(field.Fields)
                .Select(Sql.Max(field.Expression))
                .Where(
                     new Criteria("TenantId") == id
                    &&
                    field.StartsWith(prefix) &&
                    field >= prefix.PadRight(request.Length, '0') &&
                    field <= prefix.PadRight(request.Length, '9')))
                .FirstOrDefault();

            var response = new GetNextNumberResponse();

            long l;
            response.Number = max == null ||
                !long.TryParse(max.Substring(prefix.Length), out l) ? 1 : l + 1;

            response.Serial = prefix + response.Number.ToString()
                .PadLeft(request.Length - prefix.Length, '0');

            return response;
        }
    }
}