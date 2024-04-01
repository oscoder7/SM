using Serenity.Navigation;
using MyPages = BitPro.SchoolMate.Administration.Pages;
using Administration = BitPro.SchoolMate.Administration.Pages;

[assembly: NavigationMenu(9000, "Administration", icon: "fa-desktop")]
[assembly: NavigationLink(9000, "Administration/Languages", typeof(Administration.LanguageController), icon: "fa-comments")]
[assembly: NavigationLink(9000, "Administration/Translations", typeof(Administration.TranslationController), icon: "fa-comment-o")]
[assembly: NavigationLink(9000, "Administration/Sergen", typeof(Administration.SergenController), icon: "fa-magic")]
[assembly: NavigationLink(9000, "Administration/Roles", typeof(Administration.RoleController), icon: "fa-lock")]
[assembly: NavigationLink(9000, "Administration/User Management", typeof(Administration.UserController), icon: "fa-users")]
[assembly: NavigationLink(int.MaxValue, "Administration/Tenant", typeof(MyPages.TenantController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Administration/Settings", typeof(MyPages.SettingsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Administration/System Settings", typeof(MyPages.SystemSettingsController), icon: null, Permission = "Administration:Settings")]