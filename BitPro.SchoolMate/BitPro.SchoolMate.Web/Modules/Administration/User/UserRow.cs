﻿
namespace BitPro.SchoolMate.Administration.Entities
{
    using BitPro.SchoolMate.Master.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Administration"), TableName("Users")]
    [DisplayName("Users"), InstanceName("User")]
    [ReadPermission(PermissionKeys.Security)]
    [ModifyPermission(PermissionKeys.Security)]
    [LookupScript(Permission = PermissionKeys.Security)]
    public sealed class UserRow : LoggingRow, IIdRow, INameRow, IIsActiveRow
    {
        [DisplayName("User Id"), Identity]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Username"), Size(100), NotNull, QuickSearch, LookupInclude]
        public String Username
        {
            get { return Fields.Username[this]; }
            set { Fields.Username[this] = value; }
        }

        [DisplayName("Source"), Size(4), NotNull, Insertable(false), Updatable(false), DefaultValue("site")]
        public String Source
        {
            get { return Fields.Source[this]; }
            set { Fields.Source[this] = value; }
        }

        [DisplayName("Password Hash"), Size(86), NotNull, Insertable(false), Updatable(false), MinSelectLevel(SelectLevel.Never)]
        public String PasswordHash
        {
            get { return Fields.PasswordHash[this]; }
            set { Fields.PasswordHash[this] = value; }
        }

        [DisplayName("Password Salt"), Size(10), NotNull, Insertable(false), Updatable(false), MinSelectLevel(SelectLevel.Never)]
        public String PasswordSalt
        {
            get { return Fields.PasswordSalt[this]; }
            set { Fields.PasswordSalt[this] = value; }
        }

        [DisplayName("Display Name"), Size(100), NotNull, LookupInclude]
        public String DisplayName
        {
            get { return Fields.DisplayName[this]; }
            set { Fields.DisplayName[this] = value; }
        }

        [DisplayName("Email"), Size(100)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("User Image"), Size(100)]
        [ImageUploadEditor(FilenameFormat = "UserImage/~", CopyToHistory = true)]
        public String UserImage
        {
            get { return Fields.UserImage[this]; }
            set { Fields.UserImage[this] = value; }
        }

        [DisplayName("Password"), Size(50), NotMapped]
        public String Password
        {
            get { return Fields.Password[this]; }
            set { Fields.Password[this] = value; }
        }

        [NotNull, Insertable(false), Updatable(true)]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        [DisplayName("Confirm Password"), Size(50), NotMapped]
        public String PasswordConfirm
        {
            get { return Fields.PasswordConfirm[this]; }
            set { Fields.PasswordConfirm[this] = value; }
        }

        [DisplayName("Last Directory Update"), Insertable(false), Updatable(false)]
        public DateTime? LastDirectoryUpdate
        {
            get { return Fields.LastDirectoryUpdate[this]; }
            set { Fields.LastDirectoryUpdate[this] = value; }
        }
        [DisplayName("Tenant"), ForeignKey("Tenants", "TenantId"), LeftJoin("tnt")]
        [LookupEditor(typeof(TenantRow))]
        [ReadPermission(PermissionKeys.Tenants)]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        [DisplayName("Tenant"), Expression("tnt.TenantName")]
        public String TenantName
        {
            get { return Fields.TenantName[this]; }
            set { Fields.TenantName[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.UserId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Username; }
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get { return Fields.IsActive; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UserRow()
            : base(Fields)
        {
        }
        [DisplayName("Default Campus"), ForeignKey("[dbo].[Campuses]", "Id"), LeftJoin("jCampuses")]
        [LookupEditor(typeof(CampusesRow), InplaceAdd = true)]
        public Int32? DefaultCampusId
        {
            get { return Fields.DefaultCampusId[this]; }
            set { Fields.DefaultCampusId[this] = value; }
        }
        public class RowFields : LoggingRowFields
        {
            public Int32Field UserId;
            public StringField Username;
            public StringField Source;
            public StringField PasswordHash;
            public StringField PasswordSalt;
            public StringField DisplayName;
            public StringField Email;
            public StringField UserImage;
            public DateTimeField LastDirectoryUpdate;
            public Int16Field IsActive;
            public readonly Int32Field TenantId;
            public Int32Field DefaultCampusId;
            public readonly StringField TenantName;

            public StringField Password;
            public StringField PasswordConfirm;
        }
    }
}