#pragma checksum "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml" "{8829d00f-11b8-4213-878b-770e8597ac16}" "a75bd64bc973a6ac83d9257d7b595997a484279c083fc5590ca08e7e9d964d2d"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Modules_Transactions_Reports_TrialBalance), @"mvc.1.0.view", @"/Modules/Transactions/Reports/TrialBalance.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Modules/Transactions/Reports/TrialBalance.cshtml", typeof(AspNetCore.Modules_Transactions_Reports_TrialBalance))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"Sha256", @"a75bd64bc973a6ac83d9257d7b595997a484279c083fc5590ca08e7e9d964d2d", @"/Modules/Transactions/Reports/TrialBalance.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"Sha256", @"a991cd26e8d67fedd1583af27e954e895227bbc282be037c108132c2a26da4a1", @"/Modules/_ViewImports.cshtml")]
    public class Modules_Transactions_Reports_TrialBalance : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<BitPro.SchoolMate.Transactions.Pages.TrialBalanceReport.TrialBalanceViewtData>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 2 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
 if ((bool?)ViewData["Printing"] == true)
{
    Layout = MVC.Views.Shared._LayoutNoNavigation;
}

#line default
#line hidden
            BeginContext(187, 133, true);
            WriteLiteral("<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css\">\r\n\r\n\r\n<section class=\"invoice\">\r\n");
            EndContext();
            BeginContext(682, 218, true);
            WriteLiteral("    <div class=\"row\">\r\n        <div class=\"col-sm-8\">\r\n            <h2 class=\"page-header\" style=\"text-align:center\">Trial Balance</h2>\r\n        </div>\r\n        <div class=\"col-sm-12\" style=\"text-align:center\">As Date:");
            EndContext();
            BeginContext(901, 47, false);
#line 23 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                                                            Write(Model.aboutreport.AsDate.ToString("dd-MMM-yyy"));

#line default
#line hidden
            EndContext();
            BeginContext(948, 1161, true);
            WriteLiteral(@"</div>
    </div>
    <!-- info row -->
    <!-- /.row -->
    <!-- Table row -->
    <div class=""container"">

        <table class=""table table-striped"">
            <thead>
                <tr>
                    <th width=""200px"" style=""text-align:left""><strong style=""font-size:12px;font-style:normal"">Ledger</strong></th>
                    <th width=""200px"" style=""text-align:left""><strong style=""font-size:12px;font-style:normal"">Sub Account</strong></th>
                    <th width=""200px"" style=""text-align:left""><strong style=""font-size:12px;font-style:normal""></strong>Grouping Level</th>
                    <th width=""200px"" style=""text-align:right""><strong style=""font-size:12px;font-style:normal"">Total Debit Amount</strong></th>
                    <th width=""200px"" style=""text-align:right""><strong style=""font-size:12px;font-style:normal"">Total Credit Amount</strong></th>
                    <th width=""200px"" style=""text-align:right""><strong style=""font-size:12px;font-style:normal"">N");
            WriteLiteral("et Balance</strong></th>\r\n\r\n\r\n                    \r\n\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n               \r\n");
            EndContext();
#line 47 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                 foreach (var d in Model.Details.Where(i => i.GroupingID == 1))
                {

#line default
#line hidden
            BeginContext(2209, 119, true);
            WriteLiteral("                    <tr>\r\n                        <td><strong style=\"font-size:12px;font-weight:800;font-style:normal\">");
            EndContext();
            BeginContext(2329, 13, false);
#line 50 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                                                                                        Write(d.AccountHead);

#line default
#line hidden
            EndContext();
            BeginContext(2342, 109, true);
            WriteLiteral("</strong></td>\r\n                        <td><strong style=\"font-size:10px;font-weight:800;font-style:normal\">");
            EndContext();
            BeginContext(2452, 12, false);
#line 51 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                                                                                        Write(d.SubAccount);

#line default
#line hidden
            EndContext();
            BeginContext(2464, 109, true);
            WriteLiteral("</strong></td>\r\n                        <td><strong style=\"font-size:10px;font-weight:800;font-style:normal\">");
            EndContext();
            BeginContext(2574, 12, false);
#line 52 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                                                                                        Write(d.GroupingID);

#line default
#line hidden
            EndContext();
            BeginContext(2586, 186, true);
            WriteLiteral("</strong></td>\r\n\r\n                        <td style=\"text-align:right\">\r\n                            <strong style=\"font-size:12px;font-weight:800;font-style:normal;text-align:center\">\r\n");
            EndContext();
#line 56 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                                 if (d.TotalDebitAmount == 0) { }
                                else
                                {
                                    

#line default
#line hidden
            BeginContext(2949, 42, false);
#line 59 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                               Write(String.Format("{0:N}", d.TotalDebitAmount));

#line default
#line hidden
            EndContext();
#line 59 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                                                                               
                                }

#line default
#line hidden
            BeginContext(3028, 238, true);
            WriteLiteral("                            </strong>\r\n                        </td>\r\n                        <td style=\"text-align:right\">\r\n                            <strong style=\"font-size:12px;font-weight:800;font-style:normal;text-align:center\">\r\n");
            EndContext();
#line 65 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                                 if (d.TotalCreditAmount == 0) { }
                                else
                                {
                                    

#line default
#line hidden
            BeginContext(3444, 43, false);
#line 68 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                               Write(String.Format("{0:N}", d.TotalCreditAmount));

#line default
#line hidden
            EndContext();
#line 68 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                                                                                
                                }

#line default
#line hidden
            BeginContext(3524, 276, true);
            WriteLiteral(@"                            </strong>
                        </td>

                        <td style=""text-align:right"">
                            <strong style=""font-size:12px;font-style:normal;text-align:center"">
                                <c>&nbsp;&nbsp;</c> ");
            EndContext();
            BeginContext(3801, 77, false);
#line 75 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                                               Write(String.Format("{0:N}", @Math.Abs(@d.TotalDebitAmount - @d.TotalCreditAmount)));

#line default
#line hidden
            EndContext();
            BeginContext(3878, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 76 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                                 if ((d.TotalDebitAmount - d.TotalCreditAmount) < 0)
                                {

#line default
#line hidden
            BeginContext(4001, 47, true);
            WriteLiteral("                                    <b>Cr</b>\r\n");
            EndContext();
#line 79 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                                }
                                else
                                {

#line default
#line hidden
            BeginContext(4156, 47, true);
            WriteLiteral("                                    <b>Dr</b>\r\n");
            EndContext();
#line 83 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                                    ;
                                }

#line default
#line hidden
            BeginContext(4277, 99, true);
            WriteLiteral("                            </strong>\r\n                        </td>\r\n\r\n                    </tr>\r\n");
            EndContext();
#line 89 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                     foreach (var c in Model.Details.Where(l => l.AccountHead == d.AccountHead && l.GroupingID == 0))
                    {

#line default
#line hidden
            BeginContext(4518, 208, true);
            WriteLiteral("                        <tr>\r\n                            <td><strong style=\"font-size:10px;font-style:normal\"></strong></td>\r\n                            <td><strong style=\"font-size:10px;font-style:normal\">");
            EndContext();
            BeginContext(4727, 12, false);
#line 93 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                                                                            Write(c.SubAccount);

#line default
#line hidden
            EndContext();
            BeginContext(4739, 97, true);
            WriteLiteral("</strong></td>\r\n                            <td><strong style=\"font-size:10px;font-style:normal\">");
            EndContext();
            BeginContext(4837, 12, false);
#line 94 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                                                                            Write(c.GroupingID);

#line default
#line hidden
            EndContext();
            BeginContext(4849, 180, true);
            WriteLiteral("</strong></td>\r\n\r\n\r\n                            <td style=\"text-align:right\">\r\n                                <strong style=\"font-size:10px;font-style:normal;text-align:center\">\r\n");
            EndContext();
#line 99 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                                     if (c.TotalDebitAmount == 0) { }
                                    else
                                    {

                                        

#line default
#line hidden
            BeginContext(5224, 41, false);
#line 103 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                                   Write(String.Format("{0:N}",c.TotalDebitAmount));

#line default
#line hidden
            EndContext();
            BeginContext(5265, 22, true);
            WriteLiteral(" <c>&nbsp;&nbsp;</c>\r\n");
            EndContext();
#line 104 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"

                                    }

#line default
#line hidden
            BeginContext(5328, 238, true);
            WriteLiteral("                                </strong>\r\n                            </td>\r\n                            <td style=\"text-align:right\">\r\n                                <strong style=\"font-size:10px;font-style:normal;text-align:center\">\r\n");
            EndContext();
#line 110 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                                     if (c.TotalCreditAmount == 0) { }
                                    else
                                    {

                                        

#line default
#line hidden
            BeginContext(5762, 42, false);
#line 114 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                                   Write(String.Format("{0:N}",c.TotalCreditAmount));

#line default
#line hidden
            EndContext();
            BeginContext(5804, 22, true);
            WriteLiteral(" <c>&nbsp;&nbsp;</c>\r\n");
            EndContext();
#line 115 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                                        ;
                                    }

#line default
#line hidden
            BeginContext(5908, 333, true);
            WriteLiteral(@"                                </strong>
                            </td>

                            <td style=""text-align:right"">
                                <strong style=""font-size:10px;font-style:normal;text-align:center"">
                                    <c>&nbsp;&nbsp;</c>
                                    ");
            EndContext();
            BeginContext(6242, 77, false);
#line 123 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                               Write(String.Format("{0:N}", @Math.Abs(@c.TotalDebitAmount - @c.TotalCreditAmount)));

#line default
#line hidden
            EndContext();
            BeginContext(6319, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 124 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                                     if ((c.TotalDebitAmount - c.TotalCreditAmount) < 0)
                                    {

#line default
#line hidden
            BeginContext(6450, 51, true);
            WriteLiteral("                                        <b>Cr</b>\r\n");
            EndContext();
#line 127 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                                    }
                                    else
                                    {

#line default
#line hidden
            BeginContext(6621, 51, true);
            WriteLiteral("                                        <b>Dr</b>\r\n");
            EndContext();
#line 131 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                                        ;
                                    }

#line default
#line hidden
            BeginContext(6754, 111, true);
            WriteLiteral("                                </strong>\r\n                            </td>\r\n\r\n                        </tr>\r\n");
            EndContext();
#line 137 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"

                    }

#line default
#line hidden
#line 138 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                     


                }

#line default
#line hidden
#line 142 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                 foreach (var d in Model.Details.Where(i => i.GroupingID == 3))
                {

#line default
#line hidden
            BeginContext(7013, 119, true);
            WriteLiteral("                    <tr>\r\n                        <td><strong style=\"font-size:12px;font-weight:800;font-style:normal\">");
            EndContext();
            BeginContext(7133, 13, false);
#line 145 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                                                                                        Write(d.AccountHead);

#line default
#line hidden
            EndContext();
            BeginContext(7146, 109, true);
            WriteLiteral("</strong></td>\r\n                        <td><strong style=\"font-size:10px;font-weight:800;font-style:normal\">");
            EndContext();
            BeginContext(7256, 12, false);
#line 146 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                                                                                        Write(d.SubAccount);

#line default
#line hidden
            EndContext();
            BeginContext(7268, 109, true);
            WriteLiteral("</strong></td>\r\n                        <td><strong style=\"font-size:10px;font-weight:800;font-style:normal\">");
            EndContext();
            BeginContext(7378, 12, false);
#line 147 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                                                                                        Write(d.GroupingID);

#line default
#line hidden
            EndContext();
            BeginContext(7390, 186, true);
            WriteLiteral("</strong></td>\r\n\r\n                        <td style=\"text-align:right\">\r\n                            <strong style=\"font-size:12px;font-weight:800;font-style:normal;text-align:center\">\r\n");
            EndContext();
#line 151 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                                 if (d.TotalDebitAmount == 0) { }
                                else
                                {
                                    

#line default
#line hidden
            BeginContext(7753, 42, false);
#line 154 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                               Write(String.Format("{0:N}", d.TotalDebitAmount));

#line default
#line hidden
            EndContext();
#line 154 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                                                                               
                                }

#line default
#line hidden
            BeginContext(7832, 238, true);
            WriteLiteral("                            </strong>\r\n                        </td>\r\n                        <td style=\"text-align:right\">\r\n                            <strong style=\"font-size:12px;font-weight:800;font-style:normal;text-align:center\">\r\n");
            EndContext();
#line 160 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                                 if (d.TotalCreditAmount == 0) { }
                                else
                                {
                                    

#line default
#line hidden
            BeginContext(8248, 43, false);
#line 163 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                               Write(String.Format("{0:N}", d.TotalCreditAmount));

#line default
#line hidden
            EndContext();
#line 163 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                                                                                
                                }

#line default
#line hidden
            BeginContext(8328, 276, true);
            WriteLiteral(@"                            </strong>
                        </td>

                        <td style=""text-align:right"">
                            <strong style=""font-size:12px;font-style:normal;text-align:center"">
                                <c>&nbsp;&nbsp;</c> ");
            EndContext();
            BeginContext(8605, 77, false);
#line 170 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                                               Write(String.Format("{0:N}", @Math.Abs(@d.TotalDebitAmount - @d.TotalCreditAmount)));

#line default
#line hidden
            EndContext();
            BeginContext(8682, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 171 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                                 if ((d.TotalDebitAmount - d.TotalCreditAmount) < 0)
                                {

#line default
#line hidden
            BeginContext(8805, 47, true);
            WriteLiteral("                                    <b>Cr</b>\r\n");
            EndContext();
#line 174 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                                }
                                else
                                {

#line default
#line hidden
            BeginContext(8960, 47, true);
            WriteLiteral("                                    <b>Dr</b>\r\n");
            EndContext();
#line 178 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                                    ;
                                }

#line default
#line hidden
            BeginContext(9081, 99, true);
            WriteLiteral("                            </strong>\r\n                        </td>\r\n\r\n                    </tr>\r\n");
            EndContext();
#line 184 "C:\Users\anwar\source\repos\BitPro.SchoolMate\BitPro.SchoolMate\BitPro.SchoolMate.Web\Modules\Transactions\Reports\TrialBalance.cshtml"
                }

#line default
#line hidden
            BeginContext(9199, 80, true);
            WriteLiteral("                  \r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n\r\n\r\n\r\n");
            EndContext();
            BeginContext(10060, 12, true);
            WriteLiteral("</section>\r\n");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<BitPro.SchoolMate.Transactions.Pages.TrialBalanceReport.TrialBalanceViewtData> Html { get; private set; }
    }
}
#pragma warning restore 1591
