declare var Morris: any;

namespace BitPro.SchoolMate {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.resizable()
    @Serenity.Decorators.maximizable()
    export class ProgressCard extends Serenity.TemplatedDialog<any> {

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

                    
                })
                $('#btnAddtoList').click(function (e) {
                    $('#pardiv').empty();
                    var id = $("#cboSelectcourse option:selected").val();
                    Transactions.ReportEndPointService.GetExamMarkByPromotion({
                        promotionid: id,
                    }, response => {
                         
                            $('#btnPrint').prop('disabled', false);

                            response.forEach(function (value) {
                                var m = "";
                                m = m + "<tr class='w3-grey'><th>Subject Name</th>";
                            var k = 0;
                            
                            
                            value.Exams.forEach(function (v2) {

                                m = m + "<th>" + v2.ExamName + "</th>";
                              
                            });
                                m = m + "</tr>";
                            var result = groupBy(value.Subjects, obj => obj.subjectid);
                            for (let key in result) {
                                m = m + "<tr><td>" + (result[key])[0].SubjectName + "</td>";
                                result[key].forEach(function (v2) {
                                    m = m + "<td>" + v2.Mark + "/" + v2.MaxMark +"</td>";
                                    var k = v2;
                                });
                                // Use `key` and `value`
                                m = m + "</tr>";
                            }
                            
                            //const keys = Object.caller(result);
                            value.Subjects.forEach(function (v2) {

                                

                            });
                                var markdiv = $('<div class="col-md-6 card" style="padding:5px"><h1 align="center">' + value.Campus + '</h1><div align="center">' + value.Address + '<br>' + value.Phone + '<hr style="border-top: 1px solid black;"><h4>Progress Card</h4></div><div align="left">Student : ' + value.student + '<br> Class : ' + value.CourseName + '</div><table class="w3-table-all">' + m + '</table><div align="right">' + value.FatherName +'<br><br>Signature</div></div>');
                            $('#pardiv').append(markdiv);
                        });
                    }
                    );

                });





            })
            function groupBy<T extends any, K extends keyof T>(array: T[], key: K | { (obj: T): string }): Record<string, T[]> {
                const keyFn = key instanceof Function ? key : (obj: T) => obj[key]
                return array.reduce(
                    (objectsByKeyValue, obj) => {
                        const value = keyFn(obj)
                        objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj)
                        return objectsByKeyValue
                    },
                    {} as Record<string, T[]>
                )
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