#pragma checksum "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\ClassWiseFeeCollection.cshtml" "{8829d00f-11b8-4213-878b-770e8597ac16}" "3e6305faf35c8406dae9c6a73632db585f27e9909aba5bd944ec361cddeb2566"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Modules_Transactions_Reports_ClassWiseFeeCollection), @"mvc.1.0.view", @"/Modules/Transactions/Reports/ClassWiseFeeCollection.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Modules/Transactions/Reports/ClassWiseFeeCollection.cshtml", typeof(AspNetCore.Modules_Transactions_Reports_ClassWiseFeeCollection))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA256", @"3e6305faf35c8406dae9c6a73632db585f27e9909aba5bd944ec361cddeb2566", @"/Modules/Transactions/Reports/ClassWiseFeeCollection.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA256", @"a991cd26e8d67fedd1583af27e954e895227bbc282be037c108132c2a26da4a1", @"/Modules/_ViewImports.cshtml")]
    public class Modules_Transactions_Reports_ClassWiseFeeCollection : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<BitPro.SchoolMate.Transactions.Pages.ClassWiseFeeCollectionReport.ClassWiseFeeCollectionReporViewtData>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 2 "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\ClassWiseFeeCollection.cshtml"
 if ((bool?)ViewData["Printing"] == true)
{
    Layout = MVC.Views.Shared._LayoutNoNavigation;
}

#line default
#line hidden
            DefineSection("Head", async() => {
                BeginContext(227, 83, true);
                WriteLiteral("\r\n\r\n    <link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n\r\n");
                EndContext();
            }
            );
            BeginContext(313, 923, true);
            WriteLiteral(@"<style>
    * {
        box-sizing: border-box;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
    }

    /* Float four columns side by side */
    .column {
        float: left;
        width: 25%;
        padding: 0 10px;
    }

    /* Remove extra left and right margins, due to padding */
    .row {
        margin: 0 -5px;
    }

        /* Clear floats after the columns */
        .row:after {
            content: """";
            display: table;
            clear: both;
        }

    /* Responsive columns */


    /* Style the counter cards */
    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        padding: 16px;
        text-align: center;
        background-color: #f1f1f1;
    }
</style>

<div class=""w3-container"" id=""pardiv"">
    <div class=""col-md-6 card"" style=""padding:5px"">
        <h1>Class Wise Fee Collection</h1>From:");
            EndContext();
            BeginContext(1237, 49, false);
#line 53 "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\ClassWiseFeeCollection.cshtml"
                                          Write(Model.aboutreport.FromDate.ToString("dd-MMM-yyy"));

#line default
#line hidden
            EndContext();
            BeginContext(1286, 4, true);
            WriteLiteral(" To:");
            EndContext();
            BeginContext(1291, 47, false);
#line 53 "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\ClassWiseFeeCollection.cshtml"
                                                                                                Write(Model.aboutreport.ToDate.ToString("dd-MMM-yyy"));

#line default
#line hidden
            EndContext();
            BeginContext(1338, 329, true);
            WriteLiteral(@"
        <table class=""w3-table-all"">
            <thead>
                <tr class=""w3-red"">
                    <th>Date</th>
                    <th>Class</th>
                    <th>PaidStudents</th>
                    <th>TotalCollectedAmount</th>
                </tr>
            </thead>
            <tbody>
");
            EndContext();
#line 64 "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\ClassWiseFeeCollection.cshtml"
                 foreach (var d in Model.Details)
                {

#line default
#line hidden
            BeginContext(1737, 46, true);
            WriteLiteral("                <tr>\r\n                    <td>");
            EndContext();
            BeginContext(1784, 29, false);
#line 67 "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\ClassWiseFeeCollection.cshtml"
                   Write(d.Date.ToString("dd-MMM-yyy"));

#line default
#line hidden
            EndContext();
            BeginContext(1813, 31, true);
            WriteLiteral("</td>\r\n                    <td>");
            EndContext();
            BeginContext(1845, 7, false);
#line 68 "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\ClassWiseFeeCollection.cshtml"
                   Write(d.Class);

#line default
#line hidden
            EndContext();
            BeginContext(1852, 57, true);
            WriteLiteral("</td>\r\n                    <td style=\"text-align:center\">");
            EndContext();
            BeginContext(1910, 14, false);
#line 69 "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\ClassWiseFeeCollection.cshtml"
                                             Write(d.PaidStudents);

#line default
#line hidden
            EndContext();
            BeginContext(1924, 57, true);
            WriteLiteral("</td>\r\n                    <td style=\"text-align:center\">");
            EndContext();
            BeginContext(1982, 22, false);
#line 70 "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\ClassWiseFeeCollection.cshtml"
                                             Write(d.TotalCollectedAmount);

#line default
#line hidden
            EndContext();
            BeginContext(2004, 30, true);
            WriteLiteral("</td>\r\n                </tr>\r\n");
            EndContext();
#line 72 "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\ClassWiseFeeCollection.cshtml"
                }

#line default
#line hidden
            BeginContext(2053, 224, true);
            WriteLiteral("            </tbody>\r\n            <tr>\r\n                <td>Total</td>\r\n                <td style=\"text-align:center\"></td>\r\n                <td style=\"text-align:center\"></td>\r\n                <td style=\"text-align:center\">");
            EndContext();
            BeginContext(2278, 30, false);
#line 78 "D:\BitPro Work\BitPro.SchoolMate.New\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\ClassWiseFeeCollection.cshtml"
                                         Write(Model.aboutreport.totalcollect);

#line default
#line hidden
            EndContext();
            BeginContext(2308, 64, true);
            WriteLiteral("</td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n</div>\r\n");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<BitPro.SchoolMate.Transactions.Pages.ClassWiseFeeCollectionReport.ClassWiseFeeCollectionReporViewtData> Html { get; private set; }
    }
}
#pragma warning restore 1591
