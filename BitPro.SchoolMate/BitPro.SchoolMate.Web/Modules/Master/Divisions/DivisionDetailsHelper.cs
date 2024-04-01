namespace BitPro.SchoolMate
{
    using BitPro.SchoolMate.Accounts.Entities;
    using BitPro.SchoolMate.Administration.Entities;
    using BitPro.SchoolMate.Master.Entities;
    using BitPro.SchoolMate.Transactions.Entities;
    using OfficeOpenXml.FormulaParsing.Excel.Functions.DateTime;
    using Serenity;
    using Serenity.Data;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using static MVC.Views.Transactions;

    public class DivisionDetailsHelper
    {
        public List<DivisonResponse> GetDetails(IDbConnection connection, int acid, int divid, int courseid)
        {

            //string qry = "SELECT Id as StudentId,Code as StudentName,case when DivisionId is null then 0 else 1 end as Status FROM(select sd.DivisionId, s.Code, s.Id, d.AcadamicYearId from DivisionStudents sd inner join Divisions d on d.Id= sd.DivisionId  right join (select * from Students where id in(select pd.StudentId from PromotionDetails pd inner join Promotions p on pd.PromotionId=p.Id where IsCompleted=0 and ToCourse="+courseid+")) as  s on sd.StudentId= s.Id) a where(a.DivisionId is null or a.DivisionId = " + divid + ") and(a.AcadamicYearId = " + acid + " or a.AcadamicYearId is null)";
            string qry = "select s.Id as StudentId,s.Code as StudentName,0 as Status from PromotionDetails pd INNER JOIN Promotions p on pd.PromotionId = p.Id inner join Students s on s.Id = pd.StudentId   where pd.IsCompleted = 0 and p.ToCourse = " + courseid + " and pd.StudentId not in(select ds.StudentId from DivisionStudents ds inner join Divisions d on ds.DivisionId = d.Id where d.AcadamicYearId = " + acid + ") union select s.Id as StudentId,Code as StudentName,1 as Status from DivisionStudents ds inner join Students s on s.Id = ds.StudentId where DivisionId = " + divid + "";
            var value = connection.Query<DivisonResponse>(qry);

            return value.ToList();
        }
        public bool UpdateStudentDiv(IDbConnection connection, int studentid, int divid)
        {

            string qry = "insert into DivisionStudents(DivisionId,StudentId) values(" + divid + "," + studentid + ")";
            var value = connection.Query<bool>(qry);

            return true; ;
        }
        public bool DeletetudentDiv(IDbConnection connection, int studentid, int divid)
        {

            string qry = "delete from DivisionStudents where DivisionId=" + divid + " and StudentId=" + studentid + "";
            var value = connection.Query<bool>(qry);

            return true; ;
        }
        public bool UpdatePromtionDetails(IDbConnection connection, int studentid, int promotiondetailid)
        {

            string qry = "update PromotionDetails set IsCompleted=0 where id=(select top(1) id from PromotionDetails where StudentId=" + studentid + " and id<" + promotiondetailid + " order by Id desc)";
            var value = connection.Query<bool>(qry);

            return true; ;
        }
        public List<CourseStudentResponse> GetCourseStudents(IDbConnection connection, PromotionRequest request)
        {
            int userid = 0;
            int.TryParse(Authorization.UserId, out userid);
            string qry = "select pd.StudentId,s.StudentName as StudentName,'0' as type,pd.Id as promotiondetailid from Promotions p inner join PromotionDetails pd on p.Id=pd.PromotionId inner join Students s on s.Id=pd.StudentId where ToCourse=" + request.FromCouseId + " and AcadamicYearId=(select top 1 Id from  AcadamicYear where  TenantId=(select TenantId from Users where userid = " + userid + ") and id<" + request.AcadamicYearId + " order by Id desc) and IsCompleted =0 union select pd.StudentId,s.StudentName as StudentName,'1' as type,pd.Id as promotiondetailid from Promotions p inner join PromotionDetails pd on p.Id = pd.PromotionId inner join Students s on s.Id = pd.StudentId where ToCourse = " + request.ToCouseId + " and AcadamicYearId = (select top 1 Id from AcadamicYear where TenantId=(select TenantId from Users where userid = " + userid + ") and id < " + request.AcadamicYearId + " order by Id desc) and IsCompleted = 0";
            var value = connection.Query<CourseStudentResponse>(qry);

            return value.ToList();
        }
        public List<CourseStudentResponse> GetPromosionDetails(IDbConnection connection, int promotionId)
        {

            string qry = "select pd.StudentId AS StudentId,S.StudentName AS StudentName,PD.Id AS promotiondetailid  from PromotionDetails pd inner join Students s on s.Id=pd.StudentId  where pd.PromotionId=" + promotionId + "";
            var value = connection.Query<CourseStudentResponse>(qry);

            return value.ToList();
        }
        public List<CourseDivisionsRow> GetCouseDivisons(IDbConnection connection, int courseid)
        {

            string qry = "select * from CourseDivisions where CourseId="+courseid+"";
            var value = connection.Query<CourseDivisionsRow>(qry);

            return value.ToList();
        }
        public VoucherNoResponse GetVoucherNo(IDbConnection connection, int vouchertype)
        {
            int userid = 0;
            int.TryParse(Authorization.UserId, out userid);
            string qry = "select isnull(max(VNo),0) as voucherno from JournalEntries where VType = " + vouchertype+ " and TenantId=(select TenantId from Users where userid=" + userid + ")";
            var value = connection.Query<VoucherNoResponse>(qry);
            var valueres = value.ToList()[0];
            valueres.voucherno = valueres.voucherno + 1;
            return valueres;
        }
        public int GetCount(IDbConnection connection, int promotiondetailId, int studentid)
        {

            string qry = "select COUNT(*) from PromotionDetails where Id>" + promotiondetailId + " and StudentId=" + studentid + "";
            var value = connection.Query<int>(qry);
            foreach (var i in value)
            {
                return i;
            }
            return 0;
        }
        public List<StudentCurrentPromotionResponce> GetCurrentPromotions(IDbConnection connection, int studentid)
        {

            string qry = "select ToCourse as CourseId,c.Code AS CourseCode from promotiondetails pd inner join Promotions p on p.Id=pd.PromotionId inner join Courses c on c.Id=p.ToCourse where pd.IsCompleted=0 and pd.StudentId=" + studentid + "";
            var value = connection.Query<StudentCurrentPromotionResponce>(qry);

            return value.ToList();
        }
        public List<CourseFeeStructureResponce> GetCourseFeeStructure(IDbConnection connection, CourseFeeStructure request)
        {

            string qry = "";//"select fs.Id as FeeStructureId,ft.TermName as TermName  from CourseFee cf inner join  FeeStructure fs on fs.FeeId=cf.FeeId inner join FeeTerms ft on ft.Id =fs.FeeTermId where cf.id=" + request.CourseFeeId+ " and fs.Id not in(select fa.FeeStrctureId from FeeAllocation fa inner join FeeCollection fc on fa.FeeCollectionId=fc.Id where StudentId="+request.StudentId+" and CourseId="+request.CourseId+" and CourseFeeId="+request.CourseFeeId+")";
            var value = connection.Query<CourseFeeStructureResponce>(qry);

            return value.ToList();
        }
        public Master.Entities.AcadamicYearRow GetCurrentAcadamicYear()
        {
            int userid = 0;
            int.TryParse(Authorization.UserId, out userid);
            var connection = SqlConnections.NewFor<Master.Entities.AcadamicYearRow>();
            string qry = "SELECT TOP 1 * FROM AcadamicYear where TenantId=(select TenantId from Users where userid=" + userid + ") ORDER BY Id DESC";
            var value = connection.Query<Master.Entities.AcadamicYearRow>(qry);
            var z = new Master.Entities.AcadamicYearRow();
            foreach (var item in value)
            {
                z = item;
            }
            return z;
        }
        public Transactions.Entities.PromotionsRow GetPromotion(int acdid, int courseid)
        {
            var connection = SqlConnections.NewFor<Transactions.Entities.PromotionsRow>();
            string qry = "select * from Promotions where ToCourse=" + courseid + " and AcadamicYearId=" + acdid + "";
            var value = connection.Query<Transactions.Entities.PromotionsRow>(qry);
            var z = new Transactions.Entities.PromotionsRow();
            foreach (var item in value)
            {
                z = item;
            }
            return z;
        }
        public Transactions.Entities.PromotionDetailsRow GetAdmissionPromotion(int studentid,int courseid)
        {
            var connection = SqlConnections.NewFor<Transactions.Entities.PromotionDetailsRow>();
            string qry = "select pd.*,p.ToCourse as PromotionToCourse,p.AcadamicYearId as PromotionAcadamicYearId from PromotionDetails pd inner join Promotions p on pd.PromotionId=p.Id where pd.StudentId = " + studentid + " and p.ToCourse="+courseid+" and pd.PromotionType = 2";
            var value = connection.Query<Transactions.Entities.PromotionDetailsRow>(qry);
            var z = new Transactions.Entities.PromotionDetailsRow();
            foreach (var item in value)
            {
                z = item;
            }
            return z;
        }
        public CourseFeeAmountResponse GetCourseFeeAmount(IDbConnection connection, CourseFeeAmountRequest request)
        {

            string qry = " SELECT (select FeeAmount from FeeStructure fs inner join CourseFee cf on fs.FeeId=cf.FeeId where cf.Id=" + request.CourseFeeId + " and fs.Id=" + request.FeeSturctureId + ") AS FeeAmount, (select FeeExcempted from FeeExcemptions where CourseFeeId=" + request.CourseFeeId + " and StudentId=" + request.StudentId + ") as FeeExcemptionsPer";
            var value = connection.Query<CourseFeeAmountResponse>(qry);
            foreach (var i in value)
            {
                var excemptioamount = (i.FeeAmount / 100) * i.FeeExcemptionsPer;
                i.Amount = i.FeeAmount - excemptioamount;
                return i;
            }

            return new CourseFeeAmountResponse();
        }
        public bool GetAttendance(IDbConnection connection, AttendanceRequest request)
        {
            var f = GetCurrentAcadamicYear();
            if (f != null)
            {
                int userid = 0;
                int.TryParse(Authorization.UserId, out userid);
                // string qry = "INSERT INTO Attandance(StudentId, Date, AcadamicYearId,Status,TenantId) select Id," + request.date.ToSqlDate()+","+f.Id+ ",1,(select TenantId from Users where userid=" + userid + ") from Students where TenantId=(select TenantId from Users where userid="+userid+")";
                string qry = "INSERT INTO Attandance(PromotionDetailId, Date, AcadamicYearId, Status, TenantId) select pd.Id," + request.date.ToSqlDate() + "," + f.Id + ",1,(select TenantId from Users where userid = " + userid + ") from PromotionDetails pd inner join Promotions p on pd.PromotionId = p.id where p.TenantId = (select TenantId from Users where userid = " + userid + ") and pd.IsCompleted=0";
                var value = connection.Query<bool>(qry);
                string qry2 = "INSERT INTO Attandance(StaffId, Date, AcadamicYearId,Status,TenantId) select Id," + request.date.ToSqlDate() + "," + f.Id + ",1,(select TenantId from Users where userid=" + userid + ") from Staffs where TenantId=(select TenantId from Users where userid=" + userid + ")";
                var value2 = connection.Query<bool>(qry2);
            }
            return true;
        }
        public bool UpdateAttendance(IDbConnection connection, int attenid, int status)
        {
            string qry = "update Attandance set Status=" + status + " where id=" + attenid + "";
            var value = connection.Query<bool>(qry);
            return true;
        }
        public List<Transactions.Entities.AttandanceRow> GetStudentsAttendances(IDbConnection connection, int courseid, DateTime date, int divid)
        {
            string sr1 = "";
            string sr2 = "";
            if (divid > 0)
            {
                sr1 = " inner join DivisionStudents ds ON pd.Id= ds.PromotionDetailId";
                sr2 = " and ds.DivisionId= " + divid + "";
            }
            string qry = "select a.Id as Id,a.Status as Status,s.StudentName as StaffCode from Attandance a inner join PromotionDetails pd   on a.PromotionDetailId=pd.Id inner Join Students s on s.Id=pd.StudentId "+sr1+" where   a.Date=" + date.ToSqlDate() + " and pd.PromotionId=" + courseid + " "+sr2+"";
            var value = connection.Query<Transactions.Entities.AttandanceRow>(qry);
            return value.ToList();
        }
        public List<CourseFeeResponce> GetStudentCoursePendingFees(IDbConnection connection, CourseFeeStructure request)
        {

            string qry = "select cf.Id AS CourseFeeId,ft.Id FeeStructureId, ft.FeeAmount as FeeAmount,f.Code as FeeCode,t.TermName as TermName,t.Id as TermId,ft.AcadamicYearId,c.Id as CourseId from CourseFee cf inner join FeeStructure ft on cf.FeeId = ft.FeeId inner join FeeTerms t on t.Id = ft.FeeTermId inner join Fees f on f.Id = cf.FeeId left join Courses c on c.Id=cf.CourseId where cf.CourseId = (select p.ToCourse from PromotionDetails pd inner Join Promotions p on p.Id = pd.PromotionId where pd.Id = " + request.PromotionDetailIdId + ") and ft.AcadamicYearId = (select p.AcadamicYearId from PromotionDetails pd inner Join Promotions p on p.Id = pd.PromotionId where pd.Id = " + request.PromotionDetailIdId + ")";
            var value = connection.Query<CourseFeeResponce>(qry).ToList();
            string qry2 = "select fa.CourseFeeId,fa.FeeStrctureId as FeeStructureId,Collected as FeeAmount from FeeAllocation fa inner join FeeCollection fc on fa.FeeCollectionId=fc.Id where fc.PromotionDetailId=" + request.PromotionDetailIdId + "";
            var collected = connection.Query<CourseFeeResponce>(qry2).ToList();
            string qry3 = "select * from FeeExcemptions where StudentId=" + request.StudentId + "";
            var excem = connection.Query<Master.Entities.FeeExcemptionsRow>(qry3).ToList();
            List<CourseFeeResponce> pendinglist = new List<CourseFeeResponce>();

          

            var rows = AdmissionRow.Fields;
           var st= connection.List<AdmissionRow>(q => q
            .SelectTableFields()
            .Where(rows.StudentId == request.StudentId && rows.AdmissionFeeTermId.IsNotNull()));

            foreach(var row in st)
            {
                value.RemoveAll(i => i.CourseId == row.JoiningCourse && i.AcadamicYearId == row.AcadamicYearId && i.TermId < row.AdmissionFeeTermId);
            }

            foreach (var i in value)
            {
                var ex = excem.Find(l => l.CourseFeeId == i.CourseFeeId);
                if (ex != null)
                {
                    i.FeeAmount = i.FeeAmount - ((i.FeeAmount / 100) * ex.FeeExcempted ?? 0);
                }
                var k = collected.FindAll(l => l.FeeStructureId == i.FeeStructureId && l.CourseFeeId == i.CourseFeeId);
                if (k.Count == 0)
                {
                    if (i.FeeAmount > 0)
                        pendinglist.Add(i);
                }
                else
                {
                    var sum = k.Sum(g => g.FeeAmount);
                    if ((i.FeeAmount - sum) > 0)
                    {
                        i.FeeAmount = (i.FeeAmount - sum);
                        pendinglist.Add(i);
                    }
                }
            }
            return pendinglist;
        }
        public bool UpdateAttendanceLisr(IDbConnection connection, UpdateListAttendanceRequest request)
        {
            string r = "";
            int c = 0;
            foreach (var i in request.date)
            {
                if (c != 0)
                {
                    r = r + ",";
                }
                r = r + i.Id;
                c = 1;
            }
            string qry = "update Attandance set Status=" + request.status + " where Id in (" + r + ")";
            var value = connection.Query<bool>(qry);
            return true;
        }
        public List<CourseFeeResponse> GetPendingFeeByCourse(IDbConnection connection, CourseFeeRequest courseFeeRequest)
        {
            
            string qry = "select s.*,s.StudentName as StudentContactName,cf.Name as FatherContactName,cf.Whatsapp as FatherContactWhatsapp,pd.Id as CampusAreaId,cam.Campus as Campus,cam.Address as CampusAddress,cam.Phone as CampusPhone from PromotionDetails pd inner join Students s on s.Id=pd.StudentId inner join Promotions p on p.Id=pd.PromotionId  left join Contacts cf on cf.Id=s.FatherContactId inner join Campuses cam on cam.Id=s.CampusId where pd.PromotionId=" + courseFeeRequest.courseid+"";
            var value = connection.Query<Master.Entities.StudentsRow>(qry);
            List<CourseFeeResponse> listcoursefeeresponse = new List<CourseFeeResponse>();
            foreach (var i in value)
            {
                var k = GetCurrentAcadamicYear();
                if (courseFeeRequest.all)
                {
                    string qry2 = "select pd.Id as PromotionDetailIdId,p.AcadamicYearId as AcadamicYearId from PromotionDetails pd inner join Promotions p on p.Id=pd.PromotionId where pd.StudentId=" + i.Id + "";
                    var studentpromotions = connection.Query<dynamic>(qry2);
                    CourseFeeResponse courseFeeResponse = new CourseFeeResponse();
                    courseFeeResponse.student = i;
                    courseFeeResponse.pendingfees = new List<CourseFeeResponce>();
                    foreach (var item in studentpromotions)
                    {
                        CourseFeeStructure request = new CourseFeeStructure();
                        request.PromotionDetailIdId = item.PromotionDetailIdId ?? 0;
                        request.StudentId = (int)i.Id;
                        request.acadamicyearid = item.AcadamicYearId;
                        var x = GetStudentCoursePendingFees(connection, request);
                        if (x.Count > 0)
                        {
                            if (courseFeeRequest.termid > 0)
                            {
                                x.RemoveAll(j => j.TermId > courseFeeRequest.termid);
                            }
                            
                            
                        }
                        courseFeeResponse.pendingfees.AddRange(x);
                        
                    }
                    TransportationFeeRequest transportationFeeRequest = new TransportationFeeRequest();
                    transportationFeeRequest.studentid = i.Id??0;
                    var tranpending = GetStudentTransportaionPendingFees(connection, transportationFeeRequest);
                    if (tranpending.Count > 0)
                    {
                        if (courseFeeRequest.termid > 0)
                        {
                            tranpending.RemoveAll(j => j.TermId > courseFeeRequest.termid);
                        }


                    }
                    courseFeeResponse.pendingfees.AddRange(tranpending);
                    listcoursefeeresponse.Add(courseFeeResponse);
                }
                else
                {


                    CourseFeeStructure request = new CourseFeeStructure();
                    request.PromotionDetailIdId = i.CampusAreaId ?? 0;
                    request.StudentId = (int)i.Id;
                    request.acadamicyearid = k.Id ?? 0;
                    var x = GetStudentCoursePendingFees(connection, request);
                    if (x.Count > 0)
                    {
                        if (courseFeeRequest.termid > 0)
                        {
                            x.RemoveAll(j => j.TermId > courseFeeRequest.termid);
                        }
                        CourseFeeResponse courseFeeResponse = new CourseFeeResponse();
                        courseFeeResponse.student = i;
                        courseFeeResponse.pendingfees = x;
                        listcoursefeeresponse.Add(courseFeeResponse);
                    }
                }

            }
            return listcoursefeeresponse;
        }
        public List<LastAcadamicTermsResponse> GetLastAcadamicTerms(IDbConnection connection, int userid)
        {

            string qry = "select  * from AcadamicYear ay inner join FeeTerms ft on ay.Id=Ft.AcadamicYearId where ay.Id=(Select Top(1) id from AcadamicYear where TenantId=(select TenantId from Users where userid=" + userid + ") order by Id desc)";
            var value = connection.Query<LastAcadamicTermsResponse>(qry);
            return value.ToList();
        }
        public List<AcadamicYearTermsResponse> GetTermsOfCurrentAcadamicYear(IDbConnection connection)
        {
            var k = GetCurrentAcadamicYear();
            string qry = "SELECT Id as TermId," + k.Id + " as AcadamicYearId,TermName as TermName,'" + k.Code + "' as AcadamicYear FROM FeeTerms where AcadamicYearId=" + k.Id + "";
            var value = connection.Query<AcadamicYearTermsResponse>(qry);
            return value.ToList();
        }
        public List<CourseStudentsMarkResponse> GetStudentMarksByCourse(IDbConnection connection, CourseStudentsMarkRequest request)
        {
            int userid = 0;
            int.TryParse(Authorization.UserId, out userid);
            string qry = "select smd.StudentId as StudentId,sm.ExamId as ExamId,sub.Id as SubjectId,s.StudentName,ex.ExamName,sm.ExamDate,sub.SubjectName,smd.Mark,cs.MaxMarks from StudentMarksDetails smd inner Join  Students s on s.Id=smd.StudentId inner Join StudentMarks sm on sm.Id=smd.StudentMarksId inner Join CourseSubjects cs on cs.Id=sm.CourseSubjectId inner join Subjects sub on sub.Id=cs.SubJectId inner join Exams ex on ex.Id=sm.ExamId where smd.StudentId in (select pd.StudentId from PromotionDetails pd inner join Promotions p on pd.PromotionId=p.id where p.ToCourse=" + request.courseid + " and IsCompleted=0) and sm.TenantId=(select TenantId from Users where userid=" + userid + ") and sm.CourseId=" + request.courseid + "";
            var value = connection.Query<CourseStudentsMarkResponse>(qry);
            var x = value.ToList().GroupBy(i => i.StudentId, k => k.ExamId).ToList();
            return value.ToList();
        }
        public List<PromotionCurrentAcadamicYearResponse> GetPromotionCurrentAcadamicYear(IDbConnection connection)
        {
            var f = GetCurrentAcadamicYear();
            //string qry = "select p.id as promotionid,c.CourseName as CousrseName from Promotions p inner join Courses c on c.Id=p.ToCourse where AcadamicYearId=" + f.Id + "";
            //var value = connection.Query<PromotionCurrentAcadamicYearResponse>(qry);
            //return value.ToList();

            return GetPromotionByAcadamicYear(connection,f.Id??0);
        }
        public List<PromotionCurrentAcadamicYearResponse> GetPromotionByAcadamicYear(IDbConnection connection,int acadamicyearid)
        {
            string qry = "select p.id as promotionid,c.CourseName as CousrseName from Promotions p inner join Courses c on c.Id=p.ToCourse where AcadamicYearId=" + acadamicyearid + "";
            var value = connection.Query<PromotionCurrentAcadamicYearResponse>(qry);
            return value.ToList();


        }
        public List<FeeTermsRow> GetTermsByAcadamicYear(IDbConnection connection, int acadamicyearid)
        {
            string qry = "select * from FeeTerms where AcadamicYearId=" + acadamicyearid + "";
            var value = connection.Query<FeeTermsRow>(qry);
            return value.ToList();


        }
        public List<AcadamicYearRow> GetListOfAcadamicYears(IDbConnection connection)
        {
            int userid = 0;
            int.TryParse(Authorization.UserId, out userid);
            var f = GetCurrentAcadamicYear();
            string qry = "Select * from AcadamicYear where TenantId=(select TenantId from Users where userid=" + userid + ")";
            var value = connection.Query<AcadamicYearRow>(qry);
            return value.ToList();


        }
        public List<ExamMarkResponse> GetExamMark(IDbConnection connection, ExamMarkRequest examMarkRequest)
        {
            int userid = 0;
            int.TryParse(Authorization.UserId, out userid);
            var f = GetCurrentAcadamicYear();
            string qry = "select s.Id as StudentID,E.Id AS ExamId,su.Id as SubjectId,cam.Campus,cam.Address,cam.Phone,co.Name as FatherName,s.StudentName,c.CourseName as CourseName,e.ExamName,su.SubjectName,smd.Mark,(select MaxMark from ExamMaxMarks em inner join ExamCourses ec on ec.Id=em.ExamCoursesId where ec.ExamId=E.Id and ec.PromotionId=sm.PromotionId and em.CourseSubjectId= cs.Id) as MaxMark from StudentMarks sm inner Join StudentMarksSubjects sms on  sm.Id=sms.StudentMarksId inner join StudentMarksDetails smd on smd.StudentMarksSubjectsId=sms.Id  inner join Exams e on e.Id = sm.ExamId inner join PromotionDetails pd on pd.Id = smd.PromotionDetailId inner join Students s on s.Id = pd.StudentId inner join CourseSubjects cs on cs.Id = sms.CourseSubjectId inner join Subjects su on su.Id = cs.SubjectId inner join Courses c on c.Id=cs.CourseId left join Contacts co on co.Id=s.FatherContactId inner join Campuses cam on s.CampusId=cam.Id where sm.PromotionId = " + examMarkRequest.promotionid + "";
            var value = connection.Query<ExamMarkResponse>(qry);
            return value.ToList();


        }
        public List<PromotionDivisionResponse> GetPromotionDetailsByPromotion(IDbConnection connection, ExamMarkRequest examMarkRequest)
        {
            int userid = 0;
            int.TryParse(Authorization.UserId, out userid);
            var f = GetCurrentAcadamicYear();
            string qry = "select pd.Id as promotiondetailsid,s.StudentName+'('+s.Code+')' as StudentName from PromotionDetails pd inner Join Students s on s.Id=pd.StudentId where PromotionId=" + examMarkRequest.promotionid + " and  pd.id not in (select ds.PromotionDetailId from DivisionStudents ds inner Join Divisions d on d.Id=ds.DivisionId where d.PromotionId=" + examMarkRequest.promotionid+")";
            var value = connection.Query<PromotionDivisionResponse>(qry);
            return value.ToList();


        }
        public DivisionsRow GetExsistingDivisionByCode(IDbConnection connection, int  promotionid,int joiningdivid)
        {

            string qry = "select * from Divisions where PromotionId="+promotionid+ " and DivisionCode=(select DivisionCode from CourseDivisions where id="+ joiningdivid+")";
            var value = connection.Query<DivisionsRow>(qry);
            foreach(var k in value)
            {
                return k;
            }
            return null;


        }
        public List<CourseDivisionsRow> GetDefaultCourseDivsions(IDbConnection connection, int courseid)
        {

            string qry = "select * from CourseDivisions where CourseId="+courseid+"";
            var value = connection.Query<CourseDivisionsRow>(qry);
            return value.ToList();


        }
      
        public CampusesRow GetDefaultCampus(IDbConnection connection)
        {
            int user = 0;
            int.TryParse(Authorization.UserId,out user);
            string qry = "select DefaultCampusId from Users where UserId="+user+"";
            var value = connection.Query<UserRow>(qry);
            var camp= new CampusesRow();
            foreach (var item in value)
            {
                camp.Id = item.DefaultCampusId;
                
            }
            return camp;
        }
        public AccountsRow GetDefaultAccount(IDbConnection connection)
        {
            int userid = 0;
            int.TryParse(Authorization.UserId, out userid);
            string qry = "select top 1 * from Accounts where IsDefault=1 and  TenantId=(select TenantId from Users where userid=" + userid + ")";
            var value = connection.Query<AccountsRow>(qry);
            var camp = new AccountsRow();
            foreach (var item in value)
            {
                return item;

            }
            return camp;
        }
        public List<AcadamicYearCourseSubjectResponse> GetAcadamicYearCourseSubjects(IDbConnection connection, AcadamicYearCourseSubjectsRequest acadamicYearCourseSubjectsRequest)
        {
            
            string qry = "select p.id as promotionid,c.CourseName as CousrseName,cs.Id as SubjectId,s.SubjectName as SubjectName,cs.MaxMarks as MaxMark from Promotions p inner join Courses c on c.Id=p.ToCourse inner join CourseSubjects cs on  cs.CourseId=c.Id inner join Subjects s on s.Id=cs.SubjectId where AcadamicYearId=" + acadamicYearCourseSubjectsRequest.acadamicyearid+"";
            var value = connection.Query<AcadamicYearSubjectResponse>(qry);
            var list= value.GroupBy(i => i.promotionid).ToList();
            List< AcadamicYearCourseSubjectResponse> acadamicYearCourseSubjectResponse = new List<AcadamicYearCourseSubjectResponse>();
            foreach (var item in list)
            {
                var x= item.ToList();
                AcadamicYearCourseSubjectResponse response = new AcadamicYearCourseSubjectResponse();
                response.courseSubjectResponses = new List<CourseSubjectResponse>();
                foreach (var y in x)
                {
                    response.CousrseName = y.CousrseName;
                    response.promotionid = y.promotionid;
                    response.courseSubjectResponses.Add(new CourseSubjectResponse { SubjectName = y.SubjectName, SubjectId = y.SubjectId,MaxMark=y.MaxMark });
                }

                acadamicYearCourseSubjectResponse.Add(response);

            }
            return acadamicYearCourseSubjectResponse;
        }
        public MaximumMarkResponse GetMaximumMark(IDbConnection connection, MaximumMarkRequest request)
        {

            string qry = "select MaxMark from ExamMaxMarks em inner join ExamCourses ec on em.ExamCoursesId=ec.Id where ec.PromotionId="+request.promotionid+ " and em.CourseSubjectId=" + request.coursesubjectid + "";
            var value = connection.Query<MaximumMarkResponse>(qry);
            foreach(var i in value)
            {
                return i;
            }
            return new MaximumMarkResponse();


        }
        public List<CourseFeeResponce> GetStudentTransportaionPendingFees(IDbConnection connection, TransportationFeeRequest request)
        {

            string qry = "select * from Students where id="+request.studentid+"";
            var value = connection.Query<StudentsRow>(qry).ToList();
            List<CourseFeeResponce> pendinglist = new List<CourseFeeResponce>();
            foreach (var item in value)
            {
                
                string qry1 = "select f.Id as CourseFeeId,fs.Id FeeStructureId, fs.FeeAmount as FeeAmount,f.Code as FeeCode,ft.TermName as TermName,ft.Id as TermId from FeeStructure fs inner join FeeTerms ft on ft.id=fs.FeeTermId inner join Fees f on f.id=fs.FeeId where FeeTermId>=" + (item.FromFeeTermId??0) +" and FeeId="+(item.TranportationFeeId??0)+"";
                var all = connection.Query<CourseFeeResponce>(qry1).ToList();
                string qry2 = "select * from FeeAllocationTranportation fat inner join FeeCollection fc on fat.FeeCollectionId=fc.Id where StudentId="+ request.studentid+"";
                var collected = connection.Query<FeeAllocationTranportationRow>(qry2).ToList();
                foreach (var i in all)
                {
                   
                    var k = collected.FindAll(l => l.FeeStrctureId == i.FeeStructureId && l.FeeId == i.CourseFeeId);
                    if (k.Count == 0)
                    {
                        if (i.FeeAmount > 0)
                            pendinglist.Add(i);
                    }
                    else
                    {
                        var sum = k.Sum(g => g.Collected);
                        if ((i.FeeAmount - sum) > 0)
                        {
                            i.FeeAmount = (i.FeeAmount - sum??0);
                            pendinglist.Add(i);
                        }
                    }
                }
                return pendinglist;
            }
            return pendinglist;
        }
        public SettingsRow GetConfig(IDbConnection connection, ConfigRequest configRequest)
        {
            int userid = 0;
            int.TryParse(Authorization.UserId, out userid);
            //string qry = "SELECT Id as StudentId,Code as StudentName,case when DivisionId is null then 0 else 1 end as Status FROM(select sd.DivisionId, s.Code, s.Id, d.AcadamicYearId from DivisionStudents sd inner join Divisions d on d.Id= sd.DivisionId  right join (select * from Students where id in(select pd.StudentId from PromotionDetails pd inner join Promotions p on pd.PromotionId=p.Id where IsCompleted=0 and ToCourse="+courseid+")) as  s on sd.StudentId= s.Id) a where(a.DivisionId is null or a.DivisionId = " + divid + ") and(a.AcadamicYearId = " + acid + " or a.AcadamicYearId is null)";
            string qry = "SELECT [Name],[Type],[ValueString],[ValueDate],[ValueNumber],[ValueBool] FROM [Config] where [Name]='"+ configRequest.ConfigName + "' and TenantId=(select TenantId from Users where userid=" + userid + ")";
            var value = connection.Query<SettingsRow>(qry);
            if (value.Count() == 0)
            {
                return null;
            }
            return value.ToList()[0];
        }
        public int[] StudentGridCurrentCourses(IDbConnection connection, CurrentCourseRequest currentCourseRequest)
        {
            int userid = 0;
            int.TryParse(Authorization.UserId, out userid);
            var cond = "";
            
            for(int i=0;i<currentCourseRequest.promotionid.Count;i++)
            {
                cond = cond + currentCourseRequest.promotionid[i];
                if((i+1)< currentCourseRequest.promotionid.Count)
                {
                    cond = cond + ",";
                }
            }
           
            //string qry = "SELECT Id as StudentId,Code as StudentName,case when DivisionId is null then 0 else 1 end as Status FROM(select sd.DivisionId, s.Code, s.Id, d.AcadamicYearId from DivisionStudents sd inner join Divisions d on d.Id= sd.DivisionId  right join (select * from Students where id in(select pd.StudentId from PromotionDetails pd inner join Promotions p on pd.PromotionId=p.Id where IsCompleted=0 and ToCourse="+courseid+")) as  s on sd.StudentId= s.Id) a where(a.DivisionId is null or a.DivisionId = " + divid + ") and(a.AcadamicYearId = " + acid + " or a.AcadamicYearId is null)";
            string qry = "select pd.Id from Promotions p inner join PromotionDetails pd on pd.PromotionId=p.Id  where ToCourse in ("+cond+") and pd.IsCompleted=0";
            var value = connection.Query<int>(qry);
             var  z=value.ToArray();
            return z;
            //CurrentCourseRequest currentCourseRequestresp = new CurrentCourseRequest();
            //currentCourseRequestresp.promotionid = value.ToList();
            //return currentCourseRequestresp;
        }
        public List<SalaryResponse> GetSalary(IDbConnection connection, SalaryRequest salaryRequest)
        {
            int userid = 0;
            int.TryParse(Authorization.UserId, out userid);
            //string qry = "SELECT Id as StudentId,Code as StudentName,case when DivisionId is null then 0 else 1 end as Status FROM(select sd.DivisionId, s.Code, s.Id, d.AcadamicYearId from DivisionStudents sd inner join Divisions d on d.Id= sd.DivisionId  right join (select * from Students where id in(select pd.StudentId from PromotionDetails pd inner join Promotions p on pd.PromotionId=p.Id where IsCompleted=0 and ToCourse="+courseid+")) as  s on sd.StudentId= s.Id) a where(a.DivisionId is null or a.DivisionId = " + divid + ") and(a.AcadamicYearId = " + acid + " or a.AcadamicYearId is null)";
            string qry = @"select s.Id,s.Code,s.StaffName,SalaryAmount,DaysCount,DailyWage,(select sum(case when Status=2 then 1 else 0 end) as TotalPresent  from Attandance where  StaffId=s.Id and Date >=" + salaryRequest.start.ToSqlDate() + @" and Date <=" + salaryRequest.to.ToSqlDate() + @") as TotalPresent,(select sum(case when Status=1 then 1 else 0 end) as TotalAbsente  from Attandance where  StaffId=s.Id and Date >=" + salaryRequest.start.ToSqlDate() + @" and Date <=" + salaryRequest.to.ToSqlDate()+ @") as TotalAbsente 
                           from Staffs s where s.TenantId = (select TenantId from Users where userid=" + userid + ") and s.SalaryAmount>0";
            var value = connection.Query<SalaryResponse>(qry);
           foreach(var item in value)
            {
                item.payableamount = item.SalaryAmount;
                if (item.DaysCount > 0)
                {
                    var count = ((salaryRequest.to - salaryRequest.start).Days+1) - item.TotalAbsente;
                    if (count< item.DaysCount)
                    {
                        if (item.DailyWage > 0)
                        {
                          item.payableamount=item.payableamount-  item.DailyWage * (item.DaysCount - count);
                        }
                    }
                }
            }
            return value.ToList();
        }
    }
}

   


