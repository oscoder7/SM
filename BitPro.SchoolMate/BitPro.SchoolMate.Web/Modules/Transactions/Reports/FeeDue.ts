declare var Morris: any;

namespace BitPro.SchoolMate {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.resizable()
    @Serenity.Decorators.maximizable()
    export class FeeDue extends Serenity.TemplatedDialog<any> {

        private areaChart: any;

        static initializePage() {
            $("#cboSelect").prop("selectedIndex", -1);
            function showPopup() {
               
            }
            $(function () {
                $('#btnPrint').prop('disabled', true);
                $('#btnPrint').click(function (e) {

                    //var headstr = "<html><head><title>Due Details</title></head><body>";
                    //var footstr = "</body>";
                    //var newstr = document.getElementById("pardiv").innerHTML;
                    //var oldstr = document.body.innerHTML;
                    //document.body.innerHTML = headstr + newstr + footstr;
                    //window.print();
                    //document.body.innerHTML = oldstr;
                    //return false;

                    //var divContents = document.getElementById("pardiv").innerHTML;
                    //var printWindow = window.open('', '', 'height=200,width=400');
                  
                    //printWindow.document.write('<html><head><title>DIV Contents</title>');
                    //printWindow.document.write('</head><body >');
                    //printWindow.document.write(divContents);
                    //printWindow.document.write('</body></html>');
                    //printWindow.document.close();
                    //printWindow.print();



                    var myDiv = document.getElementById('pardiv');
                    var newWindow = window.open('', 'SecondWindow', 'toolbar=0,stat=0');
                    var style = newWindow.document.createElement('link');
                    style.type = "text/css";
                    style.rel = "stylesheet";
                    style.href = "https://www.w3schools.com/w3css/4/w3.css";
                    style.media = "all";
                    newWindow.document.write("<html><body " +
                        "class='responsive light2012-home-switcher home switcher' " +
                        " önload='window.print()'>" +
                        myDiv.innerHTML +
                        "</body></html>");
                    newWindow.document.getElementsByTagName("head")[0].appendChild(style);
                    newWindow.document.close();
                });
                $('#cboSelect').change(function (e) {
                    var id = $("#cboSelect option:selected").val();
                    var a = "";
                     
                        Transactions.ReportEndPointService.CoursePromotionsByAcadamicYear({
                            acadamicyearid: id
                        }, response => {
                            response.forEach(function (value) {

                                a = a + "<option value='" + value.promotionid + "'>" + value.CousrseName + "</option>"
                            });
                            //var newDivhol = $('<div id="comboco"><label>Course</label><select id="cboSelectcourse" class="form-control select2" style="width:100%;"  onchange="getdat(this)">' + a + '</select></div>');
                            //$('#combo').append(newDivhol);
                                $("#cboSelectcourse").empty();
                                $("#cboSelectcourse").append(a);
                            $("#cboSelectcourse").prop("selectedIndex", -1);

                        });

                   var b = "";
                    Transactions.ReportEndPointService.TersmsByAcadamicYear({
                        acadamicyearid: id
                    }, response => {
                            b = b + "<option value='0'> --- Select-- - </option>";
                        response.forEach(function (value) {

                            b = b + "<option value='" + value.Id + "'>" + value.TermName + "</option>"
                        });
                        //var newDivhol = $('<div id="comboco"><label>Course</label><select id="cboSelectcourse" class="form-control select2" style="width:100%;"  onchange="getdat(this)">' + a + '</select></div>');
                        //$('#combo').append(newDivhol);
                            $("#cboSelectterm").empty();
                            $("#cboSelectterm").append(b);
                            $("#cboSelectterm").prop("selectedIndex", -1);

                    });
                })
                $('#btnAddtoList').click(function (e) {
                    $('#pardiv').empty();
                    var id = $("#cboSelectcourse option:selected").val();
                    var idterm = $("#cboSelectterm option:selected").val();
                    var allfee = $("#all").is(':checked');
                    var x = 0;
                    Transactions.ReportEndPointService.CourseFeePending({
                        courseid: id,
                        termid: idterm,
                        all:allfee
                    }, response => {

                            $('#btnPrint').prop('disabled', false);
                            response.forEach(function (value) {
                                var m = "";
                                var k = 0;
                                var message = "Dear " + value.student.FatherContactName + "  Please find below the fee due of your ward " + value.student.StudentContactName+" \n";
                                value.pendingfees.forEach(function (v2) {
                                    

                                    m = m + "<tr><td>" + v2.FeeCode + "</td><td>" + v2.TermName + "</td><td style='text-align: right;'>" + v2.FeeAmount.toFixed(3) + "</td></tr>";
                                    k = k + v2.FeeAmount;
                                    message = message + "" + v2.FeeCode + " " + v2.TermName + "  " + v2.FeeAmount.toFixed(3) +" \n ";
                                });
                                
                                m = m + "<tr bgcolor='#FF0000'><td>Total :</td><td></td><td style='text-align: right;'>" + k.toFixed(3) + "</td></tr>";
                                m = m + "<tr bgcolor='#FF0000'><td></td><td></td><td style='text-align: right;'><button class='whatappbutton' onclick='BitPro.SchoolMate.FeeDue.sendwhatsappmessage(`" + value.student.FatherContactWhatsapp + "`,`" + message + "`)' >" + "<img src='/Content/images/whatsapp.png'/></button></td></tr>";
                                var markdiv = $('<div class="col-md-6 card" style="padding:5px"><h1 align="center">' + value.student.Campus + '</h1><div align="center">' + value.student.CampusAddress + '<br>' + value.student.CampusPhone + '<hr style="border-top: 1px solid black;"><h4>Fee Due Receipt</h4>Dear <b>' + value.student.FatherContactName + ' </b> asslamu alikum<br>Please find below the fee due of your ward  <b>' + value.student.StudentContactName + ' </b><table class="w3-table-all"><thead><tr><th>Fee Name</th><th>Term Name</th><th style="text-align:right">Balance</th></tr></thead>' + m + '</table></div>');
                                $('#pardiv').append(markdiv);
                            });
                    }
                    );

                });





            })
        }
        static sendwhatsappmessage(number, message) {
            if ((number || "") != "") {
                Common.CommonService.SendWhatsappMessage({
                    Message: message,
                    PhoneNumber: number,
                }, response => {
                        if (response == true) {
                            Q.notifySuccess("Message Send Successfully");
                        }
                        else {
                            Q.notifyError("Error While Send Message");
                        }
                });
            }
            
        }
        static UpdateAll(list) {
            alert("sdc");
        }
        protected onDialogOpen() {
            super.onDialogOpen();
            
        }

        protected arrange() {
            super.arrange();
            this.areaChart && this.areaChart.redraw();
        }

        protected getTemplate() {
            // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
            return "<div id='~_Chart'></div>";
        }

        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Orders by Shipper';
            return opt;
        }
    }
}