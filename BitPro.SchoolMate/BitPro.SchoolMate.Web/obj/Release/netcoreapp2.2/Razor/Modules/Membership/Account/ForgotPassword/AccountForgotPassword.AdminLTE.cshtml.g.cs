#pragma checksum "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Membership\Account\ForgotPassword\AccountForgotPassword.AdminLTE.cshtml" "{8829d00f-11b8-4213-878b-770e8597ac16}" "3234e9e522ceca1676b64b34c2790a0947a3b283b87b6ec77f836c426858aa3d"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Modules_Membership_Account_ForgotPassword_AccountForgotPassword_AdminLTE), @"mvc.1.0.view", @"/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.AdminLTE.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.AdminLTE.cshtml", typeof(AspNetCore.Modules_Membership_Account_ForgotPassword_AccountForgotPassword_AdminLTE))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\_ViewImports.cshtml"
using Serenity;

#line default
#line hidden
#line 2 "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\_ViewImports.cshtml"
using Serenity.Web;

#line default
#line hidden
#line 3 "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\_ViewImports.cshtml"
using BitPro.SchoolMate;

#line default
#line hidden
#line 4 "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\_ViewImports.cshtml"
using Microsoft.AspNetCore.Html;

#line default
#line hidden
#line 5 "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\_ViewImports.cshtml"
using System.Text;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA256", @"3234e9e522ceca1676b64b34c2790a0947a3b283b87b6ec77f836c426858aa3d", @"/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.AdminLTE.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA256", @"a991cd26e8d67fedd1583af27e954e895227bbc282be037c108132c2a26da4a1", @"/Modules/_ViewImports.cshtml")]
    public class Modules_Membership_Account_ForgotPassword_AccountForgotPassword_AdminLTE : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 1 "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Membership\Account\ForgotPassword\AccountForgotPassword.AdminLTE.cshtml"
  
    ViewData["Title"] = Texts.Forms.Membership.ForgotPassword.FormTitle;
    ViewData["PageId"] = "ForgotPassword";
    ViewData["BodyClass"] = "login-page";
    Layout = MVC.Views.Shared._LayoutNoNavigation;

#line default
#line hidden
            BeginContext(220, 391, true);
            WriteLiteral(@"
<script id=""Template_Membership_ForgotPasswordPanel"" type=""text/template"">
    <div class=""s-Form"">
        <form id=""~_Form"" action="""">            
            <div id=""~_PropertyGrid""></div>
            <div class=""row"">
                <div class=""col-xs-9 col-xs-offset-3"">
                    <button id=""~_SubmitButton"" type=""submit"" class=""btn btn-primary btn-block btn-flat"">");
            EndContext();
            BeginContext(612, 50, false);
#line 14 "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Membership\Account\ForgotPassword\AccountForgotPassword.AdminLTE.cshtml"
                                                                                                    Write(Texts.Forms.Membership.ForgotPassword.SubmitButton);

#line default
#line hidden
            EndContext();
            BeginContext(662, 167, true);
            WriteLiteral("</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>    \r\n</script>\r\n\r\n<div class=\"login-box\">\r\n    <div class=\"login-logo\">\r\n        <b>");
            EndContext();
            BeginContext(830, 26, false);
#line 23 "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Membership\Account\ForgotPassword\AccountForgotPassword.AdminLTE.cshtml"
      Write(Texts.Navigation.SiteTitle);

#line default
#line hidden
            EndContext();
            BeginContext(856, 83, true);
            WriteLiteral("</b>\r\n    </div>\r\n    <div class=\"login-box-body\">\r\n        <h3 class=\"page-title\">");
            EndContext();
            BeginContext(940, 47, false);
#line 26 "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Membership\Account\ForgotPassword\AccountForgotPassword.AdminLTE.cshtml"
                          Write(Texts.Forms.Membership.ForgotPassword.FormTitle);

#line default
#line hidden
            EndContext();
            BeginContext(987, 40, true);
            WriteLiteral("</h3>\r\n        <p class=\"login-box-msg\">");
            EndContext();
            BeginContext(1028, 46, false);
#line 27 "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Membership\Account\ForgotPassword\AccountForgotPassword.AdminLTE.cshtml"
                            Write(Texts.Forms.Membership.ForgotPassword.FormInfo);

#line default
#line hidden
            EndContext();
            BeginContext(1074, 74, true);
            WriteLiteral("</p>\r\n        <div id=\"ForgotPasswordPanel\">\r\n        </div>  \r\n        <a");
            EndContext();
            BeginWriteAttribute("href", " href=\"", 1148, "\"", 1186, 1);
#line 30 "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Membership\Account\ForgotPassword\AccountForgotPassword.AdminLTE.cshtml"
WriteAttributeValue("", 1155, Url.Content("~/Account/Login"), 1155, 31, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(1187, 21, true);
            WriteLiteral(" class=\"text-center\">");
            EndContext();
            BeginContext(1209, 49, false);
#line 30 "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Membership\Account\ForgotPassword\AccountForgotPassword.AdminLTE.cshtml"
                                                                 Write(Texts.Forms.Membership.ForgotPassword.BackToLogin);

#line default
#line hidden
            EndContext();
            BeginContext(1258, 335, true);
            WriteLiteral(@"</a>
    </div>
</div>

<script type=""text/javascript"">
$(function() {
    new BitPro.SchoolMate.Membership.ForgotPasswordPanel($('#ForgotPasswordPanel')).init();
    $('.field.Email').addClass(""has-icon"");
    $('.emaildomain').after(""<span class='glyphicon glyphicon-envelope form-control-feedback'></span>"");
});
</script>");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591