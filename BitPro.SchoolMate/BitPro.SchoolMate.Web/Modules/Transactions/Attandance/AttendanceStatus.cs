using System.ComponentModel;

namespace BitPro.SchoolMate
{
    public enum AttendanceStatus
    {
        [Description("Absente")]
        Value1 = 1,
        [Description("Present")]
        Value2 = 2,
        [Description("Holiday")]
        Value3 = 3,

    }
}
