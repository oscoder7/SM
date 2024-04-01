
using System.ComponentModel;

namespace BitPro.SchoolMate
{
    public enum LedgerTypes
    {
        [Description("Assets")]
        Value1 = 1,
        [Description("Liability")]
        Value2 = 2,
        [Description("Direct Income")]
        Value3 = 3,
        [Description("Direct Expenses")]
        Value4 = 4,
        [Description("Indirect Income")]
        Value5 = 5,
        [Description("Indirect Expenses")]
        Value6 = 6,

    }
}
