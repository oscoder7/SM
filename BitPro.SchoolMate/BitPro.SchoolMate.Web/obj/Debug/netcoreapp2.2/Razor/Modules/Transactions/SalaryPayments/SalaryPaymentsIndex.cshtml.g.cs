#pragma checksum "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\SalaryPayments\SalaryPaymentsIndex.cshtml" "{8829d00f-11b8-4213-878b-770e8597ac16}" "f634cb65270d3dbf57a3a90f9c8ef246a683b4475babcc5aa694315b39d80ec3"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Modules_Transactions_SalaryPayments_SalaryPaymentsIndex), @"mvc.1.0.view", @"/Modules/Transactions/SalaryPayments/SalaryPaymentsIndex.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Modules/Transactions/SalaryPayments/SalaryPaymentsIndex.cshtml", typeof(AspNetCore.Modules_Transactions_SalaryPayments_SalaryPaymentsIndex))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"Sha256", @"f634cb65270d3dbf57a3a90f9c8ef246a683b4475babcc5aa694315b39d80ec3", @"/Modules/Transactions/SalaryPayments/SalaryPaymentsIndex.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"Sha256", @"a991cd26e8d67fedd1583af27e954e895227bbc282be037c108132c2a26da4a1", @"/Modules/_ViewImports.cshtml")]
    public class Modules_Transactions_SalaryPayments_SalaryPaymentsIndex : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 1 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\SalaryPayments\SalaryPaymentsIndex.cshtml"
  
    ViewData["Title"] = Serenity.LocalText.Get("Db.Transactions.SalaryPayments.EntityPlural");

#line default
#line hidden
            BeginContext(103, 249, true);
            WriteLiteral("\r\n<div id=\"GridDiv\"></div>\r\n\r\n<script type=\"text/javascript\">\r\n    jQuery(function () {\r\n        new BitPro.SchoolMate.Transactions.SalaryPaymentsGrid($(\'#GridDiv\'), {}).init();\r\n\r\n        Q.initFullHeightGridPage($(\'#GridDiv\'));\r\n    });\r\n</script>");
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
