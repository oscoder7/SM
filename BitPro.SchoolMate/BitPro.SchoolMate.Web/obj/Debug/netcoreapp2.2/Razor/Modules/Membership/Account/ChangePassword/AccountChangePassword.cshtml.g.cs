#pragma checksum "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Membership\Account\ChangePassword\AccountChangePassword.cshtml" "{8829d00f-11b8-4213-878b-770e8597ac16}" "bd75c00290d88a82383e4d3800ea9cfeaa75a415cb12967278ca5d2276d7c9f7"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Modules_Membership_Account_ChangePassword_AccountChangePassword), @"mvc.1.0.view", @"/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml", typeof(AspNetCore.Modules_Membership_Account_ChangePassword_AccountChangePassword))]
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
#line 1 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\_ViewImports.cshtml"
using Serenity;

#line default
#line hidden
#line 2 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\_ViewImports.cshtml"
using Serenity.Web;

#line default
#line hidden
#line 3 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\_ViewImports.cshtml"
using BitPro.SchoolMate;

#line default
#line hidden
#line 4 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\_ViewImports.cshtml"
using Microsoft.AspNetCore.Html;

#line default
#line hidden
#line 5 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\_ViewImports.cshtml"
using System.Text;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"Sha256", @"bd75c00290d88a82383e4d3800ea9cfeaa75a415cb12967278ca5d2276d7c9f7", @"/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"Sha256", @"a991cd26e8d67fedd1583af27e954e895227bbc282be037c108132c2a26da4a1", @"/Modules/_ViewImports.cshtml")]
    public class Modules_Membership_Account_ChangePassword_AccountChangePassword : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 1 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Membership\Account\ChangePassword\AccountChangePassword.cshtml"
  
    ViewData["Title"] = Texts.Forms.Membership.ChangePassword.FormTitle;
    ViewData["PageId"] = "ChangePassword";

#line default
#line hidden
            BeginContext(125, 112, true);
            WriteLiteral("\r\n<script id=\"Template_Membership_ChangePasswordPanel\" type=\"text/template\">\r\n<div>\r\n    <h3 class=\"page-title\">");
            EndContext();
            BeginContext(238, 47, false);
#line 8 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Membership\Account\ChangePassword\AccountChangePassword.cshtml"
                      Write(Texts.Forms.Membership.ChangePassword.FormTitle);

#line default
#line hidden
            EndContext();
            BeginContext(285, 400, true);
            WriteLiteral(@"</h3>
    <form id=""~_Form"" action="""">
        <div class=""s-Form"">
            <div class=""fieldset ui-widget ui-widget-content ui-corner-all"">
                <div id=""~_PropertyGrid""></div>
                <div class=""clear""></div>
            </div>
            <div class=""buttons"">
                <button id=""~_SubmitButton"" type=""submit"" class=""btn btn-primary"">
                    ");
            EndContext();
            BeginContext(686, 50, false);
#line 17 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Membership\Account\ChangePassword\AccountChangePassword.cshtml"
               Write(Texts.Forms.Membership.ChangePassword.SubmitButton);

#line default
#line hidden
            EndContext();
            BeginContext(736, 341, true);
            WriteLiteral(@"
                </button>
            </div>
        </div>
    </form>
</div>
</script>

<div class=""page-content"">
    <div id=""ChangePasswordPanel"">
    </div>
</div>

<script type=""text/javascript"">
$(function() {
    new BitPro.SchoolMate.Membership.ChangePasswordPanel($('#ChangePasswordPanel')).init();
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