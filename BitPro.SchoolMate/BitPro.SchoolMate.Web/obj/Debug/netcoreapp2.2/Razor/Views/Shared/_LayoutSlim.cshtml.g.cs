#pragma checksum "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Views\Shared\_LayoutSlim.cshtml" "{8829d00f-11b8-4213-878b-770e8597ac16}" "25e24bbfd9a19ba6e050e6339ad1fc89fa19002dd273c6df8bafff812ff1dad9"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Shared__LayoutSlim), @"mvc.1.0.view", @"/Views/Shared/_LayoutSlim.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Shared/_LayoutSlim.cshtml", typeof(AspNetCore.Views_Shared__LayoutSlim))]
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
#line 1 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Views\_ViewImports.cshtml"
using Serenity;

#line default
#line hidden
#line 2 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Views\_ViewImports.cshtml"
using Serenity.Web;

#line default
#line hidden
#line 3 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Views\_ViewImports.cshtml"
using BitPro.SchoolMate;

#line default
#line hidden
#line 4 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Views\_ViewImports.cshtml"
using Microsoft.AspNetCore.Html;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"Sha256", @"25e24bbfd9a19ba6e050e6339ad1fc89fa19002dd273c6df8bafff812ff1dad9", @"/Views/Shared/_LayoutSlim.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"Sha256", @"11be79865c8f68cafe9ffcbeeea3829ee0e3ac49880b54f245d2afcc7548d79a", @"/Views/_ViewImports.cshtml")]
    public class Views_Shared__LayoutSlim : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
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
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.PartialTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(0, 17, true);
            WriteLiteral("<!DOCTYPE html>\r\n");
            EndContext();
#line 2 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Views\Shared\_LayoutSlim.cshtml"
  
    Func<string, HtmlString> json = x => new HtmlString(Serenity.JSON.Stringify(x));
    var rtl = System.Globalization.CultureInfo.CurrentUICulture.TextInfo.IsRightToLeft;

#line default
#line hidden
            BeginContext(199, 5, true);
            WriteLiteral("<html");
            EndContext();
            BeginWriteAttribute("lang", " lang=\"", 204, "\"", 266, 1);
#line 6 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Views\Shared\_LayoutSlim.cshtml"
WriteAttributeValue("", 211, System.Globalization.CultureInfo.CurrentUICulture.Name, 211, 55, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(267, 31, true);
            WriteLiteral(" class=\"no-js no-navigation\">\r\n");
            EndContext();
            BeginContext(298, 165, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "25e24bbfd9a19ba6e050e6339ad1fc89fa19002dd273c6df8bafff812ff1dad95078", async() => {
                BeginContext(304, 6, true);
                WriteLiteral("\r\n    ");
                EndContext();
                BeginContext(310, 52, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("partial", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "25e24bbfd9a19ba6e050e6339ad1fc89fa19002dd273c6df8bafff812ff1dad95487", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.PartialTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper);
                BeginWriteTagHelperAttribute();
#line 8 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Views\Shared\_LayoutSlim.cshtml"
       WriteLiteral(MVC.Views.Shared._LayoutSlimHead);

#line default
#line hidden
                __tagHelperStringValueBuffer = EndWriteTagHelperAttribute();
                __Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper.Name = __tagHelperStringValueBuffer;
                __tagHelperExecutionContext.AddTagHelperAttribute("name", __Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper.Name, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(362, 6, true);
                WriteLiteral("\r\n    ");
                EndContext();
                BeginContext(369, 28, false);
#line 9 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Views\Shared\_LayoutSlim.cshtml"
Write(RenderSection("Head", false));

#line default
#line hidden
                EndContext();
                BeginContext(397, 13, true);
                WriteLiteral("\r\n    <title>");
                EndContext();
                BeginContext(412, 17, false);
#line 10 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Views\Shared\_LayoutSlim.cshtml"
       Write(ViewData["Title"]);

#line default
#line hidden
                EndContext();
                BeginContext(430, 26, true);
                WriteLiteral(" - Student Graph</title>\r\n");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(463, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(465, 291, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "25e24bbfd9a19ba6e050e6339ad1fc89fa19002dd273c6df8bafff812ff1dad98925", async() => {
                BeginContext(571, 2, true);
                WriteLiteral("\r\n");
                EndContext();
                BeginContext(574, 38, false);
#line 13 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Views\Shared\_LayoutSlim.cshtml"
Write(RenderSection("PageInitScript", false));

#line default
#line hidden
                EndContext();
                BeginContext(612, 100, true);
                WriteLiteral("\r\n<div id=\"page-outer-nonav\">\r\n    <div id=\"page-container\" class=\"page-container-common\">\r\n        ");
                EndContext();
                BeginContext(713, 12, false);
#line 16 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Views\Shared\_LayoutSlim.cshtml"
   Write(RenderBody());

#line default
#line hidden
                EndContext();
                BeginContext(725, 24, true);
                WriteLiteral("\r\n    </div>\r\n</div>\r\n\r\n");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            BeginAddHtmlAttributeValues(__tagHelperExecutionContext, "id", 3, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            AddHtmlAttributeValue("", 475, "s-", 475, 2, true);
#line 12 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Views\Shared\_LayoutSlim.cshtml"
AddHtmlAttributeValue("", 477, ViewData["PageId"], 477, 21, false);

#line default
#line hidden
            AddHtmlAttributeValue("", 498, "Page", 498, 4, true);
            EndAddHtmlAttributeValues(__tagHelperExecutionContext);
            BeginAddHtmlAttributeValues(__tagHelperExecutionContext, "class", 3, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
#line 12 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Views\Shared\_LayoutSlim.cshtml"
AddHtmlAttributeValue("", 511, ViewData["BodyClass"], 511, 24, false);

#line default
#line hidden
            AddHtmlAttributeValue(" ", 535, "no-navigation", 536, 14, true);
#line 12 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Views\Shared\_LayoutSlim.cshtml"
AddHtmlAttributeValue("", 549, rtl ? " rtl" : "", 549, 20, false);

#line default
#line hidden
            EndAddHtmlAttributeValues(__tagHelperExecutionContext);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(756, 9, true);
            WriteLiteral("\r\n</html>");
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
