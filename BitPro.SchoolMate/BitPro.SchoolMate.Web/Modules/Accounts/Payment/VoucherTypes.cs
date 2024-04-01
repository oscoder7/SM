

using System.ComponentModel;

namespace BitPro.SchoolMate
{
    public enum VoucherTypes
    {
        [Description("Receipt")]
        Value1 = 1,
        [Description("Payment")]
        Value2 = 2,
        [Description("Contra")]
        Value3 = 3,

    }
}
