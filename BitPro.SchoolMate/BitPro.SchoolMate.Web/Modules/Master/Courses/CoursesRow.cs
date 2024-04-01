
namespace BitPro.SchoolMate.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("[dbo].[Courses]")]
    [DisplayName("Courses"), InstanceName("Courses")]
    [ReadPermission("Master:Courses")]
    [ModifyPermission("Master:Courses")]
    [LookupScript("Master.Courses", Permission = "*", LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class CoursesRow : Row, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Code"), Size(200), NotNull, QuickSearch]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }

        [DisplayName("Course Name"), Size(200), NotNull,LookupInclude]
        public String CourseName
        {
            get { return Fields.CourseName[this]; }
            set { Fields.CourseName[this] = value; }
        }

        [DisplayName("Active")]
        public Boolean? Active
        {
            get { return Fields.Active[this]; }
            set { Fields.Active[this] = value; }
        }

        [DisplayName("Non Acadamic")]
        public Boolean? NonAcadamic
        {
            get { return Fields.NonAcadamic[this]; }
            set { Fields.NonAcadamic[this] = value; }
        }

        [DisplayName("Tenant Id"), NotNull]
        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CourseName; }
        }
        [DisplayName("Course Subject"), MasterDetailRelation(foreignKey: "CourseId"), NotMapped]
        public List<CourseSubjectsRow> CourseSubject
        {
            get { return Fields.CourseSubject[this]; }
            set { Fields.CourseSubject[this] = value; }
        }
        [DisplayName("CourseDivisions"), MasterDetailRelation(foreignKey: "CourseId"), NotMapped]
        public List<CourseDivisionsRow> CourseDivisions
        {
            get { return Fields.CourseDivisions[this]; }
            set { Fields.CourseDivisions[this] = value; }
        }
        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }

        [DisplayName("CourseFullName"), NotMapped, MinSelectLevel(SelectLevel.List), LookupInclude]
        [Expression("CONCAT(T0.[CourseName], CONCAT(' (', T0.[Code]), ')')")]
        [Expression("(T0.CourseName || ' ' || T0.Code)", Dialect = "Sqlite")]
        public String CourseFullName
        {
            get { return Fields.CourseFullName[this]; }
            set { Fields.CourseFullName[this] = value; }
        }
        public static readonly RowFields Fields = new RowFields().Init();

        public CoursesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Code;
            public StringField CourseName;
            public BooleanField Active;
            public BooleanField NonAcadamic;
            public readonly Int32Field TenantId;
            public RowListField<CourseSubjectsRow> CourseSubject;
            public RowListField<CourseDivisionsRow> CourseDivisions;
            public StringField CourseFullName;

        }
    }
}
