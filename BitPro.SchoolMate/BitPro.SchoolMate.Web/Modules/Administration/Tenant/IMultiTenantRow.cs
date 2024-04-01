using Serenity.Data;

namespace BitPro.SchoolMate
{
    public interface IMultiTenantRow
    {
        Int32Field TenantIdField { get; }
        int? TenantId { get; set; }
    }
}
