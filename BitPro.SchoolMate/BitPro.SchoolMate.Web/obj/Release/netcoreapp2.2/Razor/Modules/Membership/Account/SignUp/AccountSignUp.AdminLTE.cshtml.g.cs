#pragma checksum "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Membership\Account\SignUp\AccountSignUp.AdminLTE.cshtml" "{8829d00f-11b8-4213-878b-770e8597ac16}" "8144034dd09a0cab4853dba1219c95ff23b718b901829bf62c6ea5e3156393b8"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Modules_Membership_Account_SignUp_AccountSignUp_AdminLTE), @"mvc.1.0.view", @"/Modules/Membership/Account/SignUp/AccountSignUp.AdminLTE.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Modules/Membership/Account/SignUp/AccountSignUp.AdminLTE.cshtml", typeof(AspNetCore.Modules_Membership_Account_SignUp_AccountSignUp_AdminLTE))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA256", @"8144034dd09a0cab4853dba1219c95ff23b718b901829bf62c6ea5e3156393b8", @"/Modules/Membership/Account/SignUp/AccountSignUp.AdminLTE.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA256", @"a991cd26e8d67fedd1583af27e954e895227bbc282be037c108132c2a26da4a1", @"/Modules/_ViewImports.cshtml")]
    public class Modules_Membership_Account_SignUp_AccountSignUp_AdminLTE : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("rel", new global::Microsoft.AspNetCore.Html.HtmlString("stylesheet"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/Content/iCheck/square/blue.css"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/Scripts/jquery.icheck.min.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/Account/Login"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("text-center"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 1 "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Membership\Account\SignUp\AccountSignUp.AdminLTE.cshtml"
  
    ViewData["Title"] = Texts.Forms.Membership.SignUp.FormTitle;
    ViewData["PageId"] = "SignUp";
    ViewData["BodyClass"] = "register-page";
    Layout = MVC.Views.Shared._LayoutNoNavigation;

#line default
#line hidden
            DefineSection("Head", async() => {
                BeginContext(222, 6, true);
                WriteLiteral("\r\n    ");
                EndContext();
                BeginContext(228, 65, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "8144034dd09a0cab4853dba1219c95ff23b718b901829bf62c6ea5e3156393b86466", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(293, 6, true);
                WriteLiteral("\r\n    ");
                EndContext();
                BeginContext(299, 54, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "8144034dd09a0cab4853dba1219c95ff23b718b901829bf62c6ea5e3156393b87822", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(353, 2, true);
                WriteLiteral("\r\n");
                EndContext();
            }
            );
            BeginContext(358, 512, true);
            WriteLiteral(@"<script id=""Template_Membership_SignUpPanel"" type=""text/template"">
    <div class=""s-Form"">
        <form id=""~_Form"" action="""">
            <div class=""fieldset"">
                <div id=""~_PropertyGrid""></div>
                <div class=""clear""></div>
            </div>
            <div class=""row"" style=""margin-top: 10px"">
                <div class=""col-xs-7"">
                    <div class=""checkbox icheck"">
                        <label>
                            <input type=""checkbox""> ");
            EndContext();
            BeginContext(871, 41, false);
#line 22 "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Membership\Account\SignUp\AccountSignUp.AdminLTE.cshtml"
                                               Write(Texts.Forms.Membership.SignUp.AcceptTerms);

#line default
#line hidden
            EndContext();
            BeginContext(912, 233, true);
            WriteLiteral("\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-5\">\r\n                    <button id=\"~_SubmitButton\" type=\"submit\" class=\"btn btn-primary btn-block btn-flat\">");
            EndContext();
            BeginContext(1146, 42, false);
#line 27 "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Membership\Account\SignUp\AccountSignUp.AdminLTE.cshtml"
                                                                                                    Write(Texts.Forms.Membership.SignUp.SubmitButton);

#line default
#line hidden
            EndContext();
            BeginContext(1188, 166, true);
            WriteLiteral("</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</script>\r\n\r\n<div class=\"register-box\">\r\n    <div class=\"register-logo\">\r\n        ");
            EndContext();
            BeginContext(1355, 26, false);
#line 36 "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Membership\Account\SignUp\AccountSignUp.AdminLTE.cshtml"
   Write(Texts.Navigation.SiteTitle);

#line default
#line hidden
            EndContext();
            BeginContext(1381, 82, true);
            WriteLiteral("\r\n    </div>\r\n    <div class=\"register-box-body\">\r\n        <h3 class=\"page-title\">");
            EndContext();
            BeginContext(1464, 39, false);
#line 39 "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Membership\Account\SignUp\AccountSignUp.AdminLTE.cshtml"
                          Write(Texts.Forms.Membership.SignUp.FormTitle);

#line default
#line hidden
            EndContext();
            BeginContext(1503, 40, true);
            WriteLiteral("</h3>\r\n        <p class=\"login-box-msg\">");
            EndContext();
            BeginContext(1544, 38, false);
#line 40 "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Membership\Account\SignUp\AccountSignUp.AdminLTE.cshtml"
                            Write(Texts.Forms.Membership.SignUp.FormInfo);

#line default
#line hidden
            EndContext();
            BeginContext(1582, 62, true);
            WriteLiteral("</p>\r\n        <div id=\"SignUpPanel\">\r\n        </div>\r\n        ");
            EndContext();
            BeginContext(1644, 92, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "8144034dd09a0cab4853dba1219c95ff23b718b901829bf62c6ea5e3156393b812624", async() => {
                BeginContext(1691, 41, false);
#line 43 "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Membership\Account\SignUp\AccountSignUp.AdminLTE.cshtml"
                                                 Write(Texts.Forms.Membership.SignUp.BackToLogin);

#line default
#line hidden
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_4);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(1736, 893, true);
            WriteLiteral(@"
    </div>
</div>

<script type=""text/javascript"">
$(function() {
    new BitPro.SchoolMate.Membership.SignUpPanel($('#SignUpPanel')).init();
    $('.field.DisplayName,.field.Email,.field.ConfirmEmail,.field.Password,.field.ConfirmPassword').addClass(""has-icon"");
    $('.field.DisplayName input').after(""<span class='glyphicon glyphicon-user form-control-feedback'></span>"");
    $('.emaildomain').after(""<span class='glyphicon glyphicon-envelope form-control-feedback'></span>"");
    $('.field.Password input').after(""<span class='glyphicon glyphicon-lock form-control-feedback'></span>"");
    $('.field.ConfirmPassword input').after(""<span class='glyphicon glyphicon-log-in form-control-feedback'></span>"");
    $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%'
    });
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
