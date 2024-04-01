
using System.Collections.Generic;
using static BitPro.SchoolMate.Transactions.Pages.ClassWiseAttendanceReport;

namespace BitPro.SchoolMate.Common
{
    public class DashboardPageModel
    {
        public List<Item> Details { get; set; }
        public DashBoradData dashBoradData { get; set; }
        
    }
    public class DashBoradData
    {
        public decimal PaidToday { get; set; }
        public decimal PaidThisMonth { get; set; }
        public int NoOfStudents { get; set; }
        public int NoOfCourses { get; set; }
    }

}