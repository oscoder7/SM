#pragma checksum "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Membership\Account\SignUp\AccountSignUp.cshtml" "{8829d00f-11b8-4213-878b-770e8597ac16}" "a435f22870067ab80fc1e9c2dca25e6e85c89a9a100ebbf87d1c852888248136"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Modules_Membership_Account_SignUp_AccountSignUp), @"mvc.1.0.view", @"/Modules/Membership/Account/SignUp/AccountSignUp.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Modules/Membership/Account/SignUp/AccountSignUp.cshtml", typeof(AspNetCore.Modules_Membership_Account_SignUp_AccountSignUp))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA256", @"a435f22870067ab80fc1e9c2dca25e6e85c89a9a100ebbf87d1c852888248136", @"/Modules/Membership/Account/SignUp/AccountSignUp.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA256", @"a991cd26e8d67fedd1583af27e954e895227bbc282be037c108132c2a26da4a1", @"/Modules/_ViewImports.cshtml")]
    public class Modules_Membership_Account_SignUp_AccountSignUp : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 1 "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Membership\Account\SignUp\AccountSignUp.cshtml"
  
    ViewData["Title"] = Texts.Forms.Membership.SignUp.FormTitle;
    ViewData["PageId"] = "SignUp";
    Layout = MVC.Views.Shared._LayoutNoNavigation;

#line default
#line hidden
            BeginContext(161, 112, true);
            WriteLiteral("\r\n<script id=\"Template_Membership_SignUpPanel\" type=\"text/template\">\r\n    <div>\r\n        <h3 class=\"page-title\">");
            EndContext();
            BeginContext(274, 39, false);
#line 9 "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Membership\Account\SignUp\AccountSignUp.cshtml"
                          Write(Texts.Forms.Membership.SignUp.FormTitle);

#line default
#line hidden
            EndContext();
            BeginContext(313, 36, true);
            WriteLiteral("</h3>\r\n        <p class=\"form-info\">");
            EndContext();
            BeginContext(350, 38, false);
#line 10 "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Membership\Account\SignUp\AccountSignUp.cshtml"
                        Write(Texts.Forms.Membership.SignUp.FormInfo);

#line default
#line hidden
            EndContext();
            BeginContext(388, 393, true);
            WriteLiteral(@"</p>
        <form id=""~_Form"" action="""">
            <div class=""s-Form"">
                <div class=""fieldset"">
                    <div id=""~_PropertyGrid""></div>
                    <div class=""clear""></div>
                </div>
                <div class=""buttons"">
                    <button id=""~_SubmitButton"" type=""submit"" class=""btn btn-primary"">
                        ");
            EndContext();
            BeginContext(782, 42, false);
#line 19 "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Membership\Account\SignUp\AccountSignUp.cshtml"
                   Write(Texts.Forms.Membership.SignUp.SubmitButton);

#line default
#line hidden
            EndContext();
            BeginContext(824, 339, true);
            WriteLiteral(@"

                    </button>
                </div>
            </div>
        </form>
    </div>
</script>

<div class=""page-content"">
    <div id=""SignUpPanel"">
    </div>
</div>

<script type=""text/javascript"">
$(function() {
    new BitPro.SchoolMate.Membership.SignUpPanel($('#SignUpPanel')).init();
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
