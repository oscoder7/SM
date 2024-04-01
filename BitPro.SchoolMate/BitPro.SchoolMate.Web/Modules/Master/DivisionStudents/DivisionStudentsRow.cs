
namespace BitPro.SchoolMate.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[DivisionStudents]")]
    [DisplayName("Division Students"), InstanceName("Division Students")]
    [ReadPermission("Transactions:Promotions")]
    [ModifyPermission("Transactions:Promotions")]
    public sealed class DivisionStudentsRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Division"), NotNull, ForeignKey("[dbo].[Divisions]", "Id"), LeftJoin("jDivision"), TextualField("DivisionDivisionCode"),LookupInclude]
        public Int32? DivisionId
        {
            get { return Fields.DivisionId[this]; }
            set { Fields.DivisionId[this] = value; }
        }

        //[DisplayName("Student"), NotNull, ForeignKey("[dbo].[Students]", "Id"), LeftJoin("jStudent"), TextualField("StudentCode")]
        //public Int32? StudentId
        //{
        //    get { return Fields.StudentId[this]; }
        //    set { Fields.StudentId[this] = value; }
        //}

        [DisplayName("Division Course Id"), Expression("jDivision.[CourseId]")]
        public Int32? DivisionCourseId
        {
            get { return Fields.DivisionCourseId[this]; }
            set { Fields.DivisionCourseId[this] = value; }
        }

        [DisplayName("Division Teacher Id"), Expression("jDivision.[TeacherId]")]
        public Int32? DivisionTeacherId
        {
            get { return Fields.DivisionTeacherId[this]; }
            set { Fields.DivisionTeacherId[this] = value; }
        }

        [DisplayName("Division Division Code"), Expression("jDivision.[DivisionCode]")]
        public String DivisionDivisionCode
        {
            get { return Fields.DivisionDivisionCode[this]; }
            set { Fields.DivisionDivisionCode[this] = value; }
        }

        [DisplayName("Division Acadamic Year Id"), Expression("jDivision.[AcadamicYearId]")]
        public Int32? DivisionAcadamicYearId
        {
            get { return Fields.DivisionAcadamicYearId[this]; }
            set { Fields.DivisionAcadamicYearId[this] = value; }
        }
        [DisplayName("Promotion Detail"), NotNull, ForeignKey("[dbo].[PromotionDetails]", "Id"), LeftJoin("jPromotionDetail"), TextualField("StudentName"), ReadOnly(true)]
        [Transactions.DepartmentEditor]
        public Int32? PromotionDetailId
        {
            get { return Fields.PromotionDetailId[this]; }
            set { Fields.PromotionDetailId[this] = value; }
        }
        [DisplayName("Division Tenant Id"), Expression("jDivision.[TenantId]")]
        public Int32? DivisionTenantId
        {
            get { return Fields.DivisionTenantId[this]; }
            set { Fields.DivisionTenantId[this] = value; }
        }
        [DisplayName("Student"), Expression("jStudents.[StudentName]"), MinSelectLevel(SelectLevel.List)]
        public String Student
        {
            get { return Fields.Student[this]; }
            set { Fields.Student[this] = value; }
        }
        [DisplayName("Promotion Detail Promotion Id"), Expression("jPromotionDetail.[PromotionId]")]
        public Int32? PromotionDetailPromotionId
        {
            get { return Fields.PromotionDetailPromotionId[this]; }
            set { Fields.PromotionDetailPromotionId[this] = value; }
        }
       
        [DisplayName("Promotion Detail Student Id"), Expression("jPromotionDetail.[StudentId]"), ForeignKey("[dbo].[Students]", "Id"), LeftJoin("jStudents")]
        public Int32? PromotionDetailStudentId
        {
            get { return Fields.PromotionDetailStudentId[this]; }
            set { Fields.PromotionDetailStudentId[this] = value; }
        }

        [DisplayName("Promotion Detail Is Completed"), Expression("jPromotionDetail.[IsCompleted]")]
        public Boolean? PromotionDetailIsCompleted
        {
            get { return Fields.PromotionDetailIsCompleted[this]; }
            set { Fields.PromotionDetailIsCompleted[this] = value; }
        }

        [DisplayName("Promotion Detail Promotion Type"), Expression("jPromotionDetail.[PromotionType]")]
        public Int32? PromotionDetailPromotionType
        {
            get { return Fields.PromotionDetailPromotionType[this]; }
            set { Fields.PromotionDetailPromotionType[this] = value; }
        }
        //[DisplayName("Student Code"), Expression("jStudent.[Code]")]
        //public String StudentCode
        //{
        //    get { return Fields.StudentCode[this]; }
        //    set { Fields.StudentCode[this] = value; }
        //}

        //[DisplayName("Student Joining Date"), Expression("jStudent.[JoiningDate]")]
        //public DateTime? StudentJoiningDate
        //{
        //    get { return Fields.StudentJoiningDate[this]; }
        //    set { Fields.StudentJoiningDate[this] = value; }
        //}

        //[DisplayName("Student Joining Course"), Expression("jStudent.[JoiningCourse]")]
        //public Int32? StudentJoiningCourse
        //{
        //    get { return Fields.StudentJoiningCourse[this]; }
        //    set { Fields.StudentJoiningCourse[this] = value; }
        //}

        //[DisplayName("Student Father Contact Id"), Expression("jStudent.[FatherContactId]")]
        //public Int32? StudentFatherContactId
        //{
        //    get { return Fields.StudentFatherContactId[this]; }
        //    set { Fields.StudentFatherContactId[this] = value; }
        //}

        //[DisplayName("Student Mother Contact Id"), Expression("jStudent.[MotherContactId]")]
        //public Int32? StudentMotherContactId
        //{
        //    get { return Fields.StudentMotherContactId[this]; }
        //    set { Fields.StudentMotherContactId[this] = value; }
        //}

        //[DisplayName("Student Student Contact Id"), Expression("jStudent.[StudentContactId]")]
        //public Int32? StudentStudentContactId
        //{
        //    get { return Fields.StudentStudentContactId[this]; }
        //    set { Fields.StudentStudentContactId[this] = value; }
        //}

        //[DisplayName("Student Campus Id"), Expression("jStudent.[CampusId]")]
        //public Int32? StudentCampusId
        //{
        //    get { return Fields.StudentCampusId[this]; }
        //    set { Fields.StudentCampusId[this] = value; }
        //}

        //[DisplayName("Student Other Institute"), Expression("jStudent.[OtherInstitute]")]
        //public String StudentOtherInstitute
        //{
        //    get { return Fields.StudentOtherInstitute[this]; }
        //    set { Fields.StudentOtherInstitute[this] = value; }
        //}

        //[DisplayName("Student Division"), Expression("jStudent.[Division]")]
        //public String StudentDivision
        //{
        //    get { return Fields.StudentDivision[this]; }
        //    set { Fields.StudentDivision[this] = value; }
        //}

        //[DisplayName("Student Tenant Id"), Expression("jStudent.[TenantId]")]
        //public Int32? StudentTenantId
        //{
        //    get { return Fields.StudentTenantId[this]; }
        //    set { Fields.StudentTenantId[this] = value; }
        //}

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DivisionStudentsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field DivisionId;
            public Int32Field PromotionDetailId;
            //public Int32Field StudentId;

            public Int32Field DivisionCourseId;
            public Int32Field DivisionTeacherId;
            public StringField DivisionDivisionCode;
            public Int32Field DivisionAcadamicYearId;
            public Int32Field DivisionTenantId;

            public StringField Student;

            public Int32Field PromotionDetailPromotionId;
            public Int32Field PromotionDetailStudentId;
            public BooleanField PromotionDetailIsCompleted;
            public Int32Field PromotionDetailPromotionType;

            //public StringField StudentCode;
            //public DateTimeField StudentJoiningDate;
            //public Int32Field StudentJoiningCourse;
            //public Int32Field StudentFatherContactId;
            //public Int32Field StudentMotherContactId;
            //public Int32Field StudentStudentContactId;
            //public Int32Field StudentCampusId;
            //public StringField StudentOtherInstitute;
            //public StringField StudentDivision;
            //public Int32Field StudentTenantId;
        }
    }
}
