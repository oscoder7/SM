#pragma checksum "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Common\Reporting\ReportPage.cshtml" "{8829d00f-11b8-4213-878b-770e8597ac16}" "cbe7d97e0351c57aacf2cf975e14725e425ab61813e69fbe07310e5062f815df"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Modules_Common_Reporting_ReportPage), @"mvc.1.0.view", @"/Modules/Common/Reporting/ReportPage.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Modules/Common/Reporting/ReportPage.cshtml", typeof(AspNetCore.Modules_Common_Reporting_ReportPage))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"Sha256", @"cbe7d97e0351c57aacf2cf975e14725e425ab61813e69fbe07310e5062f815df", @"/Modules/Common/Reporting/ReportPage.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"Sha256", @"a991cd26e8d67fedd1583af27e954e895227bbc282be037c108132c2a26da4a1", @"/Modules/_ViewImports.cshtml")]
    public class Modules_Common_Reporting_ReportPage : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<BitPro.SchoolMate.ReportTree>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(37, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 3 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Common\Reporting\ReportPage.cshtml"
  
    ViewData["Title"] = "Reports";

#line default
#line hidden
            BeginContext(82, 4, true);
            WriteLiteral("\r\n\r\n");
            EndContext();
            BeginContext(2012, 355, true);
            WriteLiteral(@"

<div id=""ReportPage"" class=""s-DataGrid"">
    <div class=""grid-title"">
        <div class=""title-text"">Reports</div>
    </div>
    <div class=""grid-toolbar s-Toolbar clearfix"">
        <div class=""s-QuickSearchBar""><input /></div>
    </div>
    <div class=""report-box"">
        <div class=""report-list center"">
            <ul>
            ");
            EndContext();
            BeginContext(2368, 22, false);
#line 76 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Common\Reporting\ReportPage.cshtml"
       Write(renderMenu(Model.Root));

#line default
#line hidden
            EndContext();
            BeginContext(2390, 257, true);
            WriteLiteral(@"
            </ul>
        </div>
    </div>
</div>

<script type=""text/javascript"">
    jQuery(function () {
        new BitPro.SchoolMate.Common.ReportPage($('#ReportPage'));
        Q.initFullHeightGridPage($('#ReportPage'));
    });
</script>");
            EndContext();
        }
        #pragma warning restore 1998
#line 9 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Common\Reporting\ReportPage.cshtml"
 
    public HtmlString renderMenu(BitPro.SchoolMate.ReportTree.Category category)
    {
        var sb = new StringBuilder();
        renderItems(sb, category);
        return new HtmlString(sb.ToString());
    }

    public void renderItems(System.Text.StringBuilder sb, BitPro.SchoolMate.ReportTree.Category category)
    {
        if (category.Reports != null)
        {
            int i = 0;
            foreach (var x in category.Reports)
            {
                sb.Append("<li class='report-item ");
                sb.Append(i++ % 2 == 0 ? "odd" : "even");
                sb.Append("'>");
                sb.Append("<a href='#' class='report-link' data-key='");
                sb.Append(x.Key);
                sb.Append("'>");
                sb.Append(HtmlEncoder.Encode(x.Title));
                sb.Append("</a></li>");
            }
        }

        if (category.SubCategories != null)
        {
            foreach (var x in category.SubCategories)
            {
                renderTree(sb, x);
            }
        }
    }


    public void renderTree(System.Text.StringBuilder sb, BitPro.SchoolMate.ReportTree.Category category)
    {
        sb.AppendLine("<li class='category expanded'>");
        sb.AppendLine("<div class='line'><span class='toggle'></span><span class='caption'>");
        sb.AppendLine(HtmlEncoder.Encode(category.Title));
        sb.AppendLine("</span></div>");

        if (category.SubCategories != null &&
            category.SubCategories.Count() > 0 ||
            category.Reports != null && category.Reports.Count() > 0)
        {
            sb.AppendLine("<ul class='" + (category.Reports != null ? "has-reports" : "") +
                "' style='display: block;'>");
            renderItems(sb, category);
            sb.AppendLine("</ul>");
        }
        sb.AppendLine("</li>");
    }

#line default
#line hidden
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<BitPro.SchoolMate.ReportTree> Html { get; private set; }
    }
}
#pragma warning restore 1591
