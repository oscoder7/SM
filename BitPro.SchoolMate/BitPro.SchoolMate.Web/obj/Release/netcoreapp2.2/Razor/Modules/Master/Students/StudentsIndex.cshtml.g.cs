#pragma checksum "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Master\Students\StudentsIndex.cshtml" "{8829d00f-11b8-4213-878b-770e8597ac16}" "07111ac7e89c599a242d6cc2122681d61d7377f01be7d1f7f29a311a91109cc5"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Modules_Master_Students_StudentsIndex), @"mvc.1.0.view", @"/Modules/Master/Students/StudentsIndex.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Modules/Master/Students/StudentsIndex.cshtml", typeof(AspNetCore.Modules_Master_Students_StudentsIndex))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA256", @"07111ac7e89c599a242d6cc2122681d61d7377f01be7d1f7f29a311a91109cc5", @"/Modules/Master/Students/StudentsIndex.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA256", @"a991cd26e8d67fedd1583af27e954e895227bbc282be037c108132c2a26da4a1", @"/Modules/_ViewImports.cshtml")]
    public class Modules_Master_Students_StudentsIndex : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 1 "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Master\Students\StudentsIndex.cshtml"
  
    ViewData["Title"] = Serenity.LocalText.Get("Db.Master.Students.EntityPlural");

#line default
#line hidden
            BeginContext(91, 237, true);
            WriteLiteral("\r\n<div id=\"GridDiv\"></div>\r\n\r\n<script type=\"text/javascript\">\r\n    jQuery(function () {\r\n        new BitPro.SchoolMate.Master.StudentsGrid($(\'#GridDiv\'), {}).init();\r\n\r\n        Q.initFullHeightGridPage($(\'#GridDiv\'));\r\n    });\r\n</script>");
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
