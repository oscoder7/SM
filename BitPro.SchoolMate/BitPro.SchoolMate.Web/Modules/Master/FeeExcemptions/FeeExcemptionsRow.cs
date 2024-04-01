
namespace BitPro.SchoolMate.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[FeeExcemptions]")]
    [DisplayName("Fee Excemptions"), InstanceName("Fee Excemptions")]
    [ReadPermission("Master:FeeExcemptions")]
    [ModifyPermission("Master:FeeExcemptions")]
    [LookupScript("Master.FeeExcemptions", Permission = "*", LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class FeeExcemptionsRow : Row, IIdRow,IMultiTenantRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Student"), NotNull, ForeignKey("[dbo].[Students]", "Id"), LeftJoin("jStudent"), TextualField("StudentCode")]
        [LookupEditor(typeof(StudentsRow))]
        public Int32? StudentId
        {
            get { return Fields.StudentId[this]; }
            set { Fields.StudentId[this] = value; }
        }




        [DisplayName("Fee Excempted"), Size(18), Scale(2), NotNull]
        public Decimal? FeeExcempted
        {
            get { return Fields.FeeExcempted[this]; }
            set { Fields.FeeExcempted[this] = value; }
        }
    
        [DisplayName("Tenant Id"), NotNull]
        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        [DisplayName("Student Code"), Expression("jStudent.[StudentName]")]
        public String StudentCode
        {
            get { return Fields.StudentCode[this]; }
            set { Fields.StudentCode[this] = value; }
        }

        [DisplayName("Student Joining Date"), Expression("jStudent.[JoiningDate]")]
        public DateTime? StudentJoiningDate
        {
            get { return Fields.StudentJoiningDate[this]; }
            set { Fields.StudentJoiningDate[this] = value; }
        }

        [DisplayName("Student Joining Course"), Expression("jStudent.[JoiningCourse]")]
        public Int32? StudentJoiningCourse
        {
            get { return Fields.StudentJoiningCourse[this]; }
            set { Fields.StudentJoiningCourse[this] = value; }
        }

        [DisplayName("Student Father Contact Id"), Expression("jStudent.[FatherContactId]")]
        public Int32? StudentFatherContactId
        {
            get { return Fields.StudentFatherContactId[this]; }
            set { Fields.StudentFatherContactId[this] = value; }
        }

        [DisplayName("Student Mother Contact Id"), Expression("jStudent.[MotherContactId]")]
        public Int32? StudentMotherContactId
        {
            get { return Fields.StudentMotherContactId[this]; }
            set { Fields.StudentMotherContactId[this] = value; }
        }

        [DisplayName("Student Student Contact Id"), Expression("jStudent.[StudentContactId]")]
        public Int32? StudentStudentContactId
        {
            get { return Fields.StudentStudentContactId[this]; }
            set { Fields.StudentStudentContactId[this] = value; }
        }

        [DisplayName("Student Campus Id"), Expression("jStudent.[CampusId]")]
        public Int32? StudentCampusId
        {
            get { return Fields.StudentCampusId[this]; }
            set { Fields.StudentCampusId[this] = value; }
        }

        [DisplayName("Student Other Institute"), Expression("jStudent.[OtherInstitute]")]
        public String StudentOtherInstitute
        {
            get { return Fields.StudentOtherInstitute[this]; }
            set { Fields.StudentOtherInstitute[this] = value; }
        }

        [DisplayName("Student Division"), Expression("jStudent.[Division]")]
        public String StudentDivision
        {
            get { return Fields.StudentDivision[this]; }
            set { Fields.StudentDivision[this] = value; } 
        }

        [DisplayName("Student Tenant Id"), Expression("jStudent.[TenantId]")]
        public Int32? StudentTenantId
        {
            get { return Fields.StudentTenantId[this]; }
            set { Fields.StudentTenantId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }
        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }
        //[DisplayName("Course Fee"), NotNull, ForeignKey("[dbo].[CourseFee]", "Id"), LeftJoin("jCourseFee")]
        //[LookupEditor(typeof(CourseFeeRow), CascadeFrom = "CourseId", CascadeField = "CourseId")]
        //public Int32? CourseFeeId
        //{
        //    get { return Fields.CourseFeeId[this]; }
        //    set { Fields.CourseFeeId[this] = value; }
        //}


        [DisplayName("Course Fee"), NotNull, ForeignKey("[dbo].[Fees]", "Id"), LeftJoin("jFee"), TextualField("FullName")]
        [LookupEditor(typeof(FeesRow), InplaceAdd = true)]
        public Int32? CourseFeeId
        {
            get { return Fields.CourseFeeId[this]; }
            set { Fields.CourseFeeId[this] = value; }
        }
         


        [DisplayName("Course"), NotNull, ForeignKey("[dbo].[Courses]", "Id"), LeftJoin("jCourse"), TextualField("CourseCode"), LookupInclude]
        [LookupEditor(typeof(CoursesRow))]
        public Int32? CourseId
        {
            get { return Fields.CourseId[this]; }
            set { Fields.CourseId[this] = value; }
        }
        public static readonly RowFields Fields = new RowFields().Init();

        public FeeExcemptionsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field StudentId;
            public DecimalField FeeExcempted;
            public Int32Field CourseFeeId;
            public Int32Field CourseId;
            public readonly Int32Field TenantId;

            public StringField StudentCode;
            public DateTimeField StudentJoiningDate;
            public Int32Field StudentJoiningCourse;
            public Int32Field StudentFatherContactId;
            public Int32Field StudentMotherContactId;
            public Int32Field StudentStudentContactId;
            public Int32Field StudentCampusId;
            public StringField StudentOtherInstitute;
            public StringField StudentDivision;
            public Int32Field StudentTenantId;


             

 
        }
    }
}
