var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Accounts;
        (function (Accounts) {
            var AccountsForm = /** @class */ (function (_super) {
                __extends(AccountsForm, _super);
                function AccountsForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!AccountsForm.init) {
                        AccountsForm.init = true;
                        var s = Serenity;
                        var w0 = s.EnumEditor;
                        var w1 = s.StringEditor;
                        var w2 = s.LookupEditor;
                        var w3 = s.BooleanEditor;
                        Q.initFormType(AccountsForm, [
                            'Type', w0,
                            'AccountNo', w1,
                            'AccountHeadId', w2,
                            'IsDefault', w3
                        ]);
                    }
                    return _this;
                }
                AccountsForm.formKey = 'Accounts.Accounts';
                return AccountsForm;
            }(Serenity.PrefixedContext));
            Accounts.AccountsForm = AccountsForm;
        })(Accounts = SchoolMate.Accounts || (SchoolMate.Accounts = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Accounts;
        (function (Accounts) {
            var AccountsRow;
            (function (AccountsRow) {
                AccountsRow.idProperty = 'Id';
                AccountsRow.nameProperty = 'AccountNo';
                AccountsRow.localTextPrefix = 'Accounts.Accounts';
                AccountsRow.lookupKey = 'Accounts.Accounts';
                function getLookup() {
                    return Q.getLookup('Accounts.Accounts');
                }
                AccountsRow.getLookup = getLookup;
                AccountsRow.deletePermission = 'Accounts:Accounts';
                AccountsRow.insertPermission = 'Accounts:Accounts';
                AccountsRow.readPermission = 'Accounts:Accounts';
                AccountsRow.updatePermission = 'Accounts:Accounts';
            })(AccountsRow = Accounts.AccountsRow || (Accounts.AccountsRow = {}));
        })(Accounts = SchoolMate.Accounts || (SchoolMate.Accounts = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Accounts;
        (function (Accounts) {
            var AccountsService;
            (function (AccountsService) {
                AccountsService.baseUrl = 'Accounts/Accounts';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    AccountsService[x] = function (r, s, o) {
                        return Q.serviceRequest(AccountsService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(AccountsService = Accounts.AccountsService || (Accounts.AccountsService = {}));
        })(Accounts = SchoolMate.Accounts || (SchoolMate.Accounts = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Accounts;
        (function (Accounts) {
            var ContraForm = /** @class */ (function (_super) {
                __extends(ContraForm, _super);
                function ContraForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!ContraForm.init) {
                        ContraForm.init = true;
                        var s = Serenity;
                        var w0 = s.IntegerEditor;
                        var w1 = s.DateEditor;
                        var w2 = s.LookupEditor;
                        var w3 = s.DecimalEditor;
                        var w4 = s.EnumEditor;
                        var w5 = s.TextAreaEditor;
                        var w6 = s.MultipleImageUploadEditor;
                        Q.initFormType(ContraForm, [
                            'VNo', w0,
                            'TrxDate', w1,
                            'ContactId', w2,
                            'DebitAccountId', w2,
                            'Amount', w3,
                            'PaymentMethod', w4,
                            'CreditAccountId', w2,
                            'Remarks', w5,
                            'Attachments', w6
                        ]);
                    }
                    return _this;
                }
                ContraForm.formKey = 'Accounts.Contra';
                return ContraForm;
            }(Serenity.PrefixedContext));
            Accounts.ContraForm = ContraForm;
        })(Accounts = SchoolMate.Accounts || (SchoolMate.Accounts = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Accounts;
        (function (Accounts) {
            var ContraRow;
            (function (ContraRow) {
                ContraRow.idProperty = 'Id';
                ContraRow.localTextPrefix = 'Accounts.Contra';
                ContraRow.deletePermission = 'Accounts:ContraDelete';
                ContraRow.insertPermission = 'Accounts:ContraCreate';
                ContraRow.readPermission = 'Accounts:Contra';
                ContraRow.updatePermission = 'Accounts:ContraUpdate';
            })(ContraRow = Accounts.ContraRow || (Accounts.ContraRow = {}));
        })(Accounts = SchoolMate.Accounts || (SchoolMate.Accounts = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Accounts;
        (function (Accounts) {
            var ContraService;
            (function (ContraService) {
                ContraService.baseUrl = 'Accounts/Contra';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    ContraService[x] = function (r, s, o) {
                        return Q.serviceRequest(ContraService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(ContraService = Accounts.ContraService || (Accounts.ContraService = {}));
        })(Accounts = SchoolMate.Accounts || (SchoolMate.Accounts = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Accounts;
        (function (Accounts) {
            var PaymentForm = /** @class */ (function (_super) {
                __extends(PaymentForm, _super);
                function PaymentForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!PaymentForm.init) {
                        PaymentForm.init = true;
                        var s = Serenity;
                        var w0 = s.IntegerEditor;
                        var w1 = s.DateEditor;
                        var w2 = s.LookupEditor;
                        var w3 = s.DecimalEditor;
                        var w4 = s.EnumEditor;
                        var w5 = s.TextAreaEditor;
                        var w6 = s.MultipleImageUploadEditor;
                        Q.initFormType(PaymentForm, [
                            'VNo', w0,
                            'TrxDate', w1,
                            'ContactId', w2,
                            'DebitAccountHeadId', w2,
                            'Amount', w3,
                            'PaymentMethod', w4,
                            'CreditAccountId', w2,
                            'Remarks', w5,
                            'Attachments', w6
                        ]);
                    }
                    return _this;
                }
                PaymentForm.formKey = 'Accounts.Payment';
                return PaymentForm;
            }(Serenity.PrefixedContext));
            Accounts.PaymentForm = PaymentForm;
        })(Accounts = SchoolMate.Accounts || (SchoolMate.Accounts = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Accounts;
        (function (Accounts) {
            var PaymentRow;
            (function (PaymentRow) {
                PaymentRow.idProperty = 'Id';
                PaymentRow.localTextPrefix = 'Accounts.Payment';
                PaymentRow.deletePermission = 'Accounts:PaymentDelete';
                PaymentRow.insertPermission = 'Accounts:PaymentCreate';
                PaymentRow.readPermission = 'Accounts:Payment';
                PaymentRow.updatePermission = 'Accounts:PaymentUpdate';
            })(PaymentRow = Accounts.PaymentRow || (Accounts.PaymentRow = {}));
        })(Accounts = SchoolMate.Accounts || (SchoolMate.Accounts = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Accounts;
        (function (Accounts) {
            var PaymentService;
            (function (PaymentService) {
                PaymentService.baseUrl = 'Accounts/Payment';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    PaymentService[x] = function (r, s, o) {
                        return Q.serviceRequest(PaymentService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(PaymentService = Accounts.PaymentService || (Accounts.PaymentService = {}));
        })(Accounts = SchoolMate.Accounts || (SchoolMate.Accounts = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Accounts;
        (function (Accounts) {
            var ReceiptForm = /** @class */ (function (_super) {
                __extends(ReceiptForm, _super);
                function ReceiptForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!ReceiptForm.init) {
                        ReceiptForm.init = true;
                        var s = Serenity;
                        var w0 = s.IntegerEditor;
                        var w1 = s.DateEditor;
                        var w2 = s.LookupEditor;
                        var w3 = s.DecimalEditor;
                        var w4 = s.EnumEditor;
                        var w5 = s.TextAreaEditor;
                        var w6 = s.MultipleImageUploadEditor;
                        Q.initFormType(ReceiptForm, [
                            'VNo', w0,
                            'TrxDate', w1,
                            'ContactId', w2,
                            'CreditAccountHeadId', w2,
                            'Amount', w3,
                            'PaymentMethod', w4,
                            'DebitAccountId', w2,
                            'Remarks', w5,
                            'Attachments', w6
                        ]);
                    }
                    return _this;
                }
                ReceiptForm.formKey = 'Accounts.Receipt';
                return ReceiptForm;
            }(Serenity.PrefixedContext));
            Accounts.ReceiptForm = ReceiptForm;
        })(Accounts = SchoolMate.Accounts || (SchoolMate.Accounts = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Accounts;
        (function (Accounts) {
            var ReceiptRow;
            (function (ReceiptRow) {
                ReceiptRow.idProperty = 'Id';
                ReceiptRow.localTextPrefix = 'Accounts.Receipt';
                ReceiptRow.deletePermission = 'Accounts:ReceiptDelete';
                ReceiptRow.insertPermission = 'Accounts:ReceiptCreate';
                ReceiptRow.readPermission = 'Accounts:Receipt';
                ReceiptRow.updatePermission = 'Accounts:ReceiptUpdate';
            })(ReceiptRow = Accounts.ReceiptRow || (Accounts.ReceiptRow = {}));
        })(Accounts = SchoolMate.Accounts || (SchoolMate.Accounts = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Accounts;
        (function (Accounts) {
            var ReceiptService;
            (function (ReceiptService) {
                ReceiptService.baseUrl = 'Accounts/Receipt';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List',
                    'GetTrxNo'
                ].forEach(function (x) {
                    ReceiptService[x] = function (r, s, o) {
                        return Q.serviceRequest(ReceiptService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(ReceiptService = Accounts.ReceiptService || (Accounts.ReceiptService = {}));
        })(Accounts = SchoolMate.Accounts || (SchoolMate.Accounts = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var AccountTypes;
        (function (AccountTypes) {
            AccountTypes[AccountTypes["Value1"] = 1] = "Value1";
            AccountTypes[AccountTypes["Value2"] = 2] = "Value2";
        })(AccountTypes = SchoolMate.AccountTypes || (SchoolMate.AccountTypes = {}));
        Serenity.Decorators.registerEnumType(AccountTypes, 'BitPro.SchoolMate.AccountTypes');
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var LanguageForm = /** @class */ (function (_super) {
                __extends(LanguageForm, _super);
                function LanguageForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!LanguageForm.init) {
                        LanguageForm.init = true;
                        var s = Serenity;
                        var w0 = s.StringEditor;
                        Q.initFormType(LanguageForm, [
                            'LanguageId', w0,
                            'LanguageName', w0
                        ]);
                    }
                    return _this;
                }
                LanguageForm.formKey = 'Administration.Language';
                return LanguageForm;
            }(Serenity.PrefixedContext));
            Administration.LanguageForm = LanguageForm;
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var LanguageRow;
            (function (LanguageRow) {
                LanguageRow.idProperty = 'Id';
                LanguageRow.nameProperty = 'LanguageName';
                LanguageRow.localTextPrefix = 'Administration.Language';
                LanguageRow.lookupKey = 'Administration.Language';
                function getLookup() {
                    return Q.getLookup('Administration.Language');
                }
                LanguageRow.getLookup = getLookup;
                LanguageRow.deletePermission = 'Administration:Translation';
                LanguageRow.insertPermission = 'Administration:Translation';
                LanguageRow.readPermission = 'Administration:Translation';
                LanguageRow.updatePermission = 'Administration:Translation';
            })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var LanguageService;
            (function (LanguageService) {
                LanguageService.baseUrl = 'Administration/Language';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    LanguageService[x] = function (r, s, o) {
                        return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var RoleForm = /** @class */ (function (_super) {
                __extends(RoleForm, _super);
                function RoleForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!RoleForm.init) {
                        RoleForm.init = true;
                        var s = Serenity;
                        var w0 = s.StringEditor;
                        Q.initFormType(RoleForm, [
                            'RoleName', w0
                        ]);
                    }
                    return _this;
                }
                RoleForm.formKey = 'Administration.Role';
                return RoleForm;
            }(Serenity.PrefixedContext));
            Administration.RoleForm = RoleForm;
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var RolePermissionRow;
            (function (RolePermissionRow) {
                RolePermissionRow.idProperty = 'RolePermissionId';
                RolePermissionRow.nameProperty = 'PermissionKey';
                RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
                RolePermissionRow.deletePermission = 'Administration:Security';
                RolePermissionRow.insertPermission = 'Administration:Security';
                RolePermissionRow.readPermission = 'Administration:Security';
                RolePermissionRow.updatePermission = 'Administration:Security';
            })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var RolePermissionService;
            (function (RolePermissionService) {
                RolePermissionService.baseUrl = 'Administration/RolePermission';
                [
                    'Update',
                    'List'
                ].forEach(function (x) {
                    RolePermissionService[x] = function (r, s, o) {
                        return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var RoleRow;
            (function (RoleRow) {
                RoleRow.idProperty = 'RoleId';
                RoleRow.nameProperty = 'RoleName';
                RoleRow.localTextPrefix = 'Administration.Role';
                RoleRow.lookupKey = 'Administration.Role';
                function getLookup() {
                    return Q.getLookup('Administration.Role');
                }
                RoleRow.getLookup = getLookup;
                RoleRow.deletePermission = 'Administration:Security';
                RoleRow.insertPermission = 'Administration:Security';
                RoleRow.readPermission = 'Administration:Security';
                RoleRow.updatePermission = 'Administration:Security';
            })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var RoleService;
            (function (RoleService) {
                RoleService.baseUrl = 'Administration/Role';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    RoleService[x] = function (r, s, o) {
                        return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var SergenService;
            (function (SergenService) {
                SergenService.baseUrl = 'Administration/Sergen';
                [
                    'ListConnections',
                    'ListTables',
                    'Generate'
                ].forEach(function (x) {
                    SergenService[x] = function (r, s, o) {
                        return Q.serviceRequest(SergenService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(SergenService = Administration.SergenService || (Administration.SergenService = {}));
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var SettingsForm = /** @class */ (function (_super) {
                __extends(SettingsForm, _super);
                function SettingsForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!SettingsForm.init) {
                        SettingsForm.init = true;
                        var s = Serenity;
                        var w0 = s.StringEditor;
                        var w1 = s.DateEditor;
                        var w2 = s.DecimalEditor;
                        var w3 = s.BooleanEditor;
                        Q.initFormType(SettingsForm, [
                            'Name', w0,
                            'Type', w0,
                            'ValueString', w0,
                            'ValueDate', w1,
                            'ValueNumber', w2,
                            'ValueBool', w3
                        ]);
                    }
                    return _this;
                }
                SettingsForm.formKey = 'Administration.Settings';
                return SettingsForm;
            }(Serenity.PrefixedContext));
            Administration.SettingsForm = SettingsForm;
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var SettingsRow;
            (function (SettingsRow) {
                SettingsRow.idProperty = 'Id';
                SettingsRow.nameProperty = 'Name';
                SettingsRow.localTextPrefix = 'Administration.Settings';
                SettingsRow.deletePermission = 'Administration:Settings';
                SettingsRow.insertPermission = 'Administration:Settings';
                SettingsRow.readPermission = 'Administration:Settings';
                SettingsRow.updatePermission = 'Administration:Settings';
            })(SettingsRow = Administration.SettingsRow || (Administration.SettingsRow = {}));
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var SettingsService;
            (function (SettingsService) {
                SettingsService.baseUrl = 'Administration/Settings';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    SettingsService[x] = function (r, s, o) {
                        return Q.serviceRequest(SettingsService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(SettingsService = Administration.SettingsService || (Administration.SettingsService = {}));
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var SystemSettingsForm = /** @class */ (function (_super) {
                __extends(SystemSettingsForm, _super);
                function SystemSettingsForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!SystemSettingsForm.init) {
                        SystemSettingsForm.init = true;
                        var s = Serenity;
                        var w0 = s.LookupEditor;
                        var w1 = s.IntegerEditor;
                        var w2 = s.StringEditor;
                        Q.initFormType(SystemSettingsForm, [
                            'SalaryAccount', w0,
                            'StudentCodeLength', w1,
                            'StudentCodePrefix', w2,
                            'SatffCodeLength', w1,
                            'SatffCodePrefix', w2
                        ]);
                    }
                    return _this;
                }
                SystemSettingsForm.formKey = 'Administration.SystemSettings';
                return SystemSettingsForm;
            }(Serenity.PrefixedContext));
            Administration.SystemSettingsForm = SystemSettingsForm;
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var SystemSettingsRow;
            (function (SystemSettingsRow) {
                SystemSettingsRow.idProperty = 'Id';
                SystemSettingsRow.localTextPrefix = 'Administration.SystemSettings';
                SystemSettingsRow.deletePermission = 'Administration:Settings';
                SystemSettingsRow.insertPermission = 'Administration:Settings';
                SystemSettingsRow.readPermission = '*';
                SystemSettingsRow.updatePermission = 'Administration:Settings';
            })(SystemSettingsRow = Administration.SystemSettingsRow || (Administration.SystemSettingsRow = {}));
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var SystemSettingsService;
            (function (SystemSettingsService) {
                SystemSettingsService.baseUrl = 'Administration/SystemSettings';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    SystemSettingsService[x] = function (r, s, o) {
                        return Q.serviceRequest(SystemSettingsService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(SystemSettingsService = Administration.SystemSettingsService || (Administration.SystemSettingsService = {}));
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var TenantForm = /** @class */ (function (_super) {
                __extends(TenantForm, _super);
                function TenantForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!TenantForm.init) {
                        TenantForm.init = true;
                        var s = Serenity;
                        var w0 = s.StringEditor;
                        Q.initFormType(TenantForm, [
                            'TenantName', w0
                        ]);
                    }
                    return _this;
                }
                TenantForm.formKey = 'Administration.Tenant';
                return TenantForm;
            }(Serenity.PrefixedContext));
            Administration.TenantForm = TenantForm;
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var TenantRow;
            (function (TenantRow) {
                TenantRow.idProperty = 'TenantId';
                TenantRow.nameProperty = 'TenantName';
                TenantRow.localTextPrefix = 'Administration.Tenant';
                TenantRow.lookupKey = 'Administration.Tenants';
                function getLookup() {
                    return Q.getLookup('Administration.Tenants');
                }
                TenantRow.getLookup = getLookup;
                TenantRow.deletePermission = 'Administration:Tenants';
                TenantRow.insertPermission = 'Administration:Tenants';
                TenantRow.readPermission = 'Administration:Tenants';
                TenantRow.updatePermission = 'Administration:Tenants';
            })(TenantRow = Administration.TenantRow || (Administration.TenantRow = {}));
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var TenantService;
            (function (TenantService) {
                TenantService.baseUrl = 'Administration/Tenant';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    TenantService[x] = function (r, s, o) {
                        return Q.serviceRequest(TenantService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(TenantService = Administration.TenantService || (Administration.TenantService = {}));
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var TranslationService;
            (function (TranslationService) {
                TranslationService.baseUrl = 'Administration/Translation';
                [
                    'List',
                    'Update'
                ].forEach(function (x) {
                    TranslationService[x] = function (r, s, o) {
                        return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var UserForm = /** @class */ (function (_super) {
                __extends(UserForm, _super);
                function UserForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!UserForm.init) {
                        UserForm.init = true;
                        var s = Serenity;
                        var w0 = s.StringEditor;
                        var w1 = s.EmailEditor;
                        var w2 = s.ImageUploadEditor;
                        var w3 = s.PasswordEditor;
                        var w4 = s.LookupEditor;
                        Q.initFormType(UserForm, [
                            'Username', w0,
                            'DisplayName', w0,
                            'Email', w1,
                            'UserImage', w2,
                            'Password', w3,
                            'PasswordConfirm', w3,
                            'DefaultCampusId', w4,
                            'Source', w0,
                            'TenantId', w4
                        ]);
                    }
                    return _this;
                }
                UserForm.formKey = 'Administration.User';
                return UserForm;
            }(Serenity.PrefixedContext));
            Administration.UserForm = UserForm;
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var UserPermissionRow;
            (function (UserPermissionRow) {
                UserPermissionRow.idProperty = 'UserPermissionId';
                UserPermissionRow.nameProperty = 'PermissionKey';
                UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
                UserPermissionRow.deletePermission = 'Administration:Security';
                UserPermissionRow.insertPermission = 'Administration:Security';
                UserPermissionRow.readPermission = 'Administration:Security';
                UserPermissionRow.updatePermission = 'Administration:Security';
            })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var UserPermissionService;
            (function (UserPermissionService) {
                UserPermissionService.baseUrl = 'Administration/UserPermission';
                [
                    'Update',
                    'List',
                    'ListRolePermissions',
                    'ListPermissionKeys'
                ].forEach(function (x) {
                    UserPermissionService[x] = function (r, s, o) {
                        return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var UserRoleRow;
            (function (UserRoleRow) {
                UserRoleRow.idProperty = 'UserRoleId';
                UserRoleRow.localTextPrefix = 'Administration.UserRole';
                UserRoleRow.deletePermission = 'Administration:Security';
                UserRoleRow.insertPermission = 'Administration:Security';
                UserRoleRow.readPermission = 'Administration:Security';
                UserRoleRow.updatePermission = 'Administration:Security';
            })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var UserRoleService;
            (function (UserRoleService) {
                UserRoleService.baseUrl = 'Administration/UserRole';
                [
                    'Update',
                    'List'
                ].forEach(function (x) {
                    UserRoleService[x] = function (r, s, o) {
                        return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var UserRow;
            (function (UserRow) {
                UserRow.idProperty = 'UserId';
                UserRow.isActiveProperty = 'IsActive';
                UserRow.nameProperty = 'Username';
                UserRow.localTextPrefix = 'Administration.User';
                UserRow.lookupKey = 'Administration.User';
                function getLookup() {
                    return Q.getLookup('Administration.User');
                }
                UserRow.getLookup = getLookup;
                UserRow.deletePermission = 'Administration:Security';
                UserRow.insertPermission = 'Administration:Security';
                UserRow.readPermission = 'Administration:Security';
                UserRow.updatePermission = 'Administration:Security';
            })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var UserService;
            (function (UserService) {
                UserService.baseUrl = 'Administration/User';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Undelete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    UserService[x] = function (r, s, o) {
                        return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(UserService = Administration.UserService || (Administration.UserService = {}));
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var AttendanceStatus;
        (function (AttendanceStatus) {
            AttendanceStatus[AttendanceStatus["Value1"] = 1] = "Value1";
            AttendanceStatus[AttendanceStatus["Value2"] = 2] = "Value2";
            AttendanceStatus[AttendanceStatus["Value3"] = 3] = "Value3";
        })(AttendanceStatus = SchoolMate.AttendanceStatus || (SchoolMate.AttendanceStatus = {}));
        Serenity.Decorators.registerEnumType(AttendanceStatus, 'BitPro.SchoolMate.AttendanceStatus');
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Common;
        (function (Common) {
            var CommonService;
            (function (CommonService) {
                CommonService.baseUrl = 'Common/Common';
                [
                    'DivisionsList',
                    'SendWhatsappMessage'
                ].forEach(function (x) {
                    CommonService[x] = function (r, s, o) {
                        return Q.serviceRequest(CommonService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(CommonService = Common.CommonService || (Common.CommonService = {}));
        })(Common = SchoolMate.Common || (SchoolMate.Common = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Common;
        (function (Common) {
            var UserPreferenceRow;
            (function (UserPreferenceRow) {
                UserPreferenceRow.idProperty = 'UserPreferenceId';
                UserPreferenceRow.nameProperty = 'Name';
                UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
                UserPreferenceRow.deletePermission = '';
                UserPreferenceRow.insertPermission = '';
                UserPreferenceRow.readPermission = '';
                UserPreferenceRow.updatePermission = '';
            })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
        })(Common = SchoolMate.Common || (SchoolMate.Common = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Common;
        (function (Common) {
            var UserPreferenceService;
            (function (UserPreferenceService) {
                UserPreferenceService.baseUrl = 'Common/UserPreference';
                [
                    'Update',
                    'Retrieve'
                ].forEach(function (x) {
                    UserPreferenceService[x] = function (r, s, o) {
                        return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
        })(Common = SchoolMate.Common || (SchoolMate.Common = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var CourseExitTypes;
        (function (CourseExitTypes) {
            CourseExitTypes[CourseExitTypes["Value1"] = 1] = "Value1";
            CourseExitTypes[CourseExitTypes["Value2"] = 2] = "Value2";
            CourseExitTypes[CourseExitTypes["Value3"] = 3] = "Value3";
        })(CourseExitTypes = SchoolMate.CourseExitTypes || (SchoolMate.CourseExitTypes = {}));
        Serenity.Decorators.registerEnumType(CourseExitTypes, 'BitPro.SchoolMate.CourseExitTypes');
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Gender;
        (function (Gender) {
            Gender[Gender["Value1"] = 1] = "Value1";
            Gender[Gender["Value2"] = 2] = "Value2";
        })(Gender = SchoolMate.Gender || (SchoolMate.Gender = {}));
        Serenity.Decorators.registerEnumType(Gender, 'BitPro.SchoolMate.Gender');
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var LedgerTypes;
        (function (LedgerTypes) {
            LedgerTypes[LedgerTypes["Value1"] = 1] = "Value1";
            LedgerTypes[LedgerTypes["Value2"] = 2] = "Value2";
            LedgerTypes[LedgerTypes["Value3"] = 3] = "Value3";
            LedgerTypes[LedgerTypes["Value4"] = 4] = "Value4";
            LedgerTypes[LedgerTypes["Value5"] = 5] = "Value5";
            LedgerTypes[LedgerTypes["Value6"] = 6] = "Value6";
        })(LedgerTypes = SchoolMate.LedgerTypes || (SchoolMate.LedgerTypes = {}));
        Serenity.Decorators.registerEnumType(LedgerTypes, 'BitPro.SchoolMate.LedgerTypes');
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var AcadamicYearForm = /** @class */ (function (_super) {
                __extends(AcadamicYearForm, _super);
                function AcadamicYearForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!AcadamicYearForm.init) {
                        AcadamicYearForm.init = true;
                        var s = Serenity;
                        var w0 = s.StringEditor;
                        var w1 = s.TextAreaEditor;
                        var w2 = s.DateEditor;
                        var w3 = Master.FeeTermsEditor;
                        Q.initFormType(AcadamicYearForm, [
                            'Code', w0,
                            'Description', w1,
                            'PeriodFrom', w2,
                            'PeriodTo', w2,
                            'FeeTerms', w3
                        ]);
                    }
                    return _this;
                }
                AcadamicYearForm.formKey = 'Master.AcadamicYear';
                return AcadamicYearForm;
            }(Serenity.PrefixedContext));
            Master.AcadamicYearForm = AcadamicYearForm;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var AcadamicYearRow;
            (function (AcadamicYearRow) {
                AcadamicYearRow.idProperty = 'Id';
                AcadamicYearRow.nameProperty = 'Code';
                AcadamicYearRow.localTextPrefix = 'Master.AcadamicYear';
                AcadamicYearRow.lookupKey = 'Master.AcademicYear';
                function getLookup() {
                    return Q.getLookup('Master.AcademicYear');
                }
                AcadamicYearRow.getLookup = getLookup;
                AcadamicYearRow.deletePermission = 'Master:AcademicYear';
                AcadamicYearRow.insertPermission = 'Master:AcademicYear';
                AcadamicYearRow.readPermission = 'Master:AcademicYear';
                AcadamicYearRow.updatePermission = 'Master:AcademicYear';
            })(AcadamicYearRow = Master.AcadamicYearRow || (Master.AcadamicYearRow = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var AcadamicYearService;
            (function (AcadamicYearService) {
                AcadamicYearService.baseUrl = 'Master/AcadamicYear';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List',
                    'GetLastAcadamicTerms'
                ].forEach(function (x) {
                    AcadamicYearService[x] = function (r, s, o) {
                        return Q.serviceRequest(AcadamicYearService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(AcadamicYearService = Master.AcadamicYearService || (Master.AcadamicYearService = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var AccountHeadsForm = /** @class */ (function (_super) {
                __extends(AccountHeadsForm, _super);
                function AccountHeadsForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!AccountHeadsForm.init) {
                        AccountHeadsForm.init = true;
                        var s = Serenity;
                        var w0 = s.StringEditor;
                        var w1 = s.LookupEditor;
                        var w2 = s.EnumEditor;
                        Q.initFormType(AccountHeadsForm, [
                            'Description', w0,
                            'ParentHeadId', w1,
                            'Code', w0,
                            'LedgerType', w2
                        ]);
                    }
                    return _this;
                }
                AccountHeadsForm.formKey = 'Master.AccountHeads';
                return AccountHeadsForm;
            }(Serenity.PrefixedContext));
            Master.AccountHeadsForm = AccountHeadsForm;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var AccountHeadsRow;
            (function (AccountHeadsRow) {
                AccountHeadsRow.idProperty = 'Id';
                AccountHeadsRow.nameProperty = 'Description';
                AccountHeadsRow.localTextPrefix = 'Master.AccountHeads';
                AccountHeadsRow.lookupKey = 'Master.AccountHeads';
                function getLookup() {
                    return Q.getLookup('Master.AccountHeads');
                }
                AccountHeadsRow.getLookup = getLookup;
                AccountHeadsRow.deletePermission = 'Master:AccountHeads';
                AccountHeadsRow.insertPermission = 'Master:AccountHeads';
                AccountHeadsRow.readPermission = 'Master:AccountHeads';
                AccountHeadsRow.updatePermission = 'Master:AccountHeads';
            })(AccountHeadsRow = Master.AccountHeadsRow || (Master.AccountHeadsRow = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var AccountHeadsService;
            (function (AccountHeadsService) {
                AccountHeadsService.baseUrl = 'Master/AccountHeads';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    AccountHeadsService[x] = function (r, s, o) {
                        return Q.serviceRequest(AccountHeadsService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(AccountHeadsService = Master.AccountHeadsService || (Master.AccountHeadsService = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var AreasForm = /** @class */ (function (_super) {
                __extends(AreasForm, _super);
                function AreasForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!AreasForm.init) {
                        AreasForm.init = true;
                        var s = Serenity;
                        var w0 = s.StringEditor;
                        var w1 = s.LookupEditor;
                        Q.initFormType(AreasForm, [
                            'Code', w0,
                            'AreaName', w0,
                            'CountryId', w1
                        ]);
                    }
                    return _this;
                }
                AreasForm.formKey = 'Master.Areas';
                return AreasForm;
            }(Serenity.PrefixedContext));
            Master.AreasForm = AreasForm;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var AreasRow;
            (function (AreasRow) {
                AreasRow.idProperty = 'Id';
                AreasRow.nameProperty = 'Code';
                AreasRow.localTextPrefix = 'Master.Areas';
                AreasRow.lookupKey = 'Master.Areas';
                function getLookup() {
                    return Q.getLookup('Master.Areas');
                }
                AreasRow.getLookup = getLookup;
                AreasRow.deletePermission = 'Master:Areas';
                AreasRow.insertPermission = 'Master:Areas';
                AreasRow.readPermission = 'Master:Areas';
                AreasRow.updatePermission = 'Master:Areas';
            })(AreasRow = Master.AreasRow || (Master.AreasRow = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var AreasService;
            (function (AreasService) {
                AreasService.baseUrl = 'Master/Areas';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    AreasService[x] = function (r, s, o) {
                        return Q.serviceRequest(AreasService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(AreasService = Master.AreasService || (Master.AreasService = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CampusesForm = /** @class */ (function (_super) {
                __extends(CampusesForm, _super);
                function CampusesForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!CampusesForm.init) {
                        CampusesForm.init = true;
                        var s = Serenity;
                        var w0 = s.StringEditor;
                        var w1 = s.TextAreaEditor;
                        var w2 = s.EmailAddressEditor;
                        var w3 = s.LookupEditor;
                        var w4 = s.IntegerEditor;
                        Q.initFormType(CampusesForm, [
                            'Code', w0,
                            'Campus', w0,
                            'Address', w1,
                            'Phone', w0,
                            'ContactPerson', w0,
                            'Mobile', w0,
                            'Email', w2,
                            'Website', w0,
                            'CountryId', w3,
                            'AreaId', w3,
                            'CodeLength', w4,
                            'Student_Prefix', w0
                        ]);
                    }
                    return _this;
                }
                CampusesForm.formKey = 'Master.Campuses';
                return CampusesForm;
            }(Serenity.PrefixedContext));
            Master.CampusesForm = CampusesForm;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CampusesRow;
            (function (CampusesRow) {
                CampusesRow.idProperty = 'Id';
                CampusesRow.nameProperty = 'FullName';
                CampusesRow.localTextPrefix = 'Master.Campuses';
                CampusesRow.lookupKey = 'Master.Campuses';
                function getLookup() {
                    return Q.getLookup('Master.Campuses');
                }
                CampusesRow.getLookup = getLookup;
                CampusesRow.deletePermission = 'Master:Campuses';
                CampusesRow.insertPermission = 'Master:Campuses';
                CampusesRow.readPermission = 'Master:Campuses';
                CampusesRow.updatePermission = 'Master:Campuses';
            })(CampusesRow = Master.CampusesRow || (Master.CampusesRow = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CampusesService;
            (function (CampusesService) {
                CampusesService.baseUrl = 'Master/Campuses';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    CampusesService[x] = function (r, s, o) {
                        return Q.serviceRequest(CampusesService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(CampusesService = Master.CampusesService || (Master.CampusesService = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var ContactsForm = /** @class */ (function (_super) {
                __extends(ContactsForm, _super);
                function ContactsForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!ContactsForm.init) {
                        ContactsForm.init = true;
                        var s = Serenity;
                        var w0 = s.StringEditor;
                        var w1 = s.EmailAddressEditor;
                        var w2 = s.TextAreaEditor;
                        var w3 = s.LookupEditor;
                        Q.initFormType(ContactsForm, [
                            'Name', w0,
                            'Phone', w0,
                            'Email', w1,
                            'Whatsapp', w0,
                            'Address1', w2,
                            'Address2', w2,
                            'Nationality', w3
                        ]);
                    }
                    return _this;
                }
                ContactsForm.formKey = 'Master.Contacts';
                return ContactsForm;
            }(Serenity.PrefixedContext));
            Master.ContactsForm = ContactsForm;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var ContactsRow;
            (function (ContactsRow) {
                ContactsRow.idProperty = 'Id';
                ContactsRow.nameProperty = 'Name';
                ContactsRow.localTextPrefix = 'Master.Contacts';
                ContactsRow.lookupKey = 'Master.Contacts';
                function getLookup() {
                    return Q.getLookup('Master.Contacts');
                }
                ContactsRow.getLookup = getLookup;
                ContactsRow.deletePermission = 'Master:ContactsDelete';
                ContactsRow.insertPermission = 'Master:ContactsCreate';
                ContactsRow.readPermission = 'Master:Contacts';
                ContactsRow.updatePermission = 'Master:ContactsUpdate';
            })(ContactsRow = Master.ContactsRow || (Master.ContactsRow = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var ContactsService;
            (function (ContactsService) {
                ContactsService.baseUrl = 'Master/Contacts';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    ContactsService[x] = function (r, s, o) {
                        return Q.serviceRequest(ContactsService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(ContactsService = Master.ContactsService || (Master.ContactsService = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CountriesForm = /** @class */ (function (_super) {
                __extends(CountriesForm, _super);
                function CountriesForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!CountriesForm.init) {
                        CountriesForm.init = true;
                        var s = Serenity;
                        var w0 = s.StringEditor;
                        var w1 = s.LookupEditor;
                        Q.initFormType(CountriesForm, [
                            'Code', w0,
                            'CountryName', w0,
                            'CurrencyId', w1
                        ]);
                    }
                    return _this;
                }
                CountriesForm.formKey = 'Master.Countries';
                return CountriesForm;
            }(Serenity.PrefixedContext));
            Master.CountriesForm = CountriesForm;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CountriesRow;
            (function (CountriesRow) {
                CountriesRow.idProperty = 'Id';
                CountriesRow.nameProperty = 'FullName';
                CountriesRow.localTextPrefix = 'Master.Countries';
                CountriesRow.lookupKey = 'Master.Countries';
                function getLookup() {
                    return Q.getLookup('Master.Countries');
                }
                CountriesRow.getLookup = getLookup;
                CountriesRow.deletePermission = 'Master:Countries';
                CountriesRow.insertPermission = 'Master:Countries';
                CountriesRow.readPermission = 'Master:Countries';
                CountriesRow.updatePermission = 'Master:Countries';
            })(CountriesRow = Master.CountriesRow || (Master.CountriesRow = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CountriesService;
            (function (CountriesService) {
                CountriesService.baseUrl = 'Master/Countries';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    CountriesService[x] = function (r, s, o) {
                        return Q.serviceRequest(CountriesService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(CountriesService = Master.CountriesService || (Master.CountriesService = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CourseDivisionsForm = /** @class */ (function (_super) {
                __extends(CourseDivisionsForm, _super);
                function CourseDivisionsForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!CourseDivisionsForm.init) {
                        CourseDivisionsForm.init = true;
                        var s = Serenity;
                        var w0 = s.StringEditor;
                        Q.initFormType(CourseDivisionsForm, [
                            'DivisionCode', w0
                        ]);
                    }
                    return _this;
                }
                CourseDivisionsForm.formKey = 'Master.CourseDivisions';
                return CourseDivisionsForm;
            }(Serenity.PrefixedContext));
            Master.CourseDivisionsForm = CourseDivisionsForm;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CourseDivisionsRow;
            (function (CourseDivisionsRow) {
                CourseDivisionsRow.idProperty = 'Id';
                CourseDivisionsRow.nameProperty = 'DivisionCode';
                CourseDivisionsRow.localTextPrefix = 'Master.CourseDivisions';
                CourseDivisionsRow.lookupKey = 'Master.CourseDivisions';
                function getLookup() {
                    return Q.getLookup('Master.CourseDivisions');
                }
                CourseDivisionsRow.getLookup = getLookup;
                CourseDivisionsRow.deletePermission = 'Master:Courses';
                CourseDivisionsRow.insertPermission = 'Master:Courses';
                CourseDivisionsRow.readPermission = 'Master:Courses';
                CourseDivisionsRow.updatePermission = 'Master:Courses';
            })(CourseDivisionsRow = Master.CourseDivisionsRow || (Master.CourseDivisionsRow = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CourseDivisionsService;
            (function (CourseDivisionsService) {
                CourseDivisionsService.baseUrl = 'Master/CourseDivisions';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    CourseDivisionsService[x] = function (r, s, o) {
                        return Q.serviceRequest(CourseDivisionsService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(CourseDivisionsService = Master.CourseDivisionsService || (Master.CourseDivisionsService = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CourseFeeForm = /** @class */ (function (_super) {
                __extends(CourseFeeForm, _super);
                function CourseFeeForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!CourseFeeForm.init) {
                        CourseFeeForm.init = true;
                        var s = Serenity;
                        var w0 = s.IntegerEditor;
                        Q.initFormType(CourseFeeForm, [
                            'CourseId', w0,
                            'FeeId', w0
                        ]);
                    }
                    return _this;
                }
                CourseFeeForm.formKey = 'Master.CourseFee';
                return CourseFeeForm;
            }(Serenity.PrefixedContext));
            Master.CourseFeeForm = CourseFeeForm;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CourseFeeRow;
            (function (CourseFeeRow) {
                CourseFeeRow.idProperty = 'Id';
                CourseFeeRow.nameProperty = 'FeeCode';
                CourseFeeRow.localTextPrefix = 'Master.CourseFee';
                CourseFeeRow.lookupKey = 'Master.CourseFee';
                function getLookup() {
                    return Q.getLookup('Master.CourseFee');
                }
                CourseFeeRow.getLookup = getLookup;
                CourseFeeRow.deletePermission = 'Master:Fees';
                CourseFeeRow.insertPermission = 'Master:Fees';
                CourseFeeRow.readPermission = 'Master:Fees';
                CourseFeeRow.updatePermission = 'Master:Fees';
            })(CourseFeeRow = Master.CourseFeeRow || (Master.CourseFeeRow = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CourseFeeService;
            (function (CourseFeeService) {
                CourseFeeService.baseUrl = 'Master/CourseFee';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    CourseFeeService[x] = function (r, s, o) {
                        return Q.serviceRequest(CourseFeeService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(CourseFeeService = Master.CourseFeeService || (Master.CourseFeeService = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CoursesForm = /** @class */ (function (_super) {
                __extends(CoursesForm, _super);
                function CoursesForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!CoursesForm.init) {
                        CoursesForm.init = true;
                        var s = Serenity;
                        var w0 = s.StringEditor;
                        var w1 = s.BooleanEditor;
                        var w2 = Master.CourseSubjectEditor;
                        var w3 = Master.CourseDivisionsEditor;
                        Q.initFormType(CoursesForm, [
                            'Code', w0,
                            'CourseName', w0,
                            'Active', w1,
                            'NonAcadamic', w1,
                            'CourseSubject', w2,
                            'CourseDivisions', w3
                        ]);
                    }
                    return _this;
                }
                CoursesForm.formKey = 'Master.Courses';
                return CoursesForm;
            }(Serenity.PrefixedContext));
            Master.CoursesForm = CoursesForm;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CoursesRow;
            (function (CoursesRow) {
                CoursesRow.idProperty = 'Id';
                CoursesRow.nameProperty = 'CourseName';
                CoursesRow.localTextPrefix = 'Master.Courses';
                CoursesRow.lookupKey = 'Master.Courses';
                function getLookup() {
                    return Q.getLookup('Master.Courses');
                }
                CoursesRow.getLookup = getLookup;
                CoursesRow.deletePermission = 'Master:Courses';
                CoursesRow.insertPermission = 'Master:Courses';
                CoursesRow.readPermission = 'Master:Courses';
                CoursesRow.updatePermission = 'Master:Courses';
            })(CoursesRow = Master.CoursesRow || (Master.CoursesRow = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CoursesService;
            (function (CoursesService) {
                CoursesService.baseUrl = 'Master/Courses';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    CoursesService[x] = function (r, s, o) {
                        return Q.serviceRequest(CoursesService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(CoursesService = Master.CoursesService || (Master.CoursesService = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CourseSubjectsForm = /** @class */ (function (_super) {
                __extends(CourseSubjectsForm, _super);
                function CourseSubjectsForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!CourseSubjectsForm.init) {
                        CourseSubjectsForm.init = true;
                        var s = Serenity;
                        var w0 = s.LookupEditor;
                        var w1 = s.DecimalEditor;
                        Q.initFormType(CourseSubjectsForm, [
                            'SubjectId', w0,
                            'MaxMarks', w1
                        ]);
                    }
                    return _this;
                }
                CourseSubjectsForm.formKey = 'Master.CourseSubjects';
                return CourseSubjectsForm;
            }(Serenity.PrefixedContext));
            Master.CourseSubjectsForm = CourseSubjectsForm;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CourseSubjectsRow;
            (function (CourseSubjectsRow) {
                CourseSubjectsRow.idProperty = 'Id';
                CourseSubjectsRow.nameProperty = 'SubjectCode';
                CourseSubjectsRow.localTextPrefix = 'Master.CourseSubjects';
                CourseSubjectsRow.lookupKey = 'Master.CourseSubjects';
                function getLookup() {
                    return Q.getLookup('Master.CourseSubjects');
                }
                CourseSubjectsRow.getLookup = getLookup;
                CourseSubjectsRow.deletePermission = 'Master:CourseSubjects';
                CourseSubjectsRow.insertPermission = 'Master:CourseSubjects';
                CourseSubjectsRow.readPermission = 'Master:CourseSubjects';
                CourseSubjectsRow.updatePermission = 'Master:CourseSubjects';
            })(CourseSubjectsRow = Master.CourseSubjectsRow || (Master.CourseSubjectsRow = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CourseSubjectsService;
            (function (CourseSubjectsService) {
                CourseSubjectsService.baseUrl = 'Master/CourseSubjects';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    CourseSubjectsService[x] = function (r, s, o) {
                        return Q.serviceRequest(CourseSubjectsService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(CourseSubjectsService = Master.CourseSubjectsService || (Master.CourseSubjectsService = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CurrenciesForm = /** @class */ (function (_super) {
                __extends(CurrenciesForm, _super);
                function CurrenciesForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!CurrenciesForm.init) {
                        CurrenciesForm.init = true;
                        var s = Serenity;
                        var w0 = s.StringEditor;
                        var w1 = s.IntegerEditor;
                        Q.initFormType(CurrenciesForm, [
                            'Code', w0,
                            'CurrencyName', w0,
                            'Precision', w1
                        ]);
                    }
                    return _this;
                }
                CurrenciesForm.formKey = 'Master.Currencies';
                return CurrenciesForm;
            }(Serenity.PrefixedContext));
            Master.CurrenciesForm = CurrenciesForm;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CurrenciesRow;
            (function (CurrenciesRow) {
                CurrenciesRow.idProperty = 'Id';
                CurrenciesRow.nameProperty = 'Code';
                CurrenciesRow.localTextPrefix = 'Master.Currencies';
                CurrenciesRow.lookupKey = 'Master.Currencies';
                function getLookup() {
                    return Q.getLookup('Master.Currencies');
                }
                CurrenciesRow.getLookup = getLookup;
                CurrenciesRow.deletePermission = 'Master:Currencies';
                CurrenciesRow.insertPermission = 'Master:Currencies';
                CurrenciesRow.readPermission = 'Master:Currencies';
                CurrenciesRow.updatePermission = 'Master:Currencies';
            })(CurrenciesRow = Master.CurrenciesRow || (Master.CurrenciesRow = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CurrenciesService;
            (function (CurrenciesService) {
                CurrenciesService.baseUrl = 'Master/Currencies';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    CurrenciesService[x] = function (r, s, o) {
                        return Q.serviceRequest(CurrenciesService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(CurrenciesService = Master.CurrenciesService || (Master.CurrenciesService = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CurrentAcadamicYearService;
            (function (CurrentAcadamicYearService) {
                CurrentAcadamicYearService.baseUrl = 'Master/CurrentAcadamicYear';
                [
                    'GetCurrentAcadamicYear'
                ].forEach(function (x) {
                    CurrentAcadamicYearService[x] = function (r, s, o) {
                        return Q.serviceRequest(CurrentAcadamicYearService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(CurrentAcadamicYearService = Master.CurrentAcadamicYearService || (Master.CurrentAcadamicYearService = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var DivisionsForm = /** @class */ (function (_super) {
                __extends(DivisionsForm, _super);
                function DivisionsForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!DivisionsForm.init) {
                        DivisionsForm.init = true;
                        var s = Serenity;
                        var w0 = s.StringEditor;
                        var w1 = s.LookupEditor;
                        Q.initFormType(DivisionsForm, [
                            'DivisionCode', w0,
                            'TeacherId', w1
                        ]);
                    }
                    return _this;
                }
                DivisionsForm.formKey = 'Master.Divisions';
                return DivisionsForm;
            }(Serenity.PrefixedContext));
            Master.DivisionsForm = DivisionsForm;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var DivisionsRow;
            (function (DivisionsRow) {
                DivisionsRow.idProperty = 'Id';
                DivisionsRow.nameProperty = 'DivisionCode';
                DivisionsRow.localTextPrefix = 'Master.Divisions';
                DivisionsRow.lookupKey = 'Master.Divisions';
                function getLookup() {
                    return Q.getLookup('Master.Divisions');
                }
                DivisionsRow.getLookup = getLookup;
                DivisionsRow.deletePermission = 'Transactions:Promotions';
                DivisionsRow.insertPermission = 'Transactions:Promotions';
                DivisionsRow.readPermission = 'Transactions:Promotions';
                DivisionsRow.updatePermission = 'Transactions:Promotions';
            })(DivisionsRow = Master.DivisionsRow || (Master.DivisionsRow = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var DivisionsService;
            (function (DivisionsService) {
                DivisionsService.baseUrl = 'Master/Divisions';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List',
                    'GetByPromotions',
                    'UpdateDivision',
                    'DeleteStudentFromDivision'
                ].forEach(function (x) {
                    DivisionsService[x] = function (r, s, o) {
                        return Q.serviceRequest(DivisionsService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(DivisionsService = Master.DivisionsService || (Master.DivisionsService = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var DivisionStudentsForm = /** @class */ (function (_super) {
                __extends(DivisionStudentsForm, _super);
                function DivisionStudentsForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!DivisionStudentsForm.init) {
                        DivisionStudentsForm.init = true;
                        var s = Serenity;
                        var w0 = s.IntegerEditor;
                        var w1 = SchoolMate.Transactions.DepartmentEditor;
                        Q.initFormType(DivisionStudentsForm, [
                            'DivisionId', w0,
                            'PromotionDetailId', w1
                        ]);
                    }
                    return _this;
                }
                DivisionStudentsForm.formKey = 'Master.DivisionStudents';
                return DivisionStudentsForm;
            }(Serenity.PrefixedContext));
            Master.DivisionStudentsForm = DivisionStudentsForm;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var DivisionStudentsRow;
            (function (DivisionStudentsRow) {
                DivisionStudentsRow.idProperty = 'Id';
                DivisionStudentsRow.localTextPrefix = 'Master.DivisionStudents';
                DivisionStudentsRow.deletePermission = 'Transactions:Promotions';
                DivisionStudentsRow.insertPermission = 'Transactions:Promotions';
                DivisionStudentsRow.readPermission = 'Transactions:Promotions';
                DivisionStudentsRow.updatePermission = 'Transactions:Promotions';
            })(DivisionStudentsRow = Master.DivisionStudentsRow || (Master.DivisionStudentsRow = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var DivisionStudentsService;
            (function (DivisionStudentsService) {
                DivisionStudentsService.baseUrl = 'Master/DivisionStudents';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    DivisionStudentsService[x] = function (r, s, o) {
                        return Q.serviceRequest(DivisionStudentsService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(DivisionStudentsService = Master.DivisionStudentsService || (Master.DivisionStudentsService = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var ExamCoursesForm = /** @class */ (function (_super) {
                __extends(ExamCoursesForm, _super);
                function ExamCoursesForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!ExamCoursesForm.init) {
                        ExamCoursesForm.init = true;
                        var s = Serenity;
                        var w0 = s.LookupEditor;
                        var w1 = Master.ExamMaxMarksEditor;
                        Q.initFormType(ExamCoursesForm, [
                            'PromotionId', w0,
                            'Subjects', w1
                        ]);
                    }
                    return _this;
                }
                ExamCoursesForm.formKey = 'Master.ExamCourses';
                return ExamCoursesForm;
            }(Serenity.PrefixedContext));
            Master.ExamCoursesForm = ExamCoursesForm;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var ExamCoursesRow;
            (function (ExamCoursesRow) {
                ExamCoursesRow.idProperty = 'Id';
                ExamCoursesRow.localTextPrefix = 'Master.ExamCourses';
                ExamCoursesRow.deletePermission = 'Master:Exams';
                ExamCoursesRow.insertPermission = 'Master:Exams';
                ExamCoursesRow.readPermission = 'Master:Exams';
                ExamCoursesRow.updatePermission = 'Master:Exams';
            })(ExamCoursesRow = Master.ExamCoursesRow || (Master.ExamCoursesRow = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var ExamCoursesService;
            (function (ExamCoursesService) {
                ExamCoursesService.baseUrl = 'Master/ExamCourses';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    ExamCoursesService[x] = function (r, s, o) {
                        return Q.serviceRequest(ExamCoursesService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(ExamCoursesService = Master.ExamCoursesService || (Master.ExamCoursesService = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var ExamMaxMarksForm = /** @class */ (function (_super) {
                __extends(ExamMaxMarksForm, _super);
                function ExamMaxMarksForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!ExamMaxMarksForm.init) {
                        ExamMaxMarksForm.init = true;
                        var s = Serenity;
                        var w0 = s.LookupEditor;
                        var w1 = s.DecimalEditor;
                        Q.initFormType(ExamMaxMarksForm, [
                            'CourseSubjectId', w0,
                            'MaxMark', w1
                        ]);
                    }
                    return _this;
                }
                ExamMaxMarksForm.formKey = 'Master.ExamMaxMarks';
                return ExamMaxMarksForm;
            }(Serenity.PrefixedContext));
            Master.ExamMaxMarksForm = ExamMaxMarksForm;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var ExamMaxMarksRow;
            (function (ExamMaxMarksRow) {
                ExamMaxMarksRow.idProperty = 'Id';
                ExamMaxMarksRow.localTextPrefix = 'Master.ExamMaxMarks';
                ExamMaxMarksRow.deletePermission = 'Master:Exams';
                ExamMaxMarksRow.insertPermission = 'Master:Exams';
                ExamMaxMarksRow.readPermission = 'Master:Exams';
                ExamMaxMarksRow.updatePermission = 'Master:Exams';
            })(ExamMaxMarksRow = Master.ExamMaxMarksRow || (Master.ExamMaxMarksRow = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var ExamMaxMarksService;
            (function (ExamMaxMarksService) {
                ExamMaxMarksService.baseUrl = 'Master/ExamMaxMarks';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    ExamMaxMarksService[x] = function (r, s, o) {
                        return Q.serviceRequest(ExamMaxMarksService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(ExamMaxMarksService = Master.ExamMaxMarksService || (Master.ExamMaxMarksService = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var ExamsForm = /** @class */ (function (_super) {
                __extends(ExamsForm, _super);
                function ExamsForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!ExamsForm.init) {
                        ExamsForm.init = true;
                        var s = Serenity;
                        var w0 = s.StringEditor;
                        var w1 = s.LookupEditor;
                        var w2 = Master.ExamCoursesEditor;
                        Q.initFormType(ExamsForm, [
                            'Code', w0,
                            'ExamName', w0,
                            'AcadamicYearId', w1,
                            'Courses', w2
                        ]);
                    }
                    return _this;
                }
                ExamsForm.formKey = 'Master.Exams';
                return ExamsForm;
            }(Serenity.PrefixedContext));
            Master.ExamsForm = ExamsForm;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var ExamsRow;
            (function (ExamsRow) {
                ExamsRow.idProperty = 'Id';
                ExamsRow.nameProperty = 'ExamName';
                ExamsRow.localTextPrefix = 'Master.Exams';
                ExamsRow.lookupKey = 'Master.Exams';
                function getLookup() {
                    return Q.getLookup('Master.Exams');
                }
                ExamsRow.getLookup = getLookup;
                ExamsRow.deletePermission = 'Master:Exams';
                ExamsRow.insertPermission = 'Master:Exams';
                ExamsRow.readPermission = 'Master:Exams';
                ExamsRow.updatePermission = 'Master:Exams';
            })(ExamsRow = Master.ExamsRow || (Master.ExamsRow = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var ExamsService;
            (function (ExamsService) {
                ExamsService.baseUrl = 'Master/Exams';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List',
                    'GetAcadamicYearCourseSubjects'
                ].forEach(function (x) {
                    ExamsService[x] = function (r, s, o) {
                        return Q.serviceRequest(ExamsService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(ExamsService = Master.ExamsService || (Master.ExamsService = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var FeeExcemptionsForm = /** @class */ (function (_super) {
                __extends(FeeExcemptionsForm, _super);
                function FeeExcemptionsForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!FeeExcemptionsForm.init) {
                        FeeExcemptionsForm.init = true;
                        var s = Serenity;
                        var w0 = s.LookupEditor;
                        var w1 = s.DecimalEditor;
                        Q.initFormType(FeeExcemptionsForm, [
                            'StudentId', w0,
                            'CourseId', w0,
                            'CourseFeeId', w0,
                            'FeeExcempted', w1
                        ]);
                    }
                    return _this;
                }
                FeeExcemptionsForm.formKey = 'Master.FeeExcemptions';
                return FeeExcemptionsForm;
            }(Serenity.PrefixedContext));
            Master.FeeExcemptionsForm = FeeExcemptionsForm;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var FeeExcemptionsRow;
            (function (FeeExcemptionsRow) {
                FeeExcemptionsRow.idProperty = 'Id';
                FeeExcemptionsRow.localTextPrefix = 'Master.FeeExcemptions';
                FeeExcemptionsRow.lookupKey = 'Master.FeeExcemptions';
                function getLookup() {
                    return Q.getLookup('Master.FeeExcemptions');
                }
                FeeExcemptionsRow.getLookup = getLookup;
                FeeExcemptionsRow.deletePermission = 'Master:FeeExcemptions';
                FeeExcemptionsRow.insertPermission = 'Master:FeeExcemptions';
                FeeExcemptionsRow.readPermission = 'Master:FeeExcemptions';
                FeeExcemptionsRow.updatePermission = 'Master:FeeExcemptions';
            })(FeeExcemptionsRow = Master.FeeExcemptionsRow || (Master.FeeExcemptionsRow = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var FeeExcemptionsService;
            (function (FeeExcemptionsService) {
                FeeExcemptionsService.baseUrl = 'Master/FeeExcemptions';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    FeeExcemptionsService[x] = function (r, s, o) {
                        return Q.serviceRequest(FeeExcemptionsService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(FeeExcemptionsService = Master.FeeExcemptionsService || (Master.FeeExcemptionsService = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var FeesForm = /** @class */ (function (_super) {
                __extends(FeesForm, _super);
                function FeesForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!FeesForm.init) {
                        FeesForm.init = true;
                        var s = Serenity;
                        var w0 = s.StringEditor;
                        var w1 = s.DecimalEditor;
                        var w2 = s.LookupEditor;
                        var w3 = s.BooleanEditor;
                        var w4 = Master.FeeStructureEditor;
                        Q.initFormType(FeesForm, [
                            'Code', w0,
                            'FeeName', w0,
                            'AnnualFee', w1,
                            'DebitAccountHeadId', w2,
                            'IsTranportation', w3,
                            'CourseFee', w2,
                            'FeeStructures', w4
                        ]);
                    }
                    return _this;
                }
                FeesForm.formKey = 'Master.Fees';
                return FeesForm;
            }(Serenity.PrefixedContext));
            Master.FeesForm = FeesForm;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var FeesRow;
            (function (FeesRow) {
                FeesRow.idProperty = 'Id';
                FeesRow.nameProperty = 'FullName';
                FeesRow.localTextPrefix = 'Master.Fees';
                FeesRow.lookupKey = 'Master.Fees';
                function getLookup() {
                    return Q.getLookup('Master.Fees');
                }
                FeesRow.getLookup = getLookup;
                FeesRow.deletePermission = 'Master:Fees';
                FeesRow.insertPermission = 'Master:Fees';
                FeesRow.readPermission = 'Master:Fees';
                FeesRow.updatePermission = 'Master:Fees';
            })(FeesRow = Master.FeesRow || (Master.FeesRow = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var FeesService;
            (function (FeesService) {
                FeesService.baseUrl = 'Master/Fees';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List',
                    'GetTermsOfCurrentAcadamicYear'
                ].forEach(function (x) {
                    FeesService[x] = function (r, s, o) {
                        return Q.serviceRequest(FeesService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(FeesService = Master.FeesService || (Master.FeesService = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var FeeStructureForm = /** @class */ (function (_super) {
                __extends(FeeStructureForm, _super);
                function FeeStructureForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!FeeStructureForm.init) {
                        FeeStructureForm.init = true;
                        var s = Serenity;
                        var w0 = s.LookupEditor;
                        var w1 = s.DecimalEditor;
                        Q.initFormType(FeeStructureForm, [
                            'AcadamicYearId', w0,
                            'FeeTermId', w0,
                            'FeeAmount', w1
                        ]);
                    }
                    return _this;
                }
                FeeStructureForm.formKey = 'Master.FeeStructure';
                return FeeStructureForm;
            }(Serenity.PrefixedContext));
            Master.FeeStructureForm = FeeStructureForm;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var FeeStructureRow;
            (function (FeeStructureRow) {
                FeeStructureRow.idProperty = 'Id';
                FeeStructureRow.nameProperty = 'FeeTermTermName';
                FeeStructureRow.localTextPrefix = 'Master.FeeStructure';
                FeeStructureRow.lookupKey = 'Master.FeeStructure';
                function getLookup() {
                    return Q.getLookup('Master.FeeStructure');
                }
                FeeStructureRow.getLookup = getLookup;
                FeeStructureRow.deletePermission = 'Master:FeeStructure';
                FeeStructureRow.insertPermission = 'Master:FeeStructure';
                FeeStructureRow.readPermission = 'Master:FeeStructure';
                FeeStructureRow.updatePermission = 'Master:FeeStructure';
            })(FeeStructureRow = Master.FeeStructureRow || (Master.FeeStructureRow = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var FeeStructureService;
            (function (FeeStructureService) {
                FeeStructureService.baseUrl = 'Master/FeeStructure';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    FeeStructureService[x] = function (r, s, o) {
                        return Q.serviceRequest(FeeStructureService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(FeeStructureService = Master.FeeStructureService || (Master.FeeStructureService = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var FeeTermsForm = /** @class */ (function (_super) {
                __extends(FeeTermsForm, _super);
                function FeeTermsForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!FeeTermsForm.init) {
                        FeeTermsForm.init = true;
                        var s = Serenity;
                        var w0 = s.StringEditor;
                        Q.initFormType(FeeTermsForm, [
                            'TermName', w0
                        ]);
                    }
                    return _this;
                }
                FeeTermsForm.formKey = 'Master.FeeTerms';
                return FeeTermsForm;
            }(Serenity.PrefixedContext));
            Master.FeeTermsForm = FeeTermsForm;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var FeeTermsRow;
            (function (FeeTermsRow) {
                FeeTermsRow.idProperty = 'Id';
                FeeTermsRow.nameProperty = 'TermName';
                FeeTermsRow.localTextPrefix = 'Master.FeeTerms';
                FeeTermsRow.lookupKey = 'Master.FeeTerms';
                function getLookup() {
                    return Q.getLookup('Master.FeeTerms');
                }
                FeeTermsRow.getLookup = getLookup;
                FeeTermsRow.deletePermission = 'Master:FeeTerms';
                FeeTermsRow.insertPermission = 'Master:FeeTerms';
                FeeTermsRow.readPermission = 'Master:FeeTerms';
                FeeTermsRow.updatePermission = 'Master:FeeTerms';
            })(FeeTermsRow = Master.FeeTermsRow || (Master.FeeTermsRow = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var FeeTermsService;
            (function (FeeTermsService) {
                FeeTermsService.baseUrl = 'Master/FeeTerms';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    FeeTermsService[x] = function (r, s, o) {
                        return Q.serviceRequest(FeeTermsService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(FeeTermsService = Master.FeeTermsService || (Master.FeeTermsService = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var StaffsForm = /** @class */ (function (_super) {
                __extends(StaffsForm, _super);
                function StaffsForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!StaffsForm.init) {
                        StaffsForm.init = true;
                        var s = Serenity;
                        var w0 = s.StringEditor;
                        var w1 = s.LookupEditor;
                        var w2 = s.BooleanEditor;
                        var w3 = s.DateEditor;
                        var w4 = s.TextAreaEditor;
                        var w5 = s.DecimalEditor;
                        var w6 = s.IntegerEditor;
                        Q.initFormType(StaffsForm, [
                            'Code', w0,
                            'StaffName', w0,
                            'ContactId', w1,
                            'IsTeacher', w2,
                            'JoiningDate', w3,
                            'Qualification', w0,
                            'StaffSubjects', w1,
                            'Remarks', w4,
                            'DailyWage', w5,
                            'SalaryAmount', w5,
                            'DaysCount', w6
                        ]);
                    }
                    return _this;
                }
                StaffsForm.formKey = 'Master.Staffs';
                return StaffsForm;
            }(Serenity.PrefixedContext));
            Master.StaffsForm = StaffsForm;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var StaffsRow;
            (function (StaffsRow) {
                StaffsRow.idProperty = 'Id';
                StaffsRow.nameProperty = 'FullName';
                StaffsRow.localTextPrefix = 'Master.Staffs';
                StaffsRow.lookupKey = 'Master.Staffs';
                function getLookup() {
                    return Q.getLookup('Master.Staffs');
                }
                StaffsRow.getLookup = getLookup;
                StaffsRow.deletePermission = 'Master:Staffs';
                StaffsRow.insertPermission = 'Master:Staffs';
                StaffsRow.readPermission = 'Master:Staffs';
                StaffsRow.updatePermission = 'Master:Staffs';
            })(StaffsRow = Master.StaffsRow || (Master.StaffsRow = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var StaffsService;
            (function (StaffsService) {
                StaffsService.baseUrl = 'Master/Staffs';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List',
                    'GetNextNumber'
                ].forEach(function (x) {
                    StaffsService[x] = function (r, s, o) {
                        return Q.serviceRequest(StaffsService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(StaffsService = Master.StaffsService || (Master.StaffsService = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var StaffSubjectsForm = /** @class */ (function (_super) {
                __extends(StaffSubjectsForm, _super);
                function StaffSubjectsForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!StaffSubjectsForm.init) {
                        StaffSubjectsForm.init = true;
                        var s = Serenity;
                        var w0 = s.IntegerEditor;
                        Q.initFormType(StaffSubjectsForm, [
                            'StaffId', w0,
                            'SubjectId', w0
                        ]);
                    }
                    return _this;
                }
                StaffSubjectsForm.formKey = 'Master.StaffSubjects';
                return StaffSubjectsForm;
            }(Serenity.PrefixedContext));
            Master.StaffSubjectsForm = StaffSubjectsForm;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var StaffSubjectsRow;
            (function (StaffSubjectsRow) {
                StaffSubjectsRow.idProperty = 'Id';
                StaffSubjectsRow.localTextPrefix = 'Master.StaffSubjects';
                StaffSubjectsRow.deletePermission = 'Master:Staffs';
                StaffSubjectsRow.insertPermission = 'Master:Staffs';
                StaffSubjectsRow.readPermission = 'Master:Staffs';
                StaffSubjectsRow.updatePermission = 'Master:Staffs';
            })(StaffSubjectsRow = Master.StaffSubjectsRow || (Master.StaffSubjectsRow = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var StaffSubjectsService;
            (function (StaffSubjectsService) {
                StaffSubjectsService.baseUrl = 'Master/StaffSubjects';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    StaffSubjectsService[x] = function (r, s, o) {
                        return Q.serviceRequest(StaffSubjectsService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(StaffSubjectsService = Master.StaffSubjectsService || (Master.StaffSubjectsService = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var StudentCurrentCoursesForm = /** @class */ (function (_super) {
                __extends(StudentCurrentCoursesForm, _super);
                function StudentCurrentCoursesForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!StudentCurrentCoursesForm.init) {
                        StudentCurrentCoursesForm.init = true;
                        var s = Serenity;
                        var w0 = s.IntegerEditor;
                        Q.initFormType(StudentCurrentCoursesForm, [
                            'StudentId', w0,
                            'CourseId', w0
                        ]);
                    }
                    return _this;
                }
                StudentCurrentCoursesForm.formKey = 'Master.StudentCurrentCourses';
                return StudentCurrentCoursesForm;
            }(Serenity.PrefixedContext));
            Master.StudentCurrentCoursesForm = StudentCurrentCoursesForm;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var StudentCurrentCoursesRow;
            (function (StudentCurrentCoursesRow) {
                StudentCurrentCoursesRow.idProperty = 'Id';
                StudentCurrentCoursesRow.localTextPrefix = 'Master.StudentCurrentCourses';
                StudentCurrentCoursesRow.deletePermission = 'Master:Students';
                StudentCurrentCoursesRow.insertPermission = 'Master:Students';
                StudentCurrentCoursesRow.readPermission = 'Master:Students';
                StudentCurrentCoursesRow.updatePermission = 'Master:Students';
            })(StudentCurrentCoursesRow = Master.StudentCurrentCoursesRow || (Master.StudentCurrentCoursesRow = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var StudentCurrentCoursesService;
            (function (StudentCurrentCoursesService) {
                StudentCurrentCoursesService.baseUrl = 'Master/StudentCurrentCourses';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    StudentCurrentCoursesService[x] = function (r, s, o) {
                        return Q.serviceRequest(StudentCurrentCoursesService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(StudentCurrentCoursesService = Master.StudentCurrentCoursesService || (Master.StudentCurrentCoursesService = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var StudentsForm = /** @class */ (function (_super) {
                __extends(StudentsForm, _super);
                function StudentsForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!StudentsForm.init) {
                        StudentsForm.init = true;
                        var s = Serenity;
                        var w0 = s.LookupEditor;
                        var w1 = s.StringEditor;
                        var w2 = s.EnumEditor;
                        var w3 = s.DateEditor;
                        var w4 = s.TextAreaEditor;
                        var w5 = s.ImageUploadEditor;
                        Q.initFormType(StudentsForm, [
                            'CampusId', w0,
                            'Code', w1,
                            'StudentName', w1,
                            'Gender', w2,
                            'DOB', w3,
                            'IDNO', w1,
                            'FatherContactId', w0,
                            'MotherContactId', w0,
                            'StudentContactId', w0,
                            'JoiningDate', w3,
                            'JoiningCourse', w0,
                            'JoiningDivisionId', w0,
                            'OtherInstitute', w1,
                            'Division', w1,
                            'AdmissionAcadamicYearId', w0,
                            'AdmissionFeeTermId', w0,
                            'LandMark', w1,
                            'BusStop', w1,
                            'Remarks', w4,
                            'CurrentCourses', w0,
                            'Photo', w5,
                            'TranportationFeeId', w0,
                            'FromAcadamicYearId', w0,
                            'FromFeeTermId', w0
                        ]);
                    }
                    return _this;
                }
                StudentsForm.formKey = 'Master.Students';
                return StudentsForm;
            }(Serenity.PrefixedContext));
            Master.StudentsForm = StudentsForm;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var StudentsRow;
            (function (StudentsRow) {
                StudentsRow.idProperty = 'Id';
                StudentsRow.nameProperty = 'FullName';
                StudentsRow.localTextPrefix = 'Master.Students';
                StudentsRow.lookupKey = 'Master.Students';
                function getLookup() {
                    return Q.getLookup('Master.Students');
                }
                StudentsRow.getLookup = getLookup;
                StudentsRow.deletePermission = 'Master:StudentsDelete';
                StudentsRow.insertPermission = 'Master:StudentsCreate';
                StudentsRow.readPermission = 'Master:Students';
                StudentsRow.updatePermission = 'Master:StudentsUpdate';
            })(StudentsRow = Master.StudentsRow || (Master.StudentsRow = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var StudentsService;
            (function (StudentsService) {
                StudentsService.baseUrl = 'Master/Students';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List',
                    'GetConfig',
                    'GetNextNumber',
                    'GetDefaultCampus'
                ].forEach(function (x) {
                    StudentsService[x] = function (r, s, o) {
                        return Q.serviceRequest(StudentsService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(StudentsService = Master.StudentsService || (Master.StudentsService = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var SubjectsForm = /** @class */ (function (_super) {
                __extends(SubjectsForm, _super);
                function SubjectsForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!SubjectsForm.init) {
                        SubjectsForm.init = true;
                        var s = Serenity;
                        var w0 = s.StringEditor;
                        Q.initFormType(SubjectsForm, [
                            'Code', w0,
                            'SubjectName', w0
                        ]);
                    }
                    return _this;
                }
                SubjectsForm.formKey = 'Master.Subjects';
                return SubjectsForm;
            }(Serenity.PrefixedContext));
            Master.SubjectsForm = SubjectsForm;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var SubjectsRow;
            (function (SubjectsRow) {
                SubjectsRow.idProperty = 'Id';
                SubjectsRow.nameProperty = 'SubjectName';
                SubjectsRow.localTextPrefix = 'Master.Subjects';
                SubjectsRow.lookupKey = 'Master.Subjects';
                function getLookup() {
                    return Q.getLookup('Master.Subjects');
                }
                SubjectsRow.getLookup = getLookup;
                SubjectsRow.deletePermission = 'Master:Subjects';
                SubjectsRow.insertPermission = 'Master:Subjects';
                SubjectsRow.readPermission = 'Master:Subjects';
                SubjectsRow.updatePermission = 'Master:Subjects';
            })(SubjectsRow = Master.SubjectsRow || (Master.SubjectsRow = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var SubjectsService;
            (function (SubjectsService) {
                SubjectsService.baseUrl = 'Master/Subjects';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    SubjectsService[x] = function (r, s, o) {
                        return Q.serviceRequest(SubjectsService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(SubjectsService = Master.SubjectsService || (Master.SubjectsService = {}));
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Membership;
        (function (Membership) {
            var ChangePasswordForm = /** @class */ (function (_super) {
                __extends(ChangePasswordForm, _super);
                function ChangePasswordForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!ChangePasswordForm.init) {
                        ChangePasswordForm.init = true;
                        var s = Serenity;
                        var w0 = s.PasswordEditor;
                        Q.initFormType(ChangePasswordForm, [
                            'OldPassword', w0,
                            'NewPassword', w0,
                            'ConfirmPassword', w0
                        ]);
                    }
                    return _this;
                }
                ChangePasswordForm.formKey = 'Membership.ChangePassword';
                return ChangePasswordForm;
            }(Serenity.PrefixedContext));
            Membership.ChangePasswordForm = ChangePasswordForm;
        })(Membership = SchoolMate.Membership || (SchoolMate.Membership = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Membership;
        (function (Membership) {
            var ForgotPasswordForm = /** @class */ (function (_super) {
                __extends(ForgotPasswordForm, _super);
                function ForgotPasswordForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!ForgotPasswordForm.init) {
                        ForgotPasswordForm.init = true;
                        var s = Serenity;
                        var w0 = s.EmailEditor;
                        Q.initFormType(ForgotPasswordForm, [
                            'Email', w0
                        ]);
                    }
                    return _this;
                }
                ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
                return ForgotPasswordForm;
            }(Serenity.PrefixedContext));
            Membership.ForgotPasswordForm = ForgotPasswordForm;
        })(Membership = SchoolMate.Membership || (SchoolMate.Membership = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Membership;
        (function (Membership) {
            var LoginForm = /** @class */ (function (_super) {
                __extends(LoginForm, _super);
                function LoginForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!LoginForm.init) {
                        LoginForm.init = true;
                        var s = Serenity;
                        var w0 = s.StringEditor;
                        var w1 = s.PasswordEditor;
                        Q.initFormType(LoginForm, [
                            'Username', w0,
                            'Password', w1
                        ]);
                    }
                    return _this;
                }
                LoginForm.formKey = 'Membership.Login';
                return LoginForm;
            }(Serenity.PrefixedContext));
            Membership.LoginForm = LoginForm;
        })(Membership = SchoolMate.Membership || (SchoolMate.Membership = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Membership;
        (function (Membership) {
            var ResetPasswordForm = /** @class */ (function (_super) {
                __extends(ResetPasswordForm, _super);
                function ResetPasswordForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!ResetPasswordForm.init) {
                        ResetPasswordForm.init = true;
                        var s = Serenity;
                        var w0 = s.PasswordEditor;
                        Q.initFormType(ResetPasswordForm, [
                            'NewPassword', w0,
                            'ConfirmPassword', w0
                        ]);
                    }
                    return _this;
                }
                ResetPasswordForm.formKey = 'Membership.ResetPassword';
                return ResetPasswordForm;
            }(Serenity.PrefixedContext));
            Membership.ResetPasswordForm = ResetPasswordForm;
        })(Membership = SchoolMate.Membership || (SchoolMate.Membership = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Membership;
        (function (Membership) {
            var SignUpForm = /** @class */ (function (_super) {
                __extends(SignUpForm, _super);
                function SignUpForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!SignUpForm.init) {
                        SignUpForm.init = true;
                        var s = Serenity;
                        var w0 = s.StringEditor;
                        var w1 = s.EmailEditor;
                        var w2 = s.PasswordEditor;
                        Q.initFormType(SignUpForm, [
                            'DisplayName', w0,
                            'Email', w1,
                            'ConfirmEmail', w1,
                            'Password', w2,
                            'ConfirmPassword', w2
                        ]);
                    }
                    return _this;
                }
                SignUpForm.formKey = 'Membership.SignUp';
                return SignUpForm;
            }(Serenity.PrefixedContext));
            Membership.SignUpForm = SignUpForm;
        })(Membership = SchoolMate.Membership || (SchoolMate.Membership = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var PromotionTypes;
        (function (PromotionTypes) {
            PromotionTypes[PromotionTypes["Value1"] = 1] = "Value1";
            PromotionTypes[PromotionTypes["Value2"] = 2] = "Value2";
        })(PromotionTypes = SchoolMate.PromotionTypes || (SchoolMate.PromotionTypes = {}));
        Serenity.Decorators.registerEnumType(PromotionTypes, 'BitPro.SchoolMate.PromotionTypes');
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Texts;
        (function (Texts) {
            BitPro.SchoolMate['Texts'] = Q.proxyTexts(Texts, '', { Db: { Accounts: { Accounts: { AccountHeadCode: 1, AccountHeadDescription: 1, AccountHeadId: 1, AccountHeadLedgerType: 1, AccountHeadParentHeadId: 1, AccountHeadTenantId: 1, AccountNo: 1, Id: 1, IsDefault: 1, TenantId: 1, Type: 1 }, Contra: { Amount: 1, Attachments: 1, ContactId: 1, CreditAccountAccountHeadId: 1, CreditAccountAccountNo: 1, CreditAccountHeadCode: 1, CreditAccountHeadDescription: 1, CreditAccountHeadId: 1, CreditAccountHeadLedgerType: 1, CreditAccountHeadParentHeadId: 1, CreditAccountHeadTenantId: 1, CreditAccountId: 1, CreditAccountType: 1, DebitAccountAccountHeadId: 1, DebitAccountAccountNo: 1, DebitAccountHeadCode: 1, DebitAccountHeadDescription: 1, DebitAccountHeadId: 1, DebitAccountHeadLedgerType: 1, DebitAccountHeadParentHeadId: 1, DebitAccountHeadTenantId: 1, DebitAccountId: 1, DebitAccountType: 1, EntityId: 1, EntityType: 1, Id: 1, PaymentMethod: 1, Remarks: 1, TenantId: 1, TrxDate: 1, VNo: 1, VType: 1 }, Payment: { Amount: 1, Attachments: 1, ContactId: 1, CreditAccountAccountHeadId: 1, CreditAccountAccountNo: 1, CreditAccountHeadCode: 1, CreditAccountHeadDescription: 1, CreditAccountHeadId: 1, CreditAccountHeadLedgerType: 1, CreditAccountHeadParentHeadId: 1, CreditAccountHeadTenantId: 1, CreditAccountId: 1, CreditAccountType: 1, DebitAccountAccountHeadId: 1, DebitAccountAccountNo: 1, DebitAccountHeadCode: 1, DebitAccountHeadDescription: 1, DebitAccountHeadId: 1, DebitAccountHeadLedgerType: 1, DebitAccountHeadParentHeadId: 1, DebitAccountHeadTenantId: 1, DebitAccountId: 1, DebitAccountType: 1, EntityId: 1, EntityType: 1, Id: 1, PaymentMethod: 1, Remarks: 1, SalaryPaymentEntityId: 1, TenantId: 1, TrxDate: 1, VNo: 1, VType: 1 }, Receipt: { Amount: 1, Attachments: 1, ContactId: 1, CreditAccountAccountHeadId: 1, CreditAccountAccountNo: 1, CreditAccountHeadCode: 1, CreditAccountHeadDescription: 1, CreditAccountHeadId: 1, CreditAccountHeadLedgerType: 1, CreditAccountHeadParentHeadId: 1, CreditAccountHeadTenantId: 1, CreditAccountId: 1, CreditAccountType: 1, DebitAccountAccountHeadId: 1, DebitAccountAccountNo: 1, DebitAccountHeadCode: 1, DebitAccountHeadDescription: 1, DebitAccountHeadId: 1, DebitAccountHeadLedgerType: 1, DebitAccountHeadParentHeadId: 1, DebitAccountHeadTenantId: 1, DebitAccountId: 1, DebitAccountType: 1, EntityId: 1, EntityType: 1, Id: 1, PaymentMethod: 1, Remarks: 1, TenantId: 1, TranportationEntityId: 1, TrxDate: 1, VNo: 1, VType: 1 } }, Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1, TenantId: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Settings: { Id: 1, Name: 1, TenantId: 1, Type: 1, ValueBool: 1, ValueDate: 1, ValueNumber: 1, ValueString: 1 }, SystemSettings: { Id: 1, SalaryAccount: 1, SalaryAccountCode: 1, SalaryAccountDescription: 1, SalaryAccountLedgerType: 1, SalaryAccountParentHeadId: 1, SalaryAccountTenantId: 1, SatffCodeLength: 1, SatffCodePrefix: 1, StudentCodeLength: 1, StudentCodePrefix: 1, TenantId: 1 }, Tenant: { TenantId: 1, TenantName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DefaultCampusId: 1, DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, TenantId: 1, TenantName: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, Master: { AcadamicYear: { Code: 1, Description: 1, FeeTerms: 1, Id: 1, PeriodFrom: 1, PeriodTo: 1, TenantId: 1 }, AccountHeads: { Code: 1, Description: 1, Id: 1, LedgerType: 1, ParentHeadCode: 1, ParentHeadDescription: 1, ParentHeadId: 1, ParentHeadParentHeadId: 1, ParentHeadTenantId: 1, TenantId: 1 }, Areas: { AreaName: 1, Code: 1, CountryCode: 1, CountryCurrencyName: 1, CountryId: 1, CountryPrecision: 1, CountryTenantId: 1, Id: 1, TenantId: 1 }, Campuses: { Address: 1, AreaAreaName: 1, AreaCode: 1, AreaCountryId: 1, AreaId: 1, AreaTenantId: 1, Campus: 1, Code: 1, CodeLength: 1, ContactPerson: 1, CountryCode: 1, CountryCountryName: 1, CountryCurrencyId: 1, CountryId: 1, CountryTenantId: 1, Email: 1, FullName: 1, Id: 1, IsDefault: 1, Mobile: 1, Phone: 1, Student_Prefix: 1, TenantId: 1, Website: 1 }, Contacts: { Address1: 1, Address2: 1, Email: 1, Id: 1, Name: 1, Nationality: 1, NationalityCode: 1, NationalityCountryName: 1, NationalityCurrencyId: 1, NationalityTenantId: 1, Phone: 1, TenantId: 1, Whatsapp: 1 }, Countries: { Code: 1, CountryName: 1, CurrencyCode: 1, CurrencyCurrencyName: 1, CurrencyId: 1, CurrencyPrecision: 1, CurrencyTenantId: 1, FullName: 1, Id: 1, TenantId: 1 }, CourseDivisions: { CourseActive: 1, CourseCode: 1, CourseCourseName: 1, CourseId: 1, CourseNonAcadamic: 1, CourseTenantId: 1, DivisionCode: 1, Id: 1 }, CourseFee: { CourseActive: 1, CourseCode: 1, CourseCourseName: 1, CourseId: 1, CourseNonAcadamic: 1, CourseTenantId: 1, FeeAnnualFee: 1, FeeCode: 1, FeeFeeName: 1, FeeId: 1, FeeTenantId: 1, Id: 1 }, CourseSubjects: { CourseActive: 1, CourseCode: 1, CourseCourseName: 1, CourseId: 1, CourseNonAcadamic: 1, CourseTenantId: 1, Id: 1, MaxMarks: 1, SubjectCode: 1, SubjectId: 1, SubjectSubjectName: 1, SubjectTenantId: 1 }, Courses: { Active: 1, Code: 1, CourseDivisions: 1, CourseFullName: 1, CourseName: 1, CourseSubject: 1, Id: 1, NonAcadamic: 1, TenantId: 1 }, Currencies: { Code: 1, CurrencyName: 1, Id: 1, Precision: 1, TenantId: 1 }, DivisionStudents: { DivisionAcadamicYearId: 1, DivisionCourseId: 1, DivisionDivisionCode: 1, DivisionId: 1, DivisionTeacherId: 1, DivisionTenantId: 1, Id: 1, PromotionDetailId: 1, PromotionDetailIsCompleted: 1, PromotionDetailPromotionId: 1, PromotionDetailPromotionType: 1, PromotionDetailStudentId: 1, Student: 1 }, Divisions: { AcadamicYearCode: 1, AcadamicYearDescription: 1, AcadamicYearId: 1, AcadamicYearPeriodFrom: 1, AcadamicYearPeriodTo: 1, AcadamicYearTenantId: 1, DivisionCode: 1, DivisionStudents: 1, Id: 1, PromotionId: 1, TeacherCode: 1, TeacherContactId: 1, TeacherDailyWage: 1, TeacherId: 1, TeacherIsTeacher: 1, TeacherRemarks: 1, TeacherStaffName: 1, TeacherTenantId: 1, TenantId: 1 }, ExamCourses: { Course: 1, ExamAcadamicYearId: 1, ExamCode: 1, ExamExamName: 1, ExamId: 1, ExamTenantId: 1, Id: 1, PromotionAcadamicYearId: 1, PromotionCreatedBy: 1, PromotionCreatedDate: 1, PromotionFromCourse: 1, PromotionId: 1, PromotionJoiningDivisionId: 1, PromotionTenantId: 1, PromotionToCourse: 1, Subjects: 1 }, ExamMaxMarks: { CourseSubject: 1, CourseSubjectCourseId: 1, CourseSubjectId: 1, CourseSubjectMaxMarks: 1, CourseSubjectSubjectId: 1, ExamCoursesExamId: 1, ExamCoursesId: 1, ExamCoursesPromotionId: 1, Id: 1, MaxMark: 1 }, Exams: { AcadamicYearCode: 1, AcadamicYearDescription: 1, AcadamicYearId: 1, AcadamicYearPeriodFrom: 1, AcadamicYearPeriodTo: 1, AcadamicYearTenantId: 1, Code: 1, Courses: 1, ExamName: 1, Id: 1, TenantId: 1 }, FeeExcemptions: { CourseFeeId: 1, CourseId: 1, FeeExcempted: 1, Id: 1, StudentCampusId: 1, StudentCode: 1, StudentDivision: 1, StudentFatherContactId: 1, StudentId: 1, StudentJoiningCourse: 1, StudentJoiningDate: 1, StudentMotherContactId: 1, StudentOtherInstitute: 1, StudentStudentContactId: 1, StudentTenantId: 1, TenantId: 1 }, FeeStructure: { AcadamicYearCode: 1, AcadamicYearDescription: 1, AcadamicYearId: 1, AcadamicYearPeriodFrom: 1, AcadamicYearPeriodTo: 1, FeeAmount: 1, FeeAnnualFee: 1, FeeCode: 1, FeeFeeName: 1, FeeId: 1, FeeTenantId: 1, FeeTermId: 1, FeeTermTermName: 1, Id: 1, TenantId: 1 }, FeeTerms: { AcadamicYearId: 1, Id: 1, TenantId: 1, TermName: 1 }, Fees: { AnnualFee: 1, Code: 1, CourseFee: 1, DebitAccountHeadCode: 1, DebitAccountHeadDescription: 1, DebitAccountHeadId: 1, DebitAccountHeadLedgerType: 1, DebitAccountHeadParentHeadId: 1, DebitAccountHeadTenantId: 1, FeeName: 1, FeeStructures: 1, FullName: 1, Id: 1, IsTranportation: 1, TenantId: 1 }, StaffSubjects: { Id: 1, StaffCode: 1, StaffContactId: 1, StaffDailyWage: 1, StaffId: 1, StaffIsTeacher: 1, StaffRemarks: 1, StaffStaffName: 1, SubjectCode: 1, SubjectId: 1, SubjectSubjectName: 1 }, Staffs: { Code: 1, ContactAddress1: 1, ContactAddress2: 1, ContactEmail: 1, ContactId: 1, ContactName: 1, ContactNationality: 1, ContactPhone: 1, ContactWhatsapp: 1, DailyWage: 1, DaysCount: 1, FullName: 1, Id: 1, IsTeacher: 1, JoiningDate: 1, Qualification: 1, Remarks: 1, SalaryAmount: 1, StaffName: 1, StaffSubjects: 1, TenantId: 1 }, StudentCurrentCourses: { CourseActive: 1, CourseCode: 1, CourseCourseName: 1, CourseId: 1, CourseNonAcadamic: 1, CourseTenantId: 1, Id: 1, StudentBusStop: 1, StudentCampusId: 1, StudentCode: 1, StudentDivision: 1, StudentDob: 1, StudentFatherContactId: 1, StudentGender: 1, StudentId: 1, StudentIdno: 1, StudentJoiningCourse: 1, StudentJoiningDate: 1, StudentLandMark: 1, StudentMotherContactId: 1, StudentOtherInstitute: 1, StudentPhoto: 1, StudentRemarks: 1, StudentStudentContactId: 1, StudentStudentName: 1, StudentTenantId: 1 }, Students: { AdmissionAcadamicYearId: 1, AdmissionFeeTermId: 1, BusStop: 1, Campus: 1, CampusAddress: 1, CampusAreaId: 1, CampusCode: 1, CampusContactPerson: 1, CampusCountryId: 1, CampusEmail: 1, CampusId: 1, CampusMobile: 1, CampusPhone: 1, CampusTenantId: 1, CampusWebsite: 1, Code: 1, CurrentCourses: 1, DOB: 1, Division: 1, FatherContactAddress1: 1, FatherContactAddress2: 1, FatherContactEmail: 1, FatherContactId: 1, FatherContactName: 1, FatherContactNationality: 1, FatherContactPhone: 1, FatherContactTenantId: 1, FatherContactWhatsapp: 1, FromAcadamicYearId: 1, FromFeeTermId: 1, FullName: 1, Gender: 1, IDNO: 1, Id: 1, JoiningCourse: 1, JoiningCourseActive: 1, JoiningCourseCode: 1, JoiningCourseCourseName: 1, JoiningCourseNonAcadamic: 1, JoiningCourseTenantId: 1, JoiningDate: 1, JoiningDivisionId: 1, LandMark: 1, MotherContactAddress1: 1, MotherContactAddress2: 1, MotherContactEmail: 1, MotherContactId: 1, MotherContactName: 1, MotherContactNationality: 1, MotherContactPhone: 1, MotherContactTenantId: 1, MotherContactWhatsapp: 1, OtherInstitute: 1, Photo: 1, Remarks: 1, StudentContactAddress1: 1, StudentContactAddress2: 1, StudentContactEmail: 1, StudentContactId: 1, StudentContactName: 1, StudentContactNationality: 1, StudentContactPhone: 1, StudentContactTenantId: 1, StudentContactWhatsapp: 1, StudentName: 1, TenantId: 1, TranportationFeeId: 1 }, Subjects: { Code: 1, Id: 1, SubjectName: 1, TenantId: 1 } }, Transactions: { Admission: { AcadamicYearCode: 1, AcadamicYearDescription: 1, AcadamicYearId: 1, AcadamicYearPeriodFrom: 1, AcadamicYearPeriodTo: 1, AcadamicYearTenantId: 1, AdmissionFeeTermId: 1, Id: 1, JoiningCourse: 1, JoiningCourseActive: 1, JoiningCourseCode: 1, JoiningCourseCourseName: 1, JoiningCourseNonAcadamic: 1, JoiningCourseTenantId: 1, JoiningDate: 1, JoiningDivisionCourseId: 1, JoiningDivisionDivisionCode: 1, JoiningDivisionId: 1, SelectedFees: 1, StudentBusStop: 1, StudentCampusId: 1, StudentCode: 1, StudentDivision: 1, StudentDob: 1, StudentFatherContactId: 1, StudentGender: 1, StudentId: 1, StudentIdno: 1, StudentJoiningCourse: 1, StudentJoiningDate: 1, StudentJoiningDivisionId: 1, StudentLandMark: 1, StudentMotherContactId: 1, StudentOtherInstitute: 1, StudentPhoto: 1, StudentRemarks: 1, StudentStudentContactId: 1, StudentStudentName: 1, StudentTenantId: 1, TenantId: 1 }, Attandance: { AcadamicYearCode: 1, AcadamicYearDescription: 1, AcadamicYearId: 1, AcadamicYearPeriodFrom: 1, AcadamicYearPeriodTo: 1, AcadamicYearTenantId: 1, Attachments: 1, Date: 1, Description: 1, Id: 1, PromotionDetailId: 1, StaffCode: 1, StaffContactId: 1, StaffDailyWage: 1, StaffId: 1, StaffIsTeacher: 1, StaffRemarks: 1, StaffStaffName: 1, StaffTenantId: 1, Status: 1, TenantId: 1 }, CourseExit: { AcadamicYearCode: 1, AcadamicYearDescription: 1, AcadamicYearId: 1, AcadamicYearPeriodFrom: 1, AcadamicYearPeriodTo: 1, AcadamicYearTenantId: 1, ExitDate: 1, ExitType: 1, Id: 1, PromotionAcadamicYearId: 1, PromotionCreatedBy: 1, PromotionCreatedDate: 1, PromotionFromCourse: 1, PromotionId: 1, PromotionJoiningDivisionId: 1, PromotionTenantId: 1, PromotionToCourse: 1, Students: 1, TenantId: 1, ToCourse: 1 }, CourseExitDetails: { Attachments: 1, CourseExitAcadamicYearId: 1, CourseExitExitDate: 1, CourseExitExitType: 1, CourseExitId: 1, CourseExitPromotionId: 1, Id: 1, PromotionDetailId: 1, PromotionDetailIsCompleted: 1, PromotionDetailPromotionId: 1, PromotionDetailPromotionType: 1, PromotionDetailStudentId: 1, Student: 1 }, FeeAllocation: { Balance: 1, Collected: 1, CourseFeeCourseId: 1, CourseFeeFeeId: 1, CourseFeeId: 1, FeeCode: 1, FeeCollectionCourseId: 1, FeeCollectionId: 1, FeeCollectionPayDate: 1, FeeCollectionStudentId: 1, FeeCollectionTenantId: 1, FeeCollectionTotalAmount: 1, FeeStrctureAcadamicYearId: 1, FeeStrctureFeeAmount: 1, FeeStrctureFeeId: 1, FeeStrctureFeeTermId: 1, FeeStrctureId: 1, FeeStrctureTenantId: 1, Id: 1, Receipts: 1, TermName: 1 }, FeeAllocationTranportation: { Balance: 1, Collected: 1, FeeAnnualFee: 1, FeeCode: 1, FeeCollectionAcadamicYearId: 1, FeeCollectionAccountId: 1, FeeCollectionId: 1, FeeCollectionPayDate: 1, FeeCollectionPaymentMethod: 1, FeeCollectionPromotionDetailId: 1, FeeCollectionStudentId: 1, FeeCollectionTenantId: 1, FeeCollectionTotalAmount: 1, FeeDebitAccountHeadId: 1, FeeFeeName: 1, FeeId: 1, FeeIsTranportation: 1, FeeStrctureAcadamicYearId: 1, FeeStrctureFeeAmount: 1, FeeStrctureFeeId: 1, FeeStrctureFeeTermId: 1, FeeStrctureId: 1, FeeStrctureTenantId: 1, FeeTenantId: 1, Id: 1, Receipts: 1, TermName: 1 }, FeeCollection: { AcadamicYearId: 1, AccountId: 1, CreditAccountAccountHeadId: 1, CreditAccountAccountNo: 1, CreditAccountType: 1, FeeAllocations: 1, Id: 1, PayDate: 1, PaymentMethod: 1, PromotionDetailId: 1, StudentCampusId: 1, StudentCode: 1, StudentDivision: 1, StudentFatherContactId: 1, StudentFullName: 1, StudentId: 1, StudentJoiningCourse: 1, StudentJoiningDate: 1, StudentMotherContactId: 1, StudentOtherInstitute: 1, StudentStudentContactId: 1, StudentTenantId: 1, TenantId: 1, TotalAmount: 1, TranportationFee: 1 }, PromotionDetails: { Course: 1, Id: 1, IsCompleted: 1, PromotionAcadamicYearId: 1, PromotionCreatedBy: 1, PromotionCreatedDate: 1, PromotionFromCourse: 1, PromotionId: 1, PromotionTenantId: 1, PromotionToCourse: 1, PromotionType: 1, StudentCampusId: 1, StudentCode: 1, StudentDivision: 1, StudentFatherContactId: 1, StudentId: 1, StudentJoiningCourse: 1, StudentJoiningDate: 1, StudentMotherContactId: 1, StudentName: 1, StudentOtherInstitute: 1, StudentStudentContactId: 1, StudentTenantId: 1 }, PromotionDetailsLookup: { Course: 1, Id: 1, IsCompleted: 1, PromotionAcadamicYearId: 1, PromotionCreatedBy: 1, PromotionCreatedDate: 1, PromotionFromCourse: 1, PromotionId: 1, PromotionTenantId: 1, PromotionToCourse: 1, PromotionType: 1, StudentCampusId: 1, StudentCode: 1, StudentDivision: 1, StudentFatherContactId: 1, StudentId: 1, StudentJoiningCourse: 1, StudentJoiningDate: 1, StudentMotherContactId: 1, StudentName: 1, StudentOtherInstitute: 1, StudentStudentContactId: 1, StudentTenantId: 1 }, Promotions: { AcadamicYearCode: 1, AcadamicYearDescription: 1, AcadamicYearId: 1, AcadamicYearPeriodFrom: 1, AcadamicYearPeriodTo: 1, AcadamicYearTenantId: 1, CreatedBy: 1, CreatedByCode: 1, CreatedByContactId: 1, CreatedByDailyWage: 1, CreatedByIsTeacher: 1, CreatedByRemarks: 1, CreatedByStaffName: 1, CreatedByTenantId: 1, CreatedDate: 1, FromCourse: 1, FromCourseActive: 1, FromCourseCode: 1, FromCourseCourseName: 1, FromCourseNonAcadamic: 1, FromCourseTenantId: 1, Id: 1, PromotionDetail: 1, PromotionDivisions: 1, TenantId: 1, ToCourse: 1, ToCourseActive: 1, ToCourseCode: 1, ToCourseCourseName: 1, ToCourseNonAcadamic: 1, ToCourseTenantId: 1 }, SalaryPayments: { CreditAccountAccountHeadId: 1, CreditAccountAccountNo: 1, CreditAccountId: 1, CreditAccountIsDefault: 1, CreditAccountTenantId: 1, CreditAccountType: 1, Id: 1, PaidAmount: 1, PaidDate: 1, PayableSalaryAmount: 1, Payment: 1, PaymentMethod: 1, SalaryAmount: 1, SalaryStructureCreatedBy: 1, SalaryStructureCreatedDate: 1, SalaryStructureFromDate: 1, SalaryStructureId: 1, SalaryStructureTenantId: 1, SalaryStructureToDate: 1, StaffCode: 1, StaffContactId: 1, StaffDailyWage: 1, StaffDaysCount: 1, StaffId: 1, StaffIsTeacher: 1, StaffJoiningDate: 1, StaffQualification: 1, StaffRemarks: 1, StaffSalaryAmount: 1, StaffStaffName: 1, StaffTenantId: 1, TotalAbsent: 1, TotalPresent: 1 }, SalaryStructure: { CreatedBy: 1, CreatedByCode: 1, CreatedByContactId: 1, CreatedByDailyWage: 1, CreatedByDaysCount: 1, CreatedByIsTeacher: 1, CreatedByJoiningDate: 1, CreatedByQualification: 1, CreatedByRemarks: 1, CreatedBySalaryAmount: 1, CreatedByStaffName: 1, CreatedByTenantId: 1, CreatedDate: 1, FromDate: 1, Id: 1, SalaryPayments: 1, TenantId: 1, ToDate: 1 }, StudentMarks: { AcadamicYearCode: 1, AcadamicYearDescription: 1, AcadamicYearId: 1, AcadamicYearPeriodFrom: 1, AcadamicYearPeriodTo: 1, AcadamicYearTenantId: 1, ExamAcadamicYearId: 1, ExamCode: 1, ExamDate: 1, ExamExamName: 1, ExamId: 1, ExamTenantId: 1, Id: 1, PromotionAcadamicYearId: 1, PromotionCreatedBy: 1, PromotionCreatedDate: 1, PromotionFromCourse: 1, PromotionId: 1, PromotionJoiningDivisionId: 1, PromotionTenantId: 1, PromotionToCourse: 1, Subjects: 1, TenantId: 1 }, StudentMarksDetails: { Description: 1, Id: 1, Mark: 1, PromotionDetailId: 1, PromotionDetailIsCompleted: 1, PromotionDetailPromotionId: 1, PromotionDetailPromotionType: 1, PromotionDetailStudentId: 1, Student: 1, StudentMarksSubjectsCourseSubjectId: 1, StudentMarksSubjectsId: 1, StudentMarksSubjectsStudentMarksId: 1 }, StudentMarksSubjects: { CourseSubject: 1, CourseSubjectCourseId: 1, CourseSubjectId: 1, CourseSubjectMaxMarks: 1, CourseSubjectSubjectId: 1, Id: 1, StudentMarksAcadamicYearId: 1, StudentMarksDetails: 1, StudentMarksExamDate: 1, StudentMarksExamId: 1, StudentMarksId: 1, StudentMarksPromotionId: 1 }, Transport: { Address: 1, Code: 1, Id: 1, Name: 1, TenantId: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
        })(Texts = SchoolMate.Texts || (SchoolMate.Texts = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var AdmissionForm = /** @class */ (function (_super) {
                __extends(AdmissionForm, _super);
                function AdmissionForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!AdmissionForm.init) {
                        AdmissionForm.init = true;
                        var s = Serenity;
                        var w0 = s.LookupEditor;
                        var w1 = s.DateEditor;
                        Q.initFormType(AdmissionForm, [
                            'AcadamicYearId', w0,
                            'JoiningDate', w1,
                            'StudentId', w0,
                            'JoiningCourse', w0,
                            'JoiningDivisionId', w0,
                            'SelectedFees', w0,
                            'AdmissionFeeTermId', w0
                        ]);
                    }
                    return _this;
                }
                AdmissionForm.formKey = 'Transactions.Admission';
                return AdmissionForm;
            }(Serenity.PrefixedContext));
            Transactions.AdmissionForm = AdmissionForm;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var AdmissionRow;
            (function (AdmissionRow) {
                AdmissionRow.idProperty = 'Id';
                AdmissionRow.localTextPrefix = 'Transactions.Admission';
                AdmissionRow.deletePermission = 'Transactions:Admission';
                AdmissionRow.insertPermission = 'Transactions:Admission';
                AdmissionRow.readPermission = 'Transactions:Admission';
                AdmissionRow.updatePermission = 'Transactions:Admission';
            })(AdmissionRow = Transactions.AdmissionRow || (Transactions.AdmissionRow = {}));
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var AdmissionService;
            (function (AdmissionService) {
                AdmissionService.baseUrl = 'Transactions/Admission';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    AdmissionService[x] = function (r, s, o) {
                        return Q.serviceRequest(AdmissionService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(AdmissionService = Transactions.AdmissionService || (Transactions.AdmissionService = {}));
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var AttandanceForm = /** @class */ (function (_super) {
                __extends(AttandanceForm, _super);
                function AttandanceForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!AttandanceForm.init) {
                        AttandanceForm.init = true;
                        var s = Serenity;
                        var w0 = s.LookupEditor;
                        var w1 = s.DateEditor;
                        var w2 = s.EnumEditor;
                        var w3 = s.MultipleImageUploadEditor;
                        var w4 = s.TextAreaEditor;
                        Q.initFormType(AttandanceForm, [
                            'StaffId', w0,
                            'Date', w1,
                            'AcadamicYearId', w0,
                            'Status', w2,
                            'Attachments', w3,
                            'Description', w4
                        ]);
                    }
                    return _this;
                }
                AttandanceForm.formKey = 'Transactions.Attandance';
                return AttandanceForm;
            }(Serenity.PrefixedContext));
            Transactions.AttandanceForm = AttandanceForm;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var AttandanceRow;
            (function (AttandanceRow) {
                AttandanceRow.idProperty = 'Id';
                AttandanceRow.nameProperty = 'Description';
                AttandanceRow.localTextPrefix = 'Transactions.Attandance';
                AttandanceRow.lookupKey = 'Master.Attandance';
                function getLookup() {
                    return Q.getLookup('Master.Attandance');
                }
                AttandanceRow.getLookup = getLookup;
                AttandanceRow.deletePermission = 'Transactions:Attandance';
                AttandanceRow.insertPermission = 'Transactions:Attandance';
                AttandanceRow.readPermission = 'Transactions:Attandance';
                AttandanceRow.updatePermission = 'Transactions:Attandance';
            })(AttandanceRow = Transactions.AttandanceRow || (Transactions.AttandanceRow = {}));
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var AttandanceService;
            (function (AttandanceService) {
                AttandanceService.baseUrl = 'Transactions/Attandance';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List',
                    'UpdateAttendance',
                    'GetPromotionCurrentAcadamicYear',
                    'GetAttendanceList',
                    'UpdateAttendanceList'
                ].forEach(function (x) {
                    AttandanceService[x] = function (r, s, o) {
                        return Q.serviceRequest(AttandanceService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(AttandanceService = Transactions.AttandanceService || (Transactions.AttandanceService = {}));
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var CourseExitDetailsForm = /** @class */ (function (_super) {
                __extends(CourseExitDetailsForm, _super);
                function CourseExitDetailsForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!CourseExitDetailsForm.init) {
                        CourseExitDetailsForm.init = true;
                        var s = Serenity;
                        var w0 = s.LookupEditor;
                        var w1 = s.MultipleImageUploadEditor;
                        Q.initFormType(CourseExitDetailsForm, [
                            'PromotionDetailId', w0,
                            'Attachments', w1
                        ]);
                    }
                    return _this;
                }
                CourseExitDetailsForm.formKey = 'Transactions.CourseExitDetails';
                return CourseExitDetailsForm;
            }(Serenity.PrefixedContext));
            Transactions.CourseExitDetailsForm = CourseExitDetailsForm;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var CourseExitDetailsRow;
            (function (CourseExitDetailsRow) {
                CourseExitDetailsRow.idProperty = 'Id';
                CourseExitDetailsRow.nameProperty = 'Attachments';
                CourseExitDetailsRow.localTextPrefix = 'Transactions.CourseExitDetails';
                CourseExitDetailsRow.deletePermission = 'Transactions:CourseExit';
                CourseExitDetailsRow.insertPermission = 'Transactions:CourseExit';
                CourseExitDetailsRow.readPermission = 'Transactions:CourseExit';
                CourseExitDetailsRow.updatePermission = 'Transactions:CourseExit';
            })(CourseExitDetailsRow = Transactions.CourseExitDetailsRow || (Transactions.CourseExitDetailsRow = {}));
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var CourseExitDetailsService;
            (function (CourseExitDetailsService) {
                CourseExitDetailsService.baseUrl = 'Transactions/CourseExitDetails';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    CourseExitDetailsService[x] = function (r, s, o) {
                        return Q.serviceRequest(CourseExitDetailsService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(CourseExitDetailsService = Transactions.CourseExitDetailsService || (Transactions.CourseExitDetailsService = {}));
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var CourseExitForm = /** @class */ (function (_super) {
                __extends(CourseExitForm, _super);
                function CourseExitForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!CourseExitForm.init) {
                        CourseExitForm.init = true;
                        var s = Serenity;
                        var w0 = s.LookupEditor;
                        var w1 = s.EnumEditor;
                        var w2 = s.DateEditor;
                        var w3 = Transactions.CourseExitEditor;
                        Q.initFormType(CourseExitForm, [
                            'AcadamicYearId', w0,
                            'PromotionId', w0,
                            'ExitType', w1,
                            'ExitDate', w2,
                            'Students', w3
                        ]);
                    }
                    return _this;
                }
                CourseExitForm.formKey = 'Transactions.CourseExit';
                return CourseExitForm;
            }(Serenity.PrefixedContext));
            Transactions.CourseExitForm = CourseExitForm;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var CourseExitRow;
            (function (CourseExitRow) {
                CourseExitRow.idProperty = 'Id';
                CourseExitRow.localTextPrefix = 'Transactions.CourseExit';
                CourseExitRow.deletePermission = 'Transactions:CourseExit';
                CourseExitRow.insertPermission = 'Transactions:CourseExit';
                CourseExitRow.readPermission = 'Transactions:CourseExit';
                CourseExitRow.updatePermission = 'Transactions:CourseExit';
            })(CourseExitRow = Transactions.CourseExitRow || (Transactions.CourseExitRow = {}));
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var CourseExitService;
            (function (CourseExitService) {
                CourseExitService.baseUrl = 'Transactions/CourseExit';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    CourseExitService[x] = function (r, s, o) {
                        return Q.serviceRequest(CourseExitService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(CourseExitService = Transactions.CourseExitService || (Transactions.CourseExitService = {}));
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var FeeAllocationForm = /** @class */ (function (_super) {
                __extends(FeeAllocationForm, _super);
                function FeeAllocationForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!FeeAllocationForm.init) {
                        FeeAllocationForm.init = true;
                        var s = Serenity;
                        var w0 = s.LookupEditor;
                        var w1 = s.DecimalEditor;
                        Q.initFormType(FeeAllocationForm, [
                            'CourseFeeId', w0,
                            'FeeStrctureId', w0,
                            'Collected', w1,
                            'Balance', w1
                        ]);
                    }
                    return _this;
                }
                FeeAllocationForm.formKey = 'Transactions.FeeAllocation';
                return FeeAllocationForm;
            }(Serenity.PrefixedContext));
            Transactions.FeeAllocationForm = FeeAllocationForm;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var FeeAllocationRow;
            (function (FeeAllocationRow) {
                FeeAllocationRow.idProperty = 'Id';
                FeeAllocationRow.localTextPrefix = 'Transactions.FeeAllocation';
                FeeAllocationRow.deletePermission = 'Transactions:FeeCollection';
                FeeAllocationRow.insertPermission = 'Transactions:FeeCollection';
                FeeAllocationRow.readPermission = 'Transactions:FeeCollection';
                FeeAllocationRow.updatePermission = 'Transactions:FeeCollection';
            })(FeeAllocationRow = Transactions.FeeAllocationRow || (Transactions.FeeAllocationRow = {}));
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var FeeAllocationService;
            (function (FeeAllocationService) {
                FeeAllocationService.baseUrl = 'Transactions/FeeAllocation';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    FeeAllocationService[x] = function (r, s, o) {
                        return Q.serviceRequest(FeeAllocationService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(FeeAllocationService = Transactions.FeeAllocationService || (Transactions.FeeAllocationService = {}));
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var FeeAllocationTranportationForm = /** @class */ (function (_super) {
                __extends(FeeAllocationTranportationForm, _super);
                function FeeAllocationTranportationForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!FeeAllocationTranportationForm.init) {
                        FeeAllocationTranportationForm.init = true;
                        var s = Serenity;
                        var w0 = s.LookupEditor;
                        var w1 = s.DecimalEditor;
                        Q.initFormType(FeeAllocationTranportationForm, [
                            'FeeId', w0,
                            'FeeStrctureId', w0,
                            'Collected', w1,
                            'Balance', w1
                        ]);
                    }
                    return _this;
                }
                FeeAllocationTranportationForm.formKey = 'Transactions.FeeAllocationTranportation';
                return FeeAllocationTranportationForm;
            }(Serenity.PrefixedContext));
            Transactions.FeeAllocationTranportationForm = FeeAllocationTranportationForm;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var FeeAllocationTranportationRow;
            (function (FeeAllocationTranportationRow) {
                FeeAllocationTranportationRow.idProperty = 'Id';
                FeeAllocationTranportationRow.localTextPrefix = 'Transactions.FeeAllocationTranportation';
                FeeAllocationTranportationRow.deletePermission = 'Transactions:FeeCollection';
                FeeAllocationTranportationRow.insertPermission = 'Transactions:FeeCollection';
                FeeAllocationTranportationRow.readPermission = 'Transactions:FeeCollection';
                FeeAllocationTranportationRow.updatePermission = 'Transactions:FeeCollection';
            })(FeeAllocationTranportationRow = Transactions.FeeAllocationTranportationRow || (Transactions.FeeAllocationTranportationRow = {}));
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var FeeAllocationTranportationService;
            (function (FeeAllocationTranportationService) {
                FeeAllocationTranportationService.baseUrl = 'Transactions/FeeAllocationTranportation';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    FeeAllocationTranportationService[x] = function (r, s, o) {
                        return Q.serviceRequest(FeeAllocationTranportationService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(FeeAllocationTranportationService = Transactions.FeeAllocationTranportationService || (Transactions.FeeAllocationTranportationService = {}));
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var FeeCollectionForm = /** @class */ (function (_super) {
                __extends(FeeCollectionForm, _super);
                function FeeCollectionForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!FeeCollectionForm.init) {
                        FeeCollectionForm.init = true;
                        var s = Serenity;
                        var w0 = s.LookupEditor;
                        var w1 = s.DateEditor;
                        var w2 = Transactions.FeeAllocationEditor;
                        var w3 = Transactions.FeeAllocationTranportationEditor;
                        var w4 = s.DecimalEditor;
                        var w5 = s.EnumEditor;
                        Q.initFormType(FeeCollectionForm, [
                            'AcadamicYearId', w0,
                            'StudentId', w0,
                            'PromotionDetailId', w0,
                            'PayDate', w1,
                            'FeeAllocations', w2,
                            'TranportationFee', w3,
                            'TotalAmount', w4,
                            'PaymentMethod', w5,
                            'AccountId', w0
                        ]);
                    }
                    return _this;
                }
                FeeCollectionForm.formKey = 'Transactions.FeeCollection';
                return FeeCollectionForm;
            }(Serenity.PrefixedContext));
            Transactions.FeeCollectionForm = FeeCollectionForm;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var FeeCollectionRow;
            (function (FeeCollectionRow) {
                FeeCollectionRow.idProperty = 'Id';
                FeeCollectionRow.localTextPrefix = 'Transactions.FeeCollection';
                FeeCollectionRow.lookupKey = 'Master.FeeCollection';
                function getLookup() {
                    return Q.getLookup('Master.FeeCollection');
                }
                FeeCollectionRow.getLookup = getLookup;
                FeeCollectionRow.deletePermission = 'Transactions:FeeCollectionDelete';
                FeeCollectionRow.insertPermission = 'Transactions:FeeCollectionCreate';
                FeeCollectionRow.readPermission = 'Transactions:FeeCollection';
                FeeCollectionRow.updatePermission = 'Transactions:FeeCollectionUpdate';
            })(FeeCollectionRow = Transactions.FeeCollectionRow || (Transactions.FeeCollectionRow = {}));
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var FeeCollectionService;
            (function (FeeCollectionService) {
                FeeCollectionService.baseUrl = 'Transactions/FeeCollection';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List',
                    'StudentCurrentPromotions',
                    'GetCourseFeeStucture',
                    'GetFeeAmount',
                    'GetStudentCoursePendingFees',
                    'CourseFeePending',
                    'TransportationFeePending',
                    'GetDefaultAccount'
                ].forEach(function (x) {
                    FeeCollectionService[x] = function (r, s, o) {
                        return Q.serviceRequest(FeeCollectionService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(FeeCollectionService = Transactions.FeeCollectionService || (Transactions.FeeCollectionService = {}));
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var PromotionDetailsForm = /** @class */ (function (_super) {
                __extends(PromotionDetailsForm, _super);
                function PromotionDetailsForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!PromotionDetailsForm.init) {
                        PromotionDetailsForm.init = true;
                        var s = Serenity;
                        var w0 = s.IntegerEditor;
                        var w1 = s.BooleanEditor;
                        var w2 = s.EnumEditor;
                        Q.initFormType(PromotionDetailsForm, [
                            'PromotionId', w0,
                            'StudentId', w0,
                            'IsCompleted', w1,
                            'PromotionType', w2
                        ]);
                    }
                    return _this;
                }
                PromotionDetailsForm.formKey = 'Transactions.PromotionDetails';
                return PromotionDetailsForm;
            }(Serenity.PrefixedContext));
            Transactions.PromotionDetailsForm = PromotionDetailsForm;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var PromotionDetailsLookupRow;
            (function (PromotionDetailsLookupRow) {
                PromotionDetailsLookupRow.idProperty = 'Id';
                PromotionDetailsLookupRow.nameProperty = 'StudentName';
                PromotionDetailsLookupRow.localTextPrefix = 'Transactions.PromotionDetailsLookup';
                PromotionDetailsLookupRow.lookupKey = 'Transactions.PromotionDetailsLookup';
                function getLookup() {
                    return Q.getLookup('Transactions.PromotionDetailsLookup');
                }
                PromotionDetailsLookupRow.getLookup = getLookup;
                PromotionDetailsLookupRow.deletePermission = 'Transactions:Promotions';
                PromotionDetailsLookupRow.insertPermission = 'Transactions:Promotions';
                PromotionDetailsLookupRow.readPermission = 'Transactions:Promotions';
                PromotionDetailsLookupRow.updatePermission = 'Transactions:Promotions';
            })(PromotionDetailsLookupRow = Transactions.PromotionDetailsLookupRow || (Transactions.PromotionDetailsLookupRow = {}));
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var PromotionDetailsRow;
            (function (PromotionDetailsRow) {
                PromotionDetailsRow.idProperty = 'Id';
                PromotionDetailsRow.nameProperty = 'Course';
                PromotionDetailsRow.localTextPrefix = 'Transactions.PromotionDetails';
                PromotionDetailsRow.lookupKey = 'Transactions.PromotionsDetails';
                function getLookup() {
                    return Q.getLookup('Transactions.PromotionsDetails');
                }
                PromotionDetailsRow.getLookup = getLookup;
                PromotionDetailsRow.deletePermission = 'Transactions:Promotions';
                PromotionDetailsRow.insertPermission = 'Transactions:Promotions';
                PromotionDetailsRow.readPermission = 'Transactions:Promotions';
                PromotionDetailsRow.updatePermission = 'Transactions:Promotions';
            })(PromotionDetailsRow = Transactions.PromotionDetailsRow || (Transactions.PromotionDetailsRow = {}));
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var PromotionDetailsService;
            (function (PromotionDetailsService) {
                PromotionDetailsService.baseUrl = 'Transactions/PromotionDetails';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    PromotionDetailsService[x] = function (r, s, o) {
                        return Q.serviceRequest(PromotionDetailsService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(PromotionDetailsService = Transactions.PromotionDetailsService || (Transactions.PromotionDetailsService = {}));
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var PromotionsForm = /** @class */ (function (_super) {
                __extends(PromotionsForm, _super);
                function PromotionsForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!PromotionsForm.init) {
                        PromotionsForm.init = true;
                        var s = Serenity;
                        var w0 = s.LookupEditor;
                        var w1 = s.DateEditor;
                        var w2 = SchoolMate.Master.DivisionsEditor;
                        Q.initFormType(PromotionsForm, [
                            'AcadamicYearId', w0,
                            'FromCourse', w0,
                            'ToCourse', w0,
                            'CreatedBy', w0,
                            'CreatedDate', w1,
                            'PromotionDivisions', w2
                        ]);
                    }
                    return _this;
                }
                PromotionsForm.formKey = 'Transactions.Promotions';
                return PromotionsForm;
            }(Serenity.PrefixedContext));
            Transactions.PromotionsForm = PromotionsForm;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var PromotionsRow;
            (function (PromotionsRow) {
                PromotionsRow.idProperty = 'Id';
                PromotionsRow.nameProperty = 'ToCourseCourseName';
                PromotionsRow.localTextPrefix = 'Transactions.Promotions';
                PromotionsRow.lookupKey = 'Transactions.Promotions';
                function getLookup() {
                    return Q.getLookup('Transactions.Promotions');
                }
                PromotionsRow.getLookup = getLookup;
                PromotionsRow.deletePermission = 'Transactions:Promotions';
                PromotionsRow.insertPermission = 'Transactions:Promotions';
                PromotionsRow.readPermission = 'Transactions:Promotions';
                PromotionsRow.updatePermission = 'Transactions:Promotions';
            })(PromotionsRow = Transactions.PromotionsRow || (Transactions.PromotionsRow = {}));
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var PromotionsService;
            (function (PromotionsService) {
                PromotionsService.baseUrl = 'Transactions/Promotions';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List',
                    'GetStudentsByCourse',
                    'GetPromotionDetails',
                    'DeletePromotionDetails',
                    'InsertIntoPromotionDetails',
                    'GetDivisionsByCourse'
                ].forEach(function (x) {
                    PromotionsService[x] = function (r, s, o) {
                        return Q.serviceRequest(PromotionsService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(PromotionsService = Transactions.PromotionsService || (Transactions.PromotionsService = {}));
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var ReportEndPointService;
            (function (ReportEndPointService) {
                ReportEndPointService.baseUrl = 'Transactions/ReportEndPoint';
                [
                    'CourseFeePending',
                    'CourseStudentMarks',
                    'CoursePromotionsByAcadamicYear',
                    'TersmsByAcadamicYear',
                    'GetExamMarkByPromotion'
                ].forEach(function (x) {
                    ReportEndPointService[x] = function (r, s, o) {
                        return Q.serviceRequest(ReportEndPointService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(ReportEndPointService = Transactions.ReportEndPointService || (Transactions.ReportEndPointService = {}));
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var SalaryPaymentsForm = /** @class */ (function (_super) {
                __extends(SalaryPaymentsForm, _super);
                function SalaryPaymentsForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!SalaryPaymentsForm.init) {
                        SalaryPaymentsForm.init = true;
                        var s = Serenity;
                        var w0 = s.LookupEditor;
                        var w1 = s.DecimalEditor;
                        var w2 = s.IntegerEditor;
                        var w3 = s.DateEditor;
                        var w4 = s.EnumEditor;
                        var w5 = s.StringEditor;
                        Q.initFormType(SalaryPaymentsForm, [
                            'StaffId', w0,
                            'SalaryAmount', w1,
                            'TotalPresent', w2,
                            'TotalAbsent', w2,
                            'PayableSalaryAmount', w1,
                            'PaidDate', w3,
                            'PaidAmount', w1,
                            'PaymentMethod', w4,
                            'CreditAccountId', w0,
                            'Payment', w5
                        ]);
                    }
                    return _this;
                }
                SalaryPaymentsForm.formKey = 'Transactions.SalaryPayments';
                return SalaryPaymentsForm;
            }(Serenity.PrefixedContext));
            Transactions.SalaryPaymentsForm = SalaryPaymentsForm;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var SalaryPaymentsRow;
            (function (SalaryPaymentsRow) {
                SalaryPaymentsRow.idProperty = 'Id';
                SalaryPaymentsRow.localTextPrefix = 'Transactions.SalaryPayments';
                SalaryPaymentsRow.deletePermission = 'Transactions:Salary';
                SalaryPaymentsRow.insertPermission = 'Transactions:Salary';
                SalaryPaymentsRow.readPermission = 'Transactions:Salary';
                SalaryPaymentsRow.updatePermission = 'Transactions:Salary';
            })(SalaryPaymentsRow = Transactions.SalaryPaymentsRow || (Transactions.SalaryPaymentsRow = {}));
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var SalaryPaymentsService;
            (function (SalaryPaymentsService) {
                SalaryPaymentsService.baseUrl = 'Transactions/SalaryPayments';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    SalaryPaymentsService[x] = function (r, s, o) {
                        return Q.serviceRequest(SalaryPaymentsService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(SalaryPaymentsService = Transactions.SalaryPaymentsService || (Transactions.SalaryPaymentsService = {}));
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var SalaryStructureForm = /** @class */ (function (_super) {
                __extends(SalaryStructureForm, _super);
                function SalaryStructureForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!SalaryStructureForm.init) {
                        SalaryStructureForm.init = true;
                        var s = Serenity;
                        var w0 = s.DateEditor;
                        var w1 = s.LookupEditor;
                        var w2 = Transactions.SalaryPaymentEditor;
                        Q.initFormType(SalaryStructureForm, [
                            'FromDate', w0,
                            'ToDate', w0,
                            'CreatedDate', w0,
                            'CreatedBy', w1,
                            'SalaryPayments', w2
                        ]);
                    }
                    return _this;
                }
                SalaryStructureForm.formKey = 'Transactions.SalaryStructure';
                return SalaryStructureForm;
            }(Serenity.PrefixedContext));
            Transactions.SalaryStructureForm = SalaryStructureForm;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var SalaryStructureRow;
            (function (SalaryStructureRow) {
                SalaryStructureRow.idProperty = 'Id';
                SalaryStructureRow.localTextPrefix = 'Transactions.SalaryStructure';
                SalaryStructureRow.deletePermission = 'Transactions:Salary';
                SalaryStructureRow.insertPermission = 'Transactions:Salary';
                SalaryStructureRow.readPermission = 'Transactions:Salary';
                SalaryStructureRow.updatePermission = 'Transactions:Salary';
            })(SalaryStructureRow = Transactions.SalaryStructureRow || (Transactions.SalaryStructureRow = {}));
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var SalaryStructureService;
            (function (SalaryStructureService) {
                SalaryStructureService.baseUrl = 'Transactions/SalaryStructure';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List',
                    'GetSalary'
                ].forEach(function (x) {
                    SalaryStructureService[x] = function (r, s, o) {
                        return Q.serviceRequest(SalaryStructureService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(SalaryStructureService = Transactions.SalaryStructureService || (Transactions.SalaryStructureService = {}));
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var StudentMarksDetailsForm = /** @class */ (function (_super) {
                __extends(StudentMarksDetailsForm, _super);
                function StudentMarksDetailsForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!StudentMarksDetailsForm.init) {
                        StudentMarksDetailsForm.init = true;
                        var s = Serenity;
                        var w0 = Transactions.DepartmentEditor;
                        var w1 = s.DecimalEditor;
                        var w2 = s.StringEditor;
                        Q.initFormType(StudentMarksDetailsForm, [
                            'PromotionDetailId', w0,
                            'Mark', w1,
                            'Description', w2
                        ]);
                    }
                    return _this;
                }
                StudentMarksDetailsForm.formKey = 'Transactions.StudentMarksDetails';
                return StudentMarksDetailsForm;
            }(Serenity.PrefixedContext));
            Transactions.StudentMarksDetailsForm = StudentMarksDetailsForm;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var StudentMarksDetailsRow;
            (function (StudentMarksDetailsRow) {
                StudentMarksDetailsRow.idProperty = 'Id';
                StudentMarksDetailsRow.nameProperty = 'Description';
                StudentMarksDetailsRow.localTextPrefix = 'Transactions.StudentMarksDetails';
                StudentMarksDetailsRow.deletePermission = 'Transactions:StudentMarks';
                StudentMarksDetailsRow.insertPermission = 'Transactions:StudentMarks';
                StudentMarksDetailsRow.readPermission = 'Transactions:StudentMarks';
                StudentMarksDetailsRow.updatePermission = 'Transactions:StudentMarks';
            })(StudentMarksDetailsRow = Transactions.StudentMarksDetailsRow || (Transactions.StudentMarksDetailsRow = {}));
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var StudentMarksDetailsService;
            (function (StudentMarksDetailsService) {
                StudentMarksDetailsService.baseUrl = 'Transactions/StudentMarksDetails';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    StudentMarksDetailsService[x] = function (r, s, o) {
                        return Q.serviceRequest(StudentMarksDetailsService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(StudentMarksDetailsService = Transactions.StudentMarksDetailsService || (Transactions.StudentMarksDetailsService = {}));
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var StudentMarksForm = /** @class */ (function (_super) {
                __extends(StudentMarksForm, _super);
                function StudentMarksForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!StudentMarksForm.init) {
                        StudentMarksForm.init = true;
                        var s = Serenity;
                        var w0 = s.LookupEditor;
                        var w1 = s.DateEditor;
                        var w2 = Transactions.StudentMarksSubjectsEditor;
                        Q.initFormType(StudentMarksForm, [
                            'AcadamicYearId', w0,
                            'ExamId', w0,
                            'ExamDate', w1,
                            'PromotionId', w0,
                            'Subjects', w2
                        ]);
                    }
                    return _this;
                }
                StudentMarksForm.formKey = 'Transactions.StudentMarks';
                return StudentMarksForm;
            }(Serenity.PrefixedContext));
            Transactions.StudentMarksForm = StudentMarksForm;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var StudentMarksRow;
            (function (StudentMarksRow) {
                StudentMarksRow.idProperty = 'Id';
                StudentMarksRow.localTextPrefix = 'Transactions.StudentMarks';
                StudentMarksRow.deletePermission = 'Transactions:StudentMarks';
                StudentMarksRow.insertPermission = 'Transactions:StudentMarks';
                StudentMarksRow.readPermission = 'Transactions:StudentMarks';
                StudentMarksRow.updatePermission = 'Transactions:StudentMarks';
            })(StudentMarksRow = Transactions.StudentMarksRow || (Transactions.StudentMarksRow = {}));
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var StudentMarksService;
            (function (StudentMarksService) {
                StudentMarksService.baseUrl = 'Transactions/StudentMarks';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List',
                    'GetMaximumMark'
                ].forEach(function (x) {
                    StudentMarksService[x] = function (r, s, o) {
                        return Q.serviceRequest(StudentMarksService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(StudentMarksService = Transactions.StudentMarksService || (Transactions.StudentMarksService = {}));
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var StudentMarksSubjectsForm = /** @class */ (function (_super) {
                __extends(StudentMarksSubjectsForm, _super);
                function StudentMarksSubjectsForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!StudentMarksSubjectsForm.init) {
                        StudentMarksSubjectsForm.init = true;
                        var s = Serenity;
                        var w0 = s.LookupEditor;
                        var w1 = Transactions.StudentMarksEditor;
                        Q.initFormType(StudentMarksSubjectsForm, [
                            'CourseSubjectId', w0,
                            'StudentMarksDetails', w1
                        ]);
                    }
                    return _this;
                }
                StudentMarksSubjectsForm.formKey = 'Transactions.StudentMarksSubjects';
                return StudentMarksSubjectsForm;
            }(Serenity.PrefixedContext));
            Transactions.StudentMarksSubjectsForm = StudentMarksSubjectsForm;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var StudentMarksSubjectsRow;
            (function (StudentMarksSubjectsRow) {
                StudentMarksSubjectsRow.idProperty = 'Id';
                StudentMarksSubjectsRow.localTextPrefix = 'Transactions.StudentMarksSubjects';
                StudentMarksSubjectsRow.deletePermission = 'Transactions:StudentMarks';
                StudentMarksSubjectsRow.insertPermission = 'Transactions:StudentMarks';
                StudentMarksSubjectsRow.readPermission = 'Transactions:StudentMarks';
                StudentMarksSubjectsRow.updatePermission = 'Transactions:StudentMarks';
            })(StudentMarksSubjectsRow = Transactions.StudentMarksSubjectsRow || (Transactions.StudentMarksSubjectsRow = {}));
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var StudentMarksSubjectsService;
            (function (StudentMarksSubjectsService) {
                StudentMarksSubjectsService.baseUrl = 'Transactions/StudentMarksSubjects';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    StudentMarksSubjectsService[x] = function (r, s, o) {
                        return Q.serviceRequest(StudentMarksSubjectsService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(StudentMarksSubjectsService = Transactions.StudentMarksSubjectsService || (Transactions.StudentMarksSubjectsService = {}));
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var TransportForm = /** @class */ (function (_super) {
                __extends(TransportForm, _super);
                function TransportForm(prefix) {
                    var _this = _super.call(this, prefix) || this;
                    if (!TransportForm.init) {
                        TransportForm.init = true;
                        var s = Serenity;
                        var w0 = s.StringEditor;
                        var w1 = s.TextAreaEditor;
                        Q.initFormType(TransportForm, [
                            'Name', w0,
                            'Code', w0,
                            'Address', w1
                        ]);
                    }
                    return _this;
                }
                TransportForm.formKey = 'Transactions.Transport';
                return TransportForm;
            }(Serenity.PrefixedContext));
            Transactions.TransportForm = TransportForm;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var TransportRow;
            (function (TransportRow) {
                TransportRow.idProperty = 'Id';
                TransportRow.nameProperty = 'Name';
                TransportRow.localTextPrefix = 'Transactions.Transport';
                TransportRow.deletePermission = 'Administration:General';
                TransportRow.insertPermission = 'Administration:General';
                TransportRow.readPermission = 'Administration:General';
                TransportRow.updatePermission = 'Administration:General';
            })(TransportRow = Transactions.TransportRow || (Transactions.TransportRow = {}));
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var TransportService;
            (function (TransportService) {
                TransportService.baseUrl = 'Transactions/Transport';
                [
                    'Create',
                    'Update',
                    'Delete',
                    'Retrieve',
                    'List'
                ].forEach(function (x) {
                    TransportService[x] = function (r, s, o) {
                        return Q.serviceRequest(TransportService.baseUrl + '/' + x, r, s, o);
                    };
                });
            })(TransportService = Transactions.TransportService || (Transactions.TransportService = {}));
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var VoucherTypes;
        (function (VoucherTypes) {
            VoucherTypes[VoucherTypes["Value1"] = 1] = "Value1";
            VoucherTypes[VoucherTypes["Value2"] = 2] = "Value2";
            VoucherTypes[VoucherTypes["Value3"] = 3] = "Value3";
        })(VoucherTypes = SchoolMate.VoucherTypes || (SchoolMate.VoucherTypes = {}));
        Serenity.Decorators.registerEnumType(VoucherTypes, 'BitPro.SchoolMate.VoucherTypes');
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var LanguageList;
        (function (LanguageList) {
            function getValue() {
                var result = [];
                for (var _i = 0, _a = SchoolMate.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                    var k = _a[_i];
                    if (k.LanguageId !== 'en') {
                        result.push([k.Id.toString(), k.LanguageName]);
                    }
                }
                return result;
            }
            LanguageList.getValue = getValue;
        })(LanguageList = SchoolMate.LanguageList || (SchoolMate.LanguageList = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var ScriptInitialization;
        (function (ScriptInitialization) {
            Q.Config.responsiveDialogs = true;
            Q.Config.rootNamespaces.push('BitPro.SchoolMate');
            Serenity.EntityDialog.defaultLanguageList = SchoolMate.LanguageList.getValue;
            if ($.fn['colorbox']) {
                $.fn['colorbox'].settings.maxWidth = "95%";
                $.fn['colorbox'].settings.maxHeight = "95%";
            }
            window.onerror = Q.ErrorHandling.runtimeErrorHandler;
        })(ScriptInitialization = SchoolMate.ScriptInitialization || (SchoolMate.ScriptInitialization = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Accounts;
        (function (Accounts) {
            var AccountsDialog = /** @class */ (function (_super) {
                __extends(AccountsDialog, _super);
                function AccountsDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new Accounts.AccountsForm(_this.idPrefix);
                    return _this;
                }
                AccountsDialog.prototype.getFormKey = function () { return Accounts.AccountsForm.formKey; };
                AccountsDialog.prototype.getIdProperty = function () { return Accounts.AccountsRow.idProperty; };
                AccountsDialog.prototype.getLocalTextPrefix = function () { return Accounts.AccountsRow.localTextPrefix; };
                AccountsDialog.prototype.getNameProperty = function () { return Accounts.AccountsRow.nameProperty; };
                AccountsDialog.prototype.getService = function () { return Accounts.AccountsService.baseUrl; };
                AccountsDialog.prototype.getDeletePermission = function () { return Accounts.AccountsRow.deletePermission; };
                AccountsDialog.prototype.getInsertPermission = function () { return Accounts.AccountsRow.insertPermission; };
                AccountsDialog.prototype.getUpdatePermission = function () { return Accounts.AccountsRow.updatePermission; };
                AccountsDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], AccountsDialog);
                return AccountsDialog;
            }(Serenity.EntityDialog));
            Accounts.AccountsDialog = AccountsDialog;
        })(Accounts = SchoolMate.Accounts || (SchoolMate.Accounts = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Accounts;
        (function (Accounts) {
            var AccountsGrid = /** @class */ (function (_super) {
                __extends(AccountsGrid, _super);
                function AccountsGrid(container) {
                    return _super.call(this, container) || this;
                }
                AccountsGrid.prototype.getColumnsKey = function () { return 'Accounts.Accounts'; };
                AccountsGrid.prototype.getDialogType = function () { return Accounts.AccountsDialog; };
                AccountsGrid.prototype.getIdProperty = function () { return Accounts.AccountsRow.idProperty; };
                AccountsGrid.prototype.getInsertPermission = function () { return Accounts.AccountsRow.insertPermission; };
                AccountsGrid.prototype.getLocalTextPrefix = function () { return Accounts.AccountsRow.localTextPrefix; };
                AccountsGrid.prototype.getService = function () { return Accounts.AccountsService.baseUrl; };
                AccountsGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], AccountsGrid);
                return AccountsGrid;
            }(Serenity.EntityGrid));
            Accounts.AccountsGrid = AccountsGrid;
        })(Accounts = SchoolMate.Accounts || (SchoolMate.Accounts = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Accounts;
        (function (Accounts) {
            var ContraDialog = /** @class */ (function (_super) {
                __extends(ContraDialog, _super);
                function ContraDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new Accounts.ContraForm(_this.idPrefix);
                    return _this;
                }
                ContraDialog.prototype.getFormKey = function () { return Accounts.ContraForm.formKey; };
                ContraDialog.prototype.getIdProperty = function () { return Accounts.ContraRow.idProperty; };
                ContraDialog.prototype.getLocalTextPrefix = function () { return Accounts.ContraRow.localTextPrefix; };
                ContraDialog.prototype.getService = function () { return Accounts.ContraService.baseUrl; };
                ContraDialog.prototype.getDeletePermission = function () { return Accounts.ContraRow.deletePermission; };
                ContraDialog.prototype.getInsertPermission = function () { return Accounts.ContraRow.insertPermission; };
                ContraDialog.prototype.getUpdatePermission = function () { return Accounts.ContraRow.updatePermission; };
                ContraDialog.prototype.afterLoadEntity = function () {
                    _super.prototype.afterLoadEntity.call(this);
                    // fill next number in new record mode
                    if (this.isNew())
                        this.getNextNumber();
                };
                ContraDialog.prototype.getNextNumber = function () {
                    var _this = this;
                    Accounts.ReceiptService.GetTrxNo({
                        vouchertype: SchoolMate.VoucherTypes.Value3
                    }, function (response) {
                        _this.form.VNo.value = response.voucherno;
                    });
                };
                ContraDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], ContraDialog);
                return ContraDialog;
            }(Serenity.EntityDialog));
            Accounts.ContraDialog = ContraDialog;
        })(Accounts = SchoolMate.Accounts || (SchoolMate.Accounts = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Accounts;
        (function (Accounts) {
            var ContraGrid = /** @class */ (function (_super) {
                __extends(ContraGrid, _super);
                function ContraGrid(container) {
                    return _super.call(this, container) || this;
                }
                ContraGrid.prototype.getColumnsKey = function () { return 'Accounts.Contra'; };
                ContraGrid.prototype.getDialogType = function () { return Accounts.ContraDialog; };
                ContraGrid.prototype.getIdProperty = function () { return Accounts.ContraRow.idProperty; };
                ContraGrid.prototype.getInsertPermission = function () { return Accounts.ContraRow.insertPermission; };
                ContraGrid.prototype.getLocalTextPrefix = function () { return Accounts.ContraRow.localTextPrefix; };
                ContraGrid.prototype.getService = function () { return Accounts.ContraService.baseUrl; };
                ContraGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], ContraGrid);
                return ContraGrid;
            }(Serenity.EntityGrid));
            Accounts.ContraGrid = ContraGrid;
        })(Accounts = SchoolMate.Accounts || (SchoolMate.Accounts = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Accounts;
        (function (Accounts) {
            var PaymentDialog = /** @class */ (function (_super) {
                __extends(PaymentDialog, _super);
                function PaymentDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new Accounts.PaymentForm(_this.idPrefix);
                    return _this;
                }
                PaymentDialog.prototype.getFormKey = function () { return Accounts.PaymentForm.formKey; };
                PaymentDialog.prototype.getIdProperty = function () { return Accounts.PaymentRow.idProperty; };
                PaymentDialog.prototype.getLocalTextPrefix = function () { return Accounts.PaymentRow.localTextPrefix; };
                PaymentDialog.prototype.getService = function () { return Accounts.PaymentService.baseUrl; };
                PaymentDialog.prototype.getDeletePermission = function () { return Accounts.PaymentRow.deletePermission; };
                PaymentDialog.prototype.getInsertPermission = function () { return Accounts.PaymentRow.insertPermission; };
                PaymentDialog.prototype.getUpdatePermission = function () { return Accounts.PaymentRow.updatePermission; };
                PaymentDialog.prototype.afterLoadEntity = function () {
                    _super.prototype.afterLoadEntity.call(this);
                    // fill next number in new record mode
                    if (this.isNew())
                        this.getNextNumber();
                };
                PaymentDialog.prototype.getNextNumber = function () {
                    var _this = this;
                    Accounts.ReceiptService.GetTrxNo({
                        vouchertype: SchoolMate.VoucherTypes.Value2
                    }, function (response) {
                        _this.form.VNo.value = response.voucherno;
                    });
                };
                PaymentDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], PaymentDialog);
                return PaymentDialog;
            }(Serenity.EntityDialog));
            Accounts.PaymentDialog = PaymentDialog;
        })(Accounts = SchoolMate.Accounts || (SchoolMate.Accounts = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Accounts;
        (function (Accounts) {
            var PaymentGrid = /** @class */ (function (_super) {
                __extends(PaymentGrid, _super);
                function PaymentGrid(container) {
                    return _super.call(this, container) || this;
                }
                PaymentGrid.prototype.getColumnsKey = function () { return 'Accounts.Payment'; };
                PaymentGrid.prototype.getDialogType = function () { return Accounts.PaymentDialog; };
                PaymentGrid.prototype.getIdProperty = function () { return Accounts.PaymentRow.idProperty; };
                PaymentGrid.prototype.getInsertPermission = function () { return Accounts.PaymentRow.insertPermission; };
                PaymentGrid.prototype.getLocalTextPrefix = function () { return Accounts.PaymentRow.localTextPrefix; };
                PaymentGrid.prototype.getService = function () { return Accounts.PaymentService.baseUrl; };
                PaymentGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], PaymentGrid);
                return PaymentGrid;
            }(Serenity.EntityGrid));
            Accounts.PaymentGrid = PaymentGrid;
        })(Accounts = SchoolMate.Accounts || (SchoolMate.Accounts = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Accounts;
        (function (Accounts) {
            var ReceiptDialog = /** @class */ (function (_super) {
                __extends(ReceiptDialog, _super);
                function ReceiptDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new Accounts.ReceiptForm(_this.idPrefix);
                    return _this;
                }
                ReceiptDialog.prototype.getFormKey = function () { return Accounts.ReceiptForm.formKey; };
                ReceiptDialog.prototype.getIdProperty = function () { return Accounts.ReceiptRow.idProperty; };
                ReceiptDialog.prototype.getLocalTextPrefix = function () { return Accounts.ReceiptRow.localTextPrefix; };
                ReceiptDialog.prototype.getService = function () { return Accounts.ReceiptService.baseUrl; };
                ReceiptDialog.prototype.getDeletePermission = function () { return Accounts.ReceiptRow.deletePermission; };
                ReceiptDialog.prototype.getInsertPermission = function () { return Accounts.ReceiptRow.insertPermission; };
                ReceiptDialog.prototype.getUpdatePermission = function () { return Accounts.ReceiptRow.updatePermission; };
                ReceiptDialog.prototype.afterLoadEntity = function () {
                    _super.prototype.afterLoadEntity.call(this);
                    // fill next number in new record mode
                    if (this.isNew())
                        this.getNextNumber();
                };
                ReceiptDialog.prototype.getNextNumber = function () {
                    var _this = this;
                    Accounts.ReceiptService.GetTrxNo({
                        vouchertype: SchoolMate.VoucherTypes.Value1
                    }, function (response) {
                        _this.form.VNo.value = response.voucherno;
                    });
                };
                ReceiptDialog.prototype.updateInterface = function () {
                    _super.prototype.updateInterface.call(this);
                    if (this.entity.EntityId > 0) {
                        this.readOnly = true;
                    }
                };
                ReceiptDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], ReceiptDialog);
                return ReceiptDialog;
            }(Serenity.EntityDialog));
            Accounts.ReceiptDialog = ReceiptDialog;
        })(Accounts = SchoolMate.Accounts || (SchoolMate.Accounts = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Accounts;
        (function (Accounts) {
            var ReceiptGrid = /** @class */ (function (_super) {
                __extends(ReceiptGrid, _super);
                function ReceiptGrid(container) {
                    return _super.call(this, container) || this;
                }
                ReceiptGrid.prototype.getColumnsKey = function () { return 'Accounts.Receipt'; };
                ReceiptGrid.prototype.getDialogType = function () { return Accounts.ReceiptDialog; };
                ReceiptGrid.prototype.getIdProperty = function () { return Accounts.ReceiptRow.idProperty; };
                ReceiptGrid.prototype.getInsertPermission = function () { return Accounts.ReceiptRow.insertPermission; };
                ReceiptGrid.prototype.getLocalTextPrefix = function () { return Accounts.ReceiptRow.localTextPrefix; };
                ReceiptGrid.prototype.getService = function () { return Accounts.ReceiptService.baseUrl; };
                ReceiptGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], ReceiptGrid);
                return ReceiptGrid;
            }(Serenity.EntityGrid));
            Accounts.ReceiptGrid = ReceiptGrid;
        })(Accounts = SchoolMate.Accounts || (SchoolMate.Accounts = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var LanguageDialog = /** @class */ (function (_super) {
                __extends(LanguageDialog, _super);
                function LanguageDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new Administration.LanguageForm(_this.idPrefix);
                    return _this;
                }
                LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
                LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
                LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
                LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
                LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
                LanguageDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], LanguageDialog);
                return LanguageDialog;
            }(Serenity.EntityDialog));
            Administration.LanguageDialog = LanguageDialog;
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var LanguageGrid = /** @class */ (function (_super) {
                __extends(LanguageGrid, _super);
                function LanguageGrid(container) {
                    return _super.call(this, container) || this;
                }
                LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
                LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
                LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
                LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
                LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
                LanguageGrid.prototype.getDefaultSortBy = function () {
                    return ["LanguageName" /* LanguageName */];
                };
                LanguageGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], LanguageGrid);
                return LanguageGrid;
            }(Serenity.EntityGrid));
            Administration.LanguageGrid = LanguageGrid;
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var RoleDialog = /** @class */ (function (_super) {
                __extends(RoleDialog, _super);
                function RoleDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new Administration.RoleForm(_this.idPrefix);
                    return _this;
                }
                RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
                RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
                RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
                RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
                RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
                RoleDialog.prototype.getToolbarButtons = function () {
                    var _this = this;
                    var buttons = _super.prototype.getToolbarButtons.call(this);
                    buttons.push({
                        title: Q.text('Site.RolePermissionDialog.EditButton'),
                        cssClass: 'edit-permissions-button',
                        icon: 'fa-lock text-green',
                        onClick: function () {
                            new Administration.RolePermissionDialog({
                                roleID: _this.entity.RoleId,
                                title: _this.entity.RoleName
                            }).dialogOpen();
                        }
                    });
                    return buttons;
                };
                RoleDialog.prototype.updateInterface = function () {
                    _super.prototype.updateInterface.call(this);
                    this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
                };
                RoleDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], RoleDialog);
                return RoleDialog;
            }(Serenity.EntityDialog));
            Administration.RoleDialog = RoleDialog;
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var RoleGrid = /** @class */ (function (_super) {
                __extends(RoleGrid, _super);
                function RoleGrid(container) {
                    return _super.call(this, container) || this;
                }
                RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
                RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
                RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
                RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
                RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
                RoleGrid.prototype.getDefaultSortBy = function () {
                    return ["RoleName" /* RoleName */];
                };
                RoleGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], RoleGrid);
                return RoleGrid;
            }(Serenity.EntityGrid));
            Administration.RoleGrid = RoleGrid;
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var RolePermissionDialog = /** @class */ (function (_super) {
                __extends(RolePermissionDialog, _super);
                function RolePermissionDialog(opt) {
                    var _this = _super.call(this, opt) || this;
                    _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                        showRevoke: false
                    });
                    Administration.RolePermissionService.List({
                        RoleID: _this.options.roleID,
                        Module: null,
                        Submodule: null
                    }, function (response) {
                        _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                    });
                    _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                    return _this;
                }
                RolePermissionDialog.prototype.getDialogOptions = function () {
                    var _this = this;
                    var opt = _super.prototype.getDialogOptions.call(this);
                    opt.buttons = [
                        {
                            text: Q.text('Dialogs.OkButton'),
                            click: function (e) {
                                Administration.RolePermissionService.Update({
                                    RoleID: _this.options.roleID,
                                    Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                    Module: null,
                                    Submodule: null
                                }, function (response) {
                                    _this.dialogClose();
                                    window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                                });
                            }
                        }, {
                            text: Q.text('Dialogs.CancelButton'),
                            click: function () { return _this.dialogClose(); }
                        }
                    ];
                    opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                    return opt;
                };
                RolePermissionDialog.prototype.getTemplate = function () {
                    return '<div id="~_Permissions"></div>';
                };
                RolePermissionDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], RolePermissionDialog);
                return RolePermissionDialog;
            }(Serenity.TemplatedDialog));
            Administration.RolePermissionDialog = RolePermissionDialog;
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var SergenPanel = /** @class */ (function (_super) {
                __extends(SergenPanel, _super);
                function SergenPanel(container) {
                    var _this = _super.call(this, container) || this;
                    var vm = new Vue({
                        el: $('<div/>').appendTo(_this.element)[0],
                        data: {
                            connection: "",
                            connections: [],
                            tables: [],
                            generate: {
                                Row: true,
                                Service: true,
                                UI: true
                            }
                        },
                        methods: {
                            generateCode: function (table) {
                                if (!table.Identifier) {
                                    Q.notifyError("Identifier cannot be empty!");
                                    return;
                                }
                                if (!table.Module) {
                                    Q.notifyError("Module cannot be empty!");
                                    return;
                                }
                                Administration.SergenService.Generate({
                                    ConnectionKey: this.connection,
                                    Table: table,
                                    GenerateOptions: this.generate
                                }, function (r) {
                                    Q.notifySuccess("Code for selected table is generated. You'll need to rebuild your project.");
                                });
                            }
                        },
                        watch: {
                            connection: function (val) {
                                if (!val || !val.length)
                                    vm.tables = [];
                                else
                                    Administration.SergenService.ListTables({
                                        ConnectionKey: val
                                    }, function (response) { return vm.tables = response.Entities; });
                            }
                        },
                        template: Q.getTemplate('Administration.SergenPanel')
                    });
                    Administration.SergenService.ListConnections({}, function (response) { return vm.connections = response.Entities; });
                    return _this;
                }
                return SergenPanel;
            }(Serenity.Widget));
            Administration.SergenPanel = SergenPanel;
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var SettingsDialog = /** @class */ (function (_super) {
                __extends(SettingsDialog, _super);
                function SettingsDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new Administration.SettingsForm(_this.idPrefix);
                    return _this;
                }
                SettingsDialog.prototype.getFormKey = function () { return Administration.SettingsForm.formKey; };
                SettingsDialog.prototype.getIdProperty = function () { return Administration.SettingsRow.idProperty; };
                SettingsDialog.prototype.getLocalTextPrefix = function () { return Administration.SettingsRow.localTextPrefix; };
                SettingsDialog.prototype.getNameProperty = function () { return Administration.SettingsRow.nameProperty; };
                SettingsDialog.prototype.getService = function () { return Administration.SettingsService.baseUrl; };
                SettingsDialog.prototype.getDeletePermission = function () { return Administration.SettingsRow.deletePermission; };
                SettingsDialog.prototype.getInsertPermission = function () { return Administration.SettingsRow.insertPermission; };
                SettingsDialog.prototype.getUpdatePermission = function () { return Administration.SettingsRow.updatePermission; };
                SettingsDialog.prototype.updateInterface = function () {
                    _super.prototype.updateInterface.call(this);
                    Serenity.EditorUtils.setReadonly(this.form.Type.element, true);
                    Serenity.EditorUtils.setReadonly(this.form.Name.element, true);
                    this.element.find('.delete-button').hide();
                };
                SettingsDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], SettingsDialog);
                return SettingsDialog;
            }(Serenity.EntityDialog));
            Administration.SettingsDialog = SettingsDialog;
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var SettingsGrid = /** @class */ (function (_super) {
                __extends(SettingsGrid, _super);
                function SettingsGrid(container) {
                    return _super.call(this, container) || this;
                }
                SettingsGrid.prototype.getColumnsKey = function () { return 'Administration.Settings'; };
                SettingsGrid.prototype.getDialogType = function () { return Administration.SettingsDialog; };
                SettingsGrid.prototype.getIdProperty = function () { return Administration.SettingsRow.idProperty; };
                SettingsGrid.prototype.getInsertPermission = function () { return Administration.SettingsRow.insertPermission; };
                SettingsGrid.prototype.getLocalTextPrefix = function () { return Administration.SettingsRow.localTextPrefix; };
                SettingsGrid.prototype.getService = function () { return Administration.SettingsService.baseUrl; };
                SettingsGrid.prototype.updateInterface = function () {
                    _super.prototype.updateInterface.call(this);
                    this.element.find('.add-button').hide();
                };
                SettingsGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], SettingsGrid);
                return SettingsGrid;
            }(Serenity.EntityGrid));
            Administration.SettingsGrid = SettingsGrid;
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var SystemSettingsDialog = /** @class */ (function (_super) {
                __extends(SystemSettingsDialog, _super);
                function SystemSettingsDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new Administration.SystemSettingsForm(_this.idPrefix);
                    return _this;
                }
                SystemSettingsDialog.prototype.getFormKey = function () { return Administration.SystemSettingsForm.formKey; };
                SystemSettingsDialog.prototype.getIdProperty = function () { return Administration.SystemSettingsRow.idProperty; };
                SystemSettingsDialog.prototype.getLocalTextPrefix = function () { return Administration.SystemSettingsRow.localTextPrefix; };
                SystemSettingsDialog.prototype.getService = function () { return Administration.SystemSettingsService.baseUrl; };
                SystemSettingsDialog.prototype.getDeletePermission = function () { return Administration.SystemSettingsRow.deletePermission; };
                SystemSettingsDialog.prototype.getInsertPermission = function () { return Administration.SystemSettingsRow.insertPermission; };
                SystemSettingsDialog.prototype.getUpdatePermission = function () { return Administration.SystemSettingsRow.updatePermission; };
                SystemSettingsDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], SystemSettingsDialog);
                return SystemSettingsDialog;
            }(Serenity.EntityDialog));
            Administration.SystemSettingsDialog = SystemSettingsDialog;
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var SystemSettingsGrid = /** @class */ (function (_super) {
                __extends(SystemSettingsGrid, _super);
                function SystemSettingsGrid(container) {
                    return _super.call(this, container) || this;
                }
                SystemSettingsGrid.prototype.getColumnsKey = function () { return 'Administration.SystemSettings'; };
                SystemSettingsGrid.prototype.getDialogType = function () { return Administration.SystemSettingsDialog; };
                SystemSettingsGrid.prototype.getIdProperty = function () { return Administration.SystemSettingsRow.idProperty; };
                SystemSettingsGrid.prototype.getInsertPermission = function () { return Administration.SystemSettingsRow.insertPermission; };
                SystemSettingsGrid.prototype.getLocalTextPrefix = function () { return Administration.SystemSettingsRow.localTextPrefix; };
                SystemSettingsGrid.prototype.getService = function () { return Administration.SystemSettingsService.baseUrl; };
                SystemSettingsGrid.prototype.getButtons = function () {
                    // call base method to get list of buttons
                    // by default, base entity grid adds a few buttons, 
                    // add, refresh, column selection in order.
                    var buttons = _super.prototype.getButtons.call(this);
                    // here is several methods to remove add button
                    // only one is enabled, others are commented
                    // METHOD 1
                    // we would be able to simply return an empty button list,
                    // but this would also remove all other buttons
                    // return [];
                    // METHOD 2
                    // remove by splicing (something like delete by index)
                    // here we hard code add button index (not nice!)
                    // buttons.splice(0, 1);
                    // METHOD 3 - recommended
                    // remove by splicing, but this time find button index
                    // by its css class. it is the best and safer method
                    buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                    return buttons;
                };
                SystemSettingsGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], SystemSettingsGrid);
                return SystemSettingsGrid;
            }(Serenity.EntityGrid));
            Administration.SystemSettingsGrid = SystemSettingsGrid;
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var TenantDialog = /** @class */ (function (_super) {
                __extends(TenantDialog, _super);
                function TenantDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new Administration.TenantForm(_this.idPrefix);
                    return _this;
                }
                TenantDialog.prototype.getFormKey = function () { return Administration.TenantForm.formKey; };
                TenantDialog.prototype.getIdProperty = function () { return Administration.TenantRow.idProperty; };
                TenantDialog.prototype.getLocalTextPrefix = function () { return Administration.TenantRow.localTextPrefix; };
                TenantDialog.prototype.getNameProperty = function () { return Administration.TenantRow.nameProperty; };
                TenantDialog.prototype.getService = function () { return Administration.TenantService.baseUrl; };
                TenantDialog.prototype.getDeletePermission = function () { return Administration.TenantRow.deletePermission; };
                TenantDialog.prototype.getInsertPermission = function () { return Administration.TenantRow.insertPermission; };
                TenantDialog.prototype.getUpdatePermission = function () { return Administration.TenantRow.updatePermission; };
                TenantDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], TenantDialog);
                return TenantDialog;
            }(Serenity.EntityDialog));
            Administration.TenantDialog = TenantDialog;
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var TenantGrid = /** @class */ (function (_super) {
                __extends(TenantGrid, _super);
                function TenantGrid(container) {
                    return _super.call(this, container) || this;
                }
                TenantGrid.prototype.getColumnsKey = function () { return 'Administration.Tenant'; };
                TenantGrid.prototype.getDialogType = function () { return Administration.TenantDialog; };
                TenantGrid.prototype.getIdProperty = function () { return Administration.TenantRow.idProperty; };
                TenantGrid.prototype.getInsertPermission = function () { return Administration.TenantRow.insertPermission; };
                TenantGrid.prototype.getLocalTextPrefix = function () { return Administration.TenantRow.localTextPrefix; };
                TenantGrid.prototype.getService = function () { return Administration.TenantService.baseUrl; };
                TenantGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], TenantGrid);
                return TenantGrid;
            }(Serenity.EntityGrid));
            Administration.TenantGrid = TenantGrid;
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var TranslationGrid = /** @class */ (function (_super) {
                __extends(TranslationGrid, _super);
                function TranslationGrid(container) {
                    var _this = _super.call(this, container) || this;
                    _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                        var value = Q.trimToNull($(e.target).val());
                        if (value === '') {
                            value = null;
                        }
                        _this.view.getItemById($(e.target).data('key')).CustomText = value;
                        _this.hasChanges = true;
                    });
                    return _this;
                }
                TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
                TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
                TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
                TranslationGrid.prototype.onClick = function (e, row, cell) {
                    var _this = this;
                    _super.prototype.onClick.call(this, e, row, cell);
                    if (e.isDefaultPrevented()) {
                        return;
                    }
                    var item = this.itemAt(row);
                    var done;
                    if ($(e.target).hasClass('source-text')) {
                        e.preventDefault();
                        done = function () {
                            item.CustomText = item.SourceText;
                            _this.view.updateItem(item.Key, item);
                            _this.hasChanges = true;
                        };
                        if (Q.isTrimmedEmpty(item.CustomText) ||
                            (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                            done();
                            return;
                        }
                        Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                        return;
                    }
                    if ($(e.target).hasClass('target-text')) {
                        e.preventDefault();
                        done = function () {
                            item.CustomText = item.TargetText;
                            _this.view.updateItem(item.Key, item);
                            _this.hasChanges = true;
                        };
                        if (Q.isTrimmedEmpty(item.CustomText) ||
                            (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                            done();
                            return;
                        }
                        Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                        return;
                    }
                };
                TranslationGrid.prototype.getColumns = function () {
                    var columns = [];
                    columns.push({ field: 'Key', width: 300, sortable: false });
                    columns.push({
                        field: 'SourceText',
                        width: 300,
                        sortable: false,
                        format: function (ctx) {
                            return Q.outerHtml($('<a/>')
                                .addClass('source-text')
                                .text(ctx.value || ''));
                        }
                    });
                    columns.push({
                        field: 'CustomText',
                        width: 300,
                        sortable: false,
                        format: function (ctx) { return Q.outerHtml($('<input/>')
                            .addClass('custom-text')
                            .attr('value', ctx.value)
                            .attr('type', 'text')
                            .attr('data-key', ctx.item.Key)); }
                    });
                    columns.push({
                        field: 'TargetText',
                        width: 300,
                        sortable: false,
                        format: function (ctx) { return Q.outerHtml($('<a/>')
                            .addClass('target-text')
                            .text(ctx.value || '')); }
                    });
                    return columns;
                };
                TranslationGrid.prototype.createToolbarExtensions = function () {
                    var _this = this;
                    _super.prototype.createToolbarExtensions.call(this);
                    var opt = {
                        lookupKey: 'Administration.Language'
                    };
                    this.sourceLanguage = Serenity.Widget.create({
                        type: Serenity.LookupEditor,
                        element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                            Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                        options: opt
                    });
                    this.sourceLanguage.changeSelect2(function (e) {
                        if (_this.hasChanges) {
                            _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                        }
                        else {
                            _this.refresh();
                        }
                    });
                    this.targetLanguage = Serenity.Widget.create({
                        type: Serenity.LookupEditor,
                        element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                            Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                        options: opt
                    });
                    this.targetLanguage.changeSelect2(function (e) {
                        if (_this.hasChanges) {
                            _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                        }
                        else {
                            _this.refresh();
                        }
                    });
                };
                TranslationGrid.prototype.saveChanges = function (language) {
                    var _this = this;
                    var translations = {};
                    for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        translations[item.Key] = item.CustomText;
                    }
                    return Promise.resolve(Administration.TranslationService.Update({
                        TargetLanguageID: language,
                        Translations: translations
                    })).then(function () {
                        _this.hasChanges = false;
                        language = Q.trimToNull(language) || 'invariant';
                        Q.notifySuccess('User translations in "' + language +
                            '" language are saved to "user.texts.' +
                            language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                    });
                };
                TranslationGrid.prototype.onViewSubmit = function () {
                    var request = this.view.params;
                    request.SourceLanguageID = this.sourceLanguage.value;
                    this.targetLanguageKey = this.targetLanguage.value || '';
                    request.TargetLanguageID = this.targetLanguageKey;
                    this.hasChanges = false;
                    return _super.prototype.onViewSubmit.call(this);
                };
                TranslationGrid.prototype.getButtons = function () {
                    var _this = this;
                    return [{
                            title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                            onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                            cssClass: 'apply-changes-button'
                        }];
                };
                TranslationGrid.prototype.createQuickSearchInput = function () {
                    var _this = this;
                    Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                        _this.searchText = searchText;
                        _this.view.setItems(_this.view.getItems(), true);
                    });
                };
                TranslationGrid.prototype.onViewFilter = function (item) {
                    if (!_super.prototype.onViewFilter.call(this, item)) {
                        return false;
                    }
                    if (!this.searchText) {
                        return true;
                    }
                    var sd = Select2.util.stripDiacritics;
                    var searching = sd(this.searchText).toLowerCase();
                    function match(str) {
                        if (!str)
                            return false;
                        return str.toLowerCase().indexOf(searching) >= 0;
                    }
                    return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                        match(item.TargetText) || match(item.CustomText);
                };
                TranslationGrid.prototype.usePager = function () {
                    return false;
                };
                TranslationGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], TranslationGrid);
                return TranslationGrid;
            }(Serenity.EntityGrid));
            Administration.TranslationGrid = TranslationGrid;
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var UserDialog = /** @class */ (function (_super) {
                __extends(UserDialog, _super);
                function UserDialog() {
                    var _this = _super.call(this) || this;
                    _this.form = new Administration.UserForm(_this.idPrefix);
                    _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                        if (_this.form.Password.value.length < 7)
                            return "Password must be at least 7 characters!";
                    });
                    _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                        if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                            return "The passwords entered doesn't match!";
                    });
                    return _this;
                }
                UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
                UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
                UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
                UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
                UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
                UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
                UserDialog.prototype.getToolbarButtons = function () {
                    var _this = this;
                    var buttons = _super.prototype.getToolbarButtons.call(this);
                    buttons.push({
                        title: Q.text('Site.UserDialog.EditRolesButton'),
                        cssClass: 'edit-roles-button',
                        icon: 'fa-users text-blue',
                        onClick: function () {
                            new Administration.UserRoleDialog({
                                userID: _this.entity.UserId,
                                username: _this.entity.Username
                            }).dialogOpen();
                        }
                    });
                    buttons.push({
                        title: Q.text('Site.UserDialog.EditPermissionsButton'),
                        cssClass: 'edit-permissions-button',
                        icon: 'fa-lock text-green',
                        onClick: function () {
                            new Administration.UserPermissionDialog({
                                userID: _this.entity.UserId,
                                username: _this.entity.Username
                            }).dialogOpen();
                        }
                    });
                    return buttons;
                };
                UserDialog.prototype.updateInterface = function () {
                    _super.prototype.updateInterface.call(this);
                    this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                    this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
                };
                UserDialog.prototype.afterLoadEntity = function () {
                    _super.prototype.afterLoadEntity.call(this);
                    // these fields are only required in new record mode
                    this.form.Password.element.toggleClass('required', this.isNew())
                        .closest('.field').find('sup').toggle(this.isNew());
                    this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                        .closest('.field').find('sup').toggle(this.isNew());
                };
                UserDialog.prototype.getPropertyItems = function () {
                    var items = _super.prototype.getPropertyItems.call(this);
                    if (!Q.Authorization.hasPermission("Administration:Tenants"))
                        items = items.filter(function (x) { return x.name != "TenantId" /* TenantId */; });
                    return items;
                };
                UserDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], UserDialog);
                return UserDialog;
            }(Serenity.EntityDialog));
            Administration.UserDialog = UserDialog;
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var UserGrid = /** @class */ (function (_super) {
                __extends(UserGrid, _super);
                function UserGrid(container) {
                    return _super.call(this, container) || this;
                }
                UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
                UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
                UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
                UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
                UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
                UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
                UserGrid.prototype.getDefaultSortBy = function () {
                    return ["Username" /* Username */];
                };
                UserGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], UserGrid);
                return UserGrid;
            }(Serenity.EntityGrid));
            Administration.UserGrid = UserGrid;
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var PermissionCheckEditor = /** @class */ (function (_super) {
                __extends(PermissionCheckEditor, _super);
                function PermissionCheckEditor(container, opt) {
                    var _this = _super.call(this, container, opt) || this;
                    _this._rolePermissions = {};
                    _this._implicitPermissions = {};
                    var titleByKey = {};
                    var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                    var items = permissionKeys.map(function (key) { return ({
                        Key: key,
                        ParentKey: _this.getParentKey(key),
                        Title: titleByKey[key],
                        GrantRevoke: null,
                        IsGroup: key.charAt(key.length - 1) === ':'
                    }); });
                    _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                    _this.setItems(items);
                    return _this;
                }
                PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
                PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                    if (!item.IsGroup) {
                        return ((item.GrantRevoke === grant) ? ' checked' : '');
                    }
                    var desc = this.getDescendants(item, true);
                    var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                    if (!granted.length) {
                        return '';
                    }
                    if (desc.length === granted.length) {
                        return 'checked';
                    }
                    return 'checked partial';
                };
                PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                    if (this._rolePermissions[key])
                        return true;
                    for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                        var k = _a[_i];
                        var d = this._implicitPermissions[k];
                        if (d && d[key])
                            return true;
                    }
                    for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                        var i = _c[_b];
                        var item = this.view.getItemById(i);
                        if (item && item.GrantRevoke == true) {
                            var d = this._implicitPermissions[i];
                            if (d && d[key])
                                return true;
                        }
                    }
                };
                PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                    var _this = this;
                    if (item.IsGroup) {
                        var desc = this.getDescendants(item, true);
                        var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                            (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                        if (grantCount === desc.length || desc.length === 0) {
                            return 'allow';
                        }
                        if (grantCount === 0) {
                            return 'deny';
                        }
                        return 'partial';
                    }
                    var granted = item.GrantRevoke === true ||
                        (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                    return (granted ? ' allow' : ' deny');
                };
                PermissionCheckEditor.prototype.getColumns = function () {
                    var _this = this;
                    var columns = [{
                            name: Q.text('Site.UserPermissionDialog.Permission'),
                            field: 'Title',
                            format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                                var item = ctx.item;
                                var klass = _this.getItemEffectiveClass(item);
                                return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                            }),
                            width: 495,
                            sortable: false
                        }, {
                            name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                            format: function (ctx) {
                                var item1 = ctx.item;
                                var klass1 = _this.getItemGrantRevokeClass(item1, true);
                                return "<span class='check-box grant no-float " + klass1 + "'></span>";
                            },
                            width: 65,
                            sortable: false,
                            headerCssClass: 'align-center',
                            cssClass: 'align-center'
                        }];
                    if (this.options.showRevoke) {
                        columns.push({
                            name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                            format: function (ctx) {
                                var item2 = ctx.item;
                                var klass2 = _this.getItemGrantRevokeClass(item2, false);
                                return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                            },
                            width: 65,
                            sortable: false,
                            headerCssClass: 'align-center',
                            cssClass: 'align-center'
                        });
                    }
                    return columns;
                };
                PermissionCheckEditor.prototype.setItems = function (items) {
                    Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                    this.view.setItems(items, true);
                };
                PermissionCheckEditor.prototype.onViewSubmit = function () {
                    return false;
                };
                PermissionCheckEditor.prototype.onViewFilter = function (item) {
                    var _this = this;
                    if (!_super.prototype.onViewFilter.call(this, item)) {
                        return false;
                    }
                    if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                        return false;
                    if (this.searchText) {
                        return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                    }
                    return true;
                };
                PermissionCheckEditor.prototype.matchContains = function (item) {
                    return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
                };
                PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                    var result = [];
                    var stack = [item];
                    while (stack.length > 0) {
                        var i = stack.pop();
                        var children = this.byParentKey[i.Key];
                        if (!children)
                            continue;
                        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                            var child = children_1[_i];
                            if (!excludeGroups || !child.IsGroup) {
                                result.push(child);
                            }
                            stack.push(child);
                        }
                    }
                    return result;
                };
                PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                    _super.prototype.onClick.call(this, e, row, cell);
                    if (!e.isDefaultPrevented()) {
                        Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                    }
                    if (e.isDefaultPrevented()) {
                        return;
                    }
                    var target = $(e.target);
                    var grant = target.hasClass('grant');
                    if (grant || target.hasClass('revoke')) {
                        e.preventDefault();
                        var item = this.itemAt(row);
                        var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                        if (checkedOrPartial) {
                            grant = null;
                        }
                        else {
                            grant = grant !== checkedOrPartial;
                        }
                        if (item.IsGroup) {
                            for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                                var d = _a[_i];
                                d.GrantRevoke = grant;
                            }
                        }
                        else
                            item.GrantRevoke = grant;
                        this.slickGrid.invalidate();
                    }
                };
                PermissionCheckEditor.prototype.getParentKey = function (key) {
                    if (key.charAt(key.length - 1) === ':') {
                        key = key.substr(0, key.length - 1);
                    }
                    var idx = key.lastIndexOf(':');
                    if (idx >= 0) {
                        return key.substr(0, idx + 1);
                    }
                    return null;
                };
                PermissionCheckEditor.prototype.getButtons = function () {
                    return [];
                };
                PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                    var _this = this;
                    _super.prototype.createToolbarExtensions.call(this);
                    Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                        _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                        _this.view.setItems(_this.view.getItems(), true);
                    });
                };
                PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                    var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                    var titleWithGroup = {};
                    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                        var k = keys_1[_i];
                        var s = k;
                        if (!s) {
                            continue;
                        }
                        if (s.charAt(s.length - 1) == ':') {
                            s = s.substr(0, s.length - 1);
                            if (s.length === 0) {
                                continue;
                            }
                        }
                        if (titleByKey[s]) {
                            continue;
                        }
                        titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                        var parts = s.split(':');
                        var group = '';
                        var groupTitle = '';
                        for (var i = 0; i < parts.length - 1; i++) {
                            group = group + parts[i] + ':';
                            var txt = Q.tryGetText('Permission.' + group);
                            if (txt == null) {
                                txt = parts[i];
                            }
                            titleByKey[group] = txt;
                            groupTitle = groupTitle + titleByKey[group] + ':';
                            titleWithGroup[group] = groupTitle;
                        }
                        titleWithGroup[s] = groupTitle + titleByKey[s];
                    }
                    keys = Object.keys(titleByKey);
                    keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                    return keys;
                };
                Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                    get: function () {
                        var result = [];
                        for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                            var item = _a[_i];
                            if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                                result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                            }
                        }
                        return result;
                    },
                    set: function (value) {
                        for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                            var item = _a[_i];
                            item.GrantRevoke = null;
                        }
                        if (value != null) {
                            for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                                var row = value_1[_b];
                                var r = this.view.getItemById(row.PermissionKey);
                                if (r) {
                                    r.GrantRevoke = Q.coalesce(row.Granted, true);
                                }
                            }
                        }
                        this.setItems(this.getItems());
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                    get: function () {
                        return Object.keys(this._rolePermissions);
                    },
                    set: function (value) {
                        this._rolePermissions = {};
                        if (value) {
                            for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                                var k = value_2[_i];
                                this._rolePermissions[k] = true;
                            }
                        }
                        this.setItems(this.getItems());
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                    set: function (value) {
                        this._implicitPermissions = {};
                        if (value) {
                            for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                                var k = _a[_i];
                                this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                                var l = value[k];
                                if (l) {
                                    for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                        var s = l_1[_b];
                                        this._implicitPermissions[k][s] = true;
                                    }
                                }
                            }
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                PermissionCheckEditor = __decorate([
                    Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
                ], PermissionCheckEditor);
                return PermissionCheckEditor;
            }(Serenity.DataGrid));
            Administration.PermissionCheckEditor = PermissionCheckEditor;
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var UserPermissionDialog = /** @class */ (function (_super) {
                __extends(UserPermissionDialog, _super);
                function UserPermissionDialog(opt) {
                    var _this = _super.call(this, opt) || this;
                    _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                        showRevoke: true
                    });
                    Administration.UserPermissionService.List({
                        UserID: _this.options.userID,
                        Module: null,
                        Submodule: null
                    }, function (response) {
                        _this.permissions.value = response.Entities;
                    });
                    Administration.UserPermissionService.ListRolePermissions({
                        UserID: _this.options.userID,
                        Module: null,
                        Submodule: null,
                    }, function (response) {
                        _this.permissions.rolePermissions = response.Entities;
                    });
                    _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                    return _this;
                }
                UserPermissionDialog.prototype.getDialogOptions = function () {
                    var _this = this;
                    var opt = _super.prototype.getDialogOptions.call(this);
                    opt.buttons = [
                        {
                            text: Q.text('Dialogs.OkButton'),
                            click: function (e) {
                                Administration.UserPermissionService.Update({
                                    UserID: _this.options.userID,
                                    Permissions: _this.permissions.value,
                                    Module: null,
                                    Submodule: null
                                }, function (response) {
                                    _this.dialogClose();
                                    window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                                });
                            }
                        }, {
                            text: Q.text('Dialogs.CancelButton'),
                            click: function () { return _this.dialogClose(); }
                        }
                    ];
                    opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                    return opt;
                };
                UserPermissionDialog.prototype.getTemplate = function () {
                    return '<div id="~_Permissions"></div>';
                };
                UserPermissionDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], UserPermissionDialog);
                return UserPermissionDialog;
            }(Serenity.TemplatedDialog));
            Administration.UserPermissionDialog = UserPermissionDialog;
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var RoleCheckEditor = /** @class */ (function (_super) {
                __extends(RoleCheckEditor, _super);
                function RoleCheckEditor(div) {
                    return _super.call(this, div) || this;
                }
                RoleCheckEditor.prototype.createToolbarExtensions = function () {
                    var _this = this;
                    _super.prototype.createToolbarExtensions.call(this);
                    Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                        _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                        _this.view.setItems(_this.view.getItems(), true);
                    });
                };
                RoleCheckEditor.prototype.getButtons = function () {
                    return [];
                };
                RoleCheckEditor.prototype.getTreeItems = function () {
                    return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                        id: role.RoleId.toString(),
                        text: role.RoleName
                    }); });
                };
                RoleCheckEditor.prototype.onViewFilter = function (item) {
                    return _super.prototype.onViewFilter.call(this, item) &&
                        (Q.isEmptyOrNull(this.searchText) ||
                            Select2.util.stripDiacritics(item.text || '')
                                .toUpperCase().indexOf(this.searchText) >= 0);
                };
                RoleCheckEditor = __decorate([
                    Serenity.Decorators.registerEditor()
                ], RoleCheckEditor);
                return RoleCheckEditor;
            }(Serenity.CheckTreeEditor));
            Administration.RoleCheckEditor = RoleCheckEditor;
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Administration;
        (function (Administration) {
            var UserRoleDialog = /** @class */ (function (_super) {
                __extends(UserRoleDialog, _super);
                function UserRoleDialog(opt) {
                    var _this = _super.call(this, opt) || this;
                    _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                    Administration.UserRoleService.List({
                        UserID: _this.options.userID
                    }, function (response) {
                        _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                    });
                    return _this;
                }
                UserRoleDialog.prototype.getDialogOptions = function () {
                    var _this = this;
                    var opt = _super.prototype.getDialogOptions.call(this);
                    opt.buttons = [{
                            text: Q.text('Dialogs.OkButton'),
                            click: function () {
                                Q.serviceRequest('Administration/UserRole/Update', {
                                    UserID: _this.options.userID,
                                    Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                                }, function (response) {
                                    _this.dialogClose();
                                    Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                                });
                            }
                        }, {
                            text: Q.text('Dialogs.CancelButton'),
                            click: function () { return _this.dialogClose(); }
                        }];
                    opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                    return opt;
                };
                UserRoleDialog.prototype.getTemplate = function () {
                    return "<div id='~_Roles'></div>";
                };
                UserRoleDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], UserRoleDialog);
                return UserRoleDialog;
            }(Serenity.TemplatedDialog));
            Administration.UserRoleDialog = UserRoleDialog;
        })(Administration = SchoolMate.Administration || (SchoolMate.Administration = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var BasicProgressDialog = /** @class */ (function (_super) {
            __extends(BasicProgressDialog, _super);
            function BasicProgressDialog() {
                var _this = _super.call(this) || this;
                _this.byId('ProgressBar').progressbar({
                    max: 100,
                    value: 0,
                    change: function (e, v) {
                        _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                    }
                });
                return _this;
            }
            Object.defineProperty(BasicProgressDialog.prototype, "max", {
                get: function () {
                    return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
                },
                set: function (value) {
                    this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BasicProgressDialog.prototype, "value", {
                get: function () {
                    return this.byId('ProgressBar').progressbar('value');
                },
                set: function (value) {
                    this.byId('ProgressBar').progressbar().progressbar('value', value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BasicProgressDialog.prototype, "title", {
                get: function () {
                    return this.element.dialog().dialog('option', 'title');
                },
                set: function (value) {
                    this.element.dialog().dialog('option', 'title', value);
                },
                enumerable: true,
                configurable: true
            });
            BasicProgressDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
                opt.width = 600;
                opt.buttons = [{
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () {
                            _this.cancelled = true;
                            _this.element.closest('.ui-dialog')
                                .find('.ui-dialog-buttonpane .ui-button')
                                .attr('disabled', 'disabled')
                                .css('opacity', '0.5');
                            _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                                Q.text('Site.BasicProgressDialog.CancelTitle'));
                        }
                    }];
                return opt;
            };
            BasicProgressDialog.prototype.initDialog = function () {
                _super.prototype.initDialog.call(this);
                this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
            };
            BasicProgressDialog.prototype.getTemplate = function () {
                return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                    "<div id='~_StatusText' class='status-text' ></div>" +
                    "<div id='~_ProgressBar' class='progress-bar'>" +
                    "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                    "</div>" +
                    "</div>");
            };
            return BasicProgressDialog;
        }(Serenity.TemplatedDialog));
        SchoolMate.BasicProgressDialog = BasicProgressDialog;
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Common;
        (function (Common) {
            var BulkServiceAction = /** @class */ (function () {
                function BulkServiceAction() {
                }
                BulkServiceAction.prototype.createProgressDialog = function () {
                    this.progressDialog = new SchoolMate.BasicProgressDialog();
                    this.progressDialog.dialogOpen();
                    this.progressDialog.max = this.keys.length;
                    this.progressDialog.value = 0;
                };
                BulkServiceAction.prototype.getConfirmationFormat = function () {
                    return Q.text('Site.BulkServiceAction.ConfirmationFormat');
                };
                BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                    return Q.format(this.getConfirmationFormat(), targetCount);
                };
                BulkServiceAction.prototype.confirm = function (targetCount, action) {
                    Q.confirm(this.getConfirmationMessage(targetCount), action);
                };
                BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                    return Q.text('Site.BulkServiceAction.NothingToProcess');
                };
                BulkServiceAction.prototype.nothingToProcess = function () {
                    Q.notifyError(this.getNothingToProcessMessage());
                };
                BulkServiceAction.prototype.getParallelRequests = function () {
                    return 1;
                };
                BulkServiceAction.prototype.getBatchSize = function () {
                    return 1;
                };
                BulkServiceAction.prototype.startParallelExecution = function () {
                    this.createProgressDialog();
                    this.successCount = 0;
                    this.errorCount = 0;
                    this.pendingRequests = 0;
                    this.completedRequests = 0;
                    this.errorCount = 0;
                    this.errorByKey = {};
                    this.queue = this.keys.slice();
                    this.queueIndex = 0;
                    var parallelRequests = this.getParallelRequests();
                    while (parallelRequests-- > 0) {
                        this.executeNextBatch();
                    }
                };
                BulkServiceAction.prototype.serviceCallCleanup = function () {
                    this.pendingRequests--;
                    this.completedRequests++;
                    var title = Q.text((this.progressDialog.cancelled ?
                        'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                    title += ' (';
                    if (this.successCount > 0) {
                        title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                    }
                    if (this.errorCount > 0) {
                        if (this.successCount > 0) {
                            title += ', ';
                        }
                        title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                    }
                    this.progressDialog.title = title + ')';
                    this.progressDialog.value = this.successCount + this.errorCount;
                    if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                        this.executeNextBatch();
                    }
                    else if (this.pendingRequests === 0) {
                        this.progressDialog.dialogClose();
                        this.showResults();
                        if (this.done) {
                            this.done();
                            this.done = null;
                        }
                    }
                };
                BulkServiceAction.prototype.executeForBatch = function (batch) {
                };
                BulkServiceAction.prototype.executeNextBatch = function () {
                    var batchSize = this.getBatchSize();
                    var batch = [];
                    while (true) {
                        if (batch.length >= batchSize) {
                            break;
                        }
                        if (this.queueIndex >= this.queue.length) {
                            break;
                        }
                        batch.push(this.queue[this.queueIndex++]);
                    }
                    if (batch.length > 0) {
                        this.pendingRequests++;
                        this.executeForBatch(batch);
                    }
                };
                BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                    return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
                };
                BulkServiceAction.prototype.showAllHadErrors = function () {
                    Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
                };
                BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                    return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
                };
                BulkServiceAction.prototype.showSomeHadErrors = function () {
                    Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
                };
                BulkServiceAction.prototype.getAllSuccessFormat = function () {
                    return Q.text('Site.BulkServiceAction.AllSuccessFormat');
                };
                BulkServiceAction.prototype.showAllSuccess = function () {
                    Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
                };
                BulkServiceAction.prototype.showResults = function () {
                    if (this.errorCount === 0 && this.successCount === 0) {
                        this.nothingToProcess();
                        return;
                    }
                    if (this.errorCount > 0 && this.successCount === 0) {
                        this.showAllHadErrors();
                        return;
                    }
                    if (this.errorCount > 0) {
                        this.showSomeHadErrors();
                        return;
                    }
                    this.showAllSuccess();
                };
                BulkServiceAction.prototype.execute = function (keys) {
                    var _this = this;
                    this.keys = keys;
                    if (this.keys.length === 0) {
                        this.nothingToProcess();
                        return;
                    }
                    this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
                };
                BulkServiceAction.prototype.get_successCount = function () {
                    return this.successCount;
                };
                BulkServiceAction.prototype.set_successCount = function (value) {
                    this.successCount = value;
                };
                BulkServiceAction.prototype.get_errorCount = function () {
                    return this.errorCount;
                };
                BulkServiceAction.prototype.set_errorCount = function (value) {
                    this.errorCount = value;
                };
                return BulkServiceAction;
            }());
            Common.BulkServiceAction = BulkServiceAction;
        })(Common = SchoolMate.Common || (SchoolMate.Common = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var DialogUtils;
        (function (DialogUtils) {
            function pendingChangesConfirmation(element, hasPendingChanges) {
                element.on('dialogbeforeclose panelbeforeclose', function (e) {
                    if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                        return;
                    }
                    e.preventDefault();
                    Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                        onNo: function () {
                            if (element.hasClass('ui-dialog-content'))
                                element.dialog('close');
                            else if (element.hasClass('s-Panel'))
                                Serenity.TemplatedDialog.closePanel(element);
                        }
                    });
                });
            }
            DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
        })(DialogUtils = SchoolMate.DialogUtils || (SchoolMate.DialogUtils = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Common;
        (function (Common) {
            var EnumSelectFormatter = /** @class */ (function () {
                function EnumSelectFormatter() {
                    this.allowClear = true;
                }
                EnumSelectFormatter.prototype.format = function (ctx) {
                    var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                    var sb = "<select>";
                    if (this.allowClear) {
                        sb += '<option value="">';
                        sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                        sb += '</option>';
                    }
                    for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                        var x = _a[_i];
                        sb += '<option value="' + x + '"';
                        if (x == ctx.value)
                            sb += " selected";
                        var name = enumType[x];
                        sb += ">";
                        sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                        sb += "</option>";
                    }
                    sb += "</select>";
                    return sb;
                };
                __decorate([
                    Serenity.Decorators.option()
                ], EnumSelectFormatter.prototype, "enumKey", void 0);
                __decorate([
                    Serenity.Decorators.option()
                ], EnumSelectFormatter.prototype, "allowClear", void 0);
                __decorate([
                    Serenity.Decorators.option()
                ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
                EnumSelectFormatter = __decorate([
                    Serenity.Decorators.registerFormatter()
                ], EnumSelectFormatter);
                return EnumSelectFormatter;
            }());
            Common.EnumSelectFormatter = EnumSelectFormatter;
        })(Common = SchoolMate.Common || (SchoolMate.Common = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Common;
        (function (Common) {
            var ExcelExportHelper;
            (function (ExcelExportHelper) {
                function createToolButton(options) {
                    return {
                        hint: Q.coalesce(options.hint, 'Excel'),
                        title: Q.coalesce(options.title, ''),
                        cssClass: 'export-xlsx-button',
                        onClick: function () {
                            if (!options.onViewSubmit()) {
                                return;
                            }
                            var grid = options.grid;
                            var request = Q.deepClone(grid.getView().params);
                            request.Take = 0;
                            request.Skip = 0;
                            var sortBy = grid.getView().sortBy;
                            if (sortBy) {
                                request.Sort = sortBy;
                            }
                            request.IncludeColumns = [];
                            var columns = grid.getGrid().getColumns();
                            for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                                var column = columns_1[_i];
                                request.IncludeColumns.push(column.id || column.field);
                            }
                            Q.postToService({ service: options.service, request: request, target: '_blank' });
                        },
                        separator: options.separator
                    };
                }
                ExcelExportHelper.createToolButton = createToolButton;
            })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
        })(Common = SchoolMate.Common || (SchoolMate.Common = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Common;
        (function (Common) {
            var GridEditorBase = /** @class */ (function (_super) {
                __extends(GridEditorBase, _super);
                function GridEditorBase(container) {
                    var _this = _super.call(this, container) || this;
                    _this.nextId = 1;
                    return _this;
                }
                GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
                GridEditorBase.prototype.id = function (entity) {
                    return entity[this.getIdProperty()];
                };
                GridEditorBase.prototype.getNextId = function () {
                    return "`" + this.nextId++;
                };
                GridEditorBase.prototype.setNewId = function (entity) {
                    entity[this.getIdProperty()] = this.getNextId();
                };
                GridEditorBase.prototype.save = function (opt, callback) {
                    var _this = this;
                    var request = opt.request;
                    var row = Q.deepClone(request.Entity);
                    var id = this.id(row);
                    if (id == null) {
                        row[this.getIdProperty()] = this.getNextId();
                    }
                    if (!this.validateEntity(row, id)) {
                        return;
                    }
                    var items = this.view.getItems().slice();
                    if (id == null) {
                        items.push(row);
                    }
                    else {
                        var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                        items[index] = Q.deepClone({}, items[index], row);
                    }
                    this.setEntities(items);
                    callback({});
                };
                GridEditorBase.prototype.deleteEntity = function (id) {
                    this.view.deleteItem(id);
                    return true;
                };
                GridEditorBase.prototype.validateEntity = function (row, id) {
                    return true;
                };
                GridEditorBase.prototype.setEntities = function (items) {
                    this.view.setItems(items, true);
                };
                GridEditorBase.prototype.getNewEntity = function () {
                    return {};
                };
                GridEditorBase.prototype.getButtons = function () {
                    var _this = this;
                    return [{
                            title: this.getAddButtonCaption(),
                            cssClass: 'add-button',
                            onClick: function () {
                                _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                    var dialog = dlg;
                                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                    dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                                });
                            }
                        }];
                };
                GridEditorBase.prototype.editItem = function (entityOrId) {
                    var _this = this;
                    var id = entityOrId;
                    var item = this.view.getItemById(id);
                    this.createEntityDialog(this.getItemType(), function (dlg) {
                        var dialog = dlg;
                        dialog.onDelete = function (opt, callback) {
                            if (!_this.deleteEntity(id)) {
                                return;
                            }
                            callback({});
                        };
                        dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                        dialog.loadEntityAndOpenDialog(item);
                    });
                    ;
                };
                GridEditorBase.prototype.getEditValue = function (property, target) {
                    target[property.name] = this.value;
                };
                GridEditorBase.prototype.setEditValue = function (source, property) {
                    this.value = source[property.name];
                };
                Object.defineProperty(GridEditorBase.prototype, "value", {
                    get: function () {
                        var p = this.getIdProperty();
                        return this.view.getItems().map(function (x) {
                            var y = Q.deepClone(x);
                            var id = y[p];
                            if (id && id.toString().charAt(0) == '`')
                                delete y[p];
                            return y;
                        });
                    },
                    set: function (value) {
                        var _this = this;
                        var p = this.getIdProperty();
                        this.view.setItems((value || []).map(function (x) {
                            var y = Q.deepClone(x);
                            if (y[p] == null)
                                y[p] = "`" + _this.getNextId();
                            return y;
                        }), true);
                    },
                    enumerable: true,
                    configurable: true
                });
                GridEditorBase.prototype.getGridCanLoad = function () {
                    return false;
                };
                GridEditorBase.prototype.usePager = function () {
                    return false;
                };
                GridEditorBase.prototype.getInitialTitle = function () {
                    return null;
                };
                GridEditorBase.prototype.createQuickSearchInput = function () {
                };
                GridEditorBase = __decorate([
                    Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                    Serenity.Decorators.editor(),
                    Serenity.Decorators.element("<div/>")
                ], GridEditorBase);
                return GridEditorBase;
            }(Serenity.EntityGrid));
            Common.GridEditorBase = GridEditorBase;
        })(Common = SchoolMate.Common || (SchoolMate.Common = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Common;
        (function (Common) {
            var GridEditorDialog = /** @class */ (function (_super) {
                __extends(GridEditorDialog, _super);
                function GridEditorDialog() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
                GridEditorDialog.prototype.destroy = function () {
                    this.onSave = null;
                    this.onDelete = null;
                    _super.prototype.destroy.call(this);
                };
                GridEditorDialog.prototype.updateInterface = function () {
                    _super.prototype.updateInterface.call(this);
                    // apply changes button doesn't work properly with in-memory grids yet
                    if (this.applyChangesButton) {
                        this.applyChangesButton.hide();
                    }
                };
                GridEditorDialog.prototype.saveHandler = function (options, callback) {
                    this.onSave && this.onSave(options, callback);
                };
                GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                    this.onDelete && this.onDelete(options, callback);
                };
                GridEditorDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], GridEditorDialog);
                return GridEditorDialog;
            }(Serenity.EntityDialog));
            Common.GridEditorDialog = GridEditorDialog;
        })(Common = SchoolMate.Common || (SchoolMate.Common = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        /**
         * This is an editor widget but it only displays a text, not edits it.
         *
         */
        var StaticTextBlock = /** @class */ (function (_super) {
            __extends(StaticTextBlock, _super);
            function StaticTextBlock(container, options) {
                var _this = _super.call(this, container, options) || this;
                // hide the caption label for this editor if in a form. ugly hack
                if (_this.options.hideLabel)
                    _this.element.closest('.field').find('.caption').hide();
                _this.updateElementContent();
                return _this;
            }
            StaticTextBlock.prototype.updateElementContent = function () {
                var text = Q.coalesce(this.options.text, this.value);
                // if isLocalText is set, text is actually a local text key
                if (this.options.isLocalText)
                    text = Q.text(text);
                // don't html encode if isHtml option is true
                if (this.options.isHtml)
                    this.element.html(text);
                else
                    this.element.text(text);
            };
            /**
             * By implementing ISetEditValue interface, we allow this editor to display its field value.
             * But only do this when our text content is not explicitly set in options
             */
            StaticTextBlock.prototype.setEditValue = function (source, property) {
                if (this.options.text == null) {
                    this.value = Q.coalesce(this.options.text, source[property.name]);
                    this.updateElementContent();
                }
            };
            StaticTextBlock = __decorate([
                Serenity.Decorators.element("<div/>"),
                Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
            ], StaticTextBlock);
            return StaticTextBlock;
        }(Serenity.Widget));
        SchoolMate.StaticTextBlock = StaticTextBlock;
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Common;
        (function (Common) {
            var LanguageSelection = /** @class */ (function (_super) {
                __extends(LanguageSelection, _super);
                function LanguageSelection(select, currentLanguage) {
                    var _this = _super.call(this, select) || this;
                    currentLanguage = Q.coalesce(currentLanguage, 'en');
                    _this.change(function (e) {
                        var path = Q.Config.applicationPath;
                        if (path && path != '/' && Q.endsWith(path, '/'))
                            path = path.substr(0, path.length - 1);
                        $.cookie('LanguagePreference', select.val(), {
                            path: path,
                            expires: 365
                        });
                        window.location.reload(true);
                    });
                    Q.getLookupAsync('Administration.Language').then(function (x) {
                        if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                            var idx = currentLanguage.lastIndexOf('-');
                            if (idx >= 0) {
                                currentLanguage = currentLanguage.substr(0, idx);
                                if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                    currentLanguage = 'en';
                                }
                            }
                            else {
                                currentLanguage = 'en';
                            }
                        }
                        for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                            var l = _a[_i];
                            Q.addOption(select, l.LanguageId, l.LanguageName);
                        }
                        select.val(currentLanguage);
                    });
                    return _this;
                }
                return LanguageSelection;
            }(Serenity.Widget));
            Common.LanguageSelection = LanguageSelection;
        })(Common = SchoolMate.Common || (SchoolMate.Common = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Common;
        (function (Common) {
            var SidebarSearch = /** @class */ (function (_super) {
                __extends(SidebarSearch, _super);
                function SidebarSearch(input, menuUL) {
                    var _this = _super.call(this, input) || this;
                    new Serenity.QuickSearchInput(input, {
                        onSearch: function (field, text, success) {
                            _this.updateMatchFlags(text);
                            success(true);
                        }
                    });
                    _this.menuUL = menuUL;
                    return _this;
                }
                SidebarSearch.prototype.updateMatchFlags = function (text) {
                    var liList = this.menuUL.find('li').removeClass('non-match');
                    text = Q.trimToNull(text);
                    if (text == null) {
                        liList.show();
                        liList.removeClass('expanded');
                        return;
                    }
                    var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                    for (var i = 0; i < parts.length; i++) {
                        parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                    }
                    var items = liList;
                    items.each(function (idx, e) {
                        var x = $(e);
                        var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                        for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                            var p = parts_1[_i];
                            if (p != null && !(title.indexOf(p) !== -1)) {
                                x.addClass('non-match');
                                break;
                            }
                        }
                    });
                    var matchingItems = items.not('.non-match');
                    var visibles = matchingItems.parents('li').add(matchingItems);
                    var nonVisibles = liList.not(visibles);
                    nonVisibles.hide().addClass('non-match');
                    visibles.show();
                    liList.addClass('expanded');
                };
                return SidebarSearch;
            }(Serenity.Widget));
            Common.SidebarSearch = SidebarSearch;
        })(Common = SchoolMate.Common || (SchoolMate.Common = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Common;
        (function (Common) {
            var ThemeSelection = /** @class */ (function (_super) {
                __extends(ThemeSelection, _super);
                function ThemeSelection(select) {
                    var _this = _super.call(this, select) || this;
                    _this.change(function (e) {
                        var path = Q.Config.applicationPath;
                        if (path && path != '/' && Q.endsWith(path, '/'))
                            path = path.substr(0, path.length - 1);
                        $.cookie('ThemePreference', select.val(), {
                            path: path,
                            expires: 365
                        });
                        var theme = select.val() || '';
                        var darkSidebar = theme.indexOf('light') < 0;
                        $('body').removeClass('skin-' + _this.getCurrentTheme());
                        $('body').addClass('skin-' + theme)
                            .toggleClass('dark-sidebar', darkSidebar)
                            .toggleClass('light-sidebar', !darkSidebar);
                    });
                    Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                    Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                    Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                    Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                    Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                    Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                    Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                    Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                    Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                    Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                    Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                    Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                    select.val(_this.getCurrentTheme());
                    return _this;
                }
                ThemeSelection.prototype.getCurrentTheme = function () {
                    var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                    if (skinClass) {
                        return skinClass.substr(5);
                    }
                    return 'blue';
                };
                return ThemeSelection;
            }(Serenity.Widget));
            Common.ThemeSelection = ThemeSelection;
        })(Common = SchoolMate.Common || (SchoolMate.Common = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Common;
        (function (Common) {
            var PdfExportHelper;
            (function (PdfExportHelper) {
                function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                    return srcColumns.map(function (src) {
                        var col = {
                            dataKey: src.id || src.field,
                            title: src.name || ''
                        };
                        if (columnTitles && columnTitles[col.dataKey] != null)
                            col.title = columnTitles[col.dataKey];
                        var style = {};
                        if ((src.cssClass || '').indexOf("align-right") >= 0)
                            style.halign = 'right';
                        else if ((src.cssClass || '').indexOf("align-center") >= 0)
                            style.halign = 'center';
                        columnStyles[col.dataKey] = style;
                        return col;
                    });
                }
                function toAutoTableData(entities, keys, srcColumns) {
                    var el = document.createElement('span');
                    var row = 0;
                    return entities.map(function (item) {
                        var dst = {};
                        for (var cell = 0; cell < srcColumns.length; cell++) {
                            var src = srcColumns[cell];
                            var fld = src.field || '';
                            var key = keys[cell];
                            var txt = void 0;
                            var html = void 0;
                            if (src.formatter) {
                                html = src.formatter(row, cell, item[fld], src, item);
                            }
                            else if (src.format) {
                                html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                            }
                            else {
                                dst[key] = item[fld];
                                continue;
                            }
                            if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                                dst[key] = html;
                            else {
                                el.innerHTML = html;
                                if (el.children.length == 1 &&
                                    $(el.children[0]).is(":input")) {
                                    dst[key] = $(el.children[0]).val();
                                }
                                else if (el.children.length == 1 &&
                                    $(el.children).is('.check-box')) {
                                    dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                                }
                                else
                                    dst[key] = el.textContent || '';
                            }
                        }
                        row++;
                        return dst;
                    });
                }
                function exportToPdf(options) {
                    var g = options.grid;
                    if (!options.onViewSubmit())
                        return;
                    includeAutoTable();
                    var request = Q.deepClone(g.view.params);
                    request.Take = 0;
                    request.Skip = 0;
                    var sortBy = g.view.sortBy;
                    if (sortBy != null)
                        request.Sort = sortBy;
                    var gridColumns = g.slickGrid.getColumns();
                    gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                    request.IncludeColumns = [];
                    for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                        var column = gridColumns_1[_i];
                        request.IncludeColumns.push(column.id || column.field);
                    }
                    Q.serviceCall({
                        url: g.view.url,
                        request: request,
                        onSuccess: function (response) {
                            var doc = new jsPDF('l', 'pt');
                            var srcColumns = gridColumns;
                            var columnStyles = {};
                            var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                            var keys = columns.map(function (x) { return x.dataKey; });
                            var entities = response.Entities || [];
                            var data = toAutoTableData(entities, keys, srcColumns);
                            doc.setFontSize(options.titleFontSize || 10);
                            doc.setFontStyle('bold');
                            var reportTitle = options.reportTitle || g.getTitle() || "Report";
                            doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                            var totalPagesExp = "{{T}}";
                            var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                            var autoOptions = $.extend({
                                margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                                startY: 60,
                                styles: {
                                    fontSize: 8,
                                    overflow: 'linebreak',
                                    cellPadding: 2,
                                    valign: 'middle'
                                },
                                columnStyles: columnStyles
                            }, options.tableOptions);
                            if (pageNumbers) {
                                var footer = function (data) {
                                    var str = data.pageCount;
                                    // Total page number plugin only available in jspdf v1.0+
                                    if (typeof doc.putTotalPages === 'function') {
                                        str = str + " / " + totalPagesExp;
                                    }
                                    doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                        halign: 'center'
                                    });
                                };
                                autoOptions.afterPageContent = footer;
                            }
                            // Print header of page
                            if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                                var beforePage = function (data) {
                                    doc.setFontStyle('normal');
                                    doc.setFontSize(8);
                                    // Date and time of the report
                                    doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                        halign: 'right'
                                    });
                                };
                                autoOptions.beforePageContent = beforePage;
                            }
                            doc.autoTable(columns, data, autoOptions);
                            if (typeof doc.putTotalPages === 'function') {
                                doc.putTotalPages(totalPagesExp);
                            }
                            if (!options.output || options.output == "file") {
                                var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                                fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                                doc.save(fileName);
                                return;
                            }
                            if (options.autoPrint)
                                doc.autoPrint();
                            var output = options.output;
                            if (output == 'newwindow' || '_blank')
                                output = 'dataurlnewwindow';
                            else if (output == 'window')
                                output = 'datauri';
                            doc.output(output);
                        }
                    });
                }
                PdfExportHelper.exportToPdf = exportToPdf;
                function createToolButton(options) {
                    return {
                        title: options.title || '',
                        hint: options.hint || 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return exportToPdf(options); },
                        separator: options.separator
                    };
                }
                PdfExportHelper.createToolButton = createToolButton;
                function includeJsPDF() {
                    if (typeof jsPDF !== "undefined")
                        return;
                    var script = $("jsPDFScript");
                    if (script.length > 0)
                        return;
                    $("<script/>")
                        .attr("type", "text/javascript")
                        .attr("id", "jsPDFScript")
                        .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                        .appendTo(document.head);
                }
                function includeAutoTable() {
                    includeJsPDF();
                    if (typeof jsPDF === "undefined" ||
                        typeof jsPDF.API == "undefined" ||
                        typeof jsPDF.API.autoTable !== "undefined")
                        return;
                    var script = $("jsPDFAutoTableScript");
                    if (script.length > 0)
                        return;
                    $("<script/>")
                        .attr("type", "text/javascript")
                        .attr("id", "jsPDFAutoTableScript")
                        .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                        .appendTo(document.head);
                }
            })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
        })(Common = SchoolMate.Common || (SchoolMate.Common = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Common;
        (function (Common) {
            var ReportDialog = /** @class */ (function (_super) {
                __extends(ReportDialog, _super);
                function ReportDialog(options) {
                    var _this = _super.call(this, options) || this;
                    _this.updateInterface();
                    _this.loadReport(_this.options.reportKey);
                    return _this;
                }
                ReportDialog.prototype.getDialogButtons = function () {
                    return null;
                };
                ReportDialog.prototype.createPropertyGrid = function () {
                    this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                    this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                        idPrefix: this.idPrefix,
                        useCategories: true,
                        items: this.report.Properties
                    }).init(null);
                };
                ReportDialog.prototype.loadReport = function (reportKey) {
                    var _this = this;
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Report/Retrieve'),
                        request: {
                            ReportKey: reportKey
                        },
                        onSuccess: function (response) {
                            _this.report = response;
                            _this.element.dialog().dialog('option', 'title', _this.report.Title);
                            _this.createPropertyGrid();
                            _this.propertyGrid.load(_this.report.InitialSettings || {});
                            _this.updateInterface();
                            _this.dialogOpen();
                        }
                    });
                };
                ReportDialog.prototype.updateInterface = function () {
                    this.toolbar.findButton('print-preview-button')
                        .toggle(this.report && !this.report.IsDataOnlyReport);
                    this.toolbar.findButton('export-pdf-button')
                        .toggle(this.report && !this.report.IsDataOnlyReport);
                    this.toolbar.findButton('export-xlsx-button')
                        .toggle(this.report && this.report.IsDataOnlyReport);
                };
                ReportDialog.prototype.executeReport = function (target, ext, download) {
                    if (!this.validateForm()) {
                        return;
                    }
                    var opt = {};
                    this.propertyGrid.save(opt);
                    Common.ReportHelper.execute({
                        download: download,
                        reportKey: this.report.ReportKey,
                        extension: ext,
                        target: target,
                        params: opt
                    });
                };
                ReportDialog.prototype.getToolbarButtons = function () {
                    var _this = this;
                    return [
                        {
                            title: 'Preview',
                            cssClass: 'print-preview-button',
                            onClick: function () { return _this.executeReport('_blank', null, false); }
                        },
                        {
                            title: 'PDF',
                            cssClass: 'export-pdf-button',
                            onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                        },
                        {
                            title: 'Excel',
                            cssClass: 'export-xlsx-button',
                            onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                        }
                    ];
                };
                return ReportDialog;
            }(Serenity.TemplatedDialog));
            Common.ReportDialog = ReportDialog;
        })(Common = SchoolMate.Common || (SchoolMate.Common = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Common;
        (function (Common) {
            var ReportHelper;
            (function (ReportHelper) {
                function createToolButton(options) {
                    return {
                        title: Q.coalesce(options.title, 'Report'),
                        cssClass: Q.coalesce(options.cssClass, 'print-button'),
                        icon: options.icon,
                        onClick: function () {
                            ReportHelper.execute(options);
                        }
                    };
                }
                ReportHelper.createToolButton = createToolButton;
                function execute(options) {
                    var opt = options.getParams ? options.getParams() : options.params;
                    Q.postToUrl({
                        url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                        params: {
                            key: options.reportKey,
                            ext: Q.coalesce(options.extension, 'pdf'),
                            opt: opt ? $.toJSON(opt) : ''
                        },
                        target: Q.coalesce(options.target, '_blank')
                    });
                }
                ReportHelper.execute = execute;
            })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
        })(Common = SchoolMate.Common || (SchoolMate.Common = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Common;
        (function (Common) {
            var ReportPage = /** @class */ (function (_super) {
                __extends(ReportPage, _super);
                function ReportPage(element) {
                    var _this = _super.call(this, element) || this;
                    $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                    $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                    new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                        onSearch: function (field, text, done) {
                            _this.updateMatchFlags(text);
                            done(true);
                        }
                    });
                    return _this;
                }
                ReportPage.prototype.updateMatchFlags = function (text) {
                    var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                    text = Q.trimToNull(text);
                    if (!text) {
                        liList.children('ul').hide();
                        liList.show().removeClass('expanded');
                        return;
                    }
                    text = Select2.util.stripDiacritics(text).toUpperCase();
                    var reportItems = liList.filter('.report-item');
                    reportItems.each(function (ix, e) {
                        var x = $(e);
                        var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                        if (title.indexOf(text) < 0) {
                            x.addClass('non-match');
                        }
                    });
                    var matchingItems = reportItems.not('.non-match');
                    var visibles = matchingItems.parents('li').add(matchingItems);
                    var nonVisibles = liList.not(visibles);
                    nonVisibles.hide().addClass('non-match');
                    visibles.show();
                    if (visibles.length <= 100) {
                        liList.children('ul').show();
                        liList.addClass('expanded');
                    }
                };
                ReportPage.prototype.categoryClick = function (e) {
                    var li = $(e.target).closest('li');
                    if (li.hasClass('expanded')) {
                        li.find('ul').hide('fast');
                        li.removeClass('expanded');
                        li.find('li').removeClass('expanded');
                    }
                    else {
                        li.addClass('expanded');
                        li.children('ul').show('fast');
                        if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                            li.children('ul').children('li').children('.line').click();
                        }
                    }
                };
                ReportPage.prototype.reportLinkClick = function (e) {
                    e.preventDefault();
                    new Common.ReportDialog({
                        reportKey: $(e.target).data('key')
                    }).dialogOpen();
                };
                return ReportPage;
            }(Serenity.Widget));
            Common.ReportPage = ReportPage;
        })(Common = SchoolMate.Common || (SchoolMate.Common = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Common;
        (function (Common) {
            var UserPreferenceStorage = /** @class */ (function () {
                function UserPreferenceStorage() {
                }
                UserPreferenceStorage.prototype.getItem = function (key) {
                    var value;
                    Common.UserPreferenceService.Retrieve({
                        PreferenceType: "UserPreferenceStorage",
                        Name: key
                    }, function (response) { return value = response.Value; }, {
                        async: false
                    });
                    return value;
                };
                UserPreferenceStorage.prototype.setItem = function (key, data) {
                    Common.UserPreferenceService.Update({
                        PreferenceType: "UserPreferenceStorage",
                        Name: key,
                        Value: data
                    });
                };
                return UserPreferenceStorage;
            }());
            Common.UserPreferenceStorage = UserPreferenceStorage;
        })(Common = SchoolMate.Common || (SchoolMate.Common = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var AcadamicYearDialog = /** @class */ (function (_super) {
                __extends(AcadamicYearDialog, _super);
                function AcadamicYearDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new Master.AcadamicYearForm(_this.idPrefix);
                    return _this;
                }
                AcadamicYearDialog.prototype.getFormKey = function () { return Master.AcadamicYearForm.formKey; };
                AcadamicYearDialog.prototype.getIdProperty = function () { return Master.AcadamicYearRow.idProperty; };
                AcadamicYearDialog.prototype.getLocalTextPrefix = function () { return Master.AcadamicYearRow.localTextPrefix; };
                AcadamicYearDialog.prototype.getNameProperty = function () { return Master.AcadamicYearRow.nameProperty; };
                AcadamicYearDialog.prototype.getService = function () { return Master.AcadamicYearService.baseUrl; };
                AcadamicYearDialog.prototype.getDeletePermission = function () { return Master.AcadamicYearRow.deletePermission; };
                AcadamicYearDialog.prototype.getInsertPermission = function () { return Master.AcadamicYearRow.insertPermission; };
                AcadamicYearDialog.prototype.getUpdatePermission = function () { return Master.AcadamicYearRow.updatePermission; };
                AcadamicYearDialog.prototype.afterLoadEntity = function () {
                    var _this = this;
                    _super.prototype.afterLoadEntity.call(this);
                    if (!this.isEditMode()) {
                        Master.AcadamicYearService.GetLastAcadamicTerms({}, function (response) {
                            var k = _this.form.FeeTerms.getItems();
                            k = [];
                            response.forEach(function (item, index) {
                                k.push({ TermName: item.TermName });
                            });
                            _this.form.FeeTerms.value = k;
                        });
                    }
                };
                AcadamicYearDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], AcadamicYearDialog);
                return AcadamicYearDialog;
            }(Serenity.EntityDialog));
            Master.AcadamicYearDialog = AcadamicYearDialog;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var AcadamicYearGrid = /** @class */ (function (_super) {
                __extends(AcadamicYearGrid, _super);
                function AcadamicYearGrid(container) {
                    return _super.call(this, container) || this;
                }
                AcadamicYearGrid.prototype.getColumnsKey = function () { return 'Master.AcadamicYear'; };
                AcadamicYearGrid.prototype.getDialogType = function () { return Master.AcadamicYearDialog; };
                AcadamicYearGrid.prototype.getIdProperty = function () { return Master.AcadamicYearRow.idProperty; };
                AcadamicYearGrid.prototype.getInsertPermission = function () { return Master.AcadamicYearRow.insertPermission; };
                AcadamicYearGrid.prototype.getLocalTextPrefix = function () { return Master.AcadamicYearRow.localTextPrefix; };
                AcadamicYearGrid.prototype.getService = function () { return Master.AcadamicYearService.baseUrl; };
                AcadamicYearGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], AcadamicYearGrid);
                return AcadamicYearGrid;
            }(Serenity.EntityGrid));
            Master.AcadamicYearGrid = AcadamicYearGrid;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var AccountHeadsDialog = /** @class */ (function (_super) {
                __extends(AccountHeadsDialog, _super);
                function AccountHeadsDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new Master.AccountHeadsForm(_this.idPrefix);
                    return _this;
                }
                AccountHeadsDialog.prototype.getFormKey = function () { return Master.AccountHeadsForm.formKey; };
                AccountHeadsDialog.prototype.getIdProperty = function () { return Master.AccountHeadsRow.idProperty; };
                AccountHeadsDialog.prototype.getLocalTextPrefix = function () { return Master.AccountHeadsRow.localTextPrefix; };
                AccountHeadsDialog.prototype.getNameProperty = function () { return Master.AccountHeadsRow.nameProperty; };
                AccountHeadsDialog.prototype.getService = function () { return Master.AccountHeadsService.baseUrl; };
                AccountHeadsDialog.prototype.getDeletePermission = function () { return Master.AccountHeadsRow.deletePermission; };
                AccountHeadsDialog.prototype.getInsertPermission = function () { return Master.AccountHeadsRow.insertPermission; };
                AccountHeadsDialog.prototype.getUpdatePermission = function () { return Master.AccountHeadsRow.updatePermission; };
                AccountHeadsDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], AccountHeadsDialog);
                return AccountHeadsDialog;
            }(Serenity.EntityDialog));
            Master.AccountHeadsDialog = AccountHeadsDialog;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var AccountHeadsGrid = /** @class */ (function (_super) {
                __extends(AccountHeadsGrid, _super);
                function AccountHeadsGrid(container) {
                    var _this = _super.call(this, container) || this;
                    _this.treeMixin = new Serenity.TreeGridMixin({
                        grid: _this,
                        // bring tree items initially collapsed
                        initialCollapse: function () { return true; },
                        // which column to place tree toggle / expand/collapse button
                        toggleField: "Description" /* Description */,
                        getParentId: function (x) {
                            // as we don't have parentId column here, we are cheating by using modulus 10 and 50
                            // e.g. order with ID 1605 will have parent 1600, order with ID 1613 will have parent 1610
                            // if you had a ParentID column, you'd just return x.ParentID
                            return x.ParentHeadId;
                        }
                    });
                    return _this;
                }
                AccountHeadsGrid.prototype.getColumnsKey = function () { return 'Master.AccountHeads'; };
                AccountHeadsGrid.prototype.getDialogType = function () { return Master.AccountHeadsDialog; };
                AccountHeadsGrid.prototype.getIdProperty = function () { return Master.AccountHeadsRow.idProperty; };
                AccountHeadsGrid.prototype.getInsertPermission = function () { return Master.AccountHeadsRow.insertPermission; };
                AccountHeadsGrid.prototype.getLocalTextPrefix = function () { return Master.AccountHeadsRow.localTextPrefix; };
                AccountHeadsGrid.prototype.getService = function () { return Master.AccountHeadsService.baseUrl; };
                AccountHeadsGrid.prototype.usePager = function () {
                    return false;
                };
                AccountHeadsGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], AccountHeadsGrid);
                return AccountHeadsGrid;
            }(Serenity.EntityGrid));
            Master.AccountHeadsGrid = AccountHeadsGrid;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var AreasDialog = /** @class */ (function (_super) {
                __extends(AreasDialog, _super);
                function AreasDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new Master.AreasForm(_this.idPrefix);
                    return _this;
                    //protected updateInterface() {
                    //    super.updateInterface();
                    //    var k = this.form;
                    //}
                }
                AreasDialog.prototype.getFormKey = function () { return Master.AreasForm.formKey; };
                AreasDialog.prototype.getIdProperty = function () { return Master.AreasRow.idProperty; };
                AreasDialog.prototype.getLocalTextPrefix = function () { return Master.AreasRow.localTextPrefix; };
                AreasDialog.prototype.getNameProperty = function () { return Master.AreasRow.nameProperty; };
                AreasDialog.prototype.getService = function () { return Master.AreasService.baseUrl; };
                AreasDialog.prototype.getDeletePermission = function () { return Master.AreasRow.deletePermission; };
                AreasDialog.prototype.getInsertPermission = function () { return Master.AreasRow.insertPermission; };
                AreasDialog.prototype.getUpdatePermission = function () { return Master.AreasRow.updatePermission; };
                AreasDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], AreasDialog);
                return AreasDialog;
            }(Serenity.EntityDialog));
            Master.AreasDialog = AreasDialog;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var AreasGrid = /** @class */ (function (_super) {
                __extends(AreasGrid, _super);
                function AreasGrid(container) {
                    return _super.call(this, container) || this;
                }
                AreasGrid.prototype.getColumnsKey = function () { return 'Master.Areas'; };
                AreasGrid.prototype.getDialogType = function () { return Master.AreasDialog; };
                AreasGrid.prototype.getIdProperty = function () { return Master.AreasRow.idProperty; };
                AreasGrid.prototype.getInsertPermission = function () { return Master.AreasRow.insertPermission; };
                AreasGrid.prototype.getLocalTextPrefix = function () { return Master.AreasRow.localTextPrefix; };
                AreasGrid.prototype.getService = function () { return Master.AreasService.baseUrl; };
                AreasGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], AreasGrid);
                return AreasGrid;
            }(Serenity.EntityGrid));
            Master.AreasGrid = AreasGrid;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CampusesDialog = /** @class */ (function (_super) {
                __extends(CampusesDialog, _super);
                function CampusesDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new Master.CampusesForm(_this.idPrefix);
                    return _this;
                }
                CampusesDialog.prototype.getFormKey = function () { return Master.CampusesForm.formKey; };
                CampusesDialog.prototype.getIdProperty = function () { return Master.CampusesRow.idProperty; };
                CampusesDialog.prototype.getLocalTextPrefix = function () { return Master.CampusesRow.localTextPrefix; };
                CampusesDialog.prototype.getNameProperty = function () { return Master.CampusesRow.nameProperty; };
                CampusesDialog.prototype.getService = function () { return Master.CampusesService.baseUrl; };
                CampusesDialog.prototype.getDeletePermission = function () { return Master.CampusesRow.deletePermission; };
                CampusesDialog.prototype.getInsertPermission = function () { return Master.CampusesRow.insertPermission; };
                CampusesDialog.prototype.getUpdatePermission = function () { return Master.CampusesRow.updatePermission; };
                CampusesDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], CampusesDialog);
                return CampusesDialog;
            }(Serenity.EntityDialog));
            Master.CampusesDialog = CampusesDialog;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CampusesGrid = /** @class */ (function (_super) {
                __extends(CampusesGrid, _super);
                function CampusesGrid(container) {
                    return _super.call(this, container) || this;
                }
                CampusesGrid.prototype.getColumnsKey = function () { return 'Master.Campuses'; };
                CampusesGrid.prototype.getDialogType = function () { return Master.CampusesDialog; };
                CampusesGrid.prototype.getIdProperty = function () { return Master.CampusesRow.idProperty; };
                CampusesGrid.prototype.getInsertPermission = function () { return Master.CampusesRow.insertPermission; };
                CampusesGrid.prototype.getLocalTextPrefix = function () { return Master.CampusesRow.localTextPrefix; };
                CampusesGrid.prototype.getService = function () { return Master.CampusesService.baseUrl; };
                CampusesGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], CampusesGrid);
                return CampusesGrid;
            }(Serenity.EntityGrid));
            Master.CampusesGrid = CampusesGrid;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var ContactsDialog = /** @class */ (function (_super) {
                __extends(ContactsDialog, _super);
                function ContactsDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new Master.ContactsForm(_this.idPrefix);
                    return _this;
                }
                ContactsDialog.prototype.getFormKey = function () { return Master.ContactsForm.formKey; };
                ContactsDialog.prototype.getIdProperty = function () { return Master.ContactsRow.idProperty; };
                ContactsDialog.prototype.getLocalTextPrefix = function () { return Master.ContactsRow.localTextPrefix; };
                ContactsDialog.prototype.getNameProperty = function () { return Master.ContactsRow.nameProperty; };
                ContactsDialog.prototype.getService = function () { return Master.ContactsService.baseUrl; };
                ContactsDialog.prototype.getDeletePermission = function () { return Master.ContactsRow.deletePermission; };
                ContactsDialog.prototype.getInsertPermission = function () { return Master.ContactsRow.insertPermission; };
                ContactsDialog.prototype.getUpdatePermission = function () { return Master.ContactsRow.updatePermission; };
                ContactsDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], ContactsDialog);
                return ContactsDialog;
            }(Serenity.EntityDialog));
            Master.ContactsDialog = ContactsDialog;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var ContactsGrid = /** @class */ (function (_super) {
                __extends(ContactsGrid, _super);
                function ContactsGrid(container) {
                    return _super.call(this, container) || this;
                }
                ContactsGrid.prototype.getColumnsKey = function () { return 'Master.Contacts'; };
                ContactsGrid.prototype.getDialogType = function () { return Master.ContactsDialog; };
                ContactsGrid.prototype.getIdProperty = function () { return Master.ContactsRow.idProperty; };
                ContactsGrid.prototype.getInsertPermission = function () { return Master.ContactsRow.insertPermission; };
                ContactsGrid.prototype.getLocalTextPrefix = function () { return Master.ContactsRow.localTextPrefix; };
                ContactsGrid.prototype.getService = function () { return Master.ContactsService.baseUrl; };
                ContactsGrid.prototype.getButtons = function () {
                    var _this = this;
                    var buttons = _super.prototype.getButtons.call(this);
                    buttons.push(SchoolMate.Common.ExcelExportHelper.createToolButton({
                        grid: this,
                        service: Master.ContactsService.baseUrl + '/ListExcel',
                        onViewSubmit: function () { return _this.onViewSubmit(); },
                        separator: true
                    }));
                    buttons.push(SchoolMate.Common.PdfExportHelper.createToolButton({
                        grid: this,
                        onViewSubmit: function () { return _this.onViewSubmit(); }
                    }));
                    return buttons;
                };
                ContactsGrid = __decorate([
                    Serenity.Decorators.registerClass(),
                    Serenity.Decorators.filterable()
                ], ContactsGrid);
                return ContactsGrid;
            }(Serenity.EntityGrid));
            Master.ContactsGrid = ContactsGrid;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CountriesDialog = /** @class */ (function (_super) {
                __extends(CountriesDialog, _super);
                function CountriesDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new Master.CountriesForm(_this.idPrefix);
                    return _this;
                }
                CountriesDialog.prototype.getFormKey = function () { return Master.CountriesForm.formKey; };
                CountriesDialog.prototype.getIdProperty = function () { return Master.CountriesRow.idProperty; };
                CountriesDialog.prototype.getLocalTextPrefix = function () { return Master.CountriesRow.localTextPrefix; };
                CountriesDialog.prototype.getNameProperty = function () { return Master.CountriesRow.nameProperty; };
                CountriesDialog.prototype.getService = function () { return Master.CountriesService.baseUrl; };
                CountriesDialog.prototype.getDeletePermission = function () { return Master.CountriesRow.deletePermission; };
                CountriesDialog.prototype.getInsertPermission = function () { return Master.CountriesRow.insertPermission; };
                CountriesDialog.prototype.getUpdatePermission = function () { return Master.CountriesRow.updatePermission; };
                CountriesDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], CountriesDialog);
                return CountriesDialog;
            }(Serenity.EntityDialog));
            Master.CountriesDialog = CountriesDialog;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CountriesGrid = /** @class */ (function (_super) {
                __extends(CountriesGrid, _super);
                function CountriesGrid(container) {
                    return _super.call(this, container) || this;
                }
                CountriesGrid.prototype.getColumnsKey = function () { return 'Master.Countries'; };
                CountriesGrid.prototype.getDialogType = function () { return Master.CountriesDialog; };
                CountriesGrid.prototype.getIdProperty = function () { return Master.CountriesRow.idProperty; };
                CountriesGrid.prototype.getInsertPermission = function () { return Master.CountriesRow.insertPermission; };
                CountriesGrid.prototype.getLocalTextPrefix = function () { return Master.CountriesRow.localTextPrefix; };
                CountriesGrid.prototype.getService = function () { return Master.CountriesService.baseUrl; };
                CountriesGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], CountriesGrid);
                return CountriesGrid;
            }(Serenity.EntityGrid));
            Master.CountriesGrid = CountriesGrid;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CourseDivisionsDialog = /** @class */ (function (_super) {
                __extends(CourseDivisionsDialog, _super);
                function CourseDivisionsDialog() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                CourseDivisionsDialog.prototype.getFormKey = function () { return Master.CourseDivisionsForm.formKey; };
                ///protected getIdProperty() { return CourseDivisionsRow.idProperty; }
                CourseDivisionsDialog.prototype.getLocalTextPrefix = function () { return Master.CourseDivisionsRow.localTextPrefix; };
                CourseDivisionsDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], CourseDivisionsDialog);
                return CourseDivisionsDialog;
            }(SchoolMate.Common.GridEditorDialog));
            Master.CourseDivisionsDialog = CourseDivisionsDialog;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CourseDivisionsEditor = /** @class */ (function (_super) {
                __extends(CourseDivisionsEditor, _super);
                function CourseDivisionsEditor(container) {
                    return _super.call(this, container) || this;
                }
                CourseDivisionsEditor.prototype.getColumnsKey = function () { return "Master.CourseDivisions"; };
                CourseDivisionsEditor.prototype.getDialogType = function () { return Master.CourseDivisionsDialog; };
                CourseDivisionsEditor.prototype.getLocalTextPrefix = function () { return Master.CourseDivisionsRow.localTextPrefix; };
                CourseDivisionsEditor.prototype.validateEntity = function (row, id) {
                    //var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductID === row.ProductID);
                    //if (sameProduct && this.id(sameProduct) !== id) {
                    //    Q.alert('This product is already in order details!');
                    //    return false;
                    //}
                    //row.SubjectSubjectName = Master.SubjectsRow.getLookup().itemById[row.SubjectId].SubjectName;
                    //row.DriverDriverName = FleetManagement.Parameters.DriverInfoRow.getLookup().itemById[row.DriverId].DriverName;
                    //row.DailyDetailTrxDate = DailyDetailsRow.getLookup().itemById[row.DailyDetailId].TrxDate;
                    //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
                    return true;
                };
                CourseDivisionsEditor = __decorate([
                    Serenity.Decorators.registerClass()
                ], CourseDivisionsEditor);
                return CourseDivisionsEditor;
            }(SchoolMate.Common.GridEditorBase));
            Master.CourseDivisionsEditor = CourseDivisionsEditor;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CourseDivisionsGrid = /** @class */ (function (_super) {
                __extends(CourseDivisionsGrid, _super);
                function CourseDivisionsGrid(container) {
                    return _super.call(this, container) || this;
                }
                CourseDivisionsGrid.prototype.getColumnsKey = function () { return 'Master.CourseDivisions'; };
                CourseDivisionsGrid.prototype.getDialogType = function () { return Master.CourseDivisionsDialog; };
                CourseDivisionsGrid.prototype.getIdProperty = function () { return Master.CourseDivisionsRow.idProperty; };
                CourseDivisionsGrid.prototype.getInsertPermission = function () { return Master.CourseDivisionsRow.insertPermission; };
                CourseDivisionsGrid.prototype.getLocalTextPrefix = function () { return Master.CourseDivisionsRow.localTextPrefix; };
                CourseDivisionsGrid.prototype.getService = function () { return Master.CourseDivisionsService.baseUrl; };
                CourseDivisionsGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], CourseDivisionsGrid);
                return CourseDivisionsGrid;
            }(Serenity.EntityGrid));
            Master.CourseDivisionsGrid = CourseDivisionsGrid;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CourseFeeDialog = /** @class */ (function (_super) {
                __extends(CourseFeeDialog, _super);
                function CourseFeeDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new Master.CourseFeeForm(_this.idPrefix);
                    return _this;
                }
                CourseFeeDialog.prototype.getFormKey = function () { return Master.CourseFeeForm.formKey; };
                CourseFeeDialog.prototype.getIdProperty = function () { return Master.CourseFeeRow.idProperty; };
                CourseFeeDialog.prototype.getLocalTextPrefix = function () { return Master.CourseFeeRow.localTextPrefix; };
                CourseFeeDialog.prototype.getService = function () { return Master.CourseFeeService.baseUrl; };
                CourseFeeDialog.prototype.getDeletePermission = function () { return Master.CourseFeeRow.deletePermission; };
                CourseFeeDialog.prototype.getInsertPermission = function () { return Master.CourseFeeRow.insertPermission; };
                CourseFeeDialog.prototype.getUpdatePermission = function () { return Master.CourseFeeRow.updatePermission; };
                CourseFeeDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], CourseFeeDialog);
                return CourseFeeDialog;
            }(Serenity.EntityDialog));
            Master.CourseFeeDialog = CourseFeeDialog;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CourseFeeGrid = /** @class */ (function (_super) {
                __extends(CourseFeeGrid, _super);
                function CourseFeeGrid(container) {
                    return _super.call(this, container) || this;
                }
                CourseFeeGrid.prototype.getColumnsKey = function () { return 'Master.CourseFee'; };
                CourseFeeGrid.prototype.getDialogType = function () { return Master.CourseFeeDialog; };
                CourseFeeGrid.prototype.getIdProperty = function () { return Master.CourseFeeRow.idProperty; };
                CourseFeeGrid.prototype.getInsertPermission = function () { return Master.CourseFeeRow.insertPermission; };
                CourseFeeGrid.prototype.getLocalTextPrefix = function () { return Master.CourseFeeRow.localTextPrefix; };
                CourseFeeGrid.prototype.getService = function () { return Master.CourseFeeService.baseUrl; };
                CourseFeeGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], CourseFeeGrid);
                return CourseFeeGrid;
            }(Serenity.EntityGrid));
            Master.CourseFeeGrid = CourseFeeGrid;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CoursesDialog = /** @class */ (function (_super) {
                __extends(CoursesDialog, _super);
                function CoursesDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new Master.CoursesForm(_this.idPrefix);
                    return _this;
                }
                CoursesDialog.prototype.getFormKey = function () { return Master.CoursesForm.formKey; };
                CoursesDialog.prototype.getIdProperty = function () { return Master.CoursesRow.idProperty; };
                CoursesDialog.prototype.getLocalTextPrefix = function () { return Master.CoursesRow.localTextPrefix; };
                CoursesDialog.prototype.getNameProperty = function () { return Master.CoursesRow.nameProperty; };
                CoursesDialog.prototype.getService = function () { return Master.CoursesService.baseUrl; };
                CoursesDialog.prototype.getDeletePermission = function () { return Master.CoursesRow.deletePermission; };
                CoursesDialog.prototype.getInsertPermission = function () { return Master.CoursesRow.insertPermission; };
                CoursesDialog.prototype.getUpdatePermission = function () { return Master.CoursesRow.updatePermission; };
                CoursesDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], CoursesDialog);
                return CoursesDialog;
            }(Serenity.EntityDialog));
            Master.CoursesDialog = CoursesDialog;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CoursesGrid = /** @class */ (function (_super) {
                __extends(CoursesGrid, _super);
                function CoursesGrid(container) {
                    return _super.call(this, container) || this;
                }
                CoursesGrid.prototype.getColumnsKey = function () { return 'Master.Courses'; };
                CoursesGrid.prototype.getDialogType = function () { return Master.CoursesDialog; };
                CoursesGrid.prototype.getIdProperty = function () { return Master.CoursesRow.idProperty; };
                CoursesGrid.prototype.getInsertPermission = function () { return Master.CoursesRow.insertPermission; };
                CoursesGrid.prototype.getLocalTextPrefix = function () { return Master.CoursesRow.localTextPrefix; };
                CoursesGrid.prototype.getService = function () { return Master.CoursesService.baseUrl; };
                CoursesGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], CoursesGrid);
                return CoursesGrid;
            }(Serenity.EntityGrid));
            Master.CoursesGrid = CoursesGrid;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CourseSubjectEditor = /** @class */ (function (_super) {
                __extends(CourseSubjectEditor, _super);
                function CourseSubjectEditor(container) {
                    return _super.call(this, container) || this;
                }
                CourseSubjectEditor.prototype.getColumnsKey = function () { return "Master.CourseSubjects"; };
                CourseSubjectEditor.prototype.getDialogType = function () { return Master.CourseSubjectsDialog; };
                CourseSubjectEditor.prototype.getLocalTextPrefix = function () { return Master.CourseSubjectsRow.localTextPrefix; };
                CourseSubjectEditor.prototype.validateEntity = function (row, id) {
                    //var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductID === row.ProductID);
                    //if (sameProduct && this.id(sameProduct) !== id) {
                    //    Q.alert('This product is already in order details!');
                    //    return false;
                    //}
                    row.SubjectSubjectName = Master.SubjectsRow.getLookup().itemById[row.SubjectId].SubjectName;
                    //row.DriverDriverName = FleetManagement.Parameters.DriverInfoRow.getLookup().itemById[row.DriverId].DriverName;
                    //row.DailyDetailTrxDate = DailyDetailsRow.getLookup().itemById[row.DailyDetailId].TrxDate;
                    //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
                    return true;
                };
                CourseSubjectEditor = __decorate([
                    Serenity.Decorators.registerClass()
                ], CourseSubjectEditor);
                return CourseSubjectEditor;
            }(SchoolMate.Common.GridEditorBase));
            Master.CourseSubjectEditor = CourseSubjectEditor;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CourseSubjectsDialog = /** @class */ (function (_super) {
                __extends(CourseSubjectsDialog, _super);
                function CourseSubjectsDialog() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                CourseSubjectsDialog.prototype.getFormKey = function () { return Master.CourseSubjectsForm.formKey; };
                // protected getIdProperty() { return CourseSubjectsRow.idProperty; }
                CourseSubjectsDialog.prototype.getLocalTextPrefix = function () { return Master.CourseSubjectsRow.localTextPrefix; };
                CourseSubjectsDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], CourseSubjectsDialog);
                return CourseSubjectsDialog;
            }(SchoolMate.Common.GridEditorDialog));
            Master.CourseSubjectsDialog = CourseSubjectsDialog;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CourseSubjectsGrid = /** @class */ (function (_super) {
                __extends(CourseSubjectsGrid, _super);
                function CourseSubjectsGrid(container) {
                    return _super.call(this, container) || this;
                }
                CourseSubjectsGrid.prototype.getColumnsKey = function () { return 'Master.CourseSubjects'; };
                CourseSubjectsGrid.prototype.getDialogType = function () { return Master.CourseSubjectsDialog; };
                CourseSubjectsGrid.prototype.getIdProperty = function () { return Master.CourseSubjectsRow.idProperty; };
                CourseSubjectsGrid.prototype.getInsertPermission = function () { return Master.CourseSubjectsRow.insertPermission; };
                CourseSubjectsGrid.prototype.getLocalTextPrefix = function () { return Master.CourseSubjectsRow.localTextPrefix; };
                CourseSubjectsGrid.prototype.getService = function () { return Master.CourseSubjectsService.baseUrl; };
                CourseSubjectsGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], CourseSubjectsGrid);
                return CourseSubjectsGrid;
            }(Serenity.EntityGrid));
            Master.CourseSubjectsGrid = CourseSubjectsGrid;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CurrenciesDialog = /** @class */ (function (_super) {
                __extends(CurrenciesDialog, _super);
                function CurrenciesDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new Master.CurrenciesForm(_this.idPrefix);
                    return _this;
                }
                CurrenciesDialog.prototype.getFormKey = function () { return Master.CurrenciesForm.formKey; };
                CurrenciesDialog.prototype.getIdProperty = function () { return Master.CurrenciesRow.idProperty; };
                CurrenciesDialog.prototype.getLocalTextPrefix = function () { return Master.CurrenciesRow.localTextPrefix; };
                CurrenciesDialog.prototype.getNameProperty = function () { return Master.CurrenciesRow.nameProperty; };
                CurrenciesDialog.prototype.getService = function () { return Master.CurrenciesService.baseUrl; };
                CurrenciesDialog.prototype.getDeletePermission = function () { return Master.CurrenciesRow.deletePermission; };
                CurrenciesDialog.prototype.getInsertPermission = function () { return Master.CurrenciesRow.insertPermission; };
                CurrenciesDialog.prototype.getUpdatePermission = function () { return Master.CurrenciesRow.updatePermission; };
                CurrenciesDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], CurrenciesDialog);
                return CurrenciesDialog;
            }(Serenity.EntityDialog));
            Master.CurrenciesDialog = CurrenciesDialog;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var CurrenciesGrid = /** @class */ (function (_super) {
                __extends(CurrenciesGrid, _super);
                function CurrenciesGrid(container) {
                    return _super.call(this, container) || this;
                }
                CurrenciesGrid.prototype.getColumnsKey = function () { return 'Master.Currencies'; };
                CurrenciesGrid.prototype.getDialogType = function () { return Master.CurrenciesDialog; };
                CurrenciesGrid.prototype.getIdProperty = function () { return Master.CurrenciesRow.idProperty; };
                CurrenciesGrid.prototype.getInsertPermission = function () { return Master.CurrenciesRow.insertPermission; };
                CurrenciesGrid.prototype.getLocalTextPrefix = function () { return Master.CurrenciesRow.localTextPrefix; };
                CurrenciesGrid.prototype.getService = function () { return Master.CurrenciesService.baseUrl; };
                CurrenciesGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], CurrenciesGrid);
                return CurrenciesGrid;
            }(Serenity.EntityGrid));
            Master.CurrenciesGrid = CurrenciesGrid;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var DivisionsDialog = /** @class */ (function (_super) {
                __extends(DivisionsDialog, _super);
                function DivisionsDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    //protected getNameProperty() { return DivisionsRow.nameProperty; }
                    //protected getService() { return DivisionsService.baseUrl; }
                    //protected getDeletePermission() { return DivisionsRow.deletePermission; }
                    //protected getInsertPermission() { return DivisionsRow.insertPermission; }
                    //protected getUpdatePermission() { return DivisionsRow.updatePermission; }
                    _this.form = new Master.DivisionsForm(_this.idPrefix);
                    return _this;
                }
                DivisionsDialog.prototype.getFormKey = function () { return Master.DivisionsForm.formKey; };
                //protected getIdProperty() { return DivisionsRow.idProperty; }
                DivisionsDialog.prototype.getLocalTextPrefix = function () { return Master.DivisionsRow.localTextPrefix; };
                DivisionsDialog.prototype.getToolbarButtons = function () {
                    var _this = this;
                    var buttons = _super.prototype.getToolbarButtons.call(this);
                    buttons.push({
                        title: 'Division Students',
                        cssClass: 'edit-permissions-button',
                        icon: 'fa-lock text-green',
                        onClick: function () {
                            new Master.DivisionStudentsCheckDialog({
                                divid: _this.entity.Id,
                                prormotionid: _this.entity.PromotionId
                            }).dialogOpen();
                        }
                    });
                    return buttons;
                };
                DivisionsDialog.prototype.updateInterface = function () {
                    _super.prototype.updateInterface.call(this);
                    if (this.entity.Id > 0) {
                    }
                    else {
                        this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", true);
                    }
                };
                DivisionsDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], DivisionsDialog);
                return DivisionsDialog;
            }(SchoolMate.Common.GridEditorDialog));
            Master.DivisionsDialog = DivisionsDialog;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var DivisionsEditor = /** @class */ (function (_super) {
                __extends(DivisionsEditor, _super);
                function DivisionsEditor(container) {
                    return _super.call(this, container) || this;
                }
                DivisionsEditor.prototype.getColumnsKey = function () { return "Master.Divisions"; };
                DivisionsEditor.prototype.getDialogType = function () { return Master.DivisionsDialog; };
                DivisionsEditor.prototype.getLocalTextPrefix = function () { return Master.DivisionsRow.localTextPrefix; };
                DivisionsEditor.prototype.validateEntity = function (row, id) {
                    //var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductID === row.ProductID);
                    //if (sameProduct && this.id(sameProduct) !== id) {
                    //    Q.alert('This product is already in order details!');
                    //    return false;
                    //}
                    var k = Master.StaffsRow.getLookup().itemById[row.TeacherId];
                    if (k != null) {
                        row.TeacherStaffName = k.FullName;
                    }
                    //row.DriverDriverName = FleetManagement.Parameters.DriverInfoRow.getLookup().itemById[row.DriverId].DriverName;
                    //row.DailyDetailTrxDate = DailyDetailsRow.getLookup().itemById[row.DailyDetailId].TrxDate;
                    //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
                    return true;
                };
                DivisionsEditor = __decorate([
                    Serenity.Decorators.registerClass()
                ], DivisionsEditor);
                return DivisionsEditor;
            }(SchoolMate.Common.GridEditorBase));
            Master.DivisionsEditor = DivisionsEditor;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var DivisionsGrid = /** @class */ (function (_super) {
                __extends(DivisionsGrid, _super);
                function DivisionsGrid(container) {
                    return _super.call(this, container) || this;
                }
                DivisionsGrid.prototype.getColumnsKey = function () { return 'Master.Divisions'; };
                DivisionsGrid.prototype.getDialogType = function () { return Master.DivisionsDialog; };
                DivisionsGrid.prototype.getIdProperty = function () { return Master.DivisionsRow.idProperty; };
                DivisionsGrid.prototype.getInsertPermission = function () { return Master.DivisionsRow.insertPermission; };
                DivisionsGrid.prototype.getLocalTextPrefix = function () { return Master.DivisionsRow.localTextPrefix; };
                DivisionsGrid.prototype.getService = function () { return Master.DivisionsService.baseUrl; };
                DivisionsGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], DivisionsGrid);
                return DivisionsGrid;
            }(Serenity.EntityGrid));
            Master.DivisionsGrid = DivisionsGrid;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var DivisionStudentsCheckDialog = /** @class */ (function (_super) {
                __extends(DivisionStudentsCheckDialog, _super);
                function DivisionStudentsCheckDialog(opt) {
                    var _this = _super.call(this, opt) || this;
                    _this.getDialogOptions().width = 300;
                    //this.permissions = new Administration.PermissionCheckEditor(this.byId('Permissions'), {
                    //    showRevoke: false
                    //});
                    //var button = document.createElement('button');
                    //button.innerText = "Add";
                    //button.onclick = function () {
                    //};  
                    var k = _this.options.prormotionid;
                    var kd = _this;
                    // $('<span>< ul style = "list-style-type: none; display: inline-block;" > <li>1 < /li> < li > 2 < /li> < /ul> < ul style = "list-style-type: none; display: inline-block;" > <li>3 < /li> < li > 4 < /li>< /ul> < span >').appendTo(this.byId('Permissions'));
                    //DivisionsService.GetByAcadamicYear({
                    //    DivisionIds: this.options.divid,
                    //    AcadamicYearId: this.options.acdid,
                    //}, response => {
                    //        for (let item of response) {
                    //            if (item.Status == true) {
                    //                var button = document.createElement('button');
                    //                button.innerText = "-";
                    //                button.onclick = function () {
                    //                    DivisionsService.DeleteStudentFromDivision({
                    //                        AcadamicYearId: k,
                    //                        DivisionIds: m,
                    //                        StudentId: item.StudentId,
                    //                    }, response => {
                    //                            kd.myFunc2();
                    //                    });
                    //                };
                    //                var trow = document.createElement('TR');
                    //                var y = document.createElement("TD");
                    //                var t = document.createTextNode(item.StudentName);
                    //                y.appendChild(t);
                    //                var y2 = document.createElement("TD");
                    //                y2.append(button);
                    //                trow.appendChild(y);
                    //                trow.appendChild(y2);
                    //                $('#myTable2').append(trow);
                    //            }
                    //            else {
                    //                //$('#myTable2').append('<tr><td>' + item.StudentName + '</td><td><button class="btn btn-outline-primary" onclick="myFunc(' + item.StudentId + ',' + this.options.divid + ',' + this.options.acdid+')">+</button></td></tr>');
                    //                //$("#menu2").append('<tr><td> Island Trading </td><td> Helen Bennett </td><td> UK </td></tr>');
                    //                var button = document.createElement('button');
                    //                button.innerText = "+";
                    //                button.onclick = function () {
                    //                    DivisionsService.UpdateDivision({
                    //                        AcadamicYearId: k,
                    //                        DivisionIds: m,
                    //                        StudentId: item.StudentId,
                    //                    }, response => {
                    //                            kd.myFunc2();
                    //                                        });
                    //                };
                    //                var trow = document.createElement('TR');
                    //                var y = document.createElement("TD");
                    //                var t = document.createTextNode(item.StudentName);
                    //                y.appendChild(t);
                    //                var y2 = document.createElement("TD");
                    //                y2.append(button);
                    //                trow.appendChild(y);
                    //                trow.appendChild(y2);
                    //                $('#myTable3').append(trow);
                    //            }
                    //        }
                    //});
                    _this.myFunc2();
                    return _this;
                }
                DivisionStudentsCheckDialog.prototype.myFunc2 = function () {
                    $('#myTable2 tbody').empty();
                    $('#myTable3 tbody').empty();
                    var k = this.options.divid;
                    var kd = this;
                    Master.DivisionsService.GetByPromotions({
                        promotionid: this.options.prormotionid,
                    }, function (response) {
                        var _loop_1 = function (item) {
                            //$('#myTable2').append('<tr><td>' + item.StudentName + '</td><td><button class="btn btn-outline-primary" onclick="myFunc(' + item.StudentId + ',' + this.options.divid + ',' + this.options.acdid+')">+</button></td></tr>');
                            //$("#menu2").append('<tr><td> Island Trading </td><td> Helen Bennett </td><td> UK </td></tr>');
                            button = document.createElement('button');
                            button.innerText = "+";
                            button.onclick = function () {
                                Master.DivisionStudentsService.Create({
                                    Entity: { DivisionId: kd.options.divid, PromotionDetailId: item.promotiondetailsid }
                                }, function (response) {
                                    kd.myFunc2();
                                });
                            };
                            trow = document.createElement('TR');
                            y = document.createElement("TD");
                            t = document.createTextNode(item.StudentName);
                            y.appendChild(t);
                            y2 = document.createElement("TD");
                            y2.append(button);
                            trow.appendChild(y);
                            trow.appendChild(y2);
                            $('#tbodyid2').append(trow);
                        };
                        var button, trow, y, t, y2;
                        for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                            var item = response_1[_i];
                            _loop_1(item);
                        }
                    });
                    var criteria;
                    Master.DivisionStudentsService.List({
                        Criteria: Serenity.Criteria.and(criteria, [["DivisionId" /* DivisionId */], '=', kd.options.divid])
                    }, function (response) {
                        var _loop_2 = function (item) {
                            button = document.createElement('button');
                            button.innerText = "-";
                            button.onclick = function () {
                                Master.DivisionStudentsService.Delete({
                                    EntityId: item.Id
                                }, function (response) {
                                    kd.myFunc2();
                                });
                            };
                            trow = document.createElement('TR');
                            y = document.createElement("TD");
                            t = document.createTextNode(item.Student);
                            y.appendChild(t);
                            y2 = document.createElement("TD");
                            y2.append(button);
                            trow.appendChild(y);
                            trow.appendChild(y2);
                            $('#tbodyid3').append(trow);
                        };
                        var button, trow, y, t, y2;
                        // $('#myTable2 tbody').empty();
                        //  $('#myTable3 tbody').empty();
                        for (var _i = 0, _a = response.Entities; _i < _a.length; _i++) {
                            var item = _a[_i];
                            _loop_2(item);
                        }
                    });
                };
                DivisionStudentsCheckDialog.prototype.getTemplate = function () {
                    var k = Master.DivisionsRow.getLookup().itemById[this.options.divid];
                    // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
                    return "<div id='~_Permissions'><div style='float:left; margin:10px'><h3>Current In Division(" + k.DivisionCode + ")</h3><table id='myTable2'> <thead><th width='300px'>Student</th><th width='150px'>Action</th> </thead><tbody id='tbodyid3'> <tbody></table></div><div style='float:left;margin:10px'><h3>Unallocated</h3><table id='myTable3'>  <thead>  <th width='300px'>Student </th><th>Action</th>  </thead>   <tbody id='tbodyid2'> <tbody></table></div></div>";
                };
                DivisionStudentsCheckDialog.prototype.getDialogOptions = function () {
                    var _this = this;
                    var opt = _super.prototype.getDialogOptions.call(this);
                    opt.buttons = [
                        {
                            text: Q.text('Dialogs.OkButton'),
                            click: function (e) {
                                //RolePermissionService.Update({
                                //    RoleID: this.options.roleID,
                                //    Permissions: this.permissions.value.map(x => x.PermissionKey),
                                //    Module: null,
                                //    Submodule: null
                                //}, response => {
                                //    this.dialogClose();
                                //    window.setTimeout(() => Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')), 0);
                                //});
                                _this.dialogClose();
                            }
                        },
                    ];
                    //opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'),
                    //    this.options.title);
                    opt.title = 'Division Students';
                    return opt;
                };
                DivisionStudentsCheckDialog = __decorate([
                    Serenity.Decorators.registerClass(),
                    Serenity.Decorators.resizable(),
                    Serenity.Decorators.maximizable()
                ], DivisionStudentsCheckDialog);
                return DivisionStudentsCheckDialog;
            }(Serenity.TemplatedDialog));
            Master.DivisionStudentsCheckDialog = DivisionStudentsCheckDialog;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var DivisionStudentsDialog = /** @class */ (function (_super) {
                __extends(DivisionStudentsDialog, _super);
                function DivisionStudentsDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new Master.DivisionStudentsForm(_this.idPrefix);
                    return _this;
                }
                DivisionStudentsDialog.prototype.getFormKey = function () { return Master.DivisionStudentsForm.formKey; };
                DivisionStudentsDialog.prototype.getIdProperty = function () { return Master.DivisionStudentsRow.idProperty; };
                DivisionStudentsDialog.prototype.getLocalTextPrefix = function () { return Master.DivisionStudentsRow.localTextPrefix; };
                DivisionStudentsDialog.prototype.getService = function () { return Master.DivisionStudentsService.baseUrl; };
                DivisionStudentsDialog.prototype.getDeletePermission = function () { return Master.DivisionStudentsRow.deletePermission; };
                DivisionStudentsDialog.prototype.getInsertPermission = function () { return Master.DivisionStudentsRow.insertPermission; };
                DivisionStudentsDialog.prototype.getUpdatePermission = function () { return Master.DivisionStudentsRow.updatePermission; };
                DivisionStudentsDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], DivisionStudentsDialog);
                return DivisionStudentsDialog;
            }(Serenity.EntityDialog));
            Master.DivisionStudentsDialog = DivisionStudentsDialog;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var DivisionStudentsGrid = /** @class */ (function (_super) {
                __extends(DivisionStudentsGrid, _super);
                function DivisionStudentsGrid(container) {
                    return _super.call(this, container) || this;
                }
                DivisionStudentsGrid.prototype.getColumnsKey = function () { return 'Master.DivisionStudents'; };
                DivisionStudentsGrid.prototype.getDialogType = function () { return Master.DivisionStudentsDialog; };
                DivisionStudentsGrid.prototype.getIdProperty = function () { return Master.DivisionStudentsRow.idProperty; };
                DivisionStudentsGrid.prototype.getInsertPermission = function () { return Master.DivisionStudentsRow.insertPermission; };
                DivisionStudentsGrid.prototype.getLocalTextPrefix = function () { return Master.DivisionStudentsRow.localTextPrefix; };
                DivisionStudentsGrid.prototype.getService = function () { return Master.DivisionStudentsService.baseUrl; };
                DivisionStudentsGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], DivisionStudentsGrid);
                return DivisionStudentsGrid;
            }(Serenity.EntityGrid));
            Master.DivisionStudentsGrid = DivisionStudentsGrid;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var ExamCoursesDialog = /** @class */ (function (_super) {
                __extends(ExamCoursesDialog, _super);
                function ExamCoursesDialog() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                ExamCoursesDialog.prototype.getFormKey = function () { return Master.ExamCoursesForm.formKey; };
                //protected getIdProperty() { return ExamCoursesRow.idProperty; }
                ExamCoursesDialog.prototype.getLocalTextPrefix = function () { return Master.ExamCoursesRow.localTextPrefix; };
                ExamCoursesDialog.prototype.updateInterface = function () {
                    _super.prototype.updateInterface.call(this);
                    this.element.find('.add-button').hide();
                };
                ExamCoursesDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], ExamCoursesDialog);
                return ExamCoursesDialog;
            }(SchoolMate.Common.GridEditorDialog));
            Master.ExamCoursesDialog = ExamCoursesDialog;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var ExamCoursesEditor = /** @class */ (function (_super) {
                __extends(ExamCoursesEditor, _super);
                function ExamCoursesEditor(container) {
                    return _super.call(this, container) || this;
                }
                ExamCoursesEditor.prototype.getColumnsKey = function () { return "Master.ExamCourses"; };
                ExamCoursesEditor.prototype.getDialogType = function () { return Master.ExamCoursesDialog; };
                ExamCoursesEditor.prototype.getLocalTextPrefix = function () { return Master.ExamCoursesRow.localTextPrefix; };
                ExamCoursesEditor.prototype.validateEntity = function (row, id) {
                    //var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductID === row.ProductID);
                    //if (sameProduct && this.id(sameProduct) !== id) {
                    //    Q.alert('This product is already in order details!');
                    //    return false;
                    //}
                    // row.SubjectSubjectName = Master.SubjectsRow.getLookup().itemById[row.SubjectId].SubjectName;
                    //row.DriverDriverName = FleetManagement.Parameters.DriverInfoRow.getLookup().itemById[row.DriverId].DriverName;
                    //row.DailyDetailTrxDate = DailyDetailsRow.getLookup().itemById[row.DailyDetailId].TrxDate;
                    //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
                    return true;
                };
                ExamCoursesEditor = __decorate([
                    Serenity.Decorators.registerClass()
                ], ExamCoursesEditor);
                return ExamCoursesEditor;
            }(SchoolMate.Common.GridEditorBase));
            Master.ExamCoursesEditor = ExamCoursesEditor;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var ExamCoursesGrid = /** @class */ (function (_super) {
                __extends(ExamCoursesGrid, _super);
                function ExamCoursesGrid(container) {
                    return _super.call(this, container) || this;
                }
                ExamCoursesGrid.prototype.getColumnsKey = function () { return 'Master.ExamCourses'; };
                ExamCoursesGrid.prototype.getDialogType = function () { return Master.ExamCoursesDialog; };
                ExamCoursesGrid.prototype.getIdProperty = function () { return Master.ExamCoursesRow.idProperty; };
                ExamCoursesGrid.prototype.getInsertPermission = function () { return Master.ExamCoursesRow.insertPermission; };
                ExamCoursesGrid.prototype.getLocalTextPrefix = function () { return Master.ExamCoursesRow.localTextPrefix; };
                ExamCoursesGrid.prototype.getService = function () { return Master.ExamCoursesService.baseUrl; };
                ExamCoursesGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], ExamCoursesGrid);
                return ExamCoursesGrid;
            }(Serenity.EntityGrid));
            Master.ExamCoursesGrid = ExamCoursesGrid;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var ExamMaxMarksDialog = /** @class */ (function (_super) {
                __extends(ExamMaxMarksDialog, _super);
                function ExamMaxMarksDialog() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                ExamMaxMarksDialog.prototype.getFormKey = function () { return Master.ExamMaxMarksForm.formKey; };
                // protected getIdProperty() { return ExamMaxMarksRow.idProperty; }
                ExamMaxMarksDialog.prototype.getLocalTextPrefix = function () { return Master.ExamMaxMarksRow.localTextPrefix; };
                ExamMaxMarksDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], ExamMaxMarksDialog);
                return ExamMaxMarksDialog;
            }(SchoolMate.Common.GridEditorDialog));
            Master.ExamMaxMarksDialog = ExamMaxMarksDialog;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var ExamMaxMarksEditor = /** @class */ (function (_super) {
                __extends(ExamMaxMarksEditor, _super);
                function ExamMaxMarksEditor(container) {
                    return _super.call(this, container) || this;
                }
                ExamMaxMarksEditor.prototype.getColumnsKey = function () { return "Master.ExamMaxMarks"; };
                ExamMaxMarksEditor.prototype.getDialogType = function () { return Master.ExamMaxMarksDialog; };
                ExamMaxMarksEditor.prototype.getLocalTextPrefix = function () { return Master.ExamMaxMarksRow.localTextPrefix; };
                ExamMaxMarksEditor.prototype.validateEntity = function (row, id) {
                    //var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductID === row.ProductID);
                    //if (sameProduct && this.id(sameProduct) !== id) {
                    //    Q.alert('This product is already in order details!');
                    //    return false;
                    //}
                    // row.SubjectSubjectName = Master.SubjectsRow.getLookup().itemById[row.SubjectId].SubjectName;
                    //row.DriverDriverName = FleetManagement.Parameters.DriverInfoRow.getLookup().itemById[row.DriverId].DriverName;
                    //row.DailyDetailTrxDate = DailyDetailsRow.getLookup().itemById[row.DailyDetailId].TrxDate;
                    //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
                    return true;
                };
                ExamMaxMarksEditor = __decorate([
                    Serenity.Decorators.registerClass()
                ], ExamMaxMarksEditor);
                return ExamMaxMarksEditor;
            }(SchoolMate.Common.GridEditorBase));
            Master.ExamMaxMarksEditor = ExamMaxMarksEditor;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var ExamMaxMarksGrid = /** @class */ (function (_super) {
                __extends(ExamMaxMarksGrid, _super);
                function ExamMaxMarksGrid(container) {
                    return _super.call(this, container) || this;
                }
                ExamMaxMarksGrid.prototype.getColumnsKey = function () { return 'Master.ExamMaxMarks'; };
                ExamMaxMarksGrid.prototype.getDialogType = function () { return Master.ExamMaxMarksDialog; };
                ExamMaxMarksGrid.prototype.getIdProperty = function () { return Master.ExamMaxMarksRow.idProperty; };
                ExamMaxMarksGrid.prototype.getInsertPermission = function () { return Master.ExamMaxMarksRow.insertPermission; };
                ExamMaxMarksGrid.prototype.getLocalTextPrefix = function () { return Master.ExamMaxMarksRow.localTextPrefix; };
                ExamMaxMarksGrid.prototype.getService = function () { return Master.ExamMaxMarksService.baseUrl; };
                ExamMaxMarksGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], ExamMaxMarksGrid);
                return ExamMaxMarksGrid;
            }(Serenity.EntityGrid));
            Master.ExamMaxMarksGrid = ExamMaxMarksGrid;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var ExamsDialog = /** @class */ (function (_super) {
                __extends(ExamsDialog, _super);
                function ExamsDialog() {
                    var _this = _super.call(this) || this;
                    _this.form = new Master.ExamsForm(_this.idPrefix);
                    _this.form.AcadamicYearId.changeSelect2(function (e) {
                        _this.setvalue();
                    });
                    return _this;
                }
                ExamsDialog.prototype.getFormKey = function () { return Master.ExamsForm.formKey; };
                ExamsDialog.prototype.getIdProperty = function () { return Master.ExamsRow.idProperty; };
                ExamsDialog.prototype.getLocalTextPrefix = function () { return Master.ExamsRow.localTextPrefix; };
                ExamsDialog.prototype.getNameProperty = function () { return Master.ExamsRow.nameProperty; };
                ExamsDialog.prototype.getService = function () { return Master.ExamsService.baseUrl; };
                ExamsDialog.prototype.getDeletePermission = function () { return Master.ExamsRow.deletePermission; };
                ExamsDialog.prototype.getInsertPermission = function () { return Master.ExamsRow.insertPermission; };
                ExamsDialog.prototype.getUpdatePermission = function () { return Master.ExamsRow.updatePermission; };
                ExamsDialog.prototype.setvalue = function () {
                    var _this = this;
                    var acid = Q.toId(this.form.AcadamicYearId.value);
                    if (acid > 0) {
                        Master.ExamsService.GetAcadamicYearCourseSubjects({
                            acadamicyearid: acid
                        }, function (response) {
                            var detail = _this.form.Courses.getItems();
                            detail = [];
                            response.forEach(function (item, index) {
                                var smark;
                                smark = [];
                                item.courseSubjectResponses.forEach(function (item2, index2) {
                                    smark.push({ CourseSubjectId: item2.SubjectId, CourseSubject: item2.SubjectName, MaxMark: item2.MaxMark });
                                });
                                detail.push({ PromotionId: item.promotionid, Course: item.CousrseName, Subjects: smark });
                            });
                            _this.form.Courses.value = detail;
                        });
                    }
                };
                ExamsDialog.prototype.updateInterface = function () {
                    var _this = this;
                    _super.prototype.updateInterface.call(this);
                    this.element.find('.add-button').hide();
                    if (!this.isEditMode()) {
                        Master.CurrentAcadamicYearService.GetCurrentAcadamicYear({}, function (response) {
                            _this.form.AcadamicYearId.value = response.Id.toString();
                            _this.setvalue();
                        });
                    }
                };
                ExamsDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], ExamsDialog);
                return ExamsDialog;
            }(Serenity.EntityDialog));
            Master.ExamsDialog = ExamsDialog;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var ExamsGrid = /** @class */ (function (_super) {
                __extends(ExamsGrid, _super);
                function ExamsGrid(container) {
                    return _super.call(this, container) || this;
                }
                ExamsGrid.prototype.getColumnsKey = function () { return 'Master.Exams'; };
                ExamsGrid.prototype.getDialogType = function () { return Master.ExamsDialog; };
                ExamsGrid.prototype.getIdProperty = function () { return Master.ExamsRow.idProperty; };
                ExamsGrid.prototype.getInsertPermission = function () { return Master.ExamsRow.insertPermission; };
                ExamsGrid.prototype.getLocalTextPrefix = function () { return Master.ExamsRow.localTextPrefix; };
                ExamsGrid.prototype.getService = function () { return Master.ExamsService.baseUrl; };
                ExamsGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], ExamsGrid);
                return ExamsGrid;
            }(Serenity.EntityGrid));
            Master.ExamsGrid = ExamsGrid;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
//namespace BitPro.SchoolMate.Master {
//    @Serenity.Decorators.registerClass()
//    export class FeeExcemptionsDialog extends Serenity.EntityDialog<FeeExcemptionsRow, any> {
//        protected getFormKey() { return FeeExcemptionsForm.formKey; }
//        protected getIdProperty() { return FeeExcemptionsRow.idProperty; }
//        protected getLocalTextPrefix() { return FeeExcemptionsRow.localTextPrefix; }
//        protected getService() { return FeeExcemptionsService.baseUrl; }
//        protected getDeletePermission() { return FeeExcemptionsRow.deletePermission; }
//        protected getInsertPermission() { return FeeExcemptionsRow.insertPermission; }
//        protected getUpdatePermission() { return FeeExcemptionsRow.updatePermission; }
//        protected form = new FeeExcemptionsForm(this.idPrefix);
//    }
//}
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var FeeExcemptionsDialog = /** @class */ (function (_super) {
                __extends(FeeExcemptionsDialog, _super);
                function FeeExcemptionsDialog() {
                    var _this = _super.call(this) || this;
                    _this.form = new Master.FeeExcemptionsForm(_this.idPrefix);
                    _this.form = new Master.FeeExcemptionsForm(_this.idPrefix);
                    return _this;
                }
                FeeExcemptionsDialog.prototype.getFormKey = function () { return Master.FeeExcemptionsForm.formKey; };
                //protected getIdProperty() { return UOMAmountRow.idProperty; }
                FeeExcemptionsDialog.prototype.getLocalTextPrefix = function () { return Master.FeeExcemptionsRow.localTextPrefix; };
                FeeExcemptionsDialog.prototype.afterLoadEntity = function () {
                    var _this = this;
                    _super.prototype.afterLoadEntity.call(this);
                    // Subscribe to changes in MaterialId
                    this.form.CourseFeeId.changeSelect2(function (e) {
                        _this.updateTotalFreight();
                    });
                };
                FeeExcemptionsDialog.prototype.updateTotalFreight = function () {
                    var materialId = Q.toId(this.form.CourseFeeId.value);
                    if (materialId > 0) {
                        /*  const uomAmountRow = UOMAmount.UOMAmountRow.getLookup().item();*/
                        //const uomAmountRowArray = Object.values(UOMAmount.UOMAmountRow.getLookup());
                        //const uomAmountRow = uomAmountRowArray.find(row => row.materialId === materialId);
                        /*var uomAmountRowLookup = Master.FeesRow.getLookup().items;*/
                        var shipperRow = Master.FeesRow.getLookup().itemById[materialId];
                        /*const uomAmountRow = uomAmountRowLookup.filter(row => row.Id === materialId);*/
                        //if (uomAmountRow.length > 0) {
                        //    // Check if the filtered array is not empty
                        //    var rate = uomAmountRow[0].Rate; // Store the value of Rate from the first element
                        //}
                        //if (uomAmountRow != null) {
                        //    //this.form.UnitPrice.value = rate;
                        //    ///* this.form.TotalFreight.value = this.form.UnitPrice.value * this.form.PerTonRate.value;*/
                        //    //this.form.TotalCommission.value = this.calculateCommission(this.form.TotalFreight.value);
                        //    //this.form.UnitPrice.value = this.form.TotalFreight.value / this.form.PerTonRate.value;
                        //}
                        if (shipperRow != null) {
                            var shipperState = shipperRow.FeeName;
                            var fee = shipperRow.AnnualFee;
                            /*const consigneeState = consigneeRow.StateName;*/
                        }
                        /*this.form.c*/
                    }
                };
                FeeExcemptionsDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], FeeExcemptionsDialog);
                return FeeExcemptionsDialog;
            }(SchoolMate.Common.GridEditorDialog));
            Master.FeeExcemptionsDialog = FeeExcemptionsDialog;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var FeeExcemptionsGrid = /** @class */ (function (_super) {
                __extends(FeeExcemptionsGrid, _super);
                function FeeExcemptionsGrid(container) {
                    return _super.call(this, container) || this;
                }
                FeeExcemptionsGrid.prototype.getColumnsKey = function () { return 'Master.FeeExcemptions'; };
                FeeExcemptionsGrid.prototype.getDialogType = function () { return Master.FeeExcemptionsDialog; };
                FeeExcemptionsGrid.prototype.getIdProperty = function () { return Master.FeeExcemptionsRow.idProperty; };
                FeeExcemptionsGrid.prototype.getInsertPermission = function () { return Master.FeeExcemptionsRow.insertPermission; };
                FeeExcemptionsGrid.prototype.getLocalTextPrefix = function () { return Master.FeeExcemptionsRow.localTextPrefix; };
                FeeExcemptionsGrid.prototype.getService = function () { return Master.FeeExcemptionsService.baseUrl; };
                FeeExcemptionsGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], FeeExcemptionsGrid);
                return FeeExcemptionsGrid;
            }(Serenity.EntityGrid));
            Master.FeeExcemptionsGrid = FeeExcemptionsGrid;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var FeesDialog = /** @class */ (function (_super) {
                __extends(FeesDialog, _super);
                function FeesDialog() {
                    var _this = _super.call(this) || this;
                    _this.form = new Master.FeesForm(_this.idPrefix);
                    _this.form = new Master.FeesForm(_this.idPrefix);
                    _this.form.IsTranportation.change(function (e) {
                    });
                    return _this;
                }
                FeesDialog.prototype.getFormKey = function () { return Master.FeesForm.formKey; };
                FeesDialog.prototype.getIdProperty = function () { return Master.FeesRow.idProperty; };
                FeesDialog.prototype.getLocalTextPrefix = function () { return Master.FeesRow.localTextPrefix; };
                FeesDialog.prototype.getNameProperty = function () { return Master.FeesRow.nameProperty; };
                FeesDialog.prototype.getService = function () { return Master.FeesService.baseUrl; };
                FeesDialog.prototype.getDeletePermission = function () { return Master.FeesRow.deletePermission; };
                FeesDialog.prototype.getInsertPermission = function () { return Master.FeesRow.insertPermission; };
                FeesDialog.prototype.getUpdatePermission = function () { return Master.FeesRow.updatePermission; };
                FeesDialog.prototype.afterLoadEntity = function () {
                    var _this = this;
                    _super.prototype.afterLoadEntity.call(this);
                    if (!this.isEditMode()) {
                        Master.FeesService.GetTermsOfCurrentAcadamicYear({}, function (response) {
                            var k = _this.form.FeeStructures.getItems();
                            response.forEach(function (item, index) {
                                k.push({ FeeTermId: item.TermId, AcadamicYearId: item.AcadamicYearId, FeeTermTermName: item.TermName, AcadamicYearCode: item.AcadamicYear, FeeAmount: 0 });
                            });
                            _this.form.FeeStructures.value = k;
                        });
                    }
                    else {
                        Master.CurrentAcadamicYearService.GetCurrentAcadamicYear({}, function (response) {
                            var k = _this.form.FeeStructures.getItems();
                            var li = k.filter(function (i) { return i.AcadamicYearId == response.Id; });
                            if (li.length <= 0) {
                                Master.FeesService.GetTermsOfCurrentAcadamicYear({}, function (response) {
                                    var k = _this.form.FeeStructures.getItems();
                                    response.forEach(function (item, index) {
                                        k.push({ FeeTermId: item.TermId, AcadamicYearId: item.AcadamicYearId, FeeTermTermName: item.TermName, AcadamicYearCode: item.AcadamicYear, FeeAmount: 0 });
                                    });
                                    _this.form.FeeStructures.value = k;
                                });
                            }
                            //this.view.endUpdate();
                        });
                        //var k = this.entity.FeeStructures.filter(i => i.AcadamicYearId == 2);
                    }
                };
                FeesDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], FeesDialog);
                return FeesDialog;
            }(Serenity.EntityDialog));
            Master.FeesDialog = FeesDialog;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var FeesGrid = /** @class */ (function (_super) {
                __extends(FeesGrid, _super);
                function FeesGrid(container) {
                    return _super.call(this, container) || this;
                }
                FeesGrid.prototype.getColumnsKey = function () { return 'Master.Fees'; };
                FeesGrid.prototype.getDialogType = function () { return Master.FeesDialog; };
                FeesGrid.prototype.getIdProperty = function () { return Master.FeesRow.idProperty; };
                FeesGrid.prototype.getInsertPermission = function () { return Master.FeesRow.insertPermission; };
                FeesGrid.prototype.getLocalTextPrefix = function () { return Master.FeesRow.localTextPrefix; };
                FeesGrid.prototype.getService = function () { return Master.FeesService.baseUrl; };
                FeesGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], FeesGrid);
                return FeesGrid;
            }(Serenity.EntityGrid));
            Master.FeesGrid = FeesGrid;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var FeeStructureDialog = /** @class */ (function (_super) {
                __extends(FeeStructureDialog, _super);
                function FeeStructureDialog() {
                    var _this = _super.call(this) || this;
                    _this.form = new Master.FeeStructureForm(_this.idPrefix);
                    return _this;
                }
                FeeStructureDialog.prototype.getFormKey = function () { return Master.FeeStructureForm.formKey; };
                //protected getIdProperty() { return FeeStructureRow.idProperty; }
                FeeStructureDialog.prototype.getLocalTextPrefix = function () { return Master.FeeStructureRow.localTextPrefix; };
                FeeStructureDialog.prototype.afterLoadEntity = function () {
                    var _this = this;
                    _super.prototype.afterLoadEntity.call(this);
                    if (!this.isEditMode()) {
                        Master.CurrentAcadamicYearService.GetCurrentAcadamicYear({}, function (response) {
                            _this.form.AcadamicYearId.value = response.Id.toString();
                        });
                    }
                };
                FeeStructureDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], FeeStructureDialog);
                return FeeStructureDialog;
            }(SchoolMate.Common.GridEditorDialog));
            Master.FeeStructureDialog = FeeStructureDialog;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var FeeStructureEditor = /** @class */ (function (_super) {
                __extends(FeeStructureEditor, _super);
                function FeeStructureEditor(container) {
                    var _this = _super.call(this, container) || this;
                    _this.number = 0;
                    var ite = _this;
                    _this.slickGrid.onSort.subscribe(function (e, args) {
                        sortGridFunction(args.grid, args.sortCols[0], args.sortCols[0].sortCol.field);
                        //(args.grid as Slick.Grid).init();
                        args.grid.invalidateAllRows();
                        args.grid.invalidate();
                        args.grid.render();
                        args.grid.resizeCanvas();
                    });
                    _this.number = 1;
                    Master.CurrentAcadamicYearService.GetCurrentAcadamicYear({}, function (response) {
                        _this.number = response.Id;
                        ite.view.beginUpdate();
                        var filter = function filter(item, args) {
                            var linha = item;
                            // filter logic
                            //Sample filter (if the Value for column "CduCodigo" equals 3)
                            if (item["AcadamicYearId"] == ite.number)
                                return true;
                            return false;
                        };
                        ite.view.setFilter(filter);
                        ite.view.endUpdate();
                        //this.view.endUpdate();
                    });
                    _this.quickFiltersBar.changeSelect2(function (e) {
                        ite.view.beginUpdate();
                        if (e.added != null) {
                            ite.number = e.added.id;
                            var filter = function filter(item, args) {
                                var linha = item;
                                // filter logic
                                //Sample filter (if the Value for column "CduCodigo" equals 3)
                                if (item["AcadamicYearId"] == 1)
                                    return true;
                                return false;
                            };
                            ite.view.setFilter(filter);
                            ite.view.endUpdate();
                        }
                        //this.view.endUpdate();
                    });
                    return _this;
                }
                FeeStructureEditor.prototype.getColumnsKey = function () { return "Master.FeeStructure"; };
                FeeStructureEditor.prototype.getDialogType = function () { return Master.FeeStructureDialog; };
                FeeStructureEditor.prototype.getLocalTextPrefix = function () { return Master.FeeStructureRow.localTextPrefix; };
                FeeStructureEditor.prototype.layout = function () {
                    _super.prototype.layout.call(this);
                    var sortCols = this.slickGrid.getSortColumns();
                    sortGridFunction(this.slickGrid, sortCols[0], sortCols[0].columnId);
                };
                FeeStructureEditor.prototype.onViewSubmit = function () {
                    var kl = this.number;
                    this.view.beginUpdate();
                    var filter = function filter(item, args) {
                        var linha = item;
                        // filter logic
                        //Sample filter (if the Value for column "CduCodigo" equals 3)
                        if (item["AcadamicYearId"] == kl)
                            return true;
                        return false;
                    };
                    this.view.setFilter(filter);
                    this.view.endUpdate();
                    return true;
                };
                FeeStructureEditor.prototype.enableFiltering = function () {
                    return true;
                };
                FeeStructureEditor.prototype.getDefaultSortBy = function () {
                    //Columns to apply first sort on layout
                    return ["Id"];
                };
                //protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[] {
                //    // get quick filter list from base class
                //    let filters = super.getQuickFilters();
                //    let filter = Q.first(filters, x => x.field == "AcadamicYearId");  // *** The city filter is special because it does not derive its values from a real xyzRow but its values are collected from all customers (see Northwind/Customer/CustomerCity.cs) ***
                //    var f = this.getItems();
                //    filter.handler = h => {
                //        //this.CityName = h.value;    // *** We want to store the selected value from the city quickfilter in the CityName private string field of this grid class ***
                //        var k = h.value;
                //        if (h.active) {
                //            //var i = f.filter(k => k.AcadamicYearId = h.);  
                //            var i=0;
                //        }
                //    };
                //    return filters;
                //}
                FeeStructureEditor.prototype.validateEntity = function (row, id) {
                    //var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductID === row.ProductID);
                    //if (sameProduct && this.id(sameProduct) !== id) {
                    //    Q.alert('This product is already in order details!');
                    //    return false;
                    //}
                    row.AcadamicYearCode = Master.AcadamicYearRow.getLookup().itemById[row.AcadamicYearId].Code;
                    row.FeeTermTermName = Master.FeeTermsRow.getLookup().itemById[row.FeeTermId].TermName;
                    //row.DailyDetailTrxDate = DailyDetailsRow.getLookup().itemById[row.DailyDetailId].TrxDate;
                    //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
                    return true;
                };
                FeeStructureEditor = __decorate([
                    Serenity.Decorators.registerClass(),
                    Serenity.Decorators.filterable()
                ], FeeStructureEditor);
                return FeeStructureEditor;
            }(SchoolMate.Common.GridEditorBase));
            Master.FeeStructureEditor = FeeStructureEditor;
            function sortGridFunction(grid, column, field) {
                grid.getData().sort(function (a, b) {
                    var result = a[field] > b[field] ? 1 :
                        a[field] < b[field] ? -1 :
                            0;
                    return column.sortAsc ? result : -result;
                });
            }
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var FeeStructureGrid = /** @class */ (function (_super) {
                __extends(FeeStructureGrid, _super);
                function FeeStructureGrid(container) {
                    return _super.call(this, container) || this;
                }
                FeeStructureGrid.prototype.getColumnsKey = function () { return 'Master.FeeStructure'; };
                FeeStructureGrid.prototype.getDialogType = function () { return Master.FeeStructureDialog; };
                FeeStructureGrid.prototype.getIdProperty = function () { return Master.FeeStructureRow.idProperty; };
                FeeStructureGrid.prototype.getInsertPermission = function () { return Master.FeeStructureRow.insertPermission; };
                FeeStructureGrid.prototype.getLocalTextPrefix = function () { return Master.FeeStructureRow.localTextPrefix; };
                FeeStructureGrid.prototype.getService = function () { return Master.FeeStructureService.baseUrl; };
                FeeStructureGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], FeeStructureGrid);
                return FeeStructureGrid;
            }(Serenity.EntityGrid));
            Master.FeeStructureGrid = FeeStructureGrid;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var FeeTermsDialog = /** @class */ (function (_super) {
                __extends(FeeTermsDialog, _super);
                function FeeTermsDialog() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                FeeTermsDialog.prototype.getFormKey = function () { return Master.FeeTermsForm.formKey; };
                // protected getIdProperty() { return FeeTermsRow.idProperty; }
                FeeTermsDialog.prototype.getLocalTextPrefix = function () { return Master.FeeTermsRow.localTextPrefix; };
                FeeTermsDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], FeeTermsDialog);
                return FeeTermsDialog;
            }(SchoolMate.Common.GridEditorDialog));
            Master.FeeTermsDialog = FeeTermsDialog;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var FeeTermsEditor = /** @class */ (function (_super) {
                __extends(FeeTermsEditor, _super);
                function FeeTermsEditor(container) {
                    return _super.call(this, container) || this;
                }
                FeeTermsEditor.prototype.getColumnsKey = function () { return "Master.FeeTerms"; };
                FeeTermsEditor.prototype.getDialogType = function () { return Master.FeeTermsDialog; };
                FeeTermsEditor.prototype.getLocalTextPrefix = function () { return Master.FeeTermsRow.localTextPrefix; };
                FeeTermsEditor.prototype.validateEntity = function (row, id) {
                    //var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductID === row.ProductID);
                    //if (sameProduct && this.id(sameProduct) !== id) {
                    //    Q.alert('This product is already in order details!');
                    //    return false;
                    //}
                    //row.DriverDriverName = FleetManagement.Parameters.DriverInfoRow.getLookup().itemById[row.DriverId].DriverName;
                    //row.DailyDetailTrxDate = DailyDetailsRow.getLookup().itemById[row.DailyDetailId].TrxDate;
                    //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
                    return true;
                };
                FeeTermsEditor = __decorate([
                    Serenity.Decorators.registerClass()
                ], FeeTermsEditor);
                return FeeTermsEditor;
            }(SchoolMate.Common.GridEditorBase));
            Master.FeeTermsEditor = FeeTermsEditor;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var FeeTermsGrid = /** @class */ (function (_super) {
                __extends(FeeTermsGrid, _super);
                function FeeTermsGrid(container) {
                    return _super.call(this, container) || this;
                }
                FeeTermsGrid.prototype.getColumnsKey = function () { return 'Master.FeeTerms'; };
                FeeTermsGrid.prototype.getDialogType = function () { return Master.FeeTermsDialog; };
                FeeTermsGrid.prototype.getIdProperty = function () { return Master.FeeTermsRow.idProperty; };
                FeeTermsGrid.prototype.getInsertPermission = function () { return Master.FeeTermsRow.insertPermission; };
                FeeTermsGrid.prototype.getLocalTextPrefix = function () { return Master.FeeTermsRow.localTextPrefix; };
                FeeTermsGrid.prototype.getService = function () { return Master.FeeTermsService.baseUrl; };
                FeeTermsGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], FeeTermsGrid);
                return FeeTermsGrid;
            }(Serenity.EntityGrid));
            Master.FeeTermsGrid = FeeTermsGrid;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var StaffsDialog = /** @class */ (function (_super) {
                __extends(StaffsDialog, _super);
                function StaffsDialog() {
                    var _this = _super.call(this) || this;
                    _this.form = new Master.StaffsForm(_this.idPrefix);
                    _this.form = new Master.StaffsForm(_this.idPrefix);
                    _this.form.IsTeacher.change(function (e) {
                        if (_this.form.IsTeacher.value == true) {
                            Serenity.EditorUtils.setReadOnly(_this.form.StaffSubjects, false);
                        }
                        else {
                            Serenity.EditorUtils.setReadOnly(_this.form.StaffSubjects, true);
                        }
                    });
                    return _this;
                }
                StaffsDialog.prototype.getFormKey = function () { return Master.StaffsForm.formKey; };
                StaffsDialog.prototype.getIdProperty = function () { return Master.StaffsRow.idProperty; };
                StaffsDialog.prototype.getLocalTextPrefix = function () { return Master.StaffsRow.localTextPrefix; };
                StaffsDialog.prototype.getNameProperty = function () { return Master.StaffsRow.nameProperty; };
                StaffsDialog.prototype.getService = function () { return Master.StaffsService.baseUrl; };
                StaffsDialog.prototype.getDeletePermission = function () { return Master.StaffsRow.deletePermission; };
                StaffsDialog.prototype.getInsertPermission = function () { return Master.StaffsRow.insertPermission; };
                StaffsDialog.prototype.getUpdatePermission = function () { return Master.StaffsRow.updatePermission; };
                StaffsDialog.prototype.updateInterface = function () {
                    _super.prototype.updateInterface.call(this);
                    if (this.form.IsTeacher.value == true) {
                        Serenity.EditorUtils.setReadOnly(this.form.StaffSubjects, false);
                    }
                    else {
                        Serenity.EditorUtils.setReadOnly(this.form.StaffSubjects, true);
                    }
                };
                StaffsDialog.prototype.afterLoadEntity = function () {
                    _super.prototype.afterLoadEntity.call(this);
                    // fill next number in new record mode
                    if (this.isNew()) {
                        this.setCode();
                    }
                };
                StaffsDialog.prototype.setCode = function () {
                    var _this = this;
                    SchoolMate.Administration.SystemSettingsService.List({}, function (response) {
                        var val = Q.trimToNull(_this.form.Code.value);
                        // we will only get next number when customer ID is empty or 1 character in length
                        if (!val || val.length <= 1) {
                            // if no customer ID yet (new record mode probably) use 'C' as a prefix
                            var prefix = (val || response.Entities[0].StudentCodePrefix);
                            if (prefix == null) {
                                prefix = "";
                            }
                            // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                            Master.StaffsService.GetNextNumber({
                                Prefix: prefix,
                                Length: response.Entities[0].StudentCodeLength // we want service to search for and return serials of 5 in length
                            }, function (response) {
                                _this.form.Code.value = response.Serial;
                                // this is to mark numerical part after prefix
                                _this.form.Code.element[0].setSelectionRange(prefix.length, response.Serial.length);
                            });
                        }
                    });
                };
                StaffsDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], StaffsDialog);
                return StaffsDialog;
            }(Serenity.EntityDialog));
            Master.StaffsDialog = StaffsDialog;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var StaffsGrid = /** @class */ (function (_super) {
                __extends(StaffsGrid, _super);
                function StaffsGrid(container) {
                    return _super.call(this, container) || this;
                }
                StaffsGrid.prototype.getColumnsKey = function () { return 'Master.Staffs'; };
                StaffsGrid.prototype.getDialogType = function () { return Master.StaffsDialog; };
                StaffsGrid.prototype.getIdProperty = function () { return Master.StaffsRow.idProperty; };
                StaffsGrid.prototype.getInsertPermission = function () { return Master.StaffsRow.insertPermission; };
                StaffsGrid.prototype.getLocalTextPrefix = function () { return Master.StaffsRow.localTextPrefix; };
                StaffsGrid.prototype.getService = function () { return Master.StaffsService.baseUrl; };
                StaffsGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], StaffsGrid);
                return StaffsGrid;
            }(Serenity.EntityGrid));
            Master.StaffsGrid = StaffsGrid;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var StaffSubjectsDialog = /** @class */ (function (_super) {
                __extends(StaffSubjectsDialog, _super);
                function StaffSubjectsDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new Master.StaffSubjectsForm(_this.idPrefix);
                    return _this;
                }
                StaffSubjectsDialog.prototype.getFormKey = function () { return Master.StaffSubjectsForm.formKey; };
                StaffSubjectsDialog.prototype.getIdProperty = function () { return Master.StaffSubjectsRow.idProperty; };
                StaffSubjectsDialog.prototype.getLocalTextPrefix = function () { return Master.StaffSubjectsRow.localTextPrefix; };
                StaffSubjectsDialog.prototype.getService = function () { return Master.StaffSubjectsService.baseUrl; };
                StaffSubjectsDialog.prototype.getDeletePermission = function () { return Master.StaffSubjectsRow.deletePermission; };
                StaffSubjectsDialog.prototype.getInsertPermission = function () { return Master.StaffSubjectsRow.insertPermission; };
                StaffSubjectsDialog.prototype.getUpdatePermission = function () { return Master.StaffSubjectsRow.updatePermission; };
                StaffSubjectsDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], StaffSubjectsDialog);
                return StaffSubjectsDialog;
            }(Serenity.EntityDialog));
            Master.StaffSubjectsDialog = StaffSubjectsDialog;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var StaffSubjectsGrid = /** @class */ (function (_super) {
                __extends(StaffSubjectsGrid, _super);
                function StaffSubjectsGrid(container) {
                    return _super.call(this, container) || this;
                }
                StaffSubjectsGrid.prototype.getColumnsKey = function () { return 'Master.StaffSubjects'; };
                StaffSubjectsGrid.prototype.getDialogType = function () { return Master.StaffSubjectsDialog; };
                StaffSubjectsGrid.prototype.getIdProperty = function () { return Master.StaffSubjectsRow.idProperty; };
                StaffSubjectsGrid.prototype.getInsertPermission = function () { return Master.StaffSubjectsRow.insertPermission; };
                StaffSubjectsGrid.prototype.getLocalTextPrefix = function () { return Master.StaffSubjectsRow.localTextPrefix; };
                StaffSubjectsGrid.prototype.getService = function () { return Master.StaffSubjectsService.baseUrl; };
                StaffSubjectsGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], StaffSubjectsGrid);
                return StaffSubjectsGrid;
            }(Serenity.EntityGrid));
            Master.StaffSubjectsGrid = StaffSubjectsGrid;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var StudentCurrentCoursesDialog = /** @class */ (function (_super) {
                __extends(StudentCurrentCoursesDialog, _super);
                function StudentCurrentCoursesDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new Master.StudentCurrentCoursesForm(_this.idPrefix);
                    return _this;
                }
                StudentCurrentCoursesDialog.prototype.getFormKey = function () { return Master.StudentCurrentCoursesForm.formKey; };
                StudentCurrentCoursesDialog.prototype.getIdProperty = function () { return Master.StudentCurrentCoursesRow.idProperty; };
                StudentCurrentCoursesDialog.prototype.getLocalTextPrefix = function () { return Master.StudentCurrentCoursesRow.localTextPrefix; };
                StudentCurrentCoursesDialog.prototype.getService = function () { return Master.StudentCurrentCoursesService.baseUrl; };
                StudentCurrentCoursesDialog.prototype.getDeletePermission = function () { return Master.StudentCurrentCoursesRow.deletePermission; };
                StudentCurrentCoursesDialog.prototype.getInsertPermission = function () { return Master.StudentCurrentCoursesRow.insertPermission; };
                StudentCurrentCoursesDialog.prototype.getUpdatePermission = function () { return Master.StudentCurrentCoursesRow.updatePermission; };
                StudentCurrentCoursesDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], StudentCurrentCoursesDialog);
                return StudentCurrentCoursesDialog;
            }(Serenity.EntityDialog));
            Master.StudentCurrentCoursesDialog = StudentCurrentCoursesDialog;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var StudentCurrentCoursesGrid = /** @class */ (function (_super) {
                __extends(StudentCurrentCoursesGrid, _super);
                function StudentCurrentCoursesGrid(container) {
                    return _super.call(this, container) || this;
                }
                StudentCurrentCoursesGrid.prototype.getColumnsKey = function () { return 'Master.StudentCurrentCourses'; };
                StudentCurrentCoursesGrid.prototype.getDialogType = function () { return Master.StudentCurrentCoursesDialog; };
                StudentCurrentCoursesGrid.prototype.getIdProperty = function () { return Master.StudentCurrentCoursesRow.idProperty; };
                StudentCurrentCoursesGrid.prototype.getInsertPermission = function () { return Master.StudentCurrentCoursesRow.insertPermission; };
                StudentCurrentCoursesGrid.prototype.getLocalTextPrefix = function () { return Master.StudentCurrentCoursesRow.localTextPrefix; };
                StudentCurrentCoursesGrid.prototype.getService = function () { return Master.StudentCurrentCoursesService.baseUrl; };
                StudentCurrentCoursesGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], StudentCurrentCoursesGrid);
                return StudentCurrentCoursesGrid;
            }(Serenity.EntityGrid));
            Master.StudentCurrentCoursesGrid = StudentCurrentCoursesGrid;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var GenreListFormatter = /** @class */ (function () {
                function GenreListFormatter() {
                }
                GenreListFormatter.prototype.format = function (ctx) {
                    var idList = ctx.value;
                    if (!idList || !idList.length)
                        return "";
                    var byId = SchoolMate.Transactions.PromotionDetailsRow.getLookup().itemById;
                    return idList.map(function (x) {
                        var g = byId[x];
                        if (!g)
                            return x.toString();
                        return Q.htmlEncode(g.Course);
                    }).join(", ");
                };
                GenreListFormatter = __decorate([
                    Serenity.Decorators.registerFormatter()
                ], GenreListFormatter);
                return GenreListFormatter;
            }());
            Master.GenreListFormatter = GenreListFormatter;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var PromotionFormatter = /** @class */ (function () {
                function PromotionFormatter() {
                }
                PromotionFormatter.prototype.format = function (ctx) {
                    var idList = ctx.value;
                    if (!idList || !idList.length)
                        return "";
                    var byId = SchoolMate.Transactions.PromotionsRow.getLookup().itemById;
                    return idList.map(function (x) {
                        var g = byId[x];
                        if (!g)
                            return x.toString();
                        return Q.htmlEncode(g.ToCourseCourseName);
                    }).join(", ");
                };
                PromotionFormatter = __decorate([
                    Serenity.Decorators.registerFormatter()
                ], PromotionFormatter);
                return PromotionFormatter;
            }());
            Master.PromotionFormatter = PromotionFormatter;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var StudentsDialog = /** @class */ (function (_super) {
                __extends(StudentsDialog, _super);
                function StudentsDialog() {
                    var _this = _super.call(this) || this;
                    _this.form = new Master.StudentsForm(_this.idPrefix);
                    _this.form = new Master.StudentsForm(_this.idPrefix);
                    _this.form.CampusId.changeSelect2(function (e) {
                    });
                    _this.form.TranportationFeeId.changeSelect2(function (e) {
                        var id = Q.toId(_this.form.TranportationFeeId.value);
                        if (id > 0) {
                            Master.CurrentAcadamicYearService.GetCurrentAcadamicYear({}, function (response) {
                                _this.form.FromAcadamicYearId.value = response.Id.toString();
                            });
                        }
                    });
                    return _this;
                }
                StudentsDialog.prototype.getFormKey = function () { return Master.StudentsForm.formKey; };
                StudentsDialog.prototype.getIdProperty = function () { return Master.StudentsRow.idProperty; };
                StudentsDialog.prototype.getLocalTextPrefix = function () { return Master.StudentsRow.localTextPrefix; };
                StudentsDialog.prototype.getNameProperty = function () { return Master.StudentsRow.nameProperty; };
                StudentsDialog.prototype.getService = function () { return Master.StudentsService.baseUrl; };
                StudentsDialog.prototype.getDeletePermission = function () { return Master.StudentsRow.deletePermission; };
                StudentsDialog.prototype.getInsertPermission = function () { return Master.StudentsRow.insertPermission; };
                StudentsDialog.prototype.getUpdatePermission = function () { return Master.StudentsRow.updatePermission; };
                StudentsDialog.prototype.setCode = function () {
                    var _this = this;
                    var id = Q.toId(this.form.CampusId.value);
                    //if (id > 0) {
                    //var campus = Master.CampusesRow.getLookup().itemById[id];
                    SchoolMate.Administration.SystemSettingsService.List({}, function (response) {
                        var val = Q.trimToNull(_this.form.Code.value);
                        if (!val || val.length <= 1) {
                            // if no customer ID yet (new record mode probably) use 'C' as a prefix
                            var prefix = (val || response.Entities[0].StudentCodePrefix);
                            if (prefix == null) {
                                prefix = "";
                            }
                            // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                            Master.StudentsService.GetNextNumber({
                                Prefix: prefix,
                                Length: response.Entities[0].StudentCodeLength // we want service to search for and return serials of 5 in length
                            }, function (response) {
                                _this.form.Code.value = response.Serial;
                                // this is to mark numerical part after prefix
                                _this.form.Code.element[0].setSelectionRange(prefix.length, response.Serial.length);
                            });
                        }
                    });
                };
                StudentsDialog.prototype.updateInterface = function () {
                    // by default cloneButton is hidden in base UpdateInterface method
                    _super.prototype.updateInterface.call(this);
                    // here we show it if it is edit mode (not new)
                    this.cloneButton.toggle(this.isEditMode());
                };
                StudentsDialog.prototype.afterLoadEntity = function () {
                    var _this = this;
                    _super.prototype.afterLoadEntity.call(this);
                    // fill next number in new record mode
                    if (this.isNew()) {
                        Master.StudentsService.GetDefaultCampus({}, function (response) {
                            if (response.Id > 0) {
                                _this.form.CampusId.value = response.Id.toString();
                            }
                        });
                        this.setCode();
                    }
                };
                StudentsDialog.prototype.getNextNumber = function () {
                };
                /**
                 * Overriding this method is optional to customize cloned entity
                 */
                StudentsDialog.prototype.getCloningEntity = function () {
                    var clone = _super.prototype.getCloningEntity.call(this);
                    // add (Clone) suffix if it's not already added
                    var suffix = ' (Clone)';
                    if (!Q.endsWith(clone.StudentName || '', suffix)) {
                        clone.StudentName = (clone.StudentName || '') + suffix;
                    }
                    // it's better to clear image for this sample
                    // otherwise we would have to create a temporary copy of it
                    // and upload
                    clone.IDNO = null;
                    clone.DOB = null;
                    clone.Photo = null;
                    clone.StudentName = null;
                    clone.Code = null;
                    clone.CurrentCourses = null;
                    return clone;
                };
                StudentsDialog = __decorate([
                    Serenity.Decorators.registerClass(),
                    Serenity.Decorators.panel()
                ], StudentsDialog);
                return StudentsDialog;
            }(Serenity.EntityDialog));
            Master.StudentsDialog = StudentsDialog;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var StudentsGrid = /** @class */ (function (_super) {
                __extends(StudentsGrid, _super);
                function StudentsGrid(container) {
                    return _super.call(this, container) || this;
                }
                StudentsGrid.prototype.getColumnsKey = function () { return 'Master.Students'; };
                StudentsGrid.prototype.getDialogType = function () { return Master.StudentsDialog; };
                StudentsGrid.prototype.getIdProperty = function () { return Master.StudentsRow.idProperty; };
                StudentsGrid.prototype.getInsertPermission = function () { return Master.StudentsRow.insertPermission; };
                StudentsGrid.prototype.getLocalTextPrefix = function () { return Master.StudentsRow.localTextPrefix; };
                StudentsGrid.prototype.getService = function () { return Master.StudentsService.baseUrl; };
                StudentsGrid.prototype.getColumns = function () {
                    var columns = _super.prototype.getColumns.call(this);
                    Q.first(columns, function (x) { return x.field == "FatherContactName" /* FatherContactName */; }).format =
                        function (ctx) { return "<a href=\"javascript:;\" class=\"customer-link\">" + Q.htmlEncode(ctx.value) + "</a>"; };
                    Q.first(columns, function (x) { return x.field == "MotherContactName" /* MotherContactName */; }).format =
                        function (ctx) { return "<a href=\"javascript:;\" class=\"customer-link2\">" + Q.htmlEncode(ctx.value) + "</a>"; };
                    Q.first(columns, function (x) { return x.field == "StudentContactName" /* StudentContactName */; }).format =
                        function (ctx) { return "<a href=\"javascript:;\" class=\"customer-link3\">" + Q.htmlEncode(ctx.value) + "</a>"; };
                    return columns;
                };
                StudentsGrid.prototype.onClick = function (e, row, cell) {
                    // let base grid handle clicks for its edit links
                    _super.prototype.onClick.call(this, e, row, cell);
                    // if base grid already handled, we shouldn"t handle it again
                    if (e.isDefaultPrevented()) {
                        return;
                    }
                    // get reference to current item
                    var item = this.itemAt(row);
                    // get reference to clicked element
                    var target = $(e.target);
                    if (target.hasClass("customer-link")) {
                        e.preventDefault();
                        // CustomerDialog doesn't use CustomerID but ID (identity)
                        // so need to find customer to get its actual ID
                        var customer = Q.first(Master.ContactsRow.getLookup().items, function (x) { return x.Id == item.FatherContactId; });
                        new Master.ContactsDialog().loadByIdAndOpenDialog(customer.Id);
                    }
                    if (target.hasClass("customer-link2")) {
                        e.preventDefault();
                        // CustomerDialog doesn't use CustomerID but ID (identity)
                        // so need to find customer to get its actual ID
                        var customer = Q.first(Master.ContactsRow.getLookup().items, function (x) { return x.Id == item.MotherContactId; });
                        new Master.ContactsDialog().loadByIdAndOpenDialog(customer.Id);
                    }
                    if (target.hasClass("customer-link3")) {
                        e.preventDefault();
                        // CustomerDialog doesn't use CustomerID but ID (identity)
                        // so need to find customer to get its actual ID
                        var customer = Q.first(Master.ContactsRow.getLookup().items, function (x) { return x.Id == item.StudentContactId; });
                        new Master.ContactsDialog().loadByIdAndOpenDialog(customer.Id);
                    }
                };
                StudentsGrid.prototype.getQuickFilters = function () {
                    var filters = _super.prototype.getQuickFilters.call(this);
                    filters.push({
                        field: "CurrentCourses" /* CurrentCourses */,
                        type: Serenity.LookupEditor,
                        title: "Course",
                        cssClass: "quick-filter-width-250",
                        options: {
                            lookupKey: "Master.Courses",
                            multiple: true
                        },
                        handler: function (w) {
                            var ss = 0;
                            if (w.value.length > ss) {
                                var k = [];
                                w.value.forEach(function (value) {
                                    k.push(value);
                                });
                                w.request.EqualityFilter["CurrentCourses" /* CurrentCourses */] = k;
                            }
                            else {
                                var k = [];
                                w.request.EqualityFilter["CurrentCourses" /* CurrentCourses */] = k;
                            }
                            //if (
                            //{
                            //    //if (Q.parseInteger(w.value) == InventoryStoreQtyOptions.Available) {
                            //    //}
                            //    //if (Q.parseInteger(w.value) == InventoryStoreQtyOptions.Unavailable) {
                            //    //    w.request.Criteria = Serenity.Criteria.and(w.request.Criteria, [[fld.Qty], '<=', '0']);
                            //    //}
                            //}
                        }
                    });
                    //Q.first(filters, x => x.field == fld.Qty).init = w => {
                    //    (w as Serenity.EnumEditor).value = InventoryStoreQtyOptions.Available.toString();
                    //};
                    return filters;
                };
                //getQuickFilters(): any {
                //    //var filters = super.getQuickFilters();
                //    //filters.push({
                //    //    field: fld.CurrentCourses,
                //    //    type: Serenity.LookupEditor,
                //    //    title: "Course",
                //    //    cssClass: "quick-filter-width-250",
                //    //    options: {
                //    //        lookupKey: "Master.Courses",
                //    //        multiple: true
                //    //    }
                //    //});
                //    //return filters;
                //    //filters.push({
                //    //    field: fld.CurrentCourses,
                //    //    type: Serenity.LookupEditor,
                //    //    options: {
                //    //                  lookupKey: "Master.Courses",
                //    //        multiple: true
                //    //    },
                //    //    handler: w => {
                //    //        (w.value.forEach(function (v) {
                //    //            console.log(v);
                //    //            w.request.Criteria = Serenity.Criteria.and(w.request.Criteria, [[fld.CurrentCourses], '>=', '1']);
                //    //        }));
                //    //    }
                //    //});
                //    //Q.first(filters, x => x.field == fld.Qty).init = w => {
                //    //    (w as Serenity.EnumEditor).value = InventoryStoreQtyOptions.Available.toString();
                //    //};
                //    //return filters;
                //}
                StudentsGrid.prototype.getButtons = function () {
                    var _this = this;
                    var buttons = _super.prototype.getButtons.call(this);
                    buttons.push(SchoolMate.Common.ExcelExportHelper.createToolButton({
                        grid: this,
                        service: Master.StudentsService.baseUrl + '/ListExcel',
                        onViewSubmit: function () { return _this.onViewSubmit(); },
                        separator: true
                    }));
                    buttons.push(SchoolMate.Common.PdfExportHelper.createToolButton({
                        grid: this,
                        onViewSubmit: function () { return _this.onViewSubmit(); }
                    }));
                    return buttons;
                };
                StudentsGrid = __decorate([
                    Serenity.Decorators.registerClass(),
                    Serenity.Decorators.filterable()
                ], StudentsGrid);
                return StudentsGrid;
            }(Serenity.EntityGrid));
            Master.StudentsGrid = StudentsGrid;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var SubjectsDialog = /** @class */ (function (_super) {
                __extends(SubjectsDialog, _super);
                function SubjectsDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new Master.SubjectsForm(_this.idPrefix);
                    return _this;
                }
                SubjectsDialog.prototype.getFormKey = function () { return Master.SubjectsForm.formKey; };
                SubjectsDialog.prototype.getIdProperty = function () { return Master.SubjectsRow.idProperty; };
                SubjectsDialog.prototype.getLocalTextPrefix = function () { return Master.SubjectsRow.localTextPrefix; };
                SubjectsDialog.prototype.getNameProperty = function () { return Master.SubjectsRow.nameProperty; };
                SubjectsDialog.prototype.getService = function () { return Master.SubjectsService.baseUrl; };
                SubjectsDialog.prototype.getDeletePermission = function () { return Master.SubjectsRow.deletePermission; };
                SubjectsDialog.prototype.getInsertPermission = function () { return Master.SubjectsRow.insertPermission; };
                SubjectsDialog.prototype.getUpdatePermission = function () { return Master.SubjectsRow.updatePermission; };
                SubjectsDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], SubjectsDialog);
                return SubjectsDialog;
            }(Serenity.EntityDialog));
            Master.SubjectsDialog = SubjectsDialog;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Master;
        (function (Master) {
            var SubjectsGrid = /** @class */ (function (_super) {
                __extends(SubjectsGrid, _super);
                function SubjectsGrid(container) {
                    return _super.call(this, container) || this;
                }
                SubjectsGrid.prototype.getColumnsKey = function () { return 'Master.Subjects'; };
                SubjectsGrid.prototype.getDialogType = function () { return Master.SubjectsDialog; };
                SubjectsGrid.prototype.getIdProperty = function () { return Master.SubjectsRow.idProperty; };
                SubjectsGrid.prototype.getInsertPermission = function () { return Master.SubjectsRow.insertPermission; };
                SubjectsGrid.prototype.getLocalTextPrefix = function () { return Master.SubjectsRow.localTextPrefix; };
                SubjectsGrid.prototype.getService = function () { return Master.SubjectsService.baseUrl; };
                SubjectsGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], SubjectsGrid);
                return SubjectsGrid;
            }(Serenity.EntityGrid));
            Master.SubjectsGrid = SubjectsGrid;
        })(Master = SchoolMate.Master || (SchoolMate.Master = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var AdmissionDialog = /** @class */ (function (_super) {
                __extends(AdmissionDialog, _super);
                function AdmissionDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new Transactions.AdmissionForm(_this.idPrefix);
                    return _this;
                }
                AdmissionDialog.prototype.getFormKey = function () { return Transactions.AdmissionForm.formKey; };
                AdmissionDialog.prototype.getIdProperty = function () { return Transactions.AdmissionRow.idProperty; };
                AdmissionDialog.prototype.getLocalTextPrefix = function () { return Transactions.AdmissionRow.localTextPrefix; };
                AdmissionDialog.prototype.getService = function () { return Transactions.AdmissionService.baseUrl; };
                AdmissionDialog.prototype.getDeletePermission = function () { return Transactions.AdmissionRow.deletePermission; };
                AdmissionDialog.prototype.getInsertPermission = function () { return Transactions.AdmissionRow.insertPermission; };
                AdmissionDialog.prototype.getUpdatePermission = function () { return Transactions.AdmissionRow.updatePermission; };
                AdmissionDialog.prototype.updateInterface = function () {
                    var _this = this;
                    _super.prototype.updateInterface.call(this);
                    if (!this.isEditMode()) {
                        SchoolMate.Master.CurrentAcadamicYearService.GetCurrentAcadamicYear({}, function (response) {
                            _this.form.AcadamicYearId.value = response.Id.toString();
                        });
                    }
                };
                AdmissionDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], AdmissionDialog);
                return AdmissionDialog;
            }(Serenity.EntityDialog));
            Transactions.AdmissionDialog = AdmissionDialog;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var AdmissionGrid = /** @class */ (function (_super) {
                __extends(AdmissionGrid, _super);
                function AdmissionGrid(container) {
                    return _super.call(this, container) || this;
                }
                AdmissionGrid.prototype.getColumnsKey = function () { return 'Transactions.Admission'; };
                AdmissionGrid.prototype.getDialogType = function () { return Transactions.AdmissionDialog; };
                AdmissionGrid.prototype.getIdProperty = function () { return Transactions.AdmissionRow.idProperty; };
                AdmissionGrid.prototype.getInsertPermission = function () { return Transactions.AdmissionRow.insertPermission; };
                AdmissionGrid.prototype.getLocalTextPrefix = function () { return Transactions.AdmissionRow.localTextPrefix; };
                AdmissionGrid.prototype.getService = function () { return Transactions.AdmissionService.baseUrl; };
                AdmissionGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], AdmissionGrid);
                return AdmissionGrid;
            }(Serenity.EntityGrid));
            Transactions.AdmissionGrid = AdmissionGrid;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var AttandanceDialog = /** @class */ (function (_super) {
                __extends(AttandanceDialog, _super);
                function AttandanceDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new Transactions.AttandanceForm(_this.idPrefix);
                    return _this;
                }
                AttandanceDialog.prototype.getFormKey = function () { return Transactions.AttandanceForm.formKey; };
                AttandanceDialog.prototype.getIdProperty = function () { return Transactions.AttandanceRow.idProperty; };
                AttandanceDialog.prototype.getLocalTextPrefix = function () { return Transactions.AttandanceRow.localTextPrefix; };
                AttandanceDialog.prototype.getNameProperty = function () { return Transactions.AttandanceRow.nameProperty; };
                AttandanceDialog.prototype.getService = function () { return Transactions.AttandanceService.baseUrl; };
                AttandanceDialog.prototype.getDeletePermission = function () { return Transactions.AttandanceRow.deletePermission; };
                AttandanceDialog.prototype.getInsertPermission = function () { return Transactions.AttandanceRow.insertPermission; };
                AttandanceDialog.prototype.getUpdatePermission = function () { return Transactions.AttandanceRow.updatePermission; };
                AttandanceDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], AttandanceDialog);
                return AttandanceDialog;
            }(Serenity.EntityDialog));
            Transactions.AttandanceDialog = AttandanceDialog;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var AttandanceGrid = /** @class */ (function (_super) {
                __extends(AttandanceGrid, _super);
                function AttandanceGrid(container) {
                    return _super.call(this, container) || this;
                }
                AttandanceGrid.prototype.getColumnsKey = function () { return 'Transactions.Attandance'; };
                AttandanceGrid.prototype.getDialogType = function () { return Transactions.AttandanceDialog; };
                AttandanceGrid.prototype.getIdProperty = function () { return Transactions.AttandanceRow.idProperty; };
                AttandanceGrid.prototype.getInsertPermission = function () { return Transactions.AttandanceRow.insertPermission; };
                AttandanceGrid.prototype.getLocalTextPrefix = function () { return Transactions.AttandanceRow.localTextPrefix; };
                AttandanceGrid.prototype.getService = function () { return Transactions.AttandanceService.baseUrl; };
                AttandanceGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], AttandanceGrid);
                return AttandanceGrid;
            }(Serenity.EntityGrid));
            Transactions.AttandanceGrid = AttandanceGrid;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var AttendanceEdit = /** @class */ (function (_super) {
            __extends(AttendanceEdit, _super);
            function AttendanceEdit() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AttendanceEdit.initializePage = function () {
                $(function () {
                    $("#cboSelect").prop("selectedIndex", -1);
                    $('#btnAddtoList').click(function (e) {
                        var myTableDiv = document.getElementById("pardiv");
                        $('#pardiv').empty();
                        //var table = document.createElement('TABLE');
                        ////table.border = '1';
                        //table.className = "w3-red"
                        //var tablehead = document.createElement('THEAD');
                        //var tr1 = document.createElement('TR');
                        //tr1.className = "w3-red"
                        //var th1 = document.createElement('TH');
                        //th1.innerHTML = "Teacher Name";
                        //th1.style.width = "600spx";
                        //tr1.appendChild(th1);
                        //var th2 = document.createElement('TH');
                        //th2.innerHTML = "Status";
                        //tr1.appendChild(th2);
                        //tablehead.appendChild(tr1);
                        //table.appendChild(tablehead);
                        //var tableBody = document.createElement('TBODY');
                        //table.appendChild(tableBody);
                        //tableBody.className = "wsd";
                        //for (var i = 0; i < 3; i++) {
                        //    var tr = document.createElement('TR');
                        //    tableBody.appendChild(tr);
                        //    for (var j = 0; j < 4; j++) {
                        //        var td = document.createElement('TD');
                        //       // td.width = '75';
                        //        td.appendChild(document.createTextNode("Cell " + i + "," + j));
                        //        tr.appendChild(td);
                        //    }
                        //}
                        //myTableDiv.appendChild(table);
                        var criteria;
                        var id = $("#cboSelect option:selected").val();
                        var date = new Date($('#loaddate').val());
                        var courseid = $("#cboSelectcourse option:selected").val();
                        var diviid = $("#cboSelectdivision option:selected").val();
                        SchoolMate.Transactions.AttandanceService.GetAttendanceList({
                            date: date.toDateString(),
                            type: id,
                            courseid: courseid,
                            divid: diviid
                        }, function (response) {
                            var markdiv = $('<div class="row" style="padding:5px"><div class="col-md-10"><select id="cbmarkall" class="form-control select2" style="width: 100%;"><option value="1">Absente</option><option value="2">Present</option><option value="3">holiday</option></select></div><div class="col-md-2" id="buttondiv"></div></div>');
                            $('#pardiv').append(markdiv);
                            var button = document.createElement('button');
                            button.innerText = "Mark All";
                            button.className = "btn btn-primary";
                            button.onclick = function () {
                                SchoolMate.Transactions.AttandanceService.UpdateAttendanceList({
                                    date: response.Entities,
                                    status: $("#cbmarkall option:selected").val()
                                }, function (response) {
                                    if (response == true) {
                                        Q.notifySuccess("Updated Successfully");
                                        document.getElementById('btnAddtoList').click();
                                    }
                                });
                            };
                            document.getElementById("buttondiv").appendChild(button);
                            if (id == 1) {
                                var m = "";
                                response.Entities.forEach(function (value) {
                                    var str1 = "";
                                    var str2 = "";
                                    var str3 = "";
                                    if (value.Status == 1) {
                                        str1 = "selected";
                                    }
                                    else {
                                        if (value.Status == 2) {
                                            str2 = "selected";
                                        }
                                        else {
                                            str3 = "selected";
                                        }
                                    }
                                    var z = "<select id='cboSelect' class='form-control select2' style='width:100%;' onchange='getval(" + value.Id + ",this)'><option value='1' " + str1 + ">Absente</option><option value='2' " + str2 + ">Present</option><option value='3' " + str3 + ">holiday</option></select>";
                                    m = m + "<tr><td>" + value.StaffCode + "</td><td>" + z + "</td></tr>";
                                });
                                var newDivhol = $('<table class="w3-table-all"><thead><tr><th>Student Name</th><th>Status</th></tr></thead>' + m + '</table>');
                                $('#pardiv').append(newDivhol);
                            }
                            else {
                                if (id == 2) {
                                    var m = "";
                                    response.Entities.forEach(function (value) {
                                        var str1 = "";
                                        var str2 = "";
                                        var str3 = "";
                                        if (value.Status == 1) {
                                            str1 = "selected";
                                        }
                                        else {
                                            if (value.Status == 2) {
                                                str2 = "selected";
                                            }
                                            else {
                                                str3 = "selected";
                                            }
                                        }
                                        var z = "<select id='cboSelect' class='form-control select2' style='width:100%;' onchange='getval(" + value.Id + ",this)'><option value='1' " + str1 + ">Absente</option><option value='2' " + str2 + ">Present</option><option value='3' " + str3 + ">holiday</option></select>";
                                        m = m + "<tr><td>" + value.StaffStaffName + " (" + value.StaffCode + ")</td><td>" + z + "</td></tr>";
                                    });
                                    var newDivhol = $('<table class="w3-table-all"><thead><tr><th>Teacher Name</th><th>Status</th></tr></thead>' + m + '</table>');
                                    $('#pardiv').append(newDivhol);
                                }
                                else {
                                    if (id == 3) {
                                        var m = "";
                                        response.Entities.forEach(function (value) {
                                            var str1 = "";
                                            var str2 = "";
                                            var str3 = "";
                                            if (value.Status == 1) {
                                                str1 = "selected";
                                            }
                                            else {
                                                if (value.Status == 2) {
                                                    str2 = "selected";
                                                }
                                                else {
                                                    str3 = "selected";
                                                }
                                            }
                                            var z = "<select id='cboSelect' class='form-control select2' style='width:100%;' onchange='getval(" + value.Id + ",this)'><option value='1' " + str1 + ">Absente</option><option value='2' " + str2 + ">Present</option><option value='3' " + str3 + ">holiday</option></select>";
                                            alert(value.StaffStaffName);
                                            m = m + "<tr><td>" + value.StaffStaffName + " (" + value.StaffCode + ")</td><td>" + z + "</td></tr>";
                                        });
                                        var newDivhol = $('<table class="w3-table-all"><thead><tr ><th>Staff Name</th><th>Status</th></tr></thead>' + m + '</table>');
                                        $('#pardiv').append(newDivhol);
                                    }
                                }
                            }
                        });
                    });
                    $('#cboSelect').change(function (e) {
                        var a = "";
                        if (this.value == 1) {
                            SchoolMate.Transactions.AttandanceService.GetPromotionCurrentAcadamicYear({}, function (response) {
                                response.forEach(function (value) {
                                    a = a + "<option value='" + value.promotionid + "'>" + value.CousrseName + "</option>";
                                });
                                var newDivhol = $('<div id="comboco"><label>Course</label><select id="cboSelectcourse" class="form-control select2" style="width:100%;"  onchange="getdat(this)">' + a + '</select></div>');
                                $('#combo').append(newDivhol);
                                $("#cboSelectcourse").prop("selectedIndex", -1);
                            });
                        }
                        else {
                            var l = document.getElementById("comboco");
                            if (l != null) {
                                l.remove();
                            }
                            var l2 = document.getElementById("comboco2");
                            if (l2 != null) {
                                l2.remove();
                            }
                        }
                    });
                });
            };
            AttendanceEdit.getdat = function (val) {
                var l = document.getElementById("comboco2");
                if (l != null) {
                    l.remove();
                }
                var a = "";
                var criteria;
                SchoolMate.Common.CommonService.DivisionsList({
                    promotionid: val.value
                }, function (response) {
                    response.Entities.forEach(function (value) {
                        a = a + "<option value='" + value.Id + "'>" + value.DivisionCode + "</option>";
                    });
                    var newDivhol = $('<div id="comboco2"><label>Division</label><select id="cboSelectdivision" class="form-control select2" style="width:100%;" >' + a + '</select></div>');
                    $('#combo').append(newDivhol);
                    $("#cboSelectdivision").prop("selectedIndex", -1);
                });
            };
            AttendanceEdit.UpdateAll = function (list) {
                alert("sdc");
            };
            AttendanceEdit.prototype.onDialogOpen = function () {
                _super.prototype.onDialogOpen.call(this);
                //BasicSamplesService.OrdersByShipper({}, response => {
                //    this.areaChart = new Morris.Area({
                //        element: this.idPrefix + 'Chart',
                //        resize: true, parseTime: false,
                //        data: response.Values,
                //        xkey: 'Month',
                //        ykeys: response.ShipperKeys, labels: response.ShipperLabels, hideHover: 'auto'
                //    });
                //});
            };
            AttendanceEdit.prototype.arrange = function () {
                _super.prototype.arrange.call(this);
                this.areaChart && this.areaChart.redraw();
            };
            AttendanceEdit.prototype.getTemplate = function () {
                // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
                return "<div id='~_Chart'></div>";
            };
            AttendanceEdit.prototype.getDialogOptions = function () {
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.title = 'Orders by Shipper';
                return opt;
            };
            AttendanceEdit = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.resizable(),
                Serenity.Decorators.maximizable()
            ], AttendanceEdit);
            return AttendanceEdit;
        }(Serenity.TemplatedDialog));
        SchoolMate.AttendanceEdit = AttendanceEdit;
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var CourseExitDialog = /** @class */ (function (_super) {
                __extends(CourseExitDialog, _super);
                function CourseExitDialog() {
                    var _this = _super.call(this) || this;
                    _this.form = new Transactions.CourseExitForm(_this.idPrefix);
                    _this.form = new Transactions.CourseExitForm(_this.idPrefix);
                    _this.form.PromotionId.change(function (e) {
                        _this.form.Students.promotionid = Q.toId(_this.form.PromotionId.value);
                    });
                    return _this;
                }
                CourseExitDialog.prototype.getFormKey = function () { return Transactions.CourseExitForm.formKey; };
                CourseExitDialog.prototype.getIdProperty = function () { return Transactions.CourseExitRow.idProperty; };
                CourseExitDialog.prototype.getLocalTextPrefix = function () { return Transactions.CourseExitRow.localTextPrefix; };
                CourseExitDialog.prototype.getService = function () { return Transactions.CourseExitService.baseUrl; };
                CourseExitDialog.prototype.getDeletePermission = function () { return Transactions.CourseExitRow.deletePermission; };
                CourseExitDialog.prototype.getInsertPermission = function () { return Transactions.CourseExitRow.insertPermission; };
                CourseExitDialog.prototype.getUpdatePermission = function () { return Transactions.CourseExitRow.updatePermission; };
                CourseExitDialog.prototype.updateInterface = function () {
                    var _this = this;
                    _super.prototype.updateInterface.call(this);
                    if (!this.isEditMode()) {
                        SchoolMate.Master.CurrentAcadamicYearService.GetCurrentAcadamicYear({}, function (response) {
                            _this.form.AcadamicYearId.value = response.Id.toString();
                        });
                    }
                };
                CourseExitDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], CourseExitDialog);
                return CourseExitDialog;
            }(Serenity.EntityDialog));
            Transactions.CourseExitDialog = CourseExitDialog;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var CourseExitGrid = /** @class */ (function (_super) {
                __extends(CourseExitGrid, _super);
                function CourseExitGrid(container) {
                    return _super.call(this, container) || this;
                }
                CourseExitGrid.prototype.getColumnsKey = function () { return 'Transactions.CourseExit'; };
                CourseExitGrid.prototype.getDialogType = function () { return Transactions.CourseExitDialog; };
                CourseExitGrid.prototype.getIdProperty = function () { return Transactions.CourseExitRow.idProperty; };
                CourseExitGrid.prototype.getInsertPermission = function () { return Transactions.CourseExitRow.insertPermission; };
                CourseExitGrid.prototype.getLocalTextPrefix = function () { return Transactions.CourseExitRow.localTextPrefix; };
                CourseExitGrid.prototype.getService = function () { return Transactions.CourseExitService.baseUrl; };
                CourseExitGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], CourseExitGrid);
                return CourseExitGrid;
            }(Serenity.EntityGrid));
            Transactions.CourseExitGrid = CourseExitGrid;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var CourseExitDetailsDialog = /** @class */ (function (_super) {
                __extends(CourseExitDetailsDialog, _super);
                function CourseExitDetailsDialog() {
                    var _this = _super.call(this) || this;
                    _this.form = new Transactions.CourseExitDetailsForm(_this.idPrefix);
                    // we can set cascade field in constructor
                    // we could also use FilterField but in this case, when CategoryID is null
                    // lookup editor would show all products in any category
                    //this.form.PromotionDetailId.cascadeField = Northwind.ProductRow.Fields.CategoryID;
                    _this.form.PromotionDetailId.cascadeField = "PromotionId" /* PromotionId */;
                    return _this;
                    //if (this.form.PromotionDetailId.value !="") {
                    //        this.form.PromotionDetailId.readOnly = true;
                    //    }
                    //    else {
                    //        this.form.PromotionDetailId.filterField = "IsCompleted";
                    //        this.form.PromotionDetailId.filterValue = false;
                    //    }
                }
                CourseExitDetailsDialog.prototype.getFormKey = function () { return Transactions.CourseExitDetailsForm.formKey; };
                // protected getIdProperty() { return CourseExitDetailsRow.idProperty; }
                CourseExitDetailsDialog.prototype.getLocalTextPrefix = function () { return Transactions.CourseExitDetailsRow.localTextPrefix; };
                // but CategoryID value is not yet available here as detail editor will set it 
                // after calling constructor (creating a detail dialog) so we'll use BeforeLoadEntity
                CourseExitDetailsDialog.prototype.afterLoadEntity = function () {
                    _super.prototype.afterLoadEntity.call(this);
                    if (this.form.PromotionDetailId.value != "") {
                        this.form.PromotionDetailId.readOnly = true;
                    }
                    else {
                        this.form.PromotionDetailId.filterField = "IsCompleted";
                        this.form.PromotionDetailId.filterValue = false;
                    }
                    // setting cascade value here
                    // make sure you have [LookupInclude] on CategoryID property of ProductRow
                    // otherwise this field won't be available in lookup script (will always be null),
                    // so can't be filtered and you'll end up with an empty product list.
                };
                CourseExitDetailsDialog.prototype.beforeLoadEntity = function (entity) {
                    _super.prototype.beforeLoadEntity.call(this, entity);
                    // setting cascade value here
                    // make sure you have [LookupInclude] on CategoryID property of ProductRow
                    // otherwise this field won't be available in lookup script (will always be null),
                    // so can't be filtered and you'll end up with an empty product list.
                    this.form.PromotionDetailId.cascadeValue = this.promotionid;
                };
                CourseExitDetailsDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], CourseExitDetailsDialog);
                return CourseExitDetailsDialog;
            }(SchoolMate.Common.GridEditorDialog));
            Transactions.CourseExitDetailsDialog = CourseExitDetailsDialog;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var CourseExitDetailsGrid = /** @class */ (function (_super) {
                __extends(CourseExitDetailsGrid, _super);
                function CourseExitDetailsGrid(container) {
                    return _super.call(this, container) || this;
                }
                CourseExitDetailsGrid.prototype.getColumnsKey = function () { return 'Transactions.CourseExitDetails'; };
                CourseExitDetailsGrid.prototype.getDialogType = function () { return Transactions.CourseExitDetailsDialog; };
                CourseExitDetailsGrid.prototype.getIdProperty = function () { return Transactions.CourseExitDetailsRow.idProperty; };
                CourseExitDetailsGrid.prototype.getInsertPermission = function () { return Transactions.CourseExitDetailsRow.insertPermission; };
                CourseExitDetailsGrid.prototype.getLocalTextPrefix = function () { return Transactions.CourseExitDetailsRow.localTextPrefix; };
                CourseExitDetailsGrid.prototype.getService = function () { return Transactions.CourseExitDetailsService.baseUrl; };
                CourseExitDetailsGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], CourseExitDetailsGrid);
                return CourseExitDetailsGrid;
            }(Serenity.EntityGrid));
            Transactions.CourseExitDetailsGrid = CourseExitDetailsGrid;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var CourseExitEditor = /** @class */ (function (_super) {
                __extends(CourseExitEditor, _super);
                function CourseExitEditor(container) {
                    return _super.call(this, container) || this;
                }
                CourseExitEditor.prototype.getColumnsKey = function () { return "Transactions.CourseExitDetails"; };
                CourseExitEditor.prototype.getDialogType = function () { return Transactions.CourseExitDetailsDialog; };
                CourseExitEditor.prototype.getLocalTextPrefix = function () { return Transactions.CourseExitDetailsRow.localTextPrefix; };
                CourseExitEditor.prototype.validateEntity = function (row, id) {
                    //var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductID === row.ProductID);
                    //if (sameProduct && this.id(sameProduct) !== id) {
                    //    Q.alert('This product is already in order details!');
                    //    return false;
                    //}
                    row.Student = Transactions.PromotionDetailsRow.getLookup().itemById[row.PromotionDetailId].StudentName;
                    //row.DriverDriverName = FleetManagement.Parameters.DriverInfoRow.getLookup().itemById[row.DriverId].DriverName;
                    //row.DailyDetailTrxDate = DailyDetailsRow.getLookup().itemById[row.DailyDetailId].TrxDate;
                    //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
                    return true;
                };
                CourseExitEditor.prototype.initEntityDialog = function (itemType, dialog) {
                    _super.prototype.initEntityDialog.call(this, itemType, dialog);
                    // passing category ID from grid editor to detail dialog
                    dialog.promotionid = this.promotionid;
                };
                CourseExitEditor = __decorate([
                    Serenity.Decorators.registerClass()
                ], CourseExitEditor);
                return CourseExitEditor;
            }(SchoolMate.Common.GridEditorBase));
            Transactions.CourseExitEditor = CourseExitEditor;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var FeeAllocationDialog = /** @class */ (function (_super) {
                __extends(FeeAllocationDialog, _super);
                function FeeAllocationDialog() {
                    var _this = _super.call(this) || this;
                    _this.form = new Transactions.FeeAllocationForm(_this.idPrefix);
                    _this.form.Collected.change(function (e) {
                        _this.form.Balance.value = _this.entity.Balance - _this.form.Collected.value;
                    });
                    return _this;
                }
                FeeAllocationDialog.prototype.getFormKey = function () { return Transactions.FeeAllocationForm.formKey; };
                //protected getIdProperty() { return FeeAllocationRow.idProperty; }
                FeeAllocationDialog.prototype.getLocalTextPrefix = function () { return Transactions.FeeAllocationRow.localTextPrefix; };
                FeeAllocationDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], FeeAllocationDialog);
                return FeeAllocationDialog;
            }(SchoolMate.Common.GridEditorDialog));
            Transactions.FeeAllocationDialog = FeeAllocationDialog;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var FeeAllocationEditor = /** @class */ (function (_super) {
                __extends(FeeAllocationEditor, _super);
                function FeeAllocationEditor(container) {
                    return _super.call(this, container) || this;
                }
                FeeAllocationEditor.prototype.getColumnsKey = function () { return "Transactions.FeeAllocation"; };
                FeeAllocationEditor.prototype.getDialogType = function () { return Transactions.FeeAllocationDialog; };
                FeeAllocationEditor.prototype.getLocalTextPrefix = function () { return Transactions.FeeAllocationRow.localTextPrefix; };
                FeeAllocationEditor.prototype.validateEntity = function (row, id) {
                    //var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductID === row.ProductID);
                    //if (sameProduct && this.id(sameProduct) !== id) {
                    //    Q.alert('This product is already in order details!');
                    //    return false;
                    //}
                    //row.SubjectSubjectName = Master.SubjectsRow.getLookup().itemById[row.SubjectId].SubjectName;
                    //row.DriverDriverName = FleetManagement.Parameters.DriverInfoRow.getLookup().itemById[row.DriverId].DriverName;
                    //row.DailyDetailTrxDate = DailyDetailsRow.getLookup().itemById[row.DailyDetailId].TrxDate;
                    //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
                    return true;
                };
                FeeAllocationEditor = __decorate([
                    Serenity.Decorators.registerClass()
                ], FeeAllocationEditor);
                return FeeAllocationEditor;
            }(SchoolMate.Common.GridEditorBase));
            Transactions.FeeAllocationEditor = FeeAllocationEditor;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var FeeAllocationGrid = /** @class */ (function (_super) {
                __extends(FeeAllocationGrid, _super);
                function FeeAllocationGrid(container) {
                    return _super.call(this, container) || this;
                }
                FeeAllocationGrid.prototype.getColumnsKey = function () { return 'Transactions.FeeAllocation'; };
                FeeAllocationGrid.prototype.getDialogType = function () { return Transactions.FeeAllocationDialog; };
                FeeAllocationGrid.prototype.getIdProperty = function () { return Transactions.FeeAllocationRow.idProperty; };
                FeeAllocationGrid.prototype.getInsertPermission = function () { return Transactions.FeeAllocationRow.insertPermission; };
                FeeAllocationGrid.prototype.getLocalTextPrefix = function () { return Transactions.FeeAllocationRow.localTextPrefix; };
                FeeAllocationGrid.prototype.getService = function () { return Transactions.FeeAllocationService.baseUrl; };
                FeeAllocationGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], FeeAllocationGrid);
                return FeeAllocationGrid;
            }(Serenity.EntityGrid));
            Transactions.FeeAllocationGrid = FeeAllocationGrid;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var FeeStructureLookupEditor = /** @class */ (function (_super) {
            __extends(FeeStructureLookupEditor, _super);
            function FeeStructureLookupEditor(container, opt) {
                return _super.call(this, container, opt) || this;
            }
            FeeStructureLookupEditor.prototype.getLookupKey = function () {
                return this.buildLookupKey(this.myId);
            };
            FeeStructureLookupEditor.prototype.getItems = function (lookup) {
                // var customLookup = Q.getLookup(this.buildLookupKey(this.myId));
                var items = []; // super.getItems(customLookup);
                //if (this.studentcourse != null) {
                //    items.forEach((item, index) => {
                //        var z=this.studentcourse.some(person => person.CourseId === item.Id)
                //        if (z != true)
                //           items.slice(index, 1)
                //    });
                //}
                if (this.feestuctureid > 0) {
                    var kd = { Id: this.feestuctureid, FeeTermTermName: this.stucturename };
                    items.push(kd);
                    return items;
                }
                else {
                    if (this.feestructures != null) {
                        for (var i = 0; i < this.feestructures.length; i++) {
                            var k = { Id: this.feestructures[i].FeeStructureId, FeeTermTermName: this.feestructures[i].TermName };
                            items.push(k);
                        }
                    }
                }
                // this is demo about filtering lookup items
                // only take item that has Id % 5 = 0 (5, 10, 15, 20...)
                //items = items.filter(x => Q.toId(x.Id) % 5 == 0); // here 'Id' field is hardcode for demo
                // just take maximum first 5 items
                if (this.myId == null || this.myId.toString() == "") {
                    items = [];
                }
                return items;
            };
            FeeStructureLookupEditor.prototype.buildLookupKey = function (id) {
                //demo switch lookup key by id
                return "Master.FeeStructure";
            };
            FeeStructureLookupEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], FeeStructureLookupEditor);
            return FeeStructureLookupEditor;
        }(Serenity.LookupEditorBase));
        SchoolMate.FeeStructureLookupEditor = FeeStructureLookupEditor;
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var FeeAllocationTranportationDialog = /** @class */ (function (_super) {
                __extends(FeeAllocationTranportationDialog, _super);
                function FeeAllocationTranportationDialog() {
                    var _this = _super.call(this) || this;
                    _this.form = new Transactions.FeeAllocationTranportationForm(_this.idPrefix);
                    _this.form.Collected.change(function (e) {
                        _this.form.Balance.value = _this.entity.Balance - _this.form.Collected.value;
                    });
                    return _this;
                }
                FeeAllocationTranportationDialog.prototype.getFormKey = function () { return Transactions.FeeAllocationTranportationForm.formKey; };
                //protected getIdProperty() { return FeeAllocationTranportationRow.idProperty; }
                FeeAllocationTranportationDialog.prototype.getLocalTextPrefix = function () { return Transactions.FeeAllocationTranportationRow.localTextPrefix; };
                FeeAllocationTranportationDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], FeeAllocationTranportationDialog);
                return FeeAllocationTranportationDialog;
            }(SchoolMate.Common.GridEditorDialog));
            Transactions.FeeAllocationTranportationDialog = FeeAllocationTranportationDialog;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var FeeAllocationTranportationEditor = /** @class */ (function (_super) {
                __extends(FeeAllocationTranportationEditor, _super);
                function FeeAllocationTranportationEditor(container) {
                    return _super.call(this, container) || this;
                }
                FeeAllocationTranportationEditor.prototype.getColumnsKey = function () { return "Transactions.FeeAllocationTranportation"; };
                FeeAllocationTranportationEditor.prototype.getDialogType = function () { return Transactions.FeeAllocationTranportationDialog; };
                FeeAllocationTranportationEditor.prototype.getLocalTextPrefix = function () { return Transactions.FeeAllocationTranportationRow.localTextPrefix; };
                FeeAllocationTranportationEditor.prototype.validateEntity = function (row, id) {
                    //var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductID === row.ProductID);
                    //if (sameProduct && this.id(sameProduct) !== id) {
                    //    Q.alert('This product is already in order details!');
                    //    return false;
                    //}
                    //row.SubjectSubjectName = Master.SubjectsRow.getLookup().itemById[row.SubjectId].SubjectName;
                    //row.DriverDriverName = FleetManagement.Parameters.DriverInfoRow.getLookup().itemById[row.DriverId].DriverName;
                    //row.DailyDetailTrxDate = DailyDetailsRow.getLookup().itemById[row.DailyDetailId].TrxDate;
                    //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
                    return true;
                };
                FeeAllocationTranportationEditor = __decorate([
                    Serenity.Decorators.registerClass()
                ], FeeAllocationTranportationEditor);
                return FeeAllocationTranportationEditor;
            }(SchoolMate.Common.GridEditorBase));
            Transactions.FeeAllocationTranportationEditor = FeeAllocationTranportationEditor;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var FeeAllocationTranportationGrid = /** @class */ (function (_super) {
                __extends(FeeAllocationTranportationGrid, _super);
                function FeeAllocationTranportationGrid(container) {
                    return _super.call(this, container) || this;
                }
                FeeAllocationTranportationGrid.prototype.getColumnsKey = function () { return 'Transactions.FeeAllocationTranportation'; };
                FeeAllocationTranportationGrid.prototype.getDialogType = function () { return Transactions.FeeAllocationTranportationDialog; };
                FeeAllocationTranportationGrid.prototype.getIdProperty = function () { return Transactions.FeeAllocationTranportationRow.idProperty; };
                FeeAllocationTranportationGrid.prototype.getInsertPermission = function () { return Transactions.FeeAllocationTranportationRow.insertPermission; };
                FeeAllocationTranportationGrid.prototype.getLocalTextPrefix = function () { return Transactions.FeeAllocationTranportationRow.localTextPrefix; };
                FeeAllocationTranportationGrid.prototype.getService = function () { return Transactions.FeeAllocationTranportationService.baseUrl; };
                FeeAllocationTranportationGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], FeeAllocationTranportationGrid);
                return FeeAllocationTranportationGrid;
            }(Serenity.EntityGrid));
            Transactions.FeeAllocationTranportationGrid = FeeAllocationTranportationGrid;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var FeeCollectionDialog = /** @class */ (function (_super) {
                __extends(FeeCollectionDialog, _super);
                function FeeCollectionDialog() {
                    var _this = _super.call(this) || this;
                    _this.form = new Transactions.FeeCollectionForm(_this.idPrefix);
                    // this.form = new FeeCollectionForm(this.idPrefix);
                    //(this.form.FeeAllocations.view as any).onDataChanged.subscribe(() => {
                    //    var total = 0;
                    //    for (var k of this.form.FeeAllocations.getItems()) {
                    //        total += k.Collected || 0;
                    //    }
                    //    this.form.TotalAmount.value = total;
                    //}
                    //);
                    _this.form.FeeAllocations.element.on('DOMNodeInserted DOMNodeRemoved', function () {
                        var total = 0;
                        for (var _i = 0, _a = _this.form.FeeAllocations.getItems(); _i < _a.length; _i++) {
                            var k = _a[_i];
                            total += k.Collected || 0;
                        }
                        for (var _b = 0, _c = _this.form.TranportationFee.getItems(); _b < _c.length; _b++) {
                            var m = _c[_b];
                            total += m.Collected || 0;
                        }
                        _this.form.TotalAmount.value = total;
                    });
                    _this.form.TranportationFee.view.onDataChanged.subscribe(function () {
                        var total = 0;
                        for (var _i = 0, _a = _this.form.FeeAllocations.getItems(); _i < _a.length; _i++) {
                            var k = _a[_i];
                            total += k.Collected || 0;
                        }
                        for (var _b = 0, _c = _this.form.TranportationFee.getItems(); _b < _c.length; _b++) {
                            var m = _c[_b];
                            total += m.Collected || 0;
                        }
                        _this.form.TotalAmount.value = total;
                    });
                    //this.form.StudentId.changeSelect2(e => {
                    //    let currentValue = Serenity.EditorUtils.getValue(this.form.StudentId);
                    //    //let currentText = Serenity.EnumFormatter.format(MyEnum, Q.toId(currentValue));
                    //    //Q.notifySuccess(`You selected ${currentText}, lookup items will be reloaded`);
                    //    // clear old value
                    //   // this.form.FeeAllocations.studentid = Q.toId(this.form.StudentId.value);
                    //    this.form.CourseId.value = null;
                    //    // pass value into lookup editor and update items
                    //    this.form.CourseId.myId = currentValue;
                    //    Transactions.FeeCollectionService.StudentCurrentPromotions({
                    //        StudentId: currentValue
                    //    }, response => {
                    //            // $('#myTable2 tbody').empty();
                    //            this.form.CourseId.studentcourse = response,
                    //            this.form.CourseId.updateItems();
                    //            // select first lookup item after changing
                    //            if (this.form.CourseId.items && this.form.CourseId.items.length > 0) {
                    //                Serenity.EditorUtils.setValue(this.form.CourseId, this.form.CourseId.items[0].id);
                    //                //this.form.FeeAllocations.myPassValue = Q.toId(this.form.CourseId.value);
                    //                this.SetFeeDetails();
                    //            }
                    //            else {
                    //                var k = this.form.FeeAllocations.getItems();
                    //                k = [];
                    //                this.form.FeeAllocations.value = k;
                    //            }
                    //    }
                    //    );
                    //});
                    _this.form.PromotionDetailId.changeSelect2(function (e) {
                        _this.SetFeeDetails();
                    });
                    _this.form.StudentId.changeSelect2(function (e) {
                        var k = _this.form.TranportationFee.getItems();
                        k = [];
                        Transactions.FeeCollectionService.TransportationFeePending({
                            studentid: Q.toId(_this.form.StudentId.value),
                        }, function (response) {
                            response.forEach(function (item, index) {
                                k.push({ FeeId: item.CourseFeeId, FeeStrctureId: item.FeeStructureId, Collected: 0, Balance: item.FeeAmount, FeeCode: item.FeeCode, TermName: item.TermName });
                            });
                            _this.form.TranportationFee.value = k;
                        });
                    });
                    return _this;
                }
                FeeCollectionDialog.prototype.getFormKey = function () { return Transactions.FeeCollectionForm.formKey; };
                FeeCollectionDialog.prototype.getIdProperty = function () { return Transactions.FeeCollectionRow.idProperty; };
                FeeCollectionDialog.prototype.getLocalTextPrefix = function () { return Transactions.FeeCollectionRow.localTextPrefix; };
                FeeCollectionDialog.prototype.getService = function () { return Transactions.FeeCollectionService.baseUrl; };
                FeeCollectionDialog.prototype.getDeletePermission = function () { return Transactions.FeeCollectionRow.deletePermission; };
                FeeCollectionDialog.prototype.getInsertPermission = function () { return Transactions.FeeCollectionRow.insertPermission; };
                FeeCollectionDialog.prototype.getUpdatePermission = function () { return Transactions.FeeCollectionRow.updatePermission; };
                FeeCollectionDialog.prototype.SetFeeDetails = function () {
                    var _this = this;
                    var k = this.form.FeeAllocations.getItems();
                    k = [];
                    Transactions.FeeCollectionService.GetStudentCoursePendingFees({
                        StudentId: Q.toId(this.form.StudentId.value),
                        PromotionDetailIdId: Q.toId(this.form.PromotionDetailId.value),
                        acadamicyearid: Q.toId(this.form.AcadamicYearId.value)
                    }, function (response) {
                        response.forEach(function (item, index) {
                            k.push({ CourseFeeId: item.CourseFeeId, FeeStrctureId: item.FeeStructureId, Collected: 0, Balance: item.FeeAmount, FeeCode: item.FeeCode, TermName: item.TermName });
                        });
                        _this.form.FeeAllocations.value = k;
                    });
                };
                FeeCollectionDialog.prototype.updateInterface = function () {
                    var _this = this;
                    _super.prototype.updateInterface.call(this);
                    if (!this.isEditMode()) {
                        SchoolMate.Master.CurrentAcadamicYearService.GetCurrentAcadamicYear({}, function (response) {
                            _this.form.AcadamicYearId.value = response.Id.toString();
                        });
                    }
                    if (this.isEditMode()) {
                        Serenity.EditorUtils.setReadonly(this.form.PromotionDetailId.element, true);
                        Serenity.EditorUtils.setReadonly(this.form.StudentId.element, true);
                    }
                    this.element.find('.add-button').hide();
                    this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
                    var currentValue = Serenity.EditorUtils.getValue(this.form.StudentId);
                    //let currentText = Serenity.EnumFormatter.format(MyEnum, Q.toId(currentValue));
                    //Q.notifySuccess(`You selected ${currentText}, lookup items will be reloaded`);
                    // clear old value
                    //this.form.CourseId.value = null;
                    // pass value into lookup editor and update items
                    //this.form.CourseId.myId = currentValue;
                    //this.form.CourseId.isedit = this.isEditMode();
                    //Transactions.FeeCollectionService.StudentCurrentPromotions({
                    //    StudentId: currentValue
                    //}, response => {
                    //    // $('#myTable2 tbody').empty();
                    //    this.form.CourseId.studentcourse = response,
                    //        this.form.CourseId.updateItems();
                    //    // select first lookup item after changing
                    //        if (this.form.CourseId.items && this.form.CourseId.items.length > 0) {
                    //            Serenity.EditorUtils.setValue(this.form.CourseId, this.entity.CourseId);
                    //    }
                    //}
                    //);
                };
                FeeCollectionDialog.prototype.afterLoadEntity = function () {
                    var _this = this;
                    _super.prototype.afterLoadEntity.call(this);
                    if (this.isNew()) {
                        Transactions.FeeCollectionService.GetDefaultAccount({}, function (response) {
                            if (response.Id > 0) {
                                _this.form.PaymentMethod.value = response.Type.toString();
                                _this.form.AccountId.value = response.Id.toString();
                            }
                        });
                    }
                    // this.form.FeeAllocations.myPassValue = this.entity.CourseId;
                    // this.form.FeeAllocations.studentid = this.entity.StudentId;
                };
                FeeCollectionDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], FeeCollectionDialog);
                return FeeCollectionDialog;
            }(Serenity.EntityDialog));
            Transactions.FeeCollectionDialog = FeeCollectionDialog;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var FeeCollectionGrid = /** @class */ (function (_super) {
                __extends(FeeCollectionGrid, _super);
                function FeeCollectionGrid(container) {
                    return _super.call(this, container) || this;
                }
                FeeCollectionGrid.prototype.getColumnsKey = function () { return 'Transactions.FeeCollection'; };
                FeeCollectionGrid.prototype.getDialogType = function () { return Transactions.FeeCollectionDialog; };
                FeeCollectionGrid.prototype.getIdProperty = function () { return Transactions.FeeCollectionRow.idProperty; };
                FeeCollectionGrid.prototype.getInsertPermission = function () { return Transactions.FeeCollectionRow.insertPermission; };
                FeeCollectionGrid.prototype.getLocalTextPrefix = function () { return Transactions.FeeCollectionRow.localTextPrefix; };
                FeeCollectionGrid.prototype.getService = function () { return Transactions.FeeCollectionService.baseUrl; };
                FeeCollectionGrid.prototype.getButtons = function () {
                    var _this = this;
                    var buttons = _super.prototype.getButtons.call(this);
                    buttons.push(SchoolMate.Common.ExcelExportHelper.createToolButton({
                        grid: this,
                        service: Transactions.FeeCollectionService.baseUrl + '/ListExcel',
                        onViewSubmit: function () { return _this.onViewSubmit(); },
                        separator: true
                    }));
                    buttons.push(SchoolMate.Common.PdfExportHelper.createToolButton({
                        grid: this,
                        onViewSubmit: function () { return _this.onViewSubmit(); }
                    }));
                    return buttons;
                };
                FeeCollectionGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], FeeCollectionGrid);
                return FeeCollectionGrid;
            }(Serenity.EntityGrid));
            Transactions.FeeCollectionGrid = FeeCollectionGrid;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var MyLookupEditor = /** @class */ (function (_super) {
            __extends(MyLookupEditor, _super);
            function MyLookupEditor(container, opt) {
                return _super.call(this, container, opt) || this;
            }
            MyLookupEditor.prototype.getLookupKey = function () {
                return this.buildLookupKey(this.myId);
            };
            MyLookupEditor.prototype.getItems = function (lookup) {
                if (this.isedit) {
                    var customLookup = Q.getLookup(this.buildLookupKey(this.myId));
                    return customLookup.items;
                }
                //var customLookup = Q.getLookup(this.buildLookupKey(this.myId));
                var items = [];
                if (this.studentcourse != null) {
                    for (var i = 0; i < this.studentcourse.length; i++) {
                        var k = { Id: this.studentcourse[i].CourseId, Code: this.studentcourse[i].CourseCode };
                        items.push(k);
                    }
                }
                if (this.myId == null || this.myId.toString() == "") {
                    items = [];
                }
                return items;
            };
            MyLookupEditor.prototype.buildLookupKey = function (id) {
                //demo switch lookup key by id
                return "Master.Courses";
            };
            MyLookupEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], MyLookupEditor);
            return MyLookupEditor;
        }(Serenity.LookupEditorBase));
        SchoolMate.MyLookupEditor = MyLookupEditor;
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var PromotionDetailsDialog = /** @class */ (function (_super) {
                __extends(PromotionDetailsDialog, _super);
                function PromotionDetailsDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new Transactions.PromotionDetailsForm(_this.idPrefix);
                    return _this;
                }
                PromotionDetailsDialog.prototype.getFormKey = function () { return Transactions.PromotionDetailsForm.formKey; };
                PromotionDetailsDialog.prototype.getIdProperty = function () { return Transactions.PromotionDetailsRow.idProperty; };
                PromotionDetailsDialog.prototype.getLocalTextPrefix = function () { return Transactions.PromotionDetailsRow.localTextPrefix; };
                PromotionDetailsDialog.prototype.getService = function () { return Transactions.PromotionDetailsService.baseUrl; };
                PromotionDetailsDialog.prototype.getDeletePermission = function () { return Transactions.PromotionDetailsRow.deletePermission; };
                PromotionDetailsDialog.prototype.getInsertPermission = function () { return Transactions.PromotionDetailsRow.insertPermission; };
                PromotionDetailsDialog.prototype.getUpdatePermission = function () { return Transactions.PromotionDetailsRow.updatePermission; };
                PromotionDetailsDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], PromotionDetailsDialog);
                return PromotionDetailsDialog;
            }(Serenity.EntityDialog));
            Transactions.PromotionDetailsDialog = PromotionDetailsDialog;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var PromotionDetailsGrid = /** @class */ (function (_super) {
                __extends(PromotionDetailsGrid, _super);
                function PromotionDetailsGrid(container) {
                    return _super.call(this, container) || this;
                }
                PromotionDetailsGrid.prototype.getColumnsKey = function () { return 'Transactions.PromotionDetails'; };
                PromotionDetailsGrid.prototype.getDialogType = function () { return Transactions.PromotionDetailsDialog; };
                PromotionDetailsGrid.prototype.getIdProperty = function () { return Transactions.PromotionDetailsRow.idProperty; };
                PromotionDetailsGrid.prototype.getInsertPermission = function () { return Transactions.PromotionDetailsRow.insertPermission; };
                PromotionDetailsGrid.prototype.getLocalTextPrefix = function () { return Transactions.PromotionDetailsRow.localTextPrefix; };
                PromotionDetailsGrid.prototype.getService = function () { return Transactions.PromotionDetailsService.baseUrl; };
                PromotionDetailsGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], PromotionDetailsGrid);
                return PromotionDetailsGrid;
            }(Serenity.EntityGrid));
            Transactions.PromotionDetailsGrid = PromotionDetailsGrid;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var PromotionStudentsDialog = /** @class */ (function (_super) {
                __extends(PromotionStudentsDialog, _super);
                function PromotionStudentsDialog(opt) {
                    var _this = _super.call(this, opt) || this;
                    _this.getDialogOptions().width = 300;
                    //this.permissions = new Administration.PermissionCheckEditor(this.byId('Permissions'), {
                    //    showRevoke: false
                    //});
                    //var button = document.createElement('button');
                    //button.innerText = "Add";
                    //button.onclick = function () {
                    //};  
                    var kd = _this;
                    // $('<span>< ul style = "list-style-type: none; display: inline-block;" > <li>1 < /li> < li > 2 < /li> < /ul> < ul style = "list-style-type: none; display: inline-block;" > <li>3 < /li> < li > 4 < /li>< /ul> < span >').appendTo(this.byId('Permissions'));
                    //DivisionsService.GetByAcadamicYear({
                    //    DivisionIds: this.options.divid,
                    //    AcadamicYearId: this.options.acdid,
                    //}, response => {
                    //        for (let item of response) {
                    //            if (item.Status == true) {
                    //                var button = document.createElement('button');
                    //                button.innerText = "-";
                    //                button.onclick = function () {
                    //                    DivisionsService.DeleteStudentFromDivision({
                    //                        AcadamicYearId: k,
                    //                        DivisionIds: m,
                    //                        StudentId: item.StudentId,
                    //                    }, response => {
                    //                            kd.myFunc2();
                    //                    });
                    //                };
                    //                var trow = document.createElement('TR');
                    //                var y = document.createElement("TD");
                    //                var t = document.createTextNode(item.StudentName);
                    //                y.appendChild(t);
                    //                var y2 = document.createElement("TD");
                    //                y2.append(button);
                    //                trow.appendChild(y);
                    //                trow.appendChild(y2);
                    //                $('#myTable2').append(trow);
                    //            }
                    //            else {
                    //                //$('#myTable2').append('<tr><td>' + item.StudentName + '</td><td><button class="btn btn-outline-primary" onclick="myFunc(' + item.StudentId + ',' + this.options.divid + ',' + this.options.acdid+')">+</button></td></tr>');
                    //                //$("#menu2").append('<tr><td> Island Trading </td><td> Helen Bennett </td><td> UK </td></tr>');
                    //                var button = document.createElement('button');
                    //                button.innerText = "+";
                    //                button.onclick = function () {
                    //                    DivisionsService.UpdateDivision({
                    //                        AcadamicYearId: k,
                    //                        DivisionIds: m,
                    //                        StudentId: item.StudentId,
                    //                    }, response => {
                    //                            kd.myFunc2();
                    //                                        });
                    //                };
                    //                var trow = document.createElement('TR');
                    //                var y = document.createElement("TD");
                    //                var t = document.createTextNode(item.StudentName);
                    //                y.appendChild(t);
                    //                var y2 = document.createElement("TD");
                    //                y2.append(button);
                    //                trow.appendChild(y);
                    //                trow.appendChild(y2);
                    //                $('#myTable3').append(trow);
                    //            }
                    //        }
                    //});
                    var criteria;
                    SchoolMate.Master.DivisionsService.List({
                        Criteria: Serenity.Criteria.and(criteria, [["PromotionId" /* PromotionId */], '=', kd.options.promotionid])
                    }, function (response) {
                        // $('#myTable2 tbody').empty();
                        //  $('#myTable3 tbody').empty();
                        var a = "";
                        a = a + "<option value='0'>---select if Default----</option>";
                        response.Entities.forEach(function (value) {
                            a = a + "<option value='" + value.Id + "'>" + value.DivisionCode + "</option>";
                        });
                        //var newDivhol = $('<div id="comboco"><label>Course</label><select id="cboSelectcourse" class="form-control select2" style="width:100%;"  onchange="getdat(this)">' + a + '</select></div>');
                        //$('#combo').append(newDivhol);
                        $("#cboSelectcourse").empty();
                        $("#cboSelectcourse").append(a);
                        $("#cboSelectcourse").prop("selectedIndex", -1);
                    });
                    _this.myFunc2();
                    return _this;
                }
                PromotionStudentsDialog.prototype.myFunc2 = function () {
                    var kd = this;
                    Transactions.PromotionsService.GetStudentsByCourse({
                        FromCouseId: this.options.fromcourseid,
                        PromotionId: this.options.promotionid,
                        ToCouseId: this.options.tocourseid,
                        AcadamicYearId: this.options.acadamicyearid
                    }, function (response) {
                        // $('#myTable2 tbody').empty();
                        // $('#myTable3 tbody').empty();
                        $('#tbodyid3').empty();
                        $('#tbodyid4').empty();
                        var _loop_3 = function (item) {
                            button = document.createElement('button');
                            button.innerText = "+";
                            button.onclick = function () {
                                var id = $("#cboSelectcourse option:selected").val();
                                Transactions.PromotionsService.InsertIntoPromotionDetails({
                                    PromotionId: kd.options.promotionid,
                                    StudentId: item.StudentId,
                                    promotiondetailid: item.promotiondetailid,
                                    divid: id
                                }, function (response) {
                                    kd.myFunc2();
                                });
                            };
                            trow = document.createElement('TR');
                            y = document.createElement("TD");
                            t = document.createTextNode(item.StudentName);
                            y.appendChild(t);
                            y2 = document.createElement("TD");
                            y2.append(button);
                            trow.appendChild(y);
                            trow.appendChild(y2);
                            if (item.type == '1') {
                                $('#tbodyid4').append(trow);
                            }
                            else {
                                $('#tbodyid3').append(trow);
                            }
                            //}
                            //else {
                            //    //$('#myTable2').append('<tr><td>' + item.StudentName + '</td><td><button class="btn btn-outline-primary" onclick="myFunc(' + item.StudentId + ',' + this.options.divid + ',' + this.options.acdid+')">+</button></td></tr>');
                            //    //$("#menu2").append('<tr><td> Island Trading </td><td> Helen Bennett </td><td> UK </td></tr>');
                            //    var button = document.createElement('button');
                            //    button.innerText = "+";
                            //    button.onclick = function () {
                            //        //DivisionsService.UpdateDivision({
                            //        //    AcadamicYearId: k,
                            //        //    DivisionIds: m,
                            //        //    StudentId: item.StudentId,
                            //        //}, response => {
                            //        //        kd.myFunc2();
                            //        //});
                            //    };
                            //    var trow = document.createElement('TR');
                            //    var y = document.createElement("TD");
                            //    var t = document.createTextNode(item.StudentName);
                            //    y.appendChild(t);
                            //    var y2 = document.createElement("TD");
                            //    y2.append(button);
                            //    trow.appendChild(y);
                            //    trow.appendChild(y2);
                            //    $('#tbodyid2').append(trow);
                            //}
                        };
                        var button, trow, y, t, y2;
                        for (var _i = 0, response_2 = response; _i < response_2.length; _i++) {
                            var item = response_2[_i];
                            _loop_3(item);
                        }
                    });
                    Transactions.PromotionsService.GetPromotionDetails({
                        FromCouseId: this.options.fromcourseid,
                        PromotionId: this.options.promotionid,
                    }, function (response) {
                        // $('#myTable2 tbody').empty();
                        //$('#myTable3 tbody').empty();
                        $('#tbodyid2').empty();
                        var _loop_4 = function (item) {
                            button = document.createElement('button');
                            button.innerText = "-";
                            button.onclick = function () {
                                if (kd.options.fromcourseid == null) {
                                    Q.notifyError("Not possible in type admission");
                                    return;
                                }
                                Transactions.PromotionsService.DeletePromotionDetails({
                                    PromotionId: kd.options.promotionid,
                                    StudentId: item.StudentId,
                                    promotiondetailid: item.promotiondetailid
                                }, function (response) {
                                    if (response == false) {
                                        Q.notifyError("A higher promotion already exists");
                                    }
                                    else {
                                        kd.myFunc2();
                                    }
                                });
                            };
                            trow = document.createElement('TR');
                            y = document.createElement("TD");
                            t = document.createTextNode(item.StudentName);
                            y.appendChild(t);
                            y2 = document.createElement("TD");
                            y2.append(button);
                            trow.appendChild(y);
                            trow.appendChild(y2);
                            $('#tbodyid2').append(trow);
                            //}
                            //else {
                            //    //$('#myTable2').append('<tr><td>' + item.StudentName + '</td><td><button class="btn btn-outline-primary" onclick="myFunc(' + item.StudentId + ',' + this.options.divid + ',' + this.options.acdid+')">+</button></td></tr>');
                            //    //$("#menu2").append('<tr><td> Island Trading </td><td> Helen Bennett </td><td> UK </td></tr>');
                            //    var button = document.createElement('button');
                            //    button.innerText = "+";
                            //    button.onclick = function () {
                            //        //DivisionsService.UpdateDivision({
                            //        //    AcadamicYearId: k,
                            //        //    DivisionIds: m,
                            //        //    StudentId: item.StudentId,
                            //        //}, response => {
                            //        //        kd.myFunc2();
                            //        //});
                            //    };
                            //    var trow = document.createElement('TR');
                            //    var y = document.createElement("TD");
                            //    var t = document.createTextNode(item.StudentName);
                            //    y.appendChild(t);
                            //    var y2 = document.createElement("TD");
                            //    y2.append(button);
                            //    trow.appendChild(y);
                            //    trow.appendChild(y2);
                            //    $('#tbodyid2').append(trow);
                            //}
                        };
                        var button, trow, y, t, y2;
                        for (var _i = 0, response_3 = response; _i < response_3.length; _i++) {
                            var item = response_3[_i];
                            _loop_4(item);
                        }
                    });
                };
                PromotionStudentsDialog.prototype.getTemplate = function () {
                    var fromcousername = "";
                    var tocoursename = "";
                    // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
                    if (this.options.fromcourseid > 0) {
                        fromcousername = SchoolMate.Master.CoursesRow.getLookup().itemById[this.options.fromcourseid].CourseName;
                    }
                    if (this.options.tocourseid > 0) {
                        tocoursename = SchoolMate.Master.CoursesRow.getLookup().itemById[this.options.tocourseid].CourseName;
                    }
                    var table3 = "<table id='myTable4' width='100%' class='timecard'> <caption>Students In " + tocoursename + "(Previous academic year)</caption><thead><th>Student</th><th width='150px'>Action</th> </thead><tbody id='tbodyid4'> <tbody></table>";
                    var table1 = "<table id='myTable2' width='100%' class='timecard'> <caption>Students In " + fromcousername + "(Previous academic year)</caption><thead><th>Student</th><th width='150px'>Action</th> </thead><tbody id='tbodyid3'> <tbody></table>";
                    var table2 = "<table id='myTable3' width='100%' class='timecard'>  <caption>Promotion Details(" + tocoursename + ")</caption> <thead>  <th>Student </th><th>Action</th>  </thead>   <tbody id='tbodyid2'> <tbody></table>";
                    var div = "<br><div class='row'> <div class='col-md-4'>" + table1 + "</div><div class='col-md-4'>" + table3 + "</div><div class='col-md-4'>" + table2 + "</div></div>";
                    return "<div id='~_Permissions'><div id='comboco' style='padding-right:20px;padding-left:20px;'><label>Default Division</label><select id='cboSelectcourse' class='form-control select2' style='width:100%;'></select></div>" + div + "</div";
                    var tab3 = "<div style='float:left; margin:10px'><table id='myTable3' class='timecard'> <caption>Students In " + fromcousername + "</caption><thead><th width='300px'>Student</th><th width='150px'>Action</th> </thead><tbody id='tbodyid4'> <tbody></table></div>";
                    return "<div id='~_Permissions'><div id='comboco' style='padding-right:20px;padding-left:20px;'><label>Default Division</label><select id='cboSelectcourse' class='form-control select2' style='width:100%;'></select></div><div style='float:left; margin:10px'><table id='myTable2' class='timecard'> <caption>Students In " + fromcousername + "</caption><thead><th width='300px'>Student</th><th width='150px'>Action</th> </thead><tbody id='tbodyid3'> <tbody></table></div><div style='float:left;margin:10px'><table id='myTable3' class='timecard'>  <caption>Promotion Details(" + tocoursename + ")</caption> <thead>  <th width='300px'>Student </th><th>Action</th>  </thead>   <tbody id='tbodyid2'> <tbody></table></div>" + tab3 + "</div>";
                };
                PromotionStudentsDialog.prototype.getDialogOptions = function () {
                    var _this = this;
                    var opt = _super.prototype.getDialogOptions.call(this);
                    opt.buttons = [
                        {
                            text: Q.text('Dialogs.OkButton'),
                            click: function (e) {
                                //RolePermissionService.Update({
                                //    RoleID: this.options.roleID,
                                //    Permissions: this.permissions.value.map(x => x.PermissionKey),
                                //    Module: null,
                                //    Submodule: null
                                //}, response => {
                                //    this.dialogClose();
                                //    window.setTimeout(() => Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')), 0);
                                //});
                                _this.dialogClose();
                            }
                        },
                    ];
                    //opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'),
                    //    this.options.title);
                    opt.title = 'Promotion Students';
                    return opt;
                };
                PromotionStudentsDialog = __decorate([
                    Serenity.Decorators.registerClass(),
                    Serenity.Decorators.resizable(),
                    Serenity.Decorators.maximizable(),
                    Serenity.Decorators.panel()
                ], PromotionStudentsDialog);
                return PromotionStudentsDialog;
            }(Serenity.TemplatedDialog));
            Transactions.PromotionStudentsDialog = PromotionStudentsDialog;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var PromotionsDialog = /** @class */ (function (_super) {
                __extends(PromotionsDialog, _super);
                function PromotionsDialog() {
                    var _this = _super.call(this) || this;
                    _this.form = new Transactions.PromotionsForm(_this.idPrefix);
                    _this.form = new Transactions.PromotionsForm(_this.idPrefix);
                    _this.form.ToCourse.changeSelect2(function (e) {
                        Transactions.PromotionsService.GetDivisionsByCourse({
                            courseid: Q.toId(_this.form.ToCourse.value)
                        }, function (response) {
                            var k = _this.form.PromotionDivisions.getItems();
                            k = [];
                            response.forEach(function (item, index) {
                                k.push({ DivisionCode: item.DivisionCode });
                            });
                            _this.form.PromotionDivisions.value = k;
                        });
                    });
                    return _this;
                }
                PromotionsDialog.prototype.getFormKey = function () { return Transactions.PromotionsForm.formKey; };
                PromotionsDialog.prototype.getIdProperty = function () { return Transactions.PromotionsRow.idProperty; };
                PromotionsDialog.prototype.getLocalTextPrefix = function () { return Transactions.PromotionsRow.localTextPrefix; };
                PromotionsDialog.prototype.getService = function () { return Transactions.PromotionsService.baseUrl; };
                PromotionsDialog.prototype.getDeletePermission = function () { return Transactions.PromotionsRow.deletePermission; };
                PromotionsDialog.prototype.getInsertPermission = function () { return Transactions.PromotionsRow.insertPermission; };
                PromotionsDialog.prototype.getUpdatePermission = function () { return Transactions.PromotionsRow.updatePermission; };
                PromotionsDialog.prototype.getToolbarButtons = function () {
                    var _this = this;
                    var buttons = _super.prototype.getToolbarButtons.call(this);
                    buttons.push({
                        title: 'Promotion Students',
                        cssClass: 'edit-permissions-button',
                        icon: 'fa-lock text-green',
                        onClick: function () {
                            new Transactions.PromotionStudentsDialog({
                                fromcourseid: _this.entity.FromCourse,
                                tocourseid: _this.entity.ToCourse,
                                promotionid: _this.entity.Id,
                                acadamicyearid: _this.entity.AcadamicYearId
                            }).dialogOpen();
                        }
                    });
                    return buttons;
                };
                PromotionsDialog.prototype.updateInterface = function () {
                    _super.prototype.updateInterface.call(this);
                    this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
                };
                PromotionsDialog = __decorate([
                    Serenity.Decorators.registerClass(),
                    Serenity.Decorators.panel()
                ], PromotionsDialog);
                return PromotionsDialog;
            }(Serenity.EntityDialog));
            Transactions.PromotionsDialog = PromotionsDialog;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var PromotionsGrid = /** @class */ (function (_super) {
                __extends(PromotionsGrid, _super);
                function PromotionsGrid(container) {
                    return _super.call(this, container) || this;
                }
                PromotionsGrid.prototype.getColumnsKey = function () { return 'Transactions.Promotions'; };
                PromotionsGrid.prototype.getDialogType = function () { return Transactions.PromotionsDialog; };
                PromotionsGrid.prototype.getIdProperty = function () { return Transactions.PromotionsRow.idProperty; };
                PromotionsGrid.prototype.getInsertPermission = function () { return Transactions.PromotionsRow.insertPermission; };
                PromotionsGrid.prototype.getLocalTextPrefix = function () { return Transactions.PromotionsRow.localTextPrefix; };
                PromotionsGrid.prototype.getService = function () { return Transactions.PromotionsService.baseUrl; };
                PromotionsGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], PromotionsGrid);
                return PromotionsGrid;
            }(Serenity.EntityGrid));
            Transactions.PromotionsGrid = PromotionsGrid;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var FeeDue = /** @class */ (function (_super) {
            __extends(FeeDue, _super);
            function FeeDue() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            FeeDue.initializePage = function () {
                $("#cboSelect").prop("selectedIndex", -1);
                function showPopup() {
                }
                $(function () {
                    $('#btnPrint').prop('disabled', true);
                    $('#btnPrint').click(function (e) {
                        //var headstr = "<html><head><title>Due Details</title></head><body>";
                        //var footstr = "</body>";
                        //var newstr = document.getElementById("pardiv").innerHTML;
                        //var oldstr = document.body.innerHTML;
                        //document.body.innerHTML = headstr + newstr + footstr;
                        //window.print();
                        //document.body.innerHTML = oldstr;
                        //return false;
                        //var divContents = document.getElementById("pardiv").innerHTML;
                        //var printWindow = window.open('', '', 'height=200,width=400');
                        //printWindow.document.write('<html><head><title>DIV Contents</title>');
                        //printWindow.document.write('</head><body >');
                        //printWindow.document.write(divContents);
                        //printWindow.document.write('</body></html>');
                        //printWindow.document.close();
                        //printWindow.print();
                        var myDiv = document.getElementById('pardiv');
                        var newWindow = window.open('', 'SecondWindow', 'toolbar=0,stat=0');
                        var style = newWindow.document.createElement('link');
                        style.type = "text/css";
                        style.rel = "stylesheet";
                        style.href = "https://www.w3schools.com/w3css/4/w3.css";
                        style.media = "all";
                        newWindow.document.write("<html><body " +
                            "class='responsive light2012-home-switcher home switcher' " +
                            " önload='window.print()'>" +
                            myDiv.innerHTML +
                            "</body></html>");
                        newWindow.document.getElementsByTagName("head")[0].appendChild(style);
                        newWindow.document.close();
                    });
                    $('#cboSelect').change(function (e) {
                        var id = $("#cboSelect option:selected").val();
                        var a = "";
                        SchoolMate.Transactions.ReportEndPointService.CoursePromotionsByAcadamicYear({
                            acadamicyearid: id
                        }, function (response) {
                            response.forEach(function (value) {
                                a = a + "<option value='" + value.promotionid + "'>" + value.CousrseName + "</option>";
                            });
                            //var newDivhol = $('<div id="comboco"><label>Course</label><select id="cboSelectcourse" class="form-control select2" style="width:100%;"  onchange="getdat(this)">' + a + '</select></div>');
                            //$('#combo').append(newDivhol);
                            $("#cboSelectcourse").empty();
                            $("#cboSelectcourse").append(a);
                            $("#cboSelectcourse").prop("selectedIndex", -1);
                        });
                        var b = "";
                        SchoolMate.Transactions.ReportEndPointService.TersmsByAcadamicYear({
                            acadamicyearid: id
                        }, function (response) {
                            b = b + "<option value='0'> --- Select-- - </option>";
                            response.forEach(function (value) {
                                b = b + "<option value='" + value.Id + "'>" + value.TermName + "</option>";
                            });
                            //var newDivhol = $('<div id="comboco"><label>Course</label><select id="cboSelectcourse" class="form-control select2" style="width:100%;"  onchange="getdat(this)">' + a + '</select></div>');
                            //$('#combo').append(newDivhol);
                            $("#cboSelectterm").empty();
                            $("#cboSelectterm").append(b);
                            $("#cboSelectterm").prop("selectedIndex", -1);
                        });
                    });
                    $('#btnAddtoList').click(function (e) {
                        $('#pardiv').empty();
                        var id = $("#cboSelectcourse option:selected").val();
                        var idterm = $("#cboSelectterm option:selected").val();
                        var allfee = $("#all").is(':checked');
                        var x = 0;
                        SchoolMate.Transactions.ReportEndPointService.CourseFeePending({
                            courseid: id,
                            termid: idterm,
                            all: allfee
                        }, function (response) {
                            $('#btnPrint').prop('disabled', false);
                            response.forEach(function (value) {
                                var m = "";
                                var k = 0;
                                var message = "Dear " + value.student.FatherContactName + "  Please find below the fee due of your ward " + value.student.StudentContactName + " \n";
                                value.pendingfees.forEach(function (v2) {
                                    m = m + "<tr><td>" + v2.FeeCode + "</td><td>" + v2.TermName + "</td><td style='text-align: right;'>" + v2.FeeAmount.toFixed(3) + "</td></tr>";
                                    k = k + v2.FeeAmount;
                                    message = message + "" + v2.FeeCode + " " + v2.TermName + "  " + v2.FeeAmount.toFixed(3) + " \n ";
                                });
                                m = m + "<tr bgcolor='#FF0000'><td>Total :</td><td></td><td style='text-align: right;'>" + k.toFixed(3) + "</td></tr>";
                                m = m + "<tr bgcolor='#FF0000'><td></td><td></td><td style='text-align: right;'><button class='whatappbutton' onclick='BitPro.SchoolMate.FeeDue.sendwhatsappmessage(`" + value.student.FatherContactWhatsapp + "`,`" + message + "`)' >" + "<img src='/Content/images/whatsapp.png'/></button></td></tr>";
                                var markdiv = $('<div class="col-md-6 card" style="padding:5px"><h1 align="center">' + value.student.Campus + '</h1><div align="center">' + value.student.CampusAddress + '<br>' + value.student.CampusPhone + '<hr style="border-top: 1px solid black;"><h4>Fee Due Receipt</h4>Dear <b>' + value.student.FatherContactName + ' </b> asslamu alikum<br>Please find below the fee due of your ward  <b>' + value.student.StudentContactName + ' </b><table class="w3-table-all"><thead><tr><th>Fee Name</th><th>Term Name</th><th style="text-align:right">Balance</th></tr></thead>' + m + '</table></div>');
                                $('#pardiv').append(markdiv);
                            });
                        });
                    });
                });
            };
            FeeDue.sendwhatsappmessage = function (number, message) {
                if ((number || "") != "") {
                    SchoolMate.Common.CommonService.SendWhatsappMessage({
                        Message: message,
                        PhoneNumber: number,
                    }, function (response) {
                        if (response == true) {
                            Q.notifySuccess("Message Send Successfully");
                        }
                        else {
                            Q.notifyError("Error While Send Message");
                        }
                    });
                }
            };
            FeeDue.UpdateAll = function (list) {
                alert("sdc");
            };
            FeeDue.prototype.onDialogOpen = function () {
                _super.prototype.onDialogOpen.call(this);
            };
            FeeDue.prototype.arrange = function () {
                _super.prototype.arrange.call(this);
                this.areaChart && this.areaChart.redraw();
            };
            FeeDue.prototype.getTemplate = function () {
                // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
                return "<div id='~_Chart'></div>";
            };
            FeeDue.prototype.getDialogOptions = function () {
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.title = 'Orders by Shipper';
                return opt;
            };
            FeeDue = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.resizable(),
                Serenity.Decorators.maximizable()
            ], FeeDue);
            return FeeDue;
        }(Serenity.TemplatedDialog));
        SchoolMate.FeeDue = FeeDue;
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var ProgressCard = /** @class */ (function (_super) {
            __extends(ProgressCard, _super);
            function ProgressCard() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ProgressCard.initializePage = function () {
                $("#cboSelect").prop("selectedIndex", -1);
                function showPopup() {
                }
                $(function () {
                    $('#btnPrint').prop('disabled', true);
                    $('#btnPrint').click(function (e) {
                        //var headstr = "<html><head><title>Due Details</title></head><body>";
                        //var footstr = "</body>";
                        //var newstr = document.getElementById("pardiv").innerHTML;
                        //var oldstr = document.body.innerHTML;
                        //document.body.innerHTML = headstr + newstr + footstr;
                        //window.print();
                        //document.body.innerHTML = oldstr;
                        //return false;
                        //var divContents = document.getElementById("pardiv").innerHTML;
                        //var printWindow = window.open('', '', 'height=200,width=400');
                        //printWindow.document.write('<html><head><title>DIV Contents</title>');
                        //printWindow.document.write('</head><body >');
                        //printWindow.document.write(divContents);
                        //printWindow.document.write('</body></html>');
                        //printWindow.document.close();
                        //printWindow.print();
                        var myDiv = document.getElementById('pardiv');
                        var newWindow = window.open('', 'SecondWindow', 'toolbar=0,stat=0');
                        var style = newWindow.document.createElement('link');
                        style.type = "text/css";
                        style.rel = "stylesheet";
                        style.href = "https://www.w3schools.com/w3css/4/w3.css";
                        style.media = "all";
                        newWindow.document.write("<html><body " +
                            "class='responsive light2012-home-switcher home switcher' " +
                            " önload='window.print()'>" +
                            myDiv.innerHTML +
                            "</body></html>");
                        newWindow.document.getElementsByTagName("head")[0].appendChild(style);
                        newWindow.document.close();
                    });
                    $('#cboSelect').change(function (e) {
                        var id = $("#cboSelect option:selected").val();
                        var a = "";
                        SchoolMate.Transactions.ReportEndPointService.CoursePromotionsByAcadamicYear({
                            acadamicyearid: id
                        }, function (response) {
                            response.forEach(function (value) {
                                a = a + "<option value='" + value.promotionid + "'>" + value.CousrseName + "</option>";
                            });
                            //var newDivhol = $('<div id="comboco"><label>Course</label><select id="cboSelectcourse" class="form-control select2" style="width:100%;"  onchange="getdat(this)">' + a + '</select></div>');
                            //$('#combo').append(newDivhol);
                            $("#cboSelectcourse").empty();
                            $("#cboSelectcourse").append(a);
                            $("#cboSelectcourse").prop("selectedIndex", -1);
                        });
                    });
                    $('#btnAddtoList').click(function (e) {
                        $('#pardiv').empty();
                        var id = $("#cboSelectcourse option:selected").val();
                        SchoolMate.Transactions.ReportEndPointService.GetExamMarkByPromotion({
                            promotionid: id,
                        }, function (response) {
                            $('#btnPrint').prop('disabled', false);
                            response.forEach(function (value) {
                                var m = "";
                                m = m + "<tr class='w3-grey'><th>Subject Name</th>";
                                var k = 0;
                                value.Exams.forEach(function (v2) {
                                    m = m + "<th>" + v2.ExamName + "</th>";
                                });
                                m = m + "</tr>";
                                var result = groupBy(value.Subjects, function (obj) { return obj.subjectid; });
                                for (var key in result) {
                                    m = m + "<tr><td>" + (result[key])[0].SubjectName + "</td>";
                                    result[key].forEach(function (v2) {
                                        m = m + "<td>" + v2.Mark + "/" + v2.MaxMark + "</td>";
                                        var k = v2;
                                    });
                                    // Use `key` and `value`
                                    m = m + "</tr>";
                                }
                                //const keys = Object.caller(result);
                                value.Subjects.forEach(function (v2) {
                                });
                                var markdiv = $('<div class="col-md-6 card" style="padding:5px"><h1 align="center">' + value.Campus + '</h1><div align="center">' + value.Address + '<br>' + value.Phone + '<hr style="border-top: 1px solid black;"><h4>Progress Card</h4></div><div align="left">Student : ' + value.student + '<br> Class : ' + value.CourseName + '</div><table class="w3-table-all">' + m + '</table><div align="right">' + value.FatherName + '<br><br>Signature</div></div>');
                                $('#pardiv').append(markdiv);
                            });
                        });
                    });
                });
                function groupBy(array, key) {
                    var keyFn = key instanceof Function ? key : function (obj) { return obj[key]; };
                    return array.reduce(function (objectsByKeyValue, obj) {
                        var value = keyFn(obj);
                        objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
                        return objectsByKeyValue;
                    }, {});
                }
            };
            ProgressCard.UpdateAll = function (list) {
                alert("sdc");
            };
            ProgressCard.prototype.onDialogOpen = function () {
                _super.prototype.onDialogOpen.call(this);
            };
            ProgressCard.prototype.arrange = function () {
                _super.prototype.arrange.call(this);
                this.areaChart && this.areaChart.redraw();
            };
            ProgressCard.prototype.getTemplate = function () {
                // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
                return "<div id='~_Chart'></div>";
            };
            ProgressCard.prototype.getDialogOptions = function () {
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.title = 'Orders by Shipper';
                return opt;
            };
            ProgressCard = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.resizable(),
                Serenity.Decorators.maximizable()
            ], ProgressCard);
            return ProgressCard;
        }(Serenity.TemplatedDialog));
        SchoolMate.ProgressCard = ProgressCard;
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var SalaryPaymentEditor = /** @class */ (function (_super) {
                __extends(SalaryPaymentEditor, _super);
                function SalaryPaymentEditor(container) {
                    return _super.call(this, container) || this;
                }
                SalaryPaymentEditor.prototype.getColumnsKey = function () { return "Transactions.SalaryPayments"; };
                SalaryPaymentEditor.prototype.getDialogType = function () { return Transactions.SalaryPaymentsDialog; };
                SalaryPaymentEditor.prototype.getLocalTextPrefix = function () { return Transactions.SalaryPaymentsRow.localTextPrefix; };
                SalaryPaymentEditor.prototype.validateEntity = function (row, id) {
                    //var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductID === row.ProductID);
                    //if (sameProduct && this.id(sameProduct) !== id) {
                    //    Q.alert('This product is already in order details!');
                    //    return false;
                    //}
                    row.CreditAccountAccountNo = SchoolMate.Accounts.AccountsRow.getLookup().itemById[row.CreditAccountId].AccountNo;
                    //row.DriverDriverName = FleetManagement.Parameters.DriverInfoRow.getLookup().itemById[row.DriverId].DriverName;
                    //row.DailyDetailTrxDate = DailyDetailsRow.getLookup().itemById[row.DailyDetailId].TrxDate;
                    //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
                    return true;
                };
                SalaryPaymentEditor = __decorate([
                    Serenity.Decorators.registerClass()
                ], SalaryPaymentEditor);
                return SalaryPaymentEditor;
            }(SchoolMate.Common.GridEditorBase));
            Transactions.SalaryPaymentEditor = SalaryPaymentEditor;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var SalaryPaymentsDialog = /** @class */ (function (_super) {
                __extends(SalaryPaymentsDialog, _super);
                function SalaryPaymentsDialog() {
                    var _this = _super.call(this) || this;
                    //this.form = new SalaryPaymentsForm(this.idPrefix);
                    _this.form.PayableSalaryAmount.changeSelect2(function (e) {
                        _this.form.PaidAmount.value = _this.form.PayableSalaryAmount.value;
                    });
                    return _this;
                }
                SalaryPaymentsDialog.prototype.getFormKey = function () { return Transactions.SalaryPaymentsForm.formKey; };
                //  protected getIdProperty() { return SalaryPaymentsRow.idProperty; }
                SalaryPaymentsDialog.prototype.getLocalTextPrefix = function () { return Transactions.SalaryPaymentsRow.localTextPrefix; };
                SalaryPaymentsDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], SalaryPaymentsDialog);
                return SalaryPaymentsDialog;
            }(SchoolMate.Common.GridEditorDialog));
            Transactions.SalaryPaymentsDialog = SalaryPaymentsDialog;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var SalaryPaymentsGrid = /** @class */ (function (_super) {
                __extends(SalaryPaymentsGrid, _super);
                function SalaryPaymentsGrid(container) {
                    return _super.call(this, container) || this;
                }
                SalaryPaymentsGrid.prototype.getColumnsKey = function () { return 'Transactions.SalaryPayments'; };
                SalaryPaymentsGrid.prototype.getDialogType = function () { return Transactions.SalaryPaymentsDialog; };
                SalaryPaymentsGrid.prototype.getIdProperty = function () { return Transactions.SalaryPaymentsRow.idProperty; };
                SalaryPaymentsGrid.prototype.getInsertPermission = function () { return Transactions.SalaryPaymentsRow.insertPermission; };
                SalaryPaymentsGrid.prototype.getLocalTextPrefix = function () { return Transactions.SalaryPaymentsRow.localTextPrefix; };
                SalaryPaymentsGrid.prototype.getService = function () { return Transactions.SalaryPaymentsService.baseUrl; };
                SalaryPaymentsGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], SalaryPaymentsGrid);
                return SalaryPaymentsGrid;
            }(Serenity.EntityGrid));
            Transactions.SalaryPaymentsGrid = SalaryPaymentsGrid;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var SalaryStructureDialog = /** @class */ (function (_super) {
                __extends(SalaryStructureDialog, _super);
                function SalaryStructureDialog() {
                    var _this = _super.call(this) || this;
                    _this.form = new Transactions.SalaryStructureForm(_this.idPrefix);
                    _this.form = new Transactions.SalaryStructureForm(_this.idPrefix);
                    _this.form.FromDate.changeSelect2(function (e) {
                        _this.setdata();
                    });
                    _this.form.ToDate.changeSelect2(function (e) {
                        _this.setdata();
                    });
                    return _this;
                }
                SalaryStructureDialog.prototype.getFormKey = function () { return Transactions.SalaryStructureForm.formKey; };
                SalaryStructureDialog.prototype.getIdProperty = function () { return Transactions.SalaryStructureRow.idProperty; };
                SalaryStructureDialog.prototype.getLocalTextPrefix = function () { return Transactions.SalaryStructureRow.localTextPrefix; };
                SalaryStructureDialog.prototype.getService = function () { return Transactions.SalaryStructureService.baseUrl; };
                SalaryStructureDialog.prototype.getDeletePermission = function () { return Transactions.SalaryStructureRow.deletePermission; };
                SalaryStructureDialog.prototype.getInsertPermission = function () { return Transactions.SalaryStructureRow.insertPermission; };
                SalaryStructureDialog.prototype.getUpdatePermission = function () { return Transactions.SalaryStructureRow.updatePermission; };
                SalaryStructureDialog.prototype.setdata = function () {
                    var _this = this;
                    if (!this.isEditMode()) {
                        if (this.form.FromDate.value != null) {
                            if (this.form.ToDate.value != null) {
                                var k = this.form.SalaryPayments.getItems();
                                k = [];
                                Transactions.SalaryStructureService.GetSalary({
                                    start: this.form.FromDate.value,
                                    to: this.form.ToDate.value
                                }, function (response) {
                                    response.forEach(function (item, index) {
                                        k.push({ StaffId: item.Id, StaffStaffName: item.StaffName, SalaryAmount: item.SalaryAmount, TotalPresent: item.TotalPresent, TotalAbsent: item.TotalAbsente, PayableSalaryAmount: item.payableamount, PaidAmount: item.payableamount });
                                    });
                                    _this.form.SalaryPayments.value = k;
                                });
                            }
                        }
                    }
                };
                SalaryStructureDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], SalaryStructureDialog);
                return SalaryStructureDialog;
            }(Serenity.EntityDialog));
            Transactions.SalaryStructureDialog = SalaryStructureDialog;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var SalaryStructureGrid = /** @class */ (function (_super) {
                __extends(SalaryStructureGrid, _super);
                function SalaryStructureGrid(container) {
                    return _super.call(this, container) || this;
                }
                SalaryStructureGrid.prototype.getColumnsKey = function () { return 'Transactions.SalaryStructure'; };
                SalaryStructureGrid.prototype.getDialogType = function () { return Transactions.SalaryStructureDialog; };
                SalaryStructureGrid.prototype.getIdProperty = function () { return Transactions.SalaryStructureRow.idProperty; };
                SalaryStructureGrid.prototype.getInsertPermission = function () { return Transactions.SalaryStructureRow.insertPermission; };
                SalaryStructureGrid.prototype.getLocalTextPrefix = function () { return Transactions.SalaryStructureRow.localTextPrefix; };
                SalaryStructureGrid.prototype.getService = function () { return Transactions.SalaryStructureService.baseUrl; };
                SalaryStructureGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], SalaryStructureGrid);
                return SalaryStructureGrid;
            }(Serenity.EntityGrid));
            Transactions.SalaryStructureGrid = SalaryStructureGrid;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var StudentMarksDialog = /** @class */ (function (_super) {
                __extends(StudentMarksDialog, _super);
                function StudentMarksDialog() {
                    var _this = _super.call(this) || this;
                    _this.form = new Transactions.StudentMarksForm(_this.idPrefix);
                    _this.form.PromotionId.changeSelect2(function (e) {
                        var id = Q.toId(_this.form.PromotionId.value);
                        var k = Transactions.PromotionsRow.getLookup().itemById[id];
                        var criteria;
                        var detail = _this.form.Subjects.getItems();
                        detail = [];
                        _this.form.Subjects.promotionid = id;
                        Transactions.PromotionDetailsService.List({
                            Criteria: Serenity.Criteria.and(criteria, [["PromotionId" /* PromotionId */], '=', id])
                        }, function (response) {
                            SchoolMate.Master.CourseSubjectsService.List({
                                Criteria: Serenity.Criteria.and(criteria, [["CourseId" /* CourseId */], '=', k.ToCourse])
                            }, function (response1) {
                                response1.Entities.forEach(function (item, index) {
                                    var smark;
                                    smark = [];
                                    response.Entities.forEach(function (item2, index2) {
                                        smark.push({ PromotionDetailId: item2.Id, Mark: 0, Student: item2.StudentName });
                                    });
                                    detail.push({ CourseSubjectId: item.Id, StudentMarksDetails: smark, CourseSubject: item.SubjectSubjectName });
                                });
                                _this.form.Subjects.value = detail;
                            });
                        });
                    });
                    return _this;
                }
                StudentMarksDialog.prototype.getFormKey = function () { return Transactions.StudentMarksForm.formKey; };
                StudentMarksDialog.prototype.getIdProperty = function () { return Transactions.StudentMarksRow.idProperty; };
                StudentMarksDialog.prototype.getLocalTextPrefix = function () { return Transactions.StudentMarksRow.localTextPrefix; };
                StudentMarksDialog.prototype.getService = function () { return Transactions.StudentMarksService.baseUrl; };
                StudentMarksDialog.prototype.getDeletePermission = function () { return Transactions.StudentMarksRow.deletePermission; };
                StudentMarksDialog.prototype.getInsertPermission = function () { return Transactions.StudentMarksRow.insertPermission; };
                StudentMarksDialog.prototype.getUpdatePermission = function () { return Transactions.StudentMarksRow.updatePermission; };
                StudentMarksDialog.prototype.updateInterface = function () {
                    var _this = this;
                    _super.prototype.updateInterface.call(this);
                    this.element.find('.add-button').hide();
                    if (!this.isEditMode()) {
                        SchoolMate.Master.CurrentAcadamicYearService.GetCurrentAcadamicYear({}, function (response) {
                            _this.form.AcadamicYearId.value = response.Id.toString();
                        });
                    }
                    else {
                        this.form.Subjects.promotionid = Q.toId(this.form.PromotionId.value);
                    }
                };
                StudentMarksDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], StudentMarksDialog);
                return StudentMarksDialog;
            }(Serenity.EntityDialog));
            Transactions.StudentMarksDialog = StudentMarksDialog;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var StudentMarksGrid = /** @class */ (function (_super) {
                __extends(StudentMarksGrid, _super);
                function StudentMarksGrid(container) {
                    return _super.call(this, container) || this;
                }
                StudentMarksGrid.prototype.getColumnsKey = function () { return 'Transactions.StudentMarks'; };
                StudentMarksGrid.prototype.getDialogType = function () { return Transactions.StudentMarksDialog; };
                StudentMarksGrid.prototype.getIdProperty = function () { return Transactions.StudentMarksRow.idProperty; };
                StudentMarksGrid.prototype.getInsertPermission = function () { return Transactions.StudentMarksRow.insertPermission; };
                StudentMarksGrid.prototype.getLocalTextPrefix = function () { return Transactions.StudentMarksRow.localTextPrefix; };
                StudentMarksGrid.prototype.getService = function () { return Transactions.StudentMarksService.baseUrl; };
                StudentMarksGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], StudentMarksGrid);
                return StudentMarksGrid;
            }(Serenity.EntityGrid));
            Transactions.StudentMarksGrid = StudentMarksGrid;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var DepartmentEditor = /** @class */ (function (_super) {
                __extends(DepartmentEditor, _super);
                function DepartmentEditor(hidden) {
                    return _super.call(this, hidden) || this;
                }
                DepartmentEditor.prototype.getLookupKey = function () {
                    return Transactions.PromotionDetailsRow.lookupKey;
                };
                DepartmentEditor.prototype.getItemText = function (item, lookup) {
                    return item.StudentName;
                };
                DepartmentEditor = __decorate([
                    Serenity.Decorators.registerEditor()
                ], DepartmentEditor);
                return DepartmentEditor;
            }(Serenity.LookupEditorBase));
            Transactions.DepartmentEditor = DepartmentEditor;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var StudentMarksDetailsDialog = /** @class */ (function (_super) {
                __extends(StudentMarksDetailsDialog, _super);
                function StudentMarksDetailsDialog() {
                    var _this = _super.call(this) || this;
                    _this.form = new Transactions.StudentMarksDetailsForm(_this.idPrefix);
                    _this.form.Mark.change(function (e) {
                        if (_this.form.Mark.value > _this.maxmark) {
                            Q.notifyError("Mark should be less than maximum mark(" + _this.maxmark + ")");
                            _this.form.Mark.value = 0;
                        }
                    });
                    return _this;
                }
                StudentMarksDetailsDialog.prototype.getFormKey = function () { return Transactions.StudentMarksDetailsForm.formKey; };
                // protected getIdProperty() { return StudentMarksDetailsRow.idProperty; }
                StudentMarksDetailsDialog.prototype.getLocalTextPrefix = function () { return Transactions.StudentMarksDetailsRow.localTextPrefix; };
                StudentMarksDetailsDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], StudentMarksDetailsDialog);
                return StudentMarksDetailsDialog;
            }(SchoolMate.Common.GridEditorDialog));
            Transactions.StudentMarksDetailsDialog = StudentMarksDetailsDialog;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var StudentMarksDetailsGrid = /** @class */ (function (_super) {
                __extends(StudentMarksDetailsGrid, _super);
                function StudentMarksDetailsGrid(container) {
                    return _super.call(this, container) || this;
                }
                StudentMarksDetailsGrid.prototype.getColumnsKey = function () { return 'Transactions.StudentMarksDetails'; };
                StudentMarksDetailsGrid.prototype.getDialogType = function () { return Transactions.StudentMarksDetailsDialog; };
                StudentMarksDetailsGrid.prototype.getIdProperty = function () { return Transactions.StudentMarksDetailsRow.idProperty; };
                StudentMarksDetailsGrid.prototype.getInsertPermission = function () { return Transactions.StudentMarksDetailsRow.insertPermission; };
                StudentMarksDetailsGrid.prototype.getLocalTextPrefix = function () { return Transactions.StudentMarksDetailsRow.localTextPrefix; };
                StudentMarksDetailsGrid.prototype.getService = function () { return Transactions.StudentMarksDetailsService.baseUrl; };
                StudentMarksDetailsGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], StudentMarksDetailsGrid);
                return StudentMarksDetailsGrid;
            }(Serenity.EntityGrid));
            Transactions.StudentMarksDetailsGrid = StudentMarksDetailsGrid;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var StudentMarksEditor = /** @class */ (function (_super) {
                __extends(StudentMarksEditor, _super);
                function StudentMarksEditor(container) {
                    return _super.call(this, container) || this;
                }
                StudentMarksEditor.prototype.getColumnsKey = function () { return "Transactions.StudentMarksDetails"; };
                StudentMarksEditor.prototype.getDialogType = function () { return Transactions.StudentMarksDetailsDialog; };
                StudentMarksEditor.prototype.getLocalTextPrefix = function () { return Transactions.StudentMarksDetailsRow.localTextPrefix; };
                StudentMarksEditor.prototype.validateEntity = function (row, id) {
                    //var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductID === row.ProductID);
                    //if (sameProduct && this.id(sameProduct) !== id) {
                    //    Q.alert('This product is already in order details!');
                    //    return false;
                    //}
                    // row.SubjectSubjectName = Master.SubjectsRow.getLookup().itemById[row.SubjectId].SubjectName;
                    //row.DriverDriverName = FleetManagement.Parameters.DriverInfoRow.getLookup().itemById[row.DriverId].DriverName;
                    //row.DailyDetailTrxDate = DailyDetailsRow.getLookup().itemById[row.DailyDetailId].TrxDate;
                    //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
                    return true;
                };
                StudentMarksEditor.prototype.initEntityDialog = function (itemType, dialog) {
                    _super.prototype.initEntityDialog.call(this, itemType, dialog);
                    // passing category ID from grid editor to detail dialog
                    dialog.maxmark = this.maxmark;
                };
                StudentMarksEditor = __decorate([
                    Serenity.Decorators.registerClass()
                ], StudentMarksEditor);
                return StudentMarksEditor;
            }(SchoolMate.Common.GridEditorBase));
            Transactions.StudentMarksEditor = StudentMarksEditor;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var StudentMarksSubjectsDialog = /** @class */ (function (_super) {
                __extends(StudentMarksSubjectsDialog, _super);
                function StudentMarksSubjectsDialog() {
                    var _this = _super.call(this) || this;
                    _this.form = new Transactions.StudentMarksSubjectsForm(_this.idPrefix);
                    _this.form.CourseSubjectId.change(function (e) {
                        var id = Q.toId(_this.form.CourseSubjectId.value);
                        if (id > 0) {
                            Transactions.StudentMarksService.GetMaximumMark({
                                promotionid: _this.promotionid,
                                coursesubjectid: id
                            }, function (response) {
                                _this.form.StudentMarksDetails.maxmark = response.MaxMark;
                            });
                        }
                    });
                    return _this;
                }
                StudentMarksSubjectsDialog.prototype.getFormKey = function () { return Transactions.StudentMarksSubjectsForm.formKey; };
                //protected getIdProperty() { return StudentMarksSubjectsRow.idProperty; }
                StudentMarksSubjectsDialog.prototype.getLocalTextPrefix = function () { return Transactions.StudentMarksSubjectsRow.localTextPrefix; };
                StudentMarksSubjectsDialog.prototype.updateInterface = function () {
                    _super.prototype.updateInterface.call(this);
                    this.element.find('.add-button').hide();
                };
                StudentMarksSubjectsDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], StudentMarksSubjectsDialog);
                return StudentMarksSubjectsDialog;
            }(SchoolMate.Common.GridEditorDialog));
            Transactions.StudentMarksSubjectsDialog = StudentMarksSubjectsDialog;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var StudentMarksSubjectsEditor = /** @class */ (function (_super) {
                __extends(StudentMarksSubjectsEditor, _super);
                function StudentMarksSubjectsEditor(container) {
                    return _super.call(this, container) || this;
                }
                StudentMarksSubjectsEditor.prototype.getColumnsKey = function () { return "Transactions.StudentMarksSubjects"; };
                StudentMarksSubjectsEditor.prototype.getDialogType = function () { return Transactions.StudentMarksSubjectsDialog; };
                StudentMarksSubjectsEditor.prototype.getLocalTextPrefix = function () { return Transactions.StudentMarksSubjectsRow.localTextPrefix; };
                StudentMarksSubjectsEditor.prototype.validateEntity = function (row, id) {
                    //var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductID === row.ProductID);
                    //if (sameProduct && this.id(sameProduct) !== id) {
                    //    Q.alert('This product is already in order details!');
                    //    return false;
                    //}
                    // row.SubjectSubjectName = Master.SubjectsRow.getLookup().itemById[row.SubjectId].SubjectName;
                    //row.DriverDriverName = FleetManagement.Parameters.DriverInfoRow.getLookup().itemById[row.DriverId].DriverName;
                    //row.DailyDetailTrxDate = DailyDetailsRow.getLookup().itemById[row.DailyDetailId].TrxDate;
                    //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
                    return true;
                };
                StudentMarksSubjectsEditor.prototype.initEntityDialog = function (itemType, dialog) {
                    _super.prototype.initEntityDialog.call(this, itemType, dialog);
                    // passing category ID from grid editor to detail dialog
                    dialog.promotionid = this.promotionid;
                };
                StudentMarksSubjectsEditor = __decorate([
                    Serenity.Decorators.registerClass()
                ], StudentMarksSubjectsEditor);
                return StudentMarksSubjectsEditor;
            }(SchoolMate.Common.GridEditorBase));
            Transactions.StudentMarksSubjectsEditor = StudentMarksSubjectsEditor;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var StudentMarksSubjectsGrid = /** @class */ (function (_super) {
                __extends(StudentMarksSubjectsGrid, _super);
                function StudentMarksSubjectsGrid(container) {
                    return _super.call(this, container) || this;
                }
                StudentMarksSubjectsGrid.prototype.getColumnsKey = function () { return 'Transactions.StudentMarksSubjects'; };
                StudentMarksSubjectsGrid.prototype.getDialogType = function () { return Transactions.StudentMarksSubjectsDialog; };
                StudentMarksSubjectsGrid.prototype.getIdProperty = function () { return Transactions.StudentMarksSubjectsRow.idProperty; };
                StudentMarksSubjectsGrid.prototype.getInsertPermission = function () { return Transactions.StudentMarksSubjectsRow.insertPermission; };
                StudentMarksSubjectsGrid.prototype.getLocalTextPrefix = function () { return Transactions.StudentMarksSubjectsRow.localTextPrefix; };
                StudentMarksSubjectsGrid.prototype.getService = function () { return Transactions.StudentMarksSubjectsService.baseUrl; };
                StudentMarksSubjectsGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], StudentMarksSubjectsGrid);
                return StudentMarksSubjectsGrid;
            }(Serenity.EntityGrid));
            Transactions.StudentMarksSubjectsGrid = StudentMarksSubjectsGrid;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var TransportDialog = /** @class */ (function (_super) {
                __extends(TransportDialog, _super);
                function TransportDialog() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.form = new Transactions.TransportForm(_this.idPrefix);
                    return _this;
                }
                TransportDialog.prototype.getFormKey = function () { return Transactions.TransportForm.formKey; };
                TransportDialog.prototype.getIdProperty = function () { return Transactions.TransportRow.idProperty; };
                TransportDialog.prototype.getLocalTextPrefix = function () { return Transactions.TransportRow.localTextPrefix; };
                TransportDialog.prototype.getNameProperty = function () { return Transactions.TransportRow.nameProperty; };
                TransportDialog.prototype.getService = function () { return Transactions.TransportService.baseUrl; };
                TransportDialog.prototype.getDeletePermission = function () { return Transactions.TransportRow.deletePermission; };
                TransportDialog.prototype.getInsertPermission = function () { return Transactions.TransportRow.insertPermission; };
                TransportDialog.prototype.getUpdatePermission = function () { return Transactions.TransportRow.updatePermission; };
                TransportDialog = __decorate([
                    Serenity.Decorators.registerClass()
                ], TransportDialog);
                return TransportDialog;
            }(Serenity.EntityDialog));
            Transactions.TransportDialog = TransportDialog;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Transactions;
        (function (Transactions) {
            var TransportGrid = /** @class */ (function (_super) {
                __extends(TransportGrid, _super);
                function TransportGrid(container) {
                    return _super.call(this, container) || this;
                }
                TransportGrid.prototype.getColumnsKey = function () { return 'Transactions.Transport'; };
                TransportGrid.prototype.getDialogType = function () { return Transactions.TransportDialog; };
                TransportGrid.prototype.getIdProperty = function () { return Transactions.TransportRow.idProperty; };
                TransportGrid.prototype.getInsertPermission = function () { return Transactions.TransportRow.insertPermission; };
                TransportGrid.prototype.getLocalTextPrefix = function () { return Transactions.TransportRow.localTextPrefix; };
                TransportGrid.prototype.getService = function () { return Transactions.TransportService.baseUrl; };
                TransportGrid = __decorate([
                    Serenity.Decorators.registerClass()
                ], TransportGrid);
                return TransportGrid;
            }(Serenity.EntityGrid));
            Transactions.TransportGrid = TransportGrid;
        })(Transactions = SchoolMate.Transactions || (SchoolMate.Transactions = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Authorization;
        (function (Authorization) {
            Object.defineProperty(Authorization, 'userDefinition', {
                get: function () {
                    return Q.getRemoteData('UserData');
                }
            });
            function hasPermission(permissionKey) {
                var ud = Authorization.userDefinition;
                return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
            }
            Authorization.hasPermission = hasPermission;
        })(Authorization = SchoolMate.Authorization || (SchoolMate.Authorization = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Membership;
        (function (Membership) {
            var ChangePasswordPanel = /** @class */ (function (_super) {
                __extends(ChangePasswordPanel, _super);
                function ChangePasswordPanel(container) {
                    var _this = _super.call(this, container) || this;
                    _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                    _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                        if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                            return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                        }
                    });
                    _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                        if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                            return Q.text('Validation.PasswordConfirm');
                        }
                    });
                    _this.byId('SubmitButton').click(function (e) {
                        e.preventDefault();
                        if (!_this.validateForm()) {
                            return;
                        }
                        var request = _this.getSaveEntity();
                        Q.serviceCall({
                            url: Q.resolveUrl('~/Account/ChangePassword'),
                            request: request,
                            onSuccess: function (response) {
                                Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                    window.location.href = Q.resolveUrl('~/');
                                });
                            }
                        });
                    });
                    return _this;
                }
                ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
                ChangePasswordPanel = __decorate([
                    Serenity.Decorators.registerClass()
                ], ChangePasswordPanel);
                return ChangePasswordPanel;
            }(Serenity.PropertyPanel));
            Membership.ChangePasswordPanel = ChangePasswordPanel;
        })(Membership = SchoolMate.Membership || (SchoolMate.Membership = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Membership;
        (function (Membership) {
            var ForgotPasswordPanel = /** @class */ (function (_super) {
                __extends(ForgotPasswordPanel, _super);
                function ForgotPasswordPanel(container) {
                    var _this = _super.call(this, container) || this;
                    _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                    _this.byId('SubmitButton').click(function (e) {
                        e.preventDefault();
                        if (!_this.validateForm()) {
                            return;
                        }
                        var request = _this.getSaveEntity();
                        Q.serviceCall({
                            url: Q.resolveUrl('~/Account/ForgotPassword'),
                            request: request,
                            onSuccess: function (response) {
                                Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                    window.location.href = Q.resolveUrl('~/');
                                });
                            }
                        });
                    });
                    return _this;
                }
                ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
                ForgotPasswordPanel = __decorate([
                    Serenity.Decorators.registerClass()
                ], ForgotPasswordPanel);
                return ForgotPasswordPanel;
            }(Serenity.PropertyPanel));
            Membership.ForgotPasswordPanel = ForgotPasswordPanel;
        })(Membership = SchoolMate.Membership || (SchoolMate.Membership = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Membership;
        (function (Membership) {
            var ResetPasswordPanel = /** @class */ (function (_super) {
                __extends(ResetPasswordPanel, _super);
                function ResetPasswordPanel(container) {
                    var _this = _super.call(this, container) || this;
                    _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                    _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                        if (_this.form.ConfirmPassword.value.length < 7) {
                            return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                        }
                    });
                    _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                        if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                            return Q.text('Validation.PasswordConfirm');
                        }
                    });
                    _this.byId('SubmitButton').click(function (e) {
                        e.preventDefault();
                        if (!_this.validateForm()) {
                            return;
                        }
                        var request = _this.getSaveEntity();
                        request.Token = _this.byId('Token').val();
                        Q.serviceCall({
                            url: Q.resolveUrl('~/Account/ResetPassword'),
                            request: request,
                            onSuccess: function (response) {
                                Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                    window.location.href = Q.resolveUrl('~/Account/Login');
                                });
                            }
                        });
                    });
                    return _this;
                }
                ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
                ResetPasswordPanel = __decorate([
                    Serenity.Decorators.registerClass()
                ], ResetPasswordPanel);
                return ResetPasswordPanel;
            }(Serenity.PropertyPanel));
            Membership.ResetPasswordPanel = ResetPasswordPanel;
        })(Membership = SchoolMate.Membership || (SchoolMate.Membership = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
var BitPro;
(function (BitPro) {
    var SchoolMate;
    (function (SchoolMate) {
        var Membership;
        (function (Membership) {
            var SignUpPanel = /** @class */ (function (_super) {
                __extends(SignUpPanel, _super);
                function SignUpPanel(container) {
                    var _this = _super.call(this, container) || this;
                    _this.form = new Membership.SignUpForm(_this.idPrefix);
                    _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                        if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                            return Q.text('Validation.EmailConfirm');
                        }
                    });
                    _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                        if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                            return Q.text('Validation.PasswordConfirm');
                        }
                    });
                    _this.byId('SubmitButton').click(function (e) {
                        e.preventDefault();
                        if (!_this.validateForm()) {
                            return;
                        }
                        Q.serviceCall({
                            url: Q.resolveUrl('~/Account/SignUp'),
                            request: {
                                DisplayName: _this.form.DisplayName.value,
                                Email: _this.form.Email.value,
                                Password: _this.form.Password.value
                            },
                            onSuccess: function (response) {
                                Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                    window.location.href = Q.resolveUrl('~/');
                                });
                            }
                        });
                    });
                    return _this;
                }
                SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
                SignUpPanel = __decorate([
                    Serenity.Decorators.registerClass()
                ], SignUpPanel);
                return SignUpPanel;
            }(Serenity.PropertyPanel));
            Membership.SignUpPanel = SignUpPanel;
        })(Membership = SchoolMate.Membership || (SchoolMate.Membership = {}));
    })(SchoolMate = BitPro.SchoolMate || (BitPro.SchoolMate = {}));
})(BitPro || (BitPro = {}));
//# sourceMappingURL=BitPro.SchoolMate.Web.js.map