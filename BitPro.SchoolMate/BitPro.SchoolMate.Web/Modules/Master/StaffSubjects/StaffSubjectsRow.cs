
namespace BitPro.SchoolMate.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[StaffSubjects]")]
    [DisplayName("Staff Subjects"), InstanceName("Staff Subjects")]
    [ReadPermission("Master:Staffs")]
    [ModifyPermission("Master:Staffs")]
    public sealed class StaffSubjectsRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Staff"), NotNull, ForeignKey("[dbo].[Staffs]", "Id"), LeftJoin("jStaff"), TextualField("StaffCode")]
        public Int32? StaffId
        {
            get { return Fields.StaffId[this]; }
            set { Fields.StaffId[this] = value; }
        }

        [DisplayName("Subject"), NotNull, ForeignKey("[dbo].[Subjects]", "Id"), LeftJoin("jSubject"), TextualField("SubjectCode")]
        public Int32? SubjectId
        {
            get { return Fields.SubjectId[this]; }
            set { Fields.SubjectId[this] = value; }
        }

        [DisplayName("Staff Code"), Expression("jStaff.[Code]")]
        public String StaffCode
        {
            get { return Fields.StaffCode[this]; }
            set { Fields.StaffCode[this] = value; }
        }

        [DisplayName("Staff Staff Name"), Expression("jStaff.[StaffName]")]
        public String StaffStaffName
        {
            get { return Fields.StaffStaffName[this]; }
            set { Fields.StaffStaffName[this] = value; }
        }

        [DisplayName("Staff Contact Id"), Expression("jStaff.[ContactId]")]
        public Int32? StaffContactId
        {
            get { return Fields.StaffContactId[this]; }
            set { Fields.StaffContactId[this] = value; }
        }

        [DisplayName("Staff Is Teacher"), Expression("jStaff.[IsTeacher]")]
        public Boolean? StaffIsTeacher
        {
            get { return Fields.StaffIsTeacher[this]; }
            set { Fields.StaffIsTeacher[this] = value; }
        }

        [DisplayName("Staff Remarks"), Expression("jStaff.[Remarks]")]
        public String StaffRemarks
        {
            get { return Fields.StaffRemarks[this]; }
            set { Fields.StaffRemarks[this] = value; }
        }

        [DisplayName("Staff Daily Wage"), Expression("jStaff.[DailyWage]")]
        public Decimal? StaffDailyWage
        {
            get { return Fields.StaffDailyWage[this]; }
            set { Fields.StaffDailyWage[this] = value; }
        }

        [DisplayName("Subject Code"), Expression("jSubject.[Code]")]
        public String SubjectCode
        {
            get { return Fields.SubjectCode[this]; }
            set { Fields.SubjectCode[this] = value; }
        }

        [DisplayName("Subject Subject Name"), Expression("jSubject.[SubjectName]")]
        public String SubjectSubjectName
        {
            get { return Fields.SubjectSubjectName[this]; }
            set { Fields.SubjectSubjectName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public StaffSubjectsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field StaffId;
            public Int32Field SubjectId;

            public StringField StaffCode;
            public StringField StaffStaffName;
            public Int32Field StaffContactId;
            public BooleanField StaffIsTeacher;
            public StringField StaffRemarks;
            public DecimalField StaffDailyWage;

            public StringField SubjectCode;
            public StringField SubjectSubjectName;
        }
    }
}
